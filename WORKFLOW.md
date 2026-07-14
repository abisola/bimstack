# The bimstack sprint

```
Listen → Map → Make → Test → Ship → Show → Iterate
```

Seven verbs. Every sprint, every phase, every service. Not a process to follow in order – a set of activities a team is always rotating through.

This file explains what each verb means in practice, who leads it, and what good looks like.

---

## Listen

**What it is:** every activity that brings the citizen's voice into the team. Not just user research in a discovery; continuous listening throughout the life of the service.

**Who leads:** service designer, supported by content & interaction designer.

**What good looks like:**
- At least one round of user research every sprint
- Front-line staff present in show-and-tells
- Citizen quotes in weeknotes, by situation (anonymised if needed)
- Existing data (analytics, support tickets) reviewed every sprint
- Under-represented citizens specifically sought out, not just whoever's easiest to recruit

**Skills:** `bimstack:research-coach` (the router across the whole cycle), `bimstack:research-planning`, `bimstack:transcript-analysis`, `bimstack:research-presenting`, supported by `design:user-research` and `design:research-synthesis`.

**Cost of skipping:** you build for an imagined citizen. Standard 1 fails.

---

## Map

**What it is:** turning what you've heard into a shared view of the service – the journey, the actors, the systems, the touchpoints. Maps are how a multidisciplinary team agrees what they're talking about.

**Who leads:** service designer.

**What good looks like:**
- Current-state journey before any future-state design
- Ecosystem map identifying every actor and system, not just the digital ones
- Service blueprint making the back office visible from beta onwards
- All maps published to the team space (and outside the team where possible)

**Skills:** `bimstack:journey-map`, `bimstack:service-blueprint`, `bimstack:ecosystem-map`, `bimstack:experience-map` (the Anthropic `service-design` plugin extends these where installed).

**Cost of skipping:** the team builds different services in parallel and doesn't notice until beta.

---

## Make

**What it is:** turning the map into something a citizen can use. In alpha, that's clickable prototypes. In beta, it's production code. In live, it's iterations on production.

**Who leads:** content & interaction designer for early prototypes; developer once production code lands.

**What good looks like:**
- Multiple alphas in alpha (not one)
- Prototypes use the Barbados Design System – no Tailwind, no bespoke colours
- Production code uses lookups (Trident ID, vehicle, business), not retyped fields
- Page weight kept low – tested on a real phone, on a slow connection
- Source code in a public repository from day one (Standard 9)

**Skills:** `anthropic-skills:govtech-barbados-services`, `anthropic-skills:govtech-barbados-forms`, `design:design-system`.

**Cost of skipping:** you have ideas instead of evidence.

---

## Test

**What it is:** putting the made thing in front of people and systems that will break it – users, assistive tech, slow networks, attackers.

**Who leads:** content & interaction designer for usability and accessibility; developer for performance; cyber engineer for security.

**What good looks like:**
- Usability testing every sprint, with real users on real phones
- Accessibility audit every sprint, including with assistive tech
- Performance testing on throttled connections before any release
- Security testing including a pen test before public beta, and at least annually thereafter
- Bugs and friction are filed in the open

**Skills:** `design:accessibility-review`, `design:design-critique`.

**Cost of skipping:** the citizen tests it in production, and Standard 5 fails.

---

## Ship

**What it is:** putting the thing in front of real citizens, in production, in small enough chunks to keep the risk small. Discovery → alpha → beta → live; private beta → public beta; small frequent releases.

**Who leads:** delivery manager, supported by developer.

**What good looks like:**
- Private beta before public beta, always
- Small, frequent releases – not big-bang launches
- Operational readiness in place – on-call, incident runbook, support process
- The four GDS baseline metrics wired up before public beta
- Phase-gate standards assessment before every transition

**Skills:** `bimstack:service-standard-assessment`.

**Cost of skipping:** you ship a service nobody is ready to run.

---

## Show

**What it is:** working in the open. Weeknotes, show-and-tells, public repos, decisions written down where the next team can find them.

**Who leads:** delivery manager, but everyone takes a turn at the front.

**What good looks like:**
- Weeknote every week, even when the week was rough
- Show-and-tell every sprint, with the thing shown live
- Source in a public repository from day one
- Decisions captured in ADRs in the repo
- Other MDAs and civil society invited

**Skills:** `bimstack:weeknote`, `bimstack:show-the-thing`, `anthropic-skills:govtech-barbados-presentations`.

**Cost of skipping:** the team gets isolated, the knowledge stays in heads, and Standard 9 fails.

---

## Iterate

**What it is:** keeping going. The end of one sprint is the start of the next. The end of one phase is the start of the next. Live is not maintenance – it's where most of a service's life is spent and most of the value is delivered.

**Who leads:** the whole team.

**What good looks like:**
- Every sprint feeds back into the next sprint's plan
- Live phase has the team and budget to make substantive changes, not just bug fixes
- Standards reassessment at least annually in live
- Retirement planned for when the need is gone

**Skills:** every skill in the bimstack, repeatedly.

**Cost of skipping:** the service drifts out of fit, Standard 10 fails, and citizens stop using it.

---

## How the verbs map to the phases

| Phase | Listen | Map | Make | Test | Ship | Show | Iterate |
|---|---|---|---|---|---|---|---|
| Discovery | Heavy | Heavy | – | – | – | Weeknotes, show-and-tells | Through discovery rounds |
| Alpha | Heavy | Heavy | Prototypes | Heavy | – | Weeknotes, show-and-tells | Through alpha rounds |
| Beta | Steady | Steady (blueprint) | Production | Heavy | Yes (private then public) | Weeknotes, show-and-tells | Every sprint |
| Live | Continuous | Periodic | Iterative | Continuous | Small frequent releases | Weeknotes, show-and-tells | Forever, then retire |

A team in alpha that's heavy on Make and light on Listen has misread the phase. A team in beta that hasn't started Test is heading for trouble.

---

## What's deliberately not in the sprint

bimstack's sprint excludes some things that show up in lots of other agile frameworks:

- **Estimation rituals.** Story points, t-shirt sizes, planning poker. They're a proxy for actual planning and rarely help.
- **Stage-gate sign-offs from outside the team.** The team owns the work. The Standards self-assessment is the gate.
- **Velocity charts.** Velocity is a vanity metric. Standard 13's four metrics are the real ones.
- **Big upfront design.** Anything not validated with users is a guess.
- **Big upfront architecture.** ADRs accumulate; they don't sit at the top of the backlog.

These aren't banned. They're just not the defaults.

---

## What to do when a verb is being skipped

If the team is skipping a verb, name it. In the weeknote. In the show-and-tell. In the standards self-assessment.

| You notice | Likely cause | What to do |
|---|---|---|
| No Listen this sprint | Recruitment fell through, or research time got squeezed | Block research time first in the next sprint plan |
| Make without Map | The team jumped to a solution | Pause and map. Even a 30-minute whiteboard helps. |
| Test only at the end | Test got pushed back by a deadline | Move test forward. Late testing is fake testing. |
| Ship without Show | The team got busy | Catch up. Two weeks without a weeknote is a smell. |
| No Iterate after Ship | Treating live as maintenance | Standard 10 is failing. Bring the team back in. |

The sprint mantra is a check, not a recipe. If something feels off, walk the verbs and find the one that's missing.
