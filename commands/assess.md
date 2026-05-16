---
description: Run a self-assessment against the 13 Barbados Digital Service Standards. Hands off to the delivery-manager agent and the service-standard-assessment skill.
argument-hint: [service name and phase being assessed for]
---

You are about to run a service-standard self-assessment for a GovTech Barbados service. Hand off to the **delivery-manager** agent, coordinated with the other bimstack agents per standard, using the **bimstack:service-standard-assessment** skill.

Before you start, gather these from the user if they haven't already provided them:

- Service name and MDA
- The phase being assessed for (alpha, beta, live)
- Where the evidence lives – team drive, repos, research notes, analytics dashboards, threat model
- Who's already given input and who still needs to

If the user hasn't provided this context, ask for it briefly using the AskUserQuestion tool. Do not invent evidence.

Once you have the context, walk through all 13 Barbados Digital Service Standards in order, using the template in `skills/service-standard-assessment/SKILL.md`. For each standard:

1. State the evidence (specific, with sources)
2. Rate it: `Met`, `Partly met with a plan`, `Not met`
3. Name the next action (owner, date)

Defer to the right agent for each standard:

| Standards | Primary agent |
|---|---|
| 1, 5, 10 | service-designer |
| 3, 4, 12 | content-designer |
| 2, 8, 9, 13 | delivery-manager |
| 5, 6, 7, 13 | developer |
| 11 | cyber-engineer |

End with a clear recommendation: Proceed / Proceed with conditions / Do not proceed. List the conditions with owners and dates.

Save the assessment to the workspace folder as `standards-assessment-[service-slug]-YYYY-MM-DD.md` and share the file link with the user.
