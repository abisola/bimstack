---
name: transcript-analysis
description: Ingest a research or meeting transcript and read it for behaviour and evidence of what works, not what's popular – flagging workarounds, "if this didn't exist" answers, and friction that actually changed what someone did. Cross-references prior transcripts in the research repo to show what's confirmed, contradicted, or new, and coaches the researcher to reach their own interpretation. Triggers on "analyse this transcript", "what did we learn from this session", "research synthesis", "themes from the interviews", "read this transcript", "what's in these transcripts".
---

# Transcript analysis

This skill coaches a junior user researcher to analyse transcripts the way an experienced government digital service researcher would: hunting for behaviour and evidence of what works, not opinions about what's popular. The practice draws on the discipline found in Andrew Travers' *Interviewing Users*, Lisa Rykert's writing on research practice, David Travis's work on the craft of running and listening to sessions, and Will Middleton's writing on government user research. Channel their principles – rigour about stated versus actual behaviour, careful listening, evidence over anecdote – without quoting them.

It supports Barbados Digital Service Standard 1 (meet user needs), Standard 10 (continuously improved), and Standard 11 (protect citizens' data), and GOV.UK Principle 1 (start with user needs) and Principle 10 (make things better with data).

If the goal is specifically to fold transcript feedback into the next version of a prototype, `bimstack:prototype-iteration` handles that loop – it synthesises transcripts into structured feedback and produces the next iteration. Use this skill when the researcher needs the analysis itself: themes, evidence, and how the findings sit against prior research.

---

## Step 0: Establish context

If the transcript has YAML front matter (product area, date, objectives, sensitivity level), read it first. The stated research objectives tell you what to weight when reading – don't treat every moment in the transcript as equally important.

If this transcript lives in a research repository, check for prior transcripts on the same or adjacent product area / theme before doing the single-transcript analysis. Use available tools (bash, file search) to look across the repo. This cross-referencing is a core part of the value here – a single transcript is a data point, a repo full of them is a pattern.

If no repo or prior research is available, say so plainly rather than inventing continuity that doesn't exist.

---

## Step 1: Read for behaviour, not opinion

Go through the transcript and separate two categories:

- **Stated preference:** what the participant says they think, want, like, or would prefer
- **Demonstrated behaviour:** what the participant actually did, has done, or describes doing – including workarounds, timing, sequence, who they involved

Weight the second category far more heavily. When someone says "I'd love a mobile app" but their actual described behaviour is "I always ask my daughter to do it for me," the behaviour is the finding – not the stated preference.

Actively look for and flag:

- **Workarounds** – moments where someone describes doing something the service didn't intend or design for. These are gold: they show exactly where the service is failing to meet a real need.
- **"If this didn't exist" answers** – if the discussion guide included this framing, these answers usually reveal what people actually depend on versus what they'd shrug off.
- **Friction that changed behaviour** – not friction someone merely complained about, but friction that made them stop, switch channel, ask someone else, or give up.
- **Contradictions** between what was said early and what was described later – often the most honest signal in the whole transcript.

---

## Step 2: Identify themes

Pull recurring patterns, but require each theme to be backed by specific evidence from the transcript – quote or closely paraphrase the moment, don't assert a theme in the abstract. A theme with one weak supporting moment is not a theme yet; say so.

If cross-referencing prior transcripts, explicitly categorise each finding as:

- **Confirms** prior research (say which transcript/theme)
- **Contradicts** prior research (flag this clearly – it's often the most valuable finding, not a data quality problem)
- **New** – hasn't come up before in the visible history
- **Extends** – deepens or adds nuance to something known

---

## Step 3: Coach the interpretation – don't just hand over conclusions

This is the most important habit to build in a junior researcher. Before stating what you think a theme means, ask them what they think it means. Offer your read only after, or when asked directly. Useful coaching questions:

- "You've got three people describing the same workaround – is that a coincidence or a pattern? What would change your mind either way?"
- "Is this a service problem, a communications problem, or a policy problem? Those need very different responses."
- "This contradicts what you found in [prior session] – what's different about this context that might explain it?"
- "Is this something the team could act on in the next sprint, or is it a bigger structural issue worth flagging separately?"

Help them distinguish signal from noise explicitly: one person's edge case is not a theme; three unconnected people independently hitting the same workaround usually is.

---

## Step 4: Summarise clearly

Once the researcher has worked through interpretation, help them write a short, evidence-backed summary: themes, the evidence for each, how confident they should be (single mention vs recurring), and how this sits against prior research. Keep this factual and plain – save persuasive framing for `bimstack:research-presenting`.

---

## Handling sensitive content

Government research often touches sensitive services. Never surface participant names or identifying details in analysis output beyond what's already anonymised in the transcript. If the transcript's `sensitivity_level` front matter flags something as non-standard, be more conservative about what gets pulled into any shareable summary. Standard 11.
