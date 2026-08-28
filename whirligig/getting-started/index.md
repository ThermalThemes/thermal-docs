---
title: "Install and set up"
description: "Install Whirligig, decide what to do with the demo content, set up the recording and pitch metafields, connect a recording to a product, and turn on the sound switch."
---

# Install and set up

Whirligig installs and publishes like any Shopify theme. The part that is specific to this theme is the audio layer, and it needs four things: a file, a metafield, a block, and the sound switch. This page covers all four, in that order, with the exact metafield names.

## Install from the Theme Store

1. Open the Shopify Theme Store and find Whirligig.
2. Click **Try theme**. Whirligig installs to your store as an unpublished theme.
3. In the Shopify admin, go to **Online Store → Themes**.
4. Find Whirligig in the **Theme library** section.
5. Click **Customize** to open the theme editor.

You can run Whirligig alongside your current published theme. Nothing on your storefront changes until you publish.

## The demo content question

The theme installs with the Whirligig preset: sample copy, placeholder images, and section settings arranged as a working homepage. New stores see it on first install. The demo store it was built against is branded Timbre, a fictional instrument workshop. See [Presets](../presets/) for what the preset configures.

The demo products, their recordings and their metafield values are **not** part of the theme and do not install with it. A theme is templates and settings; the catalogue is store data. So on your store the register section, the pitch ruler and the tone field will render against your own products, and until those products carry the metafields described below, the audio layer has nothing to read.

That is the honest order of work: install, set the metafields up, add recordings, then look at the homepage. Doing it the other way round produces a page that looks broken and is not.

## Add your products

Whirligig expects products with:

- **At least one good image per product.** The default card hover is a zoom in place rather than an image swap, which is the right choice for a catalogue where most items are one of a kind and have a single photograph. If your products carry several images, the gallery's thumbnail layouts have somewhere to go.
- **A written description.** The product page treats the description as content, not as a tab.
- **Collections** that match how buyers actually browse. In the demo the primary axis is not category, it is scale, with family, voice and material as secondary axes.
- **A recording**, if the product makes a sound. This is what the rest of the page is built around.

## Set up the metafields

The audio layer and the pitch axis read product metafields in the `custom` namespace. Create them at **Settings → Custom data → Products → Add definition**. Values render whether or not a definition exists, but Shopify's Search & Discovery app cannot build a filter on an undefined metafield, so define at least `scale` and `voice` if you intend to filter on them.

| Namespace and key | Type | What reads it |
|---|---|---|
| `custom.recording` | JSON | Every audio player, and the tone field |
| `custom.pitch` | JSON | The register section and the strike line |
| `custom.tuning` | Single line text | The eyebrow on register cards and product cards, and the strike-line readout |
| `custom.scale` | Single line text | Product card eyebrow, by-scale collections, storefront filter |
| `custom.voice` | Single line text | Product card eyebrow, storefront filter |
| `custom.specs` | JSON | The specification table in metafield mode |
| `custom.one_of_one` | True or false | The one-of-one chip on a register card |

Two notes on that table:

- `custom.scale` is a word that only makes sense for instruments genuinely sold by scale name. Do not publish a scale name on a product that has no scale. `custom.tuning` is the universal descriptor and is what most surfaces print; `custom.scale` is the narrower one that exists so the by-scale collections and the storefront facet keep working.
- The one-of-one chip also renders from a product **tag** of `one-of-one`, so you can skip the boolean metafield if tagging is easier for you.

### `custom.recording`

A JSON object. Only `url` is required.

```json
{
  "url": "https://cdn.shopify.com/s/files/1/0000/0000/files/recording-0412.mp3",
  "player_label": "D Kurd handpan, nine notes plus ding",
  "description": "Warm and slow to speak. Long sustain on the low D; the upper A rings about four seconds.",
  "recorded_on": "2026-08-14",
  "duration": 29,
  "start": 0,
  "end": null,
  "sprite": [
    { "label": "D3", "role": "ding", "x": 50,   "y": 50,   "start": 0,    "end": 2.6,  "freq": 146.83 },
    { "label": "A3", "role": "note", "x": 29.9, "y": 20.2, "start": 2.95, "end": 5.55, "freq": 220.00 }
  ]
}
```

