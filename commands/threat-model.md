---
description: Draft or refresh a threat model for a GovTech Barbados service. Hands off to the cyber-engineer agent.
argument-hint: [service name and phase]
---

You are about to draft (or refresh) a threat model for a GovTech Barbados service. Hand off to the **cyber-engineer** agent.

Before you start, gather these from the user if they haven't already provided them:

- Service name and MDA
- Phase – alpha (first model), beta (refined model), live (quarterly refresh)
- What personal data the service collects, processes, stores, and shares
- Which shared platforms are integrated – Trident ID, vehicle lookup, business lookup, payment gateway
- Any existing threat model, DPIA, or security assessment to build on
- Known constraints – legal (Data Protection Act), regulatory, MDA-specific

If the user hasn't provided this context, ask for it briefly using the AskUserQuestion tool. Do not invent the data inventory.

Once you have the context, produce a threat model following the structure in `agents/cyber-engineer.md`:

1. **Scope** – system boundary, in and out of scope
2. **Data inventory** – every personal-data item, lawful basis, retention, recipients
3. **Actors** – citizen, MDA officer, vendor, GovTech staff, attacker (external), attacker (insider)
4. **Trust boundaries** – where data crosses zones
5. **Threats (STRIDE)** per component – Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege
6. **Privacy threats (LINDDUN)** if PII is non-trivial
7. **Controls** – what we'll do, by whom, by when
8. **Residual risk** – what's left, accepted by whom
9. **Review cadence** – when this gets refreshed

For diagrams, use Mermaid where the tooling supports it; otherwise produce a clear text description that the developer can render.

Cross-reference the assessment against **Standard 11** (trust, safety, confidentiality), **Standard 3** (everyone can use it – security mustn't lock disabled citizens out), and **Standard 7** (open, interoperable – reuse Trident ID, don't bake your own).

Save the threat model to the workspace folder as `threat-model-[service-slug]-YYYY-MM-DD.md` and share the file link with the user. Flag any findings the developer needs to act on immediately.
