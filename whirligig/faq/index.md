---
title: "Frequently asked questions"
description: "Common questions about Whirligig, including autoplay, audio file formats, products without recordings, the nodal figures, accessibility and browser support."
---

# Frequently asked questions

## Does audio ever autoplay?

No. Never, under any circumstance.

The sound switch in the header is off on a visitor's first load, and its click is also the gesture browsers require before they will play audio at all. That is what makes the guarantee structural rather than a promise: before the visitor asks for sound, the page does not have permission to make any.

The choice is remembered for the browsing session, so on a later page in the same session the switch shows as on. Even then, nothing sounds until the visitor actually does something on that page: a click, a key press, or a touch. Loading a page never produces a sound on its own.

Beyond the switch, every player is a button that has to be pressed. No `autoplay` attribute is written anywhere in the theme, and nothing is even fetched until a control is used, because the shared audio element is created with `preload="none"`.

## What happens with the sound off?

Everything except the sound. This is the case the theme is built for, not an afterthought.

- The strike line still runs, and its readout still names whatever it is crossing. Position is not motion and not sound.
- The register still lays products out by pitch, and every card prints its own frequency as text.
- The tone field still draws, and the written note list beside it names every note and its frequency.
- Every player still shows the date the recording was made and a written description of what it sounds like, as visible copy rather than hidden text. If a merchant leaves the description blank, the theme composes a factual line from the product's own tuning, voice and family rather than shipping a play button with nothing written beside it.

A visitor who never turns the sound on, cannot hear, or is on a train with no headphones gets a complete page. That is the test the audio layer was built against.

Turning the switch off mid-visit stops whatever is playing. Pressing **Escape** stops playback from anywhere on the page without touching the switch.

## What file format and size should recordings be?

**MP3 is the safe choice.** The theme plays whatever the visitor's browser can play through a standard audio element, so it imposes no format list of its own, but MP3 is the format every current browser supports.

Two hard requirements, both of which Shopify's own CDN satisfies:

- The file must be served with an **audio MIME type**.
- The server must support **HTTP range requests**. A tone-field tap is a seek into the middle of the file, and without ranges it cannot work at all.

For size, the demo is a useful benchmark. Its 38 recordings are mono MP3 at 96 kbps, 7 to 34 seconds long, and 83 KB to 400 KB each. The whole set is 8.3 MB. Mono at a modest bitrate is the right trade here: these are audition clips, not masters, and a grid of forty products should not cost a visitor forty megabytes. Nothing is downloaded until a control is pressed, so the page weight is unaffected either way.

One upload gotcha worth knowing: **Shopify Files does not overwrite.** Uploading a file with a name that already exists appends a UUID and leaves the original resolving, so a corrected recording needs a new filename or the store keeps serving the old one. Put a version marker in the name.

## What if a product has no recording?

It renders as an ordinary product. Nothing breaks and nothing shows an empty shell.

Specifically: the product card renders with no audition button, the **Recording** block on the product page renders nothing at all, and the **Tone field** block renders nothing unless the recording carries a sprite. A control that cannot make a sound is worse than no control, so the theme's rule throughout is to render nothing rather than something dead.

Two narrower cases:

- A recording exists but has no playable file yet. The Recording block's **fallback text** setting covers this, for a product that is genuinely still being made. Set it blank to render nothing instead.
- A product has a recording but no `custom.pitch`. It plays everywhere it appears, and it simply does not appear on the register, because it has no position on the axis. Say so in the register's footnote setting rather than inventing a frequency for it.

## Why isn't my product showing on the register?

Three things to check, in this order:

