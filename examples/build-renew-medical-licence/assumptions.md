# Consolidated assumptions – Renew medical licence build

Every assumption across the three prototypes, in one place. Each tagged with how it will be validated. Each linked to the prototype(s) it appears in and the Standards it affects.

| Tag | Meaning | Default validation method |
|---|---|---|
| `[VERIFY WITH USERS]` | Needs a citizen (doctor) to confirm | User testing sessions |
| `[VERIFY WITH MDA]` | Needs an MDA conversation to confirm | Direct briefing with Medical Council / MoHW |
| `[VERIFY WITH MIST]` | Needs the platform team to confirm | Direct briefing with MIST |
| `[VERIFY WITH POLICY]` | Needs a legal or regulatory check | Brief with Council legal / DPO |
| `[VERIFY WITH DATA]` | Needs analytics or operational data | Existing-data review |
| `[KNOWN GAP]` | The team knows this isn't right yet | Backlog for next iteration |

## Assumptions by prototype

### Prototype 1 – Phone-first individual renewal (14 assumptions)

| # | Assumption | Tag | Prototypes | Standards |
|---|---|---|---|---|
| 1.1 | Doctors will trust a Trident ID lookup to fetch their licence details | `[VERIFY WITH USERS]` | P1, P3 | 7, 11 |
| 1.2 | A 10-minute end-to-end flow on a phone is realistic in a doctor's working day | `[VERIFY WITH USERS]` | P1, P3 | 5 |
| 1.3 | "Save and come back later" reduces abandonment for doctors interrupted by clinical work | `[VERIFY WITH USERS]` | P1, P3 | 5 |
| 1.4 | Plain-language labels feel respectful, not patronising | `[VERIFY WITH USERS]` | All | 4 |
| 1.5 | The Council can accept CPD evidence as a single PDF or photo upload | `[VERIFY WITH MDA]` | P1, P3 | 5, 7 |
| 1.6 | 40 hours is the correct minimum CPD requirement | `[VERIFY WITH MDA]` | P1, P3 | 4 |
| 1.7 | Renewal fee is BBD 200 across all categories | `[VERIFY WITH MDA]` | P1, P3 | – |
| 1.8 | Five working days is a realistic certificate SLA | `[VERIFY WITH DATA]` | P1, P3 | 5, 13 |
| 1.9 | Trident ID returns the fields shown on the Confirm page | `[VERIFY WITH MIST]` | P1, P2, P3 | 7 |
| 1.10 | Trident ID returns medical-licence registration data, or a separate Council register call is needed | `[VERIFY WITH MIST]` | All | 7 |
| 1.11 | The shared payment gateway supports BBD 200 with success webhooks | `[VERIFY WITH MIST]` | P1, P3 | 7 |
| 1.12 | Specialist CPD (RCS, RCP) representation in the upload step | `[KNOWN GAP]` | All | – |
| 1.13 | Doctors can legally complete the renewal entirely digitally – no wet signature | `[VERIFY WITH POLICY]` | All | 11 |
| 1.14 | Personal data flow between Trident ID, Council, and payment gateway is permitted under the DPA | `[VERIFY WITH POLICY]` | All | 11 |

### Prototype 2 – Hospital-mediated bulk renewal (15 assumptions)

| # | Assumption | Tag | Prototypes | Standards |
|---|---|---|---|---|
| 2.1 | Doctors trust the hospital's HR record as regulatory primary | `[VERIFY WITH USERS]` | P2 | 11 |
| 2.2 | A "single tap to confirm" feels reassuring, not flippant | `[VERIFY WITH USERS]` | P2 | 4, 11 |
| 2.3 | Doctors want the hospital paying the fee from a CPD allowance | `[VERIFY WITH USERS]` | P2 | – |
| 2.4 | The "specialist CPD I haven't told the hospital about" addition is discoverable | `[VERIFY WITH USERS]` | P2 | 5 |
| 2.5 | The Council will accept hospital HR records as a primary data source | `[VERIFY WITH MDA]` | P2 | 7 |
| 2.6 | QEH HR holds CPD hours in a form regulatorily complete | `[VERIFY WITH MDA]` | P2 | – |
| 2.7 | Bulk renewal payments from a hospital CPD allowance are permitted under current finance rules | `[VERIFY WITH MDA]` | P2 | – |
| 2.8 | An integration with QEH HR can be built without bespoke ETL per hospital | `[VERIFY WITH MIST]` | P2 | 7 |
| 2.9 | Fraction of doctors employed by a public institution that could pre-fill | `[VERIFY WITH DATA]` | P2 | 3 |
| 2.10 | Private-practice doctors don't feel second-class when sent to the individual flow | `[VERIFY WITH USERS]` | P2 | 3 |
| 2.11 | Locums and overseas-rotation doctors aren't worse off than today | `[VERIFY WITH USERS]` | P2 | 3 |
| 2.12 | Specialist colleges (RCP, RCS, AAFP) data flow | `[KNOWN GAP]` | P2 | – |
| 2.13 | Legal "declaration of fitness to practise" can be made via a digital confirmation | `[VERIFY WITH POLICY]` | P2 | 11 |
| 2.14 | A hospital can act as a fiduciary in submitting a doctor's regulatory renewal | `[VERIFY WITH POLICY]` | P2 | 11 |
| 2.15 | Data sharing between QEH HR, Council, and Trident ID is permitted under the DPA | `[VERIFY WITH POLICY]` | P2 | 11 |

