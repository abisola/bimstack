---
name: research-presenting
description: Turn analysed research findings into something a delivery team will actually act on – pushing past bare observations to specific, owned recommendations, structuring readouts for action rather than narrative completeness, and tightening language so findings are memorable rather than hedged. Treats interpretation as a shared exercise with the delivery team. Triggers on "research readout", "present my findings", "share the research", "research playback", "turn findings into recommendations", "what do I tell the team".
---

# Research presenting

This skill coaches a junior user researcher to turn analysis into something a delivery team will actually act on. The discipline: insight should land as clear, memorable strategy rather than a dense report, and findings should connect to what "good" looks like in the service more broadly, not just the immediate feature – service design thinking, not just bug-spotting.

It supports Barbados Digital Service Standard 1 (meet user needs), Standard 9 (be open and transparent), and Standard 10 (continuously improved), and GOV.UK Principle 1 (start with user needs) and Principle 10 (make things open: it makes things better).

---

## Step 1: Get from finding to "so what"

The most common junior researcher mistake is presenting observations without a recommendation – "users found the form confusing" and stopping there. Push past this every time. For each finding, ask:

- What was the behavioural evidence? (not the opinion – the workaround, the thing they actually did)
- What does that imply the service should do differently?
- What's the smallest realistic change that would test whether that's right?

A finding without an implied action isn't ready to present yet – it's still analysis. Coach the researcher to close that gap before building slides or a doc.

### Sense-making is not a solo job

It's a common trap for a junior researcher to feel like they have to arrive at the "right" interpretation alone before they're allowed to talk to the team. Push back on this. Interpreting what a finding means and what to do about it is stronger as a shared exercise – the delivery team holds context (technical constraints, what's already been tried, policy limits) that the researcher doesn't have, and a team that's helped shape the interpretation is far more likely to act on it than one that's handed a finished conclusion.

Where it fits, coach the researcher toward involving the team earlier – a short working session looking at evidence together before the researcher locks in recommendations, rather than only a one-way readout at the end. The researcher's job is to bring rigorous evidence and guard against the team jumping to comfortable conclusions the evidence doesn't support – not to do all the interpretive work alone and hand down a verdict.

---

## Step 2: Structure for action, not narrative completeness

Resist the instinct to walk the team through the research chronologically or exhaustively. A useful readout structure:

1. **What we were trying to find out** – the objective, one line
2. **What we found** – 2–4 themes maximum, each with one sharp piece of evidence, not five
3. **What this means** – the interpretation, stated plainly and confidently where the evidence supports it
4. **What we recommend** – specific, scoped, and owned. Not "we should improve X" but "we recommend Y, which [team/role] could pick up next sprint"
5. **What we're still not sure about** – honesty about the limits of a small sample builds trust, it doesn't undermine the findings

If there are more than 4 themes, help them prioritise rather than include everything – a readout that tries to cover everything lands nothing.

---

## Step 3: Make it land, not just inform

A good insight is memorable and repeatable – something a team member could say back to someone else in a hallway a week later and get it right. Push draft findings that are too hedged, too academic, or too long to be memorable. Help tighten:

- Bad: "Several participants expressed some difficulty in understanding the process for requesting a callback, which may indicate room for improvement in the communication of this feature"
- Better: "People don't realise they can ask for a callback – three out of four didn't know it existed, and worked around it by calling the main line instead"

Keep the language plain – short sentences, active voice, specific numbers where you have them ("3 of 4", not "most"), no hedge-everything academic tone. Run the final copy through `bimstack:plain-language-check` if in doubt.

---

## Step 4: Connect to the bigger picture where it's warranted

Not every finding needs this, but for findings with real service design implications, help the researcher frame them against what a good service looks like more broadly – not just "this screen is confusing" but "this is a sign that we're asking people to do the coordination work the service should be doing." That's the difference between a bug report and a service design insight, and it's what makes delivery teams treat research as strategic rather than just QA.

---

## Step 5: Anticipate the room

Before finalising, have the researcher think through:

- Who's in the room and what will they be defensive about?
- What's the most likely pushback ("small sample size", "that's an edge case", "we already knew that")? Prepare a straight answer for it rather than avoiding the question.
- Is there a quick win alongside the bigger recommendation, so the team leaves with something they can start immediately?

---

## Output

Depending on what the researcher needs, help them produce either a short written readout (markdown, following the structure above) or a slide-shaped outline they can build into a deck. Keep it short – a readout that's hard to skim won't get read by a busy delivery team. If they're building an actual slide deck, point them to the `govtech-barbados-presentations` skill for the deck build itself; this skill is about getting the content and framing right first. If the readout is part of a show-and-tell, `bimstack:show-the-thing` handles the session itself.
