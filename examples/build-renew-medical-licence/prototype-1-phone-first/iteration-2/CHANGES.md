# Iteration 2 – Prototype 1 (Phone-first individual renewal)

**Round of feedback:** User testing, 6 doctors across cohorts, 2026-06-03
**Feedback source:** `../feedback-round-1.md`
**Iterated by:** content-designer + developer (via `/bimstack:iterate`)
**Date:** 2026-06-04

## Summary

Six changes applied. Three changes deferred or rejected with reasoning. Three assumptions resolved. Five new assumptions surfaced for round 2. One constraint surfaced from MIST that may affect alpha-to-beta tech decisions.

The iteration leans heavily on the "save and come back any time" promise becoming real, and on closing the visibility gap on the *Is this you?* page – two of the round's most consistent signals.

---

## Critical changes applied

These changes addressed feedback where the prototype was breaking for citizens unaided. They had to ship in iteration 2.

### Change 1 – "Save and come back later" promoted from buried secondary button to a dedicated save bar on every question page

**Feedback that drove it:** 4 of 6 doctors missed the save option entirely (D-01, D-02, D-04, D-05). D-05 (specialist): *"I would have closed the tab and lost the lot if my pager went off mid-flow."*

**What changed:** The save action is now a yellow-bordered bar above the main actions on every page from ID lookup onwards, with a clear "Pause any time" headline and the 30-day promise. The old secondary "Save and come back" button in the action row is removed.

**Standard:** 5 (works first time). A service that loses progress on a phone interruption is not a phone-first service.

### Change 2 – "Is this you?" page restructured with explicit alternative options

**Feedback that drove it:** 5 of 6 did not see *"Something's wrong"* on the Confirm-details page. D-02 noticed an outdated phone number but couldn't see how to fix it without going back to the lookup.

**What changed:** The primary action stays as *"Yes, that's me"*. A new bordered block titled *"Something not right?"* now sits below the actions, with three specific options each linked to its own resolution path:
- "My email or phone is out of date" → contact-update flow (mock alert in this prototype)
- "My parish is wrong" → Trident ID parish-update flow
- "This isn't me" → identity-verification escalation with a phone number

**Standard:** 5 (works first time). Also Standard 1 (meet user needs) – the alternative paths are based on what doctors actually said the failure modes are, not what we assumed.

### Change 3 – BBD 200 fee surfaced on the Start page

**Feedback that drove it:** 3 of 6 doctors were surprised by the fee at Check Your Answers. D-04 (private GP): *"I'd budgeted [BBD] 150. Where does this come from?"* D-03 thought renewal was free.

**What changed:** The Start page now opens with a fee callout block immediately after the lede paragraph, in a bordered "BBD 200 · Renewal fee" pattern. The "Before you start" list now mentions the fee explicitly. The Start page also flags that *"different fees apply to provisional and temporary registration"* (constraint surfaced – see below).

**Standard:** 5 (works first time). Also Standard 4 (simple language) – the citizen knows what they're committing to before they start, not three pages in.

---

## Important changes applied

These changes addressed feedback where citizens consistently struggled but it wasn't strictly blocking.

### Change 4 – "What counts as CPD?" expandable disclosure on the CPD page

**Feedback that drove it:** All 6 doctors wanted more help on the CPD upload page. D-05 specifically asked about MRCP-credentialed CPD. The current hint just said "PDF or photo".

**What changed:** A `<details>` disclosure titled *"What counts as CPD?"* sits between the page intro and the upload area. When expanded it lists the accepted CPD sources – hospital mandatory training, RCP/RCS/RCOG, UWI short courses, conferences with attendance evidence, BMJ Learning / NEJM Knowledge+, peer-reviewed publications. Closes with *"Not sure? Add it anyway and tell us what it was. We'll check."* (Each item flagged as `[VERIFY WITH MDA]` in the assumptions panel – the list is the team's best guess, not the Council's confirmed taxonomy.)

