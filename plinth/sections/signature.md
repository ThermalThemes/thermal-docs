---
title: "Plinth sections"
description: "Reference for Plinth's own sections: Hero, Statement, Product rail, Collection mosaic, Numbers, Annotated product, Up close, Tabbed collections, Journal, Image banner, Before and after, Film, Shop the set, Spec table, Press row, Pull quote and Ticker."
---

# Plinth sections

These sections are designed around the Shelf. Each takes its colours from the **Ground** setting ([Colour and grounds](../customizing/colour)) and its spacing from **Section spacing**.

Unless noted, every section here also accepts **Heading**, **Subheading**, **Text**, **Button** and **Image** blocks and app blocks.

## Hero

The opening of a page. A large headline of two or three lines, with a product standing on the Shelf beside or beneath it, and a short aside.

The Hero has three fixed blocks, and you can add up to four more blocks to it.

**Headline**

- **Headline**. One line per row, two or three short lines. The last line stands on the Shelf, so end on the word the object should stand beside. On the home page this is the page's main heading.

**Object**

- **Composition**.
  - **Split**: one tall object rising through the headline.
  - **Wide**: one wide object under the headline, rising into its last line.
  - **Line-up**: objects in a row under the headline, never touching it.
- **Line-up position**. **Spread**, **Start**, **Center** or **End**. Line-up only: where the objects stand on the Shelf.
- **Product**. Named, priced and added to the cart from the label under the object.
- **Image**. A cut-out on a transparent background, trimmed close to the object. Leave empty to use the product's first image. 1600px tall or more is recommended.
- **Mobile image**. Optional. A version for phones; for a wide object, turn it toward the camera so it reads at phone width.

**Aside**

- **Style**. **Caption**: one quiet line and a text link. **Spec**: a ruled card, one row per line of text written as `Label: value`. **Copy**: a short paragraph and a button.
- **Eyebrow**. A short label.
- **Text**. Caption: one short line. Spec: one row per line. Copy: a sentence or two.
- **Button label** and **Button link**.

**Line-up object** (a block you add, for the Line-up composition)

- **Product**, **Image**, **Mobile image** as above.
- **Show on phones**. On by default. Turn off for objects that crowd a phone screen.

**Tips**

- The object is placed so that no letter of the headline is hidden. If your wording cannot allow that, the object stands beside the headline instead. Shorter last lines give the object more room.
- With the header's **Transparency** on, the header sits clear over the Hero. The Hero must be the first section on the page for this.
- Use a tall object for Split and a wide, low object for Wide.

## Statement

Two or three large lines on the accent colour. Use it once on a page to say what you make or stand for.

- **Height**. **Small** (default) or **Large**.

**Label row** (fixed block)

- **Start label**. A short label above the statement, such as what you make or where.
- **End label**. Optional, at the far end of the same row.

**Statement** (fixed block)

- **Text**. One line per row, two or three short lines. The last line stands on the Shelf.

**Tips**

- Statements are always on the accent scheme (Scheme 7).
- Do not place two Statements next to each other. One accent-coloured section in view at a time reads best.

## Product rail

Products from one collection, each standing on the Shelf with its label.

**Products** (fixed block)

- **Collection**. The products shown, in the collection's order.
- **Arrangement**.
  - **Lead**: the first product large, the next five on two shelves beside it.
  - **Drag**: one row of up to twelve that scrolls sideways.
  - **Grid**: eight products in rows, each row on its own shelf.
- **Image style**. **Cutout**: a .png on a transparent background stands on the line; a .jpg is framed instead. **Framed**: the image in a 4:5 frame whose edge is the line. **Photograph**: the image fills the frame.
- **Link label**. The words of the link to the collection. Default "View all".
- **Closing card image**. Optional. A cut-out of an object or a small group, shown on the closing card. Use one not already on the rail. 1000px tall or more is recommended.

**Tips**

