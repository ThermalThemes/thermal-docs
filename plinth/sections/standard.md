---
title: "Standard sections"
description: "Reference for Plinth's general-purpose sections and the sections of the blog, article, page, collections list, password and page not found pages."
---

# Standard sections

General-purpose sections for building any page. Each has its own **Color scheme** option; choose one that matches the sections around it ([Colour and grounds](../customizing/colour)).

Most begin with a fixed **Section header** block holding a subheading and heading, with an **Alignment** option (Start or Center). Unless noted, each also accepts **Heading**, **Subheading**, **Text**, **Button** and **Image** blocks and app blocks.

## Accordion

Questions and answers, or any content that opens and closes row by row. Use it for an FAQ, shipping and returns, or care instructions.

- **Color scheme**.
- **Width**. **Narrow** (default) or **Page**.
- **Keep one row open at a time**. Off by default.

**Row** blocks: **Heading**, **Text**, and **Open by default**.

## Blog posts

Recent articles from one blog.

- **Blog**.
- **Color scheme**.
- **Density**. **Roomy** (default), **Standard** or **Compact**. Columns, spacing and how many articles are shown.
- **Mobile layout**. **Stack** (default), **Two columns** or **Swipe**.
- **Media ratio**. **Natural**, **Square**, **Portrait**, **Landscape** (default) or **Wide**.
- **Detail**. **Minimal**: image, date and title. **Standard** (default): adds the first tag, the reading time and the excerpt. **Complete**: adds the author.

## Collection list

Tiles that link to collections or to any page.

- **Color scheme**.
- **Layout**. **Grid** (default) or **Carousel**.
- **Density**. **Roomy**: 3 tiles per row on large screens. **Standard** (default): 4. **Compact**: 5.
- **Mobile layout**. **Two columns** (default), **Stack** or **Swipe**.
- **Media ratio**. **Natural**, **Square** (default), **Portrait**, **Landscape** or **Wide**.

**Collection** blocks: **Collection**; **Image** (replaces the collection's own); **Heading** (replaces the collection's title); **Text**; **Tile size**: Standard, Wide, Tall or Feature.

**Link tile** blocks: **Heading**, **Text**, **Link**, **Color scheme** and **Tile size**. Use one for "Shop all".

## Contact form

A form that sends you an email.

- **Color scheme**.
- **Width**. **Narrow** (default) or **Page**.
- **Alignment**. **Start** (default) or **Center**.
- **Detail**. **Minimal**: name, email and message. **Standard** (default): adds a phone number. **Complete**: adds a phone number and a subject.

Messages go to the sender email set in **Settings > Notifications** in your Shopify admin. Accepts app blocks and Custom Liquid blocks only.

## Custom Liquid

A place for an app snippet or your own code.

- **Color scheme**.
- **Liquid code**.

This section takes no blocks.

## Featured collection