| Field | Meaning |
|---|---|
| `url` | The audio file. `audio` and `src` are accepted as aliases. |
| `player_label` | What the control is about to play, phrased as a thing you can hear. It becomes the button's accessible name, as "Play {label}". `label` is accepted as an alias. |
| `description` | The sound described in words. It renders as **visible copy**, not as hidden text, because it is the page's text equivalent for the audio. Leave it blank and the theme composes a factual line from the product's own tuning, voice and family rather than shipping a play button with nothing written beside it. |
| `recorded_on` | Renders in a `<time>` element. `date` is accepted as an alias. |
| `duration` | Runtime in seconds. Optional. |
| `start` and `end` | Slice bounds for the whole-recording player. Leave `end` null or absent to play to the end of the file. |
| `sprite` | The note slices the tone field reads. Omit it and the recording still plays as one take; the tone-field block simply renders nothing. |

Each sprite entry needs `label`, `start` and `end`; an entry with no `label` is skipped. `x` and `y` are percentage offsets from the top left of the plate. `role` of `ding` draws that note larger and names it as the ding. `freq` is optional and appears in the written note list when present.

A `file_reference` metafield also works, because a file drop answers `.url`. It carries no date, no description and no sprite, so you get a plain player and no tone field.

### `custom.pitch`

A JSON object. This is what puts a product on the register's horizontal axis.

```json
{
  "low": 146.83,
  "high": 440.00,
  "ref": 146.83,
  "refLabel": "D3",
  "x": 17.24,
  "xLow": 17.24,
  "xHigh": 82.76
}
```

`ref` is the product's own note, the one that sounds when the strike line crosses it. `refLabel` is how that note is written. `x` is the position on the axis, 0 at the left edge and 100 at the right.

`x` is precomputed rather than derived at render time because **Liquid has no logarithm**. The axis runs A2 to D5, so:

```
x = (log2(ref) - log2(110)) / (log2(587.33) - log2(110)) * 100
```

`xLow` and `xHigh` use the same formula on `low` and `high`.

Values below 0 or above 100 are allowed and are not clamped. An object that sits outside A2 to D5 visibly runs off the edge of the section. That is deliberate: the axis is not padded to make the data fit.

An object with a range rather than a single pitch adds `"span": true`, and renders as a bar drawn between `xLow` and `xHigh` instead of as a point.

Products with no pitch at all, such as bags, stands and mallets, simply carry no `custom.pitch` and appear nowhere on the register. Say so in the section's footnote setting rather than inventing a frequency for them.

## Connect a recording to a product

1. **Prepare the file.** MP3 is the safe choice. The demo's recordings are mono MP3 at 96 kbps, 7 to 34 seconds long, and 83 KB to 400 KB each; 38 recordings come to 8.3 MB in total. The file must be served with an audio MIME type and must support HTTP range requests, because a tone-field tap is a seek. Shopify's CDN does both.
2. **Upload it.** **Content → Files → Upload files**. Copy the file's URL.
   > Shopify Files does not overwrite. Uploading a file with a name that already exists appends a UUID and leaves the old file resolving, so a corrected recording needs a **new filename** or the store will keep serving the old one. Put a version marker in the name.
3. **Write the metafield.** Open the product, scroll to the metafields section, and paste the JSON above into `custom.recording` with your own URL.
4. **Check the product page.** The **Recording** block on the product template renders the player. If it renders nothing, the URL did not resolve; the theme deliberately shows no control rather than a dead one.

The player then appears wherever that product does: on its card in any grid, in the audition strip, and on its product page.

### Where the players live

