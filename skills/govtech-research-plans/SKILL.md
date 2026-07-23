---
name: govtech-research-plans
description: Produce complete user research plans for GovTech Barbados as a three-part Word document — Part 1 research plan, Part 2 discussion guide, Part 3 note-taking framework. Covers moderated usability testing of prototypes, discovery interviews, and concept testing. Use this skill whenever the user asks for a research plan, discussion guide, note-taking framework, interview guide, research protocol, usability test plan, or session materials for any GovTech Barbados, alpha.gov.bb, or Ministry/MDA service — even if they only ask for one of the three parts, and even if they just say "plan the research for X" or "help me test this prototype with users". If a prototype URL is mentioned alongside research, testing, or user sessions, this skill applies.
---

# GovTech Barbados research plans

Produce a research plan the team can run tomorrow: specific tasks grounded in the actual thing being tested, scripts a facilitator can read aloud, and note-taking tables a note-taker can fill in live. The output is always one .docx with three parts. The quality bar is the Open Pharmacy / EHD Forms plans this skill was distilled from: every task scenario traceable to real content, every comprehension check with a stated correct answer, ethics written around the project's actual sensitivity rather than pasted boilerplate.

## Workflow

### Step 1 — Establish method, subject, audience

Work out (from the request, then by asking only what's missing):

1. **Method** — usability testing, discovery interviews, or concept testing. If the user has a prototype and wants to know whether people can use it → usability. If there's no design yet and the goal is understanding a problem space → discovery. If there's a concept, sketch, or proposition to react to → concept testing. Read the matching reference file before drafting:
   - `references/usability-testing.md`
   - `references/discovery-interviews.md`
   - `references/concept-testing.md`
2. **Subject** — if a prototype URL is given, fetch and analyse it (see below). If not, ask the user to describe what's being tested/explored, or work from documents they've shared.
3. **Audience(s)** — who uses this service. Ask if not obvious. Multiple distinct audiences (e.g. vendors vs organisers, citizens vs intermediaries) change the plan's structure — see Step 2.
4. **Deadline** — any launch date or event driving the timeline (Crop Over, fiscal year, ministerial commitment). Anchor the timeline section to it.

**Analysing a prototype URL.** Rendered fetches of alpha.gov.bb-pattern prototypes often return only the JS-disabled fallback. Download the raw HTML (`curl`) and mine it for the real structure:

- `<h1>`/`<h2>` extraction gives the step names and start-page sections
- String literals in the embedded JS give field labels, hints, error messages, option lists, and declaration text — regex for question marks, `Title Case` strings, and `label/hint/legend:` patterns
- Look specifically for: required vs optional markers, validation messages ("Enter a valid…", "You must apply at least…"), declaration checkbox wording, reference number prefixes, `confirmNote(...)` calls (these mark content the department hasn't confirmed yet — flag them to the user as things to align before piloting), and sample-data autofill controls (useful in the method section for skipping non-focus pages)

Ground every task, comprehension check, and "correct answer" in what the pages actually say. Never invent content the prototype doesn't contain.

### Step 2 — Make the structural decisions before writing

These are judgement calls the skill encodes as rules:

1. **Split flows for distinct audiences.** If the service has two or more genuinely different user roles, give each role its own task track (e.g. Tasks 1–2 vendor, Tasks 3–4 organiser) and state that no participant does all tracks. One mega-session exhausts participants and produces mush. Split the participant quota table accordingly and alternate flows across fieldwork days.
2. **Fictional data always.** Participants never enter real personal details. Every form task comes with a data card of made-up details, and the consent script says this out loud before tasks begin. List what goes on each data card in a facilitator note.
3. **Name the project's sensitivity and design around it.** Every service has one: health disclosure, livelihood/compliance history, immigration status, finances, family circumstances. Identify it, write scenarios so nobody must disclose their own situation (third-person fictional scenarios work well), and put an explicit "do not ask / do not report" line in both the ethics section and the relevant facilitator notes.
4. **Design at least one "don't know" moment** (usability testing of forms). Find a question the real user plausibly can't answer at the time of asking (an organiser's email, whether someone else has already done a step) and deliberately omit it from the data card. What participants do with incomplete knowledge — guess, ask, hunt for an "unsure" option — is a finding either way. Mark it as a key observation in the facilitator note and the note-taking framework.
5. **Derive the Critical-severity example from the worst real-world wrong action** the service could cause — not a generic definition. (Missing a legal deadline; travelling somewhere that will turn you away; believing one licence covers people it doesn't.) Use it in the severity table and let it shape which comprehension checks matter most.
6. **Comprehension checks carry stated correct answers.** Every check question in the guide has a matching row in the note-taking framework with the correct answer spelled out, so right/partial/wrong can be judged live by a note-taker who isn't the designer.

### Step 3 — Produce the document

Read `references/standard-blocks.md` (verbatim scripts, observation codes, severity scale, ethics requirements) and `references/docx-build.md` (build approach), then write the three parts:

**Part 1 — Research plan**
1.1 Background · 1.2 Research goals · 1.3 Research questions (numbered RQ table with prototype/topic area column) · 1.4 Method (prose + detail table) · 1.5 Participants and recruitment (quota table + recruitment prose) · 1.6 Ethics and consent · 1.7 Timeline and responsibilities · 1.8 Analysis and outputs

**Part 2 — Discussion guide**
[INTRO] · [CONSENT] · [IF CONSENT GIVEN] Background questions · [OBSERVATION PROMPTS FOR ALL TASKS] (usability) or equivalent probing guidance · Tasks/topics, each with: Scenario (italic script), Facilitator note (grey shaded box — logistics, what to watch, correct answers, when to prompt), Comprehension checks or probes · [POST-TASK QUESTIONS] grouped under Understanding & clarity / Navigation & flow / Content & language / Confidence & trust / Specific elements · [CLOSING]

**Part 3 — Note-taking framework**
3.1 Session header table · 3.2 Observation codes · Per-task sections, each with "Watch for and record" bullets + result tables (step tables with S/H/E/A column; comprehension tables with correct-answer column) · Ratings table · Top observations (note-taker completes within 15 minutes) · Severity ratings table

Conventions that make the document usable in the field:

- Italic text = suggested script, said naturally; grey boxes = facilitator notes, never read aloud. State this convention at the top of Part 2.
- Intercept compression: state which single task the shortest viable session covers.
- Method table covers: format, session length (per flow), participants, device (own phone via QR code, team device fallback, how upload test files reach the participant), sample-data policy (autofill only on non-focus pages), recording (audio only, notes primary), locations, team (facilitator + note-taker, roles never rotate within a session).
- Timeline table: Week 1 pilot (one dry run per flow) → Weeks 1–2 fieldwork (2–3 sessions/day) → Week 2 analysis and show-and-tell playback.
- Analysis: same-day 15-minute debriefs, affinity mapping against RQ numbers (kept separate per flow before combining), severity rating at debrief not live, outputs = playback deck + prioritised issue log + backlog items.
- Success signals: unassisted completion, correct comprehension answers, confidence self-rating 4+/5.

### Step 4 — Build, verify, deliver

Build with docx-js per `references/docx-build.md` (which includes a ready helper module at `scripts/docx_helpers.js` — copy it next to your build script). Render the result to images (`soffice` → `pdftoppm`) and inspect at least the title page, one table-heavy page, and one facilitator-note page before delivering. Save the final .docx to `/mnt/user-data/outputs` and present it.

When delivering, flag to the user:
- any `confirmNote` content found in the prototype (unconfirmed facts the guide's correct answers depend on)
- any assumption made about audience split or sensitivity they should sanity-check
- that the guide should be piloted (one dry run per flow) before real participants

## What not to do

- Don't produce the plan as chat text or markdown — this deliverable is always a .docx.
- Don't write tasks or correct answers from memory of similar services; extract them from the actual prototype or the user's description.
- Don't paste the ethics section unchanged between projects. The BDPA 2019 line and the withdrawal/anonymisation lines are constant; the sensitivity paragraph is written fresh every time.
- Don't let participants use real personal data, even if the user suggests it would be more realistic.
- Don't ask the user questions the prototype can answer (step names, field labels, what's required vs optional).
