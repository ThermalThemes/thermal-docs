---
title: Slideshow
description: Hero carousel with display-scale headings, overlay scrims, arrows and counter, dual buttons, and per-slide color schemes.
---

# Slideshow

A hero carousel of slides. Each slide carries an image, heading, subheading, text, and up to two buttons. Typically used above the fold on the homepage, where the heading display-size setting turns it into a full-bleed type poster.

## What it does

Renders a carousel with fade or slide transitions, configurable pagination (dots, numbers, bar), optional previous/next arrows with a live counter, and an optional darkening overlay so type stays legible over photography. Each slide positions its content on a 9-position grid and can override the section's color scheme.

## Section settings

- **Slide height** — `adapt`, `small`, `medium`, `large`, `full_screen`. Default medium; the demo hero runs at 90vh-class heights via `large`/`full_screen`.
- **Slide indicator** — `dots`, `numbers`, `bar`, `none`.
- **Show previous/next arrows** — Default off.
- **Show slide counter** — A live numeric index (01 / 03) next to the arrows. Default off.
- **Auto-rotate slides** — Default off. **Rotation interval** 3–9s when on.
- **Transition style** — `fade` or `slide`.
- **Mobile aspect ratio** — `portrait`, `square`, `landscape`. Independent of desktop height.
- **Image overlay** — `none`, `scrim_bottom`, `scrim_full`, with **Overlay opacity** 0–90%. Darkens the image so heading and body text stay legible.
- **Padding top / bottom** — Default 0; heroes usually want to touch the header.
- **Color scheme** — Section-level scheme; per-slide overrides below.

## Blocks

One block type: **Slide** (limit 8).

- **Desktop image** and optional **Mobile image** (under 768px).
- **Subheading** — Renders in the monospace label register above the heading. Category, run number, date.
- **Heading** with **Heading display size** (`none`/`sm`/`md`/`lg`/`xl`) — scales past the default heading cap into poster type — and a **Heading highlight effect** (`italic`, `underline`, `accent`, `outline`) applied to a chosen **Highlight phrase** within the heading.
- **Description** text.
- **Button label / link / style** plus an optional **Secondary button** (label, link, style including `ghost`) rendered alongside.
- **Content position** — 9-position grid.
- **Text alignment** — left, center, right.
- **Slide color scheme** — Per-slide override.

## Example use cases

- **Type poster hero.** One slide, atmospheric photograph, `scrim_bottom` overlay, heading at display `xl` with an `outline` highlight on one word, content `bottom_left`. The theme's signature opening move.
- **Run announcement.** Two or three slides, arrows and counter on, auto-rotate off — the counter reads like an index, and visitors page through deliberately.
- **Category routing.** Slides linked to each discipline's collection, `transition_style: slide`, dots.

## Notes

- The slideshow is heavy. Use no more than one per page.
- Set the overlay before reaching for a darker photograph — the scrim is tuned to hold AA contrast for white type.
- Auto-rotate is best avoided; visitors who want the next slide will ask for it.
