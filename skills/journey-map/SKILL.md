---
name: journey-map
description: Produce a user journey map – current state or future state – showing what a citizen does, thinks, and feels step by step, across every channel, with the evidence behind each step. Canonical output is Markdown; optionally renders a single-file HTML visual in the GovBB style. Use in discovery for the current state, in alpha for the future state. Triggers on "journey map", "map the journey", "current-state journey", "future-state journey", "what do citizens do today", "map what happens when someone".
---

# Journey map

This skill produces a user journey map: the citizen's experience of getting something done, step by step, across every channel – not just the digital ones. It supports Barbados Digital Service Standard 1 (meet user needs) and GOV.UK Principle 1 (start with user needs) and Principle 7 (understand context).

A journey map is the team's shared answer to "what actually happens?" Walk the current journey before designing a future one – that's the service designer's iron law #3.

---

## When to use this skill

- **Discovery:** map the current state – what citizens do today, including the queues, the phone calls, the cousin who helps
- **Alpha:** map the future state – what the redesigned journey should be, so prototypes have a spine to hang off
- **Any phase:** when the team is arguing about a step and needs to see the whole thing

For the actors and systems around the journey, defer to `bimstack:ecosystem-map`. For the backstage processes underneath it, defer to `bimstack:service-blueprint`. When the scope is broader than one service, defer to `bimstack:experience-map`.

---

## Rules

1. **Evidence per step, or mark it as assumption.** Every step cites where it came from – a transcript, a front-line shadow, analytics, or `[ASSUMPTION]` in bold. A journey map with no citations is fiction with columns. Pull evidence from research via `bimstack:transcript-analysis` where transcripts exist.
2. **Start before the service and end after it.** The journey starts when the citizen first realises they need the thing (often a letter, a deadline, a friend's warning) and ends when they've got what they needed and believe it – not at "form submitted".
3. **Every channel, not just digital.** Phone, counter, WhatsApp, the neighbour who "knows somebody". If 60% of the journey happens offline, the map shows 60% offline.
4. **Emotions are data.** Record what citizens said they felt at each step, quoted or closely paraphrased – not what the team imagines they felt.
5. **Current state maps what is, not what should be.** Resist fixing things mid-map. Park ideas in the opportunities row.

---

## The template

```markdown
# Journey map – [what the citizen is trying to do, verb-led]

**State:** Current / Future
**User:** [which citizens, in what situation – from the problem statement]
**Scope:** [first step] → [last step]
**Evidence base:** [n interviews, n shadows, analytics reviewed, transcripts at link]
**Date / team:**

## The journey

| | Step 1: [name] | Step 2: [name] | Step 3: [name] | … |
|---|---|---|---|---|
| **Doing** | What the citizen does, in their words | | | |
| **Channel** | Online / phone / counter / third party / paper | | | |
| **Thinking** | What they're trying to figure out | | | |
| **Feeling** | Quoted or paraphrased, with participant ID | | | |
| **Touchpoints** | Letters, screens, offices, people | | | |
| **Pain points** | What breaks, stalls, or confuses – evidence cited | | | |
| **Workarounds** | What citizens do that the service didn't design for | | | |
| **Evidence** | [P3 interview], [shadow day 2], [analytics], [ASSUMPTION] | | | |
| **Opportunities** | (future-state candidates – kept separate from the record of what is) | | | |

## The moments that matter

[2–4 steps where the journey is won or lost, and why. This is what the team should read if they read nothing else.]

## What we still don't know

[Steps that are thin on evidence. Feed these into the next research round via `bimstack:research-planning`.]
```

Keep it to 5–9 steps. If you need more, the scope is probably two journeys – split them.

---

## Optional: single-file HTML visual

When the team wants a wall-sized or shareable visual, render the same content as one self-contained HTML file (`journey-map.html`) following the bimstack prototype pattern: single file, renders in any browser, Figtree via Google Fonts, inline CSS approximating the GovBB design system (`govbb-` class prefix, navy `#00267F` for headings, design-system tokens – no Tailwind, no invented colours). Lay the steps out as horizontal columns with the Doing/Feeling/Pain rows aligned across them; render pain points and workarounds so they stand out at a distance. The Markdown remains the canonical, diffable artefact – the HTML is a rendering of it, regenerated when the Markdown changes.

---

## What makes a good journey map

- A front-line worker recognises it ("yes, that's what actually happens") and a citizen would too
- The most senior person in the room learns something from it
- Pain points carry evidence, not adjectives
- The future-state map, when it comes, can be laid beside it step by step to show exactly what changes
