---
title: Customizing
description: Colour schemes, typography, motion, layout, and global theme settings in Firehole.
---

# Customizing

Firehole is configured through the Shopify theme editor — no code editing required. Customization splits into theme settings (global) and section settings (per section instance). This guide covers the global settings.

## Colour schemes

Colour schemes are defined in theme settings and designed to alternate from section to section. How many you get and what they look like is a preset decision — the Firehole preset ships **five**: two bright neutral grounds carry the calm reading sections, two fully saturated colorblock schemes carry the loud-colour moments, and one deep-ink inverse carries full-bleed editorial weight.

- **Cream** — Bright warm cream background (`#F7F2E7`), near-black ink text. The default scheme.
- **White** — Cool clean white ground; the calmer of the two neutral schemes.
- **Orange** — A saturated burnt-orange field (`#E5602A`). Banded across a whole section as a loud-colour moment, not hoarded as a thin accent.
- **Teal** — A saturated river-glass teal field (`#1B8C82`). The other colorblock scheme.
- **Ink** — Deep near-black background, bright text. The inversion scheme — full-bleed editorial slabs, the header, and the footer.

Each scheme defines ten roles:

- `background` and optional `background_gradient`
- `text` — primary text colour
- `accent_text` — the accent applied to eyebrows, labels, and emphasis text. Tuned per scheme so accents hold WCAG AA contrast on every background — if you adjust a background, re-check this pair. (A mid-tone like the teal can't carry small text on a bright ground; reserve it for rules, fills, and large display, not body copy.)
- `primary_button_background` / `primary_button_text_color`
- `secondary_button_background` / `secondary_button_text_color`
- `input_background` / `input_text_color`

Borders are derived automatically by mixing the scheme's text colour into its background, so rules and hairlines follow your palette without separate settings.

To edit: **Theme settings → Colors**, click a scheme, adjust, save. Two global selectors choose the **Default colour scheme** (applied where a section doesn't override) and the **Modal and overlay colour scheme** (drawers, popovers).

Status colours — sale and sold-out badges, success/warning/error — are set separately in the same group.

### Scheme rhythm

Every section has a `color_scheme` picker. The intended rhythm runs the bright neutral grounds down the page for the reading sections, dropping a saturated **Orange** or **Teal** block in as a loud-colour moment and using **Ink** for full-bleed editorial weight. Adjacent sections sharing a scheme merge visually into one slab — sometimes that's the point.

## Typography

Three font axes, set at **Theme settings → Typography** — any Shopify font works (the Firehole preset uses **Oswald / Source Serif 4 / Work Sans**):

- **Heading font** — the display face; a tall condensed grotesque (Oswald) that stays structural and disciplined.
- **Body font** — a readable serif (Source Serif 4) for running copy and product descriptions.
- **Subheading and label font** — a clean sans (Work Sans) carrying eyebrows, labels, buttons, and spec data.

The scale controls set the register:

- **Heading size scale** — 75–200%. The Firehole preset runs **100%** — the energy comes from colour and imagery, not oversized type.
- **Heading capitalization** — `none`, `uppercase`, or `lowercase`.
- **Heading letter spacing** — `tight`, `normal`, or `wide`.
- **Body text size** — Set per breakpoint.
- **Button font / capitalization / letter spacing** — The Firehole preset sets buttons in the **subheading** font.

Swapping fonts keeps every size and spacing relationship intact. In Firehole the brightness lives in the colour schemes, not the type — so the type scale stays calm and the palette does the talking.

## Appearance

**Theme settings → Appearance**:

- **Page width** — 1000–1600px. The Firehole preset runs the default 1200.
- **Section spacing** — Five levels from `compact` to `generous`, scaling the default vertical rhythm between sections.
- **Button corner radius** and **Input corner radius** — A small 4px radius by default.
- **Icon line weight** — 1–2.5.

## Motion

**Theme settings → Motion**:

- **Animations** — Master toggle. The theme also respects the visitor's reduced-motion preference automatically.
- **Animation style** — `restrained`, `weighted`, `standard`, `expressive`, `playful`. Sets the character of hovers, reveals, and transitions theme-wide; Firehole's quiet-in-motion register suits `restrained` or `weighted`. The scroll-story pin and gallery transitions inherit this setting.

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

Layout per template is the section list in the theme editor — add, remove, reorder. Firehole ships 14 templates: home, product, collection, collections list, cart, search, blog, article, page, a contact page template, a theme-features page template, 404, password, and gift card. To create a variant template for a specific product or page, use **Add template** in the admin's Templates page.

## Next steps

- [Sections reference](../sections/) — every section's settings and blocks.
- [Presets](../presets/) — what the Firehole preset configures.
- [FAQ](../faq/) — common customization questions.
