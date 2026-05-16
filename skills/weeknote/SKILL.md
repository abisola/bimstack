---
name: weeknote
description: Draft a public-facing weeknote for a GovTech Barbados service team. Use at the end of every working week, after a sprint, or whenever the team wants to publish what they've been doing. Triggers on "weeknote", "weekly update", "write a weeknote", "publish what we did", "what we did this week", "show the work", "team update".
---

# Weeknote

This skill drafts a weeknote in the GovTech Barbados / GDS style – short, honest, public, useful. It supports Barbados Digital Service Standard 9 (be open and transparent) and GOV.UK Principle 10 (make things open: it makes things better).

A weeknote is not a status report. It's a public note from the team to the world about what they did, what they learned, and what's next.

---

## When to use this skill

- End of every working week, even when the week was rough
- End of a sprint, if the team's cadence is sprint-paced
- When something significant happened mid-week and is worth sharing now

The cadence matters more than perfection. A short weeknote published every Friday beats a polished essay published every other month.

---

## What a weeknote is and isn't

| A weeknote is | A weeknote isn't |
|---|---|
| A short note from the team | A long report to senior management |
| Honest, including failures | A sanitised highlight reel |
| Written in plain language | Written in civil-service register |
| Specific (with screenshots, links, numbers) | Vague platitudes |
| Public by default | Confidential by default |
| First-person plural ("we") | Third-person institutional ("the team has noted that…") |
| 300–800 words | 3,000 words of bullet points |

---

## The shape

Use this structure. Don't decorate it.

```markdown
# Weeknote, [date range] – [team or service name]

[One-line headline. What changed this week, in plain language. This is the single most important sentence in the whole note. Spend time on it.]

## What we did

[Three to seven bullets or short paragraphs. The shipped things. The research run. The decisions taken. Be specific – names of features, numbers of interviews, the URL of the prototype.]

## What we learned

[Two to five bullets. What surprised us. What we got wrong. What we changed our minds about. Don't skip this – it's the most useful section for everyone else.]

## What's next

[Three to five bullets. What we're doing next week. Be specific. If a date moved, say so.]

## What we'd like help with

[Optional but encouraged. Things we're blocked on, unsure about, or where another team's input would help.]

## Thanks

[Names of people who helped us this week, inside and outside the team. Keep it real.]

---

[Optional footer with links to the show-and-tell deck, the prototype, the research write-up.]
```

---

## Worked example

```markdown
# Weeknote, 12–16 May 2026 – Renew driver's licence service

This week we ran the first round of user testing on the new prototype, and two-thirds of citizens completed the licence renewal without help.

## What we did

- Tested the prototype with 9 citizens – on a phone, in the team room and at the Bridgetown licensing office. 6 completed the journey unaided. 3 got stuck on the eligibility page.
- Rewrote the eligibility page in plain language and re-tested with 3 more citizens. 3/3 understood it first time.
- Wired up the Trident ID lookup so the personal details page is now an automatic step, not a form. The next test will tell us whether citizens trust it.
- Published the alpha prototype on alpha.gov.bb at <https://alpha.gov.bb/renew-licence> (status: alpha, not for real applications).
- Shared the alpha with the front-desk team at the licensing office. They flagged three corner cases we hadn't covered (renewing after expiry, renewing while abroad, renewing after a name change). We're sketching pages for each.

## What we learned

- "Verify your details" stopped citizens cold. We replaced it with "Check your details" and the friction disappeared. Standard 4 in action.
- The eligibility logic is more tangled than the policy team had told us. We've booked a session with the MDA to walk the rules together next Tuesday.
- The Trident ID lookup latency is around 800ms on a slow 3G connection. That's noticeable. We've added a loading state and we'll watch the analytics in beta.

## What's next

- Build the three corner-case journeys (expiry, abroad, name change). Test them on Friday.
- Walk the eligibility rules with the MDA's policy team (Tuesday).
- Start the threat-model refresh ahead of the private-beta gate (cyber engineer, week of 26 May).
- Wire the four GDS baseline metrics (digital take-up, completion rate, cost per transaction, user satisfaction) into the alpha for testing.

## What we'd like help with

- We're looking for citizens who've renewed from overseas in the last year, for a research session in week 2 of June. If you know anyone, drop us a line.
- Any other MDAs running a licence-renewal-style flow – we'd like to compare patterns before we lock in the eligibility page.

## Thanks

- The Bridgetown licensing office team for letting us camp out and watch a morning of real renewals.
- Sarah from the MDA's policy team for the Friday walk-through.
- The Trident ID team for fixing the lookup latency mid-week.

---

**Links**

- Alpha prototype: <https://alpha.gov.bb/renew-licence>
- Show-and-tell deck: [link]
- Research notes: [link]
```

---

## Common failure modes

- **Generic week.** "We made progress on the project." Specific or skip it.
- **Hidden bad news.** A weeknote that omits the thing everyone in the team is worried about isn't honest.
- **Internal jargon.** "We GA'd the MVP after a successful UAT." No.
- **Long.** Over 800 words is usually a sign the team is hiding something behind volume.
- **Apologetic.** Don't apologise for not having more to show. Just show what you have.
- **No "what's next".** If you don't know what's next, that's the topic of the weeknote.

---

## Voice

Use the team's voice. First person plural ("we"). Active. Short sentences. The names of real people where it gives credit. The names of features. The specific numbers.

British English. N-dashes. Word-swap list applied (no "submit", "verify", "provide", "ensure", "kindly"). See `references/house-style.md`.

Honest about what didn't work. Generous to the people who helped.

---

## After you draft it

Send it to the team for a quick check before publishing. The weeknote belongs to the team, not to one writer. Then publish it where the team's audience can find it – the team blog, the MDA's communications channel, the GovTech site.

If anything is genuinely confidential (a security finding, an individual's personal data, a contract negotiation), redact it or hold it until it can be shared. Don't pretend the rest of the work didn't happen because one bit can't be shared.
