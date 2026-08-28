---
title: "Collection list"
description: "A hand-picked grid of collection tiles with an overridable label under each, which is how a browse tile carries a scale's ding frequency or a family's price band."
---

# Collection list

The theme's browse-axis section and its most-used one: twelve placements across the homepage, the collection page, the collections index, search, 404, the product page and four page templates. Each block picks one collection and can override its title, so the label under a tile can carry information the collection name cannot, which is what makes `D Kurd · ding D3, 146.83 Hz` possible on a browse grid. Reach for it whenever a page needs to hand the reader a set of shelves you chose and in the order you chose. Use `main-list-collections` when the point is the unedited index instead.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Count unit**. Custom unit after the count (e.g. "sheets", "designs"). Leave blank for the localized "products" count.
- **Count noun (singular)**. Default “instrument”. Used when a collection holds exactly one product.
- **Subheading**. Free text, empty by default.
- **Eyebrow**. Small uppercase label above the heading. Use it to group sections into themes.
- **Heading**. Free text, empty by default.
- **Heading display size**. `None — standard heading` · `Display S` · `Display M` · `Display L` · `Display XL`, default `None — standard heading`. Render the heading at the oversized display scale (type-as-structure) instead of the standard heading size.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Display options**

- **Show product count on cards**. Off by default. Renders the collection's product count (e.g. "12 products") under the label.
- **Show arrow on cards**. Off by default. Adds a directional arrow as card furniture (pairs with the product count).
- **Enable carousel on mobile**. On by default.

**Layout**

- **Text alignment**. `Left` · `Center`, default `Center`.
- **Image aspect ratio**. `Adapt to image` · `Square (1:1)` · `Portrait (2:3)` · `Landscape (3:2)`, default `Square (1:1)`.
- **Columns on desktop**. 2–6, default 3.
- **Columns on mobile**. `1 column` · `2 columns`, default `2 columns`.

## Blocks

- **Collection**. 2 settings.

_Available in the theme editor as **Collection list**._

<!-- generated:end -->

## Example use cases

**Browse by scale.** The homepage's `by-scale`: eight blocks, one per handpan scale, each with a custom label carrying the voice (`D Kurd · warm`, `C♯ Amara · dark`), `heading_display_size: lg`, `columns_desktop: 4`, square tiles, `text_alignment: left`, count on with `count_noun: instruments` and `count_noun_one: instrument`, card arrows on, `scheme-1`, 88/88. Scale is the first question a handpan buyer asks, so it gets the display heading and the top of the browse stack.

**The same eight shelves, keyed to the axis.** On the collections index the labels drop the voice and carry the ding instead (`B Celtic Minor · ding B2, 123.47 Hz`), at `heading_display_size: md`, 4 columns, `scheme-1`, 64/48. It sits directly under `pitch-axis`, so the figures under the tiles and the figures on the frequency ruler are the same figures, read twice.

**The price ladder as a browse grid.** The collection page's `families`: six blocks labelled with their bands, from `Whirligigs · $18–48` up to `Handpans · $2,180–2,800`, `image_aspect_ratio: landscape`, `columns_desktop: 3`, arrows on, `scheme-2`, 80/80. The ladder is a fact about the catalogue rather than a strategy, and the subheading says so.

## Notes

- **Set the singular, or leave the noun alone.** Two of the eight scale collections hold exactly one instrument, so a custom `count_noun` with no `count_noun_one` renders "1 instruments" on the homepage, the collections index, search, 404 and the choosing-a-scale page at once. The schema default for the singular is `instrument`, so leaving the field untouched is safe; typing over `count_noun` and not the singular is not.
- **The count line is an alpha, and on a dark scheme it breaks a rule.** It paints `rgb(var(--color-text) / 0.72)`, which composites to roughly 4.3:1 and sits under the 4.5 body threshold. axe treats alpha-composited text as incomplete rather than as a violation, so `contrast-audit` reads clean while the count is hard to read; `interaction-gate` measures it properly. Two placements run on `scheme-3` (`search.json` `by-scale`, `product.json` `families`), which is the alpha-secondary-text-on-a-dark-ground pattern DESIGN.md forbids outright. Override `--collection-list-count-color` with a solid token there, or turn the count off on those two.
- **Tiles fall back to a product photograph, then to a placeholder.** `coll.featured_image` resolves to the collection image, then to the first product's featured image, then to `placeholder_svg_tag`. The eight scale collections get their visual identity from the Chladni plates in `nodal-field`, not from covers here, so pointing blocks at them without covers gives you grey boxes that `probe.mjs` counts.
- **The tile image has no `sizes` attribute.** `sections/collection-list.liquid:43` emits a raw `image_tag` with widths up to 3200 and no `sizes`, so the browser assumes 100vw. Eight tiles above the fold on the homepage is the worst instance of this in the theme. Fix the emitted widths, not the source files.
- **The mobile carousel overrides `columns_mobile`.** With `enable_carousel_on_mobile` on, the grid becomes a flex scroller with items clamped to `min(200px, 70vw)`, and the mobile column count is ignored. Turn the carousel off wherever the column count is the point.
- **There is no block limit.** The collections index runs nine blocks under one heading: three voices, then six families. It works, but it is two taxonomies in one grid and only the block labels tell the reader where the seam falls. Label them, or split the section in two.
- **Reading order is fixed and not a setting.** `snippets/section-header.liquid` renders eyebrow, then heading, then lede, everywhere. `subheading` is the lede; it appears under the heading, never above it. This section is where that rule was written, because it used to do the opposite.
- **No audio.** It hands the reader to a shelf; it does not play anything. On every template where it appears there is a playable section within a screen of it, which is a composition rule rather than a coincidence.
- **Leave it off** a page that already ends in one. Three page templates close with the identical six-family bridge, which is deliberate consistency, but a fourth on the same reading path starts to read as filler rather than as a route.
