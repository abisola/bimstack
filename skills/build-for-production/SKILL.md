---
name: build-for-production
description: Take a validated prototype iteration and produce a production-ready front-end – per-page HTML files, the published GovBB stylesheet linked (not inlined), the assumptions panel and mock markers stripped, plus a comprehensive test suite (E2E regression, accessibility, security, load). Use when an alpha prototype has earned its place through testing and the team is moving toward beta. Triggers on "/productionise", "build for production", "harden this prototype", "alpha to beta", "production readiness", "regression tests", "load test the service".
---

# Build for production

This skill is the bridge between a validated alpha prototype and the front-end of a beta service. It takes the prototype the team has chosen to take forward (typically after three or four iteration rounds with users), and produces:

1. **Per-page HTML files** with proper URLs, real navigation (links and forms, not JS state), the published GovBB stylesheet linked rather than inlined, the bimstack assumptions panel and mock-data markers stripped.
2. **A comprehensive test suite** – E2E regression (Playwright), accessibility (axe-core), security (headers, CSP, basic OWASP checks), and load (k6).
3. **A runner** that orchestrates the suite locally and in CI.
4. **A production-readiness report** assessed against Standards 5 (works first time), 6 (right tools), 11 (trust, safety), and 13 (monitor and measure).

It supports the transition from Barbados Digital Service Standards alpha to beta. It explicitly does **not** make the service production-ready end to end – the backend, the integrations, the threat model, the runbook, and the operational readiness are owned by the developer, the cyber engineer, and the delivery manager via other parts of bimstack. This skill is the front-end's half of beta-readiness.

For the larger workflow, read `PLAYBOOK.md` – the *alpha to beta transition* section.

---

## When to use

- The team has run 3+ rounds of testing on a prototype and one candidate has emerged
- The standards self-assessment for the alpha-to-beta gate is being prepared and needs evidence on Standards 5, 6, 11, 13
- The team is ready to ship private beta and needs production-grade front-end code
- A vendor or external developer is about to pick the work up and the prototype is being handed over

**Do not use this skill** if:

- The prototype hasn't been tested with users yet (run `/iterate` rounds first)
- The team is still comparing prototypes (this commits one prototype as the chosen path)
- The backend isn't yet decided (the test suite assumes a backend; if it's not designed yet, the load tests can't be meaningful)

---

## What this skill produces

For each run, a folder containing:

```
production-[service-slug]/
├── README.md                          ← how to run everything
├── PRODUCTION-READINESS.md            ← assessed against Standards 5, 6, 11, 13
├── public/                            ← the deliverable HTML
│   ├── index.html                     ← redirects to /start
│   ├── start.html
│   ├── context.html
│   ├── [other-pages].html
│   └── assets/
│       └── govbb.css                  ← the shared stylesheet (linked, not inlined)
├── tests/
│   ├── e2e/                           ← Playwright regression tests
│   │   ├── happy-path.spec.ts
│   │   ├── abroad-path.spec.ts
│   │   └── error-states.spec.ts
│   ├── accessibility/
│   │   └── a11y.spec.ts               ← axe-core across every page, every state
│   ├── security/
│   │   ├── headers.spec.ts            ← CSP, HSTS, X-Frame-Options, X-Content-Type-Options
│   │   └── headers.sh                 ← runnable bash check for CI
│   └── load/
│       ├── peak.js                    ← k6 peak-load test (matches Oct–Dec volumes)
│       └── soak.js                    ← k6 8-hour soak test
├── scripts/
│   ├── serve.sh                       ← local server for testing
│   ├── run-all.sh                     ← orchestrator
│   └── audit.sh                       ← static checks (HTML validity, link integrity, design-system class usage)
├── playwright.config.ts
└── package.json
```

---

## The HTML transformation

The single-file prototype becomes a multi-file site. Specifically:

