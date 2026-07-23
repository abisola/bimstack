# The layered research package

Deliver findings top-down: each layer stands alone, and each invites the
reader one level deeper. Build all four unless told otherwise. Name files after
the study (e.g. "Birth Pre-Registration — ..."), and save everything **next to
the raw data folder**, with build scripts alongside so any deliverable can be
regenerated.

## Layer 1 — Executive summary (1 page, in the briefing docx)

Five to eight sentences: what was tested/asked, with whom, the headline, the
single most important number, and the recommended next step. A minister or CEO
should get everything they need here.

## Layer 2 — Briefing document (.docx, 2–4 pages + appendix)

python-docx. For **usability tests**, follow the structure of the user's
"Usability test research summary" template exactly:

1. `Research Summary: [Title]` (Heading 1)
2. **Introduction** — what was evaluated, for whom, methods, evidence base
3. **TL;DR** — narrative summary + a findings table (Finding | Severity |
   Recommendation), then Service/Prototype link, Persona, Location, Dates
4. **What's Working Well (Keep & Build On)** — per strength: description with
   counts, participant quotes, then "Product/Design implication:"
5. **What's Not Working (Yet)** — per problem, ranked by severity: Problem
   (one sentence + metrics), Severity Rating, Insight (what it reveals about
   mental models), quotes, Opportunity/recommendation with concrete tactics
6. **Appendix** — demographics table, prototype defects, feature requests,
   anything that would clutter the main body

For **discovery/mixed-method studies**, keep the same skeleton but replace the
severity framing with themes → evidence → implication.

Severity definitions (use these words):
- **Critical** — prevents task completion
- **Major** — significant friction, but workarounds exist
- **Minor** — aesthetic or cosmetic annoyance

## Layer 3 — Findings deck (.pptx, 6–13 slides)

GovTech template style — see `deck-style.md`. Slide arc:

1. Cover (gold)
2. What we tested & how (method + participant profile)
3. The headline (navy, quote cards)
4. What's working well
5. Findings at a glance (severity counters + ranked list)
6–n. One slide per major finding — evidence, quote, insight, fix
n+1. What we do next (NOW / NEXT / THEN columns)
n+2. Bottom line (navy close)

Default tone is the **team version**: blunt, specific, detailed — name the
broken things plainly, include defect lists and per-finding fixes. If the user
asks for a "minister", "stakeholder", or "leadership" version, cut to ~8
slides, lead with outcomes and asks, soften internal detail, and drop the
defect lists into the appendix.

Also produce a `(preview).pdf` by combining the QA renders (PIL,
`Image.save(..., save_all=True, append_images=...)`) so the deck can be
reviewed without PowerPoint.

## Layer 4 — Appendix material

Lives at the back of the briefing docx (and deck if team version):
methodology, demographics table, full defect list, feature requests /
participant ideas, and anything with counts that didn't make a finding.

## Evidence rules (all layers)

- Every claim carries a count: "7 of 9", "all nine", "2 of 9". Counts must be
  traceable to specific participants — keep a scratch tally while synthesising.
- Compute quantitative numbers with code from the raw files; never eyeball.
- **Quotes are lightly cleaned**: fix auto-transcription garble and drop
  filler, but keep the participant's own words, dialect, and rhythm. Never
  invent phrasing. If a passage is too mangled to clean confidently, either
  skip it or flag it to the user — and remind the user in the final summary
  that quotes were cleaned from rough transcripts and worth a skim.
- Attribute quotes to participant numbers (P1…Pn), never names or contact
  details. Contact details in raw data stay out of every deliverable.
