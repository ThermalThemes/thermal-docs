---
title: Header
description: Site header section. Logo, navigation, search, account, cart, country and locale selectors. Configurable layout for desktop and mobile.
---

# Header

The site header. Renders the logo, primary navigation, and the search, account, and cart affordances. Configurable to many register defaults — logo-left inline, logo-center inline, logo-left with menu below, logo-center with menu below.

## What it does

Lives in the `header-group.json` section group, which Shopify renders on every template. Composes the logo, navigation menu, and utility controls into a configurable layout. Supports transparent overlay on pages where the section below should render through the header.

## Section settings

- **Desktop layout** — `logo_left_inline`, `logo_left_centered`, `logo_center_inline`, `logo_center_below`.
- **Mobile layout** — `logo_left`, `logo_with_menu_left`, `logo_center`.
- **Sticky header** — Checkbox. When on, the header stays fixed as the visitor scrolls.
- **Allow transparent header** — Checkbox. When on, the header renders over the section below on pages flagged for transparency.
- **Transparent header text color** — Color picker. Visible only when transparent header is on.
- **Transparent logo** — Image. Visible only when transparent header is on. Used in place of the standard logo when the header is in transparent mode.
- **Show country selector** — Checkbox.
- **Show country flag** — Checkbox. Visible only when country selector is on.
- **Show country name** — Checkbox. Visible only when country selector is on.
- **Show locale selector** — Checkbox.
- **Show search** — Checkbox.
- **Show account** — Checkbox.
- **Show cart** — Checkbox.
- **Color scheme** — Section-level color scheme.

## Blocks

The header takes three block types:

- **Link** — A single navigation link. Title plus URL.
- **Mega menu** — Expanded dropdown navigation. Title field matched case-insensitively against nav link titles in the linked menu; renders an expanded panel with sub-links, sub-menus, and optional promo blocks.
- **Promo block** — Image-and-text promo placed inside a mega menu. Used for "Shop the latest drop" or category routing within nav.

## Example use cases

- **Editorial register.** `logo_center_inline`, sticky header off, allow transparent header on. The logo carries weight. Navigation links sit beside the logo without competing.
- **Drop-model register.** `logo_left_inline`, sticky header on, navigation kept short — Shop, Drops, Studio, Contact. The cart icon stays present as the visitor scrolls.
- **Catalog register.** `logo_left_centered` with a `mega_menu` block exposing all categories. The visitor can browse the catalog from the header.

## Notes

- Customer accounts are handled by the `<shopify-account>` web component embedded in the header — Lacquer does not ship the legacy customer-account templates, which Shopify deprecated in February 2026. Login, registration, and account management happen on Shopify-hosted pages reached through the header's account affordance.
- The transparent header mode is page-flagged, not section-flagged. Pages where the first section below the header should bleed under the header (slideshow heroes, full-bleed image-with-text) flag transparency at the page level.
