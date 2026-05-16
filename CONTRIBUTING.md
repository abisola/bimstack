# Contributing to bimstack

bimstack is built in the open, on purpose. Standard 9. We want issues, pull requests, forks, and weeknotes from teams who've shipped with it.

## Ways to contribute

- **File an issue.** Something an agent got wrong? A reference that's drifted? A pattern that's missing? File it.
- **Improve a reference.** The references in `references/` are the bimstack view of the Standards, the Principles, the GDS Way, and the house style. If something is out of date, send a PR.
- **Improve an agent.** Each agent's prompt is in `agents/*.md`. Sharpen its iron laws. Add a deliverable. Fix a citation. PR it.
- **Add a skill.** If you've built a workflow your team uses every sprint, package it as a skill in `skills/`. PRs welcome.
- **Add a slash command.** If a skill is something a team will trigger directly, add a slash command in `commands/`.
- **Share a weeknote.** If you've shipped something with bimstack, tell us about it. Open an issue with the link.

## The bar

Three things any contribution needs to clear.

1. **It's anchored to the Standards or the Principles.** A change should make it easier to meet the Barbados Digital Service Standards or apply the GOV.UK Design Principles – or both. If it doesn't, it's harder to argue for.
2. **It's in plain language.** Reading age friendly to a 9-year-old. The word-swap list applies to the bimstack itself, not just to the services it builds. See `references/house-style.md`.
3. **It's open.** Public PRs in the public repo. No secret patches.

## Style

- **British English.** Realise, colour, behaviour, organisation, centre.
- **N-dashes, not m-dashes.** *Listen → Map → Make* uses n-dashes.
- **No emojis** in bimstack files, unless a user explicitly asks for them in a deliverable produced by an agent.
- **Active voice.** "We rewrote the eligibility page" not "the eligibility page has been rewritten".
- **First person plural** ("we") when the bimstack itself is the subject.
- **Cite by number.** When citing a Standard or a Principle, give the number. *"Standard 4 (simple, relatable language)."*

## Structure

```
bimstack/
├── README.md, ETHOS.md, AGENTS.md, WORKFLOW.md, CONTRIBUTING.md, CHANGELOG.md, LICENSE
├── .claude-plugin/plugin.json
├── agents/        one .md per agent, YAML frontmatter + body
├── commands/      one .md per slash command, frontmatter + body
├── skills/        one folder per skill, with SKILL.md
└── references/    one .md per reference, the canonical bimstack view
```

When you add a new agent, add it to `AGENTS.md` and the README's roster. When you add a new skill, add it to `agents/*.md` where relevant. When you add a new slash command, add it to the README's command table.

## Pull request checklist

- [ ] The change is anchored to a Standard or a Principle (named in the PR description)
- [ ] Plain language: word-swap list applied, sentences mostly under 20 words
- [ ] British English, n-dashes
- [ ] References stay consistent across the affected files
- [ ] If you've added an agent: README roster updated, AGENTS.md updated, plugin manifest updated
- [ ] If you've added a skill: SKILL.md frontmatter present, agents that should call it know about it
- [ ] If you've added a command: README command table updated, frontmatter present
- [ ] CHANGELOG.md updated under the next version

## What we won't accept

- **Vendor lock-in.** Patches that hard-code a specific commercial vendor where a shared platform exists. Standard 7.
- **Closed dependencies.** New dependencies that aren't open source, without a written reason in the PR.
- **Bypassing the assessment skill.** "Don't worry about Standard 11 for this one." No.
- **Stripping the Standards anchors out of an agent's prompt.** The agents are opinionated on purpose.

## Governance

bimstack is maintained by the GovTech Barbados team. Decisions on substantive changes (new agents, removed agents, changed iron laws) are taken in the open via GitHub issues and discussed in show-and-tells.

If you're not sure whether a change is substantive, file the issue first. It's almost always faster than guessing.

## Licence

MIT. By contributing, you agree your contribution is MIT-licensed.

---

Thanks for thinking about how to make government digital services better. That's the whole point.
