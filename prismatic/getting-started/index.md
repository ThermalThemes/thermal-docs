---
title: Install and set up
description: How to install Prismatic from the Shopify Theme Store, load demo content, and publish your first version.
---

# Install and set up

## Install from the Theme Store

1. Open the Shopify Theme Store and find Prismatic.
2. Click **Try theme**. Prismatic installs to your store as an unpublished theme.
3. From the Shopify admin, go to **Online Store → Themes**.
4. Find Prismatic in the **Theme library** section.
5. Click **Customize** to open the theme editor.

You can run Prismatic side-by-side with your current published theme. Nothing on your storefront changes until you click **Publish**.

## Load demo content

Prismatic installs with the Prismatic preset configured with sample copy, placeholder images, and section settings tuned to its register. New stores see the preset on first install. The demo store is branded **Inkling**, an artist-collab catalog; see [Presets](../presets/) for what the preset configures.

The preset is a starting point, not a finished store. Replace placeholder images with your own photography and product graphics, swap sample copy for your own language, and adjust color schemes and typography to match your brand. The [Customizing](../customizing/) guide covers the customization surfaces.

## Add your products

Prismatic expects products with:

- **At least 3 product images per product.** The gallery's thumbnail-rail layout assumes media depth. Single-image products render, but the rail collapses and the page feels thin.
- **Filled-out product descriptions.** The product page treats the description as primary content, not a tab.
- **Variants where appropriate** — colorway, size, edition. The variant picker supports radio, pill, and swatch rendering, and variants with their own images swap the gallery's main image on selection.
- **Collections.** Group products by discipline, category, or run. The collection page is configured to handle small and large catalogs — load-more pagination keeps short catalogs from paginating awkwardly.

## Set up collection filters

Prismatic's filter UI (sidebar, top bar, or drawer — set on the collection page section) renders whatever filters your store publishes. Out of the box that's **Availability** and **Price**. To add option-based filters — size, color, product type, vendor:

1. Install Shopify's free **Search & Discovery** app.
2. Open **Apps → Search & Discovery → Filters**.
3. Click **Add filter** and choose the options to expose.

The theme picks the new filters up automatically; no theme configuration is needed.

## Configure essential sections

Before publishing, walk through these in the theme editor:

- **Header** — Set your logo, choose desktop and mobile layouts, assign the navigation menu. If your menu has three levels, the mega menu panel renders automatically; an optional feature image slot lives in the header settings.
- **Footer** — Add navigation columns, the brand block with social links, the newsletter signup.
- **Announcement bar** — Optional. Shipping cutoffs, restock notes, run announcements. Multiple announcements can auto-rotate.
- **Homepage slideshow or hero** — Replace placeholder images and copy. The heading display-size setting is where the poster register lives.
- **Featured collection** — Point at your most important collection.

## First publish

1. From the theme editor, click **Save** to commit your changes to the draft theme.
2. Return to **Online Store → Themes**.
3. Click **Actions → Publish** on the Prismatic theme.
4. Confirm. Your storefront switches to Prismatic immediately.

## Next steps

- [Sections reference](../sections/) — every section's settings and blocks.
- [Customizing](../customizing/) — color schemes, typography, motion.
- [FAQ](../faq/) — common setup questions and answers.
