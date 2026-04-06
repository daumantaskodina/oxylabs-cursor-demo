# Figma in Cursor

## 1) Add Figma to Cursor

Go here and click **Add**: [https://cursor.com/en-US/marketplace/figma](https://cursor.com/en-US/marketplace/figma)

(or `/add-plugin figma`)

Sign in with the **same Figma account** that can open the file you will link.

## 2) Before you paste a prompt

- **Use a frame or component link**, not only the file home. In Figma: select the frame → **Share** → copy link, or copy link from the address bar when the frame is selected so the URL includes `node-id=...`.
- **Check access** — If collaborators cannot open the file in the browser, Cursor’s Figma integration will not see it either.
- **Know where it will land** — New UI often becomes a file under `components/ui/` and is then imported from [app/page.tsx](../../app/page.tsx). For a plain-language map, read [designer-repo-tour.md](designer-repo-tour.md).

## 3) Paste a prompt into Cursor chat

Pick one of the templates below. Replace `<PASTE_FIGMA_LINK_HERE>` with your link.

### A) New section from a frame (default learning exercise)

```text
Use this Figma link and implement the design: <PASTE_FIGMA_LINK_HERE>

Recreate this frame as closely as possible. Add it as a new section on the main page and show me which files you changed.
```

### B) Match spacing and typography only (keep structure)

```text
Use this Figma link as reference: <PASTE_FIGMA_LINK_HERE>

Do not restructure the page. Update the existing components so spacing, font sizes, and font weights match the Figma frame. List every file you edit.
```

### C) Visual polish only (colors, hover, focus)

```text
Use this Figma link: <PASTE_FIGMA_LINK_HERE>

Keep layout and copy as they are. Update colors, borders, and hover/focus states to match the design. Do not add new dependencies.
```

### D) Original workshop prompt (component at top)

```text
Use this Figma link and implement design: <PASTE_FIGMA_LINK_HERE>

Recreate this component exactly as designed.
Add it at the very top of the main page.
```

## 4) After implementation — quick checklist

- [ ] **Side-by-side** — Compare browser and Figma at 100% zoom (or same viewport width).
- [ ] **One breakpoint** — Resize the window (or use dev tools device mode): does nothing obviously collapse or overlap?
- [ ] **Interactive bits** — If there are links, buttons, or inputs: try **hover** and **Tab** to see focus outlines.
- [ ] **Terminal** — Confirm `npm run dev` shows no red errors after edits.

## 5) When it looks wrong — short escalations

Paste one of these into Cursor (adjust the detail):

```text
The implementation does not match the Figma frame. Compare against the Figma screenshot and fix spacing, alignment, and max-width. Do not change unrelated sections.
```

```text
The font or letterspacing looks off. Match the Figma text styles and use the same font family as the rest of the demo app where possible.
```

```text
On smaller widths the layout breaks. Fix responsive behavior for this section only using the same Tailwind breakpoint style as nearby components.
```

For **where the code probably is**, see [designer-repo-tour.md](designer-repo-tour.md).