- The collection's sort order in the Shopify admin decides which product leads. Set the collection to manual sorting to choose.
- Where a product has colour swatches, customers can change colour on the rail without leaving the page.

## Collection mosaic

Up to five collections as tiles: one large flood tile on the accent colour and up to four collection tiles.

- **Index**. A list of collections. Editorial arrangement only: the collections listed down the left, numbered, with their product counts. List the flood tile's collection first, then the tiles'.

**Flood tile** (fixed block)

- **Arrangement**.
  - **Editorial**: an index of collections on the left, the flood tile as a wide band, the tiles in one row beneath it.
  - **Flood**: the flood tile large, the tiles two by two beside it.
  - **Skyline**: one row on one Shelf, the flood tile two columns wide among the tiles.
- **Collection**.
- **Image**. A cut-out stands on the Shelf; a photograph fills the tile. Leave empty to use the product's image, or else the collection's. 1600px tall or more is recommended.
- **Product**. Optional. Named and priced on the label under the line.
- **Heading**. Leave empty to use the collection's title. One short word reads best.

**Collection tile** (up to four)

- **Collection**.
- **Image**. Leave empty to use the collection's image. 1200px tall or more is recommended.
- **Heading**. Leave empty to use the collection's title.

## Numbers

Large figures, with a product standing beside them. Good for dimensions, temperatures, years, counts.

**Object** (fixed block)

- **Arrangement**.
  - **Figures**: the figures stacked with a note beside each, the object standing at the right.
  - **Meter**: one row of figures over tick scales, the object closing the row.
  - **Spec**: a ruled spec sheet with the object standing at its left.
- **Product**. Named, priced and added to the cart from the label under the object. Its colour swatches swap the object in place.
- **Image**. A cut-out stands on the Shelf. Leave empty to use the product's image. 920px wide or more is recommended.

**Figure** (blocks you add)

- **Value**. A number such as 1,280 or a short word. Four or five characters read best.
- **Unit**. Optional, set small after the value, such as °C, mm or coats.
- **Note**. A few words on what the figure measures.
- **Meter fill**. **None**, or 10% to 100% in steps of ten. Meter arrangement only: how far the accent bar runs along the scale.

## Annotated product

One product with a large photograph, numbered pins on its details, the detail rows, and a buy row.

- **Product**. On a product page, leave empty to use the page's product.
- **Media position**. **Start** or **End** (default).

**Photograph** (fixed block)

- **Composition**.
  - **Split**: the photograph beside the copy, the rows and buy row in one column.
  - **Bleed**: the photograph runs off the page edge with the copy on a card over it.
  - **Diagram**: the photograph centred, the rows either side like an exploded drawing.
- **Image**. Leave empty to use the product's first image. A portrait photograph at least 1800px tall keeps it sharp.

**Detail rows** (fixed block)

The rows come from the product's `custom.spec_rows` metafield: up to eight rows, each with a label, a value and the position of its pin. See [Product data](../product-data/#custom-spec-rows). Without the metafield, the section shows the product as a plain feature with no pins.

**Buy row** (fixed block)

One bar of choices for each product option, then Add to cart. A product whose only option is a colour with swatches chooses it from the swatches on the label instead.

## Up close

Close-up images of materials, textures and making details, each with a short caption.

**Close views** (fixed block)

- **Arrangement**.
  - **Triptych**: the views side by side on one line, captions under it.
  - **Macro**: the first view large, running off the page edge, with every caption beside it as a note.
  - **Strip**: one edge-to-edge band of wide crops, captions in a row under it.

On phones the Triptych and the Strip swipe.

**Close view** (blocks inside it)

- **Image**. The crop follows the image's focal point. 1600px wide or more is recommended.
- **Label**. A short label, as in "01 — Glaze".
- **Text**. A sentence on what the view shows.

**Tip**: set the focal point on each image (click the image in the editor, then **Edit**) so the crop keeps the detail you care about.

## Tabbed collections

Up to four collections. Each shows its first four products on a shelf.

**Collections** (fixed block)

