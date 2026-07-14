---
name: experience-map
description: Map an experience broader than any one service – the citizen's whole goal ("start a business", "have a baby", "lose a parent") across every service, agency, and channel it touches. Shows where individual services sit inside the larger goal and where the seams hurt. Canonical output is Markdown; optionally renders a single-file HTML visual in the GovBB style. Triggers on "experience map", "whole journey across services", "end-to-end experience", "life event map", "everything someone has to do to", "whole service".
---

# Experience map

This skill maps an experience that is bigger than one service: the citizen's actual goal, which government has usually split across several MDAs, each of which sees only its own slice. "Renew my medical licence" is a service. "Keep practising medicine in Barbados" is an experience – it also involves insurance, CME credits, the hospital's credentialing, and the bank.

It supports Barbados Digital Service Standard 1 (meet user needs) and Standard 12 (easy to find – citizens search for the goal, not the department), and GOV.UK Principle 1 (start with user needs) and Principle 7 (understand context).

---

## When to use this skill

- **Pre-discovery or early discovery** – when scoping, to see which slice of the whole goal a discovery should take on, and to keep the problem statement honestly scoped
- When research keeps surfacing pain that belongs to a neighbouring service ("the form was fine, but I'd already been to three other offices that week")
- When multiple MDAs each own a piece of one citizen goal and nobody owns the seams

For one service's step-by-step sequence, defer to `bimstack:journey-map`. For the actors and systems as a network, `bimstack:ecosystem-map`. The experience map sits above both: it's the map of maps.

---

## The template

```markdown
# Experience map – [the citizen's whole goal, in their words]

**Trigger:** [the life event or moment that starts this – often not a government moment]
**Resolution:** [when the citizen would say "done" – their definition, not government's]
**Evidence base:** [research across the experience, not just our service]
**Date / team:**

## The stages

| | Stage 1: [name] | Stage 2: [name] | … |
|---|---|---|---|
| **Citizen's goal at this stage** | In their words | | |
| **Services & organisations touched** | Government and non-government | | |
| **What they must know / prove / carry** | Documents, numbers, prior approvals – the burden of coordination | | |
| **Time & repeat contact** | Elapsed time; how many separate contacts | | |
| **Feeling** | Quoted or paraphrased, with participant ID | | |
| **Seams** | Where one organisation hands off to another and the citizen carries the join | | |
| **Evidence** | [P3], [shadow], [analytics], [ASSUMPTION] | | |

## Where our service sits

[Which stage(s) the service in question occupies, and what arrives at its front door already broken from earlier stages.]

## The coordination burden

[Everything the citizen personally does to hold the experience together – re-entering data, ferrying paper between agencies, translating one agency's language for another. This is work the service side should be doing.]

## Scope recommendation

[Given the whole map: which slice should the team actually take on, what's out of scope, and which seams need at minimum a warm handoff even if they stay out of scope.]
```

Keep to 4–7 stages. Stages are the citizen's chapters, not organisational phases.

---

## Rules

1. **Name the map after the citizen's goal, verb-led, in their language.** If the title contains an MDA's name or a programme name, start again.
2. **Include the non-government actors.** Banks, employers, insurers, churches, family. Citizens don't experience a "government journey" – they experience their life, in which government is one (often slow) participant.
3. **The seams are the findings.** Within one service things are usually survivable; between services is where citizens repeat themselves, re-prove things government already knows, and give up. Evidence the seams hardest.
4. **Use it to scope honestly.** The experience map's job in bimstack is to keep a discovery from pretending its slice is the whole goal – and to record which seams the team is knowingly leaving unfixed. That goes in the problem statement's out-of-scope section (`bimstack:discovery-kit`).
5. **Evidence or `[ASSUMPTION]`.** Research from neighbouring services counts – cite it.

---

## Optional: single-file HTML visual

Render as one self-contained HTML file (`experience-map.html`) in the bimstack prototype pattern: single file, Figtree via Google Fonts, inline CSS approximating the GovBB design system (`govbb-` prefix, navy `#00267F`, no Tailwind, no invented colours). Stages as broad horizontal chapters, the services touched shown as blocks within each stage, seams drawn explicitly as marked gaps between blocks, and a highlighted band showing where our service sits. The Markdown is canonical; regenerate the HTML from it.

---

## What makes a good experience map

- The citizen's definition of "done" frames the whole thing
- Seams between organisations are drawn as first-class objects, not white space
- It changes the scope of a discovery – widening it, narrowing it, or adding a warm handoff the team hadn't planned
- An MDA reading it sees, maybe for the first time, the coordination work its citizens are doing for free
