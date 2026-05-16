# Iteration 3 – Prototype 1 (Phone-first individual renewal)

**Round of feedback:** Transcript synthesis, 5 participants (4 doctors + 1 Medical Council administrator), 18–20 June 2026
**Feedback source:** Raw transcripts in `../transcripts-round-2/`, synthesised to `../feedback-round-2.md`
**Iterated by:** service-designer (synthesis) + content-designer + developer (iteration), via `/bimstack:iterate`
**Date:** 2026-06-22

## Summary

Round 2 was the round where the prototype's mental model broke and got rebuilt. The biggest finding was Sandra Layne's: there isn't *a doctor* – there are five registration categories. And the "Renewal complete" page was technically wrong; the doctor is *applying for* renewal, then the Council *reviews and approves*.

Six changes applied. Four deferred or rejected with reasoning. Five assumptions resolved from round 2. Five new assumptions surfaced.

This iteration is heavier than iteration 2 because the underlying domain model shifted. Round 3 should test whether the new shape holds up; we may need to simplify some of what was added if specialists or older doctors find it overwhelming.

---

## Critical changes applied

### Change 1 – Confirmation page recast: "Application sent" not "Renewal complete"

**Feedback that drove it:** Two participants independently flagged this. SL: *"Renewal isn't complete when the doctor pays. The doctor has applied for renewal."* AB: *"Have I actually renewed, or am I waiting for someone to say yes?"*

**What changed:** The Confirmation page now leads with "Application sent" (not "Renewal complete"). It includes a 3-step timeline:
1. ✓ Application sent (done)
2. (current) Council review – 1 to 5 working days
3. Renewal complete – we email your certificate

The Check Your Answers page also previews the same timeline before the doctor pays, so they aren't surprised at the end.

The whole page now sets a 7-working-day "if you haven't heard from us" trigger with a phone number.

