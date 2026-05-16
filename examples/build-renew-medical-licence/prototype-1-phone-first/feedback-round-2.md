# Feedback round 2 – Prototype 1, Phone-first individual renewal

**Date of fieldwork:** 18–20 June 2026
**Date of synthesis:** 2026-06-22
**Source:** 5 raw transcripts in `transcripts-round-2/`. Synthesised by service-designer via `/iterate`.
**Participants:** 4 doctors + 1 Medical Council administrator (Sandra Layne, renewals officer)

> This is a synthesis – not a substitute for the transcripts. Quotes are verbatim from the transcripts with participant IDs attached. If the synthesis got something wrong, fix it and re-run the iteration step.

## Participants

| ID | Cohort | Notes |
|---|---|---|
| AB – Dr Anya Brathwaite | Public hospital GP, 7 yrs | QEH; hospital admin used to handle her renewal |
| MA – Dr Marcus Adams | Private paediatrician, 22 yrs | MRCPCH + FAAP; multi-source CPD |
| JW – Dr Jameel Walcott | Locum, currently abroad | Mid-rotation in London; renewal deadline while away |
| MB – Dr Mavis Belgrave | Family medicine, 65, semi-retired | iPad user; occasional patients at home |
| SL – Sandra Layne | Medical Council renewals officer, 12 yrs | Backstage view + 5-category insight |

## What worked

- **The alt-options block on "Is this you?"** read as an invitation, exactly as iteration 2 hoped. *"I would have just hit Yes that's me and worried about it later last year. This is better."* (AB) *"This would have saved me. I would have used this."* (MA, referring to a real prior incident with an outdated email)
- **The "What counts as CPD?" disclosure** was opened by 4 of 4 doctors and got specific positive comment from 3. *"That's helpful. The hospital does the resus and the infection control thing every year. I don't always remember those count."* (AB)
- **Multi-file CPD upload** worked for the cohort it was built for. MA immediately mapped 3 records mentally (MRCPCH, AAP, hospital). *"That's exactly what I need."* MB also handled it on an iPad with photos of paper records.
- **The fee callout on Start** was acknowledged with no surprise. None of the 5 participants reacted to the BBD 200 at Check Your Answers.
- **The save bar** was used by JW twice in his interrupted session and worked. Other doctors noticed it but didn't need it this round.
- **The print option** was actually exercised by MB. *"There. I always print these."*
- **The official banner** signalled legitimacy clearly for the older participant. *"This is the official government service of Barbados. OK. Alright."* (MB)

## What didn't work

### Critical

- **"Renewal complete" is technically wrong.** SL: *"Renewal isn't complete when the doctor pays. The doctor has applied for renewal. Then I get the application. I check the CPD... If everything's fine, I or someone senior signs it off, and then the renewal is complete."* AB independently surfaced the same confusion: *"Have I actually renewed, or am I waiting for someone to say yes?"* Two participants from completely different angles agreeing the confirmation copy misrepresents the service. **High-signal.**
- **One-size-fits-all registration category is broken.** SL: *"In our register a doctor isn't just a doctor. There's full registration, provisional, temporary, restricted, and specialty-overseas. So five categories. Your form is the same form for everybody. That won't fly."* Two doctors hit this from the citizen side: MB (no "occasional / restricted" option for her semi-retirement) and JW (no "currently abroad" option). **High-signal.**
- **Renewal-from-abroad is unaddressed.** JW: *"The whole question for me is whether this works abroad. The prototype doesn't tell me one way or the other."* He's a real cohort with a real annual problem. Standard 3.

### Important

