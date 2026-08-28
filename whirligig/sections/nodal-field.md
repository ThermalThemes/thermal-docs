---
title: "Nodal field"
description: "Canvas-drawn circular-membrane nodal figures used as ornament, as a full-bleed showpiece row, a thin band between sections, or an inline set at mid size."
---

# Nodal field

Draws Chladni figures, the patterns sand forms on a vibrating plate, on a `<canvas>` at no imagery cost and with no image files to manage. **They are ornament.** A figure here is a visual language derived from how resonance behaves in general; it is never a measurement of any instrument on the page, and the `chladni` snippet prints that disclosure under every figure with no setting to switch it off. Reach for it where a page needs punctuation that belongs to sound rather than a generic rule or a stock photograph, and pick `display_style` by how much weight the moment can carry: a showpiece stops the reader, a divider only marks a seam.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Eyebrow**. Default “Nodal geometry”. Small uppercase label above the heading. Renders on its own, with or without a heading.
- **Heading**. Default “What a struck plate looks like”. Optional — leave blank to render the figures with no section heading.
- **Heading display size**. `None — standard heading` · `Display S` · `Display M` · `Display L` · `Display XL`, default `Display L`. Render the heading at the oversized display scale (type-as-structure) instead of the standard heading size.
- **Subheading**. Default “Sand on a vibrating plate collects along the lines that never…”. Optional lead paragraph beneath the heading.
- **Section width**. `Contained (page width)` · `Edge to edge (viewport)`, default `Edge to edge (viewport)`. Edge to edge bleeds the figures to the viewport edge; contained keeps them within the page width.
- **Display style**. `Showpiece — large plates` · `Divider — thin band` · `Compact — mid size`, default `Showpiece — large plates`. Showpiece is the full-bleed statement, divider is a thin band of small plates between sections, compact sits inline at mid size.
- **Number of figures**. 1–5, default 3. Each figure draws a different mode recipe.

**Geometry**

- **Line density**. `Sparse` · `Balanced` · `Dense`, default `Balanced`. How many rings and spokes each figure carries. Sparse leaves open ground; dense fills the plate.
- **Pattern seed**. 0–11, default 0. Rotates which recipe each figure starts from, so two nodal fields on one page never open with the same figure.
- **Mode recipes (advanced)**. One recipe per line, overriding density and seed. Each is a superposition of circular-membrane modes written as m,n,weight[,phase] joined by semicolons — for example 3,2,1;0,3,0.55;5,1,0.35,0.8.
- **Figure motion**. `Static — draw once` · `Breathe — slow redraw`, default `Static — draw once`. Breathe slowly redraws the figure; static draws it once. Both stop under reduced-motion.
- **Ornament caption**. Default “Every instrument here is round, so these are circular-membrane…”. Editorial copy shown once beneath the figures. The ornament disclosure — that a nodal figure is not a measurement of any instrument — is added under every figure automatically and cannot be switched off here.
- **Color scheme**. Colour scheme.
- **Linework colour**. Colour. Leave empty and the figures follow the colour scheme. Pick a colour to pin the linework for this section only.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 96px.
- **Bottom padding**. 0–160px in steps of 4, default 96px.

## Blocks

- **Theme blocks**. Any block in the theme’s shared block library.

_Available in the theme editor as **Nodal field**._

<!-- generated:end -->

## Example use cases

**The homepage showpiece.** `display_style: showpiece`, `figure_count: 4`, `density: dense`, `motion_style: breathe`, `width: edge`, `scheme-3`, padding 0 / 0 so it meets its neighbours with no gap. It is the homepage's only dark block. Brass linework measures 4.6:1 on that ground, which is the one place in the theme brass is genuinely comfortable, and four dense plates across the full viewport is the section carrying real weight rather than decorating a seam.

**A one-plate divider inside editorial.** Used on the article, blog, page and workshop templates: `display_style: divider`, `figure_count: 1`, `density: sparse`, `motion_style: static`, eyebrow, heading and subheading all blank, 56px of padding either side. The **Pattern seed** is varied per template (3, 4, 5 and 7) so two pages never open with the same figure. It draws at 6:1, so it reads as a band between sections rather than as an object.

**The second axis, on the collections index.** `showpiece`, three figures, `balanced`, `seed: 5`, `breathe`, carrying a heading and a caption that names what the section is for: pitch is one way to browse, and everything below the band is the other. Unlike the dividers this instance is a titled section, which is the difference between punctuation and an argument.

## Notes

- **The caption setting is editorial copy, not the disclosure.** Leave it blank and each figure carries the full ornament sentence. Fill it in and your line renders with a short "Ornament, not a measurement." underneath. Restating the disclosure in the caption prints it twice, so write about the drawing, not about what it is not.
- **Never describe a figure as measured from an instrument**, in the caption, the subheading, a block or alt text. The figures are seeded from mode recipes, not from any product. This is the one rule in the section that is not a preference.
- **`figure_count` is one to five, and it costs on phones.** At three or more, `showpiece` and `compact` become a horizontal scroller below 900px rather than shrinking square plates into illegibility; `divider` stacks to one column instead. The page body never scrolls sideways in either case.
- **`density` also accepts `1`, `2` and `3`.** The homepage was authored against a numeric scale before the setting settled on named steps, and both are honoured, so an older saved value does not silently fall back to Balanced.
- **`mode_recipes` overrides density and seed entirely.** One recipe per line, each a superposition of circular-membrane modes written `m,n,weight[,phase]` and joined by semicolons. Three modes per plate is the working default: a single mode looks like a bicycle wheel, and the superposition is what makes the curves organic. Malformed input cannot break the page; the no-script fallback clamps `m` to 0 to 10 and `n` to 1 to 6.
- **Leave `stroke_color` empty.** Unset, the linework follows the colour scheme through `--chladni-stroke`, which is what keeps the figures correct when a merchant changes schemes. Pin a colour only for a section that must not follow. Brass fails AA as text at 2.77:1 and is legitimate here only because it is canvas linework; every caption in the section paints from the scheme's own text tokens instead.
- **`breathe` is a running cost.** It redraws the figure continuously, capped near 30fps. Four breathing plates on one page is real work, and Lighthouse Performance at 60 or above is a Theme Store gate. Use `static` for dividers and reserve `breathe` for a showpiece the visitor is meant to stop at. Both stop under `prefers-reduced-motion`.
- **Without JavaScript** a `<noscript>` SVG draws the dominant mode of the recipe as static rings and spokes. It is a simplification of the full superposition, which is honest, because the caption beneath it already says the figure is not a measurement.
- **One dark block per page.** `showpiece` defaults to `scheme-3` and the theme ships exactly one `scheme-3` section per template. A second one on the same page costs both of them their weight; if you need two nodal fields, make the second a `divider` on a light scheme.
- **Layout is reserved before the canvas draws.** The canvas is square (`1:1`, or `6:1` on divider), so nothing shifts when the figure appears and CLS stays at zero. Do not add a height to the canvas or the figure will paint at the wrong backing-store size and blur.
- **Leave it off** any page that already has a strong graphic moment, and off a page where the visitor is trying to complete a task. This section is punctuation; it should never sit between a reader and a decision.
