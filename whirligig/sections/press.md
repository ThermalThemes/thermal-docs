---
title: "Press"
description: "Quoted press mentions with a publication mark or name, a date and a link out, in a list, a carousel or a grid."
---

# Press

Press pairs each publication with something it actually said. That one difference is why it exists alongside **Logo list**: a masthead on its own asks a visitor to be impressed on trust, while a sentence with a name and a date under it is evidence they can check, and the link goes to the piece so they can. Reach for it when you have three or more mentions with quotable lines in them, and prefer it to Logo list every time you have the quote. Two mentions is a list, not a section; put those in the page copy instead.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Eyebrow**. Small uppercase label above the heading. Use it to group sections into themes.
- **Heading**. Free text, empty by default.
- **Display style**. `List` · `Carousel` · `Grid`, default `Carousel`.
- **Columns on desktop**. 1–4, default 3.
- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.
- **Color scheme**. Colour scheme.

## Blocks

- **Press mention**. 5 settings.

_Available in the theme editor as **Press**._

<!-- generated:end -->

## Example use cases

Whirligig's own demo does not use this section. These are the three shapes it holds well.

**Three reviews on an about or workshop page.** **Display style** Grid with **Columns on desktop** 3, **Heading** "What has been written about the bench", **Eyebrow** blank unless the page groups sections under labels, one **Press mention** block per piece with **Publication name** set and **Publication logo** left empty, **Quote** kept to a single sentence, **Attribution date** as month and year, **Link to article** pointing at the piece. Grid at 3 columns is the composition this section is designed around and the only one that collapses cleanly to a single column under 768px.

**One long mention under a product argument.** **Display style** List with a single block, **Columns on desktop** irrelevant in list mode, padding 96 and 96, scheme-2 so the quote reads as a plate. List stacks blocks in a column at 32px gaps, which gives one quote room to be three lines long without looking like an orphaned card.

**Six or more mentions on a dedicated press page.** **Display style** Grid with **Columns on desktop** 3, so six mentions make two clean rows. Resist the default Carousel here: it hides everything past the third card behind a horizontal scroll with no scrollbar and no arrows, which on a press page hides exactly the thing the page is for.

## Notes

**Whirligig does not use this section.** Nothing in `dist/templates/` references `press`.

**A logo mention has no accessible name at all.** The logo's `image_tag` is the only one in this batch of sections that passes no `alt:` argument, and unlike `logo-list` the wrapping link carries no `aria-label` either. A screen reader reaching a logo-only mention finds a link with nothing in it, which is a WCAG 2.4.4 and 4.1.2 failure and an automated axe hit. Until that is fixed, either set **Publication name** and leave **Publication logo** empty, or make sure every logo you upload has alt text set in Files. `dist/sections/press.liquid`.

**Publication name is ignored whenever a logo is set.** The two are an if/else, not a pair, so a logo replaces the name rather than captioning it. Combined with the note above, a logo-only mention is unattributed to anyone not looking at it.

**Carousel is the default and it is the worst of the three.** Cards are `flex: 0 0 min(360px, 85vw)` in an `overflow-x: auto` track with `scrollbar-width: none`, a hidden webkit scrollbar, no arrows and no `tabindex`. Chrome makes such regions keyboard focusable on its own; Safari does not. Change **Display style** to Grid or List when you add the section rather than after someone complains.

**The eyebrow is nested inside the heading branch.** **Eyebrow** with **Heading** left blank renders nothing at all. Set both or set neither.

**Every link opens in a new tab with no warning.** `target="_blank" rel="noopener noreferrer"` is applied unconditionally and nothing in the accessible name says so. If that matters to you, say "opens the article" in the quote's surrounding copy; there is no setting for it.

**Two colours here are alphas of the text colour.** The date is `rgb(var(--color-text) / 0.7)` and the short rule above a publication name is `rgb(var(--color-text) / 0.5)`. On a saturated or dark ground this theme requires a solid AA-checked value instead, so keep Press on scheme-1 or scheme-2.

**The logo is fixed at 36px tall, greyscale, at 70% opacity, restored on hover only.** No `:focus-within`, so a keyboard visitor never sees it restored, and a touch visitor never does either.

**The preset ships filler copy and it is the wrong voice.** "Publication One", "A must-have for any enthusiast", "Sets the standard for the industry". A merchant who adds the preset and publishes has three fabricated reviews on a live storefront. Replace all three blocks before saving, or delete the section.

**`<cite>` carries the date, not the publication.** The markup puts **Attribution date** inside a `<cite>` in the blockquote footer, where `<cite>` means the title of a work. Harmless to render, wrong to a parser, and worth knowing if you are adding structured data around it.

**Nothing here touches the audio layer.** No block is pitched and the section declares no `data-strike-item`, so the strike line passes over it and the HUD's value slots stay hidden.
