---
title: "Whirligig"
description: "A Shopify theme for shops where the product makes a sound. Products carry their own recordings, the catalogue lays out on a pitch axis, and product pages carry a playable note diagram."
---

# Whirligig

Whirligig is Thermal Themes' theme for shops where the product makes a sound. One theme, one preset, a complete demo store. It treats a recording the way every other theme treats a photograph: as a product attribute that belongs on the card, on the product page, and in the browse experience, rather than as a link that opens somewhere else.

Named for Whirligig Geyser in Yellowstone's Norris Geyser Basin, which keeps the studio's naming on one map alongside [Prismatic](/prismatic/) and [Firehole](/firehole/). It is also the demo catalogue's cheapest and most cheerful department.

Whirligig ships with the **Whirligig** preset and a complete demo store branded **Timbre**, a fictional workshop in Troy, New York making handpans, tongue drums, kalimbas, bronze bowls, chimes and whirligigs. The preset is a starting point you replace with your own content. See [Presets](./presets/) for what it configures.

## What makes it different

Three things, and they work together.

**Every product can carry its own recording.** A JSON metafield holds the audio URL, the date it was recorded, and a written description of the sound. One shared player renders that recording on the product card, in the collection grid, in the audition strip and on the product page. A product with no recording renders no player, not an empty control.

**The catalogue lays out on a pitch axis.** The register section positions each product horizontally by its fundamental frequency, so the shape of the layout is the shape of the catalogue. A fixed line runs across the viewport at 58% of its height; as a product crosses that line it names itself, its frequency appears, and, once the visitor has turned sound on, it sounds. Scrolling the shop plays it.

**Product pages carry a playable note diagram.** The tone field draws an instrument's note layout as positioned buttons. Tapping a note plays that note's slice of that product's own recording, sliced out of a single file by start and end offsets rather than by uploading one file per note.

**Sound never starts on its own.** The sound switch in the header is off on a visitor's first load, and its click is the gesture browsers require before they will play audio at all, so the page has no permission to make a sound before it is asked. The choice is remembered for the session; even then, loading a page produces no sound until the visitor clicks, types or touches. Every player is a real button, keyboard operable, named with what it is about to play, and accompanied by visible text. The page reads completely with the sound off.

## Who it's for

Shops whose product is a sound and whose buying question a photograph cannot answer. Instrument builders, bell and bowl workshops, drum and percussion shops, synth and pedal builders, string and reed makers, and audio gear sellers of every kind.

It suits small catalogues with high consideration and wide price variance. The demo runs from an $18 whirly tube to a $2,800 handpan on the same card, under the same filters, with the same audition control, because a merchandising system that only works at one price point is not finished.

It also works as an ordinary catalogue theme. Every section outside the audio layer is a general purpose section, and a product with no recording simply renders without one.

## What ships

- **39 drop-in sections** plus configurable header, footer, announcement bar, cart drawer and search overlay, 58 section files in total, built on the thermal-base substrate
- **16 templates**, covering home, product, collection, collections list, cart, search, blog, article, page, 404, password and gift card, plus four alternate page templates the demo uses
- **A shared audio player** with three variants, one implementation across the product card, the audition strip and the product page, so there is one keyboard contract and one accessible-name rule rather than four
- **The register**, a pitch-axis section that positions products by frequency, draws octave gridlines, and renders objects with a range rather than a single pitch as a span
- **The strike line**, a fixed rule with a readout that names whatever it is currently crossing and, when sound is on, sounds it
- **The pitch ruler** in the header, drawing one tick per product at its true pitch, with a pointer readout in hertz
- **The tone field**, a playable note diagram driven by sprite offsets in the product's recording metafield
- **Nodal figures**, circular membrane patterns drawn on a canvas at no imagery cost, labelled as ornament rather than as measurement
- **Specification tables** rendering from editor blocks or from a `custom.specs` JSON metafield, with a footnote column
- **Collection filtering** with sidebar, top bar or drawer layouts, removable chips and load-more pagination
- **Product gallery** with six desktop layouts and four mobile layouts, thumbnail rail, variant image swap, and contained zoom
- **Four colour schemes** designed to alternate per section, plus a display type scale most sections can opt into
- **Online Store 2.0** throughout: JSON templates, section groups, theme blocks, app blocks

## The trade-offs, said out loud

- **A recording is work.** The audio layer is only as good as the files behind it. A catalogue of 40 products needs 40 recordings, and the theme cannot invent them. Products without one lose the audition control and drop off the pitch axis; everything else about them still works.
- **The pitch axis needs data.** A product's horizontal position is computed from a frequency you supply in a metafield. Liquid has no logarithm, so the axis coordinate is precomputed rather than derived at render time. [Getting started](./getting-started/) covers the shape and the formula.
- **The register is deliberately not a grid.** Products collide horizontally when they are close in pitch, and objects outside the axis range run off the edges of the section. That is the data being visible, not a layout defect, and it is why the section carries a footnote explaining itself.
- **One preset.** Whirligig ships one, and [Presets](./presets/) says so plainly rather than implying more.

## Where to start

- [Install and set up](./getting-started/) - install, demo content, the metafields, and connecting a recording to a product.
- [Sections reference](./sections/) - every section, every setting, every block.
- [Customizing](./customizing/) - colour schemes, type scale, audio settings, and what the register means in practice.
- [Presets](./presets/) - the Whirligig preset and the Timbre demo store.
- [FAQ](./faq/) - autoplay, file formats, missing recordings, accessibility, browser support.
- [Changelog](./changelog/) - version history.
- [Contact](./contact/) - get help.
