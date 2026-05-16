---
name: discovery-kit
description: Plan and produce the core deliverables of a discovery phase – problem statement, stakeholder map, research plan, interview guide, ecosystem map, current-state journey, and the discovery report itself. Use when starting a discovery, scoping one, or wrapping one up. Triggers on "discovery", "starting a discovery", "problem statement", "discovery report", "discovery plan", "scope a discovery", "discovery kickoff".
---

# Discovery Kit

This skill scaffolds the artefacts a GovTech Barbados discovery produces. It supports Barbados Digital Service Standard 1 (meet user needs) and Standard 2 (multidisciplinary team), and GOV.UK Principle 1 (start with user needs) and Principle 7 (understand context).

A discovery isn't a build. It's a structured way to find out whether to build, and if so, what to build for whom. Typical duration: 6 to 12 weeks. Output: a problem statement, a prioritised list of user needs, and a recommendation – proceed, redesign, or stop.

For the phase model, read `references/gds-way-phases.md`.

---

## When to use this skill

- The MDA has asked for a new service and the team needs to scope a discovery
- A discovery is starting and the team wants the standard kit ready
- A discovery is ending and the team needs the discovery report
- The team is unsure whether they're in discovery or alpha (often a sign discovery hasn't finished)

---

## The kit

These are the seven artefacts a discovery should produce. Use the templates below as starting points.

| Artefact | Purpose | When |
|---|---|---|
| Problem statement | A single page naming the user need in citizen language | Drafted in week 1, refined throughout |
| Stakeholder map | Everyone with skin in the game – MDA, citizens, partner agencies, oversight | Week 1 |
| Research plan | How we'll learn from users – who, where, when, what | Week 1, revised as we go |
| Interview guide | The actual questions for user interviews | Before fieldwork starts |
| Ecosystem map | Actors, channels, systems and how they relate | Week 2–4 |
| Current-state journey | What citizens do today, step by step | Week 2–6 |
| Discovery report | The thing the MDA reads to make a decision | Last 2 weeks of discovery |

For ecosystem maps, defer to `service-design:ecosystem-map`. For current-state journeys, defer to `service-design:journey-map`. For research planning, defer to `design:user-research`. For synthesis, defer to `design:research-synthesis`. This skill provides the connective tissue and the report shape.

---

## Templates

### 1. Problem statement

One page. Maximum.

```markdown
# Problem statement – [working title]

## The user

[Who has the problem? Be specific – which citizens, in what situation. Avoid "all Barbadians".]

## The need

[What are they trying to do? In their words, not in MDA words. Verb-led.]

## The current experience

[How does it work today? One paragraph.]

## What's wrong with the current experience

[Three to five bullets, evidence-led. Not "it's slow" – "it takes 4 weeks on average, our front-line team says 60% need to come in person more than once".]

## Why it matters

[Who is affected, how often, with what consequence. Numbers if you have them.]

## What "good" might look like

[A short, deliberately vague vision. Specific enough to be evaluable, vague enough not to predetermine the solution.]

## Out of scope

[What this problem statement explicitly doesn't cover. Often the most useful section.]
```

### 2. Stakeholder map

```markdown
# Stakeholder map – [service name]

## Citizens and groups affected

| Group | Estimated size | How affected | Currently engaged? | Notes |
|---|---|---|---|---|

## MDA

| Role | Name | Decision-making power | Engagement level | Notes |
|---|---|---|---|---|

## Other government

| MDA / function | Connection | Owner | Engagement level |
|---|---|---|---|

## Outside government

| Org / individual | Connection | Engagement level |
|---|---|---|

## Senior decision-makers

[Names. Reachable how often. Last time engaged. Standard 2.]
```

### 3. Research plan

```markdown
# User research plan – [service name]

## Research question

[One question. The thing we're trying to learn.]

## Sub-questions

[Two to five.]

## Method mix

| Method | Why | How many | Where | Who runs it |
|---|---|---|---|---|
| Semi-structured interviews | … | 8–12 | In citizens' homes / on the bus / at the parish office | Service designer + content designer |
| Front-line shadow | … | 3 half-days | Licensing office, Bridgetown | Service designer |
| Existing-data review | … | n/a | Analytics, support tickets | Delivery manager + developer |

## Recruitment

[Who we'll recruit. How. What we'll pay. Civil society partners. Under-represented groups.]

## Timeline

| Week | Activity |
|---|---|

## Outputs

[What we'll have at the end – transcripts, themes, user needs, prioritised list.]

## Ethics and consent

[Plain-language consent. Anonymisation. Data retention. Standard 11.]
```

