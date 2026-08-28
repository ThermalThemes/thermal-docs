---
title: "Cart drawer"
description: "The slide-in cart in the overlay group, gated by the global Cart type setting rather than by a section one."
---

# Cart drawer

A right-hand panel that opens from the masthead cart button and after an add to cart. It lives in the overlay group, so it exists on every template. The gate is global, not local: `Theme settings → Cart → Cart type` must be `Drawer` or this section renders nothing at all and the masthead cart button becomes a plain link to `/cart`. Its three section settings are small; almost everything it displays (colour scheme, free-shipping bar, threshold, empty-cart link) comes from theme settings.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Show vendor credit per line item**. Off by default. Renders the product vendor under each drawer line (mirror of main-cart).
- **Vendor credit prefix**. Text before the vendor name (e.g. 'By', 'Drawn by'). Default 'By'.
- **Show order note**. Off by default.

## Blocks

None. The section renders from its own settings.


<!-- generated:end -->

## Example use cases

**What Whirligig ships.** `show_order_note: false`, with the global `cart_type: drawer`, `modal_color_scheme: scheme-1` and `free_shipping_bar: false`. Handpans are one-of-one and most orders are a single line; a note field and a progress bar toward a threshold would be furniture on a two-item cart.

**A workshop that takes tuning requests.** `show_order_note: true` gives a 500-character textarea with a live counter, saved to the cart on blur. That is the right home for "please tune to D Kurd before shipping" on a made-to-order shell, and it survives to the order.

**A multi-maker catalogue.** `show_vendor: true` with `vendor_prefix: "Tuned by"` prints a maker credit under each line, mirroring the same pair of settings on `main-cart` so the drawer and the cart page agree. Off in Whirligig, because every instrument comes off one bench.

## Notes

**The drawer's contents are rendered once on the server, at page load, and are never re-fetched.** Adding an item dispatches `cart:item-added`, and the drawer opens 300ms later still showing whatever the cart held when the page loaded. On a page that loaded with an empty cart, the first add opens the drawer on the empty state. Quantity changes and removals made inside the drawer do update, because those go through `/cart/change.js` and patch the count, the subtotal and the line in place. Until the drawer refetches its own markup, a page reload is the only way to see a newly added line. The masthead cart badge has the same limitation, and worse: it is not rendered at all when the cart is empty, so there is no node to update.

**The free-shipping bar reads two global settings and divides in cents.** `free_shipping_threshold` is a plain number field with no minimum, shipped at 25000, meaning $250.00. Setting it to 0 divides by zero and takes the drawer's render with it. If you turn the bar off, leave the threshold alone.

**The empty state and the filled state are different markup, not a toggle.** The empty branch shows an icon, a heading, the `cart.general.empty_text` string and a button pointing at `empty_cart_link` (theme settings) or the home page. None of the section's three settings apply to it.

Escape closes, the backdrop closes, the rest of the page goes `inert` while open, and focus returns to whatever opened it. Focus into the panel is retried across frames for the same reason as the search overlay. Line images are requested at 60, 120 and 240px, sized for a small thumbnail; products with no image get Shopify's placeholder SVG. Checkout is a hardcoded `/checkout` navigation rather than a route lookup. There is deliberately no audio in the drawer: a cart is a transaction surface and the recording belongs on the product page. `enabled_on` restricts this section to the `aside` group, so it cannot be added to a template.
