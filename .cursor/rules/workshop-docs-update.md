# Workshop Docs Sync Rule

## Purpose

Keep onboarding documentation and project guidance consistent whenever workshop files or repo layout change.

## Required update policy

When any of these are **added, removed, or renamed**:

- Files under `docs/workshop/`
- `docs/structure.md`
- Example spec templates under `docs/example-documentation/`

Then:

1. Update [README.md](../../README.md): links, “Start here” order, and sections **If something breaks** / **For facilitators and developers** if commands or paths changed.
2. Update [docs/structure.md](../../docs/structure.md) if folders or important files moved.
3. Update [docs/example-documentation/product.md](../../docs/example-documentation/product.md) and [docs/example-documentation/tech.md](../../docs/example-documentation/tech.md) only if **product scope** or **setup assumptions** (stack, scripts, required tools) changed.

## Workshop files (source of truth)

- [docs/workshop/cursor-computer-setup.md](../../docs/workshop/cursor-computer-setup.md) — first run: tools, install, start dev server
- [docs/workshop/figma-mcp-setup.md](../../docs/workshop/figma-mcp-setup.md) — Figma integration and copy-paste prompts
- [docs/workshop/designer-repo-tour.md](../../docs/workshop/designer-repo-tour.md) — designer-facing repo map
- [docs/workshop/facilitator-checklist.md](../../docs/workshop/facilitator-checklist.md) — live session flow and failures

## Consistency checks

Before calling documentation work complete:

- README “Step 1” still points to `cursor-computer-setup.md` and its embedded prompt matches what you expect (Homebrew, Node, npm, Git, GitHub CLI, install, start).
- README “Step 2” and quickstart commands match `package.json` scripts (`npm run dev`, optional `npm run dev:turbo`).
- Troubleshooting in README still covers duplicate dev servers, webpack vs Turbopack, parent lockfiles, and Figma access.
- `docs/structure.md` matches the real top-level layout (`app/`, `components/`, `lib/`, `docs/`, `.cursor/`).

## Writing style requirements

- Plain language, beginner-friendly tone
- One action per step
- Include command, expected result, and fallback action when relevant
