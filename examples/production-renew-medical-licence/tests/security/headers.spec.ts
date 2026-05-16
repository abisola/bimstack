/**
 * Security headers – the front-end's contribution to Standard 11
 *
 * Tests that the server returns the security headers GovTech Barbados policy
 * requires. The thresholds match modern web security guidance and OWASP
 * Secure Headers project recommendations.
 *
 * This is the front-end's contribution to Standard 11 (trust, safety,
 * confidentiality). Full beta security readiness also requires:
 *   - Pen test (cyber engineer + external supplier)
 *   - Dependency scan (SAST/DAST in CI)
 *   - Threat model refresh
 *   - DPIA where personal data is non-trivial
 *
 * Run against a server – not against file:// URLs.
 *
 * Anchors: Standard 11
 */

import { test, expect } from '@playwright/test';

const requiredHeaders = {
  'content-security-policy': /default-src/,
  'strict-transport-security': /max-age=\d+/,
  'x-content-type-options': /^nosniff$/,
  'x-frame-options': /^(DENY|SAMEORIGIN)$/i,
  'referrer-policy': /strict-origin-when-cross-origin|same-origin|no-referrer/,
  'permissions-policy': /geolocation|camera|microphone/,
};

test.describe('Security headers – Standard 11', () => {
  test('Index page returns the required security headers', async ({ request }) => {
    const response = await request.get('/');
    expect(response.status()).toBe(200);

    for (const [header, pattern] of Object.entries(requiredHeaders)) {
      const value = response.headers()[header];
      expect(value, `Missing header: ${header}`).toBeTruthy();
      expect(value, `Header ${header} = "${value}" did not match ${pattern}`).toMatch(pattern);
    }
  });

  test('CSP forbids unsafe-inline scripts', async ({ request }) => {
    const response = await request.get('/');
    const csp = response.headers()['content-security-policy'] ?? '';
    expect(csp, 'CSP should not allow unsafe-inline scripts').not.toMatch(/script-src[^;]*unsafe-inline/);
    expect(csp, 'CSP should not allow unsafe-eval').not.toMatch(/unsafe-eval/);
  });

  test('HSTS includes a meaningful max-age', async ({ request }) => {
    const response = await request.get('/');
    const hsts = response.headers()['strict-transport-security'] ?? '';
    const match = hsts.match(/max-age=(\d+)/);
    expect(match, 'HSTS max-age missing').toBeTruthy();
    if (match) {
      const maxAge = parseInt(match[1], 10);
      // 6 months is the minimum for preload; 12 months is industry default
      expect(maxAge).toBeGreaterThanOrEqual(15768000);
    }
  });

  test('Cookies set during the journey are Secure and HttpOnly', async ({ request }) => {
    const response = await request.get('/');
    const cookies = response.headersArray().filter(h => h.name.toLowerCase() === 'set-cookie');
    for (const cookie of cookies) {
      const value = cookie.value;
      expect(value, `Cookie missing Secure flag: ${value}`).toMatch(/Secure/i);
      expect(value, `Cookie missing HttpOnly flag: ${value}`).toMatch(/HttpOnly/i);
      expect(value, `Cookie missing SameSite=Lax|Strict: ${value}`).toMatch(/SameSite=(Lax|Strict)/i);
    }
  });
});
