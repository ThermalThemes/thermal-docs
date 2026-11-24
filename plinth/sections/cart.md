---
title: "Cart"
description: "The cart drawer and the cart page in Plinth: how to choose between them and what each shows."
---

# Cart

Customers can review their cart in a drawer that slides in from the side, or on a separate cart page. Choose under **Theme settings > Cart > Cart type**.

- **Drawer** (default). Adding a product opens the drawer. Customers can keep shopping without leaving the page.
- **Page**. The cart icon in the header goes to the cart page.

The cart page always exists, whichever you choose. The drawer has a **View cart** link to it.

## What each cart line shows

In both the drawer and the page:

- The product image, title and chosen options.
- Any extra details attached to the line, such as a subscription plan or personalisation from an app.
- The price for one, with the original price struck through when a discount lowered it, and the unit price for products sold by measure.
- Discounts that apply to that line.
- A quantity control and a remove link.
- The line total.

Under the lines: the subtotal, any discounts that apply to the whole order, the estimated total, and a note about taxes and shipping being calculated at checkout.

## Cart drawer

The cart drawer has no options of its own. It follows **Cart type** and **Empty cart link**, and uses the default colour scheme.

It includes:

- **Order note.** Customers can open "Add an order note" and write a message with their order. You see it on the order in your Shopify admin.
- **Express checkout buttons** such as Shop Pay, Apple Pay and Google Pay, under the checkout button, when your payment settings offer them.
- **App blocks and Custom Liquid blocks.** In the theme editor, open the **Cart drawer** section to add them, for example a shipping protection or upsell app.

When the cart is empty, the drawer shows a short line and a Continue shopping button. **Empty cart link** in theme settings sets where the button leads; your full catalogue is used when it is empty.

## Cart page

- **Color scheme**.

<!-- to confirm: sections/main-cart.liquid is marked SCAFFOLD and is being rebuilt. Today (origin/main, 2026-11-24) the cart page has the lines, totals and checkout button only: no order note, no express checkout buttons, no blocks. Update this section when the rebuild lands. -->

The cart page shows the cart lines, the totals and the checkout button. It works even if a customer's browser has JavaScript turned off.

## Discounts

Discount codes are entered at checkout. Automatic discounts, and codes already applied, are shown in the cart: on the line they apply to, or in the totals for order-level discounts.

## Tips

- If you rely on an app that adds fields to the cart (gift messages, delivery dates), check whether it supports the drawer, the page, or both, and set **Cart type** to match.
- Taxes and shipping wording under the total follows your store's tax settings.

## Not included

Plinth does not include a gift wrapping option, a free shipping progress bar or a sticky add-to-cart bar. Apps can add these.
