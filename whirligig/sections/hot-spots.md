---
title: "Hot spots"
description: "One annotated image with percentage-placed dots that open either a short written note or a small product card."
---

# Hot spots

One image with dots placed on it by percentage, each opening a small panel that is either a heading with a line of prose or a linked product card. Whirligig uses it as a labelled diagram rather than as a shoppable lifestyle shot: the handpan is annotated with the ding, the tone field, the gu and the shoulder, because a buyer who does not know the vocabulary cannot read the rest of the store. Reach for it when a photograph has parts worth naming and the names carry real information. Skip it when the dots would only repeat what the caption already says, and skip it on any image where the subject is small or busy, because a 28px dot on a cluttered photograph is noise.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Subheading**. Free text, empty by default.
- **Eyebrow**. Small uppercase label above the heading. Use it to group sections into themes.
- **Heading**. Free text, empty by default.
- **Heading display size**. `None — standard heading` · `Display S` · `Display M` · `Display L` · `Display XL`, default `None — standard heading`. Render the heading at the oversized display scale (type-as-structure) instead of the standard heading size.
- **Image**. Image.
- **Image aspect ratio**. `Adapt to image` · `Square (1:1)` · `Portrait (2:3)` · `Landscape (16:9)`, default `Landscape (16:9)`.

**Colors**

- **Hotspot color**. Colour.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

## Blocks

- **Product hotspot**. 3 settings.
- **Content hotspot**. 7 settings.

_Available in the theme editor as **Hot spots**._

<!-- generated:end -->

## Example use cases

**Anatomy of a handpan (homepage).** `image: design-anatomy-handpan.jpg`, `image_aspect_ratio: landscape`, `hotspot_color: #8c4a22`, `heading_display_size: lg`, `scheme-2`, padding 0 / 0 so it butts against its neighbours. Four `hotspot-content` blocks: the ding at 50/46, the tone field at 27/30, the shoulder at 74/64, the gu at 50/86. Each carries one sentence of fact, not of praise: "The port underneath. It tunes the Helmholtz resonance of the whole cavity."

**The same diagram on the product page.** The same image and the same four dots, at `heading_display_size: md` and `scheme-1`, padding 88 / 48, under a lede that says out loud that the shell shown is a handpan whichever family you are reading and that the listing uses the maker's word for the part. The image is a section setting, not the product's own media, so being honest about that in the lede is the difference between a diagram and a bait.

**Content and product dots on one image.** Add `hotspot-product` blocks to the same stage: felt mallets at 14/72 and a handpan stand at 88/26, alongside the four content dots. The product dot opens a card with the image, title and price, linked to the product. Two product dots near the edges and four content dots in the middle keeps the panels from colliding.

## Notes

**The image is a section setting.** On a product template it is the same illustration on every product, so either say so in the lede or restrict the section to templates where one image is genuinely representative.

**Dot positions are percentages of the stage, and the stage crops.** The image is `object-fit: cover` at the chosen aspect ratio, so changing `image_aspect_ratio` re-crops the photograph and every dot moves relative to the subject. Place the dots after you have settled the ratio, and re-check them if you change it. `adapt` keeps the image's own ratio and is the safest choice for a diagram.

**Set the alt text in Content > Files.** There is no alt setting on the section or on the content-hotspot image; both fall back to the image's own alt text in the admin. An unlabelled diagram is an empty announcement for anyone using a screen reader.

**`hotspot_color` defaults to black.** Whirligig sets `#8C4A22`, `--bronze`. The dot is a filled circle with a 2px white ring and a white core, so it is a graphic object and has to clear 3:1 against whatever is behind it in the photograph. `--brass` measures 2.77:1 on stone and is not available for this.

**The popover is not a real dialog, and it will be flagged.** When a dot is activated the script moves the panel inside the dot's own `<button>` element. That nests a `role="dialog"` containing a link and a close button inside a button, which fails the nested-interactive rule, and focus is never moved into the panel, so a keyboard user opens it and stays on the dot. Expect this in an accessibility audit. Anything essential in a popover should also exist as text somewhere on the page.

**Panels are 200 to 260px wide and are placed inside the stage.** A dot in the left 60% opens its panel to the right; past that it flips left. A dot within roughly 15% of an edge can still push its panel over the image border. One panel is open at a time; Escape closes, and so does a click anywhere outside.

**The image ships as a raw `image_tag` with no `sizes` attribute**, with candidates up to 3200px wide. The browser assumes the full viewport width when picking one, so inside a contained 1300px section it fetches more than it needs. On a page with a Lighthouse budget, this is the section's real cost.

**Nothing here plays.** The dots are silent. On the product page this sits well below the recording and the tone field, which is the right order: the sound answers the buying question and the anatomy explains the words used to describe it.
