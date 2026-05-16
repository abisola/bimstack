#!/usr/bin/env bash
#
# Serve the public/ directory on localhost:8080 for testing.
# Adds the security headers the production server would also set, so the
# tests/security/headers.sh script and the Playwright security tests pass
# against the local dev server.
#
# Falls back from Python 3 to busybox httpd if Python isn't available.

set -euo pipefail

PORT="${PORT:-8080}"
DIR="$(cd "$(dirname "$0")/.." && pwd)/public"

if command -v python3 >/dev/null 2>&1; then
  echo "Serving $DIR on http://localhost:$PORT (Python 3 + security headers)"
  cd "$DIR"
  exec python3 - "$PORT" <<'PY'
import sys, http.server, socketserver

PORT = int(sys.argv[1])

class SecureHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Content-Security-Policy",
            "default-src 'self'; "
            "script-src 'self'; "
            "style-src 'self' https://fonts.googleapis.com; "
            "font-src 'self' https://fonts.gstatic.com; "
            "img-src 'self' data:; "
            "connect-src 'self'; "
            "frame-ancestors 'none'; "
            "base-uri 'self'; "
            "form-action 'self'")
        self.send_header("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("X-Frame-Options", "DENY")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        self.send_header("Permissions-Policy", "geolocation=(), camera=(), microphone=()")
        self.send_header("Server", "alpha.gov.bb")
        super().end_headers()

with socketserver.TCPServer(("", PORT), SecureHandler) as httpd:
    httpd.serve_forever()
PY
else
  echo "Python 3 not found. Falling back to busybox httpd – security headers will NOT be set."
  echo "Install Python 3 to test the security headers locally."
  cd "$DIR"
  exec busybox httpd -f -p "$PORT" -h "$DIR"
fi
