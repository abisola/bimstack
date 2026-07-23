# Building the .docx

Also read `/mnt/skills/public/docx/SKILL.md` for docx-js gotchas (bullets need a numbering config; tables need columnWidths AND per-cell widths in DXA; ShadingType.CLEAR not SOLID; no `\n` — separate Paragraphs).

## Helper module

Copy `scripts/docx_helpers.js` (bundled with this skill) next to your build script and require it. It provides the house style used by all GovTech research plans:

- `p(text, {bold, italics, after})` — body paragraph, Calibri 11pt
- `h1/h2/h3(text)` — navy (1F3B57) headings via built-in HeadingLevels
- `bullet(text)` — bulleted item on the shared `bullets` numbering reference
- `script(text)` — italic, left-indented facilitator speech
- `facNote([lines])` — single-cell table shaded F2F2F2, first line prefixed bold "Facilitator note: "
- `mkTable(headers, rows, widths)` — header row shaded D9E2EC, cell text 10pt, widths in DXA (aim to sum ≈9360 for US Letter with 1" margins)
- `buildDoc(children, {title, subtitle, dateline})` — returns a Document with the numbering config, styles, US Letter page, and title block; pass to `Packer.toBuffer`

## Document conventions

- Title block: bold navy title (service name(s)), grey subtitle "Usability research plan, discussion guide and note-taking framework" (adapt to method), italic dateline "GovTech Barbados · {department/programme} · alpha.gov.bb · {Month Year}".
- Part headings are H1 ("Part 1 — Research plan"), numbered sections H2 ("1.1 Background"), task sub-parts H3 ("Scenario", "Comprehension checks").
- Comprehension tables always include the Correct answer column filled in; result tables leave Result and Notes blank for the note-taker.
- Typical length: 12–16 pages for a two-flow usability plan; 8–12 for single-flow or discovery.

## Verify before delivering

```bash
python /mnt/skills/public/docx/scripts/office/soffice.py --headless --convert-to pdf plan.docx
pdftoppm -jpeg -r 70 plan.pdf page
```

View at minimum: the title page, one table-heavy page (research questions or a note-taking table), and one facilitator-note page. Check tables aren't overflowing the margins and shaded boxes render grey, then copy the .docx to `/mnt/user-data/outputs` and present it.
