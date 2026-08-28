---
title: "Testimonials"
description: "Customer quotes with an optional star rating, a name, a role and an avatar, in a grid or a carousel."
---

# Testimonials

Testimonials is a grid of quotes, each with a name, an optional role, an optional avatar and an optional five-star rating. It is the most-copied section on the internet and it earns its place here only when the quotes are specific: a sentence naming a scale, a delivery, a repair or a decision is evidence, and "Great product, fast shipping" is furniture. Reach for it where a visitor is weighing a purchase they cannot try first and wants to know what happened to someone else who took the risk. If you cannot fill three blocks with sentences a stranger would find informative, leave the section out; three vague quotes make a considered store look like a template, which is a more expensive outcome than an empty page.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Subheading**. Free text, empty by default.
- **Eyebrow**. Small uppercase label above the heading. Use it to group sections into themes.
- **Heading**. Free text, empty by default.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Display options**

- **Enable carousel on desktop**. Off by default.
- **Enable carousel on mobile**. On by default.
- **Show quotation marks**. On by default.

**Layout**

- **Columns on desktop**. 1–4, default 3.
- **Columns on mobile**. `1 column` · `2 columns`, default `1 column`.

## Blocks

- **Testimonial**. 6 settings.

_Available in the theme editor as **Testimonials**._

<!-- generated:end -->

## Example use cases

Whirligig's own demo does not use this section. These are the three compositions worth building with it.

**Three specific accounts on an about page.** **Heading** "What people did with them", **Subheading** and **Eyebrow** both blank so the header does not run in the order this section renders them, **Columns on desktop** 3, **Columns on mobile** 1, **Enable carousel on mobile** off, **Enable carousel on desktop** off, **Show quotation marks** off, **Star rating** 0 on every block so no stars render at all, **Title or publication** carrying something checkable like "Bought the 30 cm bowl, March" rather than "Verified buyer", padding 96 and 96. Turning the rating and the quote mark off is what separates this from the default look, and the default look is the risk.

**One quote as a full-width pull, under a specification table.** A single block, **Columns on desktop** 1, **Show quotation marks** on, **Star rating** 0, scheme-2 so the quote reads as a plate against the table above it. One long sentence from a buyer explaining why they chose one scale over another is worth more on a product page than three short ones anywhere.

**Buyer notes on a first-instrument guide.** **Columns on desktop** 2, **Columns on mobile** 1, **Enable carousel on mobile** on, quotes that name what the buyer got wrong first. This theme's voice says the trade-off out loud, and a testimonial that admits a false start is the only kind that supports that rather than undercutting it.

## Notes

**Whirligig does not use this section.** Nothing in `dist/templates/` references `testimonials`.

**The block's Link setting is dead.** `link` is in the **Testimonial** block schema and the Liquid never reads it: `block.settings.link` appears zero times in the file. A merchant can fill it in, save, and see nothing change, with no indication of why. Either wire it or remove it before submission. `dist/sections/testimonials.liquid`.

**The filled stars are a hard-coded `#f59e0b`.** Not a theme token, not in the palette, and not close to `--brass #B8892F`. It is the only off-palette colour in these seven sections and it lands on a page whose whole colour argument is stone plus ink plus one accent. It also measures about 2:1 against `--ground`. The stars are `aria-hidden` so this is not a text-contrast failure, but a row of amber stars is the fastest way to make this theme look like a different theme. Set **Star rating** to 0 unless you have a reason.

**The rating is invisible to a screen reader.** Each star is `aria-hidden`, and the accessible name lives in an `aria-label` on a plain `<div>` with no role, where ARIA does not reliably expose it. So a five-star rating is announced as nothing at all. `role="img"` on that wrapper would fix it; until then, if the rating carries meaning, put the number in the quote or the role line.

**The quotation mark is set in Georgia.** `.testimonial__quote-mark` hard-codes `font-family: Georgia, serif`, which is a fourth typeface on a theme with exactly three: Instrument Serif, Archivo and Inconsolata. Turn **Show quotation marks** off, which is also the better composition.

**The reading order is inverted.** **Subheading** renders above **Eyebrow**, which renders above **Heading**. Every other pattern in this theme is eyebrow, then heading, then lede. Set two of the three at most.

**The eyebrow is nested inside the heading branch.** **Eyebrow** with **Heading** blank renders nothing, silently.

**Two colours here are alphas of the text colour.** The subheading at 0.65 and the attribution role at 0.65, plus the empty stars at 0.2. On a saturated or dark ground this theme requires solid AA-checked values instead, so keep Testimonials on scheme-1 or scheme-2.

**The avatar image is rendered without an explicit `alt:`.** It is a 40px circle beside a name that is already text, so empty alt text is the correct outcome, but it is not stated in the section. If you use avatars, set alt text in Files or accept that the value is whatever the filter defaults to.

**The preset ships three fabricated reviews.** "This is a great product. I highly recommend it." from "Happy Customer", and two more like it, under the heading "What our customers say". A merchant who adds the preset and publishes has invented customer quotes on a live storefront. The block default is filler too. Replace every block before saving.

**The carousel settings are correctly scoped here**, unlike `logo-list`: the mobile carousel lives in a `max-width: 768px` block and the desktop one in a `min-width: 769px` block. Both still hide their scrollbars and carry no arrows or `tabindex`, so cards past the fold are pointer-only on browsers without keyboard-focusable scroll regions.

**A section with a heading and no blocks renders a header over an empty grid.** There is no minimum-block guard. Delete the section rather than leaving it configured and empty.

**Nothing here touches the audio layer.** No block is pitched and the section declares no `data-strike-item`, so the strike line passes over it and the HUD's value slots stay hidden.
