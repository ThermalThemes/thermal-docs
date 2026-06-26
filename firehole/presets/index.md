---
title: Presets
description: Firehole's preset and the Headwaters demo store. What the preset configures, and how presets work.
---

# Presets

A preset is the pre-configured arrangement of settings, typography, colour, and homepage composition the theme loads when a store installs it. Presets are starting points — replace the placeholder content and adjust settings to fit your store.

Firehole ships with one preset, named **Firehole** — the configuration a merchant sees in their theme library and the starting point a new store loads on install. It comes with a complete, fully merchandised demo store, branded **Headwaters**: a Montana-rooted premium outdoor outfitter (carry, apparel, field gear, footwear) used as the official demo.

The capability is the [theme](../); the character is the preset. The preset sets typography, palette, and which sections the homepage leans on.

## The Firehole preset

A bright-but-refined register: quiet in type, layout, and motion — clean modern grotesque, generous whitespace, restrained animation — while the **palette runs hot**. Saturated high-chroma colorblock the way Topo, Cotopaxi, and Patagonia do it, carried on bright neutral grounds. Restraint is a type-and-layout discipline here, never a colour one; big confident landscape imagery carries the brand, and the spec table is treated as the brightest, best-designed data on the page.

- **Typography** — **Oswald** display headings (a tall condensed grotesque), **Source Serif 4** body, **Work Sans** subheadings and labels. Headings render at their natural scale, not oversized — the energy comes from colour and imagery, not poster type.
- **Colour** — Five schemes: a bright warm **cream** (`#F7F2E7`) and a cool **white** carry the calm reading sections; two fully saturated colorblock schemes — **burnt orange** (`#E5602A`) and **river-glass teal** (`#1B8C82`) — carry the loud-colour moments, banded across whole sections; and a deep near-black **ink** carries full-bleed editorial weight. The page gets its rhythm from alternating saturated blocks against bright neutral grounds, with a sky blue and a hit of red as supporting accents.
- **Merchandising** — Specification tables front and centre (capacity, load, weight, dimensions, materials, weather rating), and spec-on-card on the collection grid — one key fact beside the title, the gear-store tell.
- **Homepage** — A calm-but-dense landscape composition: a full-bleed hero, a scrolling lead editorial, material/texture stories, shop-the-look, a creator spotlight, hero product moments with context imagery, a brand-film beat, and a closing statement — many sections, each well-spaced and each carrying a deliberate colour or layout choice.
- **Editorial** — A **Field Journal** blog for trip reports, gear guides, and materials stories, wired into the homepage and the footer.

The preset's sample copy and placeholder images are tuned to its intended register. Replace them with your own photography, product imagery, and language.

## How presets work

Presets live in the theme's `config/settings_data.json`. On first install the theme loads the preset; your edits in the editor then become the live configuration. The preset remains as the reset reference.

## Resetting to the preset

1. From the Shopify admin, go to **Online Store → Themes**.
2. Click **Actions → Delete** on the Firehole theme, then reinstall.

> **Caution:** Reinstalling discards all customization. If you want to preserve your current configuration to reapply later, copy `config/settings_data.json` via **Actions → Edit code** before deleting.

## Notes

- Presets are not templates. Templates are per-page layout files; the preset is install-time global configuration.
- The preset configures the section library, templates, and settings; the underlying theme capability is unchanged — only the configuration differs.