| Before (prototype) | After (production) |
|---|---|
| `<section id="page-start" class="page page--active">...</section>` (one of many in one file) | `start.html` – its own file with full `<!DOCTYPE html>` boilerplate |
| `<button onclick="goTo('page-id-lookup')">Start now</button>` | `<a href="/id-lookup" class="govbb-btn">Start now</a>` – a real link |
| `<button onclick="this.parentElement.querySelector(...).select()">Yes that's me</button>` | `<form method="POST" action="/api/confirm-details">` with proper inputs |
| Inline `<style>` block ~1000 lines | `<link rel="stylesheet" href="/assets/govbb.css">` |
| `<aside id="assumptions" class="bimstack-assumptions">…` | **Removed.** Production users never see this. |
| `<span class="fake-data">Dr. Sarah K. Williams</span>` | `<span data-source="trident-id">{{ user.name }}</span>` (or the equivalent for whichever templating layer is chosen) |
| JS-driven navigation | Server-side navigation; JS only as progressive enhancement |
| `<div class="bimstack-banner">` | **Removed.** Production users never see this. |

The production HTML is **progressive enhancement**: every flow works without JavaScript. JS adds polish (animations, immediate validation feedback) but never gates the journey.

---

## The test suite – what it covers

### Regression (Playwright)

Three default specs, customised per service:

- `happy-path.spec.ts` – the most common citizen journey, end to end
- `abroad-path.spec.ts` – the most-different alternative path (if the service has one; otherwise an edge case)
- `error-states.spec.ts` – validation failures, network failures, session timeout, expired payment

Each test:
- Starts at the entry URL
- Walks the journey using accessible selectors (role, label, text – not classes or IDs)
- Asserts on what the citizen sees, not on implementation
- Includes an accessibility snapshot at each step

### Accessibility (axe-core)

A single suite that visits every page in every state (happy, error, completed) and runs axe with WCAG 2.1 AA rules. Standard 3 floor. Anything below AA fails the build.

### Security

Two parts:

- A Playwright test for security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- A bash script for headless checks that runs in CI without a browser

These cover the front-end's contribution. **The full security testing for beta** requires the cyber engineer's pen test, dependency scans, SAST/DAST, and the threat model refresh – all separate workflows. This skill produces the front-end-specific tests only.

### Load (k6)

Two profiles:

- `peak.js` – ramps to twice the expected peak. For a renewal service, peak is Oct–Dec at ~70% of annual volume. The test runs against a staging environment, not production.
- `soak.js` – sustained moderate load for 8 hours to surface memory leaks, connection-pool exhaustion, and gradual degradation.

Thresholds (defaults; tune per service):
- P95 response time under 500ms
- Error rate under 1%
- No more than 0.5% of requests timing out

If thresholds fail, the beta gate is not met for Standard 5 (works first time).

---

## What this skill does and doesn't do

### Does

- Splits the chosen prototype iteration into per-page HTML
- Strips alpha-only chrome (bimstack banner, assumptions panel, mock markers)
- Links to the published GovBB stylesheet instead of inlining
- Generates the four test categories above
- Writes a runnable orchestrator
- Produces a production-readiness report against the relevant Standards

### Does not

- **Write the backend.** Trident ID integration, payment gateway calls, the Council's review queue, session management – these are the developer's responsibility, designed in ADRs and built in beta.
- **Run the pen test.** That's the cyber engineer's job, with an external supplier, before public beta.
- **Configure CI/CD.** The team picks the platform (GitHub Actions, GitLab CI, etc.) and wires the runner script in.
- **Deploy the service.** Hosting and deployment is part of beta operational readiness.
- **Replace the threat model.** The security tests in this skill cover the front end. The threat model covers the whole system.

---

## How the skill runs

When invoked, the skill:

