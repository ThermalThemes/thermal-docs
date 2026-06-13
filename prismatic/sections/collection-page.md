---
title: Collection page
description: The collection template's core section — filter drawer, sorting, banner header, card options, and load-more pagination.
---

# Collection page

The collection template's core section: header treatment, the product grid, filtering, sorting, and load-more pagination.

## Section settings

**Header**

- **Show heading / Show description** — Both default on. Collection descriptions render under the heading.
- **Header style** — `plain` or `banner` (the collection image as a full-width banner behind the heading, with **Banner color scheme**, **Banner overlay opacity**, and an optional **Banner eyebrow prefix** in the monospace label register).
- **Heading display size** — `none`, `sm`, `md`, `lg`.

**Cards**

- **Show card eyebrow** — `collection // product type` label above card titles.
- **Custom badge tag / label** — Tag-driven badge chips, as on [Featured collection](./featured-collection).
- **Image ratio** — `square`, `portrait`, `landscape`. **Columns** — desktop 1–6, mobile 1–2.
- **Show vendor** — Default off.
- **Card image hover behavior** — `fade` or `cut`. **Sale indicator style** — `badge` or `typographic`.

**Filtering and sorting**

- **Enable filtering** — Default on. **Filter layout** — `sidebar`, `top`, or `drawer` (an off-canvas panel with the active-filter chips row).
- **Enable sorting** — Default on, as a disclosure in the toolbar.

**Pagination**

- **Products per page** — Default 24. Instead of numbered pages, the grid shows a `SHOWING X OF Y` progress line with a **Load more** button that appends the next page in place.

## How filtering works

Active filters render as removable chips above the grid. Applying or removing a filter updates the grid in place (no full page reload) and updates the URL, so filtered views are shareable. Without JavaScript, the same controls work as standard page navigation.

The filters shown are the ones your store publishes — **Availability** and **Price** out of the box; option-based filters (size, color, type, vendor) are added through Shopify's free **Search & Discovery** app ([setup](../getting-started/#set-up-collection-filters)).

## Notes

- The banner header earns its keep on collections with strong imagery; `plain` with a display-size heading is the typographic alternative.
- Load-more keeps small catalogs from rendering a near-empty page 2; the per-page count can go as low as the grid tolerates.
