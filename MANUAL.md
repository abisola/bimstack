# bimstack usage manual

A guide for GovTech Barbados colleagues, sibling MDAs, and vendor teams who want to use bimstack to build digital services.

If you're new to GovTech, start here. If you've used bimstack before, this is your reference.

---

## Contents

1. [What is bimstack](#1-what-is-bimstack)
2. [Why bimstack exists](#2-why-bimstack-exists)
3. [Before you start](#3-before-you-start)
4. [Install bimstack](#4-install-bimstack)
5. [The team you have just hired](#5-the-team-you-have-just-hired)
6. [The seven-verb sprint](#6-the-seven-verb-sprint)
7. [The four phases](#7-the-four-phases)
8. [The commands at your fingertips](#8-the-commands-at-your-fingertips)
9. [Your first day with bimstack](#9-your-first-day-with-bimstack)
10. [Your first week with bimstack](#10-your-first-week-with-bimstack)
11. [The two workflows you'll use most](#11-the-two-workflows-youll-use-most)
12. [Common questions](#12-common-questions)
13. [Anti-patterns to avoid](#13-anti-patterns-to-avoid)
14. [Getting help](#14-getting-help)
15. [Where to read next](#15-where-to-read-next)
16. [Glossary](#16-glossary)

---

## 1. What is bimstack

**bimstack is how the GovTech Barbados team builds digital services with the help of an AI assistant (Claude).** It is a Claude Code plugin that gives the team five opinionated specialist agents, nine slash commands, and a set of shared skills – all anchored to the Barbados Digital Service Standards, the GOV.UK Design Principles, and the GDS Way.

It is a process, not a collection of tools. The plugin nudges the team toward the right thing at the right phase – speaking to citizens before designing anything, writing in plain language, reusing the design system, working in the open, iterating based on evidence.

**The plugin does not build the service for you.** The team still talks to citizens, makes design decisions, writes the code, and ships the work. What bimstack does is keep the team on the rails – making sure no one accidentally ships a service that fails the Barbados Standards on the day a citizen first sees it.

The current version is **v0.1**. Expect changes. File issues. Improve it.

---

## 2. Why bimstack exists

The GovTech Barbados team builds services that touch citizens at moments that matter – when they're sick, when they've just had a baby, when they're starting a business, when they're renewing a licence they need to drive to work. Every interaction is a small test of whether the social contract still holds.

Building services that meet that bar – consistently, across many teams, across many years – is hard. The same mistakes keep happening across government departments around the world:

- Teams design before they research, and ship the wrong thing
- Civil-service language creeps into citizen-facing copy, and citizens who need the service most struggle to use it
- Each MDA rebuilds the same components, instead of reusing what GovTech already provides
- Services launch well and decay slowly when nobody is funded to keep improving them
- Security is treated as a sign-off at the end, instead of designed in from the start
- Working in the open gets replaced by closed teams who lose the wider feedback loop

bimstack bakes the antidotes into the team's day-to-day workflow. Every agent reads the same standards. Every slash command anchors its output to the same principles. Every iteration is auditable – a future team member can trace why each decision was taken.

**Read more:** [`ETHOS.md`](./ETHOS.md) for the eight beliefs underneath the plugin.

---

## 3. Before you start

You need three things:

1. **Claude Code or Cowork installed.** Either works. bimstack runs in both.
2. **Git and a terminal.** Standard.
3. **A short brief.** Even a few sentences. bimstack is most useful with a real problem to work on. If you don't have one yet, you can still install it and walk through the worked example.

Plus one thing that's not technical but matters more than the rest:

4. **An honest team.** bimstack is opinionated. The agents will push back if you ask them to skip discovery, ship without private beta, or hide bad news. That's the point. If your culture punishes honesty, the plugin will be unpleasant to use.

Nothing else. No special accounts, no API keys, no infrastructure provisioning.

---

## 4. Install bimstack

### From a local folder (for testing)

```bash
cd /Users/abisola/dev-env/claude/bimstack
git init && git add . && git commit -m "bimstack v0.1"
```

Then in any Claude Code or Cowork session:

```
/plugin marketplace add /Users/abisola/dev-env/claude/bimstack
/plugin install bimstack@bimstack
```

### From GitHub (once you've pushed)

```
/plugin marketplace add abisola/bimstack
/plugin install bimstack@bimstack
```

### Confirm it worked

In a new session:

- Type `/bimstack:` and the autocomplete should reveal all nine commands: `/bimstack:build`, `/bimstack:iterate`, `/bimstack:productionise`, `/bimstack:discover`, `/bimstack:weeknote`, `/bimstack:assess`, `/bimstack:show`, `/bimstack:plain-language`, `/bimstack:threat-model`. (Claude Code namespaces plugin commands by plugin name, so the bare `/discover` form won't appear – type the `/bimstack:` prefix first.)
- Run `/agents` to list the agents Claude Code can route to. You should see service-designer, content-designer, delivery-manager, developer, cyber-engineer alongside the agents you already had.
- Try a task that matches an agent's description, e.g. *"Plan a discovery for renewing a fishing licence."* Claude Code routes it to the service-designer automatically – you don't `@-mention` agents in Claude Code, you describe the task.

### Install the supporting plugins

bimstack assumes these are also installed (they handle the GovTech Barbados visual identity and the broader design / service-design skill libraries). All are open and reusable:

- `govtech-barbados-services` – clickable alpha.gov.bb prototypes
- `govtech-barbados-forms` – multi-page form prototypes
- `govtech-barbados-presentations` – slide decks in the GovTech house style
- `govtech-barbados-qr-codes` – branded QR codes
- Anthropic `design`, `service-design`, `frontend-design` plugin marketplaces

bimstack still works without them but is more powerful with them installed. The load-bearing skills – the research cycle, journey maps, service blueprints, ecosystem maps, experience maps, and workshop plans – are native to bimstack, so nothing dead-ends if the Anthropic plugins are absent.

---

## 5. The team you have just hired

When you install bimstack, you've added five new specialists to your team. They don't replace the team you already have. They sit alongside it.

### The Service Designer (`@service-designer`)

The Service Designer is quietly insistent and sceptical of solutions that arrive before problems. They lead discovery, plan research, synthesise interviews, map journeys and ecosystems, write problem statements.

They carry a dedicated research toolkit: `research-planning` (decision-linked objectives before any discussion guide, behavioural questions over opinion questions), `transcript-analysis` (what participants did, not what they said, cross-referenced against prior rounds), `research-presenting` (readouts a delivery team will act on), and `research-coach` (the mentor and router across the whole cycle – ask it "how am I doing" and it will tell you specifically).

**Use them when:** starting a new service, planning user research, running or debriefing interviews, mapping a current-state journey, synthesising interview notes or transcripts, preparing a research readout, asking "what user need does this serve?"

**They own:** Standards 1 (meet user needs), 5 (works first time), 10 (continuously improved).

### The Content & Interaction Designer (`@content-designer`)

The Content & Interaction Designer is gentle but uncompromising on plain language. They write and review copy, build prototypes on alpha.gov.bb, run accessibility audits, design forms and error states.

**Use them when:** writing or rewriting citizen-facing copy, designing a form, naming a button, wording an error message, running an accessibility check, building a clickable prototype.

**They own:** Standards 3 (everyone can use it), 4 (simple language), 5 (works first time), 12 (easy to find).

### The Delivery Manager (`@delivery-manager`)

The Delivery Manager is direct, calm, and unflustered. They are the connective tissue of the team – not the boss. They run sprints, write weeknotes, prepare show-and-tells, run standards self-assessments, manage phase transitions.

**Use them when:** planning a sprint, writing the Friday weeknote, preparing a show-and-tell, running an honest self-assessment against the Standards, deciding whether the team is ready for a phase gate.

**They own:** Standards 2 (multidisciplinary team), 8 (sustainable), 9 (open and transparent), 13 (monitor and measure).

### The Developer (`@developer`)

The Developer is direct, plain, and useful. They scaffold prototypes, build production code, integrate with Trident ID and the shared payment gateway, write architecture decision records (ADRs), run technical-readiness reports.

**Use them when:** making a technology choice, building a prototype or production page, integrating with a GovTech platform, deciding hosting and CI/CD, wiring up the four GDS baseline metrics.

**They own:** Standards 5 (works first time), 6 (right tools), 7 (open, interoperable), 8 (sustainable), 13 (monitor and measure).

### The Cybersecurity Engineer (`@cyber-engineer`)

The Cybersecurity Engineer is calm, plain, and concrete. They produce threat models, write privacy notices, plan pen tests, refresh DPIAs, write incident runbooks.

**Use them when:** designing a feature that touches personal data, planning a pen test, writing or reviewing a privacy notice, responding to a security finding, briefing a team on data protection.

**They own:** Standard 11 (trust, safety, confidentiality), and supports Standards 3, 6, 8, 9.

**Read more:** [`AGENTS.md`](./AGENTS.md) for the full per-agent specification.

---

## 6. The seven-verb sprint

bimstack's workflow mantra:

```
Listen → Map → Make → Test → Ship → Show → Iterate
```

Every sprint. Every phase. Every service.

- **Listen** – user research, stakeholder interviews, front-line shadowing
- **Map** – journeys, blueprints, ecosystem maps, problem statements
- **Make** – plain-language copy, prototypes, production code
- **Test** – usability, accessibility, security, performance
- **Ship** – discovery → alpha → beta → live, in small releases
- **Show** – weeknotes, show-and-tells, working in the open
- **Iterate** – continuously, while the citizen still needs the service

These are activities the team rotates through – not a process you march through in order. A team in alpha that's heavy on Make and light on Listen has misread the phase. A team in beta that hasn't started Test is heading for trouble.

**Read more:** [`WORKFLOW.md`](./WORKFLOW.md) for each verb in detail.

---

## 7. The four phases

bimstack uses the GDS Way phases. Each phase has a clear purpose. The team produces different things in each.

| Phase | Purpose | Typical duration | What you produce |
|---|---|---|---|
| **Discovery** | Find out whether to build, and for whom | 6–12 weeks | A problem statement, a prioritised list of user needs, a recommendation to proceed / redesign / stop |
| **Alpha** | Prototype the riskiest assumptions, pick a path | 8–12 weeks | Multiple clickable prototypes tested with citizens, one chosen path into beta |
| **Beta** | Build the real service and put it in front of real citizens | 12–26 weeks for private beta; ongoing for public beta | Working production code, the four GDS metrics being reported, source in a public repository |
| **Live** | Keep meeting the user need as the world changes | Indefinite – until the service is retired | Continuous improvement, published performance data, a service that still works in three years |

**Each phase ends with a gate** – the team self-assesses against the Barbados Digital Service Standards. bimstack's `/bimstack:assess` command runs the self-assessment. A formal panel reassessment follows.

**The agents adjust by phase.** Ask the Developer to "build production code in alpha" and they'll push back – production code belongs in beta. Tell every agent what phase you're in; they'll adjust what they produce.

**Read more:** [`references/gds-way-phases.md`](./references/gds-way-phases.md) for what each phase does and doesn't include.

---

## 8. The commands at your fingertips

bimstack adds nine slash commands. Five for daily work, four for major workflows.

### Major workflows

| Command | What it does | When to run |
|---|---|---|
| `/bimstack:discover [service]` | Scaffolds a discovery: problem statement, stakeholder map, research plan, interview guide, ecosystem map starter, discovery report template | An MDA brief has landed and no research has been done yet |
| `/bimstack:build [brief]` | Turns a brief into 2–3 clickable HTML prototypes in the GovBB house style, with assumptions surfaced inline and a test plan attached | Discovery is done and the team wants testable artefacts in hours, not weeks |
| `/bimstack:iterate [prototype]` | Takes user-testing feedback (structured notes or raw transcripts) and produces the next version with a changelog linking every change to the feedback that drove it | After every round of user testing |
| `/bimstack:productionise [iteration]` | Splits a validated prototype iteration into per-page HTML, removes the alpha-only chrome, generates a comprehensive test suite (E2E, accessibility, security, load), produces a production-readiness report | When a prototype has earned its place through several iteration rounds and the team is ready for beta |

### Daily work

| Command | What it does | When to run |
|---|---|---|
| `/bimstack:weeknote` | Drafts a weekly note in the GDS/GovTech style – honest, plain, public, with a one-line headline | Every Friday |
| `/bimstack:show` | Prepares a show-and-tell session: running order, deck brief, prep checklist | End of every sprint |
| `/bimstack:assess` | Walks the 13 Barbados Standards with evidence, producing a self-assessment report | Before every phase gate; annually in live |
| `/bimstack:plain-language [text]` | Reviews a piece of citizen-facing text against the GovTech word-swap list, reading age, voice, and tone | Whenever you're writing or reviewing copy |
| `/bimstack:threat-model [service]` | Produces (or refreshes) a STRIDE/LINDDUN threat model for a service | Alpha onwards; quarterly in live |

When you're not sure which command to run, ask `@delivery-manager` – they'll route you.

---

## 9. Your first day with bimstack

About two hours, end to end.

### Hour 1 – Read

Read these three files. They are short and they will save you hours of confusion later.

1. **[README.md](./README.md)** (10 minutes) – the elevator pitch, the team, the install
2. **[ETHOS.md](./ETHOS.md)** (15 minutes) – the eight beliefs underneath every iron law
3. **[references/barbados-service-standards.md](./references/barbados-service-standards.md)** (25 minutes) – the 13 standards in full. You will refer back to these constantly.

### Hour 2 – Walk the worked example

Open the medical-licence renewal example. Click through it. Read how it was built.

1. **[examples/discovery-renewing-medical-licence/](./examples/discovery-renewing-medical-licence/)** – the discovery kit. Open the problem statement and the research plan.
2. **[examples/build-renew-medical-licence/](./examples/build-renew-medical-licence/)** – the three clickable prototypes. Open each `index.html` in a browser. Toggle the assumptions panel.
3. **[examples/build-renew-medical-licence/prototype-1-phone-first/](./examples/build-renew-medical-licence/prototype-1-phone-first/)** – the iteration history. Open iteration-1, iteration-2 (CHANGES.md), feedback-round-1.md, transcripts-round-2/, feedback-round-2.md, iteration-3/. Walk the loop.
4. **[examples/production-renew-medical-licence/](./examples/production-renew-medical-licence/)** – the production version. Open `public/index.html` and a few of the others. Read PRODUCTION-READINESS.md.

By the end of two hours you have seen: a discovery, three candidate alphas, three rounds of iteration (including the one driven by raw transcripts including a frontline-staff voice), and the production transition. That is one complete service journey from idea to beta-ready in front of you.

---

## 10. Your first week with bimstack

Pick a real brief – something your team is genuinely working on. Run the loop.

| Day | Activity | Command |
|---|---|---|
| Monday | Run a discovery scaffold on your brief | `/bimstack:discover [your service]` |
| Tuesday | Refine the stakeholder map with your delivery manager; book the first two interviews | `@delivery-manager` |
| Wednesday | Do the first user interview. Take notes. | – |
| Thursday | Synthesise the notes; ask the service designer for the first themes | `@service-designer synthesise…` |
| Friday | Write your first weeknote | `/bimstack:weeknote` |

Don't expect the discovery to be complete by the end of the week. Expect to feel the *shape* of the loop and to have something concrete to discuss with your team and your MDA.

If you finish a discovery in a week, you didn't do a discovery. You did a guess.

---

## 11. The two workflows you'll use most

### Workflow A – From brief to testable prototypes in a week

This is the bimstack rapid-prototyping loop. Cycle time is days, not weeks.

```
Brief → /bimstack:build → 3 testable HTML prototypes → user testing → /bimstack:iterate → v2 → testing → /bimstack:iterate → v3 → … → /bimstack:productionise
```

**Step 1 – Build.** Type `/bimstack:build` followed by your brief or a pointer to your discovery report. The skill produces 2–3 candidate prototypes with the assumptions surfaced inline and a test plan attached.

```
/bimstack:build renewing a fishing licence in Barbados
```

**Step 2 – Test.** Run the test plan with 5–6 citizens per prototype, mixed across cohorts. Capture quotes, hesitations, surprises. Don't pick a winner in round 1.

**Step 3 – Iterate.** Feed the feedback to `/bimstack:iterate`. You can pass:
- A structured feedback file with "what worked / what didn't / observed but unresolved" sections, or
- A folder of raw transcripts – `/bimstack:iterate` synthesises them into a structured file first, then produces the new iteration

```
/bimstack:iterate prototype-1-phone-first using transcripts in transcripts-round-2/
```

The skill produces the next version *and* a `CHANGES.md` linking every change to a specific piece of feedback and the relevant standard.

**Step 4 – Repeat.** Three or four rounds, getting tighter each time. By round 4, one prototype has usually earned its place and the team is ready to take it forward.

**Step 5 – Productionise.** When a prototype is chosen, `/bimstack:productionise` splits it into per-page HTML, generates the test suite, and produces a Standards-anchored production-readiness report.

```
/bimstack:productionise prototype-1-phone-first/iteration-3
```

The worked example at `examples/build-renew-medical-licence/` shows this whole loop end to end.

### Workflow B – The full delivery rhythm

Inside the rapid loop, the broader delivery cadence runs in parallel.

**Every Friday:**
```
/bimstack:weeknote
```
The Delivery Manager drafts the weekly note – honest, plain, public, in your team's voice. Publish it. Even when the week was rough.

**Every second Friday:**
```
/bimstack:show
```
The Delivery Manager prepares the show-and-tell – running order, deck brief, prep checklist. Run the session live. Invite the MDA, sibling MDAs, civil society. Show real work to real people.

**Before every phase gate (alpha→beta, beta→live):**
```
/bimstack:assess for the beta gate
```
The Delivery Manager orchestrates a self-assessment against the 13 Barbados Standards. Every other agent contributes evidence for the standards they own. The output is a structured report with a clear recommendation: proceed, proceed with conditions, do not proceed.

**Whenever you're writing copy:**
```
/bimstack:plain-language [paste text]
```
The Content & Interaction Designer reviews against the GovTech word-swap list, reading age, voice, tone. Produces specific rewrites, not vague advice.

**Alpha onwards, then quarterly:**
```
/bimstack:threat-model
```
The Cybersecurity Engineer produces or refreshes the threat model with STRIDE and LINDDUN frames, controls assigned to owners with dates.

**Read more:** [`PLAYBOOK.md`](./PLAYBOOK.md) for the full phase-by-phase day-to-day rhythm.

---

## 12. Common questions

**Does bimstack replace my team?**

No. The agents are how your team thinks together, not what replaces them. A service designed by agents alone, never tested with citizens, is a brochure with state. The agents are tools the team reaches for inside a normal sprint rhythm.

**What if my MDA wants me to skip discovery?**

bimstack will push back. The Service Designer's iron law is "no build without a user need." If your MDA insists, document the disagreement using the Delivery Manager's agent and escalate via the senior decision-maker named in the stakeholder map. Don't quietly skip the phase – name the cost.

**What if the MDA changes a requirement mid-flight?**

That's normal in government delivery. Use `/bimstack:iterate` to apply the change, and the changelog will record what the change cost (which user need is now harder to meet, which standard the change pushes against). That way the team has a written audit trail when the next show-and-tell rolls around. Standard 9.

**Is bimstack just for forms?**

No. It works for any digital service. The medical-licence example is form-heavy because that's the service we used to develop bimstack. The same loop applies to content pages, service guides, decision-support tools, anything citizen-facing.

**Can I use bimstack for internal-only tools?**

Yes, with caveats. Most of the rules still apply (Standard 3 accessibility, Standard 9 open working, Standard 4 plain language). Some shift weight – internal tools have different user-research recruitment, different cohort definitions. Tell the agents the audience up front. The general shape of the loop holds.

**What if I disagree with one of the agents?**

Push back. The agents are opinionated, not infallible. Ask them to explain their reasoning. If the recommendation doesn't fit the MDA's reality, say so. The agents will adjust or escalate. The team makes the final call.

**Can I customise the agents for our team?**

Yes. Each agent is a Markdown file with YAML frontmatter in `agents/`. Edit it. Pull request the change back to the bimstack repo if it's a generally useful improvement. See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

**What if my brief is just a few sentences and we haven't done research yet?**

Run `/bimstack:discover` first. Don't run `/bimstack:build` against an unevidenced brief – you'll get prototypes that look good and meet a need nobody actually has.

**Do I need to install all the supporting plugins (`govtech-barbados-*`, `design`, `service-design`)?**

bimstack works without them but is more powerful with them. Install the GovTech Barbados ones at minimum – they handle the visual identity. The core service-design artefacts (journey maps, service blueprints, ecosystem maps, experience maps, workshop plans) and the research cycle now ship natively in bimstack; the Anthropic design/service-design plugins extend those with deeper method libraries where installed.

**How do I share what we've built with another team?**

The `examples/` folder structure in this repo is the pattern: a folder per service, with the discovery kit, the build output, the iteration history, and the production folder. Share the folder. Other MDAs can fork bimstack and adapt it.

**Does bimstack work for non-Barbadian governments?**

Yes, with adaptation. The plugin is anchored to the Barbados Digital Service Standards specifically. To use it elsewhere:
1. Fork the repo
2. Replace `references/barbados-service-standards.md` with your jurisdiction's equivalent
3. Update `references/house-style.md` for your design system
4. Update the agents' citations to reference your standards by number

The rest of the plugin – the seven-verb sprint, the phase model, the agent personas, the iteration loop – transfers cleanly.

---

## 13. Anti-patterns to avoid

bimstack is opinionated about these. The agents will push back. If you find yourself wanting to do any of them, pause and ask why.

**Skipping discovery because "we've done this before."** Every service is its own context. Even when you reuse parts of a previous discovery, you still need to listen to *these* citizens about *this* service. Standard 1.

**Building production code in alpha.** Alpha is for throwaway prototypes. If you can't bear to throw an alpha away, you haven't prototyped enough. Production code is the developer's job in beta.

**Going straight to public beta without a private beta.** The cost of public failure is always higher than the cost of being late. Private beta is non-negotiable.

**Locking in a single vendor without an exit plan.** Standard 6 and 8. Document any vendor choice as an ADR with the exit plan explicit.

**Treating live as maintenance mode.** Standard 10 fails the moment the team gets sent elsewhere and only on-call remains. Live is where most of a service's life is spent and most of the value is delivered.

**Hiding bad news in the weeknote.** Standard 9. The weeknote goes out even when the week was rough. Especially when the week was rough.

**Asking agents to skip their iron laws.** They will refuse. The iron laws are documented and visible. Override only with a written reason that names what you're trading off.

**Treating the Standards self-assessment as a tick-box exercise.** The assessment is for the team first, the panel second. Honest `Partly met with a plan` ratings beat dishonest `Met` ratings every time.

**Calling civil-service register "professional tone."** Civil-service register is gatekeeping. Plain language is professional. The two are not the same.

**Using the design system as a guideline, not a system.** Don't fork colours, fonts, or chrome. If a pattern is missing, propose it back to the design-system team. Standard 9.

---

## 14. Getting help

**Inside the plugin:**

- Ask `@delivery-manager` what's blocking. They'll route you.
- Read the file in `agents/` for whichever agent you're working with – the iron laws and the defaults are documented there.
- Read the reference file for the topic – `references/barbados-service-standards.md`, `references/govuk-design-principles.md`, `references/gds-way-phases.md`, `references/house-style.md`.

**Outside the plugin:**

- GovTech Barbados internal channels for service-specific questions
- The Barbados Digital Service Standards repo: <https://github.com/govtech-bb/Barbados-Digital-Service-Standards>
- The GovBB design system: <https://github.com/govtech-bb/design-system>
- The GDS Service Manual: <https://www.gov.uk/service-manual>
- The GDS Way: <https://gds-way.digital.cabinet-office.gov.uk/>

**Filing issues:**

bimstack is open and improving. File issues at the bimstack repo when you find:
- An agent giving wrong or stale advice
- A reference file that has drifted from the source of truth
- A workflow that doesn't match how the team actually works
- A pattern that should be added

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for how.

---

## 15. Where to read next

Once you've completed your first day:

| If you want… | Read |
|---|---|
| The full philosophy | [`ETHOS.md`](./ETHOS.md) – the eight beliefs |
| The day-to-day rhythm | [`PLAYBOOK.md`](./PLAYBOOK.md) – week-by-week through each phase |
| The seven-verb sprint in detail | [`WORKFLOW.md`](./WORKFLOW.md) |
| The agent specs | [`AGENTS.md`](./AGENTS.md) plus the individual files in `agents/` |
| Standards in full | [`references/barbados-service-standards.md`](./references/barbados-service-standards.md) |
| GOV.UK principles in full | [`references/govuk-design-principles.md`](./references/govuk-design-principles.md) |
| Phase model | [`references/gds-way-phases.md`](./references/gds-way-phases.md) |
| GovTech voice and visual identity | [`references/house-style.md`](./references/house-style.md) |
| How to extend bimstack | [`CONTRIBUTING.md`](./CONTRIBUTING.md) |
| The medical-licence worked example | [`examples/`](./examples/) |

---

## 16. Glossary

**Alpha** – the second phase of service delivery. Throwaway prototypes tested with citizens to pick a path into beta.

**Assumption** – a claim a prototype makes that hasn't been validated yet. bimstack tags every assumption with how it will be validated (`[VERIFY WITH USERS]`, `[VERIFY WITH MDA]`, `[VERIFY WITH MIST]`, `[VERIFY WITH POLICY]`, `[VERIFY WITH DATA]`, or `[KNOWN GAP]`).

**Beta** – the third phase. Real production code, used by real citizens for real transactions. Private beta first, then public.

**bimstack** – this plugin. The name is a play on "Bim" (Bajan nickname for Barbados) and "stack" (a curated set of opinionated choices, after Garry Tan's gstack).

**Brief** – a short description of what the MDA wants. The starting point for a discovery.

**CPD** – Continuing Professional Development. The evidence a doctor (or other professional) supplies to keep their registration current.

**Discovery** – the first phase. Research to find out whether to build and for whom.

**GDS** – Government Digital Service (UK). The team that pioneered most of the patterns bimstack uses.

**GovBB / alpha.gov.bb / `@govtech-bb/styles`** – the published GovTech Barbados design system. The visual and interaction layer bimstack builds on.

**Iron law** – one of an agent's non-negotiable rules. Each agent has 4–5 of them. Iron laws can only be overridden with a written reason.

**Iteration** – a single round of changes to a prototype, based on feedback. bimstack stores every iteration so the trail of decisions is auditable.

**Live** – the fourth phase. Continuous improvement of a service in public use.

**MDA** – Ministry, Department, or Agency. The government body that owns the service.

**MIST** – the Ministry of Innovation, Industry, Science and Technology. Owns the wider digital agenda – Trident ID, payments, infrastructure choices.

**NRN** – National Registration Number. The format is `YYMMDD-XXXX`.

**Plain language** – language a 9-year-old can follow. Reading age low; active voice; "you" for the citizen, "we" for the government; civil-service register avoided.

**Prototype** – a throwaway HTML representation of a service, used to test a design hypothesis with citizens. bimstack defaults to producing 2–3 prototypes per `/bimstack:build` run so the team has real signal, not a single guess.

**Service Standard / Barbados Digital Service Standards** – the 13 standards every public-facing digital service in Barbados is assessed against before launch. Source of truth: <https://github.com/govtech-bb/Barbados-Digital-Service-Standards>.

**Show-and-tell** – the regular session (typically fortnightly) where the team shows real work to real people. Not a status report. Open to the MDA, sibling MDAs, civil society.

**Standards assessment** – the structured walk through the 13 standards with evidence. Each standard is rated `Met`, `Partly met with a plan`, or `Not met`. bimstack's `/bimstack:assess` command produces it.

**Trident ID** – the Barbados citizen identity platform. Bimstack assumes services integrate with it for personal-details lookup rather than collecting identity information separately.

**Weeknote** – the short weekly note the team publishes about what they did, what they learned, and what's next. Standard 9. bimstack's `/bimstack:weeknote` command produces it.

---

## A final word

bimstack is opinionated because government digital services are too important to be unopinionated about. The plugin won't write your service for you. It will keep your team honest, anchored to the standards, working in the open, and iterating on evidence.

When you ship something with bimstack, write us a weeknote about it. We want to learn from your work too.

– The bimstack team