- **Overseas CPD is missing from the "What counts" list.** MA: *"What I don't see is overseas activity specifically. So if I tell you the AAP – American Academy – does that count? I think the Council accepts it but the list doesn't say."*
- **Specialty-specific CPD requirements are invisible.** MA flagged that MRCPCH requires 50 hours of paediatric-specific CPD a year. The Council's 40-hour minimum doesn't catch this. Specialists could file a "valid" Council return that fails their College.
- **Pre-fill from hospital records was anticipated and missed.** AB: *"I thought it had somehow already pulled my QEH records in. Which actually – wait – wouldn't that be amazing if it did?"* She was disappointed. The sample data in the prototype contributed to the confusion. (This is a Prototype-2-territory question but it surfaced here.)
- **Address-for-correspondence override.** JW raised it: his Trident ID address is his Barbados parents' house; he wanted to know if anything physical would go there. Connected to the renewing-from-abroad issue.

### Worth testing

- **SMS notification when the certificate is ready.** MA: *"If it texted me when the certificate was ready, that's the moment I'd actually print it and put it on the wall."* Worth designing into iteration 4.
- **Fee pre-filled by category.** SL: *"It would change my life."* Once the 5-category structure lands, the fee should pre-fill from the category.

## Observed but unresolved

- AB hesitated 8 seconds on the Trident ID lookup page – not clear from the transcript whether confused or just reading. Probe in round 3.
- MA mentioned that his MRCPCH records aren't always in the same format as his AAP records. The current upload accepts a mix of formats, but the Council's downstream reviewer (Sandra) will see a mix too. Worth probing whether mixed formats slow Sandra's review.
- MB asked about her late husband's record. Not citizen-facing, but a recurring failure mode at the Council. Flag to the Council as a separate piece of work.

## Constraints surfaced

The biggest finding of round 2 is that the prototype's mental model of "a doctor renews" was too thin. Specifically:

1. **The register has 5 categories** – full, provisional, temporary, restricted, specialty-overseas. Each has its own evidence requirements and fee. (SL, plus corroborated by MB and JW from the citizen side.)
2. **Renewal is a 2-step process** – the doctor *applies*; the Council *reviews and approves*. The doctor doesn't hold a fresh licence the moment they pay. (SL.)
3. **Volume peaks in Oct–Dec** at ~70% of the annual ~900–1000 renewals. (SL.) Performance testing for the beta needs to plan around this.
4. **60% of current renewals need a CPD back-and-forth.** (SL.) The CPD experience is the single highest-leverage citizen-side change.
5. **Some renewals need human judgement** (disciplinary flags – 5–6 per year). (SL.) The service hands these to a human, not automates them.
6. **The backstage Council interface is missing entirely.** (SL: *"build me a screen too"*.) The citizen-side prototype only shows half the service.

## Implications for iteration 3

What iteration 3 will tackle:

1. Confirmation page recast: *Application sent* (not *Renewal complete*); microcopy about Council review timing
2. Early "where are you renewing from" question to handle the abroad / retired / occasional cases
3. Registration-category awareness – at least surface that the category matters; fee pre-fill if we can mock it
4. Overseas CPD activity added to the "What counts" list
5. Specialty-specific CPD note for specialists
6. Address-for-correspondence override on Confirm Details

What iteration 3 will *not* tackle (deferred with reasoning):

- Hospital pre-fill of CPD records – that's Prototype 2's territory. Don't fold it in.
- Backstage Council interface – needs its own discovery and its own series of prototypes. Brief Sandra into that work as the subject-matter expert.
- Deceased-doctor process – needs a Council-side service-design intervention, not a prototype tweak.
- SMS notification for certificate-ready – worth designing into iteration 4 once the application/review distinction lands.

## Standards relevant to round 2

- **Standard 1** (meet user needs): the 5-category constraint, the application-vs-renewal distinction, and the renew-from-abroad case all flow from listening to real participants
- **Standard 2** (multidisciplinary team): Sandra's voice was a different signal entirely from the doctors'. Standard 2 in action
- **Standard 3** (everyone can use it): MB and JW both struggled with options that didn't fit them
- **Standard 4** (simple language): "Renewal complete" was technically wrong; needs honest plainer copy
- **Standard 5** (works first time): 60% of current renewals require a CPD back-and-forth – the design should reduce this
- **Standard 9** (open and transparent): Sandra agreed to be quoted by name; her concerns are documented openly
