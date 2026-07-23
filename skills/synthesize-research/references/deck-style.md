# GovTech Barbados deck style (python-pptx)

The official template file keeps its text in "live layouts", which makes
editing its XML brittle. Build decks programmatically in its visual system
instead, following the spec below. If a previous study's `build_deck.py` /
`build_usability_deck.py` is available next to its raw data folder, copy its
helper functions rather than reinventing.

## Canvas

13.333" × 7.5" (`prs.slide_width = Inches(13.333)`), blank layout
(`prs.slide_layouts[6]`), full-bleed background rect per slide.

## Palette (template theme)

| role | hex |
|---|---|
| NAVY primary | 00267F |
| NAVY_2 panel | 0C3796 |
| GOLD accent | FFC726 |
| INK text | 323131 |
| MUTED grey | 6E6E6E |
| TAB section label | 2C2C2C |
| CORAL (problems) | FF6B6B (dark CORALD C63B3B) |
| GREEN (fixes/strengths) | 21BF83 |
| LIGHT warm off-white bg | F7F3F3 |
| PALE blue on navy | CED9F2 |

Font: **Arial** throughout. Titles 30–32pt bold, kicker tabs 12.5pt bold
uppercase, body 12.5–15pt, stat callouts 34–52pt.

## Motifs

- **Kicker tab**: dark (or gold-on-navy) rectangle top-left with an uppercase
  section label; bleeds off the left edge on full-width slides, non-bleed when
  it sits over a split-panel layout.
- **Cover**: solid gold, navy type, thin navy rule, logo bottom-right.
- **Dark slides** (headline, sensitive findings, closing): solid navy,
  gold highlights, quote cards in NAVY_2 with a gold or coral top/side bar.
- Cards: white on LIGHT bg (or LIGHT on white) with a coloured side/top bar —
  green for strengths/fixes, coral for problems. Soft shadow via `outerShdw`.
- Logo top-right on light content slides (`logo_color.png`), white variant on
  navy (`logo_white.png`); page number bottom-right, gold on dark, navy on
  light. Logo PNGs are bundled in this skill's `assets/`.

## QA (required)

No LibreOffice/soffice on this Mac. Render every slide with the bundled
renderer and LOOK at each image:

```bash
python3 <skill>/scripts/render_pptx_qa.py "<deck.pptx>" "<out-dir>"
```

- A **magenta outline** on a rendered slide = that text frame overflows its
  box. Fix the box or shorten the text and re-render.
- The renderer joins runs with visible gaps (e.g. "today ." for adjacent
  runs); that's a renderer artifact, not a deck bug — adjacent runs render
  correctly in PowerPoint.
- Also check: edge-crowding (<0.4" from slide edge), tab bars crossing panel
  boundaries, headers wrapping inside coloured bars, quote cards colliding
  with their attribution line.
