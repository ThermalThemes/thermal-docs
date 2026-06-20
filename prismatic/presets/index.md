---
title: Presets
description: Prismatic's preset and Inkling demo store. What the preset configures, and how presets work.
---

# Presets

A preset is the pre-configured arrangement of settings, typography, color, and homepage composition the theme loads when a store installs it. Presets are starting points — replace the placeholder content and adjust settings to fit your store.

Prismatic ships with one preset, named **Prismatic** — the configuration a merchant sees in their theme library and the starting point a new store loads on install. It comes with a complete, fully merchandised demo store, branded **Inkling**: an artist-collab catalog used as the official demo.

The capability is the [theme](../); the character is the preset. The preset sets typography, palette, corner treatment, and which sections the homepage leans on.

## The Prismatic preset

An artist-collab catalog register: a design house crediting a named illustrator on every piece — "real art, fake permanence." The demo store is branded Inkling. The volume here is *joyful* — saturation and graphic density rather than darkness.

- **Typography** — Bebas Neue display headings at 110% scale; Work Sans body; Space Mono subheadings and labels.
- **Color** — Nine schemes: a cream paper base (`#F6EFE0` / `#EDE2CC`) with riso brights to clash against it — pink, blue, yellow, green, orange, purple — and a near-black (`#1C1A17`). Alternated hard, section to section.
- **Appearance** — 1500px page width; 3px corner radius on buttons and inputs.
- **Homepage** — A deep, artist-features composition: type-forward slideshow hero, rich-text intro, featured collection, image-with-text, a dynamic grid, collection list, a **creator spotlight**, scroll-pinned images-with-text, shop-the-look, multi-column, featured product, hot spots, **process steps**, specification table, video, a **bundle builder**, journal teaser, a second collection list, image-with-text, and a newsletter slab.
- **Signature moves** — Registration-offset as the interactive accent, flash-sheet product grids, and artist credits set everywhere like liner notes (the creator-spotlight section).

The preset's sample copy and placeholder images are tuned to its intended register. Replace them with your own photography, graphics, and language.

## How presets work

Presets live in the theme's `config/settings_data.json`. On first install the theme loads the preset; your edits in the editor then become the live configuration. The preset file remains as the reset reference.

The preset applies at install time and lives under the `Prismatic` key in `config/settings_data.json` — the configuration a merchant sees in their theme library.

## Resetting to the preset

1. From the Shopify admin, go to **Online Store → Themes**.
2. Click **Actions → Delete** on the Prismatic theme, then reinstall.

> **Caution:** Reinstalling discards all customization. If you want to preserve your current configuration to reapply later, copy `config/settings_data.json` via **Actions → Edit code** before deleting.

## Notes

- Presets are not templates. Templates are per-page layout files; the preset is install-time global configuration.
- The preset configures the section library, templates, and settings; the underlying theme capability is unchanged — only the configuration differs.
