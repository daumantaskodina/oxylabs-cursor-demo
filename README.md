# Cursor Workshop (Mac)

You are a product designer. You have Cursor. This repo is a small demo app so you can learn **run → see → change** without becoming a developer first.

## Start here (designers)

1. Open the project folder in **Cursor**.
2. Do **Step 1** below once (install tools, dependencies, start the app).
3. Open [http://localhost:3000](http://localhost:3000) in your browser.
4. Do **Step 2** when you are ready to connect **Figma** and ask Cursor to implement a frame.

You can ignore everything after **Quick start** until something breaks or you want deeper context.

**Optional but useful:** [Designer repo tour](docs/workshop/designer-repo-tour.md) explains where the page and UI blocks live in plain language (no TypeScript required to read it).

---

## Step 1: Run the project

Open [cursor-computer-setup.md](docs/workshop/cursor-computer-setup.md), paste the prompt into Cursor, and it will set everything up and start the app.

## Step 2: Edit with Figma

Open [figma-mcp-setup.md](docs/workshop/figma-mcp-setup.md), add Figma to Cursor, then paste a prompt with your Figma link (templates and tips are in that file).

---

## Quick start (if already set up)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## If something breaks

### Mac freezes or crashes while developing

1. **Stop duplicate servers** — In Activity Monitor, quit extra `node` processes, or run `pkill -f "next dev"` in Terminal, then start only one `npm run dev`.
2. **Stay on webpack** — Use `npm run dev` (default). Avoid `npm run dev:turbo` unless your machine handles it well.
3. **Parent folder lockfiles** — If you have another `package-lock.json` in a parent folder (e.g. `Experiments/`), Next can get confused; this repo pins the app root in `next.config.ts` to reduce that risk.
4. **Cap Node memory (optional)** — `NODE_OPTIONS='--max-old-space-size=2048' npm run dev` limits Node heap so the OS is less likely to thrash.

### Other common issues

- **Port 3000 already in use** — Stop the other app using that port, or ask Cursor to run the dev server on another port.
- **Blank page or error overlay** — Look at the Terminal where `npm run dev` is running; copy the error message into Cursor and ask what to do.
- **Figma not connecting** — Confirm the [Figma integration](https://cursor.com/en-US/marketplace/figma) is installed and you are logged into the same Figma account that can open the file.

---

## For facilitators and developers

### Project layout

See [docs/structure.md](docs/structure.md) for a short map of folders and what they are for.

**Live session checklist:** [docs/workshop/facilitator-checklist.md](docs/workshop/facilitator-checklist.md).

### Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4 (`@theme` in `app/globals.css`; no `tailwind.config.js`)
- shadcn/ui (`components/ui`, `lib/utils` with `cn` from `clsx` + `tailwind-merge`)

Default dev server uses **webpack** (not Turbopack) to avoid heavy RAM/CPU spikes on some Macs. For Turbopack instead: `npm run dev:turbo`.

### Demo UI (`components/ui`)

- `OxylabsHeader` — main nav
- `CapturedComponent` — hero / web scraper block
- `DataDashboardFeature` — dashboard section
- `footer-bottom` — `FooterBottom` (copyright, mail links, language switcher, socials, payment marks); wired in `app/page.tsx` inside a `<footer>` with top border

### Example spec templates (copy to your own project)

- [Product](docs/example-documentation/product.md)
- [Tech](docs/example-documentation/tech.md)
- [Design](docs/example-documentation/design.md)

### Cursor rules (examples)

- [.cursor/rules/global-rules.md](.cursor/rules/global-rules.md) — generic AI behavior to copy into Cursor settings
- [.cursor/rules/workshop-beginner.md](.cursor/rules/workshop-beginner.md) — beginner-safe behavior for this workshop
- [.cursor/rules/workshop-docs-update.md](.cursor/rules/workshop-docs-update.md) — keep workshop docs in sync when files move
