---
name: service-standard-assessment
description: Self-assess a service against the 13 Barbados Digital Service Standards. Use before any phase gate (discovery→alpha, alpha→beta, beta→live), at annual review in live, or any time the team wants an honest evidence-based view of where a service stands. Triggers on "service standard assessment", "standards check", "phase gate", "are we ready for beta", "are we ready for live", "honest assessment", "audit our service".
---

# Service Standard Assessment

This skill walks an agent (or a human reading the output) through the 13 Barbados Digital Service Standards with evidence. It produces a structured report that names what's working, what isn't, and what the team should do next.

The Barbados Digital Service Standards are at <https://github.com/govtech-bb/Barbados-Digital-Service-Standards>. The canonical bimstack reference is `references/barbados-service-standards.md`.

---

## When to use this skill

- **Before a phase gate** – discovery → alpha, alpha → beta, beta → live. This is the bar.
- **Annually in live** – services drift. Re-assess at least once a year.
- **After a major change** – a new MDA owner, a new vendor, a new policy, a back-office redesign.
- **When the team isn't sure** – an honest mid-sprint pulse-check.

Don't use it as a tick-box at the end. The assessment is for the team first, the panel second.

---

## How to run it

Work through the 13 standards in order. For each one, do three things:

1. **State the evidence** – not opinion, evidence. Numbers, screenshots, links, test reports, research transcripts, RAID-log entries.
2. **Rate it** – `Met`, `Partly met with a plan`, `Not met`.
3. **Name the next action** – what the team will do, by whom, by when.

A `Met` requires evidence. *"We have research with 18 citizens, three rounds of testing, transcripts in the team drive"* is evidence. *"The team has talked to users"* is not.

A `Partly met with a plan` requires a date and an owner. *"Standard 13 partly met. Analytics are wired for two of the four GDS baseline metrics. Owner: developer. Date: end of sprint 6."*

A `Not met` requires either a plan to meet it or a written reason it isn't applicable to this service.

---

## Output template

Use this Markdown structure exactly. Don't decorate it – the panel will read many of these and consistency helps.

```markdown
# Service Standard Assessment – [Service name]

**Phase being assessed for:** Discovery / Alpha / Beta / Live
**Date:** YYYY-MM-DD
**Assessed by:** [names of the team and the assessor]
**MDA:** [Ministry, Department, or Agency]

## Summary

[Three to five sentences. Where the service stands overall. The biggest strengths. The biggest risks. The recommendation.]

## Recommendation

Proceed / Proceed with conditions / Do not proceed

[If conditions: list them, with owners and dates.]

---

## Standard 1 – Meet user needs

**Rating:** Met / Partly met with a plan / Not met

**Evidence:**
- [Bullet points of evidence]

**Next action:**
- [Specific next action, owner, date]

---

## Standard 2 – Multidisciplinary team

[same shape]

---

[…through all 13…]

---

## Cross-cutting observations

[Things the standards don't quite capture but that matter. Risks the team is carrying. Decisions the MDA needs to take.]

## Appendix: research and testing log

[Links to research notes, testing reports, threat model, accessibility audit, performance test results, etc.]
```

---

## What "met" looks like per standard

A pocket version. Read `references/barbados-service-standards.md` for the full per-standard guidance.

| # | Met looks like |
|---|---|
| 1 | At least 5 user interviews per major round of work, transcripts, named user needs, evidence of iteration based on them |
| 2 | Service designer, content/interaction designer, researcher, developer, delivery manager, subject-matter expert all named and reachable; senior decision-maker engaged |
| 3 | WCAG 2.1 AA tested, assisted-digital path designed, low-data tested, under-represented users researched with |
| 4 | Reading-age check passed, swap list applied, plain-language testing with citizens documented |
| 5 | Usability testing with a meaningful number of unaided completions, one-thing-per-page, clear errors and confirmation |
| 6 | Technology choice justified against cost / scale / accessibility / openness, MIST consulted, design system in use |
| 7 | Trident ID / vehicle / business lookups used where applicable, shared payment, design system, common components reused |
| 8 | Named live team, six-month rolling budget, documented codebase, no single-vendor dependency |
| 9 | Public repo, weeknotes published, regular show-and-tells with attendance from outside the team |
| 10 | Live user research scheduled, capacity for substantive change, retired-features process |
| 11 | Threat model, DPIA where warranted, pen test, secure-by-design implementation, plain-language privacy notice |
| 12 | Verb-based service name, SEO checked, signposting from related services and offline channels |
| 13 | Four GDS baseline metrics tracked, published, used to prioritise; qualitative feedback triangulated |

---

## A worked example fragment

```markdown
## Standard 4 – Use simple and relatable language

**Rating:** Partly met with a plan

**Evidence:**
- Content audit applied the swap list across all 14 pages – complete
- Reading-age check (Flesch–Kincaid) currently averages grade 8; target is grade 5 by end of sprint 7
- Plain-language testing with 6 citizens completed; 4 understood every page first time, 2 stuck on the eligibility page
- Eligibility page rewritten and retested with 3 further citizens; 3/3 understood first time
- Confirmation page rewritten in plain language, tested with 5 citizens, 5/5 understood next steps

**Outstanding:**
- The DLP-supplied legal text on the consent screen still reads at grade 12
- Two error messages still use "verify"; one uses "submit"

**Next action:**
- Content & interaction designer to redraft the consent screen with DLP support
- Content & interaction designer to fix the three remaining swap-list violations
- Both complete by sprint 7 close, evidence in the next assessment

**Standard:** 4 (simple language). Also supports **Principle 4** (do the hard work to make it simple).
```

---

## Common failure modes

- **Opinion as evidence.** "Users like it." How many? Where's the recording?
- **Plan without a date.** "We'll do that next sprint." Which sprint? Who owns it?
- **Hidden non-mets.** Pretending Standard 11 is met because nobody has audited it yet. If you haven't checked, it isn't met.
- **All-met assessments.** If every standard is `Met` for an alpha or early beta, the assessment isn't being honest.
- **Cargo-culted research.** "We interviewed 5 users" without saying who, where, what they were asked, or what we learned.

---

## What to do with the assessment

1. Read it with the team. Disagreements are useful – they reveal what the team is carrying that the assessor missed.
2. Share it with the MDA. The MDA owns the service; they need to see the evidence.
3. Publish it (where the security context allows). Standard 9.
4. Track the next actions in the RAID log.
5. Re-assess at the next phase gate or at least annually.

A self-assessment isn't a panel assessment. The panel will be tougher. That's the point.
