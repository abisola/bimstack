# bimstack

> "Government should only do what only government can do." – GOV.UK Design Principle 2

bimstack is how the GovTech Barbados team builds digital services with Claude. Five opinionated specialists – Service Designer, Content & Interaction Designer, Delivery Manager, Developer, and Cybersecurity Engineer – anchored to the [Barbados Digital Service Standards](https://github.com/govtech-bb/Barbados-Digital-Service-Standards), the [GOV.UK Design Principles](https://www.gov.uk/guidance/government-design-principles), and the [GDS Way](https://gds-way.digital.cabinet-office.gov.uk/).

It's a process, not a collection of tools. It bakes in the way GovTech Barbados builds services so that a team can pick it up on day one and ship work that already conforms to the standards.

## Who this is for

- **Civil servants** building digital services for Barbados
- **Vendors** delivering on contract for the Government of Barbados
- **Other Caribbean digital teams** wanting an opinionated starting point inspired by the GDS Way
- **Anyone shipping on alpha.gov.bb** who wants their work to pass the Standards on the first try

## The sprint

```
Listen → Map → Make → Test → Ship → Show → Iterate
```

Seven verbs. Every sprint, every phase, every service.

- **Listen** – user research, stakeholder interviews, front-line shadowing
- **Map** – journeys, blueprints, ecosystems, problem statements
- **Make** – plain-language copy, GovBB prototypes, production code
- **Test** – usability, accessibility, security, performance
- **Ship** – discovery → alpha → beta → live, one small release at a time
- **Show** – weeknotes, show-and-tells, source in the open
- **Iterate** – continuously, forever, while the citizen still needs the service

## The team

| Specialist | What they do | Standards they own |
|---|---|---|
| **Service designer** | Research, journey maps, blueprints, problem statements, discovery | 1, 5, 10 |
| **Content & interaction designer** | Plain language, UX copy, prototypes on alpha.gov.bb, accessibility | 3, 4, 5, 12 |
| **Delivery manager** | Sprints, weeknotes, standards assessment, phase gates, sustainability | 2, 8, 9, 13 |
| **Developer** | GovBB tech, opinionated stack, lookups, observability, in-the-open code | 5, 6, 7, 13 |
| **Cyber engineer** | Threat models, DPIA, secure-by-design, pen tests, incident runbooks | 11 |

Each agent reads the same references, cites the same standards by number, and hands off cleanly to the next. None of them is the boss. The team owns the work.

## What's in the box

```
bimstack/
├── README.md                 you are here
├── MANUAL.md                 single onboarding doc for new colleagues
├── PLAYBOOK.md               how a team uses bimstack day to day, phase by phase
├── ETHOS.md                  the eight ways of working
├── AGENTS.md                 detailed roster of the five specialists
├── WORKFLOW.md               the sprint mantra, in detail
├── CONTRIBUTING.md           how to extend bimstack
├── CHANGELOG.md
├── LICENSE                   MIT
├── .claude-plugin/
│   └── plugin.json           the installable manifest
├── agents/                   the five specialists
│   ├── service-designer.md
│   ├── content-designer.md
│   ├── delivery-manager.md
│   ├── developer.md
│   └── cyber-engineer.md
├── commands/                 slash commands the team uses every week
│   ├── weeknote.md
│   ├── assess.md
│   ├── discover.md
│   ├── show.md
│   ├── plain-language.md
│   └── threat-model.md
├── skills/                   shared skills the agents call into
│   ├── service-standard-assessment/
│   ├── plain-language-check/
│   ├── weeknote/
│   ├── discovery-kit/
│   └── show-the-thing/
└── references/               the canonical knowledge base
    ├── barbados-service-standards.md
    ├── govuk-design-principles.md
    ├── gds-way-phases.md
    └── house-style.md
```

## New to bimstack?

Read **[MANUAL.md](./MANUAL.md)** – the single onboarding guide for new GovTech colleagues, sibling MDAs, and vendor teams. About two hours to read and walk the worked example, after which you'll know which command to run, which agent to ask, and what good looks like at each phase.

## Day-to-day usage

For the full phase-by-phase rhythm – setup, the weekly cadence, what to type at each phase, what comes out – see [PLAYBOOK.md](./PLAYBOOK.md). It walks through an end-to-end build using the medical-licence renewal example.

## Install

bimstack is a Claude Code plugin and a public reference repo. You can use either, both, or neither.

### As a plugin – from GitHub

```
/plugin marketplace add abisola/bimstack
/plugin install bimstack@bimstack
```

### As a plugin – from a local folder (for testing before you push)

```
/plugin marketplace add /Users/abisola/dev-env/claude/bimstack
/plugin install bimstack@bimstack
```

### Confirm it worked

In any new Claude Code or Cowork session:

- `/help` should list `/build`, `/iterate`, `/discover`, `/weeknote`, `/assess`, `/show`, `/plain-language`, `/threat-model`
- The five agents (service-designer, content-designer, delivery-manager, developer, cyber-engineer) are invokable with `@`
- The seven skills are loaded and trigger automatically on the right phrases

The plugin leans on the GovTech Barbados skills (`govtech-barbados-services`, `govtech-barbados-forms`, `govtech-barbados-presentations`, `govtech-barbados-qr-codes`) and on the Anthropic `design`, `service-design`, and `frontend-design` plugins. Install those alongside bimstack for the full experience.

### As a reference

You can also just read the files. The `references/` folder is the canonical bimstack view of the Standards, the Principles, the GDS Way, and the house style. Print them. Pin them to a wall. Fork the repo. Adapt it for your service.

## Which agent should I use?

| Building or doing… | Use the… | Phase notes |
|---|---|---|
| User research, journey map, problem statement, ecosystem map | Service designer | Discovery and alpha mostly |
| Plain-language copy, error messages, page review, alpha.gov.bb prototype | Content & interaction designer | Alpha onwards |
| Weeknote, show-and-tell, standards assessment, phase gate | Delivery manager | Every phase |
| Tech choice, integration with Trident ID, production build, ADR | Developer | Alpha onwards (no production code in discovery) |
| Threat model, privacy notice, DPIA, pen test plan, incident runbook | Cyber engineer | Alpha onwards |

If you're not sure, ask the **delivery manager** first – they'll route you.

## Which slash command should I run?

| You want to… | Run | Hands off to |
|---|---|---|
| Turn a brief into testable prototypes | `/build` | content-designer + developer |
| Roll feedback into the next version | `/iterate` | content-designer + developer |
| Take an iteration to production-ready | `/productionise` | developer + cyber-engineer + content-designer |
| Publish what we did this week | `/weeknote` | delivery-manager |
| Self-assess against the 13 Standards | `/assess` | delivery-manager + every other agent |
| Scaffold a discovery phase | `/discover` | service-designer |
| Plan a show-and-tell | `/show` | delivery-manager |
| Review a piece of copy | `/plain-language` | content-designer |
| Draft or refresh a threat model | `/threat-model` | cyber-engineer |

## How bimstack relates to other things

- **The Barbados Digital Service Standards** are the contract bimstack delivers against. bimstack assumes you'll be assessed against them and bakes them into every agent's reasoning. The Standards are the source of truth; bimstack is one way of meeting them.
- **The GovBB design system** is the visual and interaction layer bimstack builds on. Agents fetch components from the published library and use `govbb-`-prefixed classes. They don't reinvent the chrome.
- **The GovTech Barbados skills** (`govtech-barbados-services`, `-forms`, `-presentations`, `-qr-codes`) are what the bimstack agents call into when they need to produce alpha.gov.bb pages, slide decks, or QR codes in the house style. bimstack agents *use* those skills, they don't replace them.
- **The Anthropic design and service-design plugins** (`design`, `service-design`, `frontend-design`) are the deeper skill libraries. bimstack agents reach for them where they're the best tool for the job.
- **gstack** is the Garry Tan repo this format was inspired by. It's for startups; bimstack is for governments. They share a structure but not a worldview.

## Working in the open

bimstack itself works the way the services it builds work.

- Public repo. Standard 9.
- Weeknotes for changes to the stack.
- Issues open. Contributions welcome. See `CONTRIBUTING.md`.
- MIT licensed. Standard 9.

## Status

**bimstack v0.1.** First public cut. Expect changes. File issues. The Standards drift, the design system drifts, the team learns – bimstack drifts with them.

If you ship something with bimstack, write us a weeknote about it.

## Licence

MIT. Use it, fork it, ship better government services. Standard 9.
