---
title: "Colour and grounds"
description: "How Plinth's seven colour schemes work, what the Ground setting does, and how to change the accent colour safely."
---

# Colour and grounds

Plinth keeps the interface in two tones, dark and light, and adds one accent colour. Your products supply the rest of the colour.

## The seven schemes

Under **Theme settings > Colors** there are seven colour schemes. In Plinth each one has a job. The table uses the Plinth preset's colours; Lowfold and Ironwell have the same seven jobs with their own colours.

| Scheme | Job | Plinth preset |
| --- | --- | --- |
| Scheme 1 | The main light background | Warm off-white |
| Scheme 2 | The alternate light background | A slightly deeper off-white |
| Scheme 3 | The main dark background | Near-black |
| Scheme 4 | A dark background for product rows | A slightly lighter dark |
| Scheme 5 | A dark background for annotated products and sets | Lighter again |
| Scheme 6 | Pure white | White |
| Scheme 7 | The accent as a whole background | Rust |

Each scheme holds eight colours: **background**, **text**, **button** and **button text**, **secondary button** and **secondary button text**, **accent** and **accent text**.

## Grounds

A "ground" is the background a section sits on. Plinth's own sections do not have a colour scheme setting each. Instead, **Theme settings > Ground and type > Ground** chooses for all of them at once, so the page keeps a deliberate rhythm.

| Section | Split | Dark | Light |
| --- | --- | --- | --- |
| Hero, Film, Numbers, Sign-off | Scheme 3 | Scheme 3 | Scheme 6 |
| Product rail, Tabbed collections, Collection products | Scheme 1 | Scheme 4 | Scheme 6 |
| Collection mosaic, Journal, Press row, Pull quote, Collection banner | Scheme 1 | Scheme 3 | Scheme 6 |
| Annotated product | Scheme 2 | Scheme 5 | Scheme 2 |
| Spec table, Up close | Scheme 2 | Scheme 4 | Scheme 2 |
| Shop the set, Before and after | Scheme 5 | Scheme 5 | Scheme 6 |
| Statement | Scheme 7 | Scheme 7 | Scheme 7 |

The Ticker sits on the quiet background for the ground you chose, or on Scheme 7 when its **Accent ground** option is on. An Image banner in the Overlay arrangement uses the **Overlay color scheme**.

The standard sections (Rich text, Multi-column, Featured collection and the others listed under [Standard sections](../sections/standard)) each have their own **Color scheme** setting. Choose a scheme that matches the sections around them.

### When you change Ground

- With **Dark**, set **Default color scheme** to Scheme 3.
- With **Light**, set **Default color scheme** to Scheme 6, and consider setting **Overlay color scheme** to Scheme 6 too.
- With **Split**, leave the default at Scheme 1.

This keeps the areas between and around sections, and pages such as the cart, on the same background as the rest of the store.

## Changing the accent

The accent appears in small places (index numbers, the active row of a spec, hover on links) and as a full background on Statement sections.

The accent is stored in every scheme, and it is not the same value in each. On a dark background the accent is a lighter shade of the same colour; on a light background, a darker one. This is so accent-coloured text stays readable everywhere.

To change the accent:

1. Choose your accent colour and set it as the **background** of Scheme 7. Set Scheme 7's **text** to white or near-black, whichever is easier to read on it.
2. In Schemes 1, 2 and 6 (the light ones), set **accent** to your colour, or a slightly darker shade of it if your colour is light.
3. In Schemes 3, 4 and 5 (the dark ones), set **accent** to your colour, or a slightly lighter shade of it if your colour is dark.
4. Check the result with a contrast checker. Aim for a contrast ratio of at least 4.5:1 between each scheme's **accent** and its **background**, and between **text** and **background**.

Change every scheme together. One scheme with a different accent looks like a mistake.

## Changing the neutrals

You can change the background and text colours of any scheme. Keep these relationships:

- Schemes 1, 2 and 6 are light with dark text; Schemes 3, 4 and 5 are dark with light text.
- The steps between Schemes 3, 4 and 5 are small. They are meant to read as one dark family.
- Text on its background should have a contrast ratio of at least 4.5:1.

## Sale, success and error colours

**Sale**, **Success** and **Error**, each with a text colour, are set once under **Theme settings > Colors** and are the same on every ground. The Sale badge on the product page uses the Sale colours.
