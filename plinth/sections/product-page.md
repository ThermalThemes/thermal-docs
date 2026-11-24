---
title: "Product page"
description: "The Product information section in Plinth: the gallery and every block you can add, reorder or remove."
---

# Product page

The product page is built from two sections: **Product information** and **Product recommendations**. You can add other sections under them, such as a [Spec table](./signature#spec-table), an [Annotated product](./signature#annotated-product) or an [Accordion](./standard#accordion).

<!-- to confirm: sections/main-product.liquid is marked SCAFFOLD in the theme source and is being rebuilt. The block list and options below are read from the schema on 2026-11-24 (origin/main). Re-check layout statements (gallery column, phone row, first-screen fit) when the rebuild lands. -->

## Product information

The gallery on one side and a column of blocks on the other.

- **Color scheme**.
- **Column split**. **Equal** or **Wider media** (default).

### Gallery

The gallery is a fixed block. It shows every image, video and 3D model you added to the product, with the selected variant's image first.

- An image with a transparent background stands on the Shelf, as it does everywhere else in the theme.
- A photograph is shown whole, at its own shape. It is never cropped.
- Videos play with controls. YouTube and Vimeo videos and 3D models use Shopify's own players.
- When a customer chooses a variant that has its own image, that image moves to the first position.
- On phones the gallery is one row that swipes sideways.

See [The Shelf and product imagery](../shelf/#image-sizes) for image sizes.

### Blocks

Add, remove and reorder these in the product column.

| Block | What it shows | Options |
| --- | --- | --- |
| **Badges** | Sold out, or Sale when the variant has a higher compare-at price. Also your own badge from the `custom.badge` metafield | None. Sale uses the Sale colours from theme settings |
| **Product vendor** | The product's vendor | None |
| **Product title** | The product's title | None |
| **Rating** | The average star rating and number of reviews, from your review app | None. Hidden for a product without reviews |
| **Product price** | The price, the compare-at price when on sale, and the unit price when the product is sold by measure | None |
| **Variant picker** | The product's options | **Style**: **Buttons** (default) or **Dropdown**. Values with a swatch set in the admin show the swatch in the Buttons style |
| **Quantity selector** | A quantity field with plus and minus buttons | None |
| **Volume pricing** | Quantity price breaks, for stores using B2B catalogues with volume pricing | None |
| **Buy buttons** | Add to cart, plus subscription options and the gift card recipient form where they apply | **Show dynamic checkout buttons**. On by default. Not shown on gift cards |
| **Inventory status** | One line: in stock, low stock, available on backorder, or sold out | **Low stock threshold**: **Off**, **5 or fewer** (default), **10 or fewer** or **20 or fewer**. The quantity itself is never shown |
| **Pickup availability** | Whether the variant can be collected from your locations | None. Shows only when local pickup is set up |
| **Complementary products** | Up to three products you paired with this one in the Search & Discovery app | None. Hidden for a product without pairings |
| **Assurances** | Two to four rows, each an icon, a short title and an optional line | Add **Icon item** blocks inside it |
| **Description** | The product description | None |
| **Text** | Any text you write, the same on every product | **Text** |
| **Collapsible row** | A heading that opens to show text: materials, care, shipping, returns | **Heading** and **Text** |
| **Custom Liquid** | An app snippet or your own code | **Liquid code** |
| App blocks | Blocks from apps you have installed, such as reviews or size guides | Set by the app |

When you add the section fresh, it starts with: vendor, title, price, variant picker, quantity selector, buy buttons, inventory status, pickup availability, description, assurances (delivery, returns, guarantee) and one collapsible row.

### Tips

- **Swatches** are set on the product option in the Shopify admin, not in the theme. Once a colour option has swatches, they appear in the variant picker and on product cards.
- **Subscriptions** appear in the Buy buttons block automatically when a product has selling plans from a subscription app.
- **Gift cards**: a gift card product shows a form for sending it to someone by email.
- **Different layouts for different products**: create a second product template in the theme editor (the page selector, **Products**, **Create template**), arrange it differently, and assign it to products in the Shopify admin.
- **Per-product facts**: use the [Spec table](./signature#spec-table) with **Source** set to **Product**, and fill in the `custom.spec_rows` metafield. See [Product data](../product-data/).

## Product recommendations

See [Product recommendations](./standard#product-recommendations).

## Not included

Plinth does not include image zoom, quick view, recently viewed products or a back-in-stock form. Apps from the Shopify App Store can add these through app blocks.
