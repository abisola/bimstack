---
name: plain-language-check
description: Review text for plain language, civil-service register, reading age, and the GovTech Barbados word-swap list. Use when reviewing copy for any government service – form copy, error messages, content pages, privacy notices, weeknotes, public comms. Triggers on "plain language check", "is this plain", "review this copy", "rewrite for citizens", "swap list", "reading age", "is this clear".
---

# Plain Language Check

This skill reviews a piece of text against the GovTech Barbados plain-language standard. It produces a marked-up critique with specific rewrites, not vague advice.

The standard is Barbados Digital Service Standard 4 (simple and relatable language), supported by GOV.UK Principle 4 (do the hard work to make it simple) and Principle 6 (this is for everyone).

The canonical word-swap list lives in `references/house-style.md`.

---

## When to use this skill

- Reviewing form copy, error messages, confirmation pages, content pages
- Reviewing privacy notices, consent screens, terms text
- Reviewing weeknotes, public comms, show-and-tell slide copy
- Auditing an existing service before redesigning it
- Before any user-testing session – fix the obvious before testing

If the user gives you a Word doc, PDF, or HTML, **extract the text first**, then run the check.

---

## What the check does

For every passage, look for and report on:

### 1. Civil-service register

Words that appear on the swap list. Always flag them.

| Don't write | Write instead |
|---|---|
| provide | tell us, give us |
| submit | send |
| verify, validate | check |
| select | choose |
| proceed | continue |
| commence | start |
| reside | live |
| prior to | before |
| in respect of | about, for |
| mandatory | required, you must |
| utilise | use |
| ensure | make sure |
| apply for | get, claim, register |
| in receipt of | getting |
| at this present time | now |
| as a matter of urgency | urgently |
| with regard to | about |
| in accordance with | following, under |
| pursuant to | under |
| hereinafter | from now on |
| forthwith | now |
| at your earliest convenience | as soon as you can |
| be advised that | (delete – just say the thing) |
| kindly | (delete) |
| approximately | about |
| sufficient | enough |
| obtain | get |
| purchase | buy |
| terminate | end, stop |
| commence | start |
| endeavour | try |
| in the event that | if |
| in the absence of | without |
| not later than | by |

### 2. Reading age

Aim for grade 5 reading age (a 9-year-old can follow). Flag anything over grade 8. Use Flesch–Kincaid or similar.

If you have access to a tool, calculate it. If not, eyeball it with these rules:

- Sentences over 20 words – flag them
- Words of three syllables or more (other than common ones like "computer") – flag them
- Latinate constructions ("in the event that…", "subject to the provision of…") – flag them

### 3. Voice and address

- Passive voice → flag and rewrite active. *"Your form will be processed"* → *"We'll process your form"*.
- "The applicant" / "the citizen" / "the user" → flag and rewrite to "you".
- "The Department" / "the Ministry" → flag and rewrite to "we".
- Third person about the government when first person is clearer – flag.

### 4. Jargon and acronyms

- Acronyms not introduced on first use – flag.
- Internal jargon (MDA, DPIA, KPI) in citizen-facing copy – flag and rewrite.
- Technical or legal terms without a plain-language explanation – flag.

### 5. Specificity

- "Soon", "in due course", "shortly" – flag. Citizens need dates.
- "Required documentation" – flag. List the documents.
- "Further information" – flag. Where?
- "Contact us if you have any questions" without saying *how* – flag.

### 6. Tone

- Apologetic over-formality – flag. ("We regret to inform you…")
- Threatening tone – flag. ("Failure to comply will result in…")
- Robotic neutrality where warmth would help – flag.

### 7. Errors and confirmations specifically

For error messages, two things together:

- Does it say what went wrong?
- Does it say what the citizen can do?

If either is missing, flag it.

For confirmation pages, three things together:

- A reference number
- What happens next
- Roughly when

If any is missing, flag it.

---

## Output template

```markdown
# Plain Language Review – [page or document name]

**Date:** YYYY-MM-DD
**Reviewer:** content-designer (bimstack)
**Reading age (current):** Grade X (Flesch–Kincaid or estimate)
**Reading age (target):** Grade 5

## Summary

[Two to three sentences. The biggest patterns you've seen.]

## Findings

### Civil-service register

| Original | Suggested | Why |
|---|---|---|
| "Please submit your application" | "Send us your form" | Standard 4 / swap list |
| "Verify your details" | "Check your details" | Standard 4 / swap list |

### Reading age

[List sentences over 20 words. Show the rewrite.]

| Original | Rewrite |
|---|---|
| "It is the responsibility of the applicant to ensure that all required documentation is submitted prior to the commencement of the assessment process." (28 words, grade 13) | "Send us all your documents before we start." (8 words, grade 4) |

### Voice and address

[List passive constructions and third-person references with rewrites.]

### Jargon and acronyms

[List unintroduced acronyms and technical terms.]

### Specificity

[List vague phrases with the specific information they should give.]

### Tone

[Brief notes on tone, with examples.]

### Errors and confirmations

[List error messages missing "what to do next", confirmations missing reference numbers, etc.]

## Recommended rewrites

[For each substantive passage, show the original and the rewrite, side by side.]

## What's already working

[Always include something here. A review that's all critique tells the team the original was all bad, which is rarely true.]
```

---

## A worked example

**Input:**

> *"Pursuant to the provisions of the Driver's Licence Act, all applicants are hereby notified that they must submit their documentation prior to the commencement of their assessment. In the event that the requisite documents are not received in a timely fashion, the application may be terminated. Kindly ensure compliance."*

**Findings:**

| Issue | Fix |
|---|---|
| "Pursuant to" – swap list | "Under" |
| "applicants are hereby notified" – third person, passive, archaic | "you need to know" |
| "submit" – swap list | "send" |
| "documentation" – swap list | "documents" |
| "prior to" – swap list | "before" |
| "commencement" – swap list | "starts" |
| "In the event that" – swap list | "If" |
| "requisite" – jargon | (delete – "your documents" is enough) |
| "in a timely fashion" – vague | give a date or a duration |
| "terminated" – swap list | "cancelled" |
| "Kindly" – swap list | (delete) |
| "ensure compliance" – jargon | (delete – the citizen knows what to do from the rest) |

**Rewrite:**

> *"Send us your documents before your test starts. If we don't get them at least 5 working days before, we'll cancel your application."*

Original: 49 words, grade 16, passive, swap-list-heavy.
Rewrite: 27 words, grade 6, active, specific.

---

## What not to do

- Don't rewrite into Bajan vernacular by default. Use it only where it actively helps the citizen and where it's been tested with users. Standard 4 is plain *and* relatable, not folksy for the sake of it.
- Don't drop important meaning to shorten. *"Send us your documents"* loses nothing important from the original; *"Send stuff"* would.
- Don't make the rewrite condescending. Plain is not patronising.
- Don't over-rely on a Flesch–Kincaid score. It's a rough guide; user testing is the ground truth.

---

## When this skill isn't enough

A plain-language check tells you what's wrong with the words. It can't tell you whether the *underlying journey* makes sense. If you find yourself rewriting around a fundamentally awkward question – stop, and talk to the service designer about whether the question should be asked at all.
