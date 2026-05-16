# Test plan – Renew medical licence build

How to put the three prototypes in front of citizens and turn the assumptions panel into evidence.

## Goal of this round

Decide which of the three hypotheses (Phone-first, Hospital-mediated, Hybrid assisted) is worth refining toward a beta candidate – and what each prototype is missing.

We are **not picking a winner** in round 1. We're learning where each candidate breaks.

## Method

| Method | Why | How many | Where |
|---|---|---|---|
| Moderated 1:1 sessions, on the doctor's own phone | Closest to real conditions; tests connectivity and device | 18 doctors total | A mix: hospital break-out rooms (with the doctor's permission), doctors' own clinics, video for those off-island |
| Comparative – each doctor sees 2 of the 3 prototypes | Catches relative preferences without exhausting any one doctor | – | – |
| Same fake citizen (Dr. Sarah K. Williams) across prototypes | Like-for-like comparison; reduces variance | – | – |

Session length: 45 minutes. Don't go over. A tired participant is not a participant.

## Cohort plan

18 sessions, distributed to surface the trade-offs the three hypotheses make.

| Cohort | Sessions | Why |
|---|---|---|
| Public-hospital GP / consultant (QEH or similar) | 6 | The cohort Prototype 2 is built for; biggest single segment |
| Private-practice GP | 4 | Standard 3 stress test – does Prototype 2 leave them behind? |
| Polyclinic doctor | 2 | Public-employed but smaller institution; tests Prototype 2's assumptions about HR maturity |
| Specialist (any setting) | 2 | Specialist CPD is the largest known gap |
| Locum / short-rotation doctor | 2 | Edge case for all three; Standard 3 |
| Doctor 55+ or self-identifies as low confidence with technology | 2 | Standard 3 – the hardest test for Prototype 1, the strongest case for Prototype 3 |

If a recruitment route fails (e.g. specialists aren't available in week 1), the delivery manager rebalances. Don't skip the cohort – delay the round until it's covered.

## Recruitment

| Cohort | Route | Honorarium |
|---|---|---|
| Public hospital | BAMP + hospital HR, with the Council's blessing | BBD 250 paid to the doctor or to a charity of their choice |
| Private practice | BAMP + direct outreach via specialist colleges | BBD 250 |
| Polyclinic | Polyclinic HR with the Council's blessing | BBD 250 |
| Specialists | BAMP specialist sections | BBD 250 |
| Locums | Hospital rotation coordinators | BBD 250 |
| Older / lower-confidence | BAMP, with explicit ask in the call for volunteers | BBD 250 |

> Standard 3 – we will specifically seek doctors who don't normally volunteer for research. If they're hard to find, that itself is a finding.

## Which prototypes each doctor sees

Rotate to balance order effects. Every prototype gets seen ~12 times.

| Doctor # | First prototype | Second prototype |
|---|---|---|
| 1 | P1 | P2 |
| 2 | P2 | P3 |
| 3 | P3 | P1 |
| 4 | P1 | P3 |
| 5 | P2 | P1 |
| 6 | P3 | P2 |
| 7–18 | (repeat the cycle) | – |

## Session script (45 minutes)

| Minutes | Activity |
|---|---|
| 0–5 | Welcome, consent, what we're doing, the doctor's role |
| 5–10 | Warm-up: how did your last renewal actually go? |
| 10–22 | Prototype A: walk through end to end, thinking aloud. Researcher does not lead. Researcher takes notes on every hesitation, scroll-back, sigh, and surprise. |
| 22–25 | Quick reactions to A: what worked, what didn't, would you use it? |
| 25–37 | Prototype B: same approach |
| 37–40 | Quick reactions to B |
| 40–45 | Comparative: of the two you saw, which felt more like your working life, and why? Close. |

## What to record

For each session, write up:

- Anonymous participant ID, category, brief context (parish, years registered, type of practice)
- For each prototype: 5–10 verbatim quotes, the journey as the doctor described it, every place they paused or asked a question
- 3–5 surprises
- The comparative reaction at the end
- Any assumption from the prototype's panel that the doctor moved (confirmed, contradicted, or sharpened)

The researcher does not synthesise during the session. Synthesis happens in week 2 across all sessions.

## What good signal looks like

Per prototype, by the end of the round:

| Prototype | What "ready to iterate" looks like | What "back to discovery" looks like |
|---|---|---|
| **P1 Phone-first** | At least 4 of 12 unaided completions on a phone; at least 2 cohorts represented; specific drop-off points identified | <2 unaided completions; consistent confusion at the first 3 pages |
| **P2 Hospital-bulk** | Public-hospital doctors complete in under 3 minutes; private doctors don't feel rejected; HR-data trust is plausibly resolvable | Doctors don't trust the HR record at all; or private doctors feel excluded with no fix in sight |
| **P3 Hybrid** | Older/lower-confidence cohort uses the assisted path easily; younger doctors don't feel the choice is patronising | Either path feels like the "real" route and the other feels punitive |

These are **directional**, not pass/fail. The team uses them as a frame for the synthesis.

## Synthesis

At the end of fieldwork (week 2 of the round), the service designer leads a synthesis session with the team.

For each prototype:
- Which assumptions are now confirmed, contradicted, or sharpened?
- What are the strongest user quotes?
- What is the biggest unaddressed issue?
- What single change would make the most difference?

Output: feedback files per prototype, ready for `/bimstack:iterate`.

## After the round

Run `/bimstack:iterate prototype-1`, `/bimstack:iterate prototype-2`, `/bimstack:iterate prototype-3` (only on the prototypes still worth iterating). Each invocation takes the feedback file and produces the next version.

Then schedule round 2. By round 3, the team should have enough evidence to recommend one path into beta.

## Ethics and consent

- **Plain-language consent** read aloud and given on paper. Record audio (not video). Recordings encrypted, retained 90 days, then destroyed. Anonymised quotes only.
- **Right to withdraw** at any time, before or after publication. Their data is destroyed if asked.
- **Sensitive material** – if a doctor surfaces a regulatory or patient-safety concern, stop recording and route via the Registrar. This is not an investigation.
- **Standard 11** – the consent text itself is plain language, not legalese.

## Budget rough cut

| Item | BBD |
|---|---|
| 18 sessions × honorarium | 4,500 |
| Travel and venue (parish visits, hospital break-out hire) | 1,000 |
| Transcription / synthesis tooling | 500 |
| Recruitment incentive to BAMP for facilitating | 1,000 |
| **Round 1 total** | **~7,000** |

Round 2 typically half this. Round 3 again half. The team budgets for three rounds at the start of the alpha.

## Standards relevant to this test plan

- **Standard 1** (meet user needs) – the entire plan is built around hearing the doctor's lived experience
- **Standard 3** (everyone can use it) – cohort plan deliberately overweights edge cases
- **Standard 9** (open and transparent) – findings published; participants told what we'll do with their input
- **Standard 11** (trust, safety, confidentiality) – consent, anonymisation, data retention all plain and revocable
