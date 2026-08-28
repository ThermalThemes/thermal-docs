---
title: "Recently viewed"
description: "A per-visitor grid of products they have already opened, built client-side from localStorage, with a card that is not the theme's product card."
---

# Recently viewed

Recently viewed rebuilds a visitor's own trail: the products they have opened, newest first, drawn from a list this section keeps in their browser's `localStorage`. It is genuinely useful in a catalogue where the buying decision is a comparison, which describes a shop selling one-of-one instruments almost exactly. It is also the one grid in this theme where a product arrives without its recording, because the card is assembled in JavaScript rather than by the theme's own product card, so a visitor comparing two handpans here cannot audition either of them. Reach for it low on a product page, and read the Notes first: the tracking only happens where the section itself is rendered.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Products to show**. 2–12 in steps of 2, default 6.
- **Columns on desktop**. 2–6, default 4.
- **Columns on mobile**. `1 column` · `2 columns`, default `2 columns`.
- **Enable carousel on mobile**. On by default.
- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.
- **Color scheme**. Colour scheme.

## Blocks

- **Theme blocks**. Any block in the theme’s shared block library.

_Available in the theme editor as **Recently viewed**._

<!-- generated:end -->

## Example use cases

Whirligig's own demo does not use this section. These are the three placements that work, and all three assume it is also on the product template so it has something to remember.

**At the foot of the product page, below the recommendations.** One heading block reading "You were looking at", **Products to show** 4, **Columns on desktop** 4, **Columns on mobile** 2, **Enable carousel on mobile** on, padding 64 and 64, scheme-1. Four across at four columns is one clean row and the only configuration where the hard-coded `sizes` attribute is roughly honest about how wide a card is. Keep it below `product-recommendations` so the page ends with something new rather than something already seen.

**On the cart page, above the bench items.** **Products to show** 4, **Columns on desktop** 4. The cart already carries a `shelf-rack` and a `featured-collection`, so this is a third grid on one page: use it only if the cart is short. It will not render at all for a visitor whose first page was the cart, which on that template is most of them.

**On the collection page, at the foot.** **Products to show** 6, **Columns on desktop** 3 to sit under a filtered grid without repeating its rhythm. Note that 3 columns puts each card at roughly 420px on a 1300px container while the markup tells the browser to fetch for 25vw, so the images will be under-resolved; see the Notes and prefer 4.

## Notes

**Whirligig does not use this section.** Nothing in `dist/templates/` references `recently-viewed`.

**The tracking script lives inside this section, so the section must be on the product template or it never has anything to show.** The inline script records the current handle only when the section is rendered on the page being viewed. Put Recently viewed on the cart page alone and it will be empty on every visit forever, with no error and nothing in the editor to explain it. If you want it anywhere, put it on `product.json` first.

**It hides itself until it has products.** `recently-viewed-products:not([data-loaded])` is `display: none`, so a first-time visitor sees nothing at all, header blocks included. That is the right behaviour on the storefront and a confusing one in the theme editor, where the preview's storage starts empty. Browse two product pages in the preview before deciding it is broken.

**The card is built in JavaScript and it is not the theme's product card.** It renders an image, a vendor line, a title and a price. It does not render the audition player, so no product here carries its recording; it does not render the `custom.scale · custom.voice` eyebrow, so the pitch descriptor every other grid shows is missing; and it carries no one-of-one chip, no sold-out badge and no `data-strike-item`. On a theme whose whole thesis is that a recording is a product attribute, this is the grid where that stops being true. Weigh it before putting the section on the product page.

**The vendor line has no CSS anywhere in the theme.** `product-card__vendor` appears in no stylesheet, so it renders as unstyled body text reading "Timbre" on every card, where the sibling `product-recommendations` section renders a styled `product-card__eyebrow` in its place. The two sections were clearly the same code once and have drifted. `dist/sections/recently-viewed.liquid`.

**`sizes` is hard-coded and ignores your column count.** Every card declares `sizes="(min-width: 769px) 25vw, 50vw"` no matter what **Columns on desktop** is set to, and the srcset stops at 800w. At 2 or 3 columns a card is far wider than 25vw, so the browser fetches a narrower file than it needs and the image is displayed above its native width. Shopify never upscales, so the result is a soft image, which is the exact absolute defect that preceded a previous decline. Use **Columns on desktop** 4, or fix the attribute.

**The grid is an `aria-live="polite"` region and the whole card list is written into it at once.** A screen reader gets six products read out unprompted on page load. The content is not a status update and does not need to be announced; treat the live region as a defect rather than a feature.

**Product titles and vendor names are injected unescaped.** The sibling `product-recommendations` section defines an `esc()` helper and uses it; this one interpolates `p.title` and `p.vendor` straight into `innerHTML`. The values come from the store's own admin rather than from a visitor, so this is a rendering hazard rather than a security one, but a title containing an angle bracket will break the card.

**Prices are formatted by the browser, not by the shop.** `toLocaleString` with the active currency, so the shop's own money format is ignored and a variant product shows its lowest price with no "From". A price here can therefore differ in punctuation from the identical price on the card above it.

**There is no motion.** No `{% render 'motion' %}` anywhere in the section, and cards injected through `innerHTML` carry no `data-motion`, so this grid appears instantly while everything around it reveals. It also counts against the theme's motion coverage.

**There is no heading setting.** The header comes from blocks and the preset ships one reading "Recently viewed". Pasted into template JSON by hand, the grid arrives with nothing naming it.

**Storage is capped at 20 handles and lives only in that browser.** Nothing syncs across devices, nothing survives a cleared cache, and **Products to show** slices the front of that list. Private-window visitors get an empty section every time.
