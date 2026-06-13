---
title: Product recommendations
description: Related or complementary products for the current product, powered by Shopify's recommendations API.
---

# Product recommendations

A product grid driven by Shopify's recommendations API, keyed to the product being viewed. Belongs on the product template.

## Section settings

- **Products to show** — 2–12, default 4. **Columns** — desktop 2–6, mobile 1–2.
- **Enable carousel on mobile** — Default on.
- **Recommendation intent** — `related` (similar products) or `complementary` (products that pair with the current one — configurable in the Search & Discovery app).
- **Show card eyebrow**, **Custom badge tag / label** — As on [Featured collection](./featured-collection).
- **Padding top / bottom**, **Color scheme**.

## Blocks

Takes [theme blocks](./index#theme-blocks) for the header area — the heading copy ("Layer it up" vs. "You may also like") sets the register.

## Notes

- `complementary` recommendations require pairings configured in the Search & Discovery app; without them the section falls back to related products.
- Recommendations need order history to get good; new stores see category-based results.
