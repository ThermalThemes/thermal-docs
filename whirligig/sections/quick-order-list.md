---
title: "Quick order list"
description: "A one-row-per-variant order table with a quantity box on every line, for repeatable stock bought in multiples; Whirligig's own demo does not use it."
---

# Quick order list

Quick order list is a table with one row per variant and a quantity box on each, for a buyer who already knows what they want and is ordering by name and SKU rather than browsing. It renders every variant of every product in one collection, so it is a wholesale or re-order tool rather than a merchandising surface: no product card, no image beyond a 40px thumbnail, no audition player, nothing on the pitch axis. Whirligig's demo does not use it, and the catalogue is the reason. Most instruments here are quantity one, which is precisely the case a quantity column cannot serve. Reach for it only where the stock is genuinely repeatable and genuinely bought in multiples, and read the notes first: the bulk add button at the foot of the table does not work as written.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Collection**
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Display options**

- **Show product image**. On by default.
- **Show SKU**. On by default.
- **Show price**. On by default.
- **Show availability**. On by default.
- **Show vendor**. Off by default.
- **Enable product search**. On by default.
- **Enable filtering**. Off by default.

## Blocks

- **Theme blocks**. Any block in the theme’s shared block library.

_Available in the theme editor as **Quick order list**._

<!-- generated:end -->

## Example use cases

**A classroom order of kalimbas.** On a dedicated page template, **Collection** the kalimba family (seven products, $58 to $240), **Show product image** on, **Show SKU** on, **Show price** on, **Show availability** on, **Show vendor** off, **Enable product search** on. A teacher buying twelve of one model needs a quantity field and nothing else, and this is the one shape in the theme that gives them one. Add a `heading` block and a `text` block above it stating the lead time, because the table itself says nothing.

**A bench re-order sheet.** **Collection** `bench`, the six repeatable items (hard case, soft bag, stand, felt mallets, bowl cushion, re-tuning service), **Show SKU** off because a workshop's own accessories do not carry codes a customer recognises, **Show availability** on, **Enable product search** off at six rows. This is the only collection in the Timbre catalogue whose stock is genuinely repeatable, which is what makes it the honest candidate.

**A dealer list behind a customer gate.** Tongue drums and whirligigs, **Show vendor** on, **Show availability** on, **Show product image** off so the table stays compact at forty-odd rows. The theme provides no gating of its own, so the restriction has to be a Shopify customer-account or app-level rule on the page; this section renders for anyone who can reach the URL.

## Notes

**The bulk "Add to cart" button at the foot of the table does not work.** The form posts to `routes.cart_add_url` with inputs named `updates[]`. `updates[]` is the cart *update* parameter; `/cart/add` expects `id` and `quantity`, or an `items` array. Nothing intercepts the submit either: `data-quick-order-form` is on the form and referenced nowhere else in the theme. The per-row **Add** buttons do work, because they call `/cart/add.js` directly with the row's variant id. Until this is fixed, either tell buyers to add row by row or take the section off the page.

**`Enable filtering` does nothing.** The setting is in the schema, appears in the theme editor, and is read by neither the Liquid nor the JavaScript. A merchant who switches it on gets no filtering and no explanation.

**Search matches product titles only.** The handler reads the product title cell, so variant names and SKUs are not searchable, and it hides rows with the `hidden` attribute rather than filtering data. On a table whose whole purpose is ordering by code, the SKU is the field it does not look at.

**A row left at zero still adds one.** The per-row handler parses the quantity and falls back to 1 when the value reads as zero, so clicking **Add** on an untouched row puts one unit in the cart. The guard that was meant to prevent this can never fire.

**One row per variant, with no cap.** The section loops every product in the collection and every variant of each. There is no `Products to show` setting, no pagination and no limit, so a large multi-variant collection becomes a very long table and a very large DOM. Point it at a small collection deliberately.

**The empty-state row spans eight columns regardless.** Switch the optional columns off and the "select a collection" message overhangs the table it sits in.

**Nothing here plays, and that is the real cost on this theme.** No product card means no audition player, no `scale · voice` eyebrow, no one-of-one chip, and no `data-strike-item` for the strike line to name. This section is for a buyer who has already decided. It should never be the first place a shopper meets an instrument, and a store whose argument is that you can hear the object first should not put a silent table in front of that argument.

**The availability badges are pills** and fall back to a hardcoded green if `--color-success` is unset. This theme sets `--verdigris #1D6B60`, so the fallback should not fire, but the 999px radius sits against the square corners the rest of the theme holds to.

**It has no heading setting.** The header is assembled from theme blocks, so with no blocks the table starts cold with no title and no terms. Add a `heading` block, and on a trade list a `text` block naming the ordering terms.

**The table scrolls sideways inside its own wrapper** (`overflow-x: auto`), which is what keeps the page body from scrolling horizontally on a phone. Do not remove that wrapper when restyling the table.
