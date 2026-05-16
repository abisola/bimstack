# Barbados Digital Service Standards

The 13 standards by which public-facing digital services in Barbados are assessed before they are published. Maintained by GovTech Barbados at <https://github.com/govtech-bb/Barbados-Digital-Service-Standards>.

Every bimstack agent uses these as the canonical checklist. When an agent is unsure whether a piece of work is ready to ship, it self-assesses against this list first.

| # | Standard | One-line | Owns it most |
|---|----------|----------|--------------|
| 1 | Make sure your service meets your users' needs | Research with real users from day one and keep doing it. | Service designer |
| 2 | Discover, design, build and deliver with a multidisciplinary team | A real team with the skills it needs, including senior decision-makers. | Delivery manager |
| 3 | Ensure that everyone can use the service | Inclusive of every Barbadian – literacy, language, disability, connectivity, device. | Content & interaction designer |
| 4 | Use simple and relatable language | Plain language. Familiar words. Bajan voice where it lands. | Content & interaction designer |
| 5 | Make sure the service works the first time it's used | Simple, intuitive, completable end-to-end without help. | Service designer + developer |
| 6 | Choose the right tools and technology | Sustainable, scalable, no vendor lock-in. | Developer |
| 7 | Use open, common, interoperable platforms | Reuse before you rebuild. Adopt Digital Public Infrastructure. | Developer |
| 8 | Make the service scalable and sustainable | Funded, staffed and supported over the long term. | Delivery manager |
| 9 | Be open and transparent | Show the thing. Publish source. Work in the open. | Delivery manager |
| 10 | Make sure the service can be continuously improved | Listen, learn, iterate – forever. | Service designer + delivery manager |
| 11 | Design for trust, safety, and confidentiality | Secure by design. Convincingly government. Privacy respected. | Cybersecurity engineer |
| 12 | Make it easy for users to find | Verbs not nouns. SEO. Signposted from where users actually look. | Content & interaction designer |
| 13 | Monitor, manage, and measure performance | Define what good looks like and report it openly. | Delivery manager + developer |

---

## 1. Make sure your service meets your users' needs

**What it means.** Speak with, observe, and understand users and their needs before and while building the service. Observe them in real conditions, not lab conditions.

**Why it matters.** A service that doesn't meet a real need won't get adopted and the money is wasted.

**How an agent checks.**

- Have at least five users been interviewed before any building started?
- Is there a written problem statement that names the user need, not the technology?
- Is there evidence of testing prototypes with potential users?
- Has the team checked which groups can't access the service today, and why?
- Is the service being adapted based on continuous user feedback?

---

## 2. Discover, design, build and deliver with a multidisciplinary team

**What it means.** A team with product, research, content, design, technology, delivery and front-line staff – co-located where possible, with senior decision-makers in the room.

**Why it matters.** Single-discipline teams build single-discipline services. You need every perspective.

**How an agent checks.**

- Is there a named product manager, user researcher, designer (content, service, interaction), developer, delivery manager, and front-line service representative?
- Does the team include subject-matter experts from the relevant MDA?
- Are senior decision-makers reachable inside the sprint, not just at gate reviews?
- If a vendor is delivering, is there a regular (at least twice-monthly) check-in with the GovTech team?

---

## 3. Ensure that everyone can use the service

