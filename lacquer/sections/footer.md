---
title: Footer
description: Site footer section. Navigation columns, newsletter signup, social links, payment icons, locale and country selectors, copyright.
---

# Footer

The site footer. Renders navigation columns, newsletter signup, social handles, payment icons, locale and country selectors, and a copyright line. Configurable to single-row or stacked layouts.

## What it does

Lives in the `footer-group.json` section group. Composes columns of links, an email-capture form, social handles, and policy and payment chrome into a consistent footer across every template.

## Section settings

- **Footer layout** — `wide` (single row, columns side-by-side), `stacked` (rows stack vertically), `compact` (minimum chrome — copyright, policy links, social handles only).
- **Show newsletter signup** — Checkbox.
- **Newsletter heading** — Text. Visible when newsletter signup is on.
- **Newsletter description** — Text. Visible when newsletter signup is on.
- **Show social links** — Checkbox.
- **Show country selector** — Checkbox.
- **Show locale selector** — Checkbox.
- **Show payment icons** — Checkbox.
- **Copyright text** — Optional override for the auto-generated copyright. When empty, the footer uses <code v-pre>© {{ year }} {{ shop.name }}</code>.
- **Padding top / Padding bottom** — Range sliders.
- **Color scheme** — Section-level color scheme.

## Blocks

The footer takes column blocks:

- **Menu** — A column of navigation links pulled from a Shopify menu. Heading plus the menu's link list.
- **Text** — A column of free-form text. Heading plus body copy.
- **Image** — A column with an image (logo, payment marks, certification).

## Example use cases

- **Drop-model register.** Two menu blocks (Shop, Studio), one text block ("Drops every other Tuesday at 10am PT"), newsletter signup on. Layout: wide.
- **Full-catalog register.** Four menu blocks for categories (Shop, Editions, Hard goods, Apparel) plus a Help menu. Newsletter signup on. Layout: wide.
- **Compact register.** No columns; just policy links, copyright, payment marks. Layout: compact. Used on landing pages and one-off campaigns where the footer should disappear.

## Notes

- Social handles are configured in **Theme settings → Social media**, not per-section. The footer pulls handles from the global setting.
- Payment icons render automatically from Shopify Payments' enabled methods. No per-icon configuration.
- The newsletter form posts to Shopify's customer-form endpoint. Email captures land in Shopify Admin → Customers, tagged as accepting marketing.
