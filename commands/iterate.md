---
description: Take a bimstack prototype and structured feedback, produce the next version with a changelog. The feedback loop of bimstack.
argument-hint: [prototype path or name, plus the feedback file or paste]
---

You are about to iterate a bimstack prototype based on feedback from user testing, MDA review, or internal critique. Hand off to the **content-designer** agent (for copy and structure) and the **developer** agent (for the HTML), using the **bimstack:prototype-iteration** skill.

Before you start, gather these from the user if they haven't already provided them:

- The prototype to iterate (path to the existing HTML file, or which of the candidates from a recent /build)
- The input – either:
  - A folder of raw research transcripts (one Markdown file per participant), **or**
  - A pre-structured feedback file with the "what worked / what didn't / what changed / observed but unresolved / constraints surfaced" sections
- The source of the input – user testing (with rough count and cohort), MDA, internal, etc.
- Anything the team wants to specifically defend or push back on (e.g. "the MDA wants X but our research says Y – produce both options")

If the feedback is loose ("make it nicer"), ask for either the structured version or a transcript folder using the AskUserQuestion tool. Loose feedback produces loose iterations.

When the input is raw transcripts, the skill **synthesises first** and saves the result as `feedback-round-K.md` next to the prototype. Pause to review that synthesis with the user before producing the iteration – the synthesis is the team's chance to catch the skill making the wrong call. Once it's confirmed, produce the iteration.

Once you have the prototype and the feedback, the skill:

1. **Categorises** the feedback into critical / important / worth-testing / defer / reject (with reasoning)
2. **Produces a new version** of the prototype at `[prototype]/iteration-N/index.html` (preserves all previous iterations)
3. **Updates the assumptions panel** – resolved assumptions move to a "resolved" section; new ones get added
4. **Writes `CHANGES.md`** – a per-change changelog, each linking back to a specific piece of feedback and the relevant Standards

After generation, share the new prototype and the CHANGES.md via computer:// links. Highlight any feedback that was deferred or rejected with the reasoning so the team can review. Offer to plan the next round of testing using the test-plan.md from the original build.
