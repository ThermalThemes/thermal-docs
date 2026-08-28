---
title: "Shelf rack"
description: "The audible dead end: one section that answers the 404, the empty cart and a search with no results with a short ruled list of instruments that play in place."
---

# Shelf rack

One section serving three dead ends, because the rule on this site is that no dead end is silent. It renders a short ruled list of hand-picked instruments, each row carrying a thumbnail, its tuning descriptor, a true recording length, a price and a play button, so "there is nothing here" is answered with something to hear rather than with an apology. Reach for it on the 404, the empty cart and the zero-results search, which are the only three templates it is enabled on. `render_when` decides which of those states it belongs to, and it suppresses on the positive state rather than requiring the negative one, so the section stays visible in the theme editor where a merchant can actually configure it.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Show this section**. `Always` · `Only when the cart is empty` · `Only when a search returns nothing`, default `Always`. Lets one section serve the 404, the empty cart and zero results.
- **Eyebrow**. Small uppercase label above the heading.
- **Heading**. Default “Still on the shelf”.
- **Intro**. Free text, empty by default.
- **Button label**. Free text, empty by default.
- **Button link**. A link.
- **Color scheme**. Colour scheme.
- **Top padding**. 0–160px in steps of 4, default 56px.
- **Bottom padding**. 0–160px in steps of 4, default 56px.

## Blocks

Up to 8 blocks.

- **Instrument**. 1 setting.


<!-- generated:end -->

## Example use cases

**The 404.** `404.json` `still-here`: `render_when: always`, eyebrow "On the bench right now", heading "Still on the shelf", an intro that states the count and the rule ("Six instruments that have not sold. Each one plays its own recording."), six blocks running the ladder from `handpan-d-minor-0418` to `spinning-singer`, CTA "Browse by scale", `scheme-2`, 56/24. A six-tile `collection-list` of the scales follows it, so a wrong URL gets a listen and then a route.

**The empty cart.** `cart.json` `listen-while`: `render_when: cart_empty`, heading "Eighteen dollars to two thousand eight hundred", four blocks picked one per price decade (`spinning-singer`, `kalimba-17-walnut`, `bowl-hammered-24`, `handpan-d-kurd-0412`) so the ladder is legible in four rows. It disappears the moment a line item exists, and the `featured-collection` bench shelf below it does not.

**Zero results.** `search.json` `nothing-filed`: `render_when: search_zero`, heading "We do not make one of those", four handpans in four different scales so a shopper can compare back to back on the page that just failed them, CTA "Browse every scale".

## Notes

- **It has no preset, so the editor cannot put it back.** `enabled_on` is `404`, `cart` and `search`, and the schema carries no `presets` entry, which keeps it out of the theme editor's Add section list. Delete it from a template and the only route back is the template JSON. Worth knowing before a merchant tidies a page.
- **`render_when` is an exclusion, and that is deliberate.** `cart_empty` hides only when `cart.item_count > 0`; `search_zero` hides only when `search.performed and search.results_count > 0`. On any surface where the state cannot be evaluated, it renders. An inclusion test would make the section invisible in the theme editor, which shows an empty cart and performs no search, and a section a merchant cannot see is a section a merchant cannot fix.
- **The row is not written here.** Each row is `snippets/record-row.liquid`, shared with the search overlay's zero-query state, so the play control, the duration bar and the heading level cannot drift between the two surfaces. A product with no `custom.recording` renders as a row without a play button rather than as a dead control.
- **The length bar is a real length, and there is no waveform.** It comes from `recording.duration`, written into a `--dur` custom property. The theme holds no per-file amplitude data, so a drawn waveform would be decorative fiction presented as measurement, which is the same violation the Chladni ornament caption exists to prevent.
- **Audio.** Nothing autoplays. Each row is the shared player's `card` variant, one recording at a time store-wide. This is one of the few places a visitor hears the shop without having armed the strike line, because the row buttons work on their own.
- **Count your rows against your copy.** The intro is a plain text setting, not a computed count. The 404's says "Six instruments" and carries six blocks. Add a seventh and the sentence is quietly wrong.
- **Between three and six rows.** The cap is 8. Under three it stops reading as a shelf and a `featured-collection` would do the job with less ceremony. Over six it starts competing with the page it is apologising for, and on the search template it pushes the query field off a phone screen.
- **A block with no product is skipped in silence.** No placeholder, no gap, no editor warning. Convenient, but a mis-set block looks exactly like a shorter list.
- **Leave it off** any page whose primary content is present. This is an answer to absence; on a populated page it is only another product row.