### Prototype 3 – Hybrid assisted-digital (13 assumptions)

| # | Assumption | Tag | Prototypes | Standards |
|---|---|---|---|---|
| 3.1 | Doctors who choose assisted-digital don't feel relegated | `[VERIFY WITH USERS]` | P3 | 3, 4 |
| 3.2 | The two paths read as equivalent | `[VERIFY WITH USERS]` | P3 | 3 |
| 3.3 | Older / less-connected doctors find the appointment route easy to discover | `[VERIFY WITH USERS]` | P3 | 3 |
| 3.4 | "Get help instead" at every online step is reassuring not confusing | `[VERIFY WITH USERS]` | P3 | 5 |
| 3.5 | The Council can offer 30-min booked slots at scale, including peak | `[VERIFY WITH MDA]` | P3 | 8 |
| 3.6 | Council officers are happy as the assisted-digital channel | `[VERIFY WITH MDA]` | P3 | 2 |
| 3.7 | Booking can be wired to the Council's rota and physical space | `[VERIFY WITH MDA]` | P3 | – |
| 3.8 | Share of doctors today needing in-person help with the renewal | `[VERIFY WITH DATA]` | P3 | – |
| 3.9 | Appointment-booking pattern exists in design system or needs adding | `[VERIFY WITH MIST]` | P3 | 9 |
| 3.10 | SMS notifications via shared GovTech channel are available | `[VERIFY WITH MIST]` | P3 | 7 |
| 3.11 | Online-to-assisted hand-off (session state) | `[KNOWN GAP]` | P3 | 7 |
| 3.12 | Booking a slot doesn't create a regulatory expectation that the renewal will succeed | `[VERIFY WITH POLICY]` | P3 | 11 |
| 3.13 | Doctor data carried online→assisted is held legally for that purpose | `[VERIFY WITH POLICY]` | P3 | 11 |

## Cross-cutting themes

Three patterns the team should pull out of testing regardless of which prototype is chosen.

### Trust calibration
How much friction does the citizen want for a regulatory action? Prototype 2's single-tap may feel too light; Prototype 1's seven-page flow may feel too heavy. Truth is probably between them, and varies by category of doctor. (Standard 11, Standard 5)

### Institutional bias
Prototypes 2 and 3 both lean on institutions (hospital HR, Council bookable officers). This works for the median doctor but excludes the edges – locums, private practice, overseas-trained doctors mid-rotation. Standard 3 is most at risk here.

### CPD as the binding constraint
Every prototype hits the CPD evidence question and handles it differently. This is the single most variable part of doctors' lives – the renewal redesign may be a CPD-evidence redesign in disguise. (Standard 5, Standard 7)

## What's not in these prototypes (but should be in iterations)

Honest list of what we deliberately left out.

- Error states (validation failures, payment failures, expired session)
- The Trident ID "Something's wrong" remediation flow
- Renewal-from-abroad (overseas-trained doctors on rotation)
- Renewal-after-lapse (where the licence has already expired)
- Renewal-with-conditions (where the Council has placed a condition on the licence)
- Disciplinary state handling
- Multilingual support beyond English
- Screen-reader walkthrough (the prototypes are AA-ready in structure but not audited yet)
- Real session-state for "save and come back later"

Each of these should appear in the iteration backlog and be addressed by round 3 at the latest.

## How to validate efficiently

A practical recipe:

1. **Week 1:** test all three prototypes back-to-back with 4–6 doctors. Don't ask them to pick a winner. Ask what they did, what stopped them, what they wished was different.
2. **Week 2:** brief Trident ID team (MIST), the Medical Council, and Data Protection on the items that need them. Many of these can be parallel.
3. **Week 3:** existing-data review with the Council on volumes, peaks, current journey times, and the cohort split (public vs private practice).
4. **Week 4:** policy items – brief with the Council's legal counsel.
5. **Continuous:** `/iterate` after each round.

By the end of week 4, most assumptions should have moved to either confirmed-with-evidence or resolved-by-changing-the-design.
