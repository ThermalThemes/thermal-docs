---
title: Sections reference
description: Every section in Firehole's library, grouped by category, with one-line descriptions and links to per-section settings documentation.
---

# Sections reference

Firehole ships 33 drop-in sections plus the header, footer, and announcement bar — 52 section files in total — built on the thermal-base substrate. Sections are grouped into layout, marketing, product, and content categories. Every section is documented with its settings, blocks, and intended use.

## Layout

Sections that live in the global header and footer groups. Configure once; they apply across every template.

- [Header](./header) — Site header with navigation, mega menu, logo, search, account, cart.
- [Footer](./footer) — Navigation columns, brand block, newsletter, payment icons, brand-mark watermark.
- [Announcement bar](./announcement-bar) — Rotating promotional strip above the header.

## Marketing

Sections for homepage and landing-page composition.

- [Slideshow](./slideshow) — Hero carousel with display-scale headings, overlay scrims, dual buttons per slide.
- [Featured collection](./featured-collection) — Product grid from a chosen collection, with card eyebrows and custom badges.
- [Featured product](./featured-product) — Single-product showcase with display-scale title.
- [Image with text](./image-with-text) — Split layout with asymmetric ratios and full-bleed option.
- [Images with text scroll](./images-with-text-scrolling) — Pinned image that crossfades as you scroll through steps.
- [Multirow](./multirow) — Alternating full-width rows, each with image, subheading, heading, text, and a button.
- [Media grid](./media-grid) — Mixed image/video/text mosaic with per-cell spans and colored tiles.
- [Dynamic grid](./dynamic-grid) — Configurable multi-column grid of theme blocks, with adjustable columns and gap.
- [Multi-column](./multi-column) — Repeating columns with image, heading, text.
- [Collection list](./collection-list) — Grid of collection tiles.
- [Hot spots](./hot-spots) — Image with product or content annotations.
- [Shop the look](./shop-the-look) — Lifestyle image with product hotspots and an adjacent product panel.
- [Before / After](./before-after) — Drag-reveal image comparison.
- [Process steps](./process-steps) — Numbered step sequence in horizontal, grid, or vertical layout, with optional connectors and number styles.
- [Creator spotlight](./creator-spotlight) — Featured creator with portrait, bio, signature, and an adjacent product rail.
- [Logo list](./logo-list) — Press or stockist logos in a strip.
- [Trust icons](./trust-icons) — Row of guarantee and benefit icons with heading and supporting text.
- [Press](./press) — Publication quotes with logos and dates.
- [Testimonials](./testimonials) — Quote cards with ratings and attribution.
- [Countdown](./countdown) — Timer to a date with configurable expiration behavior.

## Product

Sections specific to product pages and product-discovery surfaces.

- [Product page](./product-page) — The product template's core: gallery layouts, zoom, sticky info column, buy box.
- [Collection page](./collection-page) — The collection template's core: filters, sorting, load-more pagination.
- [Bundle builder](./bundle-builder) — Build-a-bundle from a collection with min/max items, live savings, and progress messaging.
- [Product recommendations](./product-recommendations) — Related or complementary products for the current product.
- [Recently viewed](./recently-viewed) — Products the visitor has viewed, from browser storage.
- [Specification table](./specification-table) — Spec rows from blocks or a product metafield.
- [Quick order list](./quick-order-list) — Multi-variant quantity order form for wholesale-style buying.

## Content

Sections for editorial and informational pages.

- [Rich text](./rich-text) — Heading plus body text plus optional buttons, with an optional brand-mark watermark.
- [Video](./video) — Uploaded or YouTube/Vimeo video with cover image.
- [Accordion](./accordion-content) — Collapsible content items. FAQ, shipping, returns.
- [Newsletter](./newsletter) — Email capture, stacked or split layout.
- [Blog posts](./blog-posts) — Article cards from a chosen blog.
- [Article navigation](./blog-article-nav) — Previous/next links for blog posts.
- [Contact form](./contact-form) — Name, email, message form with optional phone and subject fields.

## Custom

- [Custom Liquid](./custom-html) — Liquid or HTML block for one-off composition needs.

## Theme blocks

Sections marked as taking **theme blocks** accept a shared block library, reorderable per section instance:

- **Heading** — heading text, semantic size (h1–h4), display size (none/sm/md/lg/xl), alignment, color, and a highlight effect (italic, underline, accent, outline) applied to a chosen phrase.
- **Subheading** — short label with optional icon shape and alignment. Renders in the monospace label register.
- **Text** — rich text with alignment and size.
- **Caption** — small caption text.
- **Button** — label, link, style (primary/secondary/link), size.
- **Image** — standalone image with aspect ratio, width, link.
- **Video** — standalone video or external URL with cover image.
- **Rich text** — heading + text pair.
- **Details (collapsible)** — a single collapsible summary/content pair.
- **Divider** — horizontal rule with width, thickness, color.
- **Spacer** — vertical spacing, set per breakpoint.
- **Custom Liquid** — raw Liquid embed.

The **display size** setting on the Heading block is the theme's signature move: it renders the heading at the oversized display scale (up to poster size) while keeping the chosen heading tag for semantics.

## Composition notes

Every section ships with a `color_scheme` picker. Alternating schemes hard from section to section is the primary register lever — and which schemes you alternate is a preset decision. The Firehole preset runs five schemes — two bright neutral grounds, two saturated colorblock schemes, and a deep-ink inverse; see [Presets](../presets/) for what it defines.

Every section has independent top and bottom padding controls (0–160px). The default spacing is intentional but not universal — poster-dense homepages and long-form editorial pages want different cadences.

Sections that take blocks ship with sensible block defaults out of the preset. You can reorder, remove, or add blocks per section instance.
