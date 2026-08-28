---
title: "Collection"
description: "The collection page itself: header, sort, facet column, and a product grid whose cards each carry the instrument's own recording."
---

# Collection

The collection template's required section, and the one that does the most work on the page: it draws the header, the sort disclosure, the facet form, the product grid and the load-more. Every card routes through `product-card`, so on this catalogue each one arrives with its own audition button and its own recorded date. Two settings carry the judgment. `header_style` decides whether the collection gets a full-bleed banner, which needs a collection image that can survive a 55% black scrim and most collections do not have one. `filter_position` decides the page's geometry, and `Sidebar` reserves a 260px column whether or not anything ends up in it.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Banner eyebrow prefix**. Renders above the title as "{prefix} {collection title}".
- **Custom badge tag**. Products carrying this tag get the custom badge chip on their card.
- **Custom badge label**. Free text, empty by default.
- **Card hover effect**. `Swap to second image` · `Zoom` · `None`, default `Swap to second image`. What happens to the card image on hover. 'Swap' crossfades to a second product image. 'Zoom' scales the single image in place — the safe choice for single-image catalogs (one-of-one inventory). 'None' leaves the image still. 'Swap' automatically falls back to 'None' for products with only one image, so a card never blanks.
- **Card image hover behavior**. `Fade` · `Cut`, default `Fade`. Only applies when 'Card hover effect' is 'Swap'. How the secondary image swaps in on hover. 'Fade' transitions opacity (substrate default). 'Cut' swaps with no animation (300ms delay).
- **Heading display size**. `None — standard heading` · `Display S` · `Display M` · `Display L` · `Display XL`, default `None — standard heading`. Render the collection title at the oversized display scale.
- **Eyebrow prefix**. Default “Collection”.
- **Eyebrow count noun**. Default “designs”. The unit counted in the eyebrow (e.g. designs, sheets, products).
- **Navigation menu**. A menu. The menu of collection links to show. The link matching the current collection is highlighted.
- **Heading**. Optional label shown above the links.
- **Banner overlay opacity**. 0–90% in steps of 5, default 55%.
- **Header style**. `Plain` · `Banner — collection image`, default `Plain`. Banner renders the collection image full-width behind the title with a legibility scrim. Falls back to plain when the collection has no image.
- **Sale indicator style**. `Badge` · `Typographic`, default `Badge`. How sale states render on the card. 'Badge' emits a chip (substrate default). 'Typographic' suppresses the chip and emits a 'Reduced' text line above the price.

**Colors**

- **Banner color scheme**. Colour scheme.
- **Color scheme**. Colour scheme.

**Display options**

