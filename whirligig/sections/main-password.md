---
title: "Password page"
description: "The storefront password gate: wordmark, heading, password form and owner link, in a centred card or beside a full-height image splash."
---

# Password page

The only section a visitor sees while the storefront password is on, which on a demo store means it is the first page anyone loads, reviewers included. It offers two layouts: a centred card, and a split layout with a full-height image splash beside the form panel. It carries the shop wordmark or a logo, an optional eyebrow and heading, the password form itself, and the "Are you the store owner?" link. Every display element can be switched off individually, down to just the form.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Logo**. Image. If empty, the shop name renders as a typographic wordmark.
- **Splash eyebrow**. Free text, empty by default.
- **Splash heading**. Free text, empty by default.
- **Splash text**. Free text, empty by default.
- **Eyebrow**. Small uppercase label above the heading. Use it to group sections into themes.
- **Heading**. Default “Opening soon”.
- **Subheading**. Free text, empty by default.
- **Splash image**. Image.

**Colors**

- **Form panel color scheme**. Colour scheme.
- **Color scheme**. Colour scheme.

**Display options**

- **Show logo / shop-name header**. On by default.
- **Show heading**. On by default.
- **Show subheading**. On by default.
- **Show "Are you the store owner?" footer**. On by default.

**Layout**

- **Logo width**. 80–320px in steps of 10, default 160px.
- **Layout**. `Centered card` · `Split — splash + form`, default `Centered card`. Split renders a full-height brand splash (image + heading) beside the form panel. Falls back to centered when no splash image is set.

## Blocks

None. The section renders from its own settings.


<!-- generated:end -->

## Example use cases

**What Whirligig ships.** A centred card on `scheme-3`, the dark showpiece scheme, so the gate is ink and the shop behind it is stone. It is the only page in the theme that leads with dark, and the contrast between the gate and the storefront is the intent.

**The split layout.** `layout: split` with a `splash_image` of the bench, `splash_eyebrow: "Troy, New York"`, a `splash_heading` of "Hear it first", `splash_text` naming what the shop makes, and `form_color_scheme: scheme-1` so the form panel stays stone against the dark image. With no splash image set, `split` falls back to `centered` silently rather than rendering a broken grid.

**A gate with no marketing on it.** `show_heading: false` and `show_subheading: false`, leaving the wordmark, the password field and the owner link. Correct while a store is genuinely closed rather than launching, where a heading would be making a promise nobody has scheduled.

## Notes

**The password page does not load the theme's stylesheet layer.** `layout/password.liquid` renders `theme.css` and `custom.css` only; it never renders the `theme-overrides` snippet, which is where every Whirligig token and every theme rule lives. The colour schemes and font families come through, because those are emitted by `css-variables`, but the design system does not: `--radius-base` falls back to the substrate's 4px, so the password input and the submit button ship rounded on a theme whose rule is square corners everywhere except three named places. The two `body.template-password` rules that exist in the override layer never run. Check this page against the rest of the theme before submitting anything.

**The heading defaults to "Opening soon" and the shipped template does not override it.** `password.json` sets only `color_scheme`, so the page renders the substrate default with no eyebrow and no subheading. Set `heading`, `eyebrow` and `subheading` before anyone else sees the store.

**The wordmark is `shop.name` with no text override.** The Header and the Footer each have a Brand name setting precisely because a store's `shop.name` is often still its myshopify handle; this section has no equivalent. Fix the store name in Shopify admin, or upload a `logo`.

**Secondary text is drawn as a percentage of the scheme's text colour rather than a checked palette token.** At 0.65 on `scheme-3` that measures about 6.3:1, which clears AA, but the value is not one of the palette's verified pairs. Change `color_scheme` and you have to re-measure.

**The splash image bypasses the theme's responsive-image path.** It is emitted with a plain `image_tag` at up to 3200px wide, loading eagerly, and it is the largest paint on the page. The splash also puts white text over a black gradient scrim on a photograph, which is the one place the theme does that; everywhere else text sits on stone. That is a reason to prefer the centred layout.

There is no header, footer, strike line, pitch ruler or audio on this page: the password layout renders `content_for_layout` and nothing else. The owner link points at `/admin` and is not localised. `enabled_on` restricts the section to the `password` template, and the only way to see it is to turn the storefront password on.
