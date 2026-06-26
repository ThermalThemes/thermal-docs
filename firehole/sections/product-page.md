---
title: Product page
description: The product template's core section — gallery layouts, zoom lightbox, sticky info column, breadcrumb, and the buy-box block roster.
---

# Product page

The product template's core section. Two structural areas — the media gallery and the info column — with the info column composed from reorderable product blocks.

## Section settings

**Media**

- **Desktop media layout** — `carousel_thumbs_bottom` (default), `carousel_thumbs_left` (the demo's 88px thumbnail rail), `carousel_dots`, `grid_1x1`, `grid_2x2`, `grid_2x2_highlighted`.
- **Mobile media layout** — `thumbnails`, `dots`, `floating_dots`, `free_scroll`.
- **Enable image zoom** — Opens a contained lightbox with zoom in/out controls, previous/next navigation, a counter, and keyboard support. **Zoom level** 150–300%.

**Layout**

- **Info column width** — 30–60% of page width at desktop, default 40.
- **Sticky info column** — Default on; the info column holds position while the gallery scrolls.
- **Show sticky add-to-cart bar** — A compact bar that appears once the buy button scrolls out of view. Default off.
- **Show breadcrumb** — Home / collection / product trail above the gallery. Default off.

**Color**

- **Color scheme**.

## Product blocks

The info column hosts reorderable product blocks:

- **Product title** — with heading size and an optional display size.
- **Product vendor** — optionally linked to the vendor's collection.
- **Product price** — with unit price and an optional rating display (reads the product reviews metafields; needs a review app or populated metafields).
- **Product variant picker** — `radio`, `pill`, or `swatch` rendering per block. Options whose values carry swatch metafields always render as swatches. Selecting a variant with its own image swaps the gallery's visible image.
- **Product quantity** — quantity selector.
- **Product buy buttons** — add-to-cart label, optional dynamic checkout button, payment terms.
- **Product description** — the product description in the theme's editorial type ramp.
- **Product pickup** — pickup availability for stores using local pickup.
- Plus the shared [theme blocks](./index#theme-blocks) — collapsible Details rows for shipping and care, Text, Divider, Custom Liquid — and **app blocks**.

## Notes

- The thumbnail-rail layouts need media depth; products with one image collapse to a single frame.
- Galleries follow variant selection only when variants have assigned media — assign variant images in the product admin for colorway swaps.
- The [Specification table](./specification-table) section in metafield mode pairs naturally with this template for spec-heavy products.
