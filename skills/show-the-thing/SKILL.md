---
name: show-the-thing
description: Prepare a show-and-tell – the end-of-sprint or end-of-phase session where the team shows real work to real people. Plans the agenda, the running order, the demo, and any supporting slides (which then go through the GovTech Barbados presentations skill). Triggers on "show and tell", "show-and-tell", "demo", "showcase", "end of sprint", "phase showcase", "show the thing", "what should we show".
---

# Show the thing

This skill plans and stages a show-and-tell – the regular session where a GovTech Barbados team shows their work in the open. It supports Barbados Digital Service Standard 9 (be open and transparent) and GOV.UK Principle 10 (make things open: it makes things better).

The name comes from Giles Turnbull's principle: *show the thing*. Don't describe what you built. Don't talk about the journey. Show it. Demo it. Let people see it work, and see it fail.

For the visual production of slides, defer to `anthropic-skills:govtech-barbados-presentations`. For the structure and the running order, use this skill.

---

## When to use this skill

- End of every sprint (two weeks is the default)
- At the end of each phase (discovery → alpha, alpha → beta, beta → live)
- When a major release is about to ship
- When the MDA leadership rotates and the new sponsor needs to see the work
- When other MDAs want to learn from what you've built

If it's been more than three weeks since the team last did a show-and-tell, *now is the time*.

---

## What a show-and-tell is

- **15 minutes presenting, 15+ minutes conversation.** The conversation is the point.
- **Real work shown live.** Click through the prototype. Walk a real journey. Read out a citizen quote.
- **Open to outside the team.** The MDA. Other MDAs. Civil society. Curious civil servants. Press where appropriate.
- **Honest.** What worked, what didn't, what surprised you.
- **In a regular slot citizens and partners can rely on.** Same day, same time, every fortnight, ideally.

---

## What a show-and-tell isn't

- A status report
- A pitch to senior management
- A polished marketing video
- A slide deck read aloud
- An hour-long talk

---

## The shape

Use this running order. Time-box it.

| Minute | What | Who |
|---|---|---|
| 0–2 | Welcome, who we are, what this service is | Delivery manager |
| 2–4 | Where we were two weeks ago | Delivery manager |
| 4–8 | What we did – with the thing shown, not described | Whichever discipline made the thing |
| 8–11 | What we learned, including what didn't work | Service designer or whoever ran the research |
| 11–13 | What's next | Delivery manager |
| 13–15 | "Ask us about…" – invite questions on specific topics | Whole team |
| 15+ | Conversation | Everyone |

If the team can't fill the slot, the slot is too long. Shrink it.

---

## What to show

Choose two or three of these. Don't try to show everything.

- **A live prototype walkthrough** on alpha.gov.bb – tap through it on a phone, on the screen
- **A citizen interview clip** – 60–90 seconds, with the citizen's permission
- **A before-and-after** – the existing service vs the new alpha, side by side
- **A metric** – the four GDS baseline metrics if you're in beta or live, the research signal if you're in discovery or alpha
- **A back-office change** – what the front-line team will do differently, with their voice
- **A failure** – something you tried that didn't work, and what you learned

Avoid showing:
- Tickets, Jira boards, project plans (these are for the team, not the audience)
- Slides full of bullet points
- Stock photography
- "Roadmaps" without any of the underneath

---

## Drafting the deck

A show-and-tell deck is a presenting deck (Giles Turnbull's distinction in `govtech-barbados-presentations`). It's low on detail – your slides support your words, they don't replace them.

Use the GovTech Barbados presentation house style. Defer to `anthropic-skills:govtech-barbados-presentations` for the visual production. Pass it this content brief.

```markdown
# Show-and-tell brief – [team, sprint or phase, date]

## One-line headline

[The single thing this session is about. This becomes the title slide.]

## Agenda (3–5 items)

1. Where we were
2. What we did
3. What we learned
4. What's next
5. Ask us about…

## Where we were

[One slide. The starting point of the sprint or phase. A specific challenge or question.]

## What we did

[3–5 slides. Each one shows a thing – screenshot, photo, citizen quote, stat.]

## What we learned

[1–3 slides. Honest. Including what didn't work.]

## What's next

[One slide. Specific commitments for the next sprint.]

## Ask us about…

[One slide. 2–4 topics the team would welcome questions on.]

## Closing

[One slide. Quiet. Logo, contact, "thanks for coming".]
```

That's typically 8–14 slides. The deck doesn't need to be longer.

---

## Preparing the team

A day or two before:

- Decide who shows which slide. Cover the team – don't let the delivery manager do everything.
- Rehearse once, end to end, with timings. Rehearsal kills 80% of the live problems.
- Test the demo. On the actual screen. Over the actual connection.
- Have a backup – screenshots of the prototype, in case the live one breaks
- Print the agenda. Hand it out.
- Brief whoever's chairing on how to handle hostile or off-topic questions (calmly, with curiosity)

---

## On the day

- Start on time. End on time.
- Stand up if you can (energy).
- Make eye contact with the audience, not the screen.
- When you say something didn't work, **say what you learned from it**.
- When a question is hard, **take it**. Don't pretend it's not the question.
- Capture the questions and the comments – they're research data.

---

## After

- Publish the deck (or a slimmer reading version) where the audience can find it. Standard 9.
- Write up the questions and the team's answers in the next weeknote.
- Thank the audience by name in the weeknote.
- File any new risks, decisions, or commitments in the RAID log.

---

## Common failure modes

- **Slides instead of the thing.** The audience came to see the work. Show the work.
- **Defensive answers to questions.** *"That's outside the scope of this sprint."* No – the question is the data.
- **Burying bad news.** If the eligibility logic is a mess, say so. The audience will trust you more, not less.
- **No call to action.** End with a specific ask if you have one – feedback on a prototype, candidates for research, MDAs to talk to.
- **One person doing all the talking.** Show-and-tells are a team sport.
- **Skipping it when the sprint went badly.** That's exactly when to do it.

---

## Voice

Plain language. First person plural. Active voice. Short sentences. No corporate fluff.

British English. N-dashes. The word-swap list applies to slides as much as to copy.

Honest. Generous to people who helped. Specific about what's next.

---

## Where show-and-tells fit in the bimstack workflow

```
Listen → Map → Make → Test → Ship → Show → Iterate
                                       ↑
                                  here
```

Show is the moment the team breathes out, the audience breathes in, and the next iteration starts. Skipping it doesn't save time – it just means the team learns less from the work it just did.
