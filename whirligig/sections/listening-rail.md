---
title: "Listening rail"
description: "A hand-picked row of products that each play their own recording, so two instruments can be compared back to back without leaving the page."
---

# Listening rail

A row of up to twelve products, each card carrying its own recording. It exists for one job: putting a few objects side by side so a visitor can hear the difference between them, which is a comparison a grid of photographs cannot make. Reach for it when the products differ in a way that is audible rather than visible, and when you want to choose the members yourself; if you want a whole collection laid out by measurement, use **The register** instead. A card whose product has no `custom.recording` still renders, just without a play button, so a half-recorded catalogue produces a shorter row rather than a row of dead controls.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Eyebrow**. Default “Hear it first”. Small uppercase label above the heading. Renders on its own, with or without a heading.
- **Heading**. Default “Audition the bench”. Optional — leave blank to render the rail with no section heading.
- **Subheading**. A lead sentence under the heading. Sets up what the rail is for before the instruments.
- **Heading display size**. `None — standard heading` · `Display S` · `Display M` · `Display L` · `Display XL`, default `None — standard heading`. Render the heading at the oversized display scale (type-as-structure) instead of the standard heading size.
- **Layout**. `Rail — one scrolling row` · `Grid — wrapped columns`, default `Rail — one scrolling row`. Rail keeps every instrument on one scrolling row so scales are compared back to back. Grid wraps them into static columns.
- **Instruments per row (desktop)**. 3–6, default 5.
- **Section width**. `Contained (page width)` · `Edge to edge (viewport)`, default `Contained (page width)`. Edge to edge lets the rail scroll to the viewport edge; contained keeps it within the page width.
- **Color scheme**. Colour scheme.

**Instrument details**

- **Show scale**. On by default. Reads the product metafield custom.scale.
- **Show voice**. On by default. Reads the product metafield custom.voice.
- **Show recorded date**. On by default. Shows the date the instrument was recorded, taken from its recording metafield.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 64px.
- **Bottom padding**. 0–160px in steps of 4, default 64px.

## Blocks

Up to 12 blocks.

- **Instrument**. 2 settings.

_Available in the theme editor as **Listening rail**._

<!-- generated:end -->

## Example use cases

**Five scales, one instrument each.** On the *Choosing a scale* page: `display_style: rail`, `columns_desktop: 5`, `width: contained`, `scheme-1`, and five handpan blocks (D Kurd, C&#9839; Amara, F Low Pygmy, E La Sirena, B Celtic Minor). All five were recorded in the same room at the same distance, so what changes across the row is the scale and not the take. The lede says so, because a comparison is only worth making if the reader trusts the conditions.

**One object per family, edge to edge.** On the collections index: `display_style: grid`, `columns_desktop: 6`, `width: edge`, and six blocks running handpan, tongue drum, bowl, kalimba, chime, whirligig. Each block sets a **Label override** so the card reads `Handpan` rather than `Handpan D Kurd 0412`; the row is a taxonomy, so it should be named like one.

**The whole price ladder in one row.** On the default page template: `display_style: rail`, `columns_desktop: 5`, `scheme-2`, with blocks from an $18 spinning singer up to a $2,480 handpan. The price line is set in tabular figures for exactly this, so the ladder lines up down the row instead of ragging.

## Notes

- **It does not read a collection.** Blocks are hand-picked, twelve maximum, and the row will not stay current on its own. Add an instrument to the shop and someone has to add a block. That is the trade for controlling the order, which is the whole value of the section.
- **Under three recordings it does not earn its space.** This is a comparison instrument. If only one product on the row plays, a `featured-collection` does the same job with less ceremony.
- **The rail does not feed the strike line.** These cards are not `[data-strike-item]`, so they never enter the struck state and never sound as they cross the bronze rule. Playback here is by button only, one recording at a time store-wide. Do not write section copy promising that the cards sound as the visitor scrolls. One shipped template did, on the collections index, and it was corrected on 2026-08-27.
- **The play button appears only when the recording resolves to a URL.** `custom.recording` is read as JSON; `audio` and `src` are accepted as aliases for `url`, and `date` for `recorded_on`. A `file_reference` metafield also works, since the file drop answers `.url`, but it carries no date, no description and no sprite. With no URL from any source, no control renders.
- **Write a `description` into the recording.** The shared player always prints a text equivalent beside the button, but this section does not pass the product through to it, so a blank description falls back to a generic line instead of to the instrument's tuning, voice and family. The words are what make the page complete without sound; do not leave them to the fallback.
- **Show scale reads `custom.tuning` first**, with `custom.scale` as the fallback. The editor help text still names only `custom.scale`, which is stale: most families now publish a tuning descriptor and no scale name, deliberately, because a bowl does not have a handpan scale.
- **Image aspect is driven by product type.** `4:5` for instruments, `1:1` where `product.type` handles to `accessory` or `whirligig`. It is a CSS rule keyed off the type, not a per-card setting, so a mistyped product gets the wrong crop and there is nothing in the editor to override it.
- **Widths.** The rail layout stays a horizontal scroller at every size, cards clamped to `min(17rem, 78vw)` on phones. The grid layout drops to two columns below 1024px and one below 768px, so `columns_desktop: 6` is a desktop statement only.
- **The eyebrow renders without a heading**, which is unusual in this library. Fourteen of fifteen substrate sections nest the eyebrow inside the heading branch and render nothing if the heading is blank. This one does not, so an eyebrow-only header is a supported composition.
- **Leave it off** any page that already has a listening rail, and off the product page, where the `recording` block is the right call site for the same player.
