---
title: "Images with text scroll"
description: "A pinned image column that crossfades as a scrolling text column advances, with up to four label-and-value specification pairs per chapter."
---

# Images with text scroll

Images with text scroll is the theme's long-form process section: one image column that pins to the viewport and crossfades, one text column that scrolls past it, and an `IntersectionObserver` that pairs the two. It is the only editorial section in the library that carries structured measurements beside the prose, four label-and-value pairs per chapter, rendered as a definition list rather than as sentences. Reach for it when the story is genuinely sequential and each step has numbers attached: a build, a method, a comparison down a series. Three or four chapters is the working range. Two does not earn the pinning, and past five the pinned image stops changing often enough to feel connected to what you are reading.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Subheading**. Free text, empty by default.
- **Eyebrow**. Small uppercase label above the heading. Use it to group sections into themes.
- **Heading**. Free text, empty by default.
- **Heading display size**. `None — standard heading` · `Display S` · `Display M` · `Display L` · `Display XL`, default `None — standard heading`. Render the heading at the oversized display scale (type-as-structure) instead of the standard heading size.
- **Show step numbers on image**. Off by default. Overlay each step's index (01, 02, …) on its pinned image.
- **Step heading display size**. `None — standard heading` · `Display S` · `Display M`, default `None — standard heading`. Render each step's heading at the oversized display scale.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Layout**

- **Image position**. `Left` · `Right`, default `Left`.
- **Image aspect ratio**. `Square (1:1)` · `Portrait (2:3)` · `Landscape (3:2)`, default `Square (1:1)`.

## Blocks

- **Scroll item**. 14 settings.

_Available in the theme editor as **Images with text scroll**._

<!-- generated:end -->

## Example use cases

**The four-day build, as the homepage runs it.** `the-build` on `index`: **Eyebrow** "On the bench", **Heading** "Four days, and most of it is listening" at Display L, **Step heading display size** Display M, **Show step numbers on image** on, **Image position** Right, **Image aspect ratio** Square, `scheme-1`, 56px top and 24px bottom. Four chapters, one per day, each with all four spec slots filled: the shell at 1.0 mm gauge, 53 cm, 38 mm sink depth, two shells a day; nitriding at 520 °C for 18 hours to a 0.15 mm case depth; tuning to three partials per note, plus or minus 3 cents, six to ten passes, verified against a strobe tuner; then the recording at 48 kHz / 24-bit, one take, ribbon microphone at a metre. The specs are what stop this being an about-us slideshow. Fill all four slots on every chapter or fill none.

**The same story, shortened for the features page.** `scroll-split` on `page.theme-features`: three chapters instead of four, **Heading** at Display M, a **Subheading** stating that this is the only editorial section carrying structured measurements, **Image aspect ratio** Portrait, **Image position** Right, 64px top and bottom. Dropping nitriding from the sequence is the right cut: the features page is demonstrating the section, and three chapters is the shortest run where the pinning is legible.

**A single-instrument comparison.** Point three chapters at nitrided steel, stainless and cast bronze, one photograph each, and use the spec slots for the honest trade-off rather than the flattering half: speaks fast / rusts if left wet, holds tune longer / speaks slower, inharmonic so it gets measured partials rather than a scale. Set **Show step numbers on image** off here, because these are alternatives rather than stages, and a numeral implies an order that does not exist.

## Notes

**The image column is `aria-hidden="true"`.** That is deliberate: the pictures illustrate text that is already on the page, and announcing three crossfading frames while reading a paragraph makes the section worse. The consequence is that the images carry nothing for a screen reader and the block has no alt-text setting at all. Everything load-bearing has to be in the text or in the specs. If a photograph is the only place a fact appears, this is the wrong section for it.

**Images use a raw `image_tag`, not `responsive-image`.** Widths go up to 3200, so under-resolution is not the risk here, but there is no `sizes` attribute, so the browser assumes 100vw and fetches roughly twice the pixels the half-width pinned column needs. On a four-chapter section that is four oversized images. The first is `loading="eager"`, the rest lazy.

**The motion manifest override for this section is not wired.** `dist/assets/motion-manifest.json` carries an `images-with-text-scrolling` entry with `clip-reveal, rise` at slow timing, and `dist/sections/images-with-text-scrolling.liquid` contains no `{% render 'motion' %}` call at all. The override resolves against nothing. The crossfade still works, because that is the section's own observer rather than the motion layer, but the reveal the manifest describes does not happen.

**Nothing fades on the text column, and that is a correctness decision.** An inactive chapter used to sit at 0.45 opacity, which composited the ink to about 2.78:1 and produced 41 contrast nodes on one homepage. Container opacity multiplies every child colour, and there is no value that is both a visible fade and an accessible one. The active chapter gets an added left border instead. Do not reintroduce a fade here.

**Mobile drops the pairing.** Under 768px the image stage stops being sticky and sits above the whole run of chapters at its own aspect ratio. It still crossfades as you scroll, but it has scrolled off the screen by the second chapter, so on a phone the section reads as one picture followed by all the text. Write the chapters so they stand up without the images, which the `aria-hidden` decision already required.

**The eyebrow is nested inside the heading branch.** Set **Eyebrow** with **Heading** blank and the eyebrow renders nothing. This is the substrate habit that the shared `section-header` snippet exists to fix, and this section has not been moved onto it yet. Always set both.

**Spec slots are plain text and are escaped.** No rich text, no markup, no links. Use the unit in the value ("1.0 mm", "± 3 cents", "48 kHz / 24-bit") rather than in the label, so the definition list reads as a spec table and not as a sentence broken in two.

**Vertical cost.** Pinning needs travel room, so each chapter's text block is padded to give the sticky image something to pin against. Four chapters is roughly two and a half screens on desktop. Budget for that before adding a fifth.
