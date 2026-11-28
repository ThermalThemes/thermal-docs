---
title: "Header, footer and sign-off"
description: "The header, announcement bar, search overlay, sign-off, footer and back to top button in Mammoth."
---

# Header, footer and sign-off

The header and footer areas appear on every page. In the theme editor they are the **Header** group at the top of the section list and the **Footer** group at the bottom.

## Header

The logo, the main menu, and the icons for search, account and cart.

- **Menu**. The menu shown. Default: Main menu.
- **Color scheme**.
- **Sticky behavior**.
  - **Always** (default): the header stays at the top as the customer scrolls.
  - **On scroll up**: it hides when scrolling down and returns when scrolling up.
  - **Off**: it scrolls away with the page.
- **Transparency**.
  - **Any page that opens on a hero** (default): the header is clear over a Hero at the top of the page, in the overlay colour scheme, and becomes solid once the page scrolls.
  - **Home page only**.
  - **Off**.
  - This applies on tablet and desktop. The Hero must be the page's first section.
- **Country and language selectors**. **Country and language** (default), **Country only**, **Language only** or **None**. Each shows only when the store sells in more than one country or language.

### Menus and dropdowns

Menus are edited in the Shopify admin under **Content > Menus**.

- A menu item with items nested under it opens a dropdown.
- A menu item with two levels nested under it opens a wide panel with its links in columns.
- On phones and small tablets, the menu, the account link and the selectors move into a drawer opened from the menu button.

### Menu panel

Add a **Menu panel** block to the Header to place a promotion in a menu item's panel.

- **Menu item**. The exact title of a top-level item in the header menu, such as Shop. Its links become columns, and this promotion follows them.
- **Image**, **Heading**, **Text** and **Link**.
- **Button label**. Shown when a link is set. Defaults to "Shop now".

Type the menu item's title as it appears in the menu (capital letters do not matter). If you rename the menu item, update the block.

### Logo

The logo is set under **Theme settings > Brand**. When the header is clear over a dark Hero, the **Inverse logo** is used if you added one.

## Announcement bar

A thin bar above the header for short messages. Add it from **Add section** in the Header group.

- **Color scheme**.
- **Autoplay**. **Off**, **Slow** (default) or **Fast**. With two or more announcements. Autoplay pauses while a visitor points at or tabs into the bar, has a pause button, and never runs for visitors who ask their device to reduce motion.

**Announcement** blocks: **Text** and **Link**.

## Search overlay

See [Search](./search).

## Sign-off

Mammoth's closing section: a last large moment on the Shelf, a newsletter signup field under the line, then your footer links and legal line. It is the footer the theme installs with.

- **Closing**.
  - **Word and object** (default): the store name fitted beside one object, both on the Shelf.
  - **Moment**: one short line, large, with the object standing beside it.
  - **Letter**: the newsletter heading large, with a closing photograph.
- **Object height**. **Cap height**, **Raised**, **Tall** (default) or **Tallest**. Word and object only: how tall the object stands against the capital letters of the word.
- **Footer**.
  - **Ledger** (default): one ruled row with the store name, links and legal line.
  - **Directory**: the links set large, in columns.
  - **Columns**: link columns above the closing; a menu link with child links becomes a column.
- **Menu**. Default: Footer menu. A menu link with child links becomes a column in the Columns footer; in the other footers its child links are listed in its place.
- **Detail**.
  - **Minimal**: the copyright.
  - **Standard** (default): adds the policy links.
  - **Complete**: adds country and language selectors, payment icons and Powered by Shopify.

**Closing words and object** (fixed block)

- **Word**. Leave empty to use the store name.
- **Line**. Moment only: one short line that closes the page.
- **Newsletter heading**. Letter: set large on the Shelf. Word and object with the Columns footer: above the columns.
- **Text**. A sentence under the line or the newsletter heading.
- **Image**. Word and object, Moment: the object, best as a cut-out on a transparent background, 1600px tall or more. Letter: a closing photograph.
- **Product**. The object links to it; its first image is used when no image is chosen.

You can also add a **Sign in with Shop** block, app blocks and Custom Liquid blocks.

**Tips**

- A short store name works best for Word and object. For a long name, type a shorter **Word**, or use Moment.
- Policy links come from **Settings > Policies** in your Shopify admin. A policy with no content is not listed.

## Footer

A conventional footer, as an alternative to the Sign-off or in addition to it. Add it from **Add section** in the Footer group.

- **Color scheme**.
- **Width**. **Page** (default) or **Wide**.
- **Detail**. **Minimal**: the copyright. **Standard**: adds policy links and payment icons. **Complete** (default): adds the country and language selectors and the Powered by Shopify link.

Blocks:

- **Brand**. **Text** and **Detail**: **Minimal** shows the logo, or the store name without one; **Standard** adds the text; **Complete** (default) adds links to the social media accounts set in theme settings.
- **Menu**. **Heading** and **Footer menu**.
- **Newsletter signup**. **Heading** and **Text**.
- **Sign in with Shop**. **Alignment**: Start or Center.
- App blocks and Custom Liquid blocks.

## Back to top

A button that returns the customer to the top of a long page. Add it from **Add section** in the **Overlays** group, alongside the Cart drawer.

- **Color scheme**.

## Cart drawer

See [Cart](./cart).
