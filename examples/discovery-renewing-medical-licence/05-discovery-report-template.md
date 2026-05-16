# Discovery report – Renewing a medical licence

**Phase:** Discovery
**Dates:** [start] – [end]
**Team:** [names and roles]
**MDA:** Medical Council of Barbados, supported by the Ministry of Health and Wellness
**Sponsor:** [senior decision-maker]
**Status:** TEMPLATE. Fill in as the discovery runs. Do not publish until week 8.

---

## Executive summary

[Three to five sentences. The problem we explored. What we found. What we recommend. Written for the Registrar, the Permanent Secretary, and the CEO of GovTech Barbados to read in 90 seconds.]

## Recommendation

`Proceed to alpha` / `Redesign the problem and re-discover` / `Don't build`

[If proceed: scope, team, cost, timeline, risks for alpha. Specifically state which user needs the alpha will tackle first.]
[If redesign: what the new problem question should be, and why this one didn't survive contact with the evidence.]
[If don't build: why, and what should happen instead. A reuse opportunity? A policy change?]

---

## The problem (refined)

[The problem statement from week 0, refined by the evidence. Keep the structure: the user, the need, the current experience, what's wrong, why it matters, what good might look like, out of scope. Anything that was `[TO VERIFY]` is now either confirmed (with evidence) or removed.]

## What we did

| Activity | Volume | Where | Who |
|---|---|---|---|
| Doctor interviews | [n] | [locations] | [names] |
| Medical Council staff interviews | [n] | [locations] | [names] |
| Front-line shadow | [n] half-days | Medical Council | [names] |
| BAMP interview | [n] | [location] | [names] |
| Ministry / MIST interviews | [n] | [locations] | [names] |
| Existing-data review | n/a | [documents reviewed] | [names] |

> Standard 1 minimum is 5 doctor interviews. State the actual number and the categories covered.

## What we learned

### About the doctors

[Themes. Quotes. Numbers where available. Lead with the surprises. Cover at least: each category we spoke to; the time the renewal takes today; the moments of pain; the moments where the existing process is good and shouldn't be broken.]

### About the current journey

[A short narrative description plus a link to the current-state journey map. Where the journey breaks. What doctors work around. What the Council's process does well.]

### About the Medical Council's operation

[What we saw shadowing. Where staff time goes. The peak. The variation across categories. What the Council needs that they don't have today.]

### About the Ministry's need

[How the register is used downstream. What "real-time" would change. What stays the same.]

### About the technical landscape

[Trident ID feasibility for doctor identity. Payment gateway integration. The existing register's data model. The CPD evidence flow. Constraints. Reuse opportunities for Standard 7.]

## User needs (prioritised)

| # | As a … | I need to … | So that … | Evidence | Standards |
|---|---|---|---|---|---|
| 1 | doctor renewing my licence | renew without losing clinical time | I can keep seeing patients | [interview refs] | 1, 5 |
| 2 | doctor | know what's required before I start | I don't waste a trip | [interview refs] | 4, 5 |
| 3 | doctor | hand in my CPD evidence in the form I already have it | I'm not duplicating work | [interview refs] | 5, 7 |
| 4 | locum / overseas-trained doctor | renew from outside Barbados | I don't lose my registration while I'm on a rotation | [interview refs] | 3 |
| 5 | Medical Council officer | see all the evidence and the payment in one place | I can confirm or query without paper-chasing | [interview refs] | 5, 13 |
| … | … | … | … | … | … |

[Five to ten needs is the sweet spot. More than that and the discovery hasn't synthesised hard enough.]

## What we recommend

[Two to four candidate approaches to take into alpha. Multiple alphas, not one. Each with: the user needs it addresses, the trade-offs, what we'd learn from prototyping it.]

### Candidate alpha 1: [name]
[What it is, why it's worth prototyping, what we'd learn.]

### Candidate alpha 2: [name]
[Same.]

### Candidate alpha 3 (optional): [name]
[Same.]

## Risks for alpha

| Risk | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|
| Trident ID may not be the right citizen-identity fit for doctors | [H/M/L] | [H/M/L] | Brief MIST in week 1 of alpha; design a fallback | Developer |
| Multiple regulatory bodies (Medical Council, CAAM-HP) overlap | [H/M/L] | [H/M/L] | Bring both into the alpha kickoff | Delivery manager |
| Doctors' clinical time makes alpha recruitment hard | [H/M/L] | [H/M/L] | Lock in a paid-recruitment route via BAMP early | Service designer |
| CPD evidence is held in formats we can't yet parse digitally | [H/M/L] | [H/M/L] | Don't try to redesign CPD in alpha; accept evidence as upload | Service designer |
| Peak-period traffic is concentrated and may be larger than expected | [H/M/L] | [H/M/L] | Performance-test the alpha at twice the peak volume | Developer |

> Standard 11 risks called out separately if any surfaced – e.g. medical-data handling, register confidentiality.

## What this discovery did not cover

[Honest. What was deliberately out of scope, what couldn't be reached, what the next phase needs to pick up. Future discoveries needed.]

## Team and budget needed for alpha

[Specific.]

- **Team:** [list disciplines, FTE or part-time, named where possible]
- **Duration:** [weeks]
- **Budget:** [BBD figure]
- **Dependencies:** [Trident ID team availability, MIST sign-off, MDA capacity]

> Standard 2 – name the team. Standard 8 – name the sustainability beyond alpha.

---

## Standards self-assessment for the discovery phase

Use the `bimstack:service-standard-assessment` skill. Briefly here:

| Standard | Rating | Evidence pointer |
|---|---|---|
| 1 | [Met / Partly met / Not met] | [n] doctor interviews, journey map, user needs list |
| 2 | [Met / Partly met / Not met] | Team composition, MDA engagement |
| 3 | [Met / Partly met / Not met] | Under-represented voices included? |
| 4 | [Met / Partly met / Not met] | Plain-language report? |
| 5 | [Met / Partly met / Not met] | N/A – belongs in alpha onward, but flag relevant findings here |
| 6 | [Met / Partly met / Not met] | Tech landscape review done? |
| 7 | [Met / Partly met / Not met] | Reuse opportunities identified? |
| 8 | [Met / Partly met / Not met] | Plan for alpha includes the sustainability question? |
| 9 | [Met / Partly met / Not met] | Weeknotes published, show-and-tells held, repo open |
| 10 | [Met / Partly met / Not met] | Will be tested in alpha onward |
| 11 | [Met / Partly met / Not met] | Data-handling for the discovery itself; threat horizon for alpha |
| 12 | [Met / Partly met / Not met] | Findability of the future service flagged |
| 13 | [Met / Partly met / Not met] | Baseline metrics identified for alpha |

---

## Appendix

- A. Stakeholder map (final)
- B. Ecosystem map
- C. Current-state journey map (by doctor category)
- D. Anonymised interview transcripts and notes
- E. Existing-data analysis
- F. Shadow write-ups from the Medical Council
- G. Open RAID items
- H. Decisions taken during discovery (with ADR-style references)
