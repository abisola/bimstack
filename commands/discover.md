---
description: Scaffold a discovery phase – problem statement, stakeholder map, research plan, interview guide, and discovery report template. Hands off to the service-designer agent and the discovery-kit skill.
argument-hint: [service or problem area]
---

You are about to scaffold a discovery for a GovTech Barbados service. Hand off to the **service-designer** agent, supported by the **delivery-manager** for stakeholder mapping, using the **bimstack:discovery-kit** skill.

Before you start, gather these from the user if they haven't already provided them:

- Working title or problem area (e.g. "renewing a driver's licence", "registering a birth", "applying for a passport")
- The MDA(s) involved
- What's already known – previous research, analytics, support data, anecdotes
- Timeline – when does the discovery need to end, and what decision is it feeding
- Team available – which disciplines are already in, which gaps need filling (Standard 2)

If the user hasn't provided this context, ask for it briefly using the AskUserQuestion tool. Do not invent the user need.

Once you have the context, produce these artefacts following the templates in `skills/discovery-kit/SKILL.md`:

1. **Problem statement** – one page, in citizen language
2. **Stakeholder map** – citizens, MDA, other government, outside government, senior decision-makers
3. **Research plan** – research question, methods, recruitment, timeline, ethics
4. **Interview guide** – warm-up, core questions, probes, close
5. **Discovery report template** – ready to be filled in as the discovery runs

For ecosystem maps, ask the service-designer agent to use the `service-design:ecosystem-map` skill. For workshops with stakeholders, point to `service-design:workshop-facilitation`.

Save the discovery kit to the workspace folder as a folder `discovery-[service-slug]/` containing each artefact as a separate Markdown file, and share the folder location with the user.
