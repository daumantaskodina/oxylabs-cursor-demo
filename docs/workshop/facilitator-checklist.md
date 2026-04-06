# Facilitator checklist

Use this for a **live Cursor + designer** session. Adjust times to your group size.

## Before the session

- [ ] Repo cloned or distributed; participants have **Cursor** installed (Mac).
- [ ] Participants can install **Homebrew** (or you provide a fallback: pre-installed Node from nodejs.org).
- [ ] **Network**: allow downloads for Homebrew, npm registry, and Google Fonts (used in `app/globals.css`).
- [ ] Optional: participants add [Figma for Cursor](https://cursor.com/en-US/marketplace/figma) before join, or budget 5 minutes in-session.

## Suggested flow (45–60 minutes)

| Time | Focus | Facilitator notes |
| --- | --- | --- |
| 0–5 min | Open repo in Cursor | Everyone in the same folder; one chat thread per person is fine. |
| 5–15 min | Step 1 — [cursor-computer-setup.md](cursor-computer-setup.md) | Paste prompt; wait for install + `npm run dev`. Confirm [http://localhost:3000](http://localhost:3000) loads. |
| 15–20 min | [designer-repo-tour.md](designer-repo-tour.md) | Walk through `app/page.tsx` vs `components/ui/`; answer “where do I change the header?” |
| 20–40 min | Step 2 — [figma-mcp-setup.md](figma-mcp-setup.md) | Use prompt **A** or **B** from the Figma doc; use a file everyone can open. |
| 40–45 min | Wrap-up | Checklist: visual match, one breakpoint, terminal clean. |

## Common failures and what to say

| Symptom | Likely cause | First step |
| --- | --- | --- |
| `command not found: node` or `npm` | Node not installed or shell not restarted | Re-run Step 1 prompt; or install Node LTS from [https://nodejs.org](https://nodejs.org) and restart Terminal. |
| Port **3000** already in use | Old dev server still running | `pkill -f "next dev"` or quit the other app; run `npm run dev` again. |
| Blank page / red error overlay | Build or runtime error | Read Terminal stack trace; paste into Cursor. |
| Machine slows down or fans spin up | Turbopack or duplicate servers | Use **`npm run dev`** (webpack), not `dev:turbo`; only one `next dev` per project. |
| Figma “cannot access” / empty context | Wrong account or link | Confirm [Figma integration](https://cursor.com/en-US/marketplace/figma) is added; use a **frame link** with `node-id`; file must be accessible to that Figma user. |

## After the session

- Point people to [README.md](../../README.md) sections **If something breaks** and **For facilitators and developers**.
- Optional: share [global-rules.md](../../.cursor/rules/global-rules.md) and [workshop-beginner.md](../../.cursor/rules/workshop-beginner.md) for ongoing Cursor behavior.

## Recording / async (optional)

If you record or run async, add your own links here (internal wiki, Loom, etc.).
