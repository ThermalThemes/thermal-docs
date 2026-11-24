---
title: "Product data"
description: "The product metafields Plinth reads: exact namespace and key, type, an example, and what is shown when a metafield is empty."
---

# Product data

Plinth works with standard Shopify product information: title, description, images, price, options, vendor and inventory. Nothing extra is required.

It can also read four optional product metafields. Each adds something specific. When a metafield is empty, the theme simply leaves that part out; nothing looks broken.

## Summary

| Metafield | Type | Adds | When empty |
| --- | --- | --- | --- |
| `custom.spec` | Single line text | A muted spec line under the product name on every card | No spec line |
| `custom.spec_rows` | JSON | Rows for the Spec table and the Annotated product | Spec table uses the rows you typed, or hides. Annotated product shows without pins and rows |
| `custom.badge` | Single line text | Your own badge on the product page | Only Sold out or Sale badges show, when they apply |
| `reviews.rating` and `reviews.rating_count` | Rating and Integer | Stars and review count on the product page | The Rating block is hidden |

## How to create a metafield

1. In the Shopify admin, go to **Settings > Custom data > Products**.
2. Click **Add definition**.
3. Enter a name. Under **Namespace and key**, enter the value exactly as given below, for example `custom.spec`.
4. Choose the type given below and save.

The metafield then appears at the bottom of every product's page in the admin, ready to fill in. You can also fill metafields for many products at once with the bulk editor or a CSV import.

## `custom.spec` {#custom-spec}

- **Namespace and key**: `custom.spec`
- **Type**: Single line text
- **Example**: `Stoneware, 1.2 L`

A short line of facts, such as material and size. It appears in muted text under the product's name in the label on the Shelf: on collection pages, search results, rails, tabs and recommendations.

Keep it under about 30 characters so it fits on one line. If the spec is the same as the variant's name, it is not shown twice.

**When empty**: the label shows the name, variant and price only.

## `custom.spec_rows` {#custom-spec-rows}

- **Namespace and key**: `custom.spec_rows`
- **Type**: JSON
- **Example**:

```json
[
  { "label": "Material", "value": "Stoneware", "x": 42, "y": 30 },
  { "label": "Capacity", "value": "1.2 L", "x": 60, "y": 55 },
  { "label": "Glaze", "value": "Matte white", "x": 35, "y": 72 },
  { "label": "Made in", "value": "Portugal" }
]
```

A list of facts about the product. Each entry has:

- `label`: the name of the fact.
- `value`: its value. Keep it short.
- `x` and `y`: optional. Used only by the Annotated product section. They place that row's numbered pin on the photograph, as a percentage from the left edge (`x`) and from the top edge (`y`). `50, 50` is the centre.

It is used in two places:

- **[Spec table](../sections/signature#spec-table)**, when **Source** is set to **Product**. Shows up to 24 rows.
- **[Annotated product](../sections/signature#annotated-product)**. Shows up to eight rows, each with a pin.

**When empty**: a Spec table set to Product shows the rows you added in the editor instead, or stays hidden if there are none. An Annotated product shows the photograph, text and buy row without pins or detail rows.

**Getting the format right**: JSON is strict. Use straight double quotes, a comma between entries and none after the last one, and square brackets around the whole list. The Shopify admin tells you if the JSON is not valid when you save.

## `custom.badge` {#custom-badge}

- **Namespace and key**: `custom.badge`
- **Type**: Single line text
- **Example**: `New`

One short badge of your own, such as New, Made to order or Limited. It is shown by the **Badges** block on the product page, beside the automatic Sold out and Sale badges.

**When empty**: only Sold out or Sale show, and only when they apply. With no badge at all, the block takes no space.

<!-- to confirm: badges render on the product page only today (blocks/_product-badges.liquid). Product cards do not render badges on origin/main 2026-11-24. Update if cards gain them. -->

## `reviews.rating` and `reviews.rating_count` {#reviews}

- **Namespace and key**: `reviews.rating` and `reviews.rating_count`
- **Type**: Rating, and Integer
- **Example**: 4.6 out of 5, and 128

These are Shopify's standard review metafields. You do not usually create or fill them yourself: a review app that supports Shopify's standard review metafields fills them in as customers leave reviews.

They are shown by the **Rating** block on the product page.

**When empty**: the Rating block shows nothing for that product.

## Other product details the theme uses

These are standard Shopify fields, not metafields.

| In the admin | Where it shows |
| --- | --- |
| **Compare-at price** | A struck-through price, and the Sale badge |
| **Unit price** | Under the price, for products sold by weight or volume |
| **Vendor** | The Product vendor block |
| **Swatches on a product option** | Swatch dots on cards and in the variant picker |
| **Variant images** | The image shown when a variant is chosen |
| **Inventory tracking** and **Continue selling when out of stock** | The Inventory status block |
| **Complementary products** (Search & Discovery app) | The Complementary products block and Product recommendations |
| **Selling plans** (subscription apps) | Subscription choices in Buy buttons |
| **Alt text on images** | Read by screen readers and search engines |
