---
title: "Media grid"
description: "A two-to-six column mosaic of image, video and text cells, each claiming up to three columns and three rows, with captions plated over the media."
---

# Media grid

Media grid is a mosaic: a column grid where each cell claims up to three columns and three rows, mixing image, video and text blocks in one flow. It is where the bench-context photography stream goes, the hands and the tools and the recording corner, as opposed to the object-on-seamless shots that belong on product cards. Reach for it when you have four to six pictures that are better together than apart and none of them is strong enough to carry a row on its own. It has no heading or eyebrow setting, so a text block is how you title it, and putting that text block first is what turns a wall of photographs into a section.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Columns on desktop**. 2–6, default 4.
- **Columns on mobile**. `1 column` · `2 columns`, default `2 columns`.
- **Gap between items**. `None` · `Small` · `Medium` · `Large`, default `Small`.
- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.
- **Color scheme**. Colour scheme.

## Blocks

- **Image**. 6 settings.
- **Video**. 5 settings.
- **Text**. 9 settings.

_Available in the theme editor as **Media grid**._

<!-- generated:end -->

## Example use cases

**The bench mosaic, as the homepage runs it.** `bench-mosaic` on `index`: **Columns on desktop** 4, **Columns on mobile** 2, **Gap between items** Large, `scheme-2`, 56px top and bottom. Five blocks. First a text cell at 1×1 carrying **Subheading** "The bench", **Heading** "Where it happens" at Display M and one sentence, "Troy, New York. A room that used to belong to the bell trade." Then a 2×2 hero image captioned "Hammers, in the order they are used", two 1×1 images, and a 2×1 image closing the second row. The text cell first is what makes the arithmetic work: 1 + 2 + 1 fills row one exactly, and the 2×2 carries down into row two beside the 2×1.

**A three-up with the title in the middle.** Set **Columns on desktop** 3 and **Gap between items** Small, then order the blocks image 1×1, text 1×1 with a cell **Color scheme** of `scheme-3`, image 1×1, image 2×1, image 1×1. Giving the text cell its own scheme paints it as a solid tile woven into the pictures rather than a caption floating between them, which is the only reason the per-cell scheme setting exists. Whirligig's own instance leaves it unset, so the tile takes the section surface.

**Two pictures and nothing else.** **Columns on desktop** 2, **Gap between items** None, both blocks 1×1, captions set, no text block. Zero gap plus a caption chip on each is the tightest form and reads as a contact sheet. Use it where the section above already has a heading and this one is evidence for it, and accept that with no text block the section has no accessible name of its own.

## Notes

**There is no aspect-ratio setting anywhere in this section.** Row heights come from the images themselves. Mix a 3:2 landscape with a 4:5 portrait in the same row and the row takes the taller one, and the shorter image is cover-cropped to fill. Crop the set to one ratio before uploading, or accept the crop and check the result rather than the source. This is the single most common way a mosaic ends up looking accidental.

**Captions are plated over the media, bottom-left, in inverted colours.** The chip is `--color-text` background with `--color-background` text, so its contrast is the measured scheme ratio and not whatever pixel is behind it. It also sits on top of the picture's lower-left corner. Do not caption a cell whose subject lives in that corner.

**A caption is not alt text and neither is a filename.** The **Image** block has a separate **Alt text** field; use it, and make it describe the photograph rather than repeat the caption. Whirligig's current homepage instance has drifted here: `design-bench-hands.jpg` is captioned "The recording corner" and given the alt "A ribbon microphone one metre from a handpan on a stand", and `design-bench-shells.jpg` is captioned "The strobe tuner" with a matching alt. The words describe photographs that are not the bound files. Fix the binding or fix the words before this goes to review.

**Column spans clamp, row spans do not.** A cell's **Column span** is capped at the column count on both breakpoints, so a 3-wide cell in a 2-column mobile grid becomes full width rather than overflowing. **Row span** has no equivalent clamp; a 3-row cell in a five-block grid will pull the whole grid taller.

**Images use a raw `image_tag` with no `sizes`.** Widths run 300 to 3200, so resolution is fine, but the browser assumes 100vw and over-fetches for every cell. A six-cell mosaic is the most expensive section in this batch on a phone. Keep the block count low and the sources sensibly sized.

**Video blocks are real `<video controls>` with autoplay off, loop off and muted off.** That matches the store's rule that nothing starts making noise on its own. With no video set and a cover image set, the cell renders the still with no play control, which looks like an image cell and is fine; with neither, it renders a `.placeholder-svg`, which is a named defect on any route that gets screenshotted.

**The text cell's body and subheading are drawn as an alpha of the text colour** (0.8 and 0.72). Both composite above 4.5:1 on the schemes Whirligig uses, but the theme's own rule is that secondary text is a full-opacity checked colour rather than an alpha. If you point a text cell at a saturated scheme, measure it rather than assume it.

**No audio, and no strike-line participation.** The cells carry no `data-strike-item`, so the line crosses this section and names nothing. On the homepage that is a deliberate rest between the specification table and the bronze block.
