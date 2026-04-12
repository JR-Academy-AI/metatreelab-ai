# Repository Guidelines

## Project Structure & Module Organization
This repository is a static Astro 5 marketing site for `metatreelab.ai`. Main source code lives in `src/`. Routes are in `src/pages/`, with English as the default locale and Chinese pages under `src/pages/zh/`. Reusable UI is split across `src/components/layout/`, `src/components/home/`, `src/components/pages/`, and `src/components/ui/`. Shared content and config live in `src/data/`, `src/i18n/`, `src/config/`, and `src/content/`. Static assets such as `favicon.svg`, `robots.txt`, and `CNAME` belong in `public/`.

## Build, Test, and Development Commands
Use `pnpm` for all local work.

- `pnpm install`: install dependencies from `pnpm-lock.yaml`
- `pnpm dev`: start the Astro dev server on `http://localhost:4321`
- `pnpm build`: create the production build in `dist/`
- `pnpm preview`: serve the built site locally for verification
- `pnpm check`: run Astro and TypeScript checks

Run `pnpm check && pnpm build` before opening a PR.

## Coding Style & Naming Conventions
Follow the existing code style: TypeScript with Astro single-file components, ESM imports, and 2-space indentation. Keep route files and components in PascalCase for components (`BaseLayout.astro`, `ContactPage.astro`) and lowercase for route segments (`about.astro`, `services/index.astro`). Put shared site constants in `src/config/site.ts`, translations in `src/i18n/en.json` and `src/i18n/zh.json`, and avoid hardcoding copy in multiple places.

Use the existing path aliases from `tsconfig.json`: `~/` and `@/` both point to `src/`.

## Testing Guidelines
There is no dedicated automated test suite yet. Treat `pnpm check` as the minimum validation step and use `pnpm preview` to manually verify both `/` and `/zh/` routes, navigation, forms, and layout changes. When adding data-driven content, verify the affected pages build without schema or routing errors.

## Commit & Pull Request Guidelines
Recent history uses Conventional Commit style such as `feat: add fonts, work detail pages, real contact info`. Continue with prefixes like `feat:`, `fix:`, and `docs:`. Keep commits focused and descriptive.

PRs should include a short summary, impacted routes or files, manual verification steps, and screenshots for visible UI changes. Link the relevant issue or task when one exists.

## Configuration & Content Notes
Review `README.md`, `PRD.md`, and `design.md` before structural or visual changes. Preserve bilingual routing, `trailingSlash: 'always'`, and GitHub Pages requirements in `public/CNAME` unless the deployment strategy changes.
