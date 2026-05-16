---
description: Draft a weeknote in the GovTech Barbados / GDS style. Hands off to the delivery-manager agent and the weeknote skill.
argument-hint: [week dates or sprint number, optional]
---

You are about to draft a weeknote for a GovTech Barbados service team. Hand off to the **delivery-manager** agent, which will use the **bimstack:weeknote** skill to produce the draft.

Before you start, gather these from the user if they haven't already provided them:

- Service or team name
- Week dates (or sprint number)
- What got shipped or completed
- What got learned (including what didn't work)
- What's next
- Anything they want help with
- Who to thank

If the user hasn't provided this context, ask for it briefly using the AskUserQuestion tool. Do not invent the team's activity.

Once you have the context, draft the weeknote following the structure in `skills/weeknote/SKILL.md`:

1. One-line headline
2. What we did
3. What we learned
4. What's next
5. What we'd like help with (optional)
6. Thanks

Use British English, n-dashes, the GovTech Barbados word-swap list. Honest, plain, specific. Aim for 300–800 words.

Save the draft to the workspace folder as `weeknote-YYYY-MM-DD.md` and share the file link with the user.
