---
title: "Overture"
description: "The homepage first screen: a display headline the strike line cuts in half, set beside the hero image and never over it."
---

# Overture

The first screen, built around one rule: type is never set over the photograph. The panel and the image are siblings in a two-column grid, so the contrast of every run of text is the measured token ratio rather than whatever pixel happens to be behind it, at every width, including the ones nobody tested. The headline renders twice, one solid layer and one 1px outline, clipped against each other at the pixel the strike line reports, so the words develop as the visitor scrolls past. Use it as the homepage opening and nowhere else: it renders an `<h1>`, it has no padding settings, and it is sized to fill the first screen rather than to sit politely in the middle of a page.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Eyebrow**. Default “Tuned by ear in Troy, New York”.
- **Headline**. Default “Hear it first”. Set at display scale and cut in half by the strike line. Three or four short words read best.
- **Lede**. Default “Forty-four objects. Forty-four recordings. Every instrument is…”.
- **Primary button**. Default “Browse by scale”.
- **Primary link**. A link.
- **Secondary button**. Default “How we record”.
- **Secondary link**. A link.
- **Image**. Image. Sits beside the type, never behind it. Upload at 2400px or wider on the long edge.
- **Image alternative text**. Free text, empty by default.
- **Footnote strip**. Default “Troy, New York · Tuned by ear, verified against a meter · $18 —…”.
- **Color scheme**. Colour scheme.

## Blocks

None. The section renders from its own settings.

_Available in the theme editor as **Overture**._

<!-- generated:end -->

## Example use cases

**The shipped homepage.** Eyebrow "Tuned by ear in Troy, New York", headline "Hear it first" (three words, three stacked lines), a lede whose first sentence is bold and carries the two counts that make the claim checkable, primary CTA "Browse by scale" to `/collections/by-scale`, secondary "How we record" to `/pages/how-we-record`, the hero handpan image, and a footnote strip carrying four facts: place, method, price range, note count. The footnote is where the numbers go, so the lede can stay two sentences.

**A type-only opening.** Leave **Image** empty and the right column paints as a plain `--panel` field. Keep the headline to three short words and put the numbers in the footnote strip. It reads as a deliberate type composition, which is a better outcome than a small photograph stretched across half a screen, and it is the right call for a shop whose photography is not ready.

**Retuning the opening for a scale drop.** Change only the headline and the footnote strip: "D Kurd, four ways", footnote listing the four dings. Leave **Secondary button** blank and a single CTA renders. Everything else stays fixed, which is the point of the section: the composition is settled and the copy is the variable.

## Notes

- **Three or four short words in the headline.** Each word is its own line, set by markup, which is also why it cannot break mid-word. At `clamp(64px, 15.2vw, 212px)` with line-height 0.86, a five-word headline is five stacked lines and will push the buttons under the fold on a 900px viewport. Count the words before you count the characters.
- **The headline renders uppercase** regardless of how it is typed in the editor. Write it in sentence case; nothing is lost.
- **Upload the image at 2400px or wider on the long edge.** It is `object-fit: cover` in half the viewport at 900px and up, so it is always cropped, and the theme requests widths up to 2400. Shopify never upscales: a source smaller than the box will be visibly soft on the first screen a merchant's customer ever sees. Under-resolution on a hero is one of the named absolute defects behind this studio's first rejection, and it is not caught by looking at the page on a laptop.
- **No image is a supported state**, not a broken one. The media column paints as a stone panel and the composition still holds.
- **The section fills the first screen and cannot be made small.** At 900px and up it is a two-column grid with `min-height: calc(100vh - 118px)`; stacked below that, the media has a 46vh floor. There are no padding settings and no way to shrink it. If you want a smaller opening, use a different section.
- **The lede is rich text with a 46ch measure.** Bold runs paint at `--ink` against `--ink-2` body copy, which is the only emphasis available, because the display face ships regular and italic with no bold. Keep it to two sentences.
- **The load sequence is skipped entirely under `prefers-reduced-motion`.** Roughly 1.6 seconds of choreography (the line draws, the ruler ticks stagger in, the masthead drops, the headline rises word by word) runs from a data attribute the strike line sets, and it never runs for a visitor who asked for less motion. In that state the outline layer is hidden and the headline renders solid. Nothing is lost, and nothing is left at zero opacity if the script never runs at all.
- **The scroll split is the product, not a flourish.** A screenshot of this section is missing what it does. Review it by scrolling, at both widths.
- **One per page, and only on the home template.** It renders an `<h1>` unconditionally, so placing it on a template that already has one gives the page two headings at the top level.