**Standard:** 4 (simple, relatable language – the previous copy was misleading), 9 (open and transparent – the Council's involvement is now visible to the citizen).

### Change 2 – New "Where are you renewing from?" page

**Feedback that drove it:** JW: *"There isn't an option for 'abroad temporarily'."* MB: *"There isn't really an option for 'I'm retired but I still see a few people'."* Two doctors, two cohorts, same underlying gap.

**What changed:** A new page sits between the Start page and the Trident ID lookup. Three radio options:
- "I'm in Barbados, actively practising" (default)
- "I'm working abroad temporarily" – with a callout explaining the abroad-friendly flow
- "I'm retired or only practising occasionally" – with a warning callout that they may need a restricted-category registration, and a Council phone number to call before continuing if unsure

Each option reveals a contextual callout inline (no separate page yet, but the design hypothesis is testable).

The Check Your Answers page now shows the chosen context as the first row.

**Standard:** 3 (everyone can use it – three real cohorts are now first-class), 1 (meet user needs).

### Change 3 – Registration category visible on Confirm Details + per-category fee on Start

**Feedback that drove it:** SL: *"Five categories. Your form is the same form for everybody. That won't fly."* MB tried to use "More than one" as a fallback because the right category wasn't there.

**What changed:**
- The Trident ID confirmation card now shows the registration category prominently ("Full registration" as a coloured chip), and the per-category fee (BBD 200 for this category).
- The Start page's fee callout now reads "Renewal fee (full registration)" and explicitly notes the other four categories have different fees.
- The Confirm Details page's "Something not right?" alt-options block now includes "My registration category is wrong", routing to a Council escalation flow.
- The Check Your Answers page lists the category as its own row.

**Standard:** 1 (meet user needs – the five-category reality), 4 (simple, relatable language – names the category aloud), 7 (open, interoperable – the prototype now expects category data from Trident ID or the Council register).

---

## Important changes applied

### Change 4 – "What counts as CPD?" expanded to include overseas activity

**Feedback that drove it:** MA: *"What I don't see is overseas activity specifically. So if I tell you the AAP – American Academy – does that count?"*

**What changed:** The expandable list now includes a bullet "Overseas rotations, fellowships, and conferences – activity completed outside Barbados counts, including AAP / ACOG / European Society conferences". The specialty colleges line also calls out US and Caribbean colleges by name (RCP, RCS, RCOG, RCGP, AAFP, AAP, ACOG).

**Standard:** 1 (meet user needs), 4 (simple language – the citizen sees their own context named).

### Change 5 – Specialist CPD callout on the CPD page

**Feedback that drove it:** MA: *"MRCPCH says I need 50 hours of paediatric-specific CPD a year as part of my membership. The hospital training and the publications might not all be paediatric... So there's a hidden second standard here."*

**What changed:** A new gold-bordered callout titled "Specialists – check your College too" appears at the top of the CPD page. It names the common specialty qualifications (MRCPCH, MRCP, MRCS, FAAP, FACS, FRCS, FRCOG) and explicitly warns that filing the Council's 40-hour minimum does not automatically meet the College's requirement.

**Standard:** 1 (meet user needs – specialist cohort), 4 (plain language – names the failure mode aloud).

### Change 6 – Address-for-correspondence override on Confirm Details

**Feedback that drove it:** JW: *"My contact address in Trident ID is my Barbados address. I'm currently in London. Does it matter?"*

**What changed:** A new bordered callout on the Confirm Details page asks "Where should we send your certificate?", confirms the default email, and offers a "Use a different address" button for doctors who need to redirect during the renewal window.

**Standard:** 3 (everyone can use it – doctors abroad).

---

## Worth testing in round 3

- **The "Specialists – check your College too" callout actually nudges specialists to look up their College's requirement.** MA said he would; round 3 should test with specialists who haven't been primed.
- **The 3-step timeline reassures rather than alarms.** "1 to 5 working days" could read as "this might take 5 days, why is it so slow?" Worth a head-to-head with no-timeline copy.
- **The address-override CTA is discoverable.** It's a button inside a callout right now; could be missed.
- **The three context options on the new page.** Are three the right number? Should "specialty rotation in Barbados" be a fourth? Does "occasional" feel like the right word for semi-retired doctors?

Tag in the assumptions panel: `[VERIFY WITH USERS · round 3]`.

---

## Deferred

These came up in round 2 but are explicitly out of scope for iteration 3.

- **Hospital pre-fill of CPD records.** AB hoped the prototype had pulled her QEH record in. This is the territory of Prototype 2 (Hospital-mediated bulk renewal); don't fold it into Prototype 1.
- **Backstage Council interface (Sandra's queue).** SL: *"build me a screen too."* This is a parallel discovery and prototype track. Brief the service designer to scope a Prototype 4 (Council-side) for a separate /bimstack:build run.
- **Deceased-doctor process.** MB raised this. Real, painful, important. But not citizen-facing renewal – it's a Council-side service-design intervention. Add to the Council-side backlog.
- **SMS notification when the certificate is ready.** MA suggested it. Worth designing into iteration 4 once "Application sent" / "Renewal complete" distinction has bedded in.
- **Specialty-overseas address handling.** The "Use a different address" flow is a mock alert in iteration 3. Design it properly in iteration 4.

---

## Rejected

- **Auto-attaching hospital CPD records from QEH HR.** AB asked for it; rejected for this prototype because Prototype 2 already tests this hypothesis. Don't let Prototype 1 borrow Prototype 2's design hypothesis. Standard 5 / 7 implications need their own testing.

---

## Resolved assumptions from round 2

Five assumptions from iteration 2's panel can move to resolved.

| # | Assumption | Evidence |
|---|---|---|
| 1 | "Save and come back later" needs primary visibility | JW used it twice naturally during an interrupted session. Other doctors noticed it without prompting. |
| 2 | Multi-file CPD upload is natural for doctors with multiple sources | MA: *"I can add three. The total adds up. That's exactly what I need."* |
| 3 | Print option is genuinely used, not just requested | MB actually printed during the session. *"There. I always print these."* |
| 4 | "Something not right?" reads as invitation, not failure | MA: *"This would have saved me. I would have used this."* (Referring to a real prior incident.) |
| 5 | Fee callout on Start reduces surprise without causing pre-flow drop-off | No participant in round 2 reacted to the fee at Check Your Answers. None abandoned at the Start page either. |

These move to the "Resolved in round 2" section at the bottom of the iteration-3 assumptions panel, dimmed.

---

## New assumptions for round 3

Five new items now in the panel.

- `[VERIFY WITH USERS · NEW]` Three-path "where are you renewing from?" handles 95% of the cohort. (Possibly more paths needed.)
- `[VERIFY WITH USERS · NEW]` Specialists notice the "check your College too" callout and act on it.
- `[VERIFY WITH USERS · NEW]` "Application sent" + 3-step timeline reassures rather than alarms.
- `[VERIFY WITH USERS · NEW]` Doctors abroad trust the "you can do this from anywhere" microcopy enough to start the flow.
- `[VERIFY WITH MDA · NEW]` The 5 registration categories Sandra Layne described match the Council's formal register.

Plus three new `[VERIFY WITH MDA · NEW]` items on category fees and overseas CPD acceptance, and one new `[KNOWN GAP · NEW]` on the backstage Council interface.

---

## Constraints surfaced

From the transcripts:

1. **5 registration categories**, not 1 (SL): full, provisional, temporary, restricted, specialty-overseas. Each with different evidence requirements and fees.
2. **Renewal is application + Council review**, not a single citizen-side transaction (SL).
3. **CPD evidence errors are 60% of all current renewal queries** (SL). The single highest-leverage change in the whole service.
4. **Volume peaks 70% in Oct–Dec** (SL). Beta performance testing needs to plan for this.
5. **Disciplinary flags need human-in-the-loop** (5–6 per year, SL). The service shouldn't automate these.
6. **Backstage Council interface doesn't exist today** (SL). Sandra works with paper. The digital service needs a Council-side counterpart.
7. **Specialty-specific CPD is a second standard** above the Council's 40-hour minimum (MA). Specialists could "pass" the Council and "fail" their College.
8. **Deceased-doctor record clean-up** is broken today (MB). Notification arrives by family phone call.

Constraints 6, 8 are deferred to separate workstreams. Constraints 1–5 and 7 are addressed in iteration 3.

---

## What this iteration deliberately does not do

- **No backstage Council interface designed.** Sandra's whole second concern. That's its own /bimstack:build run.
- **No actual address-override flow.** Currently a mock alert; design properly in iteration 4.
- **No SMS notification.** Worth testing once "Application sent" lands.
- **No specialty-overseas category-specific flow.** The category is named but the experience is the same as full registration for now. Add per-category UI in iteration 4 if the round 3 testing supports it.

---

## Process note – how the loop ran this round

The team handed the skill **5 raw transcripts** (not a structured feedback file). The skill ran synthesis first, producing `feedback-round-2.md`. The delivery manager reviewed the synthesis with the service designer before the iteration step proceeded. The synthesis caught all the major themes including the registration-category constraint, which would have been easy to miss if only one of the five participants had raised it.

This is the loop the user asked for in round 2 of bimstack development. It works.

---

## Standards summary for this iteration

| Standard | How iteration 3 supports it |
|---|---|
| 1 (meet user needs) | The 5-category constraint, the abroad cohort, the retired/occasional cohort, the specialist CPD note – all came from listening |
| 2 (multidisciplinary team) | Sandra Layne's frontline voice gave a different signal entirely. Standard 2 in action |
| 3 (everyone can use it) | Three context paths; address-for-correspondence override; retired/occasional registration warning |
| 4 (simple language) | "Application sent" is plainer and truer than "Renewal complete" |
| 5 (works first time) | CPD experience now addresses the 60%-renewals-need-CPD-back-and-forth pain |
| 7 (open, interoperable) | Prototype now expects category data from Trident ID or the Council register |
| 9 (open and transparent) | Council review process is visible to the citizen, not hidden behind a misleading "Renewal complete" |

---

## What goes into round 3

- Test the six changes with 8 doctors, weighted toward specialists (3), abroad/locum (2), and retired/occasional (2)
- Verify the 5 new MDA assumptions formally with the Registrar
- Brief MIST on Trident ID's ability to return registration category
- Kick off a parallel /bimstack:build for the Council-side interface (Sandra Layne is the subject-matter expert)
- Cyber engineer refresh: address-override flow touches new data; threat model needs a pass

Round 3 cycle target: feedback by 2026-07-09, iteration 4 by 2026-07-13.