- **Show collection title**. On by default.
- **Show collection description**. On by default.
- **Show collection eyebrow**. Off by default. Renders a mono register line above the title — "{prefix} · N {noun}".
- **Show card eyebrow (collection // product type)**. Off by default.
- **Show vendor**. Off by default.
- **Enable filtering**. On by default. Requires Search & Discovery app filters
- **Enable sorting**. On by default.
- **Infinite scroll**. Off by default. Auto-load the next page as the shopper nears the bottom. The Load more button stays as a keyboard / no-JS fallback.
- **Show collection navigation**. Off by default. Shows a sub-collection / sibling-collection link list. With the Sidebar filter layout it sits in the sidebar column; otherwise it renders above the grid.

**Layout**

- **Products per page**. 4–48 in steps of 4, default 24.
- **Product image ratio**. `Square` · `Portrait` · `Landscape`, default `Square`.
- **Filter position**. `Sidebar` · `Top bar` · `Drawer`, default `Sidebar`. Filter UI layout is applied once the design system is in place
- **Products per row (desktop)**. 2–5, default 4.
- **Columns (mobile)**. `1` · `2`, default `2`.

## Blocks

Up to 6 blocks.

- **Promo tile**. 9 settings.


<!-- generated:end -->

## Example use cases

**The scale shelf, as shipped.** `collection.json`: `header_style: banner` painted in `scheme-3` at 55% overlay, `heading_display_size: lg`, the collection eyebrow on with prefix `Browse` and noun `instruments`, `filter_position: sidebar` carrying the `by-scale` menu under the heading "Every scale we build", `columns_desktop: 3`, `badge_tag: one-of-one` with the label "One of one", `sale_indicator_style: typographic`, `hover_effect: none`, and one `promo_tile` at position 3 spanning two columns whose copy states the recording rule. The banner is the page's one dark block, which is the per-page budget.

**A plain shelf for a family with no cover image.** `header_style: plain`, `show_collection_eyebrow: true`, `show_description: true`, `filter_position: top`, `columns_desktop: 4`. Whirligigs and bench items have no collection photograph worth bleeding full-width; the plain header puts the count line, the title and the description on stone and starts the grid roughly 200px higher up the page.

**The bench, unfiltered.** The six non-pitched items: `enable_filtering: false`, because six objects do not need facets and an empty facet column is worse than none, `show_collection_nav: false`, `filter_position: top` so no sidebar column is reserved, `badge_tag` left blank because nothing on the bench is one-of-one, `image_ratio` untouched.

## Notes

- **`filter_position: sidebar` reserves the column from a class, not from content.** The root always carries <span v-pre>`main-collection--filter-{{ filter_position }}`</span> (`sections/main-collection.liquid:21`), and at 990px and up that class turns `.container` into a `minmax(220px, 260px) 1fr` grid (`assets/theme.css:1068`). The `.main-collection__filters` div only renders when filtering resolves or `show_collection_nav` is on. With neither, the page loses 260px to an empty column and the grid narrows for no reason. Use `Top` on any shelf you have not faceted.
- **Filtering needs the Search & Discovery app.** `collection.filters` is empty without it, so the whole facet form disappears while the toolbar count and the sort disclosure stay. Timbre's scale and voice facets are store-side configuration, not theme code, and they are still outstanding at Stage 0.
- **The banner falls back to a product photograph.** `banner_image` is `collection.image` with `collection.products.first.featured_image` behind it, so a collection with no image puts one studio shot full-bleed under a black scrim. On pale-stone object photography that reads as a mistake rather than as a banner. Set a collection image or choose `Plain`.
- **The banner's secondary text is an alpha of the text colour.** The eyebrow paints at `rgb(var(--color-text) / 0.75)` and the description at `0.85`, over a photograph, on `scheme-3`. That is the pattern DESIGN.md names as an anti-pattern on a dark ground. Do not lower `banner_overlay_opacity` below 55, and measure the result rather than trusting axe, which reports alpha-composited text as incomplete rather than as a failure.
- **`image_ratio` changes the download, not the box.** `snippets/theme-overrides.liquid:398` sets every `.product-card__image-container` to `aspect-ratio: 4 / 5`, and `1 / 1` where `product.type` handles to `accessory` or `whirligig`. It renders at the end of `<body>`, after `theme.css`, so it wins the equal-specificity tie against the `--square` / `--portrait` / `--landscape` classes. The setting still governs the crop passed to `image_url`, so leaving it on `portrait` keeps the served pixels close to the box it will actually occupy.
- **Load-more never fires on this catalogue.** The largest collection holds 8 products and `products_per_page` is 24. The pagination path is real and worth keeping for a merchant with a deeper shelf; you will not see it here without lowering the page size.
- **The promo tile is first-page only.** It weaves in after `position` products and only when `paginate.current_offset` is 0, so appended pages never repeat it. At `columns_desktop: 3` with `span_two: true` it takes two of the three cells in its row, which is why position 3 puts it at the start of row two rather than mid-row.
- **The empty state is a designed surface and a reviewer will reach it.** Filter to nothing and you get a heading plus a supporting line from locales, not a bare "No products found." Check it before submitting; it is the collection state people land on by accident.
- **Audio.** Nothing here autoplays, under any setting. Each card renders the shared player's `card` variant when `custom.recording` resolves, and the card `<progress>` stays hidden until playback starts so a zero-value bar never shows as a stray dash. The masthead switch arms the strike line; the card buttons are independent of it and work whether or not the shop is armed.
- **`hover_effect: none` is a decision, not an omission.** Most instruments are one-of-one with a single photograph, so there is nothing to swap to. `Swap` falls back to `None` on its own, which makes the wrong setting harmless but still wrong.
