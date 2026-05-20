---
title: Product recommendations
description: Algorithmic product grid based on the current product. Powered by Shopify's product recommendation API.
---

# Product recommendations

An algorithmic product grid based on the current product. Powered by Shopify's product recommendation API — uses purchase history, related products, and product attributes to surface relevant items.

## What it does

Renders a grid of products related to the current product context. Used on product pages, cart pages, and post-purchase pages. Falls back to a chosen collection when no recommendations are available.

## Section settings

Documentation in progress. Key settings: heading, products to show, columns desktop, columns mobile, enable carousel on mobile, fallback collection, padding, color scheme.

## Blocks

- **Heading** — Section headline.
- **Subheading** — Small heading.

## Example use cases

- **Product page "You may also like"** — Used directly below the product description, before the footer.
- **Cart page "Add to your order"** — Used on the cart page to surface complementary products.
- **Post-purchase "Coming back for more?"** — Used on the order-confirmation page (where supported).

## Notes

Recommendations require enough purchase history to populate the API. New stores will see empty recommendations until their product pages have been viewed and purchased. Set a fallback collection to avoid empty sections during the cold-start period.
