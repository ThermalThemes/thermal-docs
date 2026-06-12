---
title: Presets
description: What ships with Sickbird's preset. How presets work.
---

# Presets

A preset is the pre-configured arrangement of settings the theme loads when a store installs it. Presets are starting points — replace the placeholder content and adjust settings to fit your store.

## What ships in v1.0.0

Sickbird 1.0.0 ships with a single preset, **Sickbird** — the register the theme was designed in:

- **Typography** — Oswald Bold headings at 140% scale, uppercase, tight-tracked; Work Sans body; Space Mono labels and buttons, uppercase and wide.
- **Color** — Paper as the default scheme, Ink for modals and overlays, with the four-scheme rotation (Paper / Ink / Surf / Orange) available per section.
- **Appearance** — 1400px page width, square corners on buttons and inputs (radius 0).
- **Homepage** — A poster-sequence composition: type-as-structure slideshow hero, discipline collection list, alternating asymmetric image-with-text rows, a scroll-pinned process story, featured collections per discipline, media-grid mosaic, journal teaser, and a dark newsletter slab.

The preset's sample copy and placeholder images are tuned to the intended register. Replace them with your own photography, graphics, and language.

## How presets work

Presets live in the theme's `config/settings_data.json`. On first install the theme loads the preset; your edits in the editor then become the live configuration. The preset file remains as the reset reference.

## Resetting to the preset

1. From the Shopify admin, go to **Online Store → Themes**.
2. Click **Actions → Delete** on the Sickbird theme, then reinstall from the Theme Store.

> **Caution:** Reinstalling discards all customization. If you want to preserve your current configuration to reapply later, copy `config/settings_data.json` via **Actions → Edit code** before deleting.

## Notes

- Presets are not templates. Templates are per-page layout files; the preset is install-time global configuration.
- Switching presets in-editor isn't supported; presets apply at install time.
