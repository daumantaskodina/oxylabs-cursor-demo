# Designer repo tour

This page is for **product designers** who want a mental model of this demo app. You do not need to read TypeScript to use it—use it to know **what to ask Cursor to open** when you want something changed.

## How to verify your changes

1. Keep **one** dev server running (`npm run dev` in Terminal, or ask Cursor to start it).
2. Open [http://localhost:3000](http://localhost:3000).
3. When Cursor edits a file, the page usually **updates automatically** (hot reload). If not, refresh the browser.
4. If the screen is blank or shows an error, read the **Terminal** output and paste the error into Cursor.

## Where things usually live

| You want to… | Ask Cursor to work in… |
| --- | --- |
| Change **order** of sections on the home page, or add/remove a whole block | [app/page.tsx](../../app/page.tsx) — this file **assembles** the page |
| Change a **specific UI block** (header, hero, dashboard, footer) | [components/ui/](../../components/ui/) — one file per major block |
| Change **fonts, theme colors, or global spacing tokens** used across the app | [app/globals.css](../../app/globals.css) |
| Change site **title**, fonts loaded for the whole app, or HTML shell | [app/layout.tsx](../../app/layout.tsx) |

**Rule of thumb:** `app/page.tsx` is the **menu** of what appears on `/`. Each imported piece from `components/ui/` is a **dish** you can refine on its own.

## Demo pieces (what they are for)

These exist so you can practice “find the file → ask for a change → see it in the browser.”

| Piece | File | What it is |
| --- | --- | --- |
| Header | `OxylabsHeader.tsx` | Main navigation and CTAs |
| Hero | `CapturedComponent.tsx` | Marketing / “web scraper” style block |
| Dashboard section | `DataDashboardFeature.tsx` | Feature strip below the hero |
| Footer | `footer-bottom.tsx` | Legal line, emails, language switch, social icons, payment marks |

Shared UI primitives from shadcn (for example a button) also live under `components/ui/`.

## Tiny glossary

- **Component** — A reusable chunk of UI (often one file). The header is a component; the whole page combines several.
- **Page / route** — In this app, the home screen is built from `app/page.tsx`. The URL `/` shows that file’s layout.
- **Tailwind class** — Short codes in `className="..."` that control spacing, color, type size, and layout. Designers often recognize the *effect*; Cursor can map design specs to classes.
- **Client vs server (one sentence)** — Some components must run in the browser because they use clicks or dropdowns (`"use client"` at the top of the file). Others can render on the server. You rarely need to decide; say what should happen in the UI and Cursor picks the right pattern.
- **`cn` / `lib/utils`** — A small helper that merges CSS class names safely. You will see it inside components; you do not need to edit it for basic design work.
- **Hot reload / HMR** — Dev server refreshes the preview when files save. If something looks stuck, do a normal browser refresh.

## Next step

When you are ready to implement from Figma, use [figma-mcp-setup.md](figma-mcp-setup.md) and the prompt templates there.
