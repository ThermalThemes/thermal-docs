---
title: "Cart"
description: "The cart page: a three-column line-item table, the summary rail with up to five optional fields, and an empty state Whirligig hands off to a shelf."
---

# Cart

The cart template's main section. It renders a real `<table>` of line items with product, quantity and line total, and a summary rail carrying the subtotal, the checkout button and up to five optional fields: order note, discount code, gift wrap, terms acceptance and an Update cart button. When the cart is empty it renders one paragraph and, optionally, one button, and nothing else. That emptiness is a composition decision, not an oversight: on Whirligig a `shelf-rack` section below it does the recovery.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Vendor credit prefix**. Text before the vendor name (e.g. 'By', 'Drawn by'). Default 'By'.
- **Empty-state copy**. Replaces the default 'Your cart is empty' message when shown. Leave blank for the substrate locale string.
- **Gift wrap label**. Default “Add gift wrapping”.
- **Terms acceptance text**. Default “I agree to the terms and conditions”.
- **Heading text**. Overrides the default 'Cart' heading. Leave blank to use the substrate locale string.
- **Gift wrap product**. Shown when "Offer gift wrapping" is enabled.
- **Color scheme**. Colour scheme.

**Display options**

- **Show "Update cart" button**. On by default. Some themes prefer the checkout button as the only loud action.
- **Show vendor credit per line item**. Off by default. Renders the product vendor under each cart line — for themes whose card register leads with the maker (e.g. a 'Drawn by {artist}' credit).
- **Show "Continue shopping" button on empty state**. On by default.
- **Show order note**. On by default.
- **Show discount / gift card field**. Off by default.
- **Require terms acceptance before checkout**. Off by default.
- **Offer gift wrapping**. Off by default. Adds an opt-in checkbox to the cart that adds a gift-wrap product. Create a product for the wrap (set its price) and select it below.

## Blocks

None. The section renders from its own settings.


<!-- generated:end -->

## Example use cases

**What Whirligig ships.** `color_scheme: scheme-1`, `show_continue_shopping: false`, and `empty_state_copy` set to "Nothing queued. The shelf is not empty, though." The recovery path is the `shelf-rack` section underneath with `render_when: cart_empty`, showing four instruments across the whole ladder, from the $18 spinning singer to a D Kurd handpan, each with its own recording.

**A made-to-order bench.** `show_order_note: true` (the default) with `heading_text: "Your order"`. The note is a 500-character textarea that survives to the order, and it is where a tuning request belongs on a shell that has not been cut yet.

**Gift wrap at the cheap end of the ladder.** `show_gift_wrap: true` with `gift_wrap_product` set to a real product carrying a price. The checkbox adds or removes that variant through the Cart AJAX API and then reloads the page, so the line item and the subtotal are always the server's numbers rather than a client-side guess. Worth it on a store where a $22 whirly tube is a gift; pointless on one selling $2,800 instruments.

## Notes

**The empty state has no way out unless you give it one.** With `show_continue_shopping: false` and no section beneath, a visitor lands on a heading and one sentence. Whirligig gets away with it only because `shelf-rack` is there. Delete that section and turn the button back on in the same edit.

**Terms acceptance only disables the theme's own checkout button.** The dynamic checkout buttons rendered into `content_for_additional_checkout_buttons` (Shop Pay, PayPal, and the rest) are untouched, so a visitor can start checkout without ticking the box. If the gate has to hold, use a checkout validation function; this setting is a courtesy, not a control.

**The discount field is a navigation, not an API call.** It sends the browser to `/discount/CODE?return_to=/cart`. An invalid code lands the visitor back on the cart with no error and no explanation of what happened. That is why it is off by default.

**Gift wrap reloads the whole page on every toggle.** Deliberate, so the totals come from the server, but it costs a full navigation each time the checkbox changes.

**Line images are requested at 100, 150 and 200px.** That is sized for a small thumbnail. If your theme CSS grows the cart thumbnail past 100px, retina displays will get a soft image and Shopify will not upscale to cover it.

`empty_state_copy` is richtext and replaces the locale string outright; it is the only copy on the empty page, so it has to carry the whole message. Quantity uses `<quantity-input>` with plus and minus buttons; the per-line Remove is a plain link to `item.url_to_remove` and works with no JavaScript. The image link is `tabindex="-1"` and `aria-hidden`, so each line has one tab stop and one accessible name, on the title. There is no audio anywhere on this page, and that is the right call. `enabled_on` restricts the section to the `cart` template.
