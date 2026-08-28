---
title: "Presets"
description: "Whirligig ships one preset. What it configures, what the Timbre demo store is, and how presets work."
---

# Presets

A preset is the pre-configured arrangement of settings, typography, colour and homepage composition a theme loads when a store installs it. It is a starting point, not a finished store.

**Whirligig ships one preset, named Whirligig.** That is the whole list. Themes in this category commonly ship four or five, and shipping one is a deliberate decision rather than an oversight: a preset here means a complete design and a complete set of photography, and one that is finished is worth more than four that are approximations. If that changes, it will change in the [Changelog](../changelog/) rather than quietly.

The preset comes with a complete demo store branded **Timbre**, a fictional workshop in Troy, New York making handpans, tongue drums, kalimbas, bronze bowls, chimes and whirligigs, each one tuned by ear and sold with the sound it makes.

The capability is the [theme](../); the character is the preset.

## The Whirligig preset

A workshop register: warm metal on pale stone, disciplined type, and a lot of measurement on the page. The restraint is in the number of moves rather than their size, which is why the same preset that runs a 15px card title also runs a 212px display headline.

- **Typography** - Instrument Serif for headings, Archivo for body, Inconsolata for subheadings, labels, prices, note names and every readout. Heading size scale stays at 100%; the large type is set per section, not globally. Buttons are set in the subheading face, in caps, with wide tracking, so they read as controls.
- **Colour** - Four schemes. A pale cool stone `#F1F0ED` as the ground, a `#E6E5E0` panel a half step above it, one dark steel `#22292C` showpiece used exactly once per page, and a saturated bronze `#7A3F1C` accent block. The only functional accent that touches a control is bronze `#8C4A22`. Every pairing, buttons included, was measured against WCAG AA before it was written down.
- **Appearance** - 1300px page width, relaxed section spacing, square corners on buttons and inputs. Radius appears in exactly three places, all of them drawn from round objects: the tone field's note buttons, the nodal plate rim, and the audition button on a register card.
- **Motion** - `Weighted`. Things settle rather than bounce; a struck instrument's decay is the reference.
- **Merchandising** - A steep price ladder handled by one system. The demo runs from an $18 whirly tube to a $2,800 handpan on the same card, with the same filters and the same audition control. The primary browse axis is not category, it is scale, with family, voice and material behind it.

### The homepage composition

Eighteen sections, in this order:

| # | Section | What it does |
|---|---|---|
| 1 | Overture | The display headline, cut by the strike line and developing as you scroll |
| 2 | Manifesto pan | A single sentence at 150px, panning horizontally with scroll |
| 3 | The register | The signature. 38 products laid out on a pitch axis, read by the strike line |
| 4 | Nodal field | Circular membrane figures drawn on canvas, on the one dark block of the page |
| 5 | Collection list | Browse by scale |
| 6 | Multi-column | Voice: bright, warm, or dark |
| 7 | Featured collection | Recorded this week |
| 8 | Shop the look | The practitioner kit |
| 9 | Hot spots | An annotated instrument: the ding, the tone field, the gu, the shoulder |
| 10 | Specification table | Materials, and what each one costs you, with a footnote column |
| 11 | Images with text scrolling | Shell, nitriding, tuning, recording, with hard specs per chapter |
| 12 | Media grid | The bench: hands, files, the recording corner |
| 13 | Image with text | Bowls as bronze objects, on the bronze accent scheme |
| 14 | Creator spotlight | The tuner, the pull quote, and the order of work |
| 15 | Process steps | The method |
| 16 | Video | The recording corner |
| 17 | Blog posts | Bench Notes |
| 18 | Newsletter | Keep in touch |

The register is where the audio layer is most visible. The featured collection's cards carry their own audition players, and the overture and the manifesto both respond to the strike line as it passes through them. The rest are well-built versions of sections you already know, which is the point: a theme that only works on its signature page is not a theme.

### What the demo store carries that the theme does not

The preset installs templates and settings. It does not install products, and it cannot install recordings, because those are store data rather than theme code. The demo's 38 recordings, 266 note slices and per-product pitch metafields live on the demo store.

So a fresh install of the preset gives you the composition with your own catalogue in it. The register, the pitch ruler and the tone field will be quiet until your products carry the metafields. [Getting started](../getting-started/) has the exact keys and shapes.

The preset's sample copy and placeholder images are tuned to its register. Replace them with your own.

## How presets work

Presets live in the theme's `config/settings_data.json`. On first install the theme loads the preset; your edits in the editor become the live configuration from then on. The preset stays as the reset reference.

## Resetting to the preset

1. In the Shopify admin, go to **Online Store → Themes**.
2. Click **Actions → Delete** on the Whirligig theme, then reinstall.

> **Caution:** reinstalling discards all customization. To keep your current configuration, copy `config/settings_data.json` via **Actions → Edit code** before deleting.

Deleting the theme does not touch your products or their metafields, so a reinstall does not cost you your recordings.

## Notes

- Presets are not templates. Templates are per-page layout files; a preset is install-time global configuration.
- The preset configures the section library, the templates and the settings. The underlying theme capability is the same either way.
