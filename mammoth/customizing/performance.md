---
title: "Performance tips"
description: "How to keep a Mammoth store fast: images, video, apps and what the theme already does for you."
---

# Performance tips

Mammoth is built to load quickly. Most of what slows a store down is added afterwards: oversized media, many apps and autoplaying video. These tips keep it fast.

## What the theme already does

- **Serves each image at the right size.** You upload one large file; each screen downloads only the size it needs, and never a size larger than your original.
- **Loads images as they are needed.** Images further down the page load as the customer scrolls. The first image on the page loads first.
- **Reserves space for images** before they arrive, so the page does not jump.
- **Loads nothing from YouTube or Vimeo until a customer presses Play.**
- **Plays uploaded videos only while they are on screen.**
- **Works without JavaScript** for the essentials: filters, sorting, pagination and the cart page all work as plain links and forms.

## Images

- Follow the sizes in [The Shelf and product imagery](../shelf/#image-sizes). Larger than recommended adds nothing customers can see.
- Use .jpg for photographs. A photograph saved as a .png can be many times heavier.
- Use .png for cut-outs, and trim empty space around the object.
- In an **Image banner**, add a **Mobile image**. A tall crop made for phones is lighter and looks better than a wide image squeezed down.
- In **Shop the set**, add a **Phone image** for the same reason.

## Video

- Keep an uploaded video for the **Film** section short and without sound. It plays muted on a loop.
- Always add a **Poster image**. It shows before the video plays and to customers who have asked their device to reduce motion.
- For a longer film, use a **YouTube or Vimeo link** with a poster image. Nothing loads from the video service until Play is pressed.
- Use one Film section per page.

## The first screen

The first section on a page matters most for how fast the page feels.

- Start the home page with the **Hero**. Its product image is given loading priority.
- Avoid placing a video as the very first thing on the page.
- Keep the Announcement bar to a few short messages.

## Apps

Apps are the most common cause of a slow store.

- Remove apps you no longer use. Some leave code behind after they are uninstalled; ask the app's developer how to remove it fully.
- Prefer apps that add **app blocks**, which you place and remove in the theme editor.
- After installing an app, test your store's speed again.

## Sections and products

- A long home page is fine, because images further down load only as they are reached. Even so, eight to twelve sections is plenty.
- On collection pages, each page holds 24 products. **Pagination** can be **Pages** or a **Load more button**.
- **Custom Liquid** sections and blocks are for small snippets. Large scripts pasted there slow every page they are on.

## Checking your speed

Run Google's PageSpeed Insights on your home page, a collection page and a product page, on mobile. Test a few times: results vary from run to run.
