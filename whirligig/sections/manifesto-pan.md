---
title: "Manifesto"
description: "One sentence set at display scale, cropped off both edges and panning horizontally on scroll, with a tally of figures and a captioned image beneath it."
---

# Manifesto

Sets a single sentence at up to 150px on one line, cropped off both edges of the viewport, panning horizontally with the section's own scroll progress. You read it as an image first and as a sentence second, which is the right order for a claim the whole shop rests on. Underneath sits the evidence: a short body paragraph, a row of tally figures, a footnote, and a captioned image. Reach for it once per page at most, and only for a sentence that deserves that much type. A second one on the same page turns a statement into a device.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Panning line**. Default “Every instrument is recorded before it ships.”. Set at display scale and cropped off both edges. It pans as the visitor scrolls.
- **Body**. Default “Not a stock sample of the model — that instrument, that day,…”.
- **Footnote**. Default “Six bench items — bags, stands, mallets, a cushion, the…”.
- **Image**. Image.
- **Image alternative text**. Free text, empty by default.
- **Caption title**. Default “The recording corner”.
- **Caption**. Default “Same room, same microphone, same distance — one metre, slightly…”.
- **Color scheme**. Colour scheme.
- **Top padding**. 0–160px in steps of 4, default 64px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

## Blocks

Up to 6 blocks.

- **Tally figure**. 2 settings.

_Available in the theme editor as **Manifesto**._

<!-- generated:end -->

## Example use cases

**The homepage claim.** Panning line "Every instrument is recorded before it ships.", the body paragraph naming what the claim costs to keep, and four tally blocks: 44 objects, 38 recordings, 266 playable notes, 0 stock samples. The image is the recording corner, captioned with the microphone distance. The zero is the load-bearing figure. It is the number the shop does not have, and it is what makes the other three mean anything.

**The closing block on an article.** Panning line "The recording is the listing.", two tallies (38 recordings, 0 stock samples), the bench-hammers image, padding 88 / 72. Shorter sentence, fewer figures, same structure, so the pattern reads as the site's voice rather than as a homepage set piece.

**A claim with no figures.** Set the panning line and the body, add no tally blocks, and the figure row does not render at all. Use it where the sentence is the whole point and the counts live in another section on the same page.

## Notes

- **The sentence never wraps.** It is one line with `white-space: nowrap` at `clamp(56px, 11vw, 150px)`. Past roughly eight words the crop is severe enough at 390px that only two or three words are on screen at any moment, and the reader is assembling the sentence from a moving window. Write it to be read at the width you care about, then check it at 390px.
- **Check the reduced-motion state, because it is the one that fails.** Under `prefers-reduced-motion` the pan is dropped and the track becomes a normal horizontal scroller, so the sentence stays readable and reachable instead of being cropped with no way to see the rest. A sentence that was too long becomes a scrollbar there rather than a nice crop.
- **Without JavaScript** the line renders at its rest position and does not move, cropped at its starting offset. The words are in the markup, so nothing is hidden from a reader or a crawler; only the motion is missing.
- **The panning line is an `<h2>` and sits in the heading order.** Write it as a heading, not as a caption or a strapline. It will be read out as one.
- **Up to six tally blocks.** The row is `repeat(auto-fit, minmax(150px, 1fr))` on a 1px rule with hairline dividers, so two, three or four figures all sit correctly across a desktop width. Five or six will wrap to a second row, which reads as a table rather than as a statement.
- **Tally numbers are free text and nothing keeps them true.** They will go stale the first time the catalogue changes. If a figure cannot be maintained, leave it out. A wrong count inside a section arguing for accuracy costs more than the count was worth.
- **The image is optional.** Without it the grid collapses to a single column and the body, tallies and footnote run at full measure. With it, the caption title sets in `--bronze-deep` above an 11px mono caption, and the column is capped at 30% of the width, so choose an image that survives being small.
- **Two settings will drift out of the row's own copy.** The body is rich text, the footnote is plain text, and both are written per template. When the same claim appears on more than one template, they have to be edited in more than one place.
- **Leave it off** a page that already has a display-scale moment, and off any page where the visitor arrived to buy something. This section slows the reader down deliberately, which is only worth doing once.
