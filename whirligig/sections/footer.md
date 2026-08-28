---
title: "Footer"
description: "The footer carries the complete text navigation, the newsletter, and the recordings colophon with its Chladni divider."
---

# Footer

The footer is the theme's complete text navigation and the one place it states a number about the whole shop. Above the column grid sits the colophon: a Chladni divider, a lead sentence, a count, and the true length of the eight newest recordings drawn as plain bars. Below it, blocks lay out on a grid whose desktop width you set with **Columns (desktop)**. It is chrome, so it carries a colour scheme but has no section padding settings, and it must hold every destination the pitch ruler offers, because the ruler is an enhancement and the footer is the fallback.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Brand name**. Default “Timbre”. Shown as the footer wordmark when no logo image is set. Defaults to the store name — which on a demo store is the myshopify handle, not the brand.
- **Columns (desktop)**. 2–6, default 4.
- **Show payment icons in footer bottom bar**. On by default.
- **Color scheme**. Colour scheme.

## Blocks

- **Recordings colophon**. 2 settings.
- **Navigation column**. 2 settings.
- **Text column**. 2 settings.
- **Brand**. 5 settings.
- **Newsletter**. 4 settings.
- **Image**. 3 settings.
- **Payment icons**. 1 setting.


<!-- generated:end -->

## Example use cases

**What Whirligig ships.** `column_count: 4` on `scheme-2`, with six blocks in order: **Recordings colophon** (lead "Recorded in Troy, New York."), **Brand** (the one-line rule about recording before shipping, social off), three **Navigation columns** (Scales, Families, The bench) and **Newsletter** ("Bench notes", "What came off the bench, roughly monthly. No sales.").

**A three-column footer for a smaller catalogue.** `column_count: 3` with **Brand**, one **Navigation column**, and **Newsletter**. Drop the colophon block if the store does not publish a recording per product; the sentence is only worth printing when the number is true.

**The colophon alone, above a bare bottom bar.** Just the **Recordings colophon** block and nothing else. The column grid does not render at all when no column block exists, leaving the divider, the count line, the bars and the copyright row. Reasonable on a single-page store where navigation lives entirely in the masthead.

## Notes

**The colophon is not a column.** It renders above the grid and the column loop skips it, so it never counts toward **Columns (desktop)** and it never takes a grid cell. `limit: 1`.

**Column count and block count are independent, and a mismatch leaves an orphan.** The shipped footer has five column blocks against `column_count: 4`, so at 990px and up the first row holds four and Newsletter sits alone on a second row. Set Columns to 5 or drop a block. Below 990px the grid falls back to `auto-fill, minmax(180px, 1fr)` and the setting has no effect at all.

**The colophon counts products, not recordings.** It prints `products_count` of the chosen collection into "{count} recordings on this site." The shipped block points at all products, which is 44 objects, of which 38 carry a recording; the sentence is wrong by the six bench items. Point it at the pitched collection instead. The bars beneath are honest: only products whose `custom.recording` has a non-zero `duration` draw one, first eight of the collection, `aria-hidden`, and there is no waveform because no amplitude data is held.

**A Navigation column with an empty or missing menu still renders its heading.** You get a heading with nothing under it and no build error. Confirm each menu resolves to links before shipping; a heading-only column is the defect this theme is most often accused of.

**The Image block caps its srcset at 400px.** It emits `widths: '200,300,400'`. A 4-column footer at 1300px gives each column roughly 290px, so a retina display wants 580px and cannot get it. Use the block for a small mark or a payment badge, not a picture.

**Payment icons have two placements and both can be on at once.** `show_payment_icons_bottom` puts them in the bottom bar (on by default); the **Payment icons** block puts them in a column. Enabling both shows them twice.

Social icons come from the global social URL settings, not from the Brand block, so `show_social: true` with no URLs set renders an empty list. The newsletter posts to the customer form tagged `newsletter` and the success message appears only after a real submission, which means you cannot preview it in the editor. Footer link colour is 75% of the scheme text colour, which measures about 6.9:1 on `scheme-2`; on a dark scheme re-measure before shipping, because a percentage of the text colour is not a checked palette value.
