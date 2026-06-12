---
title: Frequently asked questions
description: Common questions about Sickbird setup, customization, and use.
---

# Frequently asked questions

## How do I change the hero?

The hero is the Slideshow section on the home template. From the theme editor:

1. Open the home template.
2. Click the Slideshow section in the left sidebar.
3. Expand the slide block and replace the image; edit the heading and its display size.
4. Save.

For full-height slides, use images at minimum 2400×1600. If type sits over photography, turn on the slide's **Image overlay** scrim — it's tuned to keep text at accessible contrast.

## How do I make the theme quieter?

The loudness is settings, not code. Three moves: drop **Heading size scale** (Theme settings → Typography) from 140% toward 100%, set **Heading capitalization** to `none`, and stop alternating color schemes between sections (run more sections on Paper). Square corners and mono labels can stay — they read as precision at any volume.

## Why don't my collection pages show size or color filters?

Out of the box the filter UI shows Availability and Price. Option-based filters come from Shopify's free **Search & Discovery** app: install it, open **Apps → Search & Discovery → Filters**, and add the options you want. The theme renders whatever filters the store publishes — see [Set up collection filters](../getting-started/#set-up-collection-filters).

## Why doesn't the product gallery change when I pick a variant?

The gallery swaps to a variant's image only when the variant has media assigned. In the product admin, edit each variant and assign its image; the picker then drives the gallery.

## Why isn't the star rating showing?

The rating displays on product cards and the product page read Shopify's product-review metafields (`reviews.rating`, `reviews.rating_count`). They populate when you install a review app that writes those metafields — most major ones do. Without review data the rating row simply doesn't render.

## How do I customize the color schemes?

**Theme settings → Colors.** Each of the four schemes edits independently across ten roles — background, text, accent text, two button pairs, and inputs. The `accent_text` role is contrast-tuned per scheme; if you change a scheme's background, re-check its accent against it. See [Customizing → Color schemes](../customizing/#color-schemes).

## What fonts does Sickbird use?

Oswald Bold (headings), Work Sans (body), Space Mono (labels, eyebrows, buttons). All three axes swap independently at **Theme settings → Typography** from Shopify's font library. The scale, capitalization, and tracking settings — not the font files — carry the theme's register.

## How do I add custom CSS?

Use the theme editor's built-in **Custom CSS** field (Theme settings, bottom of the list) for overrides that survive theme updates. Direct edits under **Edit code** are overwritten when the theme is updated — keep them for development, not for live customization.

## How do I put specs on my product pages?

Two ways, both via the [Specification table](../sections/specification-table) section: author rows as blocks in the editor (one-off tables), or set **Spec source** to `metafield` and store each product's specs in a `custom.specs` JSON metafield — one section instance then renders per-product specs across the catalog. The metafield format is documented on the section page.

## How do I upgrade to the latest version?

When a new version is available, the theme card in **Online Store → Themes** shows an update prompt. Shopify creates a copy at the new version with your customizations carried over where possible; review it in the editor, then publish. Version details are in the [Changelog](../changelog/).

## Does Sickbird support multiple languages and currencies?

Yes to both. Languages: add and translate them under **Settings → Languages**; the theme renders translated strings automatically. Currencies and markets: configure **Settings → Markets**, then enable the country/region selector in the [Header](../sections/header) or footer so visitors can switch.

## Is Sickbird compatible with Shopify apps?

Yes. Sickbird supports Online Store 2.0 app blocks — apps that ship theme blocks can be added to the product page's info column and to sections that accept app blocks. Apps requiring manual code edits should follow the app's own documentation.

## Where do I report bugs?

Through the [contact form](https://thermalthemes.com/contact/). Include your store URL, theme version (**Theme settings → Theme info**), a screenshot or recording, your browser and OS, and the steps to reproduce. We respond within one business day, Monday through Friday. More on what to include: [Contact](../contact/).
