# Changelog

All notable changes to bimstack will be recorded here. Format inspired by [Keep a Changelog](https://keepachangelog.com).

## [Unreleased]

### Added

- **Four user research skills** – `research-coach` (router and mentor across the whole research cycle, session craft including the false close, direct feedback on the researcher's craft), `research-planning` (decision-linked objectives before any discussion guide, digital literacy warm-up block, behavioural questions over opinion questions, the "if this didn't exist" test), `transcript-analysis` (behaviour over stated preference, workarounds and friction that changed behaviour, cross-referencing prior transcripts as confirms/contradicts/new/extends, coached interpretation), and `research-presenting` (finding → "so what", shared sense-making with the delivery team, action-first readout structure, memorable plain language)
- Cross-references wired in: `discovery-kit` and `prototype-iteration` now defer to the research skills; service-designer agent, AGENTS.md, WORKFLOW.md (Listen), PLAYBOOK.md, MANUAL.md, and the README skill tree updated to match
- **Five native service-design skills** – `journey-map` (steps, channels, feelings, pain points, all evidenced or marked `[ASSUMPTION]`), `service-blueprint` (frontstage/backstage/systems swimlanes separated by the lines of interaction, visibility, and internal interaction; time and failure-point rows), `ecosystem-map` (actors, channels, systems, and flows around a citizen need, informal actors included, Standard 7 note per system), `experience-map` (the citizen's whole goal across services, seams as first-class findings, scope recommendation), and `workshop-facilitation` (decision-linked working sessions with agenda, capture plan, and facilitation craft). Mapping skills output canonical Markdown plus an optional single-file GovBB-style HTML visual, matching the prototype pattern

### Fixed

- **Dead skill references.** The service-designer agent, delivery-manager agent, `discovery-kit`, `/bimstack:discover`, WORKFLOW.md, and AGENTS.md deferred to `service-design:*` and `design:*` skills that ship in separate Anthropic plugins and weren't declared as dependencies – a user installing only bimstack hit dead ends at the core service-design moments. All such references now point to the native `bimstack:*` skills, with the Anthropic plugins repositioned as optional extensions in MANUAL.md

## [0.1.1] – 2026-05-16

### Fixed

- Plugin manifest: removed the `agents`, `commands`, and `skills` enumeration arrays from `.claude-plugin/plugin.json`. Claude Code auto-discovers these from the `agents/`, `commands/`, and `skills/` directories – the explicit listings were redundant and may have interfered with registration on some installs.
- Documentation: every `/command` reference now uses the `/bimstack:command` namespaced form that Claude Code actually exposes. The bare `/command` form does not appear in `/` autocomplete (plugin commands surface under the `/bimstack:` prefix).
- Documentation: agent invocation guidance corrected. Claude Code agents are auto-routed by task description, not `@-mentioned`. Use `/agents` to list available agents.

## [0.1.0] – 2026-05-16

First public cut. Built end-to-end in a single working session.

### Added

- **Five agents** – service-designer, content-designer, delivery-manager, developer, cyber-engineer
- **Five skills** – service-standard-assessment, plain-language-check, weeknote, discovery-kit, show-the-thing
- **Six slash commands** – `/bimstack:weeknote`, `/bimstack:assess`, `/bimstack:discover`, `/bimstack:show`, `/bimstack:plain-language`, `/bimstack:threat-model`
- **Four canonical references** – the 13 Barbados Digital Service Standards, the 10 GOV.UK Design Principles, the GDS Way phases (Discovery → Alpha → Beta → Live), and the GovTech Barbados house style
- **Top-level documentation** – README, ETHOS, AGENTS, WORKFLOW, CONTRIBUTING
- **Plugin manifest** at `.claude-plugin/plugin.json`
- **MIT licence**

### Anchored to

- [Barbados Digital Service Standards](https://github.com/govtech-bb/Barbados-Digital-Service-Standards) (13 standards)
- [GOV.UK Design Principles](https://www.gov.uk/guidance/government-design-principles) (10 principles)
- [GDS Way](https://gds-way.digital.cabinet-office.gov.uk/) and [Service Manual agile delivery](https://www.gov.uk/service-manual/agile-delivery) (Discovery / Alpha / Beta / Live)
- Existing GovTech Barbados skills: `govtech-barbados-services`, `govtech-barbados-forms`, `govtech-barbados-presentations`, `govtech-barbados-qr-codes`
- Anthropic skill plugins: `design`, `service-design`, `frontend-design`

### Known gaps

These are deliberate omissions for v0.1 – flagged here so the next version knows where to look.

- No example deliverables in the repo yet. v0.2 should ship at least one worked example per skill.
- No MCP server registration. Agents call existing skills directly; later versions may bundle bespoke MCPs (e.g. a Trident ID dev sandbox, a design-system component fetcher).
- No CI yet. v0.2 should lint plain-language usage and check that every agent cites the references it claims to.
- No hooks. Phase-gate hooks (e.g. "block a `Met` rating without evidence") are a candidate for v0.3.

### Inspirations

Format inspired by [Garry Tan's gstack](https://github.com/garrytan/gstack). Worldview inspired by the UK Government Digital Service, particularly Russell Davies and Giles Turnbull on working in the open, and the Cabinet Office Service Manual on agile delivery.
