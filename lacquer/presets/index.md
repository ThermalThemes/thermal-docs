---
title: Presets
description: What ships with Lacquer's preset. How presets work and how to switch between them.
---

# Presets

A preset is a pre-configured arrangement of sections, settings, and content that the theme loads when a new store installs Lacquer or resets to defaults. Presets are starting points — replace placeholder content and adjust settings to fit your store.

## What ships in v1.0.0

Lacquer 1.0.0 ships with a single preset:

### Default preset

A drop-model brand register. Configured around:

- **Home template** — Slideshow hero, Featured collection (latest drop), Image with text (founder note), Multirow (process story), Featured product (hero product), Newsletter signup.
- **Product template** — `product.editorial.json` (gallery-left editorial layout) is the default product template.
- **Collection template** — Filter sidebar, sort options, 12-products-per-page grid.
- **Color scheme** — Scheme 1 (Stage) as the default.
- **Typography** — IBM Plex Sans + IBM Plex Mono.

The preset's sample copy and placeholder images are tuned to the theme's intended register. Replace them with your own product photography, copy, and configuration.

## Future presets

Additional presets will ship in future minor versions. Planned:

- **Apparel preset** — Optimized for cut-and-sewn apparel labels. Heavier on Multirow and Image-with-text, lighter on spec tables.
- **Hard-goods preset** — Optimized for tools, hardware, and instruments. Specification tables and product gallery prominent; spec depth as content.
- **Single-edition preset** — Optimized for stores selling a single edition at a time. Featured-product as the homepage primary surface.

## How presets work

Presets are JSON configurations stored in the theme's `config/settings_data.json`. When a store installs Lacquer for the first time, the theme loads this preset. Subsequent changes (additions, edits, deletions) overwrite the preset configuration but the preset file remains available as a reset point.

## Resetting to preset

To reset your theme to the preset configuration:

1. From the Shopify admin, go to **Online Store → Themes**.
2. Find the Lacquer theme in the Theme library.
3. Click **Actions → Delete**, then reinstall Lacquer from the Theme Store.

> **Caution:** Reinstalling loses all customization. Export your settings via **Actions → Edit code → config/settings_data.json** before deleting if you want to preserve customization to reapply.

## Notes

- Presets are not templates. Templates are per-page layout files (`product.json`, `collection.json`); presets are global initial configuration.
- A preset can include multiple template variants. Lacquer's preset ships with both `product.editorial.json` and `product.drop.json` available.
- Switching between presets is not currently supported in-editor. Future versions may add a preset-switcher; until then, presets are install-time only.
