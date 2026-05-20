---
title: Slideshow
description: Hero carousel section with full-screen or sized slides. Image, heading, text, and button per slide. Auto-rotate optional.
---

# Slideshow

A hero carousel of slides. Each slide carries an image, heading, subheading, body text, and a button. The section is typically used above-the-fold on the homepage but works on any page or template.

## What it does

Renders a carousel of slides with smooth fade or slide transitions. Supports per-slide content positioning (9-position grid), per-slide color scheme overrides, and configurable autorotate behavior. Mobile aspect ratio is configurable independently of desktop slide height, so editorial composition reads correctly on phones without forcing letterboxing.

## Section settings

- **Slide height** — `adapt`, `small`, `medium`, `large`, `full_screen`. Adapt sizes to the first slide's image aspect; the others use the same height.
- **Slider visual** — `dots`, `numbers`, `bar`, `none`. The pagination affordance shown below the slides.
- **Auto-rotate** — Checkbox. When on, slides advance automatically.
- **Rotate interval** — Range in seconds. Visible only when auto-rotate is on.
- **Transition style** — `fade` (editorial register) or `slide` (energetic register).
- **Mobile aspect ratio** — `portrait`, `square`, `landscape`. Independent of desktop slide height.
- **Padding top / Padding bottom** — Range sliders.
- **Color scheme** — Section-level color scheme. Per-slide overrides supported via the slide block.

## Blocks

The section takes one block type: **Slide**.

### Slide block settings

- **Image** — Desktop slide image.
- **Mobile image** — Optional dedicated mobile image. Falls back to desktop image when absent.
- **Heading** — Slide headline.
- **Subheading** — Smaller heading rendered above the main heading. Often used for category, edition, or drop label.
- **Text** — Body copy.
- **Button label** — Button text. Leave empty to hide the button.
- **Button link** — Button destination.
- **Button style** — `primary`, `secondary`, `link`. Visual register of the button.
- **Content position** — 9-position grid: top-left, top-center, top-right, middle-left, middle-center, middle-right, bottom-left, bottom-center, bottom-right.
- **Text alignment** — `left`, `center`, `right`.
- **Color scheme** — Per-slide override of the section's color scheme.

## Example use cases

- **Drop announcement.** Three slides — the drop's hero photograph, a process or detail shot, a sample piece. Auto-rotate off. `transition_style: fade`. `slide_height: large`. Content positioned `bottom_left` for editorial weight.
- **Single hero.** One slide, no carousel pagination, `slider_visual: none`, used as a full-bleed hero image. Adds atmospheric weight to a homepage that's otherwise a tight catalog grid.
- **Category routing.** Three to four slides, each linked to a different collection. `transition_style: slide`. `slider_visual: dots`. Used as the primary navigation surface on storefronts that route to many collections.

## Notes

- The slideshow section is heavy. Use no more than one per homepage.
- Test the mobile aspect ratio with your actual photography. Editorial slides shot in landscape often want `portrait` on mobile to crop tight and preserve the subject.
- Auto-rotate is best avoided. Visitors who want to advance the carousel will; those who don't shouldn't have to chase the next slide.
