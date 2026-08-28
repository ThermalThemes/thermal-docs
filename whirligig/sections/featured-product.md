---
title: "Featured product"
description: "One product shown as a picture and a short buy column, for pages that argue for a single instrument; it carries no recording and no tone field."
---

# Featured product

One product rendered as a picture, a title, a price, a description and a single call to action, with a header built from theme blocks. Whirligig uses it once, on the theme-features page, as a specimen of what a product looks like outside its own template. Reach for it on a landing page or an editorial page that is arguing for one instrument. Do not reach for it as a stand-in for the product page: it carries no recording, no playable tone field and no variant picker, and its buy button is a link to the product page rather than a form.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Title display size**. `None — standard heading` · `Display S` · `Display M` · `Display L`, default `None — standard heading`. Render the product title at the oversized display scale (type-as-structure) instead of the standard heading size.
- **Product**
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Display options**

- **Show buy button**. On by default.
- **Show price**. On by default.
- **Show star rating**. Off by default. Reads from product reviews metafield
- **Show description**. On by default.

**Layout**

- **Image aspect ratio**. `Adapt to image` · `Square (1:1)` · `Portrait (2:3)` · `Landscape (3:2)`, default `Adapt to image`.
- **Desktop layout**. `Image left` · `Image right` · `Image top`, default `Image left`.

## Blocks

- **Theme blocks**. Any block in the theme’s shared block library.
- **App blocks**. Supported.

_Available in the theme editor as **Featured product**._

<!-- generated:end -->

## Example use cases

**The theme-features specimen.** `page.theme-features` `one-product`: product `handpan-d-kurd-0412`, `title_display_size: lg`, `desktop_layout: image_right`, `image_aspect_ratio: portrait`, price, description and buy button on, rating off, `scheme-1`, 64/48. The blocks around it do the honest work: a caption naming the section, a subheading, a heading at display M, a text block on what the real product page stacks, a `details` block that says out loud why the audio blocks are absent, and a secondary button through to the product page itself.

**A campaign page for one instrument.** `desktop_layout: image_top` (which caps the whole thing at 640px and centres it), `title_display_size: md`, description on, buy button on, 96/96, with a `listening-rail` immediately below carrying that one instrument as its only block. The rail supplies the sound this section cannot, and the two together are a product page's argument in two sections.

**A quiet cross-sell at the foot of an article.** `desktop_layout: image_left`, `title_display_size: none`, `show_description: false`, `show_price: true`, `image_aspect_ratio: square`, 48/48. A picture, a name, a price and a way through, with nothing competing with the article above it.

## Notes

- **The buy button is a link, and it says the wrong thing.** `show_buy_button` renders <span v-pre>`<a href="{{ product.url }}">Add to cart</a>`</span> when the variant is available and a disabled `<button>Sold out</button>` when it is not (`sections/featured-product.liquid:75`). Nothing reaches the cart; the shopper lands on the product page. Treat it as a "see this instrument" link until it is wired to a real form or relabelled. Controls on this theme say what happens.
- **Two strings are hardcoded English.** "View full details" (line 87) and the editor-facing "Select a product to feature." (line 92) are not locale keys, so they stay English in de, es, fr and it.
- **No audio, by construction, and the theme admits it.** The `recording`, `tone-field`, stock-counter and pre-order blocks resolve their instrument through `closest.product`, which the product template establishes and this section does not. This section reads `all_products[...]`, so those blocks would resolve to nothing, and a control that resolves to nothing is worse than no control. If a page needs the sound beside this section, put a `listening-rail` or a `shelf-rack` next to it.
- **Blocks land above the layout, never beside the image.** `content_for 'blocks'` runs once, inside `.featured-product__header`. Whatever you add is a header element, so plan the composition as header first, then the two columns.
- **`show_rating` should stay off.** It reads `product.metafields.reviews.rating.value` and pipes it through `round: 1`, but a rating metafield is an object rather than a number. The star also paints a hardcoded `#f59e0b`, which is not a palette token and measures under 2:1 on `--ground`.
- **`Adapt to image` is the default and it is the wrong default for this catalogue.** The studio shots are 3072×3840, so `adapt` gives a very tall picture in a half-width column and pushes the price and the button below the fold. Choose `portrait` or `square` unless you have measured the specific image.
- **The image has no `sizes` attribute.** Raw `image_tag` with widths up to 3200 and no `sizes` (line 24), so the browser assumes 100vw and over-fetches in a column that is half the page.
- **Layout behaviour.** `image_left` and `image_right` are a `1fr 1fr` grid down to 768px, then a single column with the image first. `image_right` swaps visually with `order`, so the DOM order is always media then info, which is what you want for a screen reader and worth knowing before you write the heading.
- **Leave it off** the product template, where `main-product` does all of this properly and with sound, and off any page where the reader is already one click from the product page.
