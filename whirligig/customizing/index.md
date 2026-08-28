---
title: "Customizing"
description: "Every global theme setting in Whirligig, grouped as it appears in the theme editor."
---

# Customizing

Whirligig is configured through the Shopify theme editor. No code editing is required. Customization splits into theme settings, which are global, and section settings, which belong to one instance of one section. This page covers the global ones; [Sections reference](../sections/) covers the rest.

The list immediately below is generated from the theme's own settings schema, so it is the authoritative account of what exists and what each default is. Everything after it is the part a schema cannot tell you: how these settings work together here, which of them change the character of the store rather than a detail of it, and where the audio layer is configured.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

## Theme settings reference

<!-- generated:start -->

### Appearance

- **Page width**. 1000–1600px in steps of 100, default 1200px.
- **Section spacing**. `Compact` · `Normal` · `Relaxed` · `Airy` · `Generous`, default `Normal`. Controls vertical padding above and below sections
- **Button corner radius**. 0–40px, default 4px.
- **Input corner radius**. 0–20px, default 4px.
- **Icon line weight**. `Thin` · `Light` · `Regular` · `Medium`, default `Regular`. Affects line weight on icons throughout the site.

### Colors

- **color_schemes**
- **Default color scheme**. Colour scheme.
- **Modal and overlay color scheme**. Colour scheme.

**Product and status colors**

- **Sale badge**. Colour.
- **Sale badge text**. Colour.
- **Sold out badge**. Colour.
- **Success**. Colour.
- **Warning**. Colour.
- **Error**. Colour.

### Typography

- **Heading font**. Font.
- **Body font**. Font.
- **Subheading and label font**. Font.
- **Heading size scale**. 75–200% in steps of 5, default 100%. Scales all heading sizes up or down uniformly
- **Heading capitalization**. `As typed` · `ALL CAPS` · `all lower` · `Title Case`, default `As typed`.
- **Heading letter spacing**. `Tight` · `Normal` · `Wide` · `Wider`, default `Normal`.
- **Body text size — mobile**. 13–20px, default 15px.
- **Body text size — desktop**. 13–20px, default 16px.
- **Button font**. `Body font` · `Heading font` · `Subheading font`, default `Body font`.
- **Button capitalization**. `As typed` · `ALL CAPS` · `all lower` · `Title Case`, default `As typed`.
- **Button letter spacing**. `Tight` · `Normal` · `Wide` · `Wider`, default `Normal`.

### Currency format

- **Show currency code**. Off by default. Displays currency code alongside prices (e.g. $10.00 USD)

### Motion

Animation style is set by the theme author. Use the toggle below to turn animations on or off — useful for a calmer site or for respecting visitors who prefer reduced motion.

- **Animations**. On by default. Disable to render the site as if every visitor had system-level reduced motion enabled.
- **Animation style**. `Restrained` · `Weighted` · `Standard` · `Expressive` · `Playful`, default `Standard`. Set by the theme author. Most merchants leave this on the default.

### Color swatches

- **Swatch shape**. `Circle` · `Square`, default `Circle`.

### Product listing

- **Card content density**. `Tight` · `Normal` · `Loose`, default `Normal`. Controls spacing between product title, price, and other card elements

### Cart

- **Cart type**. `Drawer` · `Notification` · `Page`, default `Drawer`.
- **Cart icon**. `Cart` · `Bag` · `Basket`, default `Cart`.
- **Empty cart link**. A link. Shown when cart is empty — defaults to home page if blank
- **Show free shipping progress bar**. Off by default.
- **Free shipping threshold**. Default `5000`. Amount in cents (e.g. 5000 = $50.00). Always entered as cents regardless of your store currency.

### Social media

