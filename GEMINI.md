# GEMINI.md — Metatree Lab

This file provides comprehensive context and guidelines for AI agents working in this repository.

## Project Overview

**Metatree Lab** (metatreelab.ai) is a digital studio under **JR Academy** specializing in AI systems (Build & Adopt) and property marketing. It is a high-performance, bilingual (English & Chinese) static website.

- **Framework**: Astro 5 (Static SSG, Zero-JS by default)
- **Styling**: Tailwind CSS v4 (CSS-first config via Vite plugin)
- **i18n**: Astro native i18n routing (EN default, `/zh` prefix for Chinese)
- **Hosting**: GitHub Pages (via `.github/workflows/deploy.yml`)
- **Forms**: Client-side fetch to `https://api.jiangren.com.au/business-inquiry`

---

## Architecture & Data Flow

### 1. Bilingual Routing Strategy
The project uses a **thin wrapper** pattern to maintain a single source of truth for page logic:
- **Shared UI**: Page JSX lives in `src/components/pages/*.astro` (e.g., `AboutPage.astro`).
- **Route Wrappers**:
    - English (Default): `src/pages/about.astro` → `<AboutPage locale="en" />`
    - Chinese (Prefix): `src/pages/zh/about.astro` → `<AboutPage locale="zh" />`
- **Helper**: `src/config/site.ts` contains `localizedHref` for generating cross-locale links.

### 2. Content & Translations
- **UI Strings**: Managed via `src/i18n/en.json` and `zh.json`. Use `useTranslations(locale)` from `src/i18n/index.ts`.
- **Structured Data**: Services and projects are TypeScript data files:
    - `src/data/services.ts`: 15 services with bilingual fields.
    - `src/data/projects.ts`: 8+ portfolio projects.
- **Dynamic Routes**: `/work/[slug].astro` and its Chinese counterpart use `getStaticPaths()` to generate pages from `src/data/projects.ts`.

### 3. Design System (Tailwind v4)
All design tokens are defined as CSS variables in `src/styles/global.css`.
- **Theme**: Pure black (`#000`) background, "Jade × Cyan" brand gradient (`#00E5A0` to `#00B4D8`).
- **Typography**: Satoshi (Sans) for headings/body, Geist Mono for labels/nav/data.
- **Signature Elements**: `GridLines.astro` (12-column fixed grid), `.section-label` (uppercase mono text), `.card-glass` (glassmorphism effect).

---

## Development Workflow

### Core Commands
```bash
pnpm install   # Install dependencies
pnpm dev       # Start dev server (http://localhost:4321)
pnpm build     # Production build to ./dist
pnpm check     # Astro & TypeScript type checking
pnpm preview   # Preview production build locally
```

### Key Directories
- `src/components/ui/`: Primitive components (Buttons, Cards, Badges).
- `src/components/layout/`: Global structure (Nav, Footer, GridLines).
- `src/components/home/`: Landing page specific components (Hero, NeuralNetwork).
- `src/components/pages/`: Shared page logic (the actual JSX for each route).
- `src/data/`: Single source of truth for projects and service offerings.
- `src/config/site.ts`: Global constants (links, addresses, social).

---

## Engineering Standards

### 1. Naming Conventions
- **Components**: PascalCase (e.g., `FeaturedWork.astro`).
- **Pages/Routes**: Lowercase segments (e.g., `services/ai.astro`).
- **Assets**: kebab-case (e.g., `forma-property.png`).

### 2. TypeScript Guidelines
- **Strict Typing**: Use interfaces/types from `src/data/` for projects and services.
- **i18n Safety**: Always pass the `locale` prop to shared page components.
- **Aliases**: Use `~/` or `@/` for `src/` (configured in `tsconfig.json`).

### 3. i18n Rules
- **Brand Names**: Do not translate "Metatree Lab", "JR Academy", "Claude Code", "RAG", "OpenClaw".
- **Section Labels**: Keep English labels like `/ 01 — SERVICES` even on Chinese pages.
- **Context Engineering**: Page metadata (OG tags, titles) should be localized via `siteConfig` or page props.

### 4. Code Principles
- **Astro Over React**: Use native Astro components for everything static. Only use client-side React islands if complex state or interaction is required.
- **CSS-First**: Use standard Tailwind v4 classes and `@theme` variables. Avoid hardcoded hex codes.
- **Single Source of Truth**: Never duplicate copy between EN and ZH files; use translation dictionaries or shared data files.

---

## Verification Checklist
Before submitting changes:
- [ ] Run `pnpm check` to ensure no type errors.
- [ ] Run `pnpm build` to verify the static generation.
- [ ] Manually check both `/` and `/zh/` versions of the affected pages.
- [ ] Verify form submissions point to the correct production API endpoint.
- [ ] Ensure `hreflang` tags are correctly generated in `BaseLayout.astro`.

Refer to `design.md` for visual specs and `PRD.md` for product logic.
