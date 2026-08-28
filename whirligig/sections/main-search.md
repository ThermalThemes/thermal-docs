---
title: "Search"
description: "The search results page: the query form, the results grid, and the zero-results state that hands off to the shelf rack."
---

# Search

The search template's main section: the query form, the facet UI, the results grid, the load-more and the no-results state, and it carries the page's only `h1`. Product results are `product-card`s, which makes a search page the one merchandising surface in the theme where a shopper can put two scales next to each other and hear both without navigating anywhere. Two settings carry the judgment. `search_type` decides whether articles and pages share the results grid with product cards, which is a layout question as much as a relevance one. `enable_filtering` renders a facet UI that, as shipped, is not wired to anything; read the first note before you leave it on.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Search type**. `All results` · `Products only`, default `All results`.
- **Card hover effect**. `Swap to second image` · `Zoom` · `None`, default `Swap to second image`. What happens to the card image on hover. 'Swap' crossfades to a second product image. 'Zoom' scales the single image in place — the safe choice for single-image catalogs. 'None' leaves the image still. 'Swap' falls back to 'None' for products with only one image, so a card never blanks.
- **Card image hover behavior**. `Fade` · `Cut`, default `Fade`. Only applies when 'Card hover effect' is 'Swap'.
- **Visible label text**. Used when 'Show visible label' is on. Leave blank to use the substrate locale string.
- **Sale indicator style**. `Badge` · `Typographic`, default `Badge`.

**Display options**

- **Show heading**. On by default.
- **Show visible "Search" label above input**. Off by default. When off, the label is rendered via .visually-hidden for screen readers only (substrate default). When on, the label appears as a meta-typography element above the input.
- **Enable faceted filtering**. On by default. Renders filter UI from search.filters (Search & Discovery configuration). Theme Store §4 required feature.
- **Infinite scroll**. Off by default. Auto-load the next page of results as the shopper nears the bottom. The Load more button stays as a keyboard / no-JS fallback.

**Layout**

- **Results per page**. 4–48 in steps of 4, default 24.
- **Results columns (desktop)**. 2–5, default 4.
- **Filter position**. `Sidebar` · `Top`, default `Top`.

## Blocks

None. The section renders from its own settings.


<!-- generated:end -->

## Example use cases

**Whirligig's search, as shipped.** `search.json`: `search_type: product,article,page`, `show_heading: true`, `show_visible_label: true` with a `label_text` that names the five things the index answers to (scale, voice, family, material, frequency) and gives a worked example of each, `results_per_page: 24`, `columns_desktop: 4`, `hover_effect: none`, `sale_indicator_style: typographic`. The visible label earns its space here because a shopper has no way to guess from a magnifying glass that "34 tines" is a query this shop understands.

**Products only, for a store with a thin blog.** `search_type: product`, everything else unchanged. One card type in the grid instead of three, which removes the layout problem of a bordered page result sharing a four-column row with a product card.

**The zero-results composition.** This section's own empty state (a line naming the term, a help line and a primary button) stacked above a `shelf-rack` in `search_zero` mode and a `collection-list` of the eight scale shelves. A failed search then answers with four playable handpans and eight routes rather than with a sentence. Measured on the deployed theme before this shape existed, no-results gave 60 characters and zero links.

## Notes

- **The facet UI does not work. Turn `enable_filtering` off until it does.** The section renders checkboxes, disclosure groups and a price range from `search.filters` (lines 64 to 190), but the root is a plain `<div class="main-search">` rather than the `<collection-filters>` custom element that `assets/theme.js:484` upgrades, and the inputs sit outside any `<form>` (the search form closes at line 39). Without JavaScript there is nothing to submit; with it there is nothing bound. The price "Apply" is a `type="submit"` with no form to submit. Only the active-filter removal anchors are real links, and since no filter can ever be applied they never render. `main-collection` does this correctly and is the pattern to copy.
- **`filter_position` has no effect.** `Sidebar` and `Top` render identically, stacked above the results. The sidebar grid is keyed off `.main-collection--filter-sidebar` on the collection section's root, and nothing in the theme styles `[data-filter-position]`.
- **The zero-results copy belongs to a different theme.** `sections.main_search.no_results_help` reads "Nothing on the wall under that name. Try a shorter word, an artist, or browse the whole press." and `no_results_action` reads "Browse all designs". Both are in `locales/en.default.json` and repeated verbatim, untranslated, in de, es, fr and it. They render directly above the shelf rack that says "We do not make one of those."
- **`autofocus` is on the input** (line 29). On a results page the browser scrolls to the field and, on a phone, opens the keyboard, before the shopper has seen a result. It also competes with the live region below it.
- **The whole results area is one `aria-live="polite"` region.** A Load more append is announced as the entire grid rather than as the new cards, and the count line inside it is announced separately on top of that.
- **`show_heading: false` leaves the page with no `h1`.** The heading text is not editable either; it comes from `sections.main_search.heading`. Nothing else on the search template supplies an `h1`, so turning it off is a structural change, not a cosmetic one.
- **There is no colour scheme setting.** The root carries neither `.section` nor `.color-scheme-N`, which is correct for a `main-*` chrome surface, but it also means the search page paints whatever the layout establishes and cannot be recoloured from the editor. Recolour the sections below it instead.
- **Column settings apply above 989px only.** The section hardcodes two columns at 989px and one at 599px, so `columns_desktop` is a desktop statement and there is no mobile column control.
- **Audio.** Product results carry the shared player's `card` variant, one recording at a time store-wide, nothing autoplaying. Article and page results carry nothing, which is the visible seam whenever `search_type` includes them.
- **Leave the visible label off** on a store whose facets are conventional. It is a meta-typography line above the input, and on a shop where "search" means "search", it is a sentence the shopper does not need.
