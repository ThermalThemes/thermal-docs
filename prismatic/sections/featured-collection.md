---
title: Featured collection
description: Product grid pulled from a chosen collection, with card eyebrows, custom tag badges, hover behavior, and view-all link.
---

# Featured collection

A product grid pulled from a chosen collection, with a header area composed from theme blocks. The workhorse of homepage commerce composition.

## Section settings

- **Collection** — The collection to pull from.
- **Products to show** — 2–24, default 8.
- **Columns on desktop** — 1–6, default 4. **Columns on mobile** — 1 or 2.
- **Enable carousel on mobile** — Default on. **Enable carousel on desktop** — Default off.
- **Show card eyebrow** — A monospace `collection // product type` label above each card title. Default off.
- **Custom badge tag / label** — Products carrying the tag get a custom badge chip on their card. Use it for run numbers or restock flags driven from product tags.
- **Show "View all" link** — Default on, as `link` or `button`.
- **Card image hover behavior** — `fade` (cross-fade to the second image) or `cut` (instant swap after a short delay, for a more mechanical register).
- **Sale indicator style** — `badge` (chip on the card) or `typographic` (a "Reduced" text line above the price, no chrome).
- **Padding top / bottom**, **Color scheme**.

## Blocks

Takes [theme blocks](./index#theme-blocks) for the header area above the grid — typically a Subheading (monospace eyebrow), a Heading at a display size, and an optional Text block. The product grid itself is structural.

## Example use cases

- **Latest run.** Eyebrow subheading (`THE SHOP // NEW`), display-size heading, 8 products, view-all as a link.
- **Discipline shelf.** One featured-collection per discipline down the homepage, alternating color schemes per section for slab rhythm.

## Notes

- Card eyebrows earn their keep when product types are meaningful (DECKS, APPAREL, WAX); leave them off for a single-category catalog.
- The custom badge is tag-driven, so it can be turned on and off from the product admin without touching the theme editor.
