---
title: "Product"
description: "The product page frame: two-column layout, breadcrumb, zoom dialog, sticky buy bar and JSON-LD, hosting the block roster that carries the recording and the tone field."
---

# Product

This section is the product page's frame and very little else. It draws the two-column layout, the breadcrumb, the schema.org JSON-LD, the optional zoom dialog and the optional sticky buy bar; everything a shopper actually reads sits in blocks inside `_product-info`, which is where Whirligig puts the recording player and the playable tone field. Reach for the section settings when you are deciding geometry: how wide the info column runs, which gallery layout the media gets, whether zoom and the sticky bar are on. Reach for the block roster when you are deciding what the page says and in what order it says it.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Sticky info column**. On by default.
- **Zoom level**. 150–300% in steps of 25, default 200%.
- **Color scheme**. Colour scheme.

**Display options**

- **Enable image zoom**. Off by default.
- **Show sticky add-to-cart bar**. Off by default.
- **Show breadcrumb**. Off by default. Home / collection / product trail above the gallery.

**Layout**

- **Mobile media layout**. `Thumbnails` · `Dot indicators` · `Floating dots` · `Free scroll`, default `Thumbnails`.

Substrate v1.1: per-product-type layout overrides live on the _product-gallery block. The section-level settings below stay as defaults / deprecation aliases — block-level wins when both are set.

- **Desktop media layout**. `Carousel — thumbnails below` · `Carousel — thumbnails left` · `Carousel — dot indicators` · `Grid — single column` · `Grid — 2 columns` · `Grid — 2 columns, first image large`, default `Carousel — thumbnails below`.
- **Info column width**. 30–60% in steps of 5, default 40%. Percentage of page width for the product info column at desktop

## Blocks

- **_product-gallery**. 0 settings.
- **_product-info**. 0 settings.
- **App blocks**. Supported.

_Available in the theme editor as **Product**._

<!-- generated:end -->

## Example use cases

**The shipped instrument page.** `desktop_media_layout: grid_2x2_highlighted` with `mobile_media_layout: free_scroll`, `info_column_width: 40`, `info_column_sticky: false`, `enable_image_zoom: true` at `image_zoom_level: 250`, `show_sticky_add_to_cart: true`, `show_breadcrumb: true`. The info column runs vendor, title, price, `recording`, `tone-field`, variant picker, `stock-counter`, quantity, buy buttons, pickup, description, a `details` block for care and re-tuning, then `shipping-info`. Sound sits third and fourth, above the buy control, because the buying question for a $2,480 handpan is what it sounds like.

**A bench template with nothing to play.** A second product template for mallets, stands, bags and the re-tuning service: same section, `desktop_media_layout: grid_1x1`, `enable_image_zoom: false`, `info_column_width: 35`, and the `recording` and `tone-field` blocks taken out of the roster. A $32 pair of felt mallets has one photograph, no pitch and no recording, so both audio blocks would render nothing and a 40% info column would sit half empty.

**Gallery held in frame for a long read.** Turn `info_column_sticky` on and the gallery pins while the info column scrolls past it, which keeps the instrument on screen through 1,800px of specification and prose. Pair it with `info_column_width: 30` and `grid_1x1` so the single large image has the room. Read the first note below before you use it: the setting's label and its behaviour disagree.

## Notes

**The sticky setting pins the other column, deliberately.** "Sticky info column" now makes the *gallery* sticky, not the info column (`blocks/_product-info.liquid`). The info column measured 1,855px against a gallery roughly half that, so sticking the info column left two viewport heights of empty stone beside it. The label has not caught up with the behaviour. Whirligig ships the setting off.

**Never put a `max-height` and an `overflow` together on `.product-info`.** That pair shipped once and put Add to cart, the variant picker, the description and the bottom two thirds of the tone field inside an invisible inner scroller, with no scrollbar at all on a macOS overlay-scrollbar machine. Sticky is fine. A height cap is not.

**The tone field needs note coordinates, and only two families have them.** The block reads `custom.recording.sprite` and positions each note by an `x`/`y` percentage, defaulting to 50/50 when they are missing. `scripts/synth-audio.mjs` only lays out handpans and tongue drums, so on every other pitched family the note buttons all land on the same point at the centre of the plate. In this catalogue that is 16 of 44 products: seven kalimbas at 8 to 12 tines each, three wind chimes, five whirligigs, and the three-bowl set. Bowls and bells are unaffected because they carry a single note. Either give those sprites coordinates or take the block off the templates that serve them.

**The sticky buy bar needs a buy button to watch.** It stays hidden unless `_product-buy-buttons` is somewhere in the info column; it observes that element and slides in when it scrolls out of view. It also duplicates the buy control, so a keyboard user meets two Add to cart buttons on one page. On a short page it never appears at all.

**Zoom is bounded by the uploaded file, not by the setting.** The dialog opens fit-to-frame and steps by 1.5× up to twice `image_zoom_level`. Shopify never upscales, so at 250% the source has to be at least 2.5× the displayed box or the zoom shows soft pixels. The catalogue sources here are 3072×3840, which covers it; a 1200px product shot would not.

**The breadcrumb's middle link is a guess.** It uses the collection you arrived from and falls back to `product.collections.first` when there is none. A product filed under a family, a scale and a voice will show whichever Shopify returns first, which is not necessarily the one the shopper came through.

**Audio never starts by itself here.** The `recording` block and the tone field are separate controls with separate labels, and both need a click. One recording plays at a time store-wide; the tone field's single notes may overlap decays, which is the only exception in the theme. `prefers-reduced-motion` suppresses the tone field's ripple and never the sound.

**The JSON-LD emits every variant.** On a one-of-one instrument that is one offer; on a product with fifteen variants it is fifteen `Offer` objects in the page source. It is not configurable from the section.
