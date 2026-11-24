---
title: "The Shelf and product imagery"
description: "How Plinth shows products on a line, what image sizes and formats to upload, how to prepare transparent PNG cut-outs, and what happens with ordinary photographs."
---

# The Shelf and product imagery

## What the Shelf is

The Shelf is a single line that runs across a section. Products stand on it. Under the line, a small label gives the product's name, its variant, and its price, the way a label sits under an object in a gallery.

You see the Shelf in the Hero, the Product rail, Tabbed collections, the Collection mosaic, Numbers, the sign-off, on collection and search pages, in product recommendations, and in the product page gallery. A product looks the same wherever it is listed.

Two theme settings control it, under **Theme settings > Shelf**:

- **Shelf rule**: **Hairline** (a 1px line) or **Firm** (a 2px line).
- **Label style**: **Mono capitals**, **Mono sentence case** or **Body font**. The two mono styles use your **Accent font**.

<!-- to confirm: origin/main also has a global "Shelf label" setting (Name and price | Name only | Hidden). The working tree removes it. Document it here only if it ships. -->

## Three ways an image is shown

How a product image appears depends on the file you uploaded.

| Your image | How Plinth shows it |
| --- | --- |
| A **.png with a transparent background** (a cut-out) | The object **stands on the line**. The theme finds the lowest visible part of the object and sets it on the Shelf, with a soft contact shadow. |
| A **.jpg**, or a .png with no transparency | The image is **framed**: shown whole in a 4:5 frame whose bottom edge is the line. |
| Any image, where a section's **Image style** is set to **Photograph** | The image **fills** a 4:5 frame, cropped to fit. |

You do not have to tell the theme which is which. It checks the file. A .jpg can never be a cut-out, because the format has no transparency. A .png that turns out to have a solid background is treated as framed automatically.

The Product rail and Tabbed collections have an **Image style** option (**Cutout**, **Framed** or **Photograph**) so you can choose the treatment for that section. Collection pages, search results and recommendations decide from the file.

## Preparing cut-out images

For the theme's signature look, upload product images as cut-outs.

- **Format**: .png with a transparent background.
- **Trim close to the object.** Leave only a few pixels of empty space around it. Large empty margins make the product look small, because the theme sizes the image, not the object inside it.
- **Keep the base of the object level** and photograph it straight on or at a slight angle, as it would stand on a table. The lowest visible part of the object is what rests on the line.
- **Keep the object's own shadow out of the file,** or keep it very faint. The theme draws a contact shadow under the object.
- **Use the same camera height and angle across a collection** so products look like they belong on the same shelf.
- **Make the first product image the cut-out.** Cards, rails and the hero use the product's first image (or the selected variant's image).

Many background removal tools export exactly this kind of file. Check the edges at full size before you upload: a rough or haloed edge shows clearly against a dark ground.

## Image sizes

Shopify resizes images for each screen, and it never enlarges them. An image that is too small looks soft on large and high-resolution screens. Upload at these sizes or larger.

### Product images

| Use | Recommended minimum |
| --- | --- |
| Product images in general (cards, rails, product page) | 1600px on the longest side; 2000px is better |
| A product used as the Hero object, or the sign-off object | 1600px tall |
| A product standing in the Collection mosaic flood tile | 1600px tall |
| A product standing in Numbers | 920px wide |
| A product standing in the Spec table (Ledger) | 800px wide |
| A product standing in the Collection banner (Flood) | 740px wide |

On the product page, a cut-out is enlarged to fill its space only while the file still has two image pixels for every screen pixel, and a photograph is never shown wider than the file allows at that quality. In practice, a product image **1600px or more on its longest side** stays sharp in the gallery on desktop, and 2000px gives headroom for large screens. Smaller images are not stretched; they are simply shown smaller.

<!-- to confirm: product page gallery is still being finished. Limits read from blocks/_product-gallery.liquid on 2026-11-24: frames at most 42rem tall, cut-outs scaled to at most 2 file px per CSS px, photographs capped at file width / 2.3. Re-check the minimum sizes above when the product page is final. -->

### Section images

| Section | Image | Recommended minimum |
| --- | --- | --- |
| Image banner | Image | 3200 x 1800px |
| Image banner | Mobile image | 1500 x 1900px |
| Film | Poster image | 2950px wide |
| Before and after | First and second image | 2760px wide, both the same size |
| Shop the set | Image | 2400 x 1030px |
| Shop the set | Phone image | 1000 x 1250px (4:5) |
| Annotated product | Image | Portrait, 1800px tall |
| Up close | Each close view | 1600px wide |
| Collection mosaic | Collection tile image | 1200px tall |
| Product rail | Closing card image | 1000px tall |
| Journal | Lead image | 1000px wide |
| In-grid tile (collection page) | Image | 2000px wide |
| Press row | Logo | 320px wide, .png with transparency or .svg |

### File format and weight

- Use **.png** for cut-outs and **.jpg** for photographs.
- You do not need to make separate small versions. Upload one large file and the theme requests the right size for each screen.
- Shopify accepts images up to 5000 x 5000px and 20 MB. There is no benefit in going above about 4000px on the longest side.

## What happens with ordinary photographs

Nothing breaks. A product photographed on a white, grey or lifestyle background is shown in a neat 4:5 frame that sits on the line, and the label hangs beneath it as usual.

What you lose is the standing effect. The Hero, the Collection mosaic, Numbers and the sign-off are designed around an object standing on the line; with a photograph they show a framed picture instead. If most of your catalogue is photographs:

- In the Product rail and Tabbed collections, set **Image style** to **Framed** or **Photograph** so every card is treated the same way.
- Consider making cut-outs for a handful of key products only: the one in your Hero, the one in your sign-off, and your best sellers.
- Keep the background of your photographs consistent. A mix of white and off-white backgrounds is more visible in a frame.

## Variant images and colour swatches

If a product has a colour option with swatches set up in the Shopify admin, the label under the product shows a row of swatch dots. Choosing a dot swaps the product image in place and updates the price. Up to six values are shown; if there are more, a count links to the product page.

For this to look right, give each colour variant its own image, prepared the same way and at the same size as the others.

## Alt text

The theme uses the alt text you set on each image in the Shopify admin. Where a product stands on the Shelf, the product's name is used. Add alt text to section images (banners, close views, scenes) when you upload them.
