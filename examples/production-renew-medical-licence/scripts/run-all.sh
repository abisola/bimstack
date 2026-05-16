#!/usr/bin/env bash
#
# Run the full test suite: static audit + Playwright (E2E, a11y, security) + load.
# Exit non-zero if any category fails.
#
# Usage:
#   ./scripts/run-all.sh                 # all categories
#   ./scripts/run-all.sh --skip-load     # skip k6 (CI default for PRs)
#   ./scripts/run-all.sh --only static   # one category only

set -uo pipefail

cd "$(dirname "$0")/.."

SKIP_LOAD=0
ONLY=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --skip-load) SKIP_LOAD=1; shift ;;
    --only) ONLY="$2"; shift 2 ;;
    *) echo "Unknown flag: $1"; exit 2 ;;
  esac
done

green()  { printf '\033[32m%s\033[0m\n' "$*"; }
red()    { printf '\033[31m%s\033[0m\n' "$*"; }
yellow() { printf '\033[33m%s\033[0m\n' "$*"; }
section(){ printf '\n\033[1;34m== %s ==\033[0m\n' "$*"; }

mkdir -p reports
EXIT=0

run() {
  local label="$1"
  shift
  if [[ -n "$ONLY" && "$ONLY" != "$label" ]]; then return; fi
  section "$label"
  if "$@"; then
    green "$label PASSED"
  else
    red "$label FAILED"
    EXIT=1
  fi
}

run "static"        ./scripts/audit.sh

# Tests below require a running server. Playwright starts one via webServer
# config; the security shell test depends on it too.
if [[ "$SKIP_LOAD" -eq 0 ]]; then
  run "e2e"         npx playwright test tests/e2e
  run "a11y"        npx playwright test tests/accessibility
  run "security"    npx playwright test tests/security
  run "headers.sh"  ./tests/security/headers.sh
  if command -v k6 >/dev/null 2>&1; then
    run "load:peak" k6 run --quiet tests/load/peak.js
  else
    yellow "k6 not installed; skipping load tests. Install: https://k6.io/docs/getting-started/installation/"
  fi
else
  yellow "Skipping load tests (--skip-load)"
  run "e2e"         npx playwright test tests/e2e
  run "a11y"        npx playwright test tests/accessibility
  run "security"    npx playwright test tests/security
  run "headers.sh"  ./tests/security/headers.sh
fi

section "Summary"
if [[ "$EXIT" -eq 0 ]]; then
  green "All test categories passed."
else
  red "One or more test categories failed. See output above and reports/ for details."
fi
exit "$EXIT"
