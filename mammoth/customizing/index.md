---
title: "Theme settings"
description: "Every global setting in Mammoth, by the label you see in the theme editor."
---

# Theme settings

Theme settings apply to the whole store. Open the theme editor and click **Theme settings** in the left bar. The groups below are in the order they appear.

## Brand

- **Logo**. Your main logo, shown in the header.
- **Inverse logo**. Shown on dark backgrounds and over media. The main logo is used when this is empty.
- **Logo width**. 50 to 300px, default 120px.
- **Favicon**. The icon in the browser tab. 32 x 32px .png recommended.

## Colors

- **Color schemes**. Seven schemes. Each has a background, text, button, button text, secondary button, secondary button text, accent and accent text colour. See [Colour and grounds](./colour).
- **Default color scheme**. The scheme the page itself uses, including pages and areas with no scheme of their own. Default: Scheme 1.
- **Overlay color scheme**. Used for text over media, and for the header when it sits over media. Default: Scheme 3.
- **Sale** and **Text on sale**. The colours of the Sale badge.
- **Success** and **Text on success**. Confirmation messages, such as after a form is sent.
- **Error** and **Text on error**. Error messages.

## Typography

- **Heading font**. Headlines, statements and section titles.
- **Body font**. Running text, buttons and form fields.
- **Accent font**. Subheadings and small labels. In Mammoth this is also the font of the label under each product and of every figure, so a monospace font suits it.
<!-- to confirm: the editor's help text for Accent font reads "Subheadings, labels and buttons", but Mammoth sets buttons in the Body font (src/css/tokens/plinth.css, --button-font-family). The docs follow what the theme does; align the setting's help text or this line. -->
- **Text size**. **Compact**, **Standard** (default) or **Large**. Scales text across the store.

See [Typography](./typography).

## Layout

- **Page width**. **Compact**, **Standard** (default) or **Spacious**. The widest the content grows on large screens. All three presets use Spacious.
- **Section spacing**. **Compact**, **Standard** (default) or **Generous**. The space between sections. Neighbouring sections that share a colour scheme sit closer together.

## Cart

- **Cart type**. **Drawer** (default) or **Page**. See [Cart](../sections/cart).
- **Empty cart link**. Where the button in an empty cart leads. Your full catalogue is used when this is empty.
<!-- to confirm: on origin/main (2026-11-24) the cart drawer follows this setting; the cart page (scaffold, being rebuilt) always links to the full catalogue. Re-check when the cart page lands. -->

## Social media

Links for **Facebook**, **Instagram**, **TikTok**, **YouTube**, **X**, **Pinterest**, **Snapchat**, **LinkedIn**, **Tumblr** and **Vimeo**. Paste the full address of each account. Only the accounts you fill in are shown. The links appear in the Footer section's **Brand** block and on the password page.

## Currency

- **Show currency codes**. Off by default. When on, prices show the currency code, as in $48.00 USD. Useful if you sell in several currencies.

## Ground and type

- **Ground**. **Split** (default), **Dark** or **Light**. Decides which colour scheme each of Mammoth's own sections takes.
  - **Split**: the opening, figures and closing sections on the dark scheme, the rest on the light ones.
  - **Dark**: every section on a dark scheme. Set the default colour scheme to the dark scheme too.
  - **Light**: every section on a light one.
  - Statements are always on the accent scheme.
- **Type pairing**. **Serif** (default), **Grotesk** or **Sans**. Sets display sizes, line spacing and letter spacing to suit a kind of heading font. Pick the matching fonts under Typography: Serif expects a serif heading at regular weight; Grotesk a sans heading at bold; Sans a sans heading at semibold.

See [Colour and grounds](./colour) and [Typography](./typography).

## Shelf

- **Shelf rule**. **Hairline** (default) or **Firm**. The line every product stands on.
- **Label style**. **Mono capitals** (default), **Mono sentence case** or **Body font**. The caption under each product. Mono styles use the accent font.

<!-- to confirm: "Shelf label" (Name and price | Name only | Hidden) exists on origin/main and is removed in the working tree. Add or leave out to match what ships. -->

See [The Shelf and product imagery](../shelf/).

## Settings that are not in the theme

Some things customers see are managed elsewhere in Shopify:

- **Filters** on collection and search pages: the **Search & Discovery** app.
- **Colour swatches**: on the product option, in the product admin.
- **Menus**: **Content > Menus**.
- **Policies** linked in the sign-off: **Settings > Policies**.
- **Countries, currencies and languages**: **Settings > Markets** and **Settings > Languages**.
- **Checkout** appearance: **Settings > Checkout**.
