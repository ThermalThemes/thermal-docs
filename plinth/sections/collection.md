---
title: "Collection and filtering"
description: "Collection pages in Plinth: the Collection banner, the product grid, filtering, sorting, pagination and in-grid tiles."
---

# Collection and filtering

A collection page is built from two sections: **Collection banner** and **Collection products**.

## Collection banner

The collection's title and description at the top of the page.

- **Height**. **Small** (default) or **Medium**.

**Banner** (fixed block)

- **Arrangement**.
  - **Image** (default): the collection's image beside its title and description. A collection without an image is shown as Text.
  - **Text**: the title and description alone.
  - **Flood**: the accent colour with one product standing on the line.
- **Product**. Flood only. The product that stands on the line. Leave empty to use the collection's first product. A cut-out (a .png with a transparent background) at least 740px wide stands on the line; other images are framed.

The collection's image, title and description are set on the collection in the Shopify admin. You can remove the banner; the product grid then shows the title and description itself.

## Collection products

The product grid, with the filter, the product count and the sort control above it.

- **Enable filtering**. On by default.
- **Show filters beside the grid**. Off by default. On wide screens the filters stay open in a column beside the products, three to a row. On smaller screens, and when this is off, the Filters button opens them in a drawer.
- **Enable sorting**. On by default.
- **Density**. Products per row on wide screens: **Roomy** 3, **Standard** (default) 4, **Compact** 5. Phones always show 2. Each page holds 24 products.
- **Pagination**. **Pages** (default) or **Load more button**.

Each product is shown as a card on the Shelf: the image, then the name, variant, optional spec line and price. See [The Shelf and product imagery](../shelf/).

<!-- to confirm: snippets/product-card.liquid is listed as scaffold in the theme's CLAUDE.md, though the file on origin/main already draws the Shelf card. Re-check card details (badges on cards are not rendered today) when final. -->

### Filtering

Filters are created in the Shopify **Search & Discovery** app, not in the theme. Install it from the Shopify App Store, open **Filters**, and add the filters you want: availability, price, product type, vendor, product options such as colour and size, and metafields.

The theme shows every filter type Shopify offers:

- **Lists** of values with checkboxes, including colour swatches and images where you set them up.
- **Price** as a from and to range.
- **Yes or no** filters.

Active filters appear above the grid as chips that can be removed one by one, with a link to clear them all. The grid updates without reloading the page, and the product count updates with it.

If no filters appear, check that the collection has products with the values you are filtering by, and that the filters are added in Search & Discovery.

### Sorting

Customers can sort by the options Shopify provides: featured, best selling, alphabetical, price and date. The collection's default sort order is set on the collection in the Shopify admin.

### In-grid tiles

You can place promotional tiles among the products. In **Collection products**, click **Add block** and choose **In-grid tile**.

- **Image**. Optional. A photograph fills the tile; without one the heading is on the accent colour. 2000px wide or more is recommended.
- **Heading**, **Text** and **Link**.
- **Row**. **First row**, **Second row** (default), **Third row** or **Fourth row**. The row of the grid the tile sits on, on the first page only. It is two columns wide: at the start of rows 1 and 3, at the far edge of rows 2 and 4. With few products it moves up.
- **Tile size**. **Wide** (default): one row tall. **Feature**: two rows tall on tablets and wider.

Tiles appear on every collection that uses the template. To show a tile on one collection only, create a separate collection template for it.

App blocks and Custom Liquid blocks can also be added; they appear below the grid.

## Tips

- **Large catalogues**: use **Compact** density and turn on **Show filters beside the grid**.
- **Small catalogues**: use **Roomy** density, and consider turning filtering off if a collection has only a handful of products.
- **Order**: set a collection to manual sorting in the admin to control which products come first.

## Not included

Plinth does not include infinite scroll or quick view. **Load more button** adds the next 24 products without leaving the page.
