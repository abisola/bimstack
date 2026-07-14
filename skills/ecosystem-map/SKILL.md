---
name: ecosystem-map
description: Map the ecosystem around a service – every actor, channel, system, and relationship, not just the digital ones – so the team can see who and what the service actually depends on. Canonical output is Markdown; optionally renders a single-file HTML visual in the GovBB style. Use in discovery. Triggers on "ecosystem map", "map the ecosystem", "who's involved in this service", "actors and systems", "map the landscape around", "what does this service depend on".
---

# Ecosystem map

This skill maps the ecosystem a service lives in: the actors (citizens, intermediaries, MDA staff, other agencies, private players), the channels they use, the systems they touch, and the relationships between them. Where the journey map is a sequence, the ecosystem map is a network.

It supports Barbados Digital Service Standard 1 (meet user needs), Standard 2 (multidisciplinary team – it shows who needs to be in the room), and Standard 7 (open, interoperable platforms), and GOV.UK Principle 7 (understand context).

---

## When to use this skill

- **Discovery, weeks 2–4** – once stakeholder interviews and early research start revealing who's actually involved
- When a service keeps failing at an organisational boundary and nobody can see why
- Before integration decisions – the map shows which systems exist and who owns them

The stakeholder map in `bimstack:discovery-kit` lists who has skin in the game; the ecosystem map shows how they're connected in practice. For the sequence a citizen moves through, defer to `bimstack:journey-map`; for the machinery under one service, `bimstack:service-blueprint`.

---

## The template

```markdown
# Ecosystem map – [service / need]

**Centre of the map:** [the citizen need, verb-led – not the MDA]
**Evidence base:** [stakeholder interviews, research sessions, system inventory]
**Date / team:**

## Actors

| Actor | Type | Role in the ecosystem | Relationship to the need | Evidence |
|---|---|---|---|---|
| e.g. Medical Council registrar | Government | Approves renewals | Gatekeeper | [interview 4] |
| e.g. Doctor's practice manager | Intermediary | Does the renewal on the doctor's behalf | Hidden primary user | [P2, P5] |

## Channels

| Channel | Owned by | Used for | Volume / notes |
|---|---|---|---|

## Systems and registers

| System | Owner | Holds | Integrates with | Standard 7 notes (reusable? blocked?) |
|---|---|---|---|---|

## Relationships and flows

[Each significant relationship as: Actor A → (what flows: money, documents, data, trust, chasing) → Actor B. Flag the flows that are informal – the phone call, the WhatsApp group, the person who walks the file over.]

## Boundaries and gaps

[Where responsibility passes between organisations and things fall through. Where no actor owns a step citizens need. These are usually the findings.]
```

---

## Rules

1. **Put the citizen need at the centre, not the MDA.** An ecosystem map organised around the department reproduces the org chart. Organised around the need, it reveals intermediaries and informal actors the org chart doesn't know about.
2. **Hunt for the informal actors.** The cousin who fills in forms, the fixer outside the office, the Facebook group where everyone actually learns the process. Research transcripts (via `bimstack:transcript-analysis`) are the best source – citizens name these people when asked what they actually did.
3. **Map what flows, not just who exists.** A list of actors is a phonebook. The value is in the flows – especially the chasing, the re-submissions, and the informal data flows that carry personal information outside any system (flag those for the cyber engineer – Standard 11).
4. **Every system gets a Standard 7 note.** Reusable platform? Owned register? Dead-end spreadsheet? This map is where the reuse conversation starts.
5. **Evidence or `[ASSUMPTION]`**, same as every bimstack map.

---

## Optional: single-file HTML visual

Render as one self-contained HTML file (`ecosystem-map.html`) in the bimstack prototype pattern: single file, Figtree via Google Fonts, inline CSS approximating the GovBB design system (`govbb-` prefix, navy `#00267F`, no Tailwind, no invented colours). Place the citizen need at the centre, actors grouped in rings or clusters by type (citizen-side, intermediaries, government, systems), and draw the flows as labelled connections – informal flows visibly distinct (e.g. dashed). The Markdown is canonical; regenerate the HTML from it.

---

## What makes a good ecosystem map

- At least one actor or flow the MDA didn't know existed
- The informal economy around the service is on the map, not politely omitted
- Every boundary where citizens fall through is named
- The Standard 7 column gives the developer a real starting list for integration conversations