### 4. Interview guide

```markdown
# Interview guide – [topic]

## Before we start

- Thank for time
- Explain what we're doing and why
- Consent: record audio? Use quotes anonymously? Stop any time?

## Warm-up (5 minutes)

- Tell us about a typical week for you
- Tell us about the last time you needed to [the broader life context]

## Core questions (30 minutes)

- Tell us about the last time you [did the thing this service is about]
- Walk us through what happened, step by step
- What was hardest? What was easiest?
- What did you wish was different?
- What workaround do you use today?

## Specific probes

[3–6 prompts you'll use to dig deeper based on what they say.]

## Close (5 minutes)

- Is there anything we didn't ask that we should have?
- Anyone else we should talk to?
- Thanks. Next steps. Compensation.
```

### 5. Discovery report

The artefact the MDA reads. Use this structure.

```markdown
# Discovery report – [service name]

**Phase:** Discovery
**Dates:** [start] – [end]
**Team:** [names and roles]
**MDA:** [Ministry, Department, Agency]
**Sponsor:** [senior decision-maker]

---

## Executive summary

[Three to five sentences. The problem we explored. What we found. What we recommend.]

## Recommendation

Proceed to alpha / Redesign the problem and re-discover / Don't build

[If proceed: scope, team, cost, timeline, risks for alpha.]
[If redesign: what the new problem question should be.]
[If don't build: why, and what should happen instead.]

---

## The problem

[The refined problem statement. The user need in citizen language. The current journey, with citizen quotes.]

## What we did

| Activity | Volume | Where | Who |
|---|---|---|---|
| Citizen interviews | 14 | Bridgetown, Holetown, St Philip | Service designer + content designer |
| Front-line shadow | 3 half-days | Licensing office | Service designer |
| Stakeholder interviews | 11 | MDA, MIST, civil society | Delivery manager |
| Existing-data review | n/a | Service analytics, support log | Developer |

## What we learned

### About the citizens
[Themes. Quotes. Numbers where you have them.]

### About the current journey
[Where it breaks. What citizens work around.]

### About the MDA's operation
[What's actually happening backstage. Constraints we found.]

### About the technical landscape
[Existing systems. Shared platforms we could reuse – Standard 7. Constraints.]

## User needs (prioritised)

| # | As a … | I need to … | So that … | Evidence | Standards relevant |
|---|---|---|---|---|---|

## What we recommend

[Two to four candidate approaches to take into alpha. Multiple alphas, not one. Trade-offs named.]

## Risks for alpha

[Top 5 risks with mitigations. Standard 11 risks called out.]

## What this discovery did not cover

[Honest. Future discoveries needed.]

## Team and budget needed for alpha

[Specific. Standard 2.]

---

## Appendix

- Stakeholder map
- Ecosystem map
- Current-state journey
- Interview transcripts (links, anonymised)
- Existing-data analysis
- Standards self-assessment for the discovery phase (using `service-standard-assessment` skill)
```

---

## What makes a good discovery

- **It changes someone's mind.** If the discovery report says exactly what the MDA expected at the start, it probably wasn't a discovery.
- **It quotes citizens by name** (anonymised where needed) **and by situation.** Not summary platitudes.
- **It names the existing platforms we could reuse.** Standard 7 starts in discovery.
- **It recommends multiple alphas where the question is genuinely open.**
- **It says "don't build" where that's the right answer.** Discoveries that always recommend building aren't discoveries.

---

## When to stop a discovery early

- The MDA already knows what to build and the user need is well-evidenced from existing data. Move to alpha.
- The user need is being met fine today by another channel and the digital service would duplicate. Stop. Standard 7.
- The political mandate has changed. Pause, regroup.

When you stop a discovery early, write a short note explaining why. Standard 9.
