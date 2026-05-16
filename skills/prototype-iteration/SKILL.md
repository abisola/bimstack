---
name: prototype-iteration
description: Take a prototype and either structured feedback or raw research transcripts, produce the next version, with a changelog explaining what changed and why. Handles real-world messy inputs – when given transcripts, the skill synthesises first, then iterates. Use whenever the team has tested a bimstack prototype with users, the MDA, or each other and is ready for the next round. Triggers on "/iterate", "next version of this prototype", "fold this feedback in", "v2 of the prototype", "improve this based on what we heard", "here are the transcripts".
---

# Prototype iteration

This skill closes the feedback loop in the bimstack rapid-prototyping cycle. It takes a prototype (from `brief-to-prototypes` or any prior iteration), takes either **raw research transcripts** or **structured feedback**, and produces the next version of the prototype – with a clear changelog of what changed and why.

It supports Barbados Digital Service Standard 10 (continuously improved) and GOV.UK Principle 5 (iterate, then iterate again). Iteration is how a service moves from a guess to a thing that meets the need.

For the larger workflow, read the *Rapid prototyping loop* section in `PLAYBOOK.md`.

---

## When to use

- After every round of user testing on a bimstack prototype
- After an MDA review session
- After a show-and-tell where the audience surfaced new constraints
- After an internal critique with the content & interaction designer or service designer
- When the team has run /build and wants to take one of the candidates forward through several iterations

**Do not use this skill to merge multiple candidates into one.** That's a different decision (typically the "pick the path into beta" decision at the alpha gate). Each candidate iterates on its own terms until one is chosen.

---

## Two ways to feed the loop

The skill accepts two kinds of input. It always produces the same kind of output (a new iteration + a CHANGES.md).

### Path A – Raw research transcripts

The most common real-world case. The team has just finished a round of user testing or interviews. They have notes, recordings, transcripts. They want the next iteration without spending a week doing the synthesis themselves.

Feed the skill a folder of transcripts:

```
prototype-N-name/transcripts-round-K/
├── 01-participant-name.md
├── 02-participant-name.md
├── …
```

Each transcript is a Markdown file with the participant's words and the researcher's prompts. Messy is fine – hesitations, side comments, prompts in `[brackets]` or italics, timestamps if you have them.

The skill **synthesises first**, producing an intermediate artefact at the prototype level:

```
prototype-N-name/feedback-round-K.md
```

