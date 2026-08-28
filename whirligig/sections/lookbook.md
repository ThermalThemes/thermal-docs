---
title: "Lookbook"
description: "A grid of editorial looks, each an image with a caption and an optional linked product, with any one look promotable to a full-width cell."
---

# Lookbook

A grid of editorial looks. Each block is one image with an eyebrow, a heading, a line of text, an optional product with its price, and a link that covers the whole cell. It is the many-images counterpart to `shop-the-look`, which is one image with dots on it, and the setting that makes it worth using is `feature` on a single block: without a promoted cell it is a uniform grid and reads as a worse media-grid. Reach for it when you have a set of photographs from the same shoot and each one has something specific to say. Skip it when the images are decorative, because five large photographs on one screen is the most expensive thing this section does and a caption is the only thing that earns them.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Heading**. Default “Lookbook”.
- **Intro text**. Free text, empty by default.
- **Columns (desktop)**. 2–4, default 2.
- **Color scheme**. Colour scheme.
- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

## Blocks

Up to 12 blocks.

- **Look**. 8 settings.

_Available in the theme editor as **Lookbook**._

<!-- generated:end -->

## Example use cases

**The imagery demonstration (theme features page).** `columns: 3`, `scheme-2`, padding 48 / 64, heading "One block promoted, four at cell size" over a richtext intro that names the setting. Five `look` blocks: the practitioner's bench with `feature: true`, then two object-mode shots (a handpan in raking light, three bronze bowls) and two bench-context shots (hands and a shell, the recording corner). The eyebrow on each names which of the theme's two photographic streams it belongs to, so the section documents the rule while demonstrating it.

**A scale family, evenly.** Four looks at `columns: 2`, no `feature` block, each pointing at a handpan handle with `cta: "Hear it"`. Four images in two columns fills two complete rows, which is the arrangement that looks composed rather than accidental.

**The cheap end.** `columns: 4` with four whirligigs, `feature` off, each look carrying its product so the price prints under the caption: $18, $22, $28, $48. Four small joyful objects at cell size, and the prices doing the talking.

## Notes

**Count your blocks against your columns.** A `feature: true` look spans the full row (`grid-column: 1 / -1`), and the rest fill in order. One feature plus four looks at `columns: 3` gives a full-width cell, a row of three, and a single stranded card on a third row. Either drop to four looks or add a sixth.

**The feature cell crops to 16:9; every other cell keeps its image's own ratio.** Mixing portrait and landscape sources gives ragged rows with captions at different heights. Feed it one aspect ratio, or accept the ragged edge as the composition.

**The whole look is one link.** An absolutely positioned `<a>` covers the figure, so the caption text is not selectable and there can only be one destination per look. The link only appears when the block has a product or a link; a look with neither renders as an image and a caption with no CTA, which is a legitimate way to use it for a pure editorial frame.

**The link's accessible name falls back heading, then product title, then link label.** Clear all three on a look that has a custom link and you ship a link with no accessible name. The link label defaults to "Shop the look", so this only bites if you empty it deliberately.

**No eyebrow and no display size at section level.** The heading renders as a plain `h2` at the standard size and the intro is capped at 48ch. The eyebrow setting lives on the block, per look, not on the section. If you need a display heading above the grid, put a `rich-text` section above it.

**Twelve blocks maximum.**

**Images ship as raw `image_tag` with no `sizes` attribute** and candidates up to 3200px, so a three-column grid still asks the browser to choose as though every cell were the full viewport width. Five large photographs on one screen with over-sized candidates is the section's real cost, and it is the one that shows up in a performance score.

**The product price is the product's lowest price with no "From" prefix.** On a single-price bench item that is correct. On a product with a price range it prints one number and implies it is the only one.

**Nothing plays.** A lookbook of instruments is a screen full of pictures on a store whose whole argument is that pictures are not enough. Point each look at a product page, or put it near a section that makes a sound.
