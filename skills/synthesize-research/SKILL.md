---
name: synthesize-research
description: >-
  Turn a folder of raw research data into a layered findings package —
  exec summary, briefing docx, GovTech-style findings deck, and appendix — with
  a themes checkpoint before anything is written. Use this skill whenever the
  user asks to synthesize, analyse, summarise, or "write up" research: usability
  tests, interview transcripts, observation grids, intercepts, surveys, polling
  data, or SPSS files. Trigger on phrases like "synthesize the raw data",
  "research summary", "findings from the study", "what did participants say",
  "turn this research into a deck/report", or when the user points at a folder
  containing transcripts/recordings/response spreadsheets — even if they don't
  say "research" explicitly. Also use it when asked to re-cut an existing
  study's findings for a new audience (team vs minister version).
---

# Synthesize research

Take a study's raw data (qualitative, quantitative, or both) and produce the
full layered delivery package. The flow has one hard checkpoint: **the user
signs off on the findings before any deliverable is written.**

## Workflow

### 1 · Inventory

Run the bundled extractor over the folder the user pointed at:

```bash
python3 <skill>/scripts/extract_sources.py "<raw-data-folder>" "<scratchpad>/working_data"
```

Read `working_data/inventory.md` first. Then report to the user in a few
sentences: which files were found, what role each plays (transcripts vs
observation grid vs survey export vs recordings), how many participants or
respondents, and the study facts inferred from the data (method, location,
dates, persona). Files the extractor can't read are listed as skipped — say
so rather than silently ignoring them. If key files live in `~/Downloads`
(TCC-blocked), copy them out via Finder first (see Environment).

### 2 · Extract and read

Read every extracted source in full — transcripts, grids, survey text. For
large transcripts, read in sequential chunks; never sample. Map observation-
grid columns to participants and keep the mapping consistent with transcript
numbering. For quantitative files, compute stats with a script (counts,
percentages, cross-tabs) — never estimate numbers by eye.

### 3 · Synthesize

Build cross-participant themes. For each candidate finding keep a running
tally of exactly which participants support it — every claim in the final
deliverables needs a defensible "N of M". Separate:

- **Strengths** (what's working — with evidence and a keep/build implication)
- **Problems** — rated Critical / Major / Minor (definitions in
  `references/deliverables.md`)
- **Service-design gaps** (things outside the artifact being tested — payment,
  expectations, channels)
- **Defects/bugs** vs genuine usability findings — don't mix them

### 4 · Checkpoint — wait for the user

Present a compact findings list in chat: each theme with severity, evidence
count, and its single best quote, plus the strengths list and anything you're
unsure about (ambiguous evidence, quotes too garbled to use, thin themes).
Ask the user to confirm, merge, re-rate, or kill items. **Do not write
deliverables until they respond.** This is the cheap moment to change course.

### 5 · Build the package

On sign-off, read `references/deliverables.md` (structures, severity wording,
evidence and quote rules) and `references/deck-style.md` (palette, motifs,
builder code to reuse, QA loop), then build:

1. Briefing docx with exec summary up front (python-docx)
2. Findings deck (python-pptx) + `(preview).pdf`
3. Everything saved next to the raw data, build scripts kept alongside

Default deck tone is the **team version** (blunt, detailed, defect lists in).
"Minister/stakeholder/leadership version" → shorter, outcome-led cut; both
cuts can coexist as separate files.

### 6 · QA and hand over

Render every deck slide with `scripts/render_pptx_qa.py` and inspect each
image (magenta outline = overflow). Verify the docx by re-reading its
structure with python-docx. In the final summary: lead with where the files
are, give the headline findings, and remind the user that quotes were cleaned
from rough transcripts and deserve a skim before the package goes external.

## Quote policy

Auto-transcripts are messy. Clean quotes lightly — fix garble, drop filler,
keep the participant's own words and dialect. Never invent phrasing; skip or
flag anything too mangled to clean confidently. Attribute as P1…Pn only.
Contact details from raw data never appear in a deliverable.

## Environment (this Mac)

- **No Node, pandoc, LibreOffice, brew, or pdftoppm.** Use python-docx,
  python-pptx, openpyxl, PIL; pyreadstat (pin 1.2.7 on Python 3.9) for .sav.
- `~/Downloads` is TCC-blocked even unsandboxed. Copy files out via
  Finder: `osascript -e 'tell application "Finder" to duplicate (POSIX file
  "<src>" as alias) to (POSIX file "<dest-folder>" as alias) with replacing'`
- Deck QA uses the bundled PIL renderer, not Office export. GovTech logo
  PNGs are in this skill's `assets/`.

## Bundled files

| file | when to use |
|---|---|
| `scripts/extract_sources.py` | step 1 — always run first |
| `scripts/render_pptx_qa.py` | step 6 — render deck slides for visual QA |
| `references/deliverables.md` | step 5 — package structures + evidence rules |
| `references/deck-style.md` | step 5 — deck palette, motifs, builder reuse |
| `assets/logo_*.png` | deck builds — colour on light, white on navy |
