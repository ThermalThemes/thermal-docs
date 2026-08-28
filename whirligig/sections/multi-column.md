---
title: "Multi-column"
description: "One to six equal text columns under a shared section header, each an optional image with a heading, a paragraph and a link, with an optional mobile carousel."
---

# Multi-column

Multi-column is the plainest section in the library and is meant to be: a section header, then two to six equal columns, each an optional image with a heading, a paragraph and a link. Whirligig uses it for taxonomy rather than for benefits. When a store's browse axis is a word rather than a category, the columns are how you teach the word before you ask anyone to filter by it. Reach for it when the set is small, closed and parallel: three voices, four materials, five variants of one thing. It is the wrong section for a benefits row of icons and adjectives, which is what `trust-icons` is for, and the wrong section for anything with a price, which is what `featured-collection` is for.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Subheading**. Free text, empty by default.
- **Eyebrow**. Small uppercase label above the heading. Use it to group sections into themes.
- **Heading**. Free text, empty by default.
- **Heading display size**. `None — standard heading` · `Display S` · `Display M` · `Display L` · `Display XL`, default `None — standard heading`. Render the heading at the oversized display scale (type-as-structure) instead of the standard heading size.
- **Enable carousel on mobile**. On by default.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Layout**

- **Columns on desktop**. 1–6, default 3.
- **Columns on mobile**. `1 column` · `2 columns`, default `1 column`.
- **Column content alignment**. `Left` · `Center`, default `Left`.

## Blocks

- **Column**. 5 settings.

_Available in the theme editor as **Multi-column**._

<!-- generated:end -->

## Example use cases

**Teaching the voice facet, on the homepage.** `choose-a-scale` on `index`: **Eyebrow** "Voice", **Heading** "Bright, warm, or dark" at Display L, **Subheading** "Three words that do more work than any specification.", **Columns on desktop** 3, **Columns on mobile** 1, **Column content alignment** Left, `scheme-1`, 56px top and 24px bottom. Three column blocks, no images, each naming the instruments that live there: bright is fast attack and clear upper partials, E La Sirena and D Minor; warm is round and forgiving, D Kurd, B Celtic Minor, G Oxalis; dark is low and slow to speak, C♯ Amara, F Low Pygmy, A Hijaz. Each links to its `voice-*` collection. The section exists because voice is a storefront facet, and a facet nobody has defined does not get used.

**The same three words with counts, on the collection page.** `voice-guide` on `collection`: shorter copy, **Heading display size** Display M, **Enable carousel on mobile** on, 80px top and bottom, and each column ends with an instrument count: eight bright, ten warm, seven dark. On a collection page the shopper is already filtering, so the useful addition is how much is behind each door.

**Five variants of one implementation, on the features page.** `audio-variants` on `page.theme-features`: **Columns on desktop** 5, **Heading display size** Display S, **Enable carousel on mobile** on, **Eyebrow** "Audio", 48px top and bottom. One column per player variant, `card`, `inline`, `full`, `field`, `strike`, each describing what that call site does and what it refuses to do. Five columns is the ceiling worth using; at six the paragraph measure gets too narrow to read.

## Notes

**This section uses the shared `section-header` snippet**, so **Eyebrow**, **Heading** and **Subheading** always render in that order and an eyebrow-only section still renders its eyebrow. Most sections in the library nest the eyebrow inside the heading branch and lose it; this one does not. If you are copying a header pattern, copy this one.

**A column with both a link and a link label emits two links to the same place.** The heading becomes a link, and **Link label** renders a second link below it. `voice-guide` on `collection` currently sets the label to the same word as the heading, so the column contains "Bright" linking to `/collections/voice-bright` twice over. Either write a label that says something the heading does not ("Eight bright instruments"), or leave **Link label** blank and let the heading carry the link on its own.

**Column blocks have no alt-text setting.** The image renders through a raw `image_tag` with no `alt` argument, so the only alt available is whatever is set on the file in Shopify admin. If you are adding images to columns, set the alt on the file first. Neither of Whirligig's three instances uses images, which is why this has not bitten yet.

**Images do not route through `responsive-image` and carry no `sizes`.** The widths run 200 to 3200 but the browser assumes 100vw, so a 200px-wide column will fetch a full-viewport image. At five or six columns that is a real payload cost for decorative pictures. Text-only columns cost nothing, which is another argument for using this section as taxonomy rather than as an icon row.

**Columns are equal and they do not wrap.** Six blocks at **Columns on desktop** 3 gives you two rows of three; five blocks gives you three then two, and the orphan row is visible. Keep the block count a multiple of the column count, or change the column count to match the content.

**The mobile carousel is on by default, so omitting it is not the same as declining it.** With **Enable carousel on mobile** on, the columns become a horizontal swipe strip; off, they stack. Stacked is better when the columns are a definition set the shopper should read all of, and a carousel hides column three behind a gesture. `choose-a-scale` on `index` does not set the field at all and therefore inherits the carousel, which is worth a second look: the homepage instance is the one teaching the word, and it is the one where all three definitions should be visible at once.

**Nothing here plays.** These columns describe the audio layer, they do not host it. On a page whose argument is that you can hear the object, a run of text columns is a pause. Put it after the register and before the newsletter, which is where both live instances sit.
