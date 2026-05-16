---
description: Turn a brief into multiple testable HTML prototypes, in the GovTech Barbados house style, with assumptions surfaced inline. The build engine of bimstack.
argument-hint: [brief, problem statement, or path to a discovery report]
---

You are about to generate testable HTML prototypes for a GovTech Barbados service. Hand off to the **content-designer** agent (for copy, structure, accessibility) and the **developer** agent (for the HTML), using the **bimstack:brief-to-prototypes** skill. The **service-designer** agent reviews the candidate hypotheses before generation; the **cyber-engineer** agent flags any security-relevant assumptions in the panel.

Before you start, gather these from the user if they haven't already provided them:

- The brief or problem statement (paste it in, or point to a file)
- The MDA the service belongs to
- What's been learned so far – any prior research, the discovery report, the constraints the team is carrying
- The shape of the citizen the service is for (cohort, context, device assumptions)
- Whether the user wants 2 or 3 candidate prototypes (default: 3)

If the user hasn't provided this context, ask for it briefly using the AskUserQuestion tool. Do not invent the user need or the cohort. Do not skip discovery just because /build is fast.

Once you have the brief, the skill produces:

1. **A folder** named `build-[service-slug]/` in the workspace
2. **A README** introducing the brief, the 2–3 design hypotheses, and how to test them
3. **Each prototype** as a self-contained HTML file: `prototype-N-[name]/index.html`
4. **A consolidated assumptions list** at `assumptions.md`
5. **A test plan** at `test-plan.md` – who to recruit, how many per prototype, what good signal looks like, what to record

Each prototype must:

- Use the GovTech Barbados house style (navy, gold, off-white, charcoal; Figtree)
- Carry the official banner, header, alpha status banner, and footer chrome
- Implement the full Start → question pages → Check Your Answers → Confirmation flow
- One thing per page (GOV.UK Service Manual rule); Back link on every page except Start
- A bimstack assumptions panel (toggleable), listing every assumption tagged `[VERIFY WITH USERS]`, `[VERIFY WITH MDA]`, `[VERIFY WITH MIST]`, `[VERIFY WITH POLICY]`, `[VERIFY WITH DATA]`, or `[KNOWN GAP]`
- "This is fake" markers on any mock data (Trident ID lookup, payment, confirmation reference)
- Inline citation of the relevant Standards in the HTML `<head>` block

When the published `@govtech-bb/styles` CDN URL is known to be reachable, the prototype should link to it. Otherwise inline the approximation CSS from the brief-to-prototypes skill.

After generation, share each prototype file via a computer:// link. Tell the user how to test them (open in a browser, view on a phone, follow the test-plan.md), and offer to run `/iterate` once feedback is collected.
