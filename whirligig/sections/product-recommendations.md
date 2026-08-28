---
title: "Product recommendations"
description: "Related or complementary products fetched from Shopify's recommendations API after load and drawn as plain cards, not the theme's audition card."
---

# Product recommendations

A grid of products Shopify picks, fetched from `/recommendations/products.json` after the page loads and drawn client-side. It is the cheapest way to keep a shopper on the store after they have decided against the product in front of them, and on a catalogue of one-of-one objects that matters more than usual: half these instruments are a single unit, and the next question after "sold" is "what else is near it". Reach for it at the foot of a product page. Do not reach for it when the copy above the grid has to promise something specific, because the cards it draws are built by this section's own script rather than by the theme's product card, and because the whole section hides itself when the API returns nothing.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Recommendation intent**. `Related` · `Complementary`, default `Related`.
- **Custom badge tag**. Products carrying this tag get the custom badge chip on their card.
- **Custom badge label**. Free text, empty by default.
- **Products to show**. 2–12 in steps of 2, default 4.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Display options**

- **Enable carousel on mobile**. On by default.
- **Show card eyebrow (product type)**. Off by default.

**Layout**

- **Columns on desktop**. 2–6, default 4.
- **Columns on mobile**. `1 column` · `2 columns`, default `2 columns`.

## Blocks

- **Theme blocks**. Any block in the theme’s shared block library.

_Available in the theme editor as **Product recommendations**._

<!-- generated:end -->

## Example use cases

**Near this pitch, at the foot of the product page.** `intent: related`, `products_to_show: 4`, `columns_desktop: 4`, `columns_mobile: 2`, `enable_carousel_on_mobile: true`, `show_card_eyebrow: true`, `badge_tag: one-of-one` with `badge_label: One of one`, `scheme-1`, padding 48 / 88. A `heading` block reads "Near this pitch" at `display_size: sm` and a `text` block sits under it. Four cards in four columns is the only combination that fills a row exactly at both viewports, because `products_to_show` steps by two.

**Complementary bench items under an instrument.** `intent: complementary`, `products_to_show: 2`, `columns_desktop: 2`, `show_card_eyebrow: false`, `badge_tag` left empty. A handpan wants a stand and a case, not another handpan. Complementary products are set per product in Search & Discovery, so this returns nothing until a merchant has done that work, and the section is invisible until it does.

**A dense shelf on a cheap product.** On an $18 whirly tube, `products_to_show: 6` at `columns_desktop: 6` with `padding_top: 32`. Six small objects in one row read as a shelf rather than as a recommendation, which suits the joyful end of the ladder; at $2,480 the same treatment reads as a bargain bin.

## Notes

**The cards are not the theme's cards.** This section builds its own markup in JavaScript from the recommendations API. That means no audition player, no `custom.scale · custom.voice` eyebrow (it prints the product *type* instead, when `show_card_eyebrow` is on), no `struck` state, and no route through `snippets/responsive-image.liquid`. Anywhere else on the store a product card can be played; here it cannot. Do not write copy above this grid that promises audio.

**Nothing renders until the fetch returns.** The custom element is `display: none` until it sets `data-loaded`, so a failed request, an empty result, or a shopper with the request blocked sees no section at all, heading blocks included. Anything you would be unhappy to lose belongs in a section that renders server-side.

**On a young store the results are thin.** `related` leans on order history and falls back to the same collection, so early on it will mostly return neighbours from the same family. `complementary` returns an empty list until products are paired by hand in Search & Discovery, and an empty list means an invisible section.

**Prices are formatted by the browser, not by the shop.** The card price comes from `price_min` divided by 100 and run through `Intl.NumberFormat` with the active currency. It ignores the shop's money format, so a store using a custom format will see a different price style here than on every other card.

**The badge needs both fields.** `badge_tag` and `badge_label` are only rendered together, and only on products that carry the tag. Setting the tag without the label renders nothing and gives no warning.

**The grid is a live region.** `aria-live="polite"` sits on the grid container, so the cards are announced when they land. That is correct for content that appears after load, and it does mean a screen reader hears four product titles read out mid-page.

**It costs a request and a layout shift.** One `fetch` per product page, then a grid that was zero-height until the response arrived. Put it low on the page, and give it real `padding_top` so the section above is finished before it lands.
