---
title: Customizing
description: Color schemes, typography, layout decisions, and global theme settings in Lacquer.
---

# Customizing

Lacquer is configured through the Shopify theme editor — no code editing required. Customization surfaces are organized into theme settings (global) and section settings (per-section). This guide covers the global settings.

## Color schemes

Lacquer ships with five color schemes by default:

- **Scheme 1 — Stage** — Dark warm neutral background, warm bone ink, heat accent. The theme's signature register.
- **Scheme 2 — Paper** — Warm off-white background, deep ink, heat accent. Light counterpart to Stage.
- **Scheme 3 — Mid** — Mid-gray background, ink and bone in contrast. Used for transitional sections.
- **Scheme 4 — Heat** — Heat-accent background, dark ink, white accent. Used for CTA sections.
- **Scheme 5 — Mono** — Pure black background, pure white ink. Used for full-bleed photographic sections.

Each color scheme defines:

- `background` — Primary background color
- `background_secondary` — Secondary background (for cards, code, inset content)
- `foreground` — Primary text color
- `foreground_secondary` — Secondary text color (captions, metadata)
- `accent` — Accent color (links, buttons, focus rings)

To customize:

1. From the theme editor, open **Theme settings → Colors**.
2. Click the scheme you want to edit.
3. Adjust the five color values.
4. Click **Save**.

You can apply color schemes per section using the `color_scheme` picker that appears in every section's settings. The convention is to alternate between bg-1 (Stage) and bg-2 (Mid or Paper) across adjacent sections for visual rhythm.

## Typography

Lacquer ships with two font families paired across the type system:

- **Display** — IBM Plex Sans for headings, large display copy, and primary navigation.
- **Mono** — IBM Plex Mono for metadata, labels, captions, and code.

To swap fonts:

1. From the theme editor, open **Theme settings → Typography**.
2. Choose a Display font (heading family) and a Body font (body copy family). The mono font is fixed.
3. Choose weights and scales.
4. Click **Save**.

Lacquer's typography scale uses a perfect-fourth ratio (1.333) anchored at 16px body. Heading sizes step from H6 (16px) to H1 (52px). Custom scales should preserve the ratio for predictable rhythm.

## Layout

Layout decisions per template are made via the theme editor by adding, removing, and reordering sections inside each template's section list.

- **Home template** — `templates/index.json`. Default preset includes Slideshow + Featured collection + Image with text + Multirow + Featured product + Newsletter.
- **Product template** — `templates/product.json`. Two layouts ship: `product.editorial.json` (gallery-left, editorial register) and `product.drop.json` (stacked media, drop register). Set the default at **Theme settings → Templates**.
- **Collection template** — `templates/collection.json`. Default preset includes filter sidebar, sort options, 12–48 products per page.
- **Cart template** — `templates/cart.json`. Default preset includes line items, cart notes, shipping calculator, recommended products.

To customize a template:

1. From the theme editor, open the template via the dropdown at the top.
2. Add, remove, or reorder sections in the left sidebar.
3. Save.

To create a new template variant (for a specific product or page), use Shopify's **Add template** affordance from the admin's Templates page.

## Color scheme picker usage

Every section in Lacquer ships with a `color_scheme` picker in its settings. Setting a scheme on a section overrides the section's container colors — background, text, accent — but does not affect blocks inside that don't reference the section's scheme.

The default convention:

- Slideshow / Hero sections — Scheme 5 (Mono) when the image is full-bleed; Scheme 1 (Stage) when content needs to render over a partial image.
- Featured collection / Featured product — Scheme 1 (Stage).
- Image with text / Multirow — Alternate between Scheme 1 (Stage) and Scheme 2 (Paper) section-by-section for visual rhythm.
- Newsletter / Contact form / CTA sections — Scheme 4 (Heat) for emphasis, or Scheme 1 (Stage) for low-key.

Read [Section composition notes](../sections/) for more on color-scheme rhythm.

## Global settings

Other global settings worth knowing about:

- **Logo** — Theme settings → Logo. Both a primary logo and a transparent-header logo. The transparent logo is used when the header is in transparent mode over a hero image.
- **Favicon** — Theme settings → Favicon. PNG or SVG.
- **Buttons** — Theme settings → Buttons. Configure primary, secondary, and link button styles globally.
- **Inputs** — Theme settings → Inputs. Input border radius, focus ring color, error state styling.
- **Animation** — Theme settings → Animation. Scroll-reveal behavior, hover transitions, page transitions. Disable for performance or accessibility.

## Next steps

- [Sections reference](../sections/) — every section's settings and blocks.
- [Presets](../presets/) — what ships with Lacquer's preset.
- [FAQ](../faq/) — common customization questions.
