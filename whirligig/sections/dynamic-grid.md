---
title: "Dynamic grid"
description: "A four-to-twelve column canvas where every item names its own column start, column span, row start and row span, independently on desktop and mobile."
---

# Dynamic grid

Dynamic grid is the closest thing in the library to a free layout: a column canvas from four to twelve wide where every item states its own column start, column span, row start and row span, and states them separately for desktop and mobile. Where `media-grid` flows and lets items claim extra cells, this one places. That is the whole difference, and it is the reason to reach for it: when you know exactly where a thing should sit and the flow keeps putting it somewhere else. The cost is that you are now maintaining eight numbers per item, and a layout built this way does not survive adding a block in the middle. Use it for a composed set that is finished, not for a grid you expect to edit.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Columns on desktop**. 4–12, default 6.
- **Columns on mobile**. 2–6, default 2.
- **Gap between items**. `None` · `Small` · `Medium` · `Large`, default `Small`.
- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.
- **Color scheme**. Colour scheme.

## Blocks

- **_dynamic-grid-item**. 0 settings.

_Available in the theme editor as **Dynamic grid**._

<!-- generated:end -->

## Example use cases

**The mosaic wall, as the features page runs it.** `wall` on `page.theme-features`: **Columns on desktop** 8, **Columns on mobile** 2, **Gap between items** None, `scheme-1`, 48px top and 64px bottom. Five items. A text item at column 1 span 3, row 1 span 2, headed "dynamic-grid" at Display M; the handpan anatomy photograph at column 4 span 5, row 1 span 3; the hammers at column 1 span 3, row 3 span 2; the bronze bowls at column 4 span 2, row 4; and a second text item at column 6 span 3, row 4, headed "Placement, not flow". At zero gap the five tiles butt into one continuous surface, which is what makes the section a wall rather than a grid.

**A two-thirds picture with a caption block hard against it.** **Columns on desktop** 6, **Gap between items** None. One image item at column 1 span 4, row 1 span 2; one text item with its own **Item color scheme** at column 5 span 2, row 1 span 2. The colour scheme is what makes the text half read as a painted panel welded to the photograph. This is the composition dynamic-grid does that `image-with-text` cannot, because here the two halves share a single grid rather than sitting in a split row.

**A deliberately uneven three-up.** **Columns on desktop** 12, **Gap between items** Small, three image items at spans 5, 4 and 3, all row 1, starts left to right at 1, 6 and 10. Twelve columns is what buys you ratios that are not thirds. Set the mobile spans to 2, 1 and 1 in a 2-column mobile grid so the widest picture leads and the other two pair below it.

## Notes

**The item block reports zero settings in the reference above, and that is a generator gap rather than the truth.** `_dynamic-grid-item` is a private block living in `dist/blocks/_dynamic-grid-item.liquid`, and the docs generator does not resolve private block schemas. It has ten settings: **Image**, **Heading**, **Heading display size** (None, Display S, Display M only), **Text**, **Button link**, **Button label**, **Item color scheme**, and the eight placement ranges under **Desktop placement** and **Mobile placement**.

**A start of 0 means automatic, not column zero.** Leave **Column start** and **Row start** at 0 and the item flows into the next available hole. Set them and the item is pinned. Mixing the two in one grid is where this section gets confusing, because `grid-auto-flow: dense` is on: an unplaced item will backfill a gap left earlier in the grid rather than appear after the item you wrote before it.

**An image-only item is always square.** An item with a picture and no heading, text or button gets `aspect-ratio: 1 / 1` on its media, because a cover image in an auto row with no sibling content collapses to zero height. Row span therefore controls how many rows the item claims, not how tall the picture is. If you need a tall picture, give the item some text so the aspect ratio rule stops applying, or accept the square.

**There is no alt-text setting on the item block.** The image renders through a raw `image_tag` with no `alt` argument, so the only alt available is whatever is set on the file in Shopify admin. `media-grid` has an **Alt text** field and this section does not, which is worth knowing before you choose between them for a picture that carries meaning. Set the alt on the file first.

**Mobile cannot go to one column.** **Columns on mobile** ranges from 2 to 6, so at 390px the narrowest a cell can be is half the screen. Any item that must be full width on a phone needs **Column span (mobile)** set to the mobile column count explicitly; the default is 1.

**An oversized span is safe, an oversized start is not.** A span larger than the grid simply runs to the grid edge. A start beyond the last column pushes the item into an implicit column outside the tracks, which is how a tile ends up hanging off the right of the section. Check every **Column start** plus **Column span** against **Columns on desktop** before shipping.

**Gap None is the interesting setting and the unforgiving one.** With no gap the tiles share edges, so any mismatch in tone or crop between two adjacent photographs is visible as a seam. The grading rule in the design contract exists for exactly this: normalise white point, black point and saturation across the set before assembling a zero-gap wall.

**No section header, no audio, no strike-line participation.** There is no heading or eyebrow setting, so a text item is the only way to title the section. The items carry no `data-strike-item`, so the line names nothing as it crosses.
