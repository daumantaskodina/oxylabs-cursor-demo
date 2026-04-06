# Project structure

Short map of this repository. Paths are relative to the repo root.

```
oxylabs-cursor-demo/
├── app/                    # Next.js App Router: pages, layout, global styles
│   ├── globals.css         # Tailwind v4 + theme tokens + base styles
│   ├── layout.tsx          # Root layout (HTML shell, fonts)
│   └── page.tsx            # Home page: composes header, sections, footer
├── components/
│   └── ui/                 # UI blocks and shadcn-style primitives
├── lib/
│   └── utils.ts            # `cn()` helper for merging CSS classes
├── docs/
│   ├── workshop/           # Designer onboarding (start here)
│   └── example-documentation/  # Copy-paste templates for product/tech/design rules
├── .cursor/
│   └── rules/              # Example Cursor rules for this workshop
├── public/                 # Static assets served as-is
├── next.config.ts          # Next.js configuration
├── package.json            # Scripts and dependencies
├── postcss.config.mjs      # PostCSS (Tailwind)
└── tsconfig.json           # TypeScript paths (`@/*` → repo root)
```

## What to open for common tasks

| Task | Location |
| --- | --- |
| Change home page layout or section order | `app/page.tsx` |
| Edit header, hero, dashboard, or footer | `components/ui/*.tsx` |
| Change global colors, fonts, or design tokens | `app/globals.css` |
| Workshop prompts and designer guides | `docs/workshop/` |

For a designer-focused walkthrough, see [workshop/designer-repo-tour.md](workshop/designer-repo-tour.md).
