---
title: "Accordion"
description: "A narrow stack of native disclosure items for the questions a page has to answer but should not lead with, with optional heading and subheading blocks above."
---

# Accordion

A stack of native `<details>` items in a narrow centred column, for the things a page has to answer honestly but should not lead with: care and rust, what re-tuning costs, how a one-of-one ships, what happens if it does not sound like its recording. It is built from blocks, so the heading is a block too. Reach for it when the content is long, secondary and genuinely optional to read, and when a shopper who does want it will go looking. Do not use it to hide anything that changes the buying decision. A collapsed row is a row most people will not open, and a return policy behind a chevron reads as a policy you would rather not discuss.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Content width**. `Small` · `Medium` · `Large`, default `Medium`.
- **Open first item by default**. Off by default.
- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.
- **Color scheme**. Colour scheme.

## Blocks

- **Heading**. 3 settings.
- **Subheading**. 2 settings.
- **Accordion item**. 2 settings.

_Available in the theme editor as **Accordion**._

<!-- generated:end -->

## Example use cases

**Before you buy (product page).** `width: large`, `open_first_item: false`, `scheme-1`, padding 88 / 48. A `heading` block reading "Before you buy" at `h2`, then five `item` blocks: care and rust, re-tuning as a paid bench service, how a one-of-one ships, returns on a tuned instrument, and what every listing carries. Everything closed, because the shopper has already read the specification table and the recording above and this is the second pass.

**Questions before a first handpan (a guide page).** `width: large`, `open_first_item: true`, `scheme-2`, padding 72 / 96, heading block plus four items: which scale for a first instrument, what a ding is, why the same scale sounds different on two shells, whether a scale can be changed later. Open the first item here because the page's entire job is answering questions, so a fully collapsed stack would look like an empty page.

**Theme FAQ on the features page.** A `heading` block, a `subheading` block carrying the section handle (`accordion-content`) so a merchant reading the page can find the section by name, then five items about the audio layer, the preset count, the codebase and the accessibility guarantees. `open_first_item: true` so the first answer is visible in a screenshot.

## Notes

**There is no section heading setting.** Add a `heading` block or the section renders as a bare stack of rows with nothing above it. A `subheading` block is available and sits under the heading.

**`open_first_item` opens the first `item` block, not the first block.** Heading and subheading blocks in front of it do not shift the count.

**Items are independent.** Every `<details>` opens and closes on its own; several can be open at once and none closes another. There is no open-all control and no exclusive mode.

**Content is richtext, headings are plain text.** Links, lists and emphasis work inside an item. The summary is escaped plain text, so keep questions short: the row is a flex line with a chevron pinned right, and a long question squeezes hard at 390px.

**The width is fixed at 480 / 720 / 960px and centred, independent of `page_width`.** On a page whose other sections run to 1300px with a 28px inset, the accordion will not line up with the section header above it. That is intended as a reading measure, and it is worth knowing before you put it directly under a full-width heading.

**It renders no scroll reveal.** The section carries no motion role and is not in the motion manifest, so it appears as static content between neighbours that animate in. For a block of text that is a reasonable choice; if it sits immediately below a revealing section the difference is visible.

**No FAQ structured data is emitted.** If you want FAQ rich results in search, that needs an app or a custom-html block. This section renders `<details>` and nothing else.

**Nothing plays here.** Keep it below the recording on a product page. An accordion is where a page slows down, and this theme's pages are meant to make their sound first.
