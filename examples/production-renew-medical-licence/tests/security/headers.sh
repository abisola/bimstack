#!/usr/bin/env bash
#
# Security headers check – CI-friendly, no browser required.
#
# Usage:  ./headers.sh https://renew.alpha.gov.bb
#         ./headers.sh                    # defaults to http://localhost:8080
#
# Exit non-zero if any required header is missing or below threshold.
#
# Standard 11 contribution. Full security readiness requires the pen test,
# threat model, and dependency scans (cyber-engineer agent owns these).

set -euo pipefail

URL="${1:-http://localhost:8080}"
EXIT_CODE=0

red()    { printf '\033[31m%s\033[0m\n' "$*"; }
green()  { printf '\033[32m%s\033[0m\n' "$*"; }
yellow() { printf '\033[33m%s\033[0m\n' "$*"; }

echo "Checking security headers on: $URL"
echo "---"

HEADERS=$(curl -sSL -I -o /dev/null -D - "$URL" || true)

require_header() {
  local name="$1"
  local pattern="$2"
  local value
  value=$(echo "$HEADERS" | grep -i "^$name:" | head -1 | sed -E "s/^[^:]+:\s*//" | tr -d '\r' || true)
  if [[ -z "$value" ]]; then
    red "MISSING  $name"
    EXIT_CODE=1
  elif [[ ! "$value" =~ $pattern ]]; then
    yellow "WEAK     $name = $value   (expected pattern: $pattern)"
    EXIT_CODE=1
  else
    green "OK       $name = $value"
  fi
}

require_header "Content-Security-Policy"     "default-src"
require_header "Strict-Transport-Security"   "max-age=([1-9][0-9]{7,})"  # >= 15M seconds
require_header "X-Content-Type-Options"      "^nosniff"
require_header "X-Frame-Options"             "^(DENY|SAMEORIGIN)$"
require_header "Referrer-Policy"             "(strict-origin-when-cross-origin|same-origin|no-referrer)"
require_header "Permissions-Policy"          "(geolocation|camera|microphone)"

# Disallow exposing server software
SERVER_HEADER=$(echo "$HEADERS" | grep -i "^Server:" | head -1 || true)
if [[ -n "$SERVER_HEADER" ]]; then
  if echo "$SERVER_HEADER" | grep -iqE "(apache|nginx)\/[0-9]"; then
    yellow "EXPOSED  $SERVER_HEADER"
    EXIT_CODE=1
  fi
fi

echo "---"
if [[ "$EXIT_CODE" -eq 0 ]]; then
  green "All required security headers present and within policy."
else
  red "Security header policy not met. See above."
fi
exit "$EXIT_CODE"
