---
title: "Image with text"
description: "One editorial row, a photograph beside a stack of theme blocks, with a settable split ratio from 50/50 to 75/25 and no heading setting of its own."
---

# Image with text

Image with text is the theme's single editorial row: one photograph on one side, a stack of theme blocks on the other, with the split ratio, the image side and the section width all settable. It has no heading setting of its own, so every word in the text column is a block you add and order yourself, and the eyebrow-then-heading-then-body reading order is your responsibility rather than the section's. Reach for it when one claim needs one picture and about forty words beside it. When you have three or four such claims in sequence, use `images-with-text-scrolling` instead; four of these stacked is a slower page and a weaker argument.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Image**. Image.
- **Image alternative text**. Describes the image for screen readers and when the image fails to load. Falls back to the alt text set on the file in Shopify admin.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Layout**

- **Content vertical alignment**. `Top` · `Middle` · `Bottom`, default `Middle`.
- **Image position**. `Left` · `Right`, default `Left`.
- **Image aspect ratio**. `Adapt to image` · `Square (1:1)` · `Portrait (2:3)` · `Landscape (3:2)`, default `Adapt to image`.
- **Mobile image position**. `Above text` · `Below text` · `Hidden`, default `Above text`.
- **Section width**. `Contained (page width)` · `Edge to edge (viewport)`, default `Contained (page width)`. Edge to edge bleeds the image to the viewport edge (full-bleed); contained keeps the row within the page width.
- **Split ratio (image : text)**. `50 / 50 — even` · `60 / 40` · `67 / 33` · `70 / 30` · `75 / 25`, default `50 / 50 — even`. Asymmetric column split. Mirrors with image position. Alternate position down a stack for alternating asymmetric rows.

## Blocks

- **Theme blocks**. Any block in the theme’s shared block library.

_Available in the theme editor as **Image with text**._

<!-- generated:end -->

## Example use cases

**The bowls answer, as the homepage runs it.** `bronze-story` on `index`: **Image position** Right, **Split ratio** 60/40, **Image aspect ratio** Landscape, **Section width** Edge to edge, **Color scheme** `scheme-4`, **Top padding** and **Bottom padding** both 0, with four blocks in order: subheading "Bowls", heading "A bowl is a bronze object with measurable partials." at Display L, the paragraph that gives the fundamental, the second partial and the decay time and declines to give a chakra, then a primary button to `/collections/bowls`. Bronze ground, full bleed, no padding of its own so it butts against its neighbours. It is the homepage's one accent block, and it exists to refuse the wellness register in the department most likely to attract it.

**The material trade-off, on the collection page.** `trade-off` on `collection`: `design-bench-hammers.jpg` at **Image position** Left, **Split ratio** 70/30, **Section width** Edge to edge, **Image aspect ratio** Landscape, `scheme-2`, 96px top and bottom. Three blocks: heading at Display M, the paragraph that says stainless holds a tuning longer and nitrided steel speaks faster and wants a dry room, then a caption noting that nothing on the page plays by itself. At 70/30 the row reads as a photograph with a margin note rather than a two-column banner, which is the point: the text is a correction to the picture, not a caption for it.

**A mirrored close, contained.** `close` on `page.theme-features`: **Section width** Contained, **Split ratio** 60/40, **Image position** Right, **Image aspect ratio** Portrait, **Content vertical alignment** Bottom, **Mobile image position** Below text, `scheme-2`, 64px top and 96px bottom. This is the quiet form of the same row, and the reason the two settings exist together: alternate **Image position** down a stack of these and the asymmetry alternates with it, because the split ratio mirrors along with the image.

## Notes

**There is no heading setting, and that is the main thing to know.** Everything in the text column is a block. Order them eyebrow (a `subheading` block), then `heading`, then `text`, then `button`; every instance Whirligig ships does exactly that. Nothing enforces it, and this is one of the few sections in the theme that does not route its header through the shared `section-header` snippet, so a row with the body above the heading will render that way without complaint.

**The image routes through `responsive-image`**, which most sections in this batch do not. It emits widths from 400 to 3200 with a real `sizes` string, and the aspect ratio is applied in CSS rather than baked into the CDN URL, so the crop never caps the srcset. Set **Image alternative text** per placement; with it blank the file's admin alt is used, and `bronze-story` on `index` currently sets neither.

**Edge to edge does not line up with the rest of the page.** A contained row sits at the `.container` inset. The edge variant instead gives the text column `padding-inline: var(--spacing-xl)`, which is 32px against the container's 24px. Stack an edge row and a contained row and the two text columns start at different left edges. Pick one width for a run of these rows rather than alternating.

**Adapt to image is a different rendering mode, not just a different number.** Square, Portrait and Landscape crop with `object-fit: cover`. Adapt switches the image to `object-fit: contain` at its natural ratio, so a mixed-ratio set of photographs will not align down a stack. For the object-on-seamless stream, Landscape or Portrait is the safer choice.

**Split ratio is desktop only.** Under 768px the grid collapses to a single column with `!important`, so 75/25 and 50/50 look identical on a phone. **Mobile image position** is the only mobile control, and its Hidden option removes the picture from small screens entirely, which also removes whatever the alt text was carrying.

**One section key is shared across two templates and two section types.** `recording-corner` is a `video` section on `index` and an `image-with-text` section on `product`. The `lq-section--{key}` hook is derived from the key alone with no template prefix, so the per-theme rules written for the homepage video also land on the product page's image row. Two of them bite: the container is stripped to `max-width: none; padding-inline: 0`, which contradicts that section's **Section width** of Contained, and the `h2` is forced to `clamp(2.4rem, 5.5vw, 4rem)`, which overrides its Display S heading. Rename the key on one of the two templates.

**No audio surface.** This section renders no player and carries no `data-strike-item`, so the strike line passes over it without naming anything. That is correct for an argument row. It does mean a page built only from these rows is a silent page, which on this store is a position rather than a default.