- **Arrangement**.
  - **Tabs**: the collection names in a row above the shelf; choosing one changes the products.
  - **Index**: the names numbered, in a column beside the shelf on desktop.
  - **Stacked**: every collection shown, one shelf row each.

On phones each row swipes. Only the first four collections are used.

**Collection** (blocks inside it)

- **Collection**. Its first four products are shown, in the collection's order.
- **Name**. Optional. Shown in place of the collection's title; one or two words.
- **Image style**. **Cutout**, **Framed** or **Photograph**, as in the Product rail.

## Journal

Articles from your blog, led by one sentence.

- **Blog**. The link to the journal goes to this blog. With no entries added, the articles after the newest are listed.

**Lead** (fixed block)

- **Composition**.
  - **Feature**: the sentence as a large headline, with the entries listed beside it.
  - **Index**: a numbered list of the entries, one ruled row each.
  - **Strip**: one sentence on the Shelf and a link.
- **Article**. Its title becomes the sentence and links to it. Leave empty to use the blog's newest article.
- **Label**. A short label above.
- **Sentence**. Shown when no article or blog is chosen.
- **Text**. One line under the sentence.
- **Image**. Feature only. Shown in a 4:5 frame. Leave empty to use the article's image. 1000px wide or more is recommended.

**Entry** (blocks you add)

- **Article**. The row takes its title, link, first tag and reading time.
- **Heading**, **Topic** and **Link**. Used when no article is chosen, for example to link to a page instead.

## Image banner

A large image with text.

- **Height**. **Small**, **Medium** (default) or **Large**.
- **Media position**. **Start** or **End** (default). In Split, the side the image is on. In Overlay and Caption, the text takes the other side.

**Image** (fixed block)

- **Arrangement**.
  - **Overlay**: the text is on the image, using the overlay colour scheme.
  - **Caption**: the whole image, with the text in a row under it.
  - **Split**: the image beside a panel in the accent colour.
- **Image**. 3200 x 1800px or larger is recommended. Set the focal point to choose what stays in view when it is cropped.
- **Mobile image**. Optional. Replaces the image on phones. 1500 x 1900px or larger is recommended.

Add **Heading**, **Text** and **Button** blocks for the words.

**Tip**: for Overlay, choose an image with a calm area where the text will sit.

## Before and after

Two images of the same thing, compared.

**Images** (fixed block)

- **Arrangement**. **Wipe**: the second image is drawn over the first and a handle moves the edge between them. **Side by side**: the two images next to each other. A wipe is shown side by side when a visitor's browser asks for reduced data.
- **First image** and **Second image**. Photograph the same object from the same position for both and export them at the same size, so the object does not jump at the edge. 2,760px wide or more keeps a full-width wipe sharp.
- **First label** and **Second label**. Such as Before and After.

**Tip**: it does not have to be before and after. Two finishes, two sizes, or empty and full work as well. Name the labels to match.

## Film

A video, uploaded to Shopify or linked from YouTube or Vimeo.

- **Media position**. **Start** (default) or **End**. Split arrangement only.

**Video** (fixed block)

- **Arrangement**.
  - **Framed**: a 16:9 frame at page width, the caption on the line under it.
  - **Bleed**: the frame runs edge to edge, with the text after it.
  - **Split**: the video beside the heading and text.
- **Video**. An uploaded video. Plays muted and on a loop while it is on screen. Visitors who ask for reduced motion press Play instead. Used before the link below when both are set.
- **YouTube or Vimeo link**. Nothing loads from the video service until a visitor presses Play, so add a poster image.
- **Poster image**. Shown before the video plays. Leave empty to use an uploaded video's first frame. 2,950px wide or more is recommended.
- **Caption**. Says what the video shows.
- **Captions file**. Optional, for an uploaded video: the link to a WebVTT (.vtt) file from **Content > Files**. For YouTube or Vimeo, add captions on that service.

## Shop the set

One photograph with several products in it. Each product has a numbered pin and is listed with its price and an add button.

