# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build locally
```

No test or lint commands are configured.

## Architecture

This is a personal portfolio and blog site built with **Astro 5**, deployed to **Netlify** via `@astrojs/netlify` adapter.

### Content Collections

Two typed content collections defined in `src/content.config.ts`:

- **`blog`** (`src/content/blog/`) — MDX posts with `pageTitle`, `date`, `abstract`, `tags[]`
- **`work`** (`src/content/work/`) — MDX portfolio entries with `pageTitle`, `date`, `liveURL`, `challengeURL?`, `abstract`, `builtWith`, `featured`, `image`

### Routing

| Route | Source |
|-------|--------|
| `/` | `pages/index.astro` — hero, featured work, contact |
| `/about/` | `pages/about.mdx` |
| `/blog/` | `pages/blog.astro` — all posts sorted by date |
| `/blog/[slug]/` | `pages/blog/[...slug].astro` |
| `/work/` | `pages/work.astro` |
| `/work/[slug]/` | `pages/work/[...slug].astro` |
| `/tags/` | `pages/tags/index.astro` |
| `/tags/[tag]/` | `pages/tags/[tag].astro` |

### Styling

Custom CSS with no framework. Key files in `src/styles/`:

- `reset.css` — Josh Comeau's CSS reset
- `global.css` — Design tokens (CSS custom properties), typography, and dark/light theming

**Theme:** Dark mode by default; light mode toggled by adding `.light` class to `<html>`. Uses `clamp()` for fluid responsive sizing rather than breakpoints.

**Fonts** (via `@fontsource`): Calistoga (headings), Montserrat Variable (body), Material Symbols Outlined (icons).

### Integrations

- `@astrojs/mdx` — MDX support for content
- `astro-webmanifest` — Auto-generates PWA web manifest
- `@astrojs/prism` — Prism syntax highlighting in markdown
