---
title: "FAQ"
description: "Answers to common questions about Plinth: images, the Shelf, colours, fonts, the cart, filters, languages and more."
---

# FAQ

## Images and the Shelf

### Do I need cut-out images to use Plinth?

No. Plinth works with any product images. Images with a transparent background stand on the Shelf; all other images are shown in a frame that sits on the same line. The theme looks most distinctive with cut-outs, so consider making them for at least your Hero product and best sellers. See [The Shelf and product imagery](../shelf/).

### My product is shown in a frame instead of standing on the line. Why?

The image is a .jpg, or a .png without a transparent background. Only an image with real transparency can stand on the line. Re-export the image as a .png with the background removed and upload it as the product's first image.

### My cut-out looks small on the page. How do I make it bigger?

Trim the empty space around the object in the image file. The theme sizes the whole image, so wide transparent margins shrink the object. Leave only a few pixels around it.

### My product seems to float above the line, or sink below it.

The theme rests the lowest solid part of the object on the line. Very faint shadows are ignored, but a strong shadow, a reflection or stray pixels below the object are treated as its base. Clean the bottom edge of the file and upload it again.

### What size should product images be?

At least 1600px on the longest side; 2000px is better. See the full table in [Image sizes](../shelf/#image-sizes).

### Images look blurry on the product page.

The uploaded file is too small. Shopify never enlarges an image beyond its original size without losing sharpness. Upload a larger original.

### Can customers zoom into product images?

Plinth does not include an image zoom. Upload large, sharp images, and use the [Up close](../sections/signature#up-close) section for detail shots. Zoom can be added with an app.

## Colours and fonts

### How do I change the accent colour?

The accent is set in each of the seven colour schemes, and Scheme 7 uses it as a background. Change them together. Step-by-step instructions are in [Changing the accent](../customizing/colour#changing-the-accent).

### Why can't I choose a colour scheme on the Hero or Product rail?

Plinth's own sections take their colours from one setting, **Theme settings > Ground and type > Ground**, so the page keeps a consistent rhythm of light and dark. The standard sections, such as Rich text and Multi-column, each have their own **Color scheme** option.

### I switched Ground to Dark but parts of the page are still light.

Set **Theme settings > Colors > Default color scheme** to Scheme 3. The default scheme colours the page behind and between sections. Also check any standard sections you added: each has its own **Color scheme**.

### Can I use my own font?

Plinth uses Shopify's font library, chosen under **Theme settings > Typography**. Using a font that is not in the library requires code changes, which are outside theme support.

### My headings look too heavy or too tight after changing the font.

Change **Theme settings > Ground and type > Type pairing** to match the kind of font you chose: Serif for a serif at regular weight, Grotesk for a bold sans, Sans for a semibold sans.

## Sections and layout

### Where is the layout option for a section?

On a block inside it. Click the arrow beside the section to open it, then click the first block (for example **Products** in a Product rail, or **Object** in the Hero). The **Arrangement** or **Composition** option is there.

### How do I change the space between sections?

**Theme settings > Layout > Section spacing**: Compact, Standard or Generous. It applies to every section. Neighbouring sections that share a colour scheme sit closer together automatically.

### The header is not transparent over my first section.

The transparent header works over the **Hero** section only, when it is the first section on the page, on tablet and desktop. Check the Header's **Transparency** setting is not Off.

### How do I add a promotion to the menu?

Add a **Menu panel** block to the Header and type the title of the menu item it belongs to. See [Menu panel](../sections/header-footer#menu-panel).

### My social media links do not appear.

Social links are shown by the **Footer** section's **Brand** block (with **Detail** set to Complete) and on the password page. The Sign-off does not show them. Add a Footer section to the Footer group if you want them on every page.

## Products, collections and cart

### How do I add filters to collection pages?

Filters are set up in Shopify's **Search & Discovery** app, not in the theme. Once added there, they appear automatically. See [Filtering](../sections/collection#filtering).

### How do I show colour swatches?

In the Shopify admin, open a product, edit its colour option, and assign a swatch (a colour or an image) to each value. Swatches then appear on product cards and in the variant picker when its **Style** is Buttons.

### How do I add a "New" badge to a product?

Create a product metafield `custom.badge` (single line text) and type New on the product. Make sure the **Badges** block is on your product template. See [Product data](../product-data/#custom-badge).

### How do I show a spec line under product names?

Create a product metafield `custom.spec` (single line text) and fill it in, for example "Stoneware, 1.2 L". See [Product data](../product-data/#custom-spec).

### Can I use a cart page instead of the drawer?

Yes. Set **Theme settings > Cart > Cart type** to **Page**.

### Does Plinth have quick view or quick add?

There is no quick view, and product cards on collection pages have no add button. In the Hero, Numbers, Annotated product and Shop the set sections, and in the Complementary products block on the product page, customers can add a product to the cart directly. On Shelf labels with colour swatches, customers can change colour in place.

### Does Plinth support subscriptions, pickup and gift cards?

Yes. Subscription options appear in the Buy buttons block when a product has selling plans. The Pickup availability block shows local pickup. Gift card products show a form to send the card to a recipient.

### Does Plinth show product reviews?

The **Rating** block shows the average rating and review count from Shopify's standard review metafields, which review apps fill in. The reviews themselves are shown by your review app's own app block, which you add to the product template.

## Languages, updates and code

### Which languages is the theme translated into?

English, German, Spanish, French and Italian. You can edit any wording, and translate into other languages. See [Translations and languages](../customizing/translations).

### How do I update the theme?

When an update is available, a notice appears on the theme in **Online Store > Themes**. Shopify adds the updated version to your library as a new copy and carries your theme editor settings across. Review the copy, then publish it. Changes made in the code editor are not carried across.

### Can I edit the theme's code?

You can, under **Online Store > Themes > Edit code**. Always duplicate the theme first so you have a copy to return to. Code changes are not covered by theme support, and they are not carried over when the theme updates. For custom work, consider hiring a Shopify Partner.

### Can I use Plinth on more than one store?

A theme licence covers one store. Each store needs its own purchase.

### Something is not listed here.

[Contact support](../contact/). We are glad to help.