**What it means.** Inclusive of every Barbadian regardless of literacy, digital skills, language, geography, age, disability, device or income. Low-data. Assisted-digital channels. Built on the [Barbados Design System](https://github.com/govtech-bb/design-system).

**Why it matters.** Government serves everyone or it serves no one.

**How an agent checks.**

- Have under-represented groups been named, and is there a plan to research with them?
- Does the service work without an internet-enabled device (assisted digital, phone, in-person)?
- Is the service WCAG 2.1 AA accessible, tested with assistive tech?
- Is the page weight kept low for citizens on limited data?
- Is there a secure proxy access path for users who need a trusted family member or friend to help?

---

## 4. Use simple and relatable language

**What it means.** Plain language. Familiar words. Reading age low enough that a 9-year-old can follow it. Bajan vernacular where it helps the user.

**Why it matters.** Clear language is a form of respect, and the only way to reach citizens with mixed literacy levels.

**How an agent checks.**

- Have the civil-service register words been swapped out (submit → send, provide → tell us, verify → check, proceed → continue, commence → start, reside → live, prior to → before, mandatory → required, utilise → use, ensure → make sure)?
- Are sentences mostly under 20 words, in the active voice, addressing the user as "you"?
- Are technical terms explained with a hint ("You can find this on your national ID card")?
- Does the confirmation page tell the user specifically what happens next and when?
- Has the content been tested with real users with mixed literacy?

---

## 5. Make sure the service works the first time it's used

**What it means.** Simple, intuitive, completable end-to-end the first time, with minimal help. Every interaction is reliable and moves the user toward their goal.

**Why it matters.** A service that needs a phone call to complete isn't a digital service – it's a digital diversion.

**How an agent checks.**

- Has the full journey been walked end-to-end on a phone, on a slow connection?
- Has it been usability-tested with users who haven't seen it before? How many completed the task unaided?
- One thing per page? (GOV.UK Service Manual.)
- Is there a Back link on every page except Start?
- Does the confirmation page give a reference number, the next step, and the timing?

---

## 6. Choose the right tools and technology

**What it means.** Tools and technologies that are easy to use, easy to find skills for, easy to scale, and don't lock the government into a single vendor.

**Why it matters.** Technology choices are 10-year decisions. Get them wrong and the service has to be rebuilt.

**How an agent checks.**

- Has the technology been picked against cost, ease of scale, ease of use, and accessibility – not just "what the vendor sells"?
- Has MIST been consulted on the choice?
- Are heavy front-end frameworks avoided? Is the page weight reasonable on a slow phone?
- Are continuous integration, interoperability, and continuous deployment supported?
- Is the design system being used for UI?

---

## 7. Use open, common, interoperable platforms

**What it means.** Build on what already exists. Reuse common components – digital identity, payments, data exchange – instead of rebuilding them. Default to open source.

**Why it matters.** Reduces cost and duplication, improves the citizen experience across MDAs, makes the whole government more interoperable.

**How an agent checks.**

- Has the team checked the catalogue of services and common components first?
- Is the service using Trident ID for personal details, the vehicle lookup for vehicles, and the business lookup for businesses, rather than asking the citizen to retype?
- Are payment gateways and data exchanges the shared GovTech ones, not custom?
- Is the design system being used (no bespoke styling)?
- Where open source digital public goods (DPGs) exist, are they being used in preference to proprietary tools?

---

## 8. Make the service scalable and sustainable

**What it means.** The service has the team, funding and tooling to keep running and improving after launch. Not a project that ends, a service that lives.

**Why it matters.** Lots of government services launch well and decay slowly. Decay is the default unless you plan against it.

**How an agent checks.**

- Is there a named team and budget for the live phase, not just for build?
- Is there at least a six-month rolling budget?
- Is the source code documented and stored in an accessible repository?
- Is the team free of single-vendor dependency for development, delivery, and maintenance?
- Is interoperability designed in from the start?

---

## 9. Be open and transparent

**What it means.** Working in the open. Show-and-tell sessions. Source code published. Other MDAs and users invited to learn and feed back as the work happens.

**Why it matters.** Knowledge spreads across government, citizens trust what they can see, and other teams can learn from your mistakes.

**How an agent checks.**

- Is there a regular show-and-tell cadence (typically every two weeks)?
- Are weeknotes being published?
- Is the source code in a public repository (or with a clear plan to publish at the right phase)?
- Are other MDAs invited to the show-and-tell?
- Are decisions documented in the open?

---

## 10. Make sure the service can be continuously improved

**What it means.** Real users on the earliest version. Continuous research after launch. Capacity, resources and technical flexibility to iterate – forever.

**Why it matters.** Services are never finished. They drift out of fit unless you keep designing them.

**How an agent checks.**

- Are real users on the service in alpha, not just internal testers?
- Is user research happening continuously after launch, not only before?
- Is there capacity in the live team to make substantive changes (not just bug fixes and security patches)?
- Are features that aren't used being retired?
- Is there a mechanism for citizens to give feedback inside the service (e.g. the feedback box)?

---

## 11. Design for trust, safety, and confidentiality

**What it means.** Convincingly government. Secure. Compliant with national and international data protection. Privacy respected. Risks identified and managed continuously.

**Why it matters.** Citizens give the government data because they have to. The bargain only works if the government keeps it safe.

**How an agent checks.**

- Is the service using the design system's chrome (official banner, header, footer) so it looks unmistakably government?
- Has a threat model been produced and reviewed?
- Are penetration tests and vulnerability scans scheduled and acted on?
- Is personal data minimised – is the service collecting only what it needs?
- Is the team trained in data protection, with a named DPO or equivalent?
- Is incident response planned, with a clear runbook?

---

## 12. Make it easy for users to find

**What it means.** Citizens can find the service from where they already look. The service is named with a verb. Search engines pick it up. Offline channels signpost it too.

**Why it matters.** A great service nobody finds doesn't solve a problem.

**How an agent checks.**

- Is the service named with a verb the citizen would actually type ("renew driver's licence", not "Driver and Vehicle Licensing System")?
- Has SEO been considered, with the citizen's words in the page title and headings?
- Is the service signposted from related services on alpha.gov.bb?
- Are offline channels (kiosks, contact centres, MDA front desks) aware of and pointing to the digital service?

---

## 13. Monitor, manage, and measure performance

**What it means.** Defined success metrics. Continuous performance data from every channel. Open reporting. Iteration based on what the data shows.

**Why it matters.** You can't improve what you don't measure, and citizens deserve to see how their services are doing.

**How an agent checks.**

- Is there a defined definition of success for the service, agreed with the MDA and GovTech?
- Are the four GDS baseline metrics tracked – digital take-up, completion rate, cost per transaction, user satisfaction?
- Is performance data published openly?
- Is performance reviewed regularly and used to prioritise improvements?
- Is qualitative feedback (interviews, support tickets) triangulated with quantitative data?

---

## Using this reference

Every bimstack agent reads this file before assessing work, and cites the relevant standard by number ("Standard 4: simple and relatable language") in its outputs.

When in doubt, the agent asks: *Could a citizen with limited literacy, on a £20 phone, on a slow connection, with no help, complete this service successfully?* If the answer is no, at least one standard is failing.
