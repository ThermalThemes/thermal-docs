---
title: "Announcement bar"
description: "A rotating strip above the masthead, shipped disabled in Whirligig because the two-row header and the strike line already own the top of the page."
---

# Announcement bar

One line above the header, or several that rotate through in place. The section renders no element at all until an **Announcement** block exists, so an empty bar costs nothing and a disabled bar and an emptied one look identical on the storefront. Whirligig ships it disabled: the masthead is already two rows deep, and a third strip pushes the pitch ruler down and shifts where the fold sits relative to the strike line at 58vh. Turn it on when a shipping cutoff or a batch date genuinely has to be read before the catalogue is.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Auto-rotate announcements**. Off by default.
- **Rotation interval**. 3–10s, default 5s.
- **Top padding**. 0–20px in steps of 2, default 8px.
- **Bottom padding**. 0–20px in steps of 2, default 8px.
- **Color scheme**. Colour scheme.

## Blocks

- **Announcement**. 2 settings.


<!-- generated:end -->

## Example use cases

**A single standing line.** One **Announcement** block, `auto_rotate` off, padding left at 8px top and bottom, `color_scheme: scheme-2` so the strip reads as a panel above the stone masthead rather than as a second ground. Content in Timbre's register would be a date and a number: "Next batch of D Kurd shells goes on the bench 12 September."

**A linked announcement pointing at the cheap end.** One block whose `link` is `/collections/whirligigs`. The whole line becomes an underlined link. "Whirligigs from $18. Every one recorded like everything else." This is the one place the price ladder can be stated before a visitor has scrolled anywhere.

**Two announcements on the slowest rotation.** Two blocks with `auto_rotate` on and `rotate_interval: 10`, the maximum. Read the accessibility note below before choosing this; ten seconds is the least bad setting, not a good one.

## Notes

**Auto-rotate has no pause control and does not check `prefers-reduced-motion`.** The slide container is an `aria-live="polite"` region, so every rotation is announced to a screen reader, and a visitor has no way to stop it. WCAG 2.2.2 asks for a pause, stop or hide mechanism on anything that moves for more than five seconds. The interval also keeps running while the tab is backgrounded and while the pointer is over the bar. Leaving `auto_rotate` off is the honest default, and it is why Whirligig ships it off.

**Blocks are what create the bar.** Zero blocks emits no `<announcement-bar>` element, which is why the shipped `disabled: true` and an empty block list are indistinguishable on the storefront.

**Padding tops out at 20px each side and the bar sizes itself to its text.** A two-line announcement at 390px moves the header, the ruler and everything below down by roughly the height of that second line, which changes where content crosses the strike line. Check a real mobile load rather than the editor preview.

**The section comments reference a first-paint reservation stylesheet that is not in `dist/assets`.** Nothing currently reserves the bar's height above `<main>`, so verify layout shift on a cold load before shipping the bar enabled.

The text field is richtext, so it emits a `<p>`; the section zeroes the first child's margin for you. The bar paints `--color-background` and `--color-text` directly and carries no `.section` class, so section padding settings do not exist here. Use the two padding ranges. `limit: 1` per section group.
