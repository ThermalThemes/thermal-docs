---
title: Featured product
description: Single-product showcase outside the product page, with display-scale title, price, description, and buy button.
---

# Featured product

A full single-product display for use outside the product page — a hero product on the homepage, a landing-page anchor.

## Section settings

- **Product** — The product to feature.
- **Title display size** — `none`, `sm`, `md`, `lg`. Renders the product title at the oversized display scale.
- **Desktop layout** — `image_left`, `image_right`, `image_top`.
- **Image aspect ratio** — `adapt`, `square`, `portrait`, `landscape`.
- **Show price** — Default on.
- **Show star rating** — Default off. Reads from the product reviews metafields (`reviews.rating` / `reviews.rating_count`); requires a review app or manually populated metafields to display anything.
- **Show description** — Default on.
- **Show buy button** — Default on.
- **Padding top / bottom**, **Color scheme**.

## Blocks

Takes [theme blocks](./index#theme-blocks) for a header area above the product display, and **app blocks**.

## Example use cases

- **Hero deck.** The current run's flagship at `image_left`, title at display `md`, description on, on the paper scheme between two ink slabs.
- **Flat-scarcity feature.** A single numbered-run product with the description carrying the "when it's gone it's gone" line — stated in copy, not a countdown widget.

## Notes

- The buy button adds the product's default variant to the cart; products needing variant selection route through the product page.
