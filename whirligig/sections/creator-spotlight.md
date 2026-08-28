---
title: "Creator spotlight"
description: "A maker monograph: portrait, name at poster scale, biography and mark, with a rail of that maker's own products resolved from a collection underneath."
---

# Creator spotlight

Creator spotlight is a maker monograph. A portrait sits beside the name at poster scale, then a role line, a short biography, an optional stamped mark and one call to action; beneath all of that runs a rail of that maker's own products, resolved from a collection rather than hand-listed. Reach for it on the page where a visitor decides whether the shop is a real workshop or a reseller, which is usually the About page and, once, the homepage. It holds exactly one person, so it is not a team grid and not a testimonial block, and the rail is the part that stops it being an About paragraph with a photograph attached.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Portrait**. Image.
- **Name**. Default “Featured creator”.
- **Role or credential**. Shown as an eyebrow above the name — e.g. "Illustrator", "Guest designer", "Master roaster".
- **Bio**. Free text, empty by default.
- **Signature or mark**. Image. Optional small signature, monogram, or maker's mark shown after the bio.
- **Products to show**. 2–8, default 4.
- **Card hover effect**. `Swap to second image` · `Zoom` · `None`, default `Swap to second image`. What happens to a rail card image on hover. 'Swap' crossfades to a second product image. 'Zoom' scales the single image in place — the safe choice for single-image catalogs. 'None' leaves the image still. 'Swap' falls back to 'None' for products with only one image, so a card never blanks.
- **CTA label**. Default “Shop the collection”.
- **CTA link**. A link. Leave blank in collection mode to link to the picked collection.
- **Product source**. `Collection` · `Hand-picked products`, default `Collection`.
- **Collection**. The creator's own collection. Used when product source is "Collection".
- **Products**. Used when product source is "Hand-picked products".
- **Name display size**. `None — standard heading` · `Display S` · `Display M` · `Display L` · `Display XL`, default `None — standard heading`. Render the creator name at the oversized display scale (type-as-structure call-out).
- **Layout**. `Portrait left` · `Portrait right` · `Stacked`, default `Portrait left`.
- **CTA style**. `Button` · `Link`, default `Button`.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

## Blocks

None. The section renders from its own settings.

_Available in the theme editor as **Creator spotlight**._

<!-- generated:end -->

## Example use cases

**The tuner, on the homepage.** Whirligig's `the-tuner` sets **Name** "Nell Harrow", **Role or credential** "Tuner · Troy, New York", **Name display size** Display XL, **Layout** Portrait left, **Product source** Collection with **Collection** `tuned-by-nell`, **Products to show** 4, **CTA label** "Everything off Nell's bench", **CTA style** Button, scheme-1, 88px top and bottom. It sits eleventh of eighteen sections, after the bronze story and before the method steps, so the person arrives once the objects have already made their case.

**The workshop page, the same maker, quieter.** `page.the-workshop` reuses the identity fields and changes three things: **Layout** Portrait right, **CTA style** Link, **Card hover effect** None, on scheme-2 against the homepage's scheme-1. Mirroring the layout and demoting the button is what keeps two placements of one person from reading as the same block pasted twice. That page already opens on `main-page` copy, so the spotlight is the second voice rather than the first.

**A guest tuner or a visiting maker.** Set **Product source** to Hand-picked products and list up to eight in the order you want them read, set **Layout** to Stacked so the block reads as an insert rather than a second founder, and leave **CTA link** blank only if you are in Collection mode, since that fallback does not exist in hand-picked mode. Stacked caps the portrait at 420px and centres the copy under it.

## Notes

**What it needs to look right:** a portrait shot in the same light as the product photography, a biography of roughly 60 to 90 words, and a collection holding at least as many products as **Products to show**. With no portrait the section renders a grey `.placeholder-svg` in a 3:4 frame occupying two fifths of the page width, which is worse than no section.

**Portrait framing is fixed at `aspect-ratio: 3 / 4` with `object-fit: cover`.** A landscape or square file is centre-cropped to a tall rectangle with no control over the crop point. Crop it before uploading.

**The rail is capped at four columns** no matter what **Products to show** says. The setting ranges 2 to 8, so 8 gives two clean rows and 5 gives a row of four plus an orphan. Use 4 or 8.

**The rail cards are real product cards**, so they inherit the `scale · voice` eyebrow from the metafields, the one-of-one chip, and the audition button on any product carrying a playable `custom.recording`. Only one recording plays at a time store-wide, so auditioning a rail card stops whatever was playing elsewhere on the page. That is the intended behaviour, not a bug to report.

**"Swap to second image" is the right hover here, and not for the obvious reason.** `product-card` rewrites it: with no second image and a playable recording it becomes `audition`, and with no second image and no recording it becomes `none`. So on a one-of-one catalogue where most instruments have a single photograph, **Swap** is what gives the rail the theme's own audition hover, and **None** is the setting that deliberately opts out. **Zoom** always passes through untouched.

**The rail is not part of the register.** `product-card` emits no `data-strike-item`, so the strike line crosses these cards without naming them in the HUD or moving the ruler indicator. Only `pitch-axis` and the product gallery feed the line. Do not describe this rail as playable by scroll.

**The portrait does not route through `responsive-image`.** It renders a raw `image_tag` at `widths: '300,450,600,900,1600,2000,2400,2800,3200'` with `sizes: '(min-width: 769px) 40vw, 100vw'`. The ceiling is generous enough that this is not an upscale, but it is the one image on the block the shared snippet is not governing, and it will fetch a 1600px file for a 576px box on a 2× display.

**The signature slot is worse filled badly than left empty.** It renders at 56px tall from a 400px source and is meant for a stamped maker's mark or a monogram, not a scanned autograph and not a logo. If the macro does not exist, leave the setting blank; the section simply omits the element.

**Keep it on scheme-1 or scheme-2.** The role line and the biography are drawn as alphas of the text colour, at 0.65 and 0.8. On a pale ground those measure fine. On a saturated ground such as scheme-4 they do not, and an alpha of `--color-text` on a saturated ground is a named defect in this theme, not a preference.

**One per store.** The section makes a claim about who made the thing. Two of them on one page makes it a staff directory, and the display-scale name stops carrying weight the second time a reader sees it.
