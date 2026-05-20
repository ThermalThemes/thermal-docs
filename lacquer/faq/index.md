---
title: Frequently asked questions
description: Common questions about Lacquer setup, customization, and use.
---

# Frequently asked questions

## How do I change the hero image?

The hero is the Slideshow section on the home template. From the theme editor:

1. Open the home template.
2. Click the Slideshow section in the left sidebar.
3. Expand the slide block you want to edit.
4. Click the Image picker and either upload a new image or choose from existing files.
5. Save.

For best results, use images at minimum 2400×1600 (3:2) for landscape slides or 1600×2400 (2:3) for portrait. Lacquer serves responsive image sets automatically; uploading at high resolution gives the responsive variants headroom.

## Why isn't my product image showing?

The most common causes:

- **The image is missing alt text required by the section.** Check the section's settings.
- **The image is in an unsupported format.** Lacquer supports JPG, PNG, WebP, and SVG. HEIC images uploaded from iOS may need conversion.
- **The image is too small for the gallery layout.** The product gallery's grid layouts assume minimum 800×800. Smaller images render but may appear pixelated.
- **The product has multiple images but only one is displaying.** Check the product's images in the admin — the gallery shows all linked images.

## How do I customize the color scheme?

From the theme editor, open **Theme settings → Colors**. Each of Lacquer's five color schemes can be edited independently. Each scheme has five color values: background, secondary background, foreground, secondary foreground, and accent. See [Customizing → Color schemes](../customizing/#color-schemes) for the full surface.

## What font is Lacquer using?

Lacquer ships with IBM Plex Sans (Display) and IBM Plex Mono (Mono). Body copy uses IBM Plex Sans at 400 weight; headings use 700. The mono font is used for metadata, labels, and code.

To change fonts, open **Theme settings → Typography** and choose from Shopify's font catalog or upload a custom font.

## How do I add my own custom CSS?

Two approaches:

1. **Theme settings → Custom CSS.** Paste CSS rules here and they're injected into every page. Best for small overrides.
2. **Edit code → assets/theme.css.** Direct editing of the theme's compiled CSS. Best for significant changes.

> **Caution:** Custom CSS persists across theme updates only when added via Theme settings → Custom CSS. Direct edits to `assets/theme.css` are overwritten when the theme is updated. Use the settings field for changes that should survive updates.

## Where do I report bugs?

Open a contact request through the [Contact page](../contact/), or email support@thermalthemes.com directly. Please include:

- The Shopify store URL where the issue occurs.
- The theme version (visible in **Theme settings → Theme info** or via the changelog).
- A screenshot or screen recording of the issue.
- The browser and operating system in use.

We respond within one business day to acknowledged issues.

## How do I upgrade to the latest version?

When a new version is available, the Shopify admin shows an upgrade prompt on the theme card in **Online Store → Themes**. The upgrade process:

1. Click **Actions → Update theme** on the Lacquer theme card.
2. Shopify creates a new copy of Lacquer at the latest version. Your current customizations are preserved as far as possible.
3. Review the new version in the theme editor.
4. Publish the new version when ready.

Changelog details for each version are in the [Changelog](../changelog/).

## Does Lacquer support multi-language stores?

Yes. Lacquer renders translated strings from Shopify's locale files. To enable additional languages:

1. Open **Settings → Languages** in the Shopify admin.
2. Add your target languages.
3. Translate the strings in **Settings → Languages → Translate**.

The theme picks up translations automatically — no code changes required.

## Does Lacquer support multi-currency stores?

Yes. Lacquer renders prices in the visitor's selected currency via Shopify Markets. To configure:

1. Open **Settings → Markets** in the Shopify admin.
2. Enable the markets you sell to.
3. Configure pricing per market.

The country selector in the header (or footer) lets visitors switch markets manually.

## Is Lacquer compatible with Shopify apps?

Yes. Lacquer supports Online Store 2.0 app blocks. Apps that ship as theme app blocks can be added to any section that supports app blocks (most homepage and product sections). For apps that require manual code edits, refer to the app's documentation.

## What's the difference between the editorial and drop product layouts?

Lacquer ships with two product templates:

- **`product.editorial.json`** — Gallery-left, info-right layout. Info column is sticky on desktop. Designed for products with deep media and editorial copy — the default for most stores.
- **`product.drop.json`** — Stacked media at the top, info below. Designed for single-SKU drop pages where each product gets a dedicated landing-page treatment.

Set the default at **Theme settings → Templates**. Per-product overrides are available via the **Template** dropdown on each product's page in the admin.
