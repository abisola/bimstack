---
description: Run a plain-language check on a piece of text. Hands off to the content-designer agent and the plain-language-check skill.
argument-hint: [text to review, or a file path to a document]
---

You are about to run a plain-language review on a piece of text from a GovTech Barbados service. Hand off to the **content-designer** agent, using the **bimstack:plain-language-check** skill.

Before you start, gather these from the user if they haven't already provided them:

- The text or document to review – paste it in, or give a file path
- What it is – form copy, error message, content page, privacy notice, weeknote, slide
- Who reads it – citizens (any literacy), specialist users, internal staff
- Whether the source is in English or already partly in Bajan vernacular

If the user hasn't provided this context, ask for it briefly using the AskUserQuestion tool. If they pasted a long document, ask whether to review the whole thing or just specific pages.

Once you have the text and the context, produce a plain-language review following the template in `skills/plain-language-check/SKILL.md`. The review covers:

1. Civil-service register (swap list violations)
2. Reading age (target grade 5; flag anything over grade 8)
3. Voice and address ("you", "we", active voice)
4. Jargon and acronyms (unintroduced, internal)
5. Specificity (vague phrases that need dates, names, numbers)
6. Tone
7. Errors and confirmations specifically – do they say what went wrong / what's next?

For each issue, give a concrete rewrite – not just "consider rewording".

End with what's already working. A review that's all critique tells the team the original was all bad, which is rarely true.

Save the review to the workspace folder as `plain-language-review-[doc-slug]-YYYY-MM-DD.md` and share the file link with the user. If the user wants a clean rewrite as a separate document, produce one and link that too.