- **Media position**. **Start** (default) or **End**.

**Scene** (fixed block)

- **Image**. One photograph with every item in it, shown whole. A wide photograph of 2400 x 1030px or more stays sharp.
- **Phone image**. Optional. A 4:5 photograph of the same set (1000 x 1250px or more), shown whole on a phone. Without it the wide photograph pans sideways in a 4:5 window.
- **Arrangement**.
  - **Beside**: the list next to the photograph, as tall as it.
  - **Stacked**: the items in one row under the photograph.
  - **Scene**: the photograph alone; each pin opens its item on it.
- **Phone crop**. **Left**, **Center** or **Right**. Used when there is no phone image: the part of the wide photograph shown first.

On a phone every arrangement is the photograph with the list under it.

**Item** (blocks inside it, up to five)

- **Product**. The item's first available variant is listed and added.
- **Pin from left** and **Pin from top**. Numbers from 0 to 100: the pin's position as a percentage of the photograph. Leave empty to spread the pins evenly.
- **Pin on the phone image**. Two numbers, from the left and from the top of the phone image, such as `40, 62`.

**Tip**: to find a pin position, estimate it first (50, 50 is the centre), then nudge the numbers while watching the preview.

## Spec table

A table of facts about a product: materials, dimensions, care, origin.

- **Source**. **Rows** (default): shows the rows you add. **Product**: shows the product's `custom.spec_rows` metafield, and uses your rows for a product without it. With neither, the section stays hidden.
- **Product**. The product whose facts are shown. On a product page, leave empty to use the page's product.

**Sheet** (fixed block)

- **Arrangement**. **Table**: one ruled table. **Columns**: the rows in two tables side by side, stacked on phones. **Ledger**: the product standing on the line, the table beside it.
- **Image**. Ledger only. Leave empty to use the product's first image. A cut-out at least 800px wide stands on the line; other images are framed.

**Row** (blocks inside it)

- **Name**, as in Material.
- **Value**. Keep it short: a measure, a material, a place.

**Tip**: add a Spec table to the product template with **Source** set to **Product**. Each product then shows its own facts, and products without the metafield show your default rows or nothing. A sheet shows at most 24 rows.

## Press row

A thin row of publications that have featured you.

**Publications** (fixed block)

- **Arrangement**. **Logos**: each logo in the text colour, 32px tall. **Names** (default): the publication names. **Cited**: the name over a short line from the piece.
- **Label**. The short label before the list. Leave blank for "As seen in", translated for each language.

**Publication** (blocks inside it; three to eight read best)

- **Name**.
- **Logo**. For the Logos arrangement. Upload a .png with a transparent background or an .svg, 320px wide or more. The logo's shape is filled with the text colour, so its own colours are not shown. A .jpg has no transparency, so the name is shown instead.
- **Line**. A short quote from the piece, for the Cited arrangement. Under ten words.
- **Link**.

## Pull quote

One to three quotes from customers, makers or critics.

**Quotes** (fixed block)

- **Arrangement**. **Single**: one quote set large on a full-width line, with its product at the end of the line. **Pair**: two quotes side by side, stacked on phones. **Ledger**: short quotes as ruled rows with the source at the far edge.

**Quote** (blocks inside it)

- **Quote**. A sentence or two. Add your own quotation marks if you want them.
- **Source**. The person quoted.
- **Role or publication**. Shown after the source.
- **Product**. Optional. The product stands at the end of the quote's line and its name links to it. Ledger shows the name only.

## Ticker

A thin strip of short notes: materials, places, shipping notes.

- **Autoplay**. **Off**: the notes as a still, centred row. **Slow** (default) or **Fast**: the line moves, with a Pause button. Visitors who ask for reduced motion always get the still row.
- **Accent ground**. Off: the strip is on the page's quiet background. On: the accent colour fills it.

**Note** (blocks you add; two to six read best)

- **Text**. A few words.
- **Link**. Optional.
