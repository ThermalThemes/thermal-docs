---
title: Sections reference
description: Every section in Lacquer's library, grouped by category, with one-line descriptions and links to per-section settings documentation.
---

# Sections reference

Lacquer ships a 33-section library built on the thermal-base v1 substrate. Sections are grouped into layout, marketing, product, content, and page categories. Every section is documented with its settings, blocks, and intended use.

## Layout

Sections that appear in the global header or footer groups. Configure once; they apply across every template.

- [Header](./header) — Site header with navigation, logo, search, account, cart.
- [Footer](./footer) — Site footer with navigation columns, newsletter, social links, payment icons.
- [Announcement bar](./announcement-bar) — Promotional bar that sits above the header. Shipping cutoffs, drop dates, restock notes.

## Marketing

Sections for homepage and landing-page composition.

- [Slideshow](./slideshow) — Hero carousel of slides, each with image, heading, text, button.
- [Featured collection](./featured-collection) — Heading plus product grid pulled from a chosen collection.
- [Featured product](./featured-product) — Single-product showcase with media gallery and buy buttons.
- [Image with text](./image-with-text) — Split layout, image one side, content the other.
- [Multi-column](./multi-column) — Repeating column blocks with image or icon plus heading and text.
- [Multirow](./multirow) — Stacked rows of image-and-text content for editorial composition.
- [Collection list](./collection-list) — Grid of collection tiles.
- [Logo list](./logo-list) — Press logos, stockists, brand partners.
- [Media grid](./media-grid) — Asymmetric grid of images and video, editorial register.
- [Testimonials](./testimonials) — Quote blocks with attribution.

## Product

Sections specific to product pages and product-discovery surfaces.

- [Product recommendations](./product-recommendations) — Algorithmic product grid based on the current product.
- [Recently viewed](./recently-viewed) — Recently viewed products for the current visitor.
- [Specification table](./specification-table) — Spec table for product detail. Categorical and numeric specs.

## Content

Sections for editorial, content, and informational pages.

- [Rich text](./rich-text) — Heading plus body text plus optional buttons, centered or aligned column.
- [Video](./video) — Hosted or Shopify-uploaded video with optional poster image.
- [Accordion content](./accordion-content) — Collapsible content blocks. FAQ, shipping, returns.
- [Newsletter](./newsletter) — Email capture form with heading and supporting copy.
- [Blog posts](./blog-posts) — Heading plus grid of article cards from a chosen blog.
- [Contact form](./contact-form) — Name, email, message form with optional subject field.

## Custom

- [Custom HTML](./custom-html) — Liquid or HTML block for one-off composition needs.

## Composition notes

Every section ships with a `color_scheme` picker. Mixing color schemes across adjacent sections is the primary register lever — alternating bg-1 and bg-2 schemes gives the page rhythm without breaking the type system.

Every section has independent top and bottom padding controls. Use them. The default spacing is intentional but not universal — long-form editorial pages and dense catalog homepages want different cadences.

Sections that take blocks ship with sensible block defaults out of the preset. You can reorder, remove, or add blocks per section instance.
