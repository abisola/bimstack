# Production-readiness report – Renew medical licence (front-end)

**Generated:** 2026-05-16
**Skill:** `bimstack:build-for-production` via `/bimstack:productionise`
**Source iteration:** `examples/build-renew-medical-licence/prototype-1-phone-first/iteration-3/index.html`
**Target phase gate:** Alpha → Beta

> This report covers the **front-end's contribution** to the alpha-to-beta gate. The backend, threat model, pen test, dependency scans, operational readiness, and the SLA negotiation with the Medical Council are owned by the developer, the cyber engineer, and the delivery manager via other parts of bimstack. Standards 5, 6, 11, and 13 are where this report carries the most weight; the others are scaffolded for the wider beta-gate assessment.

## Headline

The front-end is **substantially ready** for private beta. Static checks pass; security headers pass against a live local server; the test suite is in place. Full Playwright and k6 runs require a CI environment with browser binaries and the k6 binary installed – these are not in this generation environment but the test code is ready and runnable.

**Recommended action:** wire the test suite into CI (GitHub Actions or GitLab CI), run the full Playwright matrix and k6 peak test in a staging environment, then proceed to the formal Standards self-assessment with the delivery manager.

## What's in this build

```
public/                    ← 9 HTML pages + shared CSS + minimal app.js
tests/e2e/                 ← 3 Playwright specs covering happy path, abroad context, error states
tests/accessibility/       ← axe-core suite across every page in every state
tests/security/            ← Playwright header tests + a bash script for CI without a browser
tests/load/                ← k6 peak (Oct–Dec profile) and 8-hour soak tests
scripts/                   ← serve, run-all, static audit
playwright.config.ts       ← 5-project matrix (Chromium, Firefox, WebKit, mobile Chrome, mobile Safari)
package.json               ← npm scripts for everything
```

## Standards assessment

### Standard 5 – Works first time

**Rating:** Partly met with a plan.

**Evidence:**
- Per-page HTML with proper URLs, semantic landmarks, and skip-to-main-content links
- Forms have `required`, `pattern`, `autocomplete`, and `aria-describedby` set correctly
- Each form action points at the next page; the journey works without JavaScript
- The Playwright happy-path spec walks the journey end to end with accessible selectors
- Validation pattern uses the GovBB error-summary-at-top + inline pattern (server-rendered in production)

**Outstanding:**
- Server-side validation needs to mirror the client patterns when the back end is wired up
- The CPD upload still uses a single GET form action for the static demo; production needs proper multipart POST with progress reporting
- The address-override flow is currently a placeholder link – needs the actual screens in iteration 4

**Next action:** developer agent wires up server-side handlers per ADR-008.

### Standard 6 – Right tools and technology

**Rating:** Met.

**Evidence:**
- Vanilla HTML + CSS with progressive-enhancement JS – no heavy frameworks, no build step required
- Stylesheet linked from `assets/govbb.css`; not inlined; placeholder for the published `@govtech-bb/styles` CDN
- Playwright + axe-core + k6 are mainstream open-source tools, well-supported, easy to find skills for in the Caribbean tech market
- All `govbb-` design-system classes used; no Tailwind, no bespoke colours
- Static audit confirmed CSS not inlined in any of the 9 pages

**Outstanding:**
- Publish the design system to a CDN MIST can endorse, then swap the local CSS link for the CDN

### Standard 11 – Trust, safety, confidentiality

**Rating:** Partly met with a plan.

**Evidence (front-end half):**
- ✅ **Content-Security-Policy** – `default-src 'self'` with explicit allow-lists for Google Fonts only
- ✅ **Strict-Transport-Security** – `max-age=31536000; includeSubDomains` (1 year)
- ✅ **X-Content-Type-Options** – `nosniff`
- ✅ **X-Frame-Options** – `DENY`
- ✅ **Referrer-Policy** – `strict-origin-when-cross-origin`
- ✅ **Permissions-Policy** – `geolocation=(), camera=(), microphone=()`
- ✅ CSP forbids `unsafe-inline` for scripts
- ✅ All security headers test passed against a live local server (see `tests/security/headers.sh` output)
- ✅ Minimal JS uses `addEventListener`, no inline event handlers – CSP-compatible

**Outstanding (full Standard 11):**
- **Pen test required before public beta** – cyber engineer to plan, external supplier to execute
- **Threat model refresh required** – the production form actions and the new address-override flow touch data flows that the iteration-3 threat model didn't cover
- **Dependency scanning** – wire into CI with the cyber engineer's policy
- **Cookie security** – when the back end is wired and sets cookies, the existing Playwright test will check Secure / HttpOnly / SameSite
- **DPIA** – with the Council's DPO before public beta

**Next action:** cyber-engineer agent refresh threat model and plan pen test. `/bimstack:threat-model` for the refresh.

### Standard 13 – Monitor, manage, measure performance

**Rating:** Partly met with a plan.

**Evidence:**
- Load tests written: `tests/load/peak.js` matches the Oct–Dec peak profile (~70% of annual volume in three months, doubled for headroom) and `tests/load/soak.js` is an 8-hour drift test
- Custom metrics in k6: page-load trend, error rate, completed journeys
- Thresholds: P95 under 500ms, error rate under 1%
- HTML pages structured so the four GDS baseline metrics (digital take-up, completion rate, cost per transaction, user satisfaction) can be wired in once the back end is in place

