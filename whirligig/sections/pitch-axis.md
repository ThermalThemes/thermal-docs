---
title: "The register"
description: "Lays a collection out on a logarithmic frequency axis, so a product's horizontal position is its pitch and the shape of the section is the shape of the catalogue."
---

# The register

The signature section, and the only one in the theme with no column grid. A card's left margin is a function of its fundamental frequency, read from a precomputed `custom.pitch` metafield, so low instruments pile up on the left, high ones strand at the right margin, and two objects close in pitch collide on purpose. It is also the only section that feeds the strike line: every card is a `[data-strike-item]`, so scrolling drags the catalogue across the fixed bronze rule and, once the switch in the masthead is armed, each one sounds as it crosses. Reach for it when horizontal position genuinely carries meaning. Without pitch data it does not degrade into a nice grid, it renders nothing at all, and that is the point rather than a shortcoming.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

Lays a collection out on a pitch axis: a product's horizontal position is its fundamental frequency, so the shape of the layout is the shape of the catalogue. Needs a `custom.pitch` JSON metafield on each product.

- **Collection**. Use a collection with MANUAL sort order, arranged low pitch to high.
- **Maximum instruments**. 6–50, default 40.
- **Eyebrow**. Default “The register”.
- **Heading**. Default “Thirty-eight instruments, laid out by what they sound like”.
- **Heading size**. `Standard` · `Small` · `Medium` · `Large` · `Extra large`, default `Large`.
- **Lede**. Default “Low on the left, high on the right. Where two cards collide,…”.
- **Footnote**. Default “Six bench items — bags, stands, mallets, a cushion, the…”.
- **Color scheme**. Colour scheme.
- **Top padding**. 0–160px in steps of 4, default 56px.
- **Bottom padding**. 0–160px in steps of 4, default 56px.

## Blocks

None. The section renders from its own settings.

_Available in the theme editor as **The register**._

<!-- generated:end -->

## Example use cases

**The whole catalogue, on the homepage.** `collection: the-register`, `max_items: 40`, **Heading size** `Large`, `scheme-1`, 72px of padding either side. Thirty-eight pitched objects run from a bullroarer whose span starts at 55 Hz, off the left edge, to a desk bell at 784 Hz, off the right. The footnote states what the position actually is: the fundamental frequency on a logarithmic axis from A2 to D5, measured rather than arranged. The collections index runs the same section with the other footnote, the one that names the six bench items carrying no pitch, because the honest version of a data layout is the one that says what it left out.

**A scale chooser.** On the *Choosing a scale* page: `collection: by-scale`, the same axis, heading "Every scale we build, on one axis". The section does the argument for you. Choosing a scale is choosing a stretch of one line, and a reader can see which scales overlap before reading a word about them.

**A short recent cut above the article list.** On the blog index: `collection: off-the-bench`, `max_items: 12`, padding 72 / 96. Twelve cards is enough for the axis to read as a measurement and short enough that it does not become the page. Use a lower `max_items` anywhere the register is supporting evidence rather than the subject.

## Notes

- **Every product needs `custom.pitch`.** It is JSON carrying `low`, `high`, `ref`, `refLabel`, `x`, `xLow`, `xHigh` and an optional `span`, where `x` is the precomputed log position on an A2 to D5 axis. Liquid has no logarithm, which is why the value is computed upstream and stored. Products without the metafield are **skipped silently, with no editor hint**: point this section at an ordinary collection and you get a heading, a footnote, and nothing between them.
- **Sort order is the collection's own manual order.** Liquid cannot sort on a nested metafield, so the section renders the collection as it finds it. Set the collection to **Manual** and arrange it low pitch to high. Any other sort still positions every card correctly, because position comes from the metafield, but the DOM order (and therefore tab order, and the order a screen reader reads) will not match the visual order. That looks like a rendering bug and is not one.
- **Cards that leave the page are clipped, not scrollable.** Position resolves to `margin-left: max(0px, calc(var(--at) * 0.78%))`, so the axis occupies 78% of the body and the rest is card width. An `x` below zero is clamped to the left edge and flagged with a bronze left border; an `x` above 100 pushes the card past the right edge, where the section's `overflow-x: clip` cuts it. The clip is deliberate: the page body must never scroll sideways. The cost is that part of an extreme card is unreachable, which is acceptable only because the frequency, price and title are all present as text on the card itself.
- **Below 900px there is no axis.** Gridlines and span bars are hidden and the margins collapse, leaving an ordered list that is still in pitch order with the frequency on every row. The idea survives at phone width rather than being faked with a squashed version of it. Review the mobile frame as its own composition; it is not a narrow copy of the desktop one.
- **The section renders no audio player.** It publishes `data-strike-src`, `data-strike-start` and `data-strike-end` from the first entry of the recording's sprite, and the strike line plays that one note when armed. Nothing sounds before the masthead gesture, ever. A product with a recording but no `sprite` publishes no source: it holds its position and stays silent, which is correct and worth knowing before you go looking for a bug.
- **Whirligigs render as spans, not points.** A product whose pitch carries a `span` draws a dashed bronze bar at its true low and high positions, crossing whatever else occupies that stretch. The overlap is the data. Do not tidy it.
- **Three octave gridlines render, at C3, C4 and C5.** The section's own comment and the design contract both describe four including A2; A2 is not in the markup.
- **One per page is the intent.** The strike line reads every `[data-strike-item]` in the document and picks the nearest to the rule, so a second register does not break anything, it simply extends the same set. It does dilute the idea, and the HUD will read out cards from two different axes as the visitor scrolls.
- **Leave it off** a page whose products have no pitch, and off any template where the products are chosen for a reason other than what they sound like. On those pages the **Listening rail** carries the audio and a normal product grid carries the merchandising.