Products from one collection in a grid or carousel. For products standing on the Shelf with more layout choice, see [Product rail](./signature#product-rail).

- **Collection**.
- **Color scheme**.
- **Layout**. **Grid** (default) or **Carousel**.
- **Density**. **Roomy**, **Standard** (default) or **Compact**. Columns, spacing and how many products are shown.
- **Mobile layout**. **Two columns** (default), **Stack** or **Swipe**.

## Featured product

One product with its gallery and buy buttons, on any page.

- **Product**.
- **Color scheme**.
- **Width**. **Page** (default) or **Wide**.
- **Media position**. **Start** (default) or **End**.
- **Column split**. **Equal** (default), **Wider media** or **Wider text**.

Blocks inside the product column: Product vendor, Product title, Product price, Variant picker, Quantity selector, Volume pricing, Buy buttons, Pickup availability, Description, Text, Collapsible row, Custom Liquid and app blocks. They work as on the [Product page](./product-page).

## Icon list

A row of short promises, each with an icon: delivery, returns, guarantee.

- **Color scheme**.
- **Density**. **Roomy**: 3 items on desktop. **Standard** (default): 4. **Compact**: 5.
- **Mobile layout**. **Stack** (default) or **Two columns**.
- **Alignment**. **Start** (default) or **Center**.

**Icon item** blocks: **Icon** (Shield, Wrench, Delivery truck, Return arrow, Parcel, Card, Lock, Speech bubble, Leaf, Globe, Mountain or Water drop), **Heading** and **Text**.

## Media grid

A mosaic of image and text tiles.

- **Color scheme**.
- **Width**. **Page**, **Wide** or **Full** (default). Full runs the tiles edge to edge with no gaps. Page and Wide keep the page margins and a gap.

**Tile** blocks: **Image**, **Heading**, **Text**, **Link**, **Color scheme** (colours a tile with no image, and the band behind text over an image), and **Tile size**: Standard (one cell), Wide (two side by side), Tall (two stacked) or Feature (four). On phones a tile with text takes the full row.

## Media with text

An image or video beside text.

- **Color scheme**.
- **Width**. **Page** (default), **Wide** or **Full**. Full runs the image or video to the edge of the screen.
- **Column split**. **Equal**, **Wider media** (default), **Mostly media** or **Wider text**.
- **Media position**. **Start** (default) or **End**.
- **Media ratio**. **Natural**, **Square**, **Portrait** (default), **Landscape** or **Wide**.

**Media** (fixed block): **Image** and **Video**. A video plays muted and on a loop while it is on screen, with a pause button. The image shows until it plays, and for visitors who ask for reduced motion.

## Multi-column

Columns of image or icon, heading and text.

- **Color scheme**.
- **Density**. **Roomy** (default): 3 columns on desktop. **Standard**: 4. **Compact**: 5.
- **Media ratio**. **Natural**, **Square**, **Portrait**, **Landscape** (default) or **Wide**.
- **Mobile layout**. **Stack** (default) or **Two columns**.

**Column** blocks: **Image**, **Icon** (shown when no image is selected), **Heading**, **Text** and **Link**.

## Newsletter

An email signup.

- **Color scheme**.
- **Width**. **Narrow**, **Page** (default) or **Wide**. Narrow stacks the signup under the text. Page and Wide set it beside the text on larger screens.

Subscribers are added to **Customers** in your Shopify admin.

## Process steps

Numbered steps: how something is made, how ordering works.

- **Color scheme**.
- **Density**. **Roomy** (default), **Standard** or **Compact**. Steps are numbered in the order you arrange them.
- **Mobile layout**. **Stack** (default) or **Two columns**.
- **Alignment**. **Start** (default) or **Center**.

**Step** blocks: **Image**, **Media ratio**, **Heading** and **Text**.

## Product recommendations

Products related to the one being viewed. On the product template by default.

- **Show complementary products**. Off: products related to this one, chosen automatically by Shopify. On: the products you pair with it in the Shopify **Search & Discovery** app. The section stays hidden when there is nothing to show.
- **Color scheme**.
- **Density**. **Roomy**: 3 products. **Standard** (default): 4. **Compact**: 5.
- **Mobile layout**. **Two columns** (default), **Stack** or **Swipe**.

## Rich text

A heading, text and a button.

- **Color scheme**.
- **Width**. **Narrow** (default), **Page** or **Wide**.
- **Alignment**. **Start** (default) or **Center**.

## Spotlight

A photograph beside a block of text: a maker, a place, a story.

- **Color scheme**.
- **Width**. **Page** (default) or **Wide**.
- **Media position**. **Start** (default) or **End**.
- **Column split**. **Wider text** (default) or **Equal**.

Its fixed **Image** block holds the photograph.

## Other pages

These sections belong to one kind of page. You will find them when you open that page in the theme editor.

### Article

The blog article page: title, summary, author and date, the article, and comments when the blog has them turned on.

- **Color scheme**.
- **Alignment**. **Start** or **Center** (default). Aligns the header. The article text always starts at the reading edge.

### Article navigation

Links to the previous and next article, under an article.

- **Color scheme**.
- **Detail**. **Minimal**: the direction and title. **Standard**: adds the date. **Complete** (default): adds a thumbnail of the article image.

### Blog

The list of articles in a blog.

- **Color scheme**.
- **Detail**. **Minimal**, **Standard** (default) or **Complete**, as in Blog posts.

### Collections page

The page that lists all your collections.

- **Color scheme**.
- **Density**. **Roomy** (default), **Standard** or **Compact**.
- **Media ratio**. **Square**, **Portrait** (default), **Landscape** or **Wide**.

### Page

A standard page's title and content. The contact page template adds a Contact form under it.

### Page not found

Shown when an address does not exist.

- **Color scheme**.
- **Menu**. Its top-level links show as suggested pages, before the link to the home page.
- **Media position**. **Start** or **End** (default).

### Password page

Shown while your store is password protected.

- **Color scheme**.
- **Column split**. **Equal** (default), **Wider media**, **Mostly media** or **Wider text**.
- **Media position**. **Start** (default) or **End**.
- **Overlay**. **None**, **Gradient** (default) or **Solid**.
- **Detail**. **Minimal**: the password form. **Standard**: adds the email signup. **Complete** (default): adds the social media links. Add an image block to show an image beside the form.

### Gift card

The page a customer sees when they open a gift card they received. It shows the balance and the code, and has no options.
