---
title: Image with text
description: Split layout — image one side, content the other — with asymmetric split ratios and a full-bleed width option.
---

# Image with text

A split-layout section with an image on one side and block-composed content on the other. The asymmetric split ratios and edge-to-edge width option make it the building block for alternating poster rows.

## Section settings

- **Image** — The image.
- **Section width** — `contained` (page width) or `edge` (bleeds to the viewport edge, full-bleed).
- **Image position** — `left` or `right`.
- **Split ratio (image : text)** — `50-50`, `60-40`, `67-33`, `70-30`, `75-25`. Mirrors with image position.
- **Image aspect ratio** — `adapt`, `square`, `portrait`, `landscape`.
- **Mobile image position** — `top`, `bottom`, or `hidden` (for atmospheric images that aren't informational).
- **Content vertical alignment** — `top`, `middle`, `bottom`.
- **Padding top / bottom**, **Color scheme**.

## Blocks

Takes [theme blocks](./index#theme-blocks) — typically Subheading, Heading (with display size), Text, Button.

## Example use cases

- **Alternating asymmetric rows.** Stack several instances with `split_ratio: 67-33`, flipping `image_position` row to row, `width: edge`, alternating light and dark schemes. The classic Firehole editorial spine.
- **Column-height media slab.** `width: edge` with a tall portrait image and `content_vertical_alignment: middle` for a full-height brand statement.

## Notes

- `adapt` respects the image's native proportions; the fixed ratios crop. For screen-print graphics, `adapt` preserves the artwork.
- On mobile the split stacks; use `mobile_image_position: hidden` only when the text carries the section alone.
