# Renew Medical Licence – production build

Production-ready front-end for the medical-licence renewal service, generated from `examples/build-renew-medical-licence/prototype-1-phone-first/iteration-3/index.html` via `/productionise`. Includes a comprehensive test suite – regression, accessibility, security, and load.

> This is the **front-end's contribution** to alpha-to-beta readiness. The backend, threat model, pen test, runbook, and operational readiness sit in parallel workstreams owned by the developer, the cyber engineer, and the delivery manager.

## What's here

```
production-renew-medical-licence/
├── README.md                          ← you are here
├── PRODUCTION-READINESS.md            ← assessment against Standards 5, 6, 11, 13
├── public/                            ← the deliverable HTML
│   ├── index.html                     ← /  – start page
│   ├── context.html                   ← /context
│   ├── id-lookup.html                 ← /id-lookup
│   ├── confirm-details.html           ← /confirm-details
│   ├── practice.html                  ← /practice
│   ├── cpd.html                       ← /cpd
│   ├── check.html                     ← /check
│   ├── payment.html                   ← /payment
│   ├── confirmation.html              ← /confirmation
│   └── assets/
│       ├── govbb.css                  ← shared stylesheet (linked, not inlined)
│       └── app.js                     ← minimal progressive enhancement
├── tests/
│   ├── e2e/                           ← Playwright regression tests
│   │   ├── happy-path.spec.ts
│   │   ├── abroad-path.spec.ts
│   │   └── error-states.spec.ts
│   ├── accessibility/
│   │   └── a11y.spec.ts               ← axe-core across every page, every state
│   ├── security/
│   │   ├── headers.spec.ts            ← Playwright header tests
│   │   └── headers.sh                 ← bash version for CI without a browser
│   └── load/
│       ├── peak.js                    ← k6 peak-load test (Oct–Dec profile)
│       └── soak.js                    ← k6 8-hour soak
├── scripts/
│   ├── serve.sh                       ← local server with the security headers set
│   ├── run-all.sh                     ← orchestrator
│   └── audit.sh                       ← static checks (no browser, no k6)
├── playwright.config.ts
└── package.json
```

## Quick start

```bash
# Install Playwright + axe-core
npm install
npx playwright install --with-deps

# Install k6 (one of:)
brew install k6                                    # macOS
sudo apt-get install k6                            # Ubuntu / Debian
# or use the Docker image: docker pull grafana/k6

# Serve and audit
npm run serve         # http://localhost:8080, with the security headers set
npm run audit         # static checks, no browser, no network

# Run the test categories
npm run test:e2e
npm run test:a11y
npm run test:security
npm run test:load:peak
npm run test:load:soak

# Everything
npm run test:all
```

## What's different from the alpha prototype

| Alpha prototype | Production build |
|---|---|
| `prototype-1-phone-first/iteration-3/index.html` – one file with all 9 pages | 9 separate HTML files, one per URL |
| Inline `<style>` block ~250 lines | Linked stylesheet at `assets/govbb.css` |
| `<button onclick="goTo('page-X')">` | `<a href="X.html">` or `<form action="X.html">` |
| JavaScript-driven navigation | Server-side navigation; JS as progressive enhancement only |
| `<aside id="assumptions">` listing 16 unverified items | **Removed** – production users never see this |
| `<div class="bimstack-banner">` | **Removed** |
| `<span class="fake-data">Dr. Sarah K. Williams</span>` | Plain `Dr. Sarah K. Williams` with HTML comments noting where templating would inject real values |
| No tests | 3 E2E specs, axe-core suite, security headers tests, 2 k6 load profiles, static audit |
| No build tooling | npm + Playwright + axe-core + k6 |

## What's not in this build (by design)

- No backend – Trident ID, the payment gateway, the Council register are mocked at the HTML level. The developer agent's job to wire them up.
- No CI config – the team picks GitHub Actions, GitLab CI, or similar. `scripts/run-all.sh` is the entry point.
- No deployment – hosting and infra is operational readiness.
- No bespoke chrome – the GovBB design system is the source of truth.
- No analytics yet – wire in once the back end is in place, with the cyber engineer's data-minimisation guidance.

See `PRODUCTION-READINESS.md` for the full Standards-anchored assessment and the recommended next steps.

## How the tests are organised

**E2E regression (Playwright)** – three specs covering the most common citizen journey, the most-different alternative path, and the error states. Tests use accessible selectors (role + name) so failures double as accessibility regressions.

**Accessibility (axe-core)** – one suite running WCAG 2.1 AA across every page in its default state, plus interactive states (each radio option, expanded disclosures). Anything below AA fails the build. Standard 3 floor.

**Security (Playwright + bash)** – header policy enforced: CSP, HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy. CSP forbids `unsafe-inline`. The bash script is for CI environments without a browser. Standard 11 front-end contribution.

**Load (k6)** – two profiles. Peak ramps to twice the expected Oct–Dec volume (Sandra Layne's account: ~70% of annual ~1,000 renewals concentrate Oct–Dec). Soak is 8 hours of moderate load to surface memory leaks, connection-pool exhaustion, response-time drift. Run against staging, never against production. Standard 5 and Standard 13.

## Where this fits in bimstack

```
brief → /discover → /build → /iterate (× N) → /productionise → /assess for beta gate → private beta → public beta → live
                                                  ↑                  ↑
                                               you are here     production folder       (this report feeds the assessment)
```

After this skill, the team:

1. Wires the suite into CI
2. Runs the full Playwright matrix against staging
3. Refreshes the threat model with `/threat-model`
4. Runs the k6 peak test against staging
5. Schedules the pen test
6. Runs `/assess for the beta gate` with the delivery manager – this report is the front-end evidence

## Licence and provenance

Generated by bimstack v0.1. MIT licensed. Built end-to-end from a brief through three iteration rounds and a productionise step using `/discover`, `/build`, `/iterate`, and `/productionise`.
