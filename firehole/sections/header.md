---
title: Header
description: Site header with navigation, mega menu, logo, search, account, cart, transparent mode, and country/language selectors.
---

# Header

The site header. Lives in the header group and renders on every template. Carries the logo, primary navigation (including a three-level mega menu), search, account, and cart affordances.

## What it does

Renders the navigation menu you assign, with nested menus as hover/click-toggled panels. When a top-level item has grandchildren (a three-level menu), the header renders a full-width mega menu panel with the grandchild links grouped under their parents, plus an optional feature image tile. Keyboard navigation is supported throughout — Enter/Space toggle, Escape closes, arrow keys cycle.

The header can be sticky, and can start transparent over a full-bleed first section and gain its background on scroll.

## Settings

**Logo**

- **Logo image** — Your logo. Falls back to the store name in the theme's display type when unset.
- **Logo width** — 50–300px, default 140.
- **Transparent header logo** — Alternative logo for transparent mode (a light logo for dark imagery). Visible only when transparent header is on.

**Layout**

- **Desktop layout** — `logo_left_inline`, `logo_left_centered`, `logo_center_inline`, `logo_center_below`.
- **Mobile layout** — `logo_left`, `logo_with_menu_left`, `logo_center`.
- **Navigation menu** — The menu to render. Defaults to `main-menu`.

**Mega menu feature**

- **Feature image / eyebrow / heading / link** — An optional promotional tile rendered inside the mega menu panel. Leave the image unset to omit the tile.

**Behavior**

- **Sticky header** — Default on.
- **Transparent header** — Header background is transparent until the page scrolls. Works best when the first section is a full-bleed image. Off by default.
- **Transparent header text color** — Text/icon color while transparent. Default white.

**Country and language**

- **Show country/region selector** — With optional flag (ISO code prefix) and country name toggles.
- **Show language selector** — For stores with multiple published locales.

**Icons**

- **Show search** — Opens the search overlay.
- **Show account** — Customer account entry, with an optional **Account navigation menu** rendered as a dropdown.
- **Show cart** — Opens the cart drawer (or links to the cart page, per the cart type in Theme settings).

**Color**

- **Color scheme** — The header's scheme. The demo runs the header on the ink scheme.

## Notes

- The mega menu renders only when the assigned menu actually has three levels. Build the menu under **Online Store → Navigation** with nested items; the header takes care of the rest.
- Two-level menus render as compact dropdown panels instead — no configuration needed.
- The announcement bar is a separate section in the header group; see [Announcement bar](./announcement-bar).
