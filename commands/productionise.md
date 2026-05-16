---
description: Take a chosen prototype iteration and produce a production-ready front-end – per-page HTML, the GovBB stylesheet linked, the bimstack chrome stripped, plus a comprehensive test suite (E2E regression, accessibility, security, load).
argument-hint: [path to the chosen iteration, e.g. examples/build-renew-medical-licence/prototype-1-phone-first/iteration-3]
---

You are about to take a validated prototype iteration and produce its production-ready front-end with a comprehensive test suite. Hand off to the **developer** agent (for HTML, tests, configuration) and the **cyber-engineer** agent (for security tests, headers, CSP), using the **bimstack:build-for-production** skill. The **content-designer** agent reviews the per-page output for plain language and accessibility. The **delivery-manager** agent compiles the PRODUCTION-READINESS report.

Before you start, gather these from the user if they haven't already provided them:

- Which iteration is the chosen one (path to its HTML file)
- The MDA the service belongs to
- Whether the service has a backend chosen and where it'll be deployed (affects load test thresholds and security headers)
- Any departures from the skill's defaults the team wants (different test tool, custom load profile, server-rendered templating, etc.)

If the user hasn't provided this context, ask for it briefly using the AskUserQuestion tool. Refuse if the iteration hasn't been through at least one round of user testing – `/bimstack:productionise` commits a prototype as the chosen path; doing that before testing is premature.

Once you have the context, the skill produces (in a `production-[service-slug]/` folder):

1. **Per-page HTML files** with proper URLs, real navigation, the published GovBB stylesheet linked, the assumptions panel and mock markers stripped
2. **The test suite** – Playwright E2E regression (3 specs), axe-core accessibility, security headers + CSP, k6 load tests (peak and soak)
3. **Configuration** – playwright.config.ts, package.json with npm scripts
4. **Scripts** – serve.sh, run-all.sh, audit.sh
5. **PRODUCTION-READINESS.md** – assessed against Standards 5, 6, 11, 13 with each Met / Partly met / Not met, with evidence

Run what's runnable in the current environment: HTML validation, link integrity, design-system class usage. For the parts that need full tool installation (Playwright browsers, k6 binary, OWASP ZAP), the report explicitly says "requires CI environment with these tools installed" with the exact commands.

After generation, share the production folder via a computer:// link. Highlight any Standards still at Partly met or Not met, and name the next-step owner (cyber engineer for the threat-model gap, developer for the backend wiring, delivery manager for operational readiness).

Flag explicitly: this skill produces the **front-end's half** of beta-readiness. The backend, the pen test, the runbook, and the operational readiness are separate workflows owned by other agents and other commands (`/bimstack:threat-model`, `/bimstack:assess`).
