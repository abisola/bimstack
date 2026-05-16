---
name: brief-to-prototypes
description: Turn a brief or a problem statement into multiple clickable HTML prototypes ready for user testing, in the GovTech Barbados house style, with assumptions surfaced inline. Use this when the team has a brief and wants to skip straight to testable artefacts instead of waiting weeks for the first prototype. Triggers on "build me a prototype", "turn this into a service", "give me something to test", "what could this look like", "/bimstack:build", "alpha prototypes for", "candidate alphas", "multiple alphas".
---

# Brief → testable prototypes

This skill is the build engine in bimstack. It takes a brief and produces **multiple** working HTML prototypes the team can put in front of citizens within hours, not weeks. Each prototype encodes a different design hypothesis. Each surfaces its assumptions so the team knows exactly what to validate in testing.

It supports Barbados Digital Service Standards 1 (meet user needs), 3 (everyone can use it), 4 (simple, relatable language), 5 (works first time), and 7 (open, interoperable platforms). It explicitly does **not** replace user research – it makes user research faster to feed back into.

For the larger workflow this sits inside, read `PLAYBOOK.md` – the *Rapid prototyping loop* section.

---

## When to use

- The team has a problem statement (formal or informal) and wants to feel three candidate approaches
- The team has been talking about a service in the abstract and the conversation has stalled
- The MDA wants to see something concrete before the next meeting
- Discovery is ending and the team needs alphas to take into testing
- A senior decision-maker is asking "what would it look like?" and the team needs an honest answer

**Do not use this skill to skip discovery.** A prototype built without research is a guess made visible. Standard 1 still applies – the brief feeding into `/bimstack:build` should be evidence-led even when the build is fast.

---

## What this skill produces

For every run, a folder containing:

| File | Purpose |
|---|---|
| `README.md` | Orientation – the brief, the three hypotheses, how to test them |
| `prototype-1-[name]/index.html` | Candidate 1 as a single clickable HTML file |
| `prototype-2-[name]/index.html` | Candidate 2 |
| `prototype-3-[name]/index.html` | Candidate 3 (when warranted; sometimes 2 is enough) |
| `assumptions.md` | Consolidated list of assumptions across prototypes, each tagged with severity and validation method |
| `test-plan.md` | User-testing plan for the three prototypes |

The prototypes are **self-contained single-file HTML**. They render in any browser. They link to Google Fonts for Figtree and use inline CSS that approximates the published GovBB design system. When the real published `@govtech-bb/styles` package is reachable (CDN or local install), the agent should switch the prototype to link to it instead.

---

## Always produce more than one

The single most important rule of this skill: **never generate just one prototype**.

If a brief feels like it has one obvious answer, that's a sign the team hasn't questioned the brief hard enough. Generate at least two genuinely different design hypotheses. Three is better.

Examples of *genuinely different*:

- Phone-first end-to-end vs. assisted-digital primary
- Citizen-mediated vs. institution-mediated (e.g. doctor vs. hospital HR)
- Single-form vs. progressive disclosure across multiple sessions
- New service vs. better signposting to an existing one
- Build vs. integrate with a shared platform