**Standard:** 4 (simple, relatable language). Also Standard 1 (meet user needs) – directly responsive to the citizen's question.

### Change 5 – Multi-file CPD upload

**Feedback that drove it:** D-05 (specialist) could not fit her CPD in a single file. Her records are split across two specialist colleges. Single-file pattern excluded an entire cohort.

**What changed:** The CPD page now shows a list pattern. Each row is a named CPD record (e.g. *"QEH-internal-training-2026.pdf · Public hospital training · 18 hours · 1.2 MB"*) with a Remove action. Below the list, a "Add more" upload widget. Above Continue, a running CPD total in a success-bordered callout (*"Total so far: 42 hours. You're above the 40-hour minimum."*).

**Standard:** 5 (works first time) for specialists. Also Standard 3 (everyone can use it) – the design now fits how doctors actually keep their CPD, not just one preferred shape.

### Change 6 – Print option on the Confirmation page, with print stylesheet

**Feedback that drove it:** D-06 (62, family medicine, 36 years registered) wanted to print. *"I always print these – I don't trust an email to survive."*

**What changed:** The Confirmation page gains a gold-bordered callout *"Keep a copy for yourself"* with a Print this page button. A `@media print` block in the stylesheet hides the chrome (banners, footer, assumptions, action buttons) so the printed page is clean.

**Standard:** 3 (everyone can use it). Older doctors and doctors who prefer paper records are first-class.

---

## Worth testing in round 3

These came up in round 1 but the team wants more signal before designing them in.

- **Progress indicator at the top of question pages.** One doctor (D-04) didn't know how many pages were left. Could be a step indicator or a progress bar. Test both against the bare iteration-2 design.
- **Certificate preview before payment.** Two doctors (D-04, D-05) wanted to see what the certificate would look like before they paid. Could be a small image preview on the Payment page.
- **More visible feedback CTA.** Two doctors hovered over the alpha banner's "Tell us what you think" without clicking. Probably needs a dedicated end-of-flow ask, not just the alpha-banner link.

Tag in the assumptions panel: `[VERIFY WITH USERS · round 3]`.

---

## Deferred

- **A "save as PDF" option on every question page.** Several doctors wanted a paper trail of in-progress applications. Worth doing eventually but not before the simpler print-on-confirmation lands. Revisit after round 3.
- **Translation / vernacular options.** Not raised in round 1, but a Standard 3 stress test for round 2 should specifically recruit doctors who would benefit. Defer the design until the recruitment confirms a need.

---

## Rejected

- **"Skip the Trident ID step entirely".** One doctor (D-04) asked for this. Rejected because: it breaks Standard 7 (Trident ID is the shared identity platform), Standard 11 (the Council needs a verified identity to issue a regulatory licence), and Standard 5 (manual identity entry produces more errors, not fewer). The right fix is making the Trident ID step faster and more reassuring, which Change 2 partly addresses.

---

## Resolved assumptions

Three assumptions from the round-1 panel can move out of "to verify" and into "resolved – with evidence".

| # | Assumption | Evidence |
|---|---|---|
| 1.1 | Doctors will trust a Trident ID lookup for licensing | 5 of 6 in round 1; the sixth (D-06) didn't object even though she hadn't used Trident ID before, on the basis that *"if it's the official site, the government can look me up"*. Tag now: `Resolved`. |
| 1.4 | Plain-language labels feel respectful, not patronising | 4 of 6 positive direct comments; 0 negative. Tag now: `Resolved`. |
| (new) | The alpha.gov.bb chrome reads as trustworthy without explanation | All 6 recognised it immediately; nobody questioned the service's legitimacy. Tag now: `Resolved`. |

These three are listed in a "Resolved in round 1" section at the bottom of the iteration-2 assumptions panel, in dimmed text, so the team can see they were once open and how they closed.

---

## Sharpened assumptions