This is the structured feedback (themes, what worked, what didn't, observed-but-unresolved, constraints) extracted from the transcripts. It carries verbatim quotes back to the participant who said them. **Review this file before the iteration**. If the synthesis got something wrong, fix it and re-run the iteration step. The synthesis is the team's chance to catch the skill making the wrong call.

The service-designer agent leads the synthesis. The content-designer + developer agents lead the iteration.

### Path B – Structured feedback you wrote yourself

When the team has already done the synthesis (e.g. via a workshop, or because the round was small enough), feed the skill a structured feedback file directly. The skill skips the synthesis step.

The structured shape is:

```markdown
# Feedback round [N] – [prototype name]

**Date:** YYYY-MM-DD
**Source:** [user testing, MDA review, internal critique, etc.]
**Participants:** [count and brief description]

## What worked

[Bullets. Specific. Quotes where you have them.]

## What didn't work

[Bullets. Specific. Where each citizen got stuck, what they did instead, what they said.]

## What changed (since last round)

[Brief – what the last iteration tried and how that landed.]

## Observed but unresolved

[Things you noticed but aren't sure how to act on. Useful for the skill to know about.]

## Constraints surfaced

[New constraints from the MDA, MIST, policy, design system. Anything that wasn't true last round.]
```

The user can paste this directly into the prompt, or point to a file containing it.

---

## What this skill produces

For each iteration:

| File | Purpose |
|---|---|
| `index.html` | The new version of the prototype – the same single-file format |
| `CHANGES.md` | A changelog of what was changed, why, what feedback it was responding to, what's now in or out of the assumptions panel |
| `assumptions.md` (updated) | The assumptions panel evolves – resolved assumptions move out, new ones move in |

The skill never overwrites the prior version. Versions stack as `iteration-1/`, `iteration-2/`, `iteration-3/` etc., so the team can compare and the next team can see how the thinking evolved.

---

## How the skill works

When invoked, the skill:

1. **Reads the current prototype** – HTML and assumptions panel
2. **Reads the input** – if it's a folder of transcripts, runs synthesis (Path A) and saves the result as `feedback-round-K.md`. If it's a structured feedback file, skips to step 3.
3. **Categorises the feedback** into:
   - Critical changes (the prototype is broken without these)
   - Important changes (citizens consistently struggle; address this round)
   - Worth-testing changes (could go either way; test in next round)
   - Defer (interesting but not for now)
   - Reject (with reasoning)
4. **Produces the next version** with the critical and important changes applied. Worth-testing changes may be split into two parallel variants if the team is curious.
5. **Updates the assumptions panel.** Resolved assumptions move to a "resolved" sub-section with the round number. New assumptions added are tagged with the source (this round's testing).
6. **Writes the changelog** – every change links back to a specific piece of feedback. No silent changes.

---

## Resolving an assumption

Assumptions in the panel are tagged `[VERIFY WITH USERS]`, `[VERIFY WITH MDA]`, etc. After an iteration round, some become **resolved**.

Resolution requires evidence in the changelog. Examples:

```markdown
Resolved (round 2):
- "Doctors will trust a Trident ID lookup for licensing"
  → Confirmed with 6 of 7 doctors in round-1 testing. One asked
    for a fallback path; this is now an [VERIFY WITH USERS] item
    for round 2.
```

Don't resolve assumptions on a hunch. If the testing didn't cover it, the assumption stays in the panel.

---

## Defending the spec when the MDA changes its mind

The most common iteration pattern in government services: the MDA changes a requirement mid-flight. The skill handles this in two parts:

1. **Apply the change** as faithfully as possible to the prototype.
2. **Surface the cost** in `CHANGES.md` – which user need is now harder to meet, which standard the change pushes against, what evidence supports keeping the old shape.

That way the team has a written record of the trade-off when the next show-and-tell rolls around. Standard 9 in action.

---

## What this skill does not do

- **It does not pretend feedback is data when it isn't.** Three doctors in a hallway and a Permanent Secretary's strong feeling are not equivalent. The skill says so in the changelog. When working from transcripts, the synthesis weights signal by how many participants reported it and how consistent the signal was.
- **It does not silently rewrite a participant's words.** Quotes in `feedback-round-K.md` are verbatim from the transcripts, with the participant ID attached. If a quote was paraphrased, the skill marks it as such.
- **It does not throw the transcripts away.** They stay in `transcripts-round-K/` so the next team can see the raw data behind the iteration. Standard 9.
- **It does not produce iterations that violate accessibility.** Standard 3 is a floor. If feedback would require breaking Standard 3, the skill refuses and explains.
- **It does not collapse the assumptions panel.** The point of iteration is that assumptions get resolved or sharpened, not hidden.
- **It does not version-bump without input.** Either transcripts or a structured feedback file is required. "Make it nicer" is not feedback.

---

## A worked-out short example

**Input:** prototype-1-phone-first/iteration-1/index.html plus feedback that 4 of 6 doctors in testing couldn't find the "Save and come back later" link.

**Output:**

```
prototype-1-phone-first/
├── iteration-1/
│   ├── index.html  (existing)
│   ├── assumptions.md
│   └── (no CHANGES.md – this was the initial /build output)
├── iteration-2/
│   ├── index.html  (new)
│   ├── assumptions.md  (updated)
│   └── CHANGES.md  (new – describes what shifted)
```

`CHANGES.md` would say:

```markdown
# Iteration 2 – Prototype 1 (Phone-first individual renewal)

Round of feedback: user testing, 6 doctors at QEH and Bridgetown private practice, 2026-06-03.

## Critical changes applied

1. **"Save and come back later" promoted from footer link to a primary action.**
   - Feedback: 4 of 6 doctors could not find it during testing
   - Now appears as a secondary button next to Continue on every question page
   - Standard 5 (works first time)

## Important changes applied

2. **Trident ID confirmation screen split into two steps.**
   - Feedback: 3 of 6 doctors scrolled past the confirmation without checking
     it because the page felt like a "wait" screen
   - Now: a clear "Is this you?" page with Yes / No / Something's wrong actions
   - Standard 1 (meet user needs), Standard 11 (trust)

## Worth testing in round 3

3. CPD upload now accepts photo of paper certificate as well as PDF.
   - Tested with: still untested
   - Hypothesis: increases completion among older doctors who use paper records
   - Tag: [VERIFY WITH USERS – round 3]

## Deferred

4. CPD year picker (multi-year CPD).
   - Out of scope for round 3; revisit at alpha gate

## Resolved assumptions

- "Doctors will trust a Trident ID lookup" → confirmed in round 1 (6 of 7)

## New assumptions

- "A photo of a paper certificate is a credible CPD evidence format" → [VERIFY WITH USERS]
- "The Save-and-come-back state is preserved for at least 30 days" → [VERIFY WITH MIST]
```

The team now has an iteration to test, an audit trail, and a list of what's open.

---

## Iteration cadence

Default cadence:

| Round | Typical activities |
|---|---|
| 1 | First version from `/build`; 5–6 users in testing |
| 2 | Apply critical changes; 5–6 users |
| 3 | Apply important changes; 8–10 users; first round with under-represented voices specifically recruited |
| 4 | Refinement and edge cases; usually the last round before picking a path into beta |

By round 4 the team should have enough evidence to take one prototype forward. If they don't, the brief or the underlying problem probably needs more discovery, not more prototyping.

---

## Citing standards

Every iteration's `CHANGES.md` cites the standards that drove the change. Example:

> Standard 5 (works first time) – 4 of 6 doctors stuck on Save-and-come-back.
> Standard 4 (simple language) – swapped "Resume application" for "Pick up where you left off".
> Standard 7 (open platforms) – flagged Trident ID session-state behaviour for MIST.

That way the alpha gate `/assess` can trace every iteration back to the standards work.