Examples of *not different enough* (don't do this):

- Three prototypes that vary only in copy
- Three prototypes that vary only in colour or layout
- Three prototypes that all assume the same back office

---

## The prototype anatomy

Every prototype has:

### 1. The chrome (always)

- The official government banner ("This is the official government service of Barbados")
- The yellow GovBB header with logo and navigation
- The yellow alpha status banner ("alpha – this is a prototype, don't use it for real")
- A second navy bimstack banner naming the prototype variant and offering a toggle for the assumptions panel
- The navy GovBB footer

The chrome stays consistent across the three prototypes. That way the team is testing the journey, not the chrome.

### 2. The journey (varies by hypothesis)

The standard alpha.gov.bb form flow: **Start → question pages → Check Your Answers → Confirmation**. Each prototype implements this skeleton with the variant's own twist.

Each question page asks **one thing** unless the questions are tightly related (Standard 4 / GOV.UK Service Manual). Back links on every page except Start. Continue button at the bottom. Validation on submit, with the error-summary-at-top + inline-error pattern.

Pages live in the same HTML file, shown one at a time via JavaScript navigation. This makes the prototype a single shareable file the team can attach to a Slack message, an email, or a Council briefing.

### 3. The assumptions panel (always, toggleable)

Slide-out panel on the right, hidden by default so user testing sees a clean service, toggleable by a button in the bimstack banner. Lists every assumption the prototype makes, tagged:

- `[VERIFY WITH USERS]` – needs a citizen to confirm in testing
- `[VERIFY WITH MDA]` – needs an MDA conversation to confirm
- `[VERIFY WITH MIST]` – needs the platform team to confirm
- `[VERIFY WITH POLICY]` – needs a legal or policy check
- `[VERIFY WITH DATA]` – needs analytics or research data
- `[KNOWN GAP]` – the team knows this isn't right yet; placeholder for now

The assumptions panel is what makes these prototypes honest. A prototype without tagged assumptions is a confident lie.

### 4. The "this is fake" markers (always)

Mock data is clearly labelled mock. Mock buttons that "send" or "pay" go to fake confirmation pages. The Trident ID lookup that "finds" Dr. Sarah Williams shows that name only because no real citizen's data should ever be in an alpha prototype.

---

## The standard CSS / chrome

Inline the following into every prototype. Tokens match the GovTech Barbados house style.

```css
:root {
  --bb-navy: #00267F;
  --bb-gold: #FFC726;
  --bb-off-white: #F7F3F3;
  --bb-charcoal: #2C2C2C;
  --bb-white: #FFFFFF;
  --bb-grey-light: #DDDDDD;
  --bb-grey-mid: #777777;
  --bb-error: #B71C1C;
  --bb-green: #00703C;
}
```

For the full inline CSS block, see `examples/build-renew-medical-licence/prototype-1-phone-first/index.html` – it's the canonical pattern.

When the published `@govtech-bb/styles` package is available, replace the inline CSS with:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@govtech-bb/styles@latest/dist/govbb.min.css">
```

(URL to be confirmed with MIST and the design-system maintainers; the inline approximation is the default until then.)

---

## The Trident ID, vehicle, and business lookups

Mock them. The skill assumes every prototype will integrate with Trident ID for personal details (Standard 7). The mock looks like:

1. The citizen enters their Trident ID number (or NRN)
2. The prototype shows "Looking up your details…" for ~1 second
3. The prototype displays a mock citizen card: name, NRN, contact, address
4. The citizen confirms or asks to correct

Never ask for citizen identity details as separate manual fields when a lookup would provide them. That's a violation of Standard 7.

---

## How the skill works in practice

When invoked, the skill:

1. **Reads the brief.** This can be a paragraph in the prompt, a link to a problem statement, or a discovery report.
2. **Identifies 2–3 design hypotheses.** Different enough that testing them produces real signal. Names them.
3. **Lists the assumptions** each hypothesis makes, tagged.
4. **Generates each prototype** as a complete HTML file with the standard chrome, the candidate journey, the assumptions panel, and the "this is fake" markers.
5. **Writes the consolidated assumptions list** across prototypes.
6. **Writes the test plan** – what to test with users, how many users per prototype, where, how to recruit, what good signal looks like.
7. **Writes the README** for the build folder.

The user then either:

- Tests the prototypes with users (see `test-plan.md`)
- Reviews them with the MDA before testing
- Asks the agent to refine one variant using `/bimstack:iterate`

---

## What this skill does not do

- **It does not write production code.** These prototypes are throwaway. They look like production but they are not. Standard 8 starts in beta, not in `/bimstack:build`.
- **It does not invent the user need.** The brief must come from research or from a clear MDA ask. The skill flags every gap as `[VERIFY WITH USERS]` – it does not paper over them.
- **It does not skip the standards check.** Each prototype is generated with Standards 1, 3, 4, 5, 7 baked in. If a hypothesis violates one of these (e.g. an inaccessible prototype), the skill says so and either refuses or explicitly flags it as a known violation to test against.
- **It does not lock in the design system gaps.** When the prototype reaches for a pattern the design system doesn't yet have, the skill marks it as `[KNOWN GAP]` and proposes the pattern back to the design system maintainers.

---

## Quick template

The prototype HTML has this skeleton.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Service name] – alpha.gov.bb</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap">
  <style>/* inline GovBB-approximation styles */</style>
</head>
<body>
  <div class="govbb-official-banner">This is the official government service of Barbados</div>
  <header class="govbb-header">…</header>
  <div class="govbb-status-banner govbb-status-banner--alpha">alpha – this is a prototype, don't use it for real renewals</div>
  <div class="bimstack-banner">
    <span>bimstack prototype: Variant 1 of 3 – Phone-first individual renewal</span>
    <button onclick="toggleAssumptions()">Show assumptions (12)</button>
  </div>
  <main class="govbb-container">
    <section id="page-start" class="page page--active">…</section>
    <section id="page-id-lookup" class="page">…</section>
    <section id="page-practice" class="page">…</section>
    <section id="page-cpd" class="page">…</section>
    <section id="page-check" class="page">…</section>
    <section id="page-payment" class="page">…</section>
    <section id="page-confirmation" class="page">…</section>
  </main>
  <footer class="govbb-footer">…</footer>
  <aside id="assumptions" class="bimstack-assumptions">…</aside>
  <script>
    function goTo(pageId) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('page--active'));
      document.getElementById(pageId).classList.add('page--active');
      window.scrollTo(0, 0);
    }
    function toggleAssumptions() {
      document.getElementById('assumptions').classList.toggle('bimstack-assumptions--open');
    }
  </script>
</body>
</html>
```

---

## After generation

The team should:

1. Open each prototype in a browser. Click through it. Read the assumptions panel.
2. Walk the journey on a phone, on a slow connection. Standard 3 begins here.
3. Run the test plan with citizens. The skill produces this in `test-plan.md`.
4. Bring feedback into `/bimstack:iterate` for the next version.

The output of `/bimstack:build` is not the alpha. The output is the **starting point** for the alpha. The alpha is what the team learns from testing.

---

## Citing standards

Every prototype carries an inline comment in its `<head>` block citing the standards it's anchored to:

```html
<!--
  bimstack prototype – Variant N of M
  Anchored to Barbados Digital Service Standards:
    1 (meet user needs)
    3 (everyone can use it)
    4 (simple, relatable language)
    5 (works first time)
    7 (open, interoperable platforms)
  Anchored to GOV.UK Design Principles 1, 4, 6, 7
  Assumptions surfaced in the right-hand panel.
-->
```

This is for the next team that reads the HTML – they should be able to see the bimstack lineage without having to dig.
