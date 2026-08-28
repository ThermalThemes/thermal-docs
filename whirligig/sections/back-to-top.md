---
title: "Back to top"
description: "A floating scroll-to-top control in the overlay group, hidden until its custom element upgrades."
---

# Back to top

A small round button pinned to a bottom corner that appears once the visitor has scrolled past a threshold and returns them to the top. It ships with a `hidden` attribute and only reveals itself when JavaScript upgrades it, so it never sits dead on the page. It earns its place in Whirligig because the register and the price ladder are long scroll-driven sections and the pitch ruler, which is the theme's actual navigation, lives at the top of the document.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Position**. `Bottom right` · `Bottom left`, default `Bottom right`.
- **Show after scrolling**. 100–1200px in steps of 100, default 400px.
- **Color scheme**. Colour scheme.

## Blocks

None. The section renders from its own settings.


<!-- generated:end -->

## Example use cases

**What Whirligig ships.** Defaults throughout: `position: right`, `scroll_threshold: 400`, colour scheme left at the theme default. The result is a stone disc with an ink arrow on a hairline border, appearing about one viewport into the homepage.

**Left placement for the pages with a busy readout.** `position: left`. The strike line's HUD is pinned to the right at 58vh and the register deliberately runs content past both viewport edges; moving the button to the left keeps the right side clear where the readout is doing the most work.

**A late appearance so short templates never show it.** `scroll_threshold: 1200`, the maximum. The button stays out of the way on a product page or an article and only turns up on the homepage, the collection pages and the cart, which are the templates long enough to want it.

## Notes

**It sits at `z-index: 50` and the strike line sits at 60.** The line and its HUD draw over the button, which is correct: the line is the page's spine and the button is a convenience.

**The threshold steps by 100px between 100 and 1200.** There is no always-visible option and 0 is not reachable, so on a page shorter than 100px of scroll the button never appears at all.

**It adds a second scroll listener.** The handler is passive but not throttled, and it runs a `classList.toggle` on every scroll event, alongside the strike line's own rAF-throttled handler. On a 44-card register the cost is small but real; if you are chasing the Lighthouse Performance floor, this is a cheap section to remove.

**There is no `enabled_on` restriction.** The editor will let you add this section to a template as well as to the overlay group, and two instances give you two buttons stacked in the same corner with no warning.

`prefers-reduced-motion` is honoured: the scroll jumps instead of animating. The accessible name is the `Back to top` locale string on the button; the arrow is `aria-hidden` and there is no visible label. The colour scheme paints the disc, not the page, so putting the button on `scheme-3` over a stone page reads as a hole punched in the corner. Match it to the page ground unless the contrast is the point.
