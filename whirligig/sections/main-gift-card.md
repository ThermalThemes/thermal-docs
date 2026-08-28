---
title: "Gift card"
description: "The entire gift-card page, brought inside the theme layout so it carries the masthead, the footer and the strike line, with the balance as its one display numeral."
---

# Gift card

Gift card is the whole gift-card page, and it exists because that page used to sit outside the theme entirely. `templates/gift_card.liquid` is now a single `{% section %}` include, so the recipient lands inside the masthead and its pitch ruler, the footer, the sound switch and the strike line, and a merchant can edit every word of it in the theme editor. Shopify does not support a `gift_card.json`, so the section order on this page is permanently one; everything the page can become comes from these settings and from theme blocks slotted at the foot of the details column. Treat it as a first impression rather than as a receipt. It is the page most themes leave unstyled, which makes it the page a reviewer opens on purpose.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Heading**. Leave blank to use the theme's default gift-card heading.
- **Subheading**. Default “Spend it on anything on the bench. Every instrument here…”.
- **Layout**. `Centered` · `Split`, default `Split`. Split falls back to centered when there is no card image.
- **Balance display size**. `None — standard size` · `Display S` · `Display M` · `Display L` · `Display XL`, default `Display XL`. The balance is the page's one display numeral. At any size other than None it is cut by the strike line.

**Card image**

- **Image**. Image. Falls back to the store's brand cover image. One object on seamless ground — no gift-wrap props.
- **Image alternative text**. Free text, empty by default.

**Code and actions**

- **Show QR code**. On by default.
- **QR code size**. 96–240px in steps of 8, default 120px.
- **Show shop button**. On by default.
- **Shop button label**. Leave blank to use the theme's default label.
- **Show print button**. On by default.
- **Footnote**. Default “If the balance does not cover the instrument, the rest goes on…”.

**Colors**

- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 96px.
- **Bottom padding**. 0–160px in steps of 4, default 96px.

## Blocks

- **Theme blocks**. Any block in the theme’s shared block library.


<!-- generated:end -->

## Example use cases

**As it ships.** **Layout** Split, **Balance display size** Display XL, **Show QR code** on at 120px, both **Show shop button** and **Show print button** on, scheme-2, 96px top and bottom. The default subheading does the brand's one job ("Spend it on anything on the bench. Every instrument here carries its own recording, so you can hear it before you choose it") and the default footnote states the two things a gift card does not cover: a balance short of the instrument goes onto a card at checkout, and re-tuning is a separate paid bench service. That footnote is the section doing what the rest of the store does, which is saying out loud what it did not do.

**No card image, meant to be printed.** Leave **Image** blank and let `shop.brand.cover_image` carry it, or leave both blank. **Layout** falls back to Centered on its own, the balance plate keeps its own ground, and the composition still reads as a card rather than as a stray heading. Keep **Show print button** on for this version, because a centred card with a large balance and a QR beside it is the one somebody actually prints.

**A quieter card for four-figure balances.** Set **Balance display size** to Display M or Display S where the store sells $1,150 to $2,800 handpans. At Display XL a $2,800 balance is an enormous numeral cut in half by a bronze rule, which is the right drama for $50 and the wrong drama for a two-year purchase decision. **None** drops the develop treatment entirely and sets the amount at 2.5rem in the heading face.

## Notes

**You cannot leave it off, and you cannot add anything beside it.** Shopify does not support a `gift_card.json`, so this page has exactly one section forever. Depth has to come from the settings and from theme blocks in the `@theme` slot at the foot of the details column. It costs nothing to run: no collection, no metafield, no image required.

**The balance is `--ink`, never `--brass`.** This is a rule, not a preference. The brass numeral licence requires an identical `--ink` twin inside the same component with the brass copy marked `aria-hidden`, and a currency amount has no twin to pair with. Brass measures 2.77:1 and fails at every size, display included. Do not improve this by making the figure brass.

**The develop pair is two copies of one number.** At any **Balance display size** other than None the amount renders twice, a solid layer and a 1px outline layer, clipped against each other at the pixel the strike line reports and re-cut as the page scrolls. The outline copy is `aria-hidden` so the amount is announced once. Under `prefers-reduced-motion` the split is dropped and the figure renders solid.

**The page emits no `[data-strike-item]`, deliberately.** A gift card has no pitch, and this theme's rule is that unpitched objects sit outside the register rather than being handed a fake position. The rule still crosses the page and still cuts the balance, but the readout names nothing, because there is honestly nothing to name.

**The card image routes through `responsive-image`** at `sizes: '(min-width: 900px) 46vw, 92vw'` with `loading: eager`, framed 3:2 with `object-fit: cover`. A portrait file is centre-cropped to a landscape card. One object on seamless ground; no ribbon, no gift-wrap props, nothing that turns the page into a greetings card.

**The code renders twice on purpose.** The grouped `format_code` version is `aria-hidden` ornament, so a person can read it off a screen without losing their place, and an ungrouped copy sits beside it as the accessible equivalent inside a labelled `role="group"`. Grouped text is read back as several fragments, which is not what a redemption code is. Do not tidy either copy away.

**Copy needs a secure context.** `navigator.clipboard` is unavailable over plain HTTP and in some embedded browsers; where it fails, the handler does nothing visible and the code stays on screen and selectable, which is the intended degradation rather than an oversight. The confirmation is written into the live region rather than un-hidden, because a live region whose text never changes announces nothing.

**The QR image is `aria-hidden` with an empty alt** because the code beside it is its accessible equivalent, not because it is decorative. Turning **Show QR code** off costs nothing for a screen-reader user and costs a phone-at-the-counter user everything.

**Every state branch is live.** Zero balance adds `gift-card--spent`, which drops the card face to 72% opacity while the figure stays at full contrast. Expired, disabled and expires-on each render their own notice above the code. Test the expired and spent branches before submission; they are the two nobody looks at.

**Blank heading and blank button label fall back to locale strings**, `gift_card.heading` with the shop name interpolated and `gift_card.shop_link`. Changing those for real means editing `locales/en.default.json` and its translated siblings, not the theme editor.

**It declares a colour-scheme default of scheme-2**, which most sections in this library do not, so it will not silently inherit whatever a template last set. Remember that exactly one scheme-3 block is allowed per page: this page has one section, so choosing the dark scheme here spends the whole page on it.