Two assumptions were partly confirmed but with a constraint that needs follow-up.

| # | Assumption | Sharpening |
|---|---|---|
| 1.3 | "Save and come back later" reduces abandonment | Confirmed important by 4 of 6 missing it entirely. Now sharpened to: *needs to be a primary action, not buried in the action row.* Change 1 applied. Stays in the panel for round 2 to verify the new prominence works. |
| 1.11 | Trident ID returns the data fields we expect | MIST flagged that Trident ID session state lasts only 30 minutes by default. The "Save and come back any time" promise needs 30 days. Now tagged `[VERIFY WITH MIST]` with a specific ask: extend session state, or design a separate save-state mechanism. |

---

## New assumptions

Five assumptions surfaced in round 1, now in the iteration-2 panel for round-2 verification.

- `[VERIFY WITH USERS · NEW]` Surfacing the BBD 200 fee on the Start page reduces fee surprise without causing pre-flow drop-off.
- `[VERIFY WITH USERS · NEW]` The "Something not right?" alt-options block reads as an invitation, not an admission of failure.
- `[VERIFY WITH USERS · NEW]` Doctors with multiple CPD sources find the multi-file pattern natural.
- `[VERIFY WITH USERS · NEW]` The print option is genuinely used, not just requested.
- `[VERIFY WITH MDA · NEW]` The "What counts as CPD?" examples are all things the Council does accept.

---

## Constraints surfaced

From the conversations around round 1, three constraints we didn't know about before.

1. **BBD 200 is only the full-registration fee.** Provisional and temporary categories have different fees (confirmed with the Registrar). Iteration 2 surfaces this on the Start page with a link out. The exact provisional/temporary fees are still `[VERIFY WITH MDA]`.
2. **Trident ID session state is 30 minutes by default** (per MIST). The 30-day "save and come back" promise needs either an extended Trident ID session or a separate session-state mechanism designed with MIST. New `[VERIFY WITH MIST]` tag in iteration 2.
3. **Specialist CPD reporting varies by college.** Cardiology reports PDF; paediatrics reports text email. The multi-file CPD pattern in Change 5 accepts a mix, but the downstream review process (how the Council reads the evidence) needs aligning. Tagged `[KNOWN GAP]`.

---

## What this iteration deliberately does not do

- **No design system contribution yet.** Changes 1, 2 and 5 introduce patterns (the save-bar, the alt-options block, the multi-file list) that aren't in the published GovBB design system. If they survive round 2 testing they should be proposed back to the design-system team. (`design:design-system` skill.)
- **No threat-model refresh.** The new contact-update and parish-update flows touch Trident ID data; the cyber engineer should refresh the threat model in parallel before round 3. (`/bimstack:threat-model`.)
- **No production code.** Throwaway HTML, still. Production code begins at beta.

---

## Standards summary for this iteration

| Standard | How iteration 2 supports it |
|---|---|
| 1 (meet user needs) | Every change cited specific user feedback |
| 3 (everyone can use it) | Multi-file CPD + print option specifically address cohorts that round 1 surfaced |
| 4 (simple language) | "What counts as CPD?" disclosure + fee transparency |
| 5 (works first time) | Save-bar + alt-options block + fee on Start are all "first-time" fixes |
| 7 (open, interoperable) | Trident ID session-state question raised with MIST; rejection of "skip Trident ID" |
| 11 (trust, safety) | Identity escalation path on "This isn't me" |

---

## What goes into round 2

- Test the six changes with a fresh cohort of 8 doctors, specifically over-representing private-practice and older doctors
- Verify the five new assumptions
- Verify the sharpened ones (does the new save-bar actually get used?)
- Brief MIST on the 30-day session-state question
- Brief the Registrar on the CPD-acceptance list and the provisional/temporary fees
- Cyber engineer refreshes the threat model

Round 2 cycle target: feedback synthesised by 2026-06-21, iteration 3 produced by 2026-06-25.
