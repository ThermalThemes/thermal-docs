---
title: "Custom Liquid"
description: "The escape hatch: arbitrary Liquid or HTML inside the theme's section wrapper, with none of the theme's scaffolding applied to it."
---

# Custom Liquid

Custom Liquid renders whatever you put in it inside the theme's section wrapper and container, and does nothing else at all. It exists for the case the section library does not cover: an app embed, a structured-data block, a table a merchant already owns, markup a client arrives with. It is the right answer roughly once per store and the wrong answer the second time, because everything pasted here sits outside the theme's settings, outside the theme editor's reach for the next person, and outside every convention the rest of the library applies for you. If you find yourself pasting a layout, the layout wants to be a section.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Liquid / HTML**. Add custom Liquid code or HTML markup
- **Top padding**. 0–160px in steps of 4, default 0px.
- **Bottom padding**. 0–160px in steps of 4, default 0px.
- **Color scheme**. Colour scheme.

## Blocks

None. The section renders from its own settings.

_Available in the theme editor as **Custom Liquid**._

<!-- generated:end -->

## Example use cases

Whirligig's own demo does not use this section. These are the three jobs it is genuinely the right tool for.

**An app embed that has to sit in the flow.** A review widget, a shipping estimator, a size guide a merchant's app hands them as a snippet. Paste it, set **Top padding** and **Bottom padding** to 96 and 96 to match the theme's desktop section rhythm, and set **Color scheme** to whatever the section above it uses so the embed does not announce itself as pasted. Both paddings default to 0 here, unlike every other section in this library, so a Custom Liquid dropped between two sections sits flush against them until you say otherwise.

**Structured data with no visual output.** JSON-LD for an event, a course, an FAQ. Leave both paddings at 0 and the section adds no height to the page. Keep the field to a script tag and nothing else, so a later editor opening it does not think something is broken.

**A table a merchant already maintains.** Shipping bands, a tine-gauge chart, a returns matrix. Wrap it in your own `overflow-x: auto` container: the theme's rule that wide content scrolls inside itself rather than pushing the page sideways is applied by each section for itself, and this section applies nothing. The register deliberately places content past both viewport edges and still has to report `document.scrollWidth === clientWidth`, so a wide table pasted here is exactly the thing that breaks that.

## Notes

**Whirligig does not use this section.** Nothing in `dist/templates/` references `custom-html`.

**Three names, one thing.** The theme editor calls it **Custom Liquid**, the file is `dist/sections/custom-html.liquid`, and this page is filed under `custom-html`.

**It renders nothing at all when the field is empty.** No wrapper, no padding, no stray element. That is the right behaviour, and it means a half-finished Custom Liquid costs the page nothing.

**Colour custom properties in this theme hold space-separated RGB channels.** Anything you paste must write `rgb(var(--color-text))`, or `rgb(var(--color-text) / 0.5)` for an alpha. Writing `color: var(--color-text)` renders nothing and reports no error. 121 call sites shipped that way across the substrate before anyone noticed, so this is the single most likely way for pasted markup to look wrong for a reason nobody can see in the editor.

**No motion, and do not fake it.** There is no `{% render 'motion' %}` here and there cannot be, so your content appears immediately while the sections around it reveal on scroll. Hardcoding `data-motion="rise"` is explicitly forbidden in this theme: it satisfies the runtime, bypasses the resolver, is invisible to the coverage gate and breaks one-mode-drives-the-store. Accept the immediate appearance, or ask for a real section.

**No `responsive-image`.** Any `<img>` you paste is yours to size. The theme's rule is that a native asset is at least twice its largest CSS width and at least as wide as the largest entry in the srcset, because a browser can only pick a width you list and Shopify never upscales. The live-page checks read the rendered DOM, so a raw `<img>` here fails the same served-versus-displayed comparison that theme code does, and it fails it in a section nobody thinks to look at.

**`.custom-html__content` has no styles of its own.** No measure cap, no vertical rhythm, no list or table defaults beyond the theme's global element styles. Prose pasted here runs the full 1300px container rather than the theme's 65ch reading measure unless you cap it yourself.

**The audio layer is reachable, and reaching for it carelessly breaks the one absolute rule.** `window.TimbreAudio.play(src, start, end, label)`, `.stop()` and `.current` are global. Nothing stops pasted script calling `play()` on load, and doing so would autoplay audio, which this theme guarantees never happens: the `SOUND OFF` switch is both the never-autoplay promise and the browser's own gesture requirement for `AudioContext`. If a custom block needs sound, hang it off a real `<button>` the visitor presses.

**You can opt a custom block into the strike line, deliberately.** The contract is a `data-strike-item` element carrying `data-strike-hz`, `data-strike-label`, `data-strike-meta`, `data-strike-price`, and optionally `data-strike-src` with `data-strike-start` and `data-strike-end` for the audio slice. Declare none of those and the line simply passes over your block with the HUD's value slots hidden, which is the correct default. Declare a frequency you did not measure and the theme starts telling a visitor something untrue.
