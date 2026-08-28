---
title: "Bundle builder"
description: "A tap-to-select grid over one collection that adds three to five chosen items to the cart in a single request, grouped by a shared line-item property."
---

# Bundle builder

Bundle builder is a selection grid over one collection. The shopper taps between a minimum and a maximum number of tiles, and one button adds all of them to the cart in a single request, every line carrying the same line-item property so the group reads as one pack. It does not calculate pack pricing; that is a merchant automatic discount or a bundles app, and the **Savings message** field is static copy the theme cannot verify against the discount that is actually live. Reach for it at the accessory end of a catalogue, where things are genuinely bought three and four at a time. Leave the instruments themselves out of the pool: the tile is not the product card, so it carries no audition player.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Minimum items in a pack**. 1–12, default 3.
- **Maximum items in a pack**. 1–12, default 5. Clamped up to the minimum if set lower.
- **Progress text**. Default “{count} of {min} selected”. Tokens: {count} selected so far, {min}, {max}.
- **Savings message**. Static copy only — pack pricing itself is a merchant automatic discount or a bundles app, never computed by the theme.
- **Add-pack button label**. Default “Add pack to cart”.
- **Pack property key**. Default “_pack”.
- **Pack property value**. Default “Build-your-own pack”.
- **Eyebrow**. Small uppercase label above the heading. Use it to group sections into themes.
- **Heading**. Optional — leave blank to render no section heading.
- **Heading display size**. `None — standard heading` · `Display S` · `Display M` · `Display L` · `Display XL`, default `None — standard heading`. Render the heading at the oversized display scale (type-as-structure) instead of the standard heading size.
- **Selection pool**. A collection. The collection shoppers pick from.
- **Products to show**. 2–24, default 12.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Layout**

- **Columns on desktop**. 2–6, default 4.
- **Columns on mobile**. `1 column` · `2 columns`, default `2 columns`.

## Blocks

None. The section renders from its own settings.

_Available in the theme editor as **Bundle builder**._

<!-- generated:end -->

## Example use cases

**The bench pack, as Whirligig ships it.** On `page.theme-features`, **Selection pool** is `bench`, **Minimum items in a pack** 3, **Maximum items in a pack** 5, **Products to show** 12, **Columns on desktop** 4, **Eyebrow** "Cart-coupled", **Heading display size** Display M, **Pack property value** "Bench pack". The bench collection holds six objects and not one of them makes a sound: hard case $180, soft bag $120, stand $95, felt mallets $32, bowl cushion $25, re-tuning service $150. That is exactly why the pack picker sits here and not one section higher, among the instruments.

**A first-handpan kit.** Point **Selection pool** at a hand-built collection of bag, stand, mallets and cushion, set **Minimum** 3 / **Maximum** 4 / **Products to show** 4 so that **Columns on desktop** 4 fills one clean row with no orphans, and set **Add-pack button label** to "Add the starter kit". Configure the discount in Shopify first, then put its actual terms in **Savings message** and nothing else: "Any three off the bench, 10% at checkout."

**A handful of whirligigs.** Pool the five whirligigs, $18 to $48, with **Minimum** 3, **Maximum** 5, **Columns on mobile** 2. Decide this one on purpose rather than by default: whirligigs carry recordings, and a bundle tile has no audition button, so this grid would be the only place in the store where a pitched object is sold silently. If that matters more than the pack, use `featured-collection` instead and let the cards play.

## Notes

**The tile is not the product card.** This section builds its own button, not `product-card`, so a bundle tile has no audition player, no `scale · voice` eyebrow, no one-of-one chip and no `data-strike-item`. The strike line will pass over it without naming anything. On a store whose whole argument is that you can hear the object first, a pool of pitched instruments here quietly drops that argument for the length of the section.

**Images do not route through `responsive-image`, and the widths are short.** The tile uses a raw `image_tag` at `widths: '200,300,400'` with `sizes: '(min-width: 769px) 20vw, 40vw'`. At the theme's 1300px container with four columns the media box is roughly 290 CSS px, so a 2× display wants about 580px and the largest width the theme offers is 400. Shopify never upscales, so the browser serves 400 into a 580 box. This is the craft-gate upscale class; fix the emitted widths, not the sources.

**With no collection picked it renders `.placeholder-svg` tiles**, one per **Products to show**. Grey Shopify placeholders are a named anti-pattern on any route that gets screenshotted. Pick the pool or delete the section.

**Selection adds `selected_or_first_available_variant`.** Multi-variant products are selectable but the shopper cannot choose a variant from the tile, so keep the pool single-variant or default-variant. The `bench` pool is safe on this count. It does contain the re-tuning service, which is worth a second look before you ship: a service inside a physical pack is defensible, but decide it rather than inherit it.

**Sold-out items stay in the grid** as a disabled tile with a SOLD OUT plate rather than disappearing. On a catalogue where most instruments are quantity one, an instrument pool goes visibly dead over a few weeks. Bench stock is repeatable, which is the second reason the pool is the bench.

**`Maximum` is clamped up to `Minimum`**, so an inverted pair does not break the section. It silently becomes min equals max, which looks like a bug to the merchant who set it.

**The default property key is `_pack`.** A line-item property whose key starts with an underscore is hidden from the cart, the checkout and the order confirmation. That is usually what you want for internal grouping. If the shopper should see "Bench pack" on their receipt, drop the underscore.

**Column count against pool size.** Four columns against a six-item pool leaves two tiles alone on the second row. Set the column count to a divisor of the pool, or cap **Products to show** to a multiple of it.

**The progress line is `aria-live="polite"`** and the add button stays `disabled` until the minimum is reached, so a keyboard shopper is told where they are. Keep **Progress text** stating the count and the minimum. A progress string with no numbers in it makes that live region useless.
