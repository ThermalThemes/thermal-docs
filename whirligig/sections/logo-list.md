---
title: "Logo list"
description: "A centred row of borrowed marks, greyscale by default, for stockists and certifications rather than for press mentions with something to say."
---

# Logo list

Logo list is a row of images with optional links and nothing else: no quote, no date, no context. That makes it the right section for marks that speak for themselves, which in practice means stockists, retailers, certifications and payment or standards bodies. It is the wrong section for press, because a masthead with no sentence under it asks the visitor to be impressed without telling them what was said; **Press** exists for that and carries a quote. Reach for Logo list low on a page, under the argument rather than above it, and only when you actually have five or more marks and the right to show them.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Display logos in grayscale**. On by default.
- **Subheading**. Free text, empty by default.
- **Eyebrow**. Small uppercase label above the heading. Use it to group sections into themes.
- **Heading**. Default “As seen in”.
- **Logo height**. `Small` · `Medium` · `Large`, default `Medium`.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Display options**

- **Enable carousel on desktop**. Off by default.
- **Enable carousel on mobile**. On by default.

## Blocks

- **Logo**. 2 settings.

_Available in the theme editor as **Logo list**._

<!-- generated:end -->

## Example use cases

Whirligig's own demo does not use this section. These are the three arrangements it is built for.

**Stockists, at the foot of a stockist page.** **Heading** "Where else you can play one", **Subheading** blank, **Eyebrow** blank, one **Logo** block per shop with **Link (optional)** pointing at that shop's own page, **Logo height** Small (32px), **Display logos in grayscale** on, **Enable carousel on mobile** off, **Enable carousel on desktop** off, padding 64 and 64, scheme-1. Greyscale is right here: these are other people's brands and they should not out-colour the page.

**Certifications and standards, under a materials or care page.** **Heading** "What the alloys are certified to", **Logo height** Medium, **Display logos in grayscale** off, because a certification mark that has been desaturated to 60% opacity is arguably no longer the mark, links pointing at each body's own register. Five to eight blocks. Fewer than five and a centred row reads as a gap.

**Retail partners as a plain wrapped row.** **Enable carousel on mobile** off and **Enable carousel on desktop** off, so the track is the flex-wrap grid it is designed to be: centred, 32px gaps, wrapping to as many rows as it needs. Read the first Note before you leave either carousel checkbox on, including the one that is on by default.

## Notes

**Whirligig does not use this section.** Nothing in `dist/templates/` references `logo-list`.

**The two carousel settings are indistinguishable, and one of them is on by default.** `.logo-list__track--carousel-desktop` and `.logo-list__track--carousel-mobile` are declared together in one rule that sits outside any media query, so either checkbox turns the row into a left-aligned horizontal scroller at every width. Since **Enable carousel on mobile** defaults to on, the out-of-the-box Logo list is a desktop scroller with its scrollbar hidden, not the centred wrapped row the rest of the CSS is written for. The intent is visible two rules further down, where a `@media (max-width: 768px)` block adjusts `.logo-list__track:not(.logo-list__track--carousel-mobile)`. Until that is fixed, turn both off. `dist/sections/logo-list.liquid`.

**The scrollbar is hidden and the region is not focusable.** `scrollbar-width: none` plus a `::-webkit-scrollbar { display: none }` on an `overflow-x: auto` track with no `tabindex` and no arrow controls. Chrome now makes overflow regions keyboard focusable on its own; Safari does not, so on Safari any logo past the fold is reachable by pointer only. That is another reason to leave the carousels off.

**The heading is a `<p>`, not a heading element, and it is drawn at 65% of the text colour.** So the section contributes nothing to the document outline, and its most prominent line is an alpha of `--color-text`, which this theme forbids on any saturated or dark ground. Keep Logo list on scheme-1 or scheme-2, and do not rely on it for page structure.

**The reading order is inverted.** **Subheading** renders above **Eyebrow**, which renders above **Heading**. Everywhere else in this theme the order is eyebrow, then heading, then lede. If you set all three you will get an order no other section uses, so set two at most.

**The eyebrow is nested inside the heading branch.** Set **Eyebrow** with **Heading** left blank and the eyebrow renders nothing, silently. This is the theme-wide pattern: whenever a section setting sets an eyebrow, also set a heading.

**Greyscale reveals on hover only.** `.logo-list__track--grayscale` draws every logo at `grayscale(100%)` and `opacity: 0.6` and restores it on `:hover` of the item, with no `:focus-within`. A touch visitor never sees a logo in colour, and a keyboard visitor tabbing to a linked logo does not either. Decide whether the greyscale is the design or the hover is; do not ship both.

**A linked logo with no alt text announces as "Logo".** The link's `aria-label` falls back to the string `Logo` when the image carries no alt, so a screen reader hears "Logo, link" once per block. Set alt text on each image in Files. This is the one place in the section where the merchant's work outside the theme editor decides whether it is accessible.

**A Logo block with no image renders an empty list item.** The image is guarded, the `<li>` is not, so a half-configured block leaves a gap in the row rather than closing up. The preset ships five empty blocks, so this is the state you are in the moment you add the section.

**Logo height is a fixed pixel height, not a box.** 32, 48 or 64px with `width: auto`, dropping Large to 48px under 768px. Wide wordmarks and square roundels at the same height will not look the same size. Trim the artwork to a consistent optical height before uploading; there is no per-block override.

**Nothing here touches the audio layer.** No block is pitched and the section declares no `data-strike-item`, so the strike line passes over the row without naming anything and the HUD's value slots stay hidden.
