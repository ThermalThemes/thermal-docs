---
title: "Featured collection"
description: "A plain product grid drawn from one collection, with a header built from theme blocks and cards that each play their own recording."
---

# Featured collection

The general-purpose product grid: pick a collection, pick a count, get cards. It has no pitch axis and no rail, which is the whole difference between it and `pitch-axis` or `listening-rail`; what it keeps is the card, so every product carrying a `custom.recording` still arrives with an audition button. Reach for it when a page needs "here are some things to buy" and the relationship between those things is not audible. Reach for `listening-rail` instead when the comparison is the point, because five hand-picked instruments in a row is a different argument from eight cards off a collection.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Custom badge tag**. Products carrying this tag get the custom badge chip on their card.
- **Custom badge label**. Free text, empty by default.
- **Card hover effect**. `Swap to second image` · `Zoom` · `None`, default `Swap to second image`. What happens to the card image on hover. 'Swap' crossfades to a second product image. 'Zoom' scales the single image in place — the safe choice for single-image catalogs (one-of-one inventory) where there is no second image to swap to. 'None' leaves the image still. 'Swap' automatically falls back to 'None' for products that have only one image, so a card never blanks.
- **Card image hover behavior**. `Fade` · `Cut`, default `Fade`. Only applies when 'Card hover effect' is 'Swap'. How the secondary image swaps in on hover. 'Fade' transitions opacity (substrate default). 'Cut' swaps with no animation (300ms delay) — for themes whose brand register treats motion as restrained.
- **Collection**
- **Products to show**. 2–24 in steps of 2, default 8.
- **"View all" style**. `Link` · `Button`, default `Link`.
- **Sale indicator style**. `Badge` · `Typographic`, default `Badge`. How sale states render on the card. 'Badge' emits the chip in the badges block (substrate default). 'Typographic' suppresses the chip and emits a 'Reduced' text line above the price — for themes whose brand register treats sale as text, not chrome.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Display options**

- **Enable carousel on mobile**. On by default.
- **Enable carousel on desktop**. Off by default.
- **Show card eyebrow (collection // product type)**. Off by default.
- **Show "View all" link**. On by default.

**Layout**

- **Columns on desktop**. 1–6, default 4.
- **Columns on mobile**. `1 column` · `2 columns`, default `2 columns`.

## Blocks

- **Theme blocks**. Any block in the theme’s shared block library.

_Available in the theme editor as **Featured collection**._

<!-- generated:end -->

## Example use cases

**Off the bench, on the homepage.** Collection `off-the-bench`, `products_to_show: 8`, a `subheading` block reading "Recorded this week" above a `heading` block "Off the bench" at display L, `badge_tag: one-of-one` with the label "One of one", `sale_indicator_style: typographic`, `view_all_style: button`, `scheme-2`, 56/56. Eight cards, eight recordings, and a button through to the shelf.

**The bridge at the end of an article.** `article.json`: the same collection at 4 products across 4 columns, `show_card_eyebrow: true` so each card reads "OFF THE BENCH // HANDPAN", `hover_effect: none`, `view_all_style: link`, carousel on mobile, 80/96. A reader who has finished a Bench Note gets four objects and a way back into the shop without a second heading competing with the article's.

**The bench shelf under an empty cart.** `cart.json`: collection `bench`, `products_to_show: 4`, a `heading` block "From the bench" and a `text` block that names the trade-off out loud ("a bowl on a hard surface loses most of its tail"), `view_all_style: link`, 88/88. It sits below the `shelf-rack`, so an empty cart offers something to hear first and something to add second.

## Notes

- **The header is blocks, and nothing orders them for you.** With zero blocks the section renders a headless grid. `content_for 'blocks'` runs once inside `.featured-collection__header`, so put a `subheading` block first, then `heading`, then `text`, by hand. The eyebrow, heading, lede order that `snippets/section-header.liquid` guarantees in a dozen other sections is not enforced here.
- **"View all" is doubly conditional and disappears without warning.** It needs `show_view_all` on **and** `collection.products_count > products_to_show`. `off-the-bench` holds 8 and `bench` holds 6; set `products_to_show` at or above the collection size and the link is gone, with nothing in the editor to say why.
- **No collection selected renders placeholder SVGs**, one per `products_to_show`. `probe.mjs` counts `.placeholder-svg`, so never ship a template or a preset with the collection unset.
- **`hover_effect` is inert on this catalogue, and two placements ask for the wrong thing.** Every instrument carries one photograph, so `Swap` falls back to `None` on its own. The homepage and the cart both request `Swap` while DESIGN.md's card decision is `None`. Nothing breaks; the setting simply describes behaviour the theme does not have. `page.theme-features` uses `Swap` with `Cut` on purpose, to demonstrate both axes on a page whose job is demonstration.
- **There is no image ratio setting, and it does not need one.** `snippets/theme-overrides.liquid` gives every card image box `aspect-ratio: 4 / 5`, and `1 / 1` where `product.type` handles to `accessory` or `whirligig`. That rule renders at the end of `<body>` and wins over `theme.css`, so card shape is a product-type decision across the whole theme rather than a per-section one. A mistyped product gets the wrong crop and there is no editor control to correct it.
- **`enable_carousel_on_desktop` costs the page its row rhythm.** It is off in all four placements. Turning it on replaces the grid with a horizontal scroller, and the section stops sharing the vertical measure with everything above and below it.
- **Audio.** Nothing autoplays. Cards render the shared player's `card` variant, one recording at a time store-wide, and the card `<progress>` stays hidden until playback starts. Eight cards means eight `<audio>` elements at `preload="none"`, which costs nothing until a visitor presses a button.
- **Leave it off** the collection template, where `main-collection` already draws the grid, and off any page that already carries a `listening-rail`. Two product rows inside one screen reads as a shop that could not choose.
