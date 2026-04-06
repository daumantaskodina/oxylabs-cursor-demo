# Workshop Docs Sync Rule

## Purpose

Keep onboarding documentation and project guidance consistent whenever onboarding structure changes.

## Required update policy

When any workshop onboarding file is added, removed, or renamed:

- Update `README.md` links and quickstart order.
- Update `docs/structure.md` to reflect current folders/files.
- Update `docs/product.md` and `docs/tech.md` if scope or setup assumptions changed.

## Consistency checks

Before completion, confirm:

- setup path in `01-setup-mac.md` still matches tool assumptions in `docs/tech.md`
- run commands in `02-launch-local.md` match command list in `03-essential-commands.md`
- GitHub flow in `04-github-basics.md` still matches workshop expectations
- troubleshooting covers the most common failure points for the current setup

## Writing style requirements

- Plain language, beginner-friendly tone
- One action per step
- Include command, expected result, and fallback action when relevant
