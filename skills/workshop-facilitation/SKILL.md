---
name: workshop-facilitation
description: Plan and run a working session where stakeholders co-create rather than get consulted – journey mapping with the MDA, prioritisation, assumption-surfacing, findings sense-making. Produces a workshop plan with purpose, participants, agenda with timings, materials, and a capture plan for what happens to the outputs. Triggers on "workshop", "plan a workshop", "co-design session", "working session with the MDA", "get stakeholders in a room", "facilitate a session", "kickoff session".
---

# Workshop facilitation

This skill plans working sessions where stakeholders make things together, rather than being presented at. It supports Barbados Digital Service Standard 2 (multidisciplinary team) and Standard 9 (be open and transparent), and GOV.UK Principle 3 (design with data) and Principle 10 (make things open: it makes things better).

A workshop is not a meeting with sticky notes. It's a structured way to get knowledge out of people's heads and into a shared artefact – a map, a prioritised list, a set of assumptions – that the team couldn't have produced alone.

---

## When to use this skill

- Discovery kickoff with the MDA – surfacing what they know, fear, and assume
- Mapping sessions – building or correcting a journey map, blueprint, or ecosystem map with the people who actually run the service
- Sense-making sessions – interpreting research findings with the delivery team (`bimstack:research-presenting` explains why this beats a one-way readout)
- Prioritisation – user needs, features for alpha, risks

---

## Step 1: Refuse workshops without a decision

First question, always: **what will be different after this workshop?** A workshop needs an output (an artefact that will exist) and a consequence (a decision or action the output feeds). "Alignment" is not an output. If the honest answer is "the sponsor wants people to feel involved," say so and design something cheaper – a show-and-tell (`bimstack:show-the-thing`) or a walkthrough.

---

## Step 2: The plan

```markdown
# Workshop plan – [name]

**Purpose:** After this session we will have [artefact], which we will use to [decision/action].
**Date / duration / location:**
**Facilitator:** [name] **Co-facilitator/scribe:** [name – never facilitate alone above 6 people]

## Participants

| Who | Why them | What they hold |
|---|---|---|

[8–12 maximum for one room. Beyond that, split into parallel groups with a share-back. Invite the people who do the work, not only the people who manage it – the counter clerk knows things the Permanent Secretary doesn't. Standard 2.]

## Agenda

| Time | Activity | Format | Output |
|---|---|---|---|
| 0:00 | Arrivals, purpose, working agreement | Plenary | Shared expectations |
| 0:10 | Warm-up tied to the topic | Pairs | Everyone has spoken once |
| 0:25 | [Core activity 1] | Small groups | [Artefact section] |
| … | | | |
| −0:15 | So what: read back what we made, confirm next steps | Plenary | Owned actions |

## Materials

[Wall space, printed maps, markers, sticky notes / or the digital equivalent. Print the current-state artefact large – people correct what they can see.]

## Capture plan

[Who photographs/transcribes what, where it lands in the repo, and by when the digitised artefact goes back to participants. A workshop whose outputs die on the wall was a party, not a workshop. Standard 9.]
```

---

## Facilitation craft

- **Design for the quietest person.** Rounds, pairs, and writing-before-talking beat open discussion, where the senior-most voice wins. Silence from the front-line staff usually means the room's power dynamics are working against you – change the format mid-session if you have to.
- **Make people write on the artefact, not talk about it.** Corrections belong on the map. "Just tell me and I'll add it" recreates the consultation dynamic the workshop exists to avoid.
- **Timebox and mean it.** Better a rough complete artefact than a perfect first third.
- **Park, don't debate.** A visible parking lot for real-but-off-purpose issues, each with a named owner at close.
- **The facilitator holds the process, not the content.** If the service designer needs to argue a point, the co-facilitator takes over the room while they do.
- **Close with the read-back.** Read the artefact aloud, ask "what's wrong or missing?", assign the parking lot, and say exactly when participants will see the digitised output.

---

## After

Digitise the artefact within 48 hours into its canonical bimstack form (`bimstack:journey-map`, `bimstack:service-blueprint`, `bimstack:ecosystem-map`, or a prioritised list in the discovery kit), send it back to participants for correction, and file it in the repo. Corrections from participants are evidence – log them like research.
