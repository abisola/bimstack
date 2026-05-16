# Problem statement – Renewing a medical licence

**Working title:** Renewing a medical licence
**Phase:** Discovery (strawman, week 0)
**Owner:** Service designer, bimstack
**Date:** 2026-05-16

> This is a working hypothesis, not a finding. Every claim marked `[TO VERIFY]` becomes the discovery's job to confirm, refine, or replace.

## The user

Medical practitioners registered to practise in Barbados under the Medical Profession Act – including local Bajan doctors in public service, private-practice GPs and specialists, locums working short rotations, and overseas-trained doctors completing provisional periods. `[TO VERIFY: categories and rough cohort sizes with the Medical Council of Barbados.]`

The secondary user is the **Medical Council staff** who process renewals and the **Ministry of Health and Wellness** which depends on the register being current to know who can legally practise. `[TO VERIFY]`

There is also a **third user** worth naming up front: **patients**, who never see this service but who are affected by it. A renewal that lapses unintentionally can take a doctor off the register and out of clinical practice with knock-on effects on hospital rotas and patient care. `[TO VERIFY frequency and consequence with the Medical Council.]`

## The need

I'm a doctor working in Barbados. To stay legally allowed to practise, I need to renew my licence each year. I need to do this without losing days of clinical time to admin, without getting caught out by paperwork I didn't know was missing, and with confidence that my CPD evidence has been accepted. `[TO VERIFY cadence (annual? biennial?) and CPD requirements with the Medical Council.]`

## The current experience

`[TO VERIFY entire current state – this is hypothesis only.]`

Today the renewal is understood to be paper-and-in-person. The doctor collects a form (or downloads a PDF), gathers their CPD evidence, pays a fee at a designated point, attends the Medical Council to submit everything, and waits for the certificate to be issued. There may be a year-end peak that strains the Council's capacity. There may be variation between categories (full vs provisional, local vs overseas-trained, specialist vs GP).

## What's wrong with the current experience

Hypothesis-led until verified. These are the candidate problems a discovery should test against doctors' lived experience.

- Doctors lose clinical hours to renewal admin `[TO VERIFY scale]`
- Renewals concentrate around a deadline, creating a queue and a bottleneck for Council staff `[TO VERIFY]`
- Doctors don't always know what they're missing until they turn up; back-and-forth wastes a second trip `[TO VERIFY]`
- CPD evidence is gathered in paper or PDF form and submitted in bulk – auditable but slow and easily lost `[TO VERIFY format and process]`
- The fee payment is separate from the application, so a fee paid against a missing form is its own problem to unwind `[TO VERIFY]`
- Some categories of doctor (overseas-trained, locum, on rotation) face additional checks that aren't obvious until they're partway through `[TO VERIFY]`
- The Council can't easily tell the Ministry "doctor X is currently registered" in real time, because the register is updated on paper `[TO VERIFY]`

## Why it matters

- **For doctors:** lost clinical hours, anxiety about lapsed registration, especially for those working multiple sites or in private practice. `[TO VERIFY]`
- **For the Medical Council:** processing load concentrates in a short window. Staff time goes on data entry and chasing missing documents rather than regulatory work. `[TO VERIFY]`
- **For the Ministry:** a register that isn't real-time can't be trusted as the source of truth for who is currently legally practising in Barbados. `[TO VERIFY]`
- **For patients:** a delayed renewal can take a clinician off the rota or push them into clinical limbo. Indirect, but real. `[TO VERIFY consequence frequency.]`

## What "good" might look like

A renewal a doctor can complete from a phone, between patients, on a slow connection, in under 15 minutes. The Medical Council sees the renewal, the CPD evidence, and the fee in one place, and confirms the new registration the same day where the evidence checks out. The Ministry's register stays current automatically. No paper unless the doctor specifically asks for paper. Standard 5 (works first time) and Standard 7 (open, interoperable). `[TO VERIFY desirability with doctors and feasibility with the Council.]`

## Out of scope (for this discovery)

- Initial medical registration for a doctor newly arrived in Barbados – discovery work in its own right
- Continuing Professional Development (CPD) accreditation – we use it as evidence but we don't redesign it
- Disciplinary processes against doctors
- Fee setting – we will not propose changes to what is charged, only to how it is paid
- Other professional licences (dental, nursing, allied health) – out of scope but worth a sibling discovery later

## Standards relevant to this problem statement

Cited here so the discovery team and the MDA can see the assessment surface from day one.

- **Standard 1** – Meet user needs. The whole problem statement is the start of meeting this.
- **Standard 4** – Simple and relatable language. The current process likely uses regulatory language doctors are used to, but a citizen on a slow phone has different needs.
- **Standard 7** – Open, interoperable platforms. The renewal almost certainly should integrate with Trident ID, the Medical Council register, and a shared payment gateway rather than rebuilding any of them.
- **Standard 11** – Trust, safety, confidentiality. The register holds personal data on every doctor in the country. The threat model matters from alpha onwards.
- **Standard 13** – Monitor, manage, measure performance. Current performance (volumes, processing time, error rates) is almost certainly not openly reported. The discovery should establish a baseline.

## What we need to confirm next

The five fastest things to verify, in week 1 of discovery:

1. Cohort: how many practitioners, in which categories, with what renewal cadence
2. Current journey: a half-day shadowing the Medical Council's renewals desk
3. Trident ID feasibility: is doctor identity a fit for the existing lookup, or does this need its own pattern?
4. CPD evidence flow: who accredits, how doctors hand evidence in today, what shape it's in
5. Ministry need: does the Ministry actually use the register day to day, and how?