1. **Reads the chosen iteration** – e.g. `prototype-1-phone-first/iteration-3/index.html`
2. **Asks the user** which iteration is the chosen one if it isn't obvious (don't guess)
3. **Splits the HTML** into per-page files, mapping each `.page` section to its own `.html`
4. **Extracts the inline CSS** into `public/assets/govbb.css` (with a comment about swapping for the published `@govtech-bb/styles` CDN when MIST confirms the URL)
5. **Rewires navigation** – `onclick` becomes `<a href>` or `<form action>`; JS state becomes server-side navigation
6. **Strips alpha-only markup** – assumptions panel out, bimstack banner out, fake-data markers replaced with semantic placeholders
7. **Generates the test suite** based on the journey it just split
8. **Writes the scripts and config**
9. **Runs the static checks** – HTML validity, link integrity (do internal links resolve?), design-system class usage (are we using `govbb-` consistently?)
10. **Attempts to run the dynamic tests** if the environment has the tooling; otherwise reports what would happen
11. **Writes PRODUCTION-READINESS.md** with the assessment

The skill calls into the developer agent for technical decisions and the cyber engineer agent for the security tests.

---

## Standards anchors

Every output cites the standards it serves.

- **Standard 5 (works first time):** the regression suite and the peak-load test
- **Standard 6 (right tools, right technology):** the technology choices (Playwright, k6, axe-core) are mainstream, well-supported, easy to find skills for
- **Standard 11 (trust, safety, confidentiality):** the security tests (headers, CSP); the threat model is handled by the cyber engineer in parallel
- **Standard 13 (monitor, manage, measure performance):** the load tests establish the baseline performance characteristics; the four GDS metrics are wired into the production HTML

The assessment in PRODUCTION-READINESS.md walks all 13 standards, but these four are where this skill carries the most weight.

---

## Defaults this skill is opinionated about

Document any departure as an ADR.

| Question | Default | Why |
|---|---|---|
| E2E tool | Playwright | Modern, fast, supports accessibility tests natively |
| Accessibility tool | axe-core via Playwright | Industry standard, WCAG 2.1 AA coverage |
| Load tool | k6 | Code-driven, modern, free; scales to peak Bajan volumes easily |
| Security tool (front-end) | Bespoke header tests + OWASP ZAP config | Headers are the front-end's job; ZAP for DAST in CI |
| Test naming | Behaviour-led (`doctor renews their licence end-to-end`) | Reads like documentation; Standard 4 in tests too |
| Selectors | Role + accessible name | Tests fail when accessibility breaks – two birds |
| HTML approach | Server-rendered or static; JS as progressive enhancement | Standard 3 (everyone can use it – including no-JS contexts) |
| CSS approach | Linked stylesheet, not inlined | Standard 6 (sustainable; shared with other services) |
| Form method | POST to a real endpoint | Standard 11 (state-changing requests are POST, never GET) |
| Error pattern | Error summary at top + inline error, with `aria-invalid` and `aria-describedby` | GovBB design system; Standard 3 + 5 |

---

## When the team should override

These are the cases where the team should *not* use this skill's defaults:

- **The MDA has an existing test-tooling investment** that's well-supported in Barbados. Use that.
- **The service is so simple a full Playwright suite is overkill.** A shorter checklist may be more honest.
- **The service needs server-rendered templating** (e.g. Express + EJS, Flask + Jinja). The skill produces static HTML; the team will adapt it.
- **The load profile is genuinely different.** Renewal services peak Oct–Dec; a birth-registration service has different curves. The k6 thresholds need tuning.

---

## What a successful run looks like

By the end of the skill's run, the team should have:

- A `public/` folder they can serve with a one-line static server, and the journey works end-to-end without JavaScript
- A `tests/` folder that runs locally with `npm test`
- A `PRODUCTION-READINESS.md` with each Standard marked Met / Partly met / Not met, with evidence
- A clear next-step list: what the cyber engineer needs to do, what the developer needs to wire up to the backend, what the delivery manager needs to set up for operational readiness

If the report has `Not met` for Standards 5, 6, 11, or 13, the team is not ready for the beta gate. Standard 11 is the most common reason – the front-end can pass and the backend can still fail. That's a `/threat-model` and pen-test conversation, not a `/productionise` retry.
