# Feedback round 1 – Prototype 1, Phone-first individual renewal

**Date:** 2026-06-03
**Source:** Moderated user testing, on doctors' own phones
**Participants:** 6 doctors across cohorts (per `test-plan.md`)
**Researcher:** Service designer, with the content & interaction designer observing 3 sessions

## Participants

| ID | Cohort | Notes |
|---|---|---|
| D-01 | Public hospital (QEH) – 8 yrs registered | Internal medicine |
| D-02 | Public hospital (QEH) – 3 yrs | Surgery, post-internship |
| D-03 | Polyclinic – 12 yrs | Family medicine, St. Philip |
| D-04 | Private practice GP – 18 yrs | Christ Church |
| D-05 | Specialist (cardiology) – 22 yrs | Mixed public/private |
| D-06 | Family medicine – 36 yrs registered | 62 years old, self-identified as low-confidence with smartphones |

Sessions ran 35–50 minutes each. Audio recorded with consent. Transcripts in the team drive.

## What worked

- **All 6 doctors recognised the alpha.gov.bb chrome immediately** and didn't question whether the service was legitimate. Standard 11 trust signal is working without explicit explanation.
- **The Trident ID lookup did not surprise anyone.** 5 of 6 had used Trident ID for at least one other service. One (D-06) hadn't but the lookup pattern still felt safe to her – *"if it's the official site, it's fine for the government to look me up."*
- **Plain language pulled comments from 4 of 6.** D-04: *"It's not full of bureaucratic nonsense – I appreciate that."* D-03: *"It feels like it was written for me, not at me."* Standard 4 holding up.
- **Confirmation page was praised by all 6** for being specific about timing (*"5 working days"*) and giving a reference number.
- **"Where do you practise?" radio options** were read accurately by all 6, including D-06.
- **Trident ID confirmation page** (after the brief delay) read as reassuring – nobody scrolled past it without checking.

## What didn't work

- **4 of 6 doctors missed "Save and come back later" entirely.** It sits next to Continue in the same action row, in a darker shade, and looked like a back/cancel rather than a save. D-05 (specialist, time-poor): *"I would have closed the tab and lost the lot if my pager went off mid-flow."*
- **5 of 6 doctors did not see "Something's wrong" on the Is this you? page.** The page reads as "Yes, that's me" being the only real action. D-02 noticed an outdated phone number but couldn't see how to fix it without going back to the lookup. Standard 5 (works first time) breaking here.
- **3 of 6 were surprised by the BBD 200 fee.** D-04: *"I'd budgeted [BBD] 150. Where does this come from?"* D-03 thought renewal was free. The fee appears on the Check Your Answers page – too late.
- **All 6 wanted more help on the CPD upload page.** *"What counts? Does the hospital's mandatory training count? Does the Saturday session I went to count?"* The current hint just says "PDF or photo" but doesn't define CPD itself. D-05 (specialist) specifically asked about MRCP-credentialed CPD.
- **D-05 (specialist) could not fit her CPD in a single file.** Her records are split across two specialist colleges. The upload pattern assumes one file; she would have had to combine them in a PDF editor she doesn't have.
- **D-06 wanted to print the confirmation.** *"I always print these – I don't trust an email to survive."* No print option exists.
- **D-02 hit the back button on iOS Safari mid-flow** and lost progress. Although "Save and come back later" exists in theory, the back-button case isn't handled.

## Observed but unresolved

- D-01 paused for 8 seconds at the Trident ID lookup. Couldn't tell from the recording whether she was reading or confused. Worth probing in round 2.
- D-04 asked whether the certificate would be physical or digital. The confirmation says email; not all doctors expect that yet.
- D-05 wondered aloud whether her CPD record needed to be the original or a copy. Suggests a policy question we haven't sharpened.
- 2 of 6 hovered over the alpha banner's "Tell us what you think" without clicking. Worth a more visible feedback CTA.

## Constraints surfaced

- The Medical Council Registrar (briefed earlier this week) confirmed the BBD 200 fee is current for full registration but not for provisional or temporary. The prototype assumes a single fee; this needs split.
- MIST flagged that Trident ID session state is preserved for only 30 minutes by default. "Save and come back later" needs a longer session model.
- One specialist college (cardiology) reports CPD in a PDF; another (paediatrics) reports it as an emailed text confirmation. The CPD evidence flow is messier than the prototype assumes.
