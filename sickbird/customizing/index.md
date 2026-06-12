---
title: Customizing
description: Color schemes, typography, motion, layout, and global theme settings in Sickbird.
---

# Customizing

Sickbird is configured through the Shopify theme editor — no code editing required. Customization splits into theme settings (global) and section settings (per section instance). This guide covers the global settings.

## Color schemes

Sickbird ships four color schemes, designed to alternate hard from section to section:

- **Scheme 1 — Paper** — Off-white paper background (`#F4F2ED`), near-black ink text, burnt-orange accent. The default scheme.
- **Scheme 2 — Ink** — Near-black background (`#131414`), paper text, hot-orange accent and orange primary button. The inversion scheme; used for graphic slabs, the header, and the footer.
- **Scheme 3 — Surf** — Cold reef green (`#2E5A4F`), paper text, peach accent. The secondary graphic color.
- **Scheme 4 — Orange** — Safety orange (`#FF5A1F`), ink text. The accent slab — use at most once per page.

Each scheme defines ten roles:

- `background` and optional `background_gradient`
- `text` — primary text color
- `accent_text` — the accent applied to eyebrows, labels, and emphasis text. Tuned per scheme so accents hold WCAG AA contrast on every background — if you adjust a background, re-check this pair.
- `primary_button_background` / `primary_button_text_color`
- `secondary_button_background` / `secondary_button_text_color`
- `input_background` / `input_text_color`

Borders are derived automatically by mixing the scheme's text color into its background, so rules and hairlines follow your palette without separate settings.

To edit: **Theme settings → Colors**, click a scheme, adjust, save. Two global selectors choose the **Default color scheme** (applied where a section doesn't override) and the **Modal and overlay color scheme** (drawers, popovers).

Status colors — sale and sold-out badges, success/warning/error — are set separately in the same group.

### Scheme rhythm

Every section has a `color_scheme` picker. The intended rhythm alternates Paper and Ink down the page, with Surf as a change-up and Orange as the single loudest moment. Adjacent sections sharing a scheme merge visually into one slab — sometimes that's the point.

## Typography

Three font axes, set at **Theme settings → Typography**:

- **Heading font** — Oswald Bold by default. Condensed and industrial; the structural element of the theme.
- **Body font** — Work Sans. A neutral grotesque that stays legible against the loud display type.
- **Subheading and label font** — Space Mono. Carries eyebrows, labels, buttons, and data in a monospace register.

The scale controls are where the register lives:

- **Heading size scale** — 75–200%. Sickbird's preset runs 140%.
- **Heading capitalization** — The preset is `uppercase`.
- **Heading letter spacing** — The preset is `tight`.
- **Body text size** — Set per breakpoint (preset: 17px desktop, 15px mobile).
- **Button font / capitalization / letter spacing** — The preset sets buttons in the mono font, uppercase, wide-tracked.

Swapping fonts keeps every size and spacing relationship; the loudness is in the scale settings, not the font files. A quieter store can drop the heading scale toward 100% and set capitalization to `none` without touching anything else.

## Appearance

**Theme settings → Appearance**:

- **Page width** — 1000–1600px. Preset: 1400.
- **Section spacing** — Five levels from `compact` to `generous`, scaling the default vertical rhythm between sections.
- **Button corner radius** and **Input corner radius** — Preset: 0. Square corners are part of the stamped register; rounding both softens the whole theme at once.
- **Icon line weight** — 1–2.5.

## Motion

**Theme settings → Motion**:

- **Animations** — Master toggle. The theme also respects the visitor's reduced-motion preference automatically.
- **Animation style** — `restrained`, `weighted`, `standard`, `expressive`, `playful`. Sets the character of hovers, reveals, and transitions theme-wide. Sickbird's register is snap-and-weight; the scroll-story pin and gallery transitions inherit this setting.

## Cart

**Theme settings → Cart**:

- **Cart type** — `drawer` (default; slides in over the page), `message` (inline confirmation), or `page` (straight to /cart).
- **Cart icon** — cart, bag, or basket.
- **Free shipping progress bar** — Off by default, with a configurable threshold.
- **Empty cart link** — Where the empty-state CTA points.

## Product listing

- **Card content density** (**Theme settings → Product listing**) — `tight`, `normal`, `loose` spacing inside product cards.
- **Swatch shape** (**Theme settings → Color swatches**) — circle or square, global.

## Social media and sharing

**Theme settings → Social media** holds URLs for 18 platforms; icons render in the footer's brand block for any URL that's filled in. **Social sharing** sets the fallback share image for pages without their own.

## Templates

Layout per template is the section list in the theme editor — add, remove, reorder. Sickbird ships 14 templates: home, product, collection, collections list, cart, search, blog, article, page, a contact page template, a theme-features page template, 404, password, and gift card. To create a variant template for a specific product or page, use **Add template** in the admin's Templates page.

## Next steps

- [Sections reference](../sections/) — every section's settings and blocks.
- [Presets](../presets/) — what the Sickbird preset configures.
- [FAQ](../faq/) — common customization questions.