1. **Is it in the source collection?** The register section reads one collection, set on the section.
2. **Does it carry `custom.pitch`?** Products without it are skipped rather than stacked at position zero.
3. **Is its `x` inside 0 to 100?** Values outside that range are allowed and are not clamped, so an object below A2 or above D5 genuinely runs off the edge of the section. That is the design, but if you did not intend it, check the arithmetic. [Getting started](../getting-started/#custom-pitch) has the formula.

If two cards overlap horizontally, that is not a bug either. Two products close in pitch land close together, and the card the strike line is on is drawn above its neighbours. The section's lede setting is the right place to explain that to a visitor.

## Is the nodal figure real data from the instrument on the page?

**No.** It is ornament, and the theme labels it as ornament wherever it appears.

A nodal figure, the pattern sand forms on a vibrating plate, is a visual language derived from how resonance behaves. The figures Whirligig draws are circular membrane modes, superimposed three at a time and seeded so that different scales draw different figures. They are computed from a mode recipe, not measured from a microphone, and presenting one as a measurement of the instrument shown would be a false claim about a product.

Every call site carries an ornament caption saying so. If you customize the nodal field section, keep that caption honest. It costs nothing and it is the difference between a decorative figure and a fabricated specification.

The figures are drawn on a canvas, so they add no image weight, and they render once and stop under reduced motion.

## How accessible is the audio layer?

This is the part of the theme with the most accessibility surface, so it was built first rather than added as polish.

**Every player:**

- A real `<button>`, never a styled div, with `aria-pressed` reflecting state.
- The accessible name says what it is about to play, as "Play D Kurd handpan, nine notes plus ding", and the visible word "Play" is a prefix of that name, which is what WCAG 2.5.3 Label in Name requires. The name changes with the state, so a button reading "Stop" never announces "Play".
- A polite live region announces started, stopped and failed.
- The recorded date and the written sound description are visible copy, not screen-reader-only text.
- Focus is a visible 2px outline at 3px offset. `outline: none` appears nowhere.
- Only one recording plays at a time, store-wide, because there is exactly one audio element in the document.

**The tone field:**

- One real button per note, each with an accessible name naming the note and its role.
- `role="toolbar"` with a roving tabindex, so the whole diagram is one tab stop rather than nine. Arrow keys move between notes, Home and End jump to the ends, Enter or Space plays. The keyboard contract is announced twice: through `aria-keyshortcuts` for assistive technology, and as a visible sentence for the sighted keyboard user, who is otherwise told nothing.
- A polite live readout names the note that just sounded.
- A visible written list of the layout sits beside or below the diagram. There is no setting that removes it; the position setting chooses where it sits, never whether it is seen.
- With scripting disabled, the diagram and its controls are hidden and a native audio control plays the whole recording instead.

**The strike line and the ruler:**

- The strike line apparatus is `aria-hidden`. Every value it prints is already on the card it is sitting on, in text, in the reading order; announcing each card again as the page scrolls would make the catalogue unusable with a screen reader.
- The pitch ruler is an enhancement. Every destination it exposes is also in a conventional menu disclosure and in the footer as text links, so nothing is reachable only by the ruler.

**Motion and sound are independent.** `prefers-reduced-motion` collapses transitions, drops the type-develop effect and the pan, and stops the nodal figures animating. It never touches audio, because a preference about animation is not a preference about sound.

The palette was measured against WCAG AA before any CSS was written, buttons included. If you change a scheme's background, re-check its text and button pairs.

## Which browsers does Whirligig support?

Current versions of Chrome, Edge, Firefox and Safari, on desktop and mobile. Concretely, the theme's CSS is compiled for **Safari 15.4, Chrome 110 and Firefox 121** and newer, and the JavaScript bundle targets **Safari 15**.

Older browsers, and any visitor with JavaScript disabled, get the page without the scripted layer: the scroll-driven strike line and the tone field's interactivity do not run, and each recording falls back to a native audio control. The catalogue, the product pages and checkout are unaffected.

## How do I change the homepage headline?

The headline is the **Overture** section on the home template. Open it in the theme editor and edit the **Headline** setting. Each word is rendered as its own block-level element rather than left to wrap, so the line breaks land between words and a display face cannot break one in half.

Its size is set by the section, not by the global heading scale. Raising **Heading size scale** in theme settings would enlarge card titles and spec labels along with it.

## How do I put the playable note diagram on my product pages?

Add the **Tone field** block to the product template's information column, below the **Recording** block. It reads the `sprite` array inside `custom.recording` and renders nothing when there is no sprite, so adding the block to a template that serves both sounding and silent products is safe.

If it renders nothing on a product you expected it to work on, the sprite is the thing to check: each entry needs a `label`, a `start` and an `end`, and an entry with no label is skipped.

## Why don't my collection pages show scale or voice filters?

Out of the box the filter UI shows Availability and Price. Everything else comes from Shopify's free **Search & Discovery** app: install it, open **Apps → Search & Discovery → Filters**, and add the filters you want. Metafield-based filters need a metafield **definition** to be available there, which is why [Getting started](../getting-started/#set-up-the-metafields) asks you to define `custom.scale` and `custom.voice` rather than just writing values.

The theme renders whatever filters the store publishes; no theme configuration is needed.

## How do I add specs to my product pages?

Two ways, both through the **Specification table** section: author rows as blocks in the editor for a one-off table, or set the data source to the product metafield and store each product's specs in a `custom.specs` JSON metafield, so one section instance renders per-product specs across the catalogue. The metafield format is on the section's own page in the [Sections reference](../sections/).

The table has a footnote column. Use it. A theme built around measurement is more credible when it also says what a material costs you, not only what it gives you.

## How do I add custom CSS?

Use the theme editor's **Custom CSS** field at the bottom of theme settings. Overrides there survive theme updates. Direct edits under **Edit code** are overwritten when the theme updates, so keep those for development rather than for a live store.

## Does Whirligig support multiple languages and currencies?

Yes to both. Add and translate languages under **Settings → Languages**; the theme renders translated strings automatically, including every audio player label. For currencies and markets, configure **Settings → Markets**, then enable the country and region selector in the header or footer.

## Is Whirligig compatible with Shopify apps?

Yes. Whirligig supports Online Store 2.0 app blocks, so apps that ship theme blocks can be added to the product page's information column and to sections that accept app blocks. Apps that require manual code edits should follow their own documentation.

## How do I upgrade to the latest version?

When a new version is available, the theme card in **Online Store → Themes** shows an update prompt. Shopify creates a copy at the new version with your customizations carried over where possible. Review it in the editor, then publish. Version details are in the [Changelog](../changelog/).

Your products and metafields are store data, so a theme update does not touch your recordings.

## Where do I report bugs?

Through the [contact form](https://thermalthemes.com/contact/). Include your store URL, theme version (**Theme settings → Theme info**), a screenshot or recording, your browser and operating system, and the steps to reproduce. For an audio problem, include the product's `custom.recording` value and the file URL, because most audio reports resolve to a URL that does not serve. We respond within one business day, Monday through Friday. More on what to include: [Contact](../contact/).
