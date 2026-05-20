---
title: Featured collection
description: Section that renders a heading plus a product grid pulled from a chosen collection. Configurable column count, mobile carousel, view-all link.
---

# Featured collection

Heading plus a product grid pulled from a chosen collection. The primary surface for showing your latest drop, a curated selection, or a category landing block on the homepage.

## What it does

Pulls products from a single collection and renders them as a grid (or carousel) with a heading area above. Supports independent column counts on desktop and mobile, an optional view-all link or button, and configurable card content via the underlying product card system.

## Section settings

- **Collection** — Collection picker. The source of the products shown.
- **Products to show** — Range, 2–24, default 8. The number of products pulled from the collection.
- **Columns desktop** — Range, 1–6, default 4.
- **Columns mobile** — `1` or `2`, default 2.
- **Enable carousel on mobile** — Checkbox, default true. When on, the grid scrolls horizontally on mobile.
- **Enable carousel on desktop** — Checkbox, default false. Reserve for high-touch homepage moments.
- **Show view all** — Checkbox, default true. Shows a link or button to the full collection page.
- **View all style** — `link` (editorial register) or `button` (conversion register). Visible only when "Show view all" is on.
- **Padding top / Padding bottom** — Range sliders.
- **Color scheme** — Section-level color scheme.

## Blocks

The section takes header-area blocks. The product grid itself is structural and not block-driven.

- **Heading** — Section headline.
- **Subheading** — Small heading above the main heading. Useful for "Latest drop" or "Now shipping" labels.
- **Description** — Body copy below the heading.
- **Button** — Optional. Often used for "Shop all" or "View edition" routing. The view-all link is separate.

## Example use cases

- **Latest drop showcase.** `Products to show: 8`, `Columns desktop: 4`, `view_all_style: link`. A heading block ("Foundry / 8.0") and a subheading block ("Spring drop"). Routes to the collection page for the full edition.
- **Bestsellers strip.** `Products to show: 6`, `Columns desktop: 3`, `Enable carousel on desktop: true`. Used as a high-touch homepage strip below the hero. Carousel signals "more than what's shown."
- **Category preview.** Three featured-collection sections stacked, one per category (decks, apparel, hard goods). Each with `view_all_style: button` to push the visitor toward the category page.

## Notes

- The product card itself is configured in the theme settings, not per-section. See [Customizing](../customizing/) for product card settings (badges, vendor, price register, hover behavior).
- For homepages that show many collections, use the [Collection list](./collection-list) section instead — it renders collection tiles rather than product tiles, which keeps the page light.
