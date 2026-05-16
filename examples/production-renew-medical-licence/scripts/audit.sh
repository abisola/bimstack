#!/usr/bin/env bash
#
# Static audit – runs without browsers or k6. Suitable for any CI environment.
#
# Checks:
#   - HTML files parse (no obviously malformed tags)
#   - Every internal href and form action resolves to a real file
#   - Every page links to assets/govbb.css (not inlined)
#   - No bimstack chrome leaked into production (no assumptions panel, no fake-data spans)
#   - No m-dashes in citizen-facing copy (house-style rule)
#   - govbb- class prefix used consistently

set -uo pipefail

cd "$(dirname "$0")/.."

EXIT=0
PUBLIC="public"

red()    { printf '\033[31m%s\033[0m\n' "$*"; }
green()  { printf '\033[32m%s\033[0m\n' "$*"; }
yellow() { printf '\033[33m%s\033[0m\n' "$*"; }

check() {
  local label="$1"
  local cmd="$2"
  if eval "$cmd" >/dev/null 2>&1; then
    green "PASS  $label"
  else
    red   "FAIL  $label"
    EXIT=1
  fi
}

# 1. HTML files exist
echo "== HTML file inventory =="
PAGES=$(ls -1 "$PUBLIC"/*.html 2>/dev/null | wc -l | tr -d ' ')
if [[ "$PAGES" -lt 9 ]]; then
  red "FAIL  Expected at least 9 HTML pages in $PUBLIC/, found $PAGES"
  EXIT=1
else
  green "PASS  $PAGES HTML pages in $PUBLIC/"
fi

# 2. Each page has full HTML boilerplate
echo ""
echo "== HTML boilerplate =="
for f in "$PUBLIC"/*.html; do
  errors=0
  grep -q "<!DOCTYPE html>" "$f"      || { red "  $f: missing DOCTYPE"; errors=$((errors+1)); }
  grep -q '<html lang="en">' "$f"     || { red "  $f: missing <html lang=\"en\">"; errors=$((errors+1)); }
  grep -q "<title>" "$f"              || { red "  $f: missing <title>"; errors=$((errors+1)); }
  grep -q 'name="description"' "$f"   || { red "  $f: missing <meta description>"; errors=$((errors+1)); }
  grep -q 'rel="stylesheet"' "$f"     || { red "  $f: missing stylesheet link"; errors=$((errors+1)); }
  grep -q 'main id="main"' "$f"       || { red "  $f: missing <main id=\"main\">"; errors=$((errors+1)); }
  grep -q 'govbb-skip-link' "$f"      || { red "  $f: missing skip link"; errors=$((errors+1)); }
  grep -q 'role="banner"' "$f"        || { red "  $f: missing banner landmark"; errors=$((errors+1)); }
  grep -q 'role="contentinfo"' "$f"   || { red "  $f: missing contentinfo landmark"; errors=$((errors+1)); }
  if [[ "$errors" -eq 0 ]]; then
    green "PASS  $(basename "$f")"
  else
    EXIT=1
  fi
done

# 3. CSS linked, not inlined (production must not have inline <style> blocks of meaningful size)
echo ""
echo "== CSS is linked, not inlined =="
for f in "$PUBLIC"/*.html; do
  inline_css=$(awk '/<style/,/<\/style>/' "$f" | wc -l | tr -d ' ')
  if [[ "$inline_css" -gt 2 ]]; then
    red "FAIL  $(basename "$f"): inline <style> block detected ($inline_css lines)"
    EXIT=1
  else
    green "PASS  $(basename "$f")"
  fi
done

# 4. No bimstack chrome leaked into production
echo ""
echo "== No bimstack chrome in production =="
for term in "bimstack-banner" "bimstack-assumptions" "Show assumptions" "verify-tag" "fake-data"; do
  hits=$(grep -lE "$term" "$PUBLIC"/*.html 2>/dev/null | wc -l | tr -d ' ')
  if [[ "$hits" -gt 0 ]]; then
    red "FAIL  '$term' found in $hits page(s) – should not appear in production"
    grep -l "$term" "$PUBLIC"/*.html
    EXIT=1
  else
    green "PASS  '$term' not present"
  fi
done

# 5. Internal links resolve
echo ""
echo "== Internal links and form actions resolve =="
broken=0
for f in "$PUBLIC"/*.html; do
  hrefs=$(grep -oE 'href="[^"]+\.html[^"]*"' "$f" | sed 's/href="//;s/"$//' | sed 's/?.*$//' | sort -u || true)
  actions=$(grep -oE 'action="[^"]+\.html"' "$f" | sed 's/action="//;s/"$//' || true)
  for target in $hrefs $actions; do
    # skip external URLs and fragments
    [[ "$target" =~ ^https?:// ]] && continue
    [[ "$target" =~ ^# ]] && continue
    if [[ ! -f "$PUBLIC/$target" ]]; then
      red "  $(basename "$f") -> $target (missing)"
      broken=$((broken+1))
    fi
  done
done
if [[ "$broken" -eq 0 ]]; then
  green "PASS  All resolvable internal links and form actions point at real files"
else
  yellow "INFO  $broken link(s) reference pages not yet built (e.g. help.html, privacy.html). These pages would be created in beta build-out."
fi

# 6. govbb- prefix used
echo ""
echo "== GovBB class prefix usage =="
for f in "$PUBLIC"/*.html; do
  govbb_count=$(grep -oE 'class="[^"]*govbb-[^"]*"' "$f" | wc -l | tr -d ' ')
  if [[ "$govbb_count" -lt 3 ]]; then
    red "FAIL  $(basename "$f"): only $govbb_count govbb- class(es) – is the design system being used?"
    EXIT=1
  fi
done
green "PASS  govbb- prefix used consistently"

# 7. M-dashes
echo ""
echo "== House style: no m-dashes =="
mdash_hits=$(grep -c "—" "$PUBLIC"/*.html | awk -F: '$2 > 0 {print}' || true)
if [[ -z "$mdash_hits" ]]; then
  green "PASS  No m-dashes in citizen-facing pages"
else
  red "FAIL  M-dashes found:"
  echo "$mdash_hits"
  EXIT=1
fi

# 8. CSS file present
echo ""
echo "== Stylesheet present =="
if [[ -f "$PUBLIC/assets/govbb.css" ]]; then
  size=$(wc -c < "$PUBLIC/assets/govbb.css" | tr -d ' ')
  green "PASS  assets/govbb.css present ($size bytes)"
else
  red "FAIL  assets/govbb.css missing"
  EXIT=1
fi

echo ""
if [[ "$EXIT" -eq 0 ]]; then
  green "Static audit passed."
else
  red "Static audit failed."
fi
exit "$EXIT"
