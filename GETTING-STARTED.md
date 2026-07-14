# bimstack — quick start

bimstack is a team of five specialists and a set of commands for building government digital services in Barbados, anchored to the Barbados Digital Service Standards, the GOV.UK Design Principles, and the GDS Way. This is the short version. For the full detail, see `MANUAL.md` and `PLAYBOOK.md`.

## Install

Upload `bimstack.zip` via **Customize → Plugins → upload a custom plugin file**, or install it from your marketplace. Once installed, type `/` in chat or Cowork to see the bimstack skills.

> **Important — which name to type.** In the Claude app and Cowork, the `/` menu runs **skills**. Invoke the skill names below (e.g. `/discovery-kit`), not the verb-style command names like `/discover` — those only work in the Claude Code terminal and will return "Unknown command" in the app.

> **If `/` invocations fail with "Unknown command" (even for valid skills):** there's a known Cowork bug where the slash-command resolver breaks — skills appear in the `/` menu but won't run, and even the built-in `/feedback` fails. When that happens, **trigger skills by natural language instead.** Don't type the slash name; just describe what you want and Claude picks the right skill from its description. For example, instead of `/discovery-kit`, write: *"Using bimstack, scope a discovery for … — give me the problem statement, stakeholder map, research plan, and interview guide."* Fully quitting and reopening the app or starting a fresh conversation sometimes clears it.

## The core loop

Most work follows one path, from a vague idea to a service you can ship:

1. **`/discovery-kit`** — scope a discovery. Produces a problem statement, stakeholder map, research plan, interview guide, and a discovery report template. Use this when an MDA asks for a new service and you need to find out whether (and what) to build.
2. **`/brief-to-prototypes`** — turn a brief or problem statement into several clickable HTML prototypes, each in the GovTech house style with its assumptions surfaced inline. This is the build engine: feel three approaches in hours, not weeks.
3. **`/prototype-iteration`** — fold in what you heard. Give it a prototype plus either structured feedback or raw research transcripts, and it produces the next version with a changelog of what changed and why. Run it after every test round.
4. **`/build-for-production`** — take the iteration you've chosen to carry forward and produce a production-ready front-end: per-page HTML, the published GovBB stylesheet linked, the prototype chrome stripped, plus a test suite (regression, accessibility, security, load).

## Supporting skills

Use these alongside the loop, at any phase:

- **`/service-standard-assessment`** — honest self-assessment against the 13 Barbados Digital Service Standards. Run it before any phase gate (discovery→alpha, alpha→beta, beta→live), at annual review, or after a major change.
- **`/plain-language-check`** — review copy for plain language, civil-service register, and the house word-swap list. Returns specific rewrites, not vague advice. Use it on form copy, error messages, privacy notices, and comms.
- **`/show-the-thing`** — plan a show-and-tell: agenda, running order, demo, and supporting slides.
- **`/weeknote`** — draft a short, honest, public weeknote in the GDS style. Best run every Friday.
- Threat modelling has no standalone skill — in Cowork, ask the **cyber-engineer** specialist directly to draft or refresh a threat model.

## The five specialists

You don't have to call these directly, but you can invoke any by name in Cowork when you want that lens: the **service designer** (discovery, research, journey maps), the **content & interaction designer** (copy, patterns, accessibility, prototypes), the **developer** (stack choices, integrations, build), the **cybersecurity engineer** (threat modelling, privacy, hardening), and the **delivery manager** (sprints, weeknotes, show-and-tells, standards, phase gates).

## Where it runs

The eight skills work everywhere you invoke them with `/` — web chat, the Desktop Chat tab, and Cowork. The five specialists are **sub-agents, which run only in Cowork** and appear greyed out in plain chat; in plain chat the skills still run, just inline rather than handed to a specialist. The verb-style slash commands (`/build`, `/discover`, …) only work in the **Claude Code terminal**, not the app — use the skill names instead, as noted above. There are no connectors to set up.

## A typical first session

> `/discovery-kit renewing a medical licence`

…then once you have a brief:

> `/brief-to-prototypes` with the discovery report, review the prototypes with users, `/prototype-iteration` on the transcripts, and `/service-standard-assessment` before you call it alpha.
