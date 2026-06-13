---
title: Footer
description: Site footer with navigation columns, brand block, newsletter signup, payment icons, and an optional brand-mark watermark.
---

# Footer

The site footer. Lives in the footer group and renders on every template. Composed from blocks — navigation columns, a brand block, a newsletter form, images, payment icons — laid out across a configurable column count.

## Settings

- **Columns (desktop)** — 2–6, default 4.
- **Show payment icons in footer bottom bar** — Default on.
- **Show brand mark watermark** — An oversized tone-on-tone theme mark bleeding off the footer's corner. Decorative; default on.
- **Color scheme** — The demo runs the footer on the ink scheme as a closing slab.

## Blocks

- **Navigation column** — A heading plus a menu from **Online Store → Navigation**. Add one block per column of links.
- **Text column** — Heading plus rich text. Hours, address, a short manifesto.
- **Brand** (limit 1) — Logo, logo width, short description, social icons (from the URLs in Theme settings → Social media), and an optional **Follow on Shop** button.
- **Newsletter** (limit 1) — Heading, subtext, email placeholder, button label. Submissions create customers in your Shopify admin with the marketing opt-in.
- **Image** — Heading, image, optional link. Certifications, stockist badges.
- **Payment icons** (limit 1) — A labeled payment-icons block inside the column grid, separate from the bottom-bar toggle.

## Notes

- Social icons render only for networks with URLs filled in at **Theme settings → Social media**.
- A typical composition: Brand block, two navigation columns (shop + info), newsletter. The legal menu (privacy, refund, shipping, terms) belongs in a navigation column pointed at a `footer-legal` menu.