- **Facebook**. A link.
- **Instagram**. A link.
- **Pinterest**. A link.
- **X / Twitter**. A link.
- **TikTok**. A link.
- **YouTube**. A link.
- **LinkedIn**. A link.
- **Snapchat**. A link.
- **Tumblr**. A link.
- **Vimeo**. A link.
- **Spotify**. A link.
- **Discord**. A link.
- **Reddit**. A link.
- **Twitch**. A link.
- **WhatsApp**. A link.
- **GitHub**. A link.
- **Telegram**. A link.
- **Behance**. A link.

### Social sharing

- **Share image**. Image. Used as a fallback Open Graph and Twitter card image when a page has no other image (homepage, cart, search). Recommended: 1200×630px or larger; landscape works best for social cards.

### Favicon

- **Favicon image**. Image. Will be scaled to 32×32px. Use a square PNG or SVG.

<!-- generated:end -->

## Colour schemes

Colour schemes are defined in theme settings and picked per section, so the page gets its rhythm by alternating them. How many exist is a preset decision. The Whirligig preset ships **four**, and the restraint is deliberate: the whole homepage is stone, ink and one accent.

- **`scheme-1`, stone.** Background `#F1F0ED`, text `#191C1D`, primary button `#8C4A22` on white, secondary button transparent with `#8C4A22` text, input `#FAFAF8`. The default scheme and the ground most of the page sits on.
- **`scheme-2`, panel.** Background `#E6E5E0`, text `#191C1D`, primary button `#2F4A54` on white. A half step up from stone, used to separate one section from its neighbours without changing register.
- **`scheme-3`, steel.** Background `#22292C`, text `#F1F0ED`, primary button `#E0894F` on `#191C1D`. The dark showpiece. The demo homepage uses it exactly once, on the nodal field. Using it twice on one page costs it its effect.
- **`scheme-4`, bronze.** Background `#7A3F1C`, text `#FFFFFF`, primary button `#F1F0ED` on `#7A3F1C`. A saturated accent block, used once on the demo homepage.

Each scheme sets background, optional gradient, text, two button pairs, and inputs. Borders and hairlines are derived by mixing the scheme's text colour into its background, so rules follow your palette without a separate setting.

Two global selectors sit alongside them: **Default colour scheme**, applied wherever a section does not override, and **Modal and overlay colour scheme**, for drawers and popovers. Sale, sold-out, success, warning and error colours are set separately in the same group.

**If you change a background, re-check its text and button pairs.** Every pairing in the shipped preset was measured against WCAG AA before it was written, including the buttons. That property does not survive an eyedropper.

One colour is not in the scheme list and is worth knowing about: the **nodal linework** draws in `#B8892F` unless you pin it with **Linework colour** on the nodal field section. It is a good colour for canvas linework on a dark ground and a bad colour for text at any size, so if you adopt it elsewhere keep it out of labels, links and buttons.

## Typography and the type scale

Three font axes at **Theme settings → Typography**, any Shopify font. The Whirligig preset uses:

- **Heading** - Instrument Serif. A high-contrast display serif that carries a 15px card title and a 212px headline with the same face.
- **Body** - Archivo. A sturdy grotesque with strong tabular figures.
- **Subheading and label** - Inconsolata. A humanist mono carrying specs, prices, note names, frequencies and every readout in the theme. This is the face that makes the measured voice visible, and it is the one to think hardest about before swapping.

Preset values that differ from the raw schema defaults: **heading letter spacing** is `Tight` rather than `Normal`, and **button font** is the subheading face with `ALL CAPS` and `Wide` tracking, so buttons read as controls rather than as headlines.

**Heading size scale stays at 100%.** The large type in this theme is set by individual sections through their own **Heading size** setting, not by inflating every heading in the store. Raising the global scale enlarges card titles and spec labels along with the display headlines, which is not what you want.

> Instrument Serif ships regular and italic only. There is no bold. A component asking for a bold heading will get a synthesized one, badly. Emphasis here comes from size and space; where a heavier voice is genuinely needed, use the subheading face in caps with tracking.

Figures align in a column in several places, including the specification table, the register's price line and every frequency readout. If you swap the subheading face, pick one with tabular figures. Misaligned numbers in a theme built around measurement read as sloppy in a way they would not elsewhere.

