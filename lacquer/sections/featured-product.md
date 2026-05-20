---
title: Featured product
description: Single-product showcase section. Media gallery on one side, product info and buy buttons on the other. Used to spotlight a hero product on the homepage or landing pages.
---

# Featured product

A single-product showcase. Renders the product's media gallery alongside its title, price, description, and buy buttons. Used on homepages to spotlight a hero product, on landing pages to drive a single SKU, and on customer-account or marketing pages where one product carries the page.

## What it does

Pulls a single product (chosen via product picker) and renders it with the same layout primitives as the main product template, but composable into any page context. The gallery, info column, variant picker, quantity selector, and buy buttons are all block-driven and orderable in the theme editor.

## Section settings

- **Product** — Product picker.
- **Media layout** — `gallery_left`, `gallery_right`, `gallery_full`. Determines whether the gallery sits on the left, right, or above the info column.
- **Info column width** — Range slider in percent. Default 45%.
- **Info column sticky** — Checkbox, default true. The info column scrolls with the page until the gallery section ends.
- **Show product link** — Checkbox. When on, the product title links to the full product page.
- **Hide unavailable variants** — Checkbox.
- **Padding top / Padding bottom** — Range sliders.
- **Color scheme** — Section-level color scheme.

## Blocks

The section takes the same block roster as `main-product`:

- **Vendor** — Brand or vendor label.
- **Title** — Product title.
- **SKU** — SKU label.
- **Badges** — On-sale and sold-out badges.
- **Price** — Current price, compare-at price, unit price.
- **Rating** — Aggregate rating display (requires a rating app).
- **Description** — Product description, full or excerpt.
- **Variant picker** — Variant selector. Configurable as radio, pill, or swatch rendering.
- **Quantity selector** — Quantity input.
- **Buy buttons** — Add to cart, dynamic checkout, pickup availability.
- **Inventory** — Inventory status display.
- **Pickup availability** — Pickup location selector.
- **Text** — Custom text block. Useful for shipping notes, edition info, drop date.
- **Image** — Custom image block. Useful for trust marks or production credits.
- **Button** — Custom button block.
- **Share buttons** — Social share affordances.

## Example use cases

- **Homepage hero product.** `media_layout: gallery_left`, `info_column_sticky: true`, blocks ordered as Vendor / Title / Price / Description / Variant picker / Buy buttons. Used to drive a hero SKU from the homepage.
- **Landing page for a single edition.** Featured product as the page's primary content. Add a Multirow section below for production notes, an Image-with-text section below that for the photographer credit, and the rest of the edition's products in a Featured collection below that.
- **Limited drop landing.** Featured product with `media_layout: gallery_full` — full-bleed media at the top, info column below. Heavy editorial register.

## Notes

- The featured-product section is heavy on render. Use sparingly per page.
- Don't use it as a substitute for the main product template. The product template still owns the canonical product URL.
