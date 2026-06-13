# thermal-docs

Documentation site for Thermal Themes. Built with [VitePress](https://vitepress.dev/); deployed to GitHub Pages at [docs.thermalthemes.com](https://docs.thermalthemes.com).

## Structure

- `index.md` — Landing page listing Thermal's themes.
- `prismatic/` — Prismatic theme documentation. Overview, getting-started, sections, customizing, presets, FAQ, changelog, contact.
- `.vitepress/config.ts` — VitePress site configuration. Navigation, sidebars, search, theme metadata.
- `.vitepress/theme/` — Theme overrides matching thermalthemes.com's instrumentation register (dark stage, mono data, heat accent).
- `public/CNAME` — Custom domain configuration for GitHub Pages.
- `.github/workflows/deploy-docs.yml` — GitHub Actions workflow that builds and deploys on push to main.

## Development

```sh
npm install
npm run docs:dev
```

Opens a local dev server at `http://localhost:5173` (default VitePress port).

## Build

```sh
npm run docs:build
```

Static site builds to `.vitepress/dist/`. Use `npm run docs:preview` to preview the build locally.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow at `.github/workflows/deploy-docs.yml`, which builds the site and deploys to GitHub Pages. The custom domain `docs.thermalthemes.com` is configured via the `CNAME` file in `public/`.

## Adding a new theme

When a new Thermal theme ships:

1. Create `{theme}/` at the repo root with the same subtree as `prismatic/`:
   - `{theme}/index.md` — Overview.
   - `{theme}/getting-started/index.md`
   - `{theme}/sections/index.md` + per-section pages.
   - `{theme}/customizing/index.md`
   - `{theme}/presets/index.md`
   - `{theme}/faq/index.md`
   - `{theme}/changelog/index.md`
   - `{theme}/contact/index.md`
2. Add a sidebar config block for the new theme in `.vitepress/config.ts` under `themeConfig.sidebar`.
3. Add a nav link for the new theme in `.vitepress/config.ts` under `themeConfig.nav`.
4. Add a feature card on `index.md`.

The Prismatic subtree is the canonical template. Mirror its structure to keep cross-theme docs consistent.
