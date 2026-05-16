# Changelog

All notable changes to bimstack will be recorded here. Format inspired by [Keep a Changelog](https://keepachangelog.com).

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