**Outstanding:**
- Analytics not yet implemented – needs a privacy-preserving wiring (probably Plausible or a self-hosted equivalent) per cyber engineer's data-minimisation guidance
- k6 binary not installed in the generation environment – the tests are written but require a real CI run against a staging environment for evidence

**Next action:** developer + delivery-manager to wire metrics. Schedule the k6 peak run against staging before private beta closes.

---

## Test results from this run

### Static audit – PASS

| Check | Result |
|---|---|
| 9 HTML pages produced | ✅ PASS |
| HTML boilerplate (DOCTYPE, lang, title, description, stylesheet, main, skip link, landmarks) on every page | ✅ PASS – all 9 pages |
| CSS linked not inlined | ✅ PASS – all 9 pages |
| No bimstack chrome in production (no banner, no assumptions panel, no fake-data spans, no Show-assumptions button, no verify-tag) | ✅ PASS – 5 of 5 forbidden terms absent |
| govbb- design-system class prefix used consistently | ✅ PASS |
| No m-dashes (house-style rule) | ✅ PASS – 0 found across 9 pages |
| Stylesheet present | ✅ PASS – `assets/govbb.css` (13KB) |
| Internal links and form actions resolve | ⚠️ 50 references to ancillary pages (help, privacy, accessibility, contact, feedback, address-override, etc.) – flagged as INFO because these are beta build-out items, not regressions |

### Security headers – PASS (against live local server)

All 6 required headers present and within policy:

```
OK  Content-Security-Policy
OK  Strict-Transport-Security  (max-age=31536000; includeSubDomains)
OK  X-Content-Type-Options     (nosniff)
OK  X-Frame-Options            (DENY)
OK  Referrer-Policy            (strict-origin-when-cross-origin)
OK  Permissions-Policy         (geolocation=(), camera=(), microphone=())
```

### Test code – PASS

All TypeScript test files passed `tsc` syntax check (with import resolution skipped – that runs in CI where `npm install` has completed). All k6 JavaScript test files passed Node's `--check` parser.

### Requires CI environment

| Test category | Why this generation environment can't run it | What CI needs |
|---|---|---|
| Playwright E2E | Browser binaries (Chromium, Firefox, WebKit) not installed | `npx playwright install --with-deps` |
| Axe accessibility | Same – needs Playwright + axe-core npm package | `npm install` + `npx playwright install` |
| k6 load tests | k6 binary not installed | `apt-get install k6` or the official Docker image |
| OWASP ZAP DAST | ZAP not installed; needs network access to the staging service | The cyber engineer's pen-test workflow |

Each of these is a single CI step. The test code is ready; the runner script (`scripts/run-all.sh`) orchestrates everything once the binaries are present.

---

## Where the rest of beta readiness lives

Front-end readiness is a slice of beta readiness. The other slices, owned by other bimstack agents and commands:

| Workstream | Owner | bimstack tool |
|---|---|---|
| Backend architecture and ADRs | developer | direct invocation |
| Trident ID integration | developer + MIST briefing | direct invocation |
| Payment gateway integration | developer + MIST briefing | direct invocation |
| Council review backstage interface | **needs its own `/bimstack:build` track** – brief from `feedback-round-2.md` round-2 transcript with Sandra Layne | `/bimstack:build` |
| Threat model refresh | cyber engineer | `/bimstack:threat-model` |
| Pen test plan and execution | cyber engineer + external supplier | direct invocation |
| DPIA | cyber engineer + Medical Council DPO | direct invocation |
| Incident runbook | cyber engineer + delivery manager | direct invocation |
| Operational readiness | delivery manager | direct invocation |
| Analytics wiring (4 GDS metrics) | developer + delivery manager | direct invocation |
| Standards self-assessment | delivery manager (orchestrating all agents) | `/bimstack:assess` |
| Phase gate | delivery manager | `/bimstack:assess` |

The Standards self-assessment (`/bimstack:assess for the beta gate`) is the formal moment where this report's `Partly met with a plan` ratings get either evidence to become `Met`, or a documented reason to remain partly met.

---

## Recommendation

**Proceed with conditions:**

1. **Wire the test suite into CI** before private beta opens to citizens. Required.
2. **Run the full Playwright matrix against staging** (5 device profiles). Required for Standards 3 and 5.
3. **Run the k6 peak load test against staging** (twice expected Oct–Dec volume). Required for Standards 5 and 13.
4. **Refresh the threat model** to cover the production form actions and the address-override flow. Required for Standard 11.
5. **Pen test plan signed off** before public beta. Cyber engineer owns; external supplier executes.
6. **Council backstage interface** scoped as a parallel `/bimstack:build` track. Not blocking for private beta if Sandra and one or two officers can review applications manually; blocking for public beta.

If conditions 1–4 are met, the team is ready for private beta on the front end. Conditions 5–6 must be met before public beta.

---

## What this skill explicitly did not do

For honesty, the things this report does *not* speak to:

- The backend code – not in scope; developer agent
- Backend security – pen test, dependency scans, secrets management
- The CI configuration – the team picks GitHub Actions, GitLab CI, or similar
- Deployment and hosting – part of operational readiness
- The Council's review interface – its own workstream
- Privacy notice content – content & interaction designer + cyber engineer
- The four GDS metrics actually being collected – requires the backend
- Incident response readiness – delivery manager + cyber engineer
