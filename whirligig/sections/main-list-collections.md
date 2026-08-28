---
title: "Collections list"
description: "The full, unedited index of every published collection, and the only section on the collections template that emits an h1."
---

# Collections list

Lists every published collection in the store, in the store's own order, with no picker, no ordering control and no limit. It is the honest index: whatever exists, appears, including the internal shelves a merchant built to drive facets. Reach for it when the point of the page is completeness and the merchant wants the whole list on one screen. Reach for `collection-list` instead the moment you want a chosen subset, a label under a tile that the collection name does not carry, or a count in a noun the shop actually uses.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Eyebrow**. Small uppercase label above the heading. Use it to group sections into themes.
- **Heading**. Default “Collections”.
- **Show product count**. Off by default.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Layout**

- **Image aspect ratio**. `Adapt to image` · `Square` · `Portrait` · `Landscape`, default `Square`.
- **Columns on desktop**. 2–6, default 3.
- **Columns on mobile**. `1` · `2`, default `2`.

## Blocks

None. The section renders from its own settings.


<!-- generated:end -->

## Example use cases

**The catalogue index, as shipped.** `list-collections.json`: eyebrow "The catalogue", heading "Collections", `show_product_count: true`, 3 columns desktop and 2 mobile, `image_aspect_ratio: portrait`, `scheme-1`, 56/56. It sits below `pitch-axis`, so the reader meets the frequency register first and the shelf list second, and above the picked `collection-list` grids that do the actual merchandising.

**A contact sheet for a deeper store.** Twenty shelves or more: `columns_desktop: 6`, `image_aspect_ratio: square`, `show_product_count: false`, padding 40/40. The tiles get small enough that the label carries the page, which is the right trade when the list is long and the covers are inconsistent.

**A pre-launch audit pass.** `columns_desktop: 2`, `image_aspect_ratio: landscape`, `show_product_count: true`, run once and then reverted. At that size every collection missing a cover image shows Shopify's grey placeholder at a scale you cannot miss, and every collection holding a single product exposes the pluralisation problem below.

## Notes

- **The eyebrow and the h1 are both inside the heading branch.** `sections/main-list-collections.liquid:12` wraps the eyebrow and the `<h1>` in `if section.settings.heading != blank`. Clear the Heading field and the collections index loses its title, its eyebrow and its only `h1` in one move. `collection-list` fixed this by routing through `snippets/section-header.liquid`; this section still carries the substrate pattern.
- **The count renders "1 products".** `sections.main_list_collections.product_count` is a flat string, <span v-pre>`"{{ count }} products"`</span>, with no `one` form, so a collection holding a single item reads wrong in every locale. Two of Timbre's eight scale shelves (E La Sirena, B Celtic Minor) hold exactly one instrument. `collection-list` has a `count_noun_one` setting for precisely this case; this section does not. Either give the locale key plural forms or leave `show_product_count` off.
- **The tile image has no `sizes` attribute.** `sections/main-list-collections.liquid:27` emits a raw `image_tag` with widths up to 3200 and no `sizes`, so the browser assumes 100vw and can pull a 2400px file into a 380px tile. On a twenty-tile index that is most of the page's performance budget. Route it through `{% render 'responsive-image' %}` or add a `sizes` that matches the column count.
- **A collection with no image and no products renders `placeholder_svg_tag`.** `probe.mjs` counts `.placeholder-svg` and DESIGN.md names it as an anti-pattern on any shot route. Give every collection a cover, or accept grey boxes on the index.
- **`Adapt to image` has no CSS rule behind it.** There is no `.main-list-collections__media--adapt`, so the container gets no aspect ratio and tile heights come from the photographs. One landscape cover among eight squares gives you ragged rows. Pick a fixed ratio.
- **No motion.** The section renders no `{% render 'motion' %}` at all, so its tiles sit outside the reveal pass while `pitch-axis`, `collection-list` and `listening-rail` around them on the same page all move.
- **No audio, deliberately.** This is a list of shelves, not of objects. On the collections index the sound is above it in `pitch-axis` and below it in `listening-rail`. Do not add a player here.
- **There is no exclusion setting.** Automated collections, smart collections built to serve facets and any internal grouping all appear alongside the real departments. Leave the section off a store whose collection list is not entirely meant to be read.
