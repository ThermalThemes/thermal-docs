---
title: "Before / After"
description: "Two photographs in one frame with a draggable divider, for a change that a picture can show and a sentence cannot."
---

# Before / After

Before / After stacks two photographs in one frame and puts a draggable divider between them, so a visitor sees a change instead of reading a claim about it. It is worth the two images only when the difference is genuinely visual and genuinely the same object twice: same camera position, same distance, same light. Reach for it on a service or process page where the alternative is a paragraph nobody believes. It has nothing to say about a new instrument, because a new instrument has no before, so this is not a merchandising section no matter where the picker files it.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Before label**. Default “Before”.
- **After label**. Default “After”.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Layout**

- **Initial divider position**. 10–90% in steps of 5, default 50%.
- **Width**. `Small` · `Medium` · `Large` · `Full width`, default `Large`.

**Media**

- **Before image**. Image.
- **After image**. Image.

## Blocks

- **Theme blocks**. Any block in the theme’s shared block library.

_Available in the theme editor as **Before / After**._

<!-- generated:end -->

## Example use cases

Whirligig's own demo does not use this section, so none of the compositions below is shipped. They are the three shapes it actually fits.

**A repair or restoration listing, at the top of the page.** One heading block naming the service, **Before label** "As it arrived", **After label** "After eleven hours on the bench", **Initial divider position** 40 so the before is the wider half and reads first, **Width** Medium, scheme-1, 96px top and bottom to match the theme's desktop section rhythm. Both frames shot from one tripod position on the same pale seamless as the catalogue, so the only thing that changes between them is the object.

**Two materials compared on a specification page.** **Width** Large, **Initial divider position** 50, **Before label** "Nitrided", **After label** "Stainless", and a heading block that says out loud that these are two objects and not one object twice. The slider's grammar implies time passing, so a material comparison has to correct for it in words; otherwise a visitor reads "we did something to it".

**A build sequence, if you only have two frames.** Raw shell against finished shell, **Width** Full width, padding 0 and 0 so it bleeds between two text sections. Note that Whirligig's homepage does this job with `images-with-text-scrolling` instead, four chapters carrying four hard specs each, and that is the better answer whenever you have more than two frames or anything to say about them. Before / After is the version with no room for a caption.

## Notes

**Whirligig does not use this section.** Nothing in `dist/templates/` references `before-after`, so it renders nowhere on the demo store and no gate has ever measured it against this palette. A merchant switching it on is the first person to see it here. Budget a look at it rather than trusting it.

**Both images are required or the section renders two placeholders.** With one image or none you get two Shopify `.placeholder-svg` panels at 3:2 with the labels drawn over them. `.placeholder-svg` on a published page is a named defect in this studio, so do not leave a half-configured Before / After in a live template.

**The after image is cropped to the before image's box.** The after half is `position: absolute; inset: 0` with `object-fit: cover`, so the first image sets the aspect ratio and anything the second image holds outside that box is silently cut. Two photographs at different distances will produce a slider that looks like it is showing a change when it is showing a crop, and a visitor will feel it without being able to name it. Shoot both from one position.

**The images do not route through `responsive-image`.** This section calls `image_tag` directly with widths up to 3200 and no `sizes` attribute, so the browser assumes the frame is 100vw. On **Width** Small (640px) that means fetching a 2400px file for a 640px box. It will not upscale, which is the defect that matters most here, but it will over-fetch, and Lighthouse Performance ≥60 averaged across desktop and mobile is a Theme Store gate.

**The labels are hard-coded white on 50% black, and `aria-hidden`.** They ignore the colour scheme entirely, they sit over whatever pixel of photograph is behind them, and they do not exist for a screen reader. If "Before" and "After" carry meaning rather than decoration, put the same two words in the heading block.

**There is no heading setting.** The header comes only from blocks, and the preset ships a centred heading block, so add the section from the picker. Pasted into template JSON by hand it renders a headless comparison.

**The handle is a real slider and it is keyboard operable.** `role="slider"` with `tabindex="0"`, `aria-valuenow` updated on drag, arrows moving 1% and Shift plus arrow moving 10%. What it does not have is the theme's own focus treatment: the ring is the browser default rather than the 2px `--bronze` outline at 3px offset that every other control uses, because the section defines no `:focus-visible` rule of its own.

**Touch dragging prints a console warning.** `touchstart` is registered passive and the handler calls `preventDefault()` anyway, which the browser refuses and logs. Harmless to the visitor, and it will appear in any console capture taken during review.

**Motion applies to the configured branch only.** The slider carries `role: feature-media`; the placeholder branch carries nothing.

**Nothing here touches the audio layer.** Neither image is pitched and the section declares no `data-strike-item`, so the strike line passes over it, the ruler indicator does not move, and the HUD's three value slots stay hidden.