## Where the audio settings are

They are not in theme settings, and this catches people. Audio is configured in three places:

| What | Where |
|---|---|
| The sound switch, the pitch ruler, the ruler's source collection, and the transport label | **Header** section, in the **The strike line** group |
| The product page player: heading, recorded date, sound description, and the fallback line for a recording with no file yet | The **Recording** block on the product template |
| The playable note diagram: heading, caption, where the written note list sits, and the diagram style | The **Tone field** block on the product template |

The player on a product card has no settings. It renders when the product has a recording and renders nothing when it does not.

There is no global mute, no volume control and no autoplay setting, because there is nothing to autoplay. If you do not want scroll-driven audio at all, turn **Show the sound switch** off in the header; the click-to-play controls on cards and product pages are unaffected.

## What the register means in practice

Whirligig's visual register is quiet, and that word is narrower than it sounds. It governs **type, layout and compositional discipline**. It does not mean muted, hushed, or minimal.

In practice that means three things when you are customizing:

- **Restraint is in the number of moves, not their size.** The homepage display headline is set at 212px on a 1440px viewport. That is not a contradiction of the register, it is the register: a small number of decisions, each of them committed to. Shrinking the type to be quieter makes the page tamer, not calmer.
- **The palette is warm metal on pale stone, and it runs warm.** The ground is a pale cool stone rather than cream, because cream with a terracotta accent is the default warm-minimal look and reads as unconsidered. If you rebuild the palette, pick a ground and hold it; the theme's structure assumes one dominant ground with accents used sparingly.
- **The chrome gets out of the way so the objects and the sound carry the page.** There is no navigation bar in the demo header; the pitch ruler does that job, with a conventional menu disclosure and a full set of footer links behind it. If you turn the ruler off, check that your header still exposes your navigation.

The failure mode to avoid is reading "quiet" as "fewer": fewer sections, fewer section types, barer settings. The demo homepage runs 18 sections.

## Appearance, motion and cart

Preset values worth knowing, all at **Theme settings**:

- **Page width** 1300px, wider than the 1200 default, because the register needs the room. The range steps by 100.
- **Section spacing** `Relaxed`.
- **Button and input corner radius** both 0. Square corners are a decision here, not an omission. The theme uses radius in exactly three places, all of them drawn from round objects: the tone field's note buttons, the nodal plate rim, and the register's audition button.
- **Icon line weight** 1.5.
- **Motion** is on, with animation style `Weighted`. Motion in this theme has mass; things settle rather than bounce. The setting's own schema default is `Standard`; the preset ships `Weighted` on purpose. Lowering it to `Restrained` removes scroll reveals entirely, which is more of a change than the name suggests. Reduced-motion visitors are respected automatically, and **audio is never affected by a motion setting**: reduced motion suppresses the tone field's ripple, not the note it plays.
- **Cart** is a drawer with a bag icon. The free shipping bar is off; its threshold is entered in cents.
- **Swatch shape** square, matching the theme's corner treatment.

The strike line is not part of the motion system. It is chrome, it keeps working when the animation style is lowered, and it is governed by the header's sound switch rather than by **Theme settings → Motion**.

## Templates

Layout per template is the section list in the theme editor: add, remove, reorder. Whirligig ships 16 template files, covering home, product, collection, collections list, cart, search, blog, article, page, 404, password and gift card, plus four alternate page templates the demo uses for its contact page, its theme-features page and two editorial pages. To create a variant template for one product or page, use **Add template** on the admin's Templates page.

## Custom CSS

Use the theme editor's **Custom CSS** field at the bottom of theme settings for overrides that survive theme updates. Direct edits under **Edit code** are overwritten when the theme updates; keep those for development, not for a live store.

## Next steps

- [Sections reference](../sections/) - every section's settings and blocks.
- [Presets](../presets/) - what the Whirligig preset configures.
- [FAQ](../faq/) - common questions, including the audio ones.
