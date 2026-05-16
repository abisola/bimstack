# The GDS Way: Discovery, Alpha, Beta, Live

The four-phase agile delivery model used by the UK Government Digital Service and adopted across most modern digital governments – including, by intention, GovTech Barbados.

Source: <https://www.gov.uk/service-manual/agile-delivery> and <https://gds-way.digital.cabinet-office.gov.uk/>.

Every bimstack agent knows which phase the team is in and adjusts what it produces accordingly. A discovery deliverable in beta is a waste; a beta deliverable in discovery is dangerous.

---

## Discovery

**Purpose:** find out if there's a problem worth solving and who has it.

**You're researching, not building.** No service. No prototype. No commitments to technology. Just enough to know whether to proceed, and if so, what the highest-priority user needs are.

**Inputs.** A vague brief from an MDA: "we want a new licensing system", "applications are slow", "citizens are complaining". The job of discovery is to turn that into a sharp problem statement.

**Activities.**

- Stakeholder interviews across the MDA, front-line staff, partner agencies
- User research – at least five interviews with citizens facing the problem
- Walkthrough of the current journey (digital, paper, phone, in-person)
- Mapping the ecosystem of actors, channels, systems
- Reviewing existing data (analytics, support tickets, transaction volumes)
- Sketching candidate problem statements

**Outputs.**

- A prioritised list of user needs
- A clear problem statement
- Findings about the current process and pain points
- An estimate of scale and cost for an alpha
- A recommendation: proceed to alpha, redesign the problem, or stop

**Typical duration.** 6 to 12 weeks.

**Team.** Service designer, user researcher, delivery manager, subject-matter expert. No engineers yet (their time is better spent elsewhere until there's something to build).

**Don't.** Don't design a service. Don't pick a technology. Don't write tickets for the build. Don't promise an MDA you'll deliver by a date.

---

## Alpha

**Purpose:** test the riskiest assumptions from discovery by building rough prototypes and putting them in front of users.

**You're prototyping, not building production code.** Clickable HTML on alpha.gov.bb is fine. Real data is not.

**Inputs.** Discovery outputs: the prioritised user needs, the problem statement, the ecosystem.

**Activities.**

- Sketch several candidate approaches – multiple alphas, not just one
- Build rough prototypes using the [Barbados Design System](https://github.com/govtech-bb/design-system)
- Test each prototype with real users
- Compare approaches; pick the one that best meets the needs
- Identify the technical, organisational, and policy risks for beta
- Plan the beta phase: scope, team, cost, timeline

**Outputs.**

- Designs that have been tested and iterated
- A clear recommendation: which approach to take into beta
- A roadmap for beta with explicit risks and dependencies
- An assessment against the Barbados Digital Service Standards

**Typical duration.** 8 to 12 weeks.

**Team.** Service designer, content designer, interaction designer, user researcher, developer (prototype-focused), delivery manager, subject-matter expert. Cyber engineer joins to start threat modelling.

**Don't.** Don't build for scale. Don't commit to a technology stack you haven't prototyped with. Don't show alpha prototypes to citizens as if they were a real service.

---

## Beta

**Purpose:** build the real service, in production, and put it in front of real users handling real transactions.

**You're building, but iteratively.** Start with private beta (small group of real users). Move to public beta (anyone can use it). Keep researching, keep iterating.

**Inputs.** Alpha outputs: the chosen design, the beta plan, the risks.

**Activities.**

- Build production code on the technology stack chosen in alpha
- Wire up the back office (which is often where the hard work is)
- Run private beta with a controlled cohort of real citizens
- Continuous user research – sessions every fortnight at least
- Continuous accessibility testing – at least one full audit
- Security testing including a pen test before public beta
- Set up analytics, the four GDS baseline metrics, and the feedback box
- Performance testing – does it handle the expected load?
- Operational readiness: who is on call, what's the incident runbook, what's the support process?

**Outputs.**

- Working software handling real transactions for real citizens
- The four metrics being reported openly
- Source code in a public repository
- Documentation for the next team
- An assessment against all 13 Barbados Standards, with evidence

**Typical duration.** 12 to 26 weeks for private beta; ongoing through public beta.

**Team.** All disciplines: product, service design, content, interaction, research, multiple developers, ops, cyber, delivery, subject-matter experts, MDA front-line.

**Don't.** Don't skip private beta and go straight to everyone. Don't switch off discovery research. Don't let the back office lag the front end.

---

## Live

**Purpose:** keep the service working, keep improving it, keep meeting the user need as it changes.

**You're maintaining, but not maintaining-mode.** Live is when most of a service's life is spent and most of the value is delivered. Treat it like a long, slow beta.

**Inputs.** A service in public use, hitting its baseline metrics.

**Activities.**

- Continuous user research and feedback collection
- Continuous accessibility checks (every change)
- Continuous security monitoring and patching
- Regular minor releases, not big bangs
- Capacity for substantive change, not just bug fixes
- Reporting on the four metrics and any service-specific ones
- Periodic reassessment against the Barbados Standards
- Retirement planning – know when the service should end

**Outputs.**

- A service that keeps meeting the user need as the world changes
- Published performance data
- A team that can sustain the service for years

**Typical duration.** Indefinite, until retirement.

**Team.** Smaller than beta. Product, a developer or two, design, research, ops. Senior decision-makers still reachable.

**Don't.** Don't put the service into stasis. Don't think "we built it, now we're done". Don't outsource live support to a vendor with no embedded GovTech presence.

---

## Phase gates

Between each phase there's a gate. In the UK, this is the Service Standard Assessment – a panel reviews the service against the Service Standard and either passes it through, sends it back, or stops it.

In Barbados, the equivalent is the Barbados Digital Service Standards assessment. bimstack's `service-standard-assessment` skill walks an agent (or a human reading the output) through the 13 standards with evidence. A pass requires a yes-with-evidence on all 13.

| Gate | Question |
|---|---|
| Discovery → Alpha | Is there a clear user need worth meeting, and a sense of how? |
| Alpha → Beta | Is the chosen approach feasible, desirable, and viable to build? |
| Beta → Live | Is the service good enough to scale, with the team and infrastructure to sustain it? |
| Live → Retire | Has the need gone, or has a successor service taken over? |

---

## How bimstack uses the phases

Each agent has a default mode but adapts based on phase:

| Agent | Discovery | Alpha | Beta | Live |
|---|---|---|---|---|
| Service designer | Research, journey mapping, ecosystem mapping, problem statements | Prototype journey, blueprint, multiple-alpha comparison | Frontstage/backstage refinement, ops integration | Continuous research, monitoring service health |
| Content & interaction designer | Listen to how citizens describe the thing | Microcopy, prototypes, accessibility | Production copy, error states, content patterns | Iterative copy improvements |
| Delivery manager | Stakeholder mapping, RAID log, plan to alpha | Plan to beta, weeknotes, show-and-tells | Sprint cadence, standard assessments, operational readiness | Live cadence, performance reports |
| Developer | Technical landscape, MDA system audit | Prototypes only, no production code | Production build, infrastructure, CI/CD | Maintenance, minor releases, telemetry |
| Cyber engineer | Threat horizon scan | Threat model v1, secure-design patterns | Pen test, secure deployment, incident runbook | Continuous monitoring, patch cadence |

When you ask an agent to do something, tell it which phase you're in. If you don't, it will ask.
