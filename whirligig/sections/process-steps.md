---
title: "Process steps"
description: "An ordered list of steps in a row, a grid or a column, auto-numbered by a CSS counter so reordering blocks renumbers them, with an optional connector line."
---

# Process steps

Process steps is a real ordered list rendered three ways: a horizontal row, a wrapping grid, or a single column. Each step is a heading and a caption, optionally an image or a stroked icon, and the numbers come from a CSS counter over block order rather than from a per-block field, so reordering the steps in the editor renumbers them and there is no number to get out of sync. Reach for it when the content is genuinely a sequence and the order is the information. Do not reach for it for a list of features with numerals stuck on the front; the numbers are the claim, and a reader will test them. Whirligig runs it in a grid on the homepage and as a four-step row on the product page, which is the same method told at two lengths.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Eyebrow**. Small uppercase label above the heading. Use it to group sections into themes.
- **Heading**. Optional — leave blank to render no section heading.
- **Heading display size**. `None — standard heading` · `Display S` · `Display M` · `Display L` · `Display XL`, default `None — standard heading`. Render the heading at the oversized display scale (type-as-structure) instead of the standard heading size.
- **Number style**. `Plain` · `Circled` · `Filled` · `Oversized`, default `Circled`.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Display options**

- **Show step numbers**. On by default. Steps auto-number from their order — reorder blocks to renumber.
- **Show connector line between steps**. Off by default.

**Layout**

- **Image aspect ratio**. `Adapt to image` · `Square` · `Portrait` · `Landscape`, default `Landscape`.
- **Layout**. `Horizontal row` · `Grid` · `Vertical`, default `Horizontal row`.
- **Columns on desktop**. 2–6, default 4. Applies to the grid layout. The horizontal row sizes every step equally.
- **Columns on mobile**. `1 column` · `2 columns`, default `1 column`.
- **Alignment**. `Left` · `Center`, default `Left`.

## Blocks

- **_process-step**. 0 settings.

_Available in the theme editor as **Process steps**._

<!-- generated:end -->

## Example use cases

**The six-step method, as the homepage runs it.** `method` on `index`: **Eyebrow** "Method", **Heading** "Ear first, meter second" at Display L, **Layout** Grid, **Columns on desktop** 3, **Columns on mobile** 1, **Number style** Oversized, **Show step numbers** on, **Show connector line between steps** on, **Alignment** Left, `scheme-2`, 88px top and bottom. Six steps at three columns is two clean rows: rough form, shaping, nitriding, tuned by ear, verified, recorded. The captions carry the numbers the headings cannot: eighteen hours at 520 °C, six to ten passes, plus or minus 3 cents. The grid at three wide is what the design contract means by "2-up or 3-up, never a narrow column beside dead space".

**The same method compressed onto the product page.** `method` on `product`: **Layout** Horizontal row, **Columns on desktop** 4, **Number style** Plain, **Heading display size** Display M, 48px top and 88px bottom. Four steps rather than six, and the last three are the ones a buyer is actually asking about: tuned by ear, verified, recorded, packed. The recorded step points at the player above it ("The date of this instrument's take is printed beside its player above"), which is what stops the section being generic copy repeated on every listing.

**A four-step row with numerals as the graphic.** `steps` on `page.theme-features`: **Layout** Horizontal row, **Columns on desktop** 4, **Number style** Oversized, **Show connector line between steps** on, **Heading** "Numerals at display scale, joined by a connector" at Display M. Oversized sets the numeral at the display size, which turns the row into type-as-structure rather than a list with bullets. Four steps is the most a horizontal row holds before it starts scrolling sideways.

## Notes

**The step block reports zero settings in the reference above, and that is a generator gap.** `_process-step` is a private block in `dist/blocks/_process-step.liquid` and the docs generator does not resolve private block schemas. It has four settings: **Image**, **Icon** (none, check, box, clock, star, heart, drop, leaf, spark, gear, hand), **Heading** and **Caption**. An uploaded image wins over an icon; with neither, the step renders number, heading and caption only, which is how all three of Whirligig's instances run.

**The connector is drawn per step, not per row, and the grid layout exposes that.** The rule is `:not(:last-child)`, so in a grid every step except the final one gets a connector extending to its right. On `method` on `index`, six steps at three columns, step three is the end of the first row and is not the last child, so it draws a 32px rule off the right edge of the grid pointing at nothing, into a container inset of 24px. Either turn **Show connector line between steps** off for grid layouts, or use the horizontal row, where every step really does have a next step to its right.

**Connectors are suppressed on mobile.** Under 768px the horizontal row becomes a stack and the connector `content` is removed, so the visual thread that carries the sequence on desktop is not there on a phone. The `<ol>` still carries the order semantically, and the numbers are still drawn. Write the headings so the order survives without the line.

**Horizontal row scrolls rather than wrapping.** `overflow-x: auto` is on, and steps size equally, so five or six steps in a horizontal row on a 1300px page will squeeze or scroll sideways with no visible affordance. Past four steps, use Grid.

**Columns on desktop only affects the grid layout.** The horizontal row sizes every step equally regardless, and vertical is one column by definition. `steps` on `page.theme-features` and `method` on `product` both set it to 4 while running Horizontal row, which is harmless and misleading.

**Image aspect ratio only matters if a step has an image.** All three of Whirligig's instances set it (Square on two of them) and no step carries an image, so the setting is inert as shipped. If you do add images, note that this block is one of the few in the theme that supplies a real `sizes` string, so its widths are honest.

**The numeral is `aria-hidden` and the list is an `<ol>`.** The number is generated CSS content on an empty span, so a screen reader gets the list's own ordinal rather than a duplicate. That means the numeral cannot carry information the heading does not. Never put a fact only in the number.

**Oversized numerals inherit the text colour, not brass.** They are `--color-text` at the display size, which is what keeps them legible. Do not restyle them to `--brass`: it fails contrast at 2.77:1 and does not pass at display size either, and a brass numeral is only permitted here if the identical value appears as ink text in the same component, which a step number never does.

**The eyebrow is nested inside the heading branch.** Set **Eyebrow** with **Heading** blank and the eyebrow renders nothing. Always set both, or set neither.

**Captions are drawn as an alpha of the text colour** (0.75). They clear 4.5:1 on the two schemes Whirligig uses, but the theme's rule is that secondary text is a full-opacity checked colour rather than an alpha, so measure before pointing this section at a saturated or dark scheme.

**No audio surface.** The steps carry no player and no `data-strike-item`. On the product page this section sits below the recording, describes it, and depends on the player above it still being there. Do not move it above `main-product`.
