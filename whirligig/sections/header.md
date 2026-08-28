---
title: "Header"
description: "The masthead: wordmark, menu, the sound switch that arms audio, and the pitch ruler that carries one tick per instrument at its true frequency."
---

# Header

The header is the whole of Whirligig's chrome and it does four jobs at once. Row one carries the wordmark, the navigation, the sound switch, search, account and cart. Row two is the pitch ruler: one short tick for every instrument at its real frequency, a bar for every object that has no single pitch, and eight bronze stems at the scale dings. The ruler is also where the strike line writes its position readout, so on a page with pitched products it is navigation, scroll indicator and a picture of the catalogue's range at the same time. Reach for the ruler only when your products carry the `custom.pitch` metafield; with nothing to draw it is a bare 48px strip under the wordmark.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

**Wordmark**

- **Wordmark text**. Overrides the store name in the masthead and the menu drawer. Leave blank to use the store name.

**The strike line**

- **Show the sound switch**. On by default. Lets a visitor turn on audio so each instrument sounds as it crosses the strike line. Audio never plays until this is switched on.
- **Show the pitch ruler**. On by default. Draws one tick per instrument at its true pitch, plus the scale stems below.
- **Ruler source collection**. Which collection the ruler draws its ticks from. Defaults to all products.
- **Logo image**. Image.
- **Transparent header logo**. Image. Alternative logo shown on the transparent header (light logo for dark backgrounds)
- **Navigation menu**. A menu.
- **Transport label**. Default “Now”. Prefixes the name of whatever is playing, in the header's own transport readout. The readout only appears while something is sounding.
- **Sticky header**. On by default.
- **Transparent header**. Off by default. Header background is transparent until the page is scrolled. Works best on pages where the first section is a full-bleed image.
- **Account navigation menu**. A menu. Navigation links shown in the account dropdown. Leave blank for no dropdown.

**Colors**

- **Transparent header text color**. Colour.
- **Color scheme**. Colour scheme.

**Display options**

- **Show country/region selector**. Off by default.
- **Show country flag (ISO code prefix)**. Off by default.
- **Show country name**. On by default.
- **Show language selector**. Off by default.
- **Show search**. On by default.
- **Show account**. On by default.
- **Show cart**. On by default.

**Layout**

- **Mobile layout**. `Logo left` · `Logo with menu left` · `Logo center`, default `Logo with menu left`.
- **Logo width**. 50–300px in steps of 10, default 140px.
- **Desktop layout**. `Logo left, nav inline` · `Logo left, nav centered` · `Logo center, nav left` · `Logo center, nav below`, default `Logo left, nav inline`.

## Blocks

Up to 12 blocks.

- **Mega menu**. 7 settings.
- **Menu audition cell**. 5 settings.
- **Scale stem (pitch ruler)**. 3 settings.


<!-- generated:end -->

## Example use cases

**The Whirligig masthead.** `brand_name: Timbre`, `show_sound_switch` and `show_pitch_ruler` both on, `ruler_collection` pointed at `the-register`, one **Mega menu** block on the Shop item, and eight **Scale stem** blocks at `axis_x` 7, 14, 17, 17, 24, 28, 34 and 41. Every stem lands in the left 41% of the ruler because every handpan ding sits between B2 and A3; that clustering is the data, not a layout fault.

**A menu that plays.** Keep the **Mega menu** block on Shop, then add two or three **Menu audition cell** blocks carrying the same `menu_title`, each with a `product` that has a recording, a `label` such as "D Kurd" and a `sublabel` such as "8 NOTES + DING · WARM". The cells appear as a rail at the bottom of the mega panel under the `rail_heading` ("Hear a scale"). Nothing sounds on open, hover or focus; hover only draws the duration bar out.

**A catalogue with no pitch data.** `show_pitch_ruler: false` and `show_sound_switch: false` leaves a conventional two-row masthead with the text nav, search, account and cart. Useful for a bench-only or accessories store where nothing has a frequency, and for any merchant who has not populated `custom.pitch` yet.

## Notes

**Twelve blocks total, shared across all three types.** Eight scale stems plus one mega menu is nine, which leaves three. A full eight-scale ruler with a three-cell audition rail sits exactly on the ceiling. Drop stems before you drop audition cells; the footer carries the same scale links as text.

**The ruler reads `custom.pitch`, and only that.** It is a JSON metafield holding `x`, `xLow`, `xHigh` and an optional `span`, precomputed because Liquid has no logarithm. A product without it draws no tick, which is why the six bench items (bags, stands, mallets, cushion, re-tuning service) are absent by construction rather than filtered out. If the ruler renders empty, the metafield is missing, not the setting.

**The tick loop is capped at 50 products.** `the-register` holds 38, so every tick renders today. Past 50 the remainder silently stop. Point `ruler_collection` at a pitched subset rather than at all products.

**`axis_x` on a scale stem is typed in by hand.** It is a percentage of the A2 to D5 axis and it is not derived from the collection or from any metafield. Retune a scale and the stem does not move. Two scales sharing a ding (D Kurd 9 and D Minor 11, both at 17) sit on top of each other.

**The sound switch is the only arm control in the theme.** Turning it off leaves the strike line drawing and the ruler reading position, but nothing can ever sound: that click is the gesture browsers require before they will play audio at all, and there is no second switch anywhere on the page. It is off on a visitor's first load. The preference is kept for the browsing session, so on a later page the switch repaints as on, and even then nothing sounds until the visitor clicks, types or touches on that page.

**`brand_name` covers the masthead and the menu drawer, and nothing else.** The footer copyright and the password page both print `shop.name` directly. On a store whose name is still the myshopify handle, those two surfaces will show it.

**The scale stems are anchors in a plain `<div>`, not buttons in a `<nav>`.** They work with no JavaScript and they are in the tab order, and each carries a visually hidden accessible name, but the group is not a landmark. Nothing is reachable only by the ruler: the drawer menu holds the same destinations, and so does the footer.

**Transparent header.** `transparent_header_text_color` is a raw colour picker, not a scheme token, so it is not contrast-checked against whatever image sits behind it. It only applies until the page is scrolled. Set a `transparent_logo` as well or the default logo will disappear into a light image.

Logos are requested at `logo_width` and again at twice that for the 2x srcset, so upload at least 280px wide for the 140px default. The hamburger disclosure is hidden at 990px and up; below that the inline nav is replaced by the drawer.