| Surface | Where it is configured |
|---|---|
| Product page | The **Recording** block inside the product information column. Settings: heading, show the recorded date, show the description, and the fallback line for a product whose recording exists but has no file yet. |
| Product page note diagram | The **Tone field** block, directly below Recording. Settings: heading, caption, where the written note list sits, and the diagram style. |
| Product cards | Rendered automatically inside the card's image area when the product has a recording. Nothing to switch on. |
| Audition strip | The **Listening rail** section, for hand-picked products. |

On the demo's product template the order inside the information column is vendor, title, price, **Recording**, **Tone field**, variant picker, stock counter, quantity, buy buttons, pickup, description. The recording sits above the variant picker on purpose: the sound is the reason to choose a variant, not a detail found after choosing one.

## Turn on the sound switch

The switch lives in the header, not in theme settings.

1. In the theme editor, open the **Header** section.
2. Find the **The strike line** group.
3. **Show the sound switch** is on by default. It puts a `SOUND OFF` toggle in the masthead.
4. **Show the pitch ruler** is on by default. It draws one tick per product at its true pitch across the header, with a pointer readout in hertz.
5. **Ruler source collection** picks which collection the ruler draws from. Leave it empty to use all products.
6. **Transport label** prefixes the name of whatever is currently sounding in the header readout. The readout only appears while something is playing.

What the switch does, precisely: nothing sounds until a visitor clicks it. It is off on a visitor's first load, and the click doubles as the gesture browsers require before they will play audio at all, which is why the theme can guarantee no autoplay rather than hope for it. The choice is remembered for the browsing session, so on a later page the switch shows as on, but even then nothing sounds until the visitor does something on that page: a click, a key press, or a touch. Loading a page never produces a sound on its own. Turning the switch off stops whatever is playing, and pressing Escape stops playback from anywhere on the page without touching the switch.

If you would rather not offer scroll-driven audio at all, turn **Show the sound switch** off. The players on cards and product pages keep working; they are clicked, not scrolled.

## Put the register on the homepage

The register is the section named **The register**. It reads `custom.pitch` from every product in the collection you point it at.

1. Add or open the section on the home template.
2. **Collection** picks the source. Use a collection with a **manual** sort order, arranged low pitch to high, so the cards enter the DOM in the same order the eye reads them.
3. **Maximum instruments** caps the count, 6 to 50, default 40. The demo's source collection holds 38.
4. **Footnote** is where you say what is not on the axis. The demo uses it to name the six bench items that make no sound.

Products in that collection with no `custom.pitch` are skipped rather than stacked at zero.

## Set up collection filters

The filter UI renders whatever filters your store publishes. Out of the box that is Availability and Price. To filter by scale, voice, family or material:

1. Install Shopify's free **Search & Discovery** app.
2. Open **Apps → Search & Discovery → Filters**.
3. Click **Add filter** and choose the metafields and options you want. `custom.scale` and `custom.voice` need metafield **definitions** to appear here, which is why the table above asks for them.

No theme configuration is needed; the collection page picks new filters up automatically.

## Configure the rest

Before publishing, walk through:

- **Header** - logo, desktop and mobile layout, navigation menu, and the strike-line group above.
- **Footer** - navigation columns, brand block, newsletter. A link list column with no links is a defect worth checking for.
- **Announcement bar** - optional.
- **The overture** - the homepage display headline. It is set one word per line by markup, so it cannot break mid-word.
- **Featured collection** - point it at the products you actually want auditioned first.

## First publish

1. In the theme editor, click **Save**.
2. Return to **Online Store → Themes**.
3. Click **Actions → Publish** on Whirligig.
4. Confirm.

## Next steps

- [Sections reference](../sections/) - every section's settings and blocks.
- [Customizing](../customizing/) - colour schemes, type scale, and the audio settings in one place.
- [FAQ](../faq/) - autoplay, formats, missing recordings, accessibility, browser support.
