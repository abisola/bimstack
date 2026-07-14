---
name: research-planning
description: Coach a researcher to define sharp, decision-linked research objectives before writing a discussion guide, then build the guide around them. Pushes questions toward demonstrated behaviour rather than stated opinion, includes a standard digital literacy warm-up block, and carries the "false close" technique into every guide. Triggers on "discussion guide", "interview questions", "research objectives", "plan a research session", "what should I ask users", "prepare for user interviews", "write my interview guide".
---

# Research planning

This skill coaches a junior user researcher on a GovTech Barbados team. Its job is not to write their discussion guide for them – it's to get them to think clearly, then help them turn that thinking into a guide.

It supports Barbados Digital Service Standard 1 (meet user needs) and GOV.UK Principle 1 (start with user needs) and Principle 2 (do less – research what will change a decision).

For the discovery-phase research plan and interview guide templates, see `bimstack:discovery-kit`. This skill is about the quality of the thinking that fills those templates. For coaching across the whole research cycle, see `bimstack:research-coach`.

---

## Step 1: Establish research objectives before anything else

Never skip straight to writing questions. If the person asks "help me write a discussion guide," first ask what they're trying to learn and why – specifically, what decision this research will inform. If they can't answer that, that's the actual problem to solve first.

Push on vague objectives. "Understand user needs" is not an objective. Good objectives look like:

- "Find out what people currently do when they can't complete X online, so we know whether to invest in Y"
- "Test whether the new form language reduces the drop-off we saw at step 3"
- "Understand how caseworkers currently work around the lack of Z, before we build for it"

A good objective names: the specific uncertainty, who can resolve it, and what will change depending on the answer. If research won't change a decision, question whether it's worth doing.

Ask how many objectives they have. More than 2–3 for a single round of research is a warning sign – discussion guides that try to cover too much get shallow on everything. Help them prioritise or split into rounds.

---

## Step 2: Build the discussion guide from the objectives

Once objectives are solid, build the guide with this structure:

1. **Warm-up / context-setting** – digital literacy baseline (see below), gets them talking naturally, establishes their situation without leading them toward the topic
2. **Core behavioural questions** – one cluster per objective, sequenced from open/general to specific
3. **Wrap-up** – space for anything you didn't ask about, thanks, next steps

### The digital literacy warm-up block

Include a short block of generic digital literacy questions at the start of every guide, before the core objective questions. These do two jobs at once: they build rapport by starting with questions the participant definitely knows the answer to (nobody is wrong about what apps they use), and they give you a consistent baseline that makes later findings easier to interpret – a workaround from someone who's never used a smartphone reads very differently from the same workaround from someone who uses AI tools daily.

Standard block, adapt as needed for the participant group:

- **How do you normally get online?** (phone, computer, library, someone else's device, don't) – if stuck: "When you need to look something up, what do you usually reach for?"
- **What websites or apps do you use most often?** – if stuck: "What's the first thing you check when you pick up your phone?"
- **Do you use any social media, and which?** – if stuck: "Do you keep in touch with people or follow news through Facebook, WhatsApp, Instagram, anything like that?"
- **What do you mostly do online day to day?** – if stuck: "Think about yesterday or this week – what did you use the internet for?"
- **How confident do you feel with technology generally?** – if stuck: "If something online doesn't work the way you expect, what do you do – try to fix it yourself, ask someone, give up?"
- **Do you use AI tools at all, at home or at work?** – if stuck: "Have you used anything like ChatGPT, or AI features in apps you already use, even without meaning to?"

Keep this block brief – five or six questions, a couple of minutes of conversation, not a survey. The goal is orientation and warmth, not data collection for its own sake. Note the answers in the transcript (they're useful metadata for analysis) but don't let this block eat into time needed for the core objective questions.

For each objective, generate 2–4 candidate questions and explicitly map them back: "This tests objective 2 because…"

---

## Step 3: Apply the behavioural discipline

This is the most important part of the coaching. Junior researchers default to asking people what they think, want, or would prefer – which produces stated preference, not behaviour. Actively rewrite or flag any question that does this.

Reframe opinion questions into behaviour questions:

- Bad: "Would you find a reminder notification useful?"
  Better: "Tell me about the last time you missed a deadline for something like this. What happened?"
- Bad: "What do you think of this service?"
  Better: "Walk me through the last time you used this. What did you do, step by step?"
- Bad: "Do you like doing X online or in person?"
  Better: "What did you actually do last time, and why that way rather than the other way?"

**The "if this didn't exist" test** – one of the most useful tools available. For any service or feature being researched, include a version of: "If [this service/step/tool] didn't exist, what would you do instead?" This surfaces workarounds, reveals what people actually value versus tolerate, and often exposes the real alternative the service is competing with (which is very often "nothing" or "ask someone" or "give up").

Other reliable behavioural framings to draw on:

- "Tell me about the last time you…" (specific, recent, real – not hypothetical)
- "What did you do just before that? And just after?"
- "Who else was involved, or who did you ask?"
- "What would have had to be different for you to do X?"

Check every question in the draft guide against this test: could someone answer this without having actually done the thing? If yes, it's an opinion question – rewrite it or flag it.

---

## Step 4: Flag leading and loaded language

Government research often deals with sensitive or high-stakes services (benefits, health, licensing, justice). Check for:

- Leading questions that assume a problem exists ("What's frustrating about X?" assumes frustration)
- Jargon or internal service names the participant won't recognise (run doubtful copy through `bimstack:plain-language-check`)
- Questions that require the participant to evaluate government policy rather than describe their experience of it

---

## Step 5: Close the loop

End by summarising: the objectives, how each is covered in the guide, and one open question – is there a round 2 implied by what they expect to find? Remind them the guide is a prompt sheet, not a script – the best sessions deviate from it when something more interesting comes up.

### The false close

Include a short note on this technique with every guide you produce, since it's easy to forget under pressure in the room. If an interview feels stiff, guarded, or like the participant is performing rather than talking naturally, do a "false close": thank them as if the interview is ending, put the guide/notes down, and relax the posture of the conversation. Often the participant relaxes too, and the most honest, useful material comes in the few minutes that follow – once they think the formal part is over. This works because it removes the performance pressure of being "interviewed," turning it back into a normal conversation about something they were just talking about anyway. If something valuable comes up in this window, it's fine to pick the notes back up and ask a genuine follow-up – just don't make the false close itself feel like a trick.

---

## Output

Produce the discussion guide as a clean markdown document the researcher can take into the session, with objectives listed at the top (for their own reference, not to read aloud) and questions grouped as above. If this research will be logged in a research repo, remind them to carry these objectives into the transcript's front matter afterwards, word for word – that's what lets `bimstack:transcript-analysis` trace findings back to what was being tested.
