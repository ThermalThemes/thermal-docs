---
title: "Shop the look"
description: "One image with product dots and a fixed sidebar of cards that add to cart in place, for a set of objects that are genuinely bought together."
---

# Shop the look

One photograph, dots placed on it by percentage, and a 280px sidebar of product cards each with a real Add to cart. Activating a dot does not open anything; it highlights the matching card and scrolls it into view. Reach for it when several products are actually used together and the photograph shows why: the practitioner's bowl, mallet, cushion and stand are one purchase in four line items, and the cushion is the one nobody thinks to buy. Skip it when the products merely share a mood, and skip it when any of them has options that matter, because the button adds the first available variant without asking.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Subheading**. Free text, empty by default.
- **Eyebrow**. Small uppercase label above the heading. Use it to group sections into themes.
- **Heading**. Free text, empty by default.
- **Heading display size**. `None — standard heading` · `Display S` · `Display M` · `Display L` · `Display XL`, default `None — standard heading`. Render the heading at the oversized display scale (type-as-structure) instead of the standard heading size.
- **Image**. Image.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Layout**

- **Image aspect ratio**. `Adapt to image` · `Square (1:1)` · `Portrait (2:3)` · `Landscape (3:2)`, default `Portrait (2:3)`.
- **Image position on desktop**. `Image left` · `Image right`, default `Image left`.

## Blocks

- **Product hotspot**. 3 settings.

_Available in the theme editor as **Shop the look**._

<!-- generated:end -->

## Example use cases

**What a practitioner actually carries (homepage).** `image: design-practitioner-kit.jpg`, `image_aspect_ratio: portrait`, `desktop_layout: image_right`, `heading_display_size: lg`, `scheme-1`, padding 56 / 24. Four `hotspot` blocks: the hammered bowl at 38/30, felt mallets at 66/52, the bowl cushion at 44/74, the handpan stand at 22/58. The lede does the work the dots cannot: "The cushion is not optional. A bowl on a hard surface loses most of its tail." That sentence is why the section is here rather than a four-up product grid.

**A bench set under an instrument.** `image_aspect_ratio: landscape`, `desktop_layout: image_left`, three dots on a stand, a case and the re-tuning service, all single-variant bench items priced $25 to $180. Bench items restock, so the cards stay live; a look built around a one-of-one handpan goes half dead the day it sells.

**A two-dot detail shot.** On a collection page, a close photograph of a bowl on its cushion with exactly two dots. Two cards leave the 280px sidebar shorter than a portrait image, which is the only arrangement where the two columns finish at roughly the same height.

## Notes

**The Add to cart button adds the first available variant, silently.** It posts `selected_or_first_available_variant` to `/cart/add.js` with no variant picker anywhere in the section. Use single-variant products only. A product sold in two sizes will quietly add the size that happens to be listed first.

**Sold-out products lose the button.** A sold-out card renders a "Sold out" line instead. Individually tuned instruments are one in stock and stay sold out, so a look assembled from them degrades permanently rather than temporarily.

**Every dot has the same accessible name.** The dots are labelled "View product" with no product name in them, so a screen reader hears four identical buttons and the product names only exist in the sidebar. The dots are also toggle buttons that render without an initial `aria-pressed` value. Treat the sidebar as the real interface and the dots as a pointing device.

**The whole sidebar is a live region.** `aria-live="polite"` sits on the column, not on the card, so a change there can be announced as more than you intended.

**The header prints the lede above the eyebrow and the heading.** This section writes its own header instead of using the shared one, so the reading order is subheading, then eyebrow, then heading, and the eyebrow only renders at all when a heading is set. Set both, and expect the lede first until the section is moved onto `snippets/section-header.liquid`.

**The sidebar is 280px and does not scroll.** At 769px and up it is a fixed track beside the image. Card images are 64px and titles wrap hard. Past about five cards the sidebar runs much taller than the image and the section stops looking composed; there is no block limit to stop you.

**Below 769px the layout stacks.** The sidebar drops under the image, so activating a dot scrolls the page rather than moving something into view beside it. Test the dot positions at 390px, where the image is much smaller and the dots sit closer together.

**The image ships as a raw `image_tag` with no `sizes` attribute** and candidates up to 3200px. In a column that is at most about 1000px wide, the browser will fetch more than it needs.

**No alt setting.** Alt text comes from the image's own alt in Content > Files.

**Nothing here plays.** The cards are the plain sidebar cards, not the theme's audition card, so a look made of instruments is a silent block on a store built around sound. Prefer bench items, or put a `listening-rail` nearby.
