---
title: Presets
description: Prismatic's presets — Inkling and Sickbird — as style variations of one theme. What each configures, and how presets work.
---

# Presets

A preset is the pre-configured arrangement of settings, typography, color, and homepage composition the theme loads when a store installs it. Presets are starting points — replace the placeholder content and adjust settings to fit your store.

Prismatic is one theme; its presets are how that one theme shows up as finished, distinct stores. Each preset ships with a complete demo store. Two presets are released or planned for v1:

- **Inkling** — the launch preset. A loud, joyful, print-shop register.
- **Sickbird** — following Inkling. A loud, type-forward, board-sports register.

Both are "loud" registers of the same substrate; what differs is typography, palette, corner treatment, and which sections the homepage leans on. The capability is the [theme](../); the character is the preset.

## Inkling — the launch preset

An artist-collab catalog register: a design house crediting a named illustrator on every piece — "real art, fake permanence." The volume here is *joyful* — saturation and graphic density rather than darkness.

- **Typography** — Bebas Neue display headings at 110% scale; Work Sans body; Space Mono subheadings and labels.
- **Color** — Nine schemes: a cream paper base (`#F6EFE0` / `#EDE2CC`) with riso brights to clash against it — pink, blue, yellow, green, orange, purple — and a near-black (`#1C1A17`). Alternated hard, section to section.
- **Appearance** — 1500px page width; 3px corner radius on buttons and inputs.
- **Homepage** — A deep, artist-features composition: type-forward slideshow hero, rich-text intro, featured collection, image-with-text, a dynamic grid, collection list, a **creator spotlight**, scroll-pinned images-with-text, shop-the-look, multi-column, featured product, hot spots, **process steps**, specification table, video, a **bundle builder**, journal teaser, a second collection list, image-with-text, and a newsletter slab.
- **Signature moves** — Registration-offset as the interactive accent, flash-sheet product grids, and artist credits set everywhere like liner notes (the creator-spotlight section).

## Sickbird — the board-sports preset

A loud, type-forward register for graphic-led brands — skate and snow hard goods, screen-printed apparel, maker catalogs sold in small numbered runs. Where Inkling is bright cream and joyful, Sickbird is dark, photographic, and industrial. The graphic *is* the product; the surface reads poster-dense, never sloppy.

- **Typography** — Oswald Bold headings at 140% scale, uppercase and tight-tracked; Work Sans body; Space Mono labels and buttons, uppercase and wide.
- **Color** — Four schemes designed to alternate hard: Paper (`#F4F2ED`), Ink (`#131414`), Surf reef-green (`#2E5A4F`), and Orange (`#FF5A1F`). The orange works like a trail marker — use it sparingly.
- **Appearance** — 1400px page width; square corners on buttons and inputs (radius 0).
- **Homepage** — A poster-sequence composition: type-as-structure slideshow hero, rich-text, featured collection, alternating asymmetric image-with-text rows, a media-grid mosaic, collection list, a scroll-pinned process story, shop-the-look, multi-column, featured product, hot spots, specification table, video, a journal teaser, and a dark newsletter slab.

Each preset's sample copy and placeholder images are tuned to its intended register. Replace them with your own photography, graphics, and language.

## How presets work

Presets live in the theme's `config/settings_data.json`. On first install the theme loads the preset; your edits in the editor then become the live configuration. The preset file remains as the reset reference.

Presets apply at install time. Switching presets in-editor isn't supported — each preset is its own install-time configuration of the one Prismatic theme.

## Resetting to the preset

1. From the Shopify admin, go to **Online Store → Themes**.
2. Click **Actions → Delete** on the Prismatic theme, then reinstall.

> **Caution:** Reinstalling discards all customization. If you want to preserve your current configuration to reapply later, copy `config/settings_data.json` via **Actions → Edit code** before deleting.

## Notes

- Presets are not templates. Templates are per-page layout files; the preset is install-time global configuration.
- The section library, templates, and settings are identical across presets — only the configuration differs.
