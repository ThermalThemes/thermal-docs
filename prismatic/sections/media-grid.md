---
title: Media grid
description: Mixed image, video, and text mosaic with per-cell column/row spans, caption chips, and colored text tiles.
---

# Media grid

A mixed-media mosaic. Image, video, and text cells share one grid; each cell sets its own column and row span, so editorial layouts compose without custom code.

## Section settings

- **Columns on desktop** — 2–6, default 4. **Columns on mobile** — 1 or 2.
- **Gap between items** — `none`, `small`, `medium`, `large`.
- **Padding top / bottom**, **Color scheme**.

## Blocks

- **Image** — Image, alt text, optional **Caption** (a label chip pinned to the cell's bottom-left corner), link, **Column span** and **Row span** (1–3 each).
- **Video** — Video, cover image fallback, link, spans.
- **Text** — Subheading, heading with **display size** (`none`/`sm`/`md`), **Cell color scheme** (paints the text cell as a colored tile woven into the grid), rich text, button, spans.

## Example use cases

- **Sticker-sheet density.** A 4-column grid at `gap: small`, mixed product graphics and atmosphere shots with caption chips, one ink text tile carrying a display heading. The demo's mosaic register.
- **Lookbook spread.** 2×-span hero image, supporting 1× cells, one text cell per row for captions.

## Notes

- The cell color scheme on text blocks is what keeps the mosaic graphic rather than gallery-like — paint at least one tile per grid.
- Spans interact with column count; preview at both breakpoints after reordering cells.
