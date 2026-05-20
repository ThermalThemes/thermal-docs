---
title: Custom HTML
description: Liquid or HTML block for one-off composition needs. Embed third-party widgets, custom layouts, or theme-extension content.
---

# Custom HTML

A Liquid or HTML block for one-off composition needs. Used to embed third-party widgets (Instagram feeds, sizing tools, reviews), custom layouts that don't fit any other section, or theme-extension content.

## What it does

Renders the contents of a Liquid or HTML field as a section. Full Liquid object access; full HTML rendering. Wrapped in a section container with optional padding and color scheme.

## Section settings

Documentation in progress. Key settings: HTML content (textarea), padding, color scheme.

## Blocks

None. The section's content lives in a single textarea.

## Example use cases

- **Embedded Instagram feed** — Paste a third-party Instagram embed.
- **Custom sizing calculator** — Embed a Tally or Typeform sizing widget.
- **Reviews widget** — Paste a reviews app's embed code where the app block doesn't fit.

## Notes

Custom HTML is the escape hatch. Use it sparingly; every Custom HTML block is a place where the theme stops being the design system and starts being case-by-case markup. Prefer first-class sections, theme app blocks, or Shopify's built-in surfaces when they cover the use case.
