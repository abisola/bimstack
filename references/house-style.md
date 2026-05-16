# GovTech Barbados house style (quick reference)

A pocket reference to the GovTech Barbados visual identity, voice, and pattern library. Maintained in detail across the `govtech-barbados-services`, `govtech-barbados-forms`, `govtech-barbados-presentations`, and `govtech-barbados-qr-codes` skills. This file gives bimstack agents the essentials they need without reading every skill front to back.

If anything here ever drifts from those skills, **trust the skills**.

---

## Voice

- **Plain language always.** Write for a 9-year-old reading on a phone.
- **You and we.** Address the citizen as "you" and the government as "we". Never "the applicant" or "the Ministry".
- **Active voice.** "Send us your form" not "Your form should be submitted".
- **Short sentences.** Under 20 words. Break long ones in two.
- **Bajan where it lands.** If a local turn of phrase makes something clearer for the citizen, use it. If it doesn't, English is fine.

### The word-swap list

| Don't write | Write instead |
|---|---|
| provide | tell us, give us |
| submit | send |
| verify, validate | check |
| select | choose |
| proceed | continue |
| commence | start |
| reside | live |
| prior to | before |
| in respect of | about, for |
| mandatory | required, you must |
| utilise | use |
| ensure | make sure |
| apply for | get, claim, register |
| in receipt of | getting |
| at this present time | now |
| as a matter of urgency | urgently |
| with regard to | about |

---

## Colour palette

Primary tokens used across alpha.gov.bb services, slides, and QR codes.

| Role | Name | Hex | Where |
|---|---|---|---|
| Primary | Navy | `#00267F` | Body text, primary actions, navy section breaks |
| Secondary | Gold | `#FFC726` | Title slides, finder eyes on QR codes, agenda numerals |
| Light | Off-white | `#F7F3F3` | Page background, light slide background |
| Dark | Charcoal | `#2C2C2C` | Title bars, page-break slides, label bars on QR |
| Accent | Coral | `#FF6B6B` | Page breaks, two-item splits |
| Accent | Pink | `#FF94D9` | Page breaks, feature backgrounds |
| Accent | Green | `#21BF83` | Statement slides, achievements |
| Accent | Purple | `#A962C7` | Charts, category indicators |
| Accent | Orange | `#F58757` | Charts, warm highlights |
| Accent | Teal | `#0F7D75` | Charts, secondary highlights |

In CSS, prefer the design system's tokens (`var(--color-blue-40)` etc.) over hex values directly.

---

## Typography

**Figtree** for everything – titles, body, big numbers, labels. Google Font, geometric humanist. Set `fontFace: "Figtree"` explicitly in slide code so it doesn't fall back to Calibri.

| Use | Weight | Size (slides) |
|---|---|---|
| Hero stat | SemiBold | 72pt |
| Section heading | SemiBold | 48–60pt |
| Slide title | SemiBold | 36pt |
| Body | Regular | 30pt minimum |
| Subtitle | Regular | 24pt |
| Title bar text | SemiBold | 14pt |

For web pages, the design system handles typography – don't override it.

---

## Components and chrome

Every alpha.gov.bb page has:

- **Official banner** – the thin bar confirming this is a real government service
- **Header** – yellow site header with the GovBB logo and navigation
- **Status banner** – the alpha or beta strip
- **Footer** – navy footer with supporting links and the Barbados crest

The design system provides them all. Don't redraw them.

**CSS class prefix is always `govbb-`** (e.g. `govbb-btn`, `govbb-form-group`, `govbb-radio`). Don't introduce Tailwind for new prototypes; don't reach for one-off colours.

For form pages: `single-question`, `multiple-questions`, `check-your-answers`, `confirmation`. For content: `service`, `category`, `home`. Templates and component reference at <https://govtech-bb.github.io/design-system/llm/llms.txt>.

---

## Barbadian data formats

| Field | Format |
|---|---|
| Parish | Christ Church, St. Andrew, St. George, St. James, St. John, St. Joseph, St. Lucy, St. Michael, St. Peter, St. Philip, St. Thomas |
| National Registration Number (NRN) | `YYMMDD-XXXX` |
| National Insurance Number | 6 digits, numeric |
| Postal code | `BB` + 5 digits, e.g. `BB11000` |
| Date | DD MM YYYY in three text inputs (day / month / year) |
| Currency | Barbadian Dollar (BBD / BDS$) |
| Phone | Accept any format – don't enforce a pattern |

For personal details, use Trident ID lookup (not separate fields). For vehicles, the vehicle lookup. For businesses, the business lookup.

---

## Service patterns

**Forms.** One thing per page (GOV.UK Service Manual rule). The flow is always: Start → Question pages → Check Your Answers → Confirmation. Every page has a Back link except Start. Every confirmation page gives a reference number, the next step, and the timing.

**Validation.** Always client-side. On submit (not on blur). Two things together when it fails:

- An **error summary** at the top of the page, linking to each invalid field
- An **inline error message** next to each invalid field, with `aria-invalid="true"` and `aria-describedby` linking the input to the error

The page title starts with "Error: …" so screen readers announce the failure.

**Content pages.** Lead with what the citizen can do (the verb). Steps. Eligibility. What you need. How long it takes. Cost. What happens next. Contact.

---

## Visual identity for non-web outputs

**Presentations.** See the `govtech-barbados-presentations` skill. Big text, few words. Three-act structure. Show the thing. Charcoal title bar in top-left of content slides; gold cover slide; navy closing slide. Mix background colours – no two adjacent slides the same.

**QR codes.** See the `govtech-barbados-qr-codes` skill. Navy modules, off-white background, gold finder eyes, charcoal label bar.

**Documents (Word, PDF).** Plain text. Figtree if the rendering supports it. Navy for headings, charcoal for body. Crest and "Government of Barbados" in the header.

---

## When the design system doesn't cover something

If you need a pattern that isn't in the design system, build it from primitives the system *does* cover – containers, typography, buttons, links, form groups – and use the CSS variables, not hex. Don't invent new colours.

If the gap is structural and recurring, flag it as a candidate for a new block or component. The design system is in alpha; gaps are expected.

---

## Quick checklist for any new output

- [ ] Plain language: civil-service register words swapped out, sentences under 20 words, active voice
- [ ] "You" and "we"
- [ ] Reading age friendly to a 9-year-old
- [ ] Design system components and tokens used (no Tailwind, no bespoke colours, no inlined CSS)
- [ ] Official banner, header, alpha/beta banner, footer present on every page
- [ ] Barbadian data formats correct (parishes spelled "St. Michael" etc.)
- [ ] Trident ID / vehicle / business lookups used instead of manual identity fields
- [ ] One thing per page (forms)
- [ ] Back link on every page except Start
- [ ] Confirmation page gives reference, next step, timing
- [ ] Accessible: error summary + inline error pattern, `aria-invalid`, `aria-describedby`
- [ ] Works on a phone-sized viewport
- [ ] Works on a slow connection
- [ ] Keyboard reachable end to end
