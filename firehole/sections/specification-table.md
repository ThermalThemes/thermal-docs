---
title: Specification table
description: Structured spec rows from blocks or a product metafield, as a table or accordion, with groups, units, and footnotes.
---

# Specification table

A structured table for technical specifications — dimensions, materials, construction. Rows come from blocks you author in the editor, or directly from a product metafield for per-product specs.

## Section settings

- **Subheading / Heading** — Section header, with **Heading display size** (`none`–`xl`).
- **Spec source** — `blocks` (author rows below) or `metafield` (render per-product from the product's `custom.specs` JSON metafield; falls back to blocks when the metafield is empty; table layout only).
- **Display style** — `table` or `accordion`.
- **Column count** — 2 (label + value) or 3 (adds a footnote column).
- **Show group headings** — Default on. **Striped rows** — Default off.
- **Padding top / bottom**, **Color scheme**.

## Blocks

- **Spec group** — A group label ("Dimensions", "Construction", "Care").
- **Spec row** — Label, value, optional unit, optional footnote, and an optional **observational note** rendered in italics below the value — for working-context narration rather than data.

## The metafield format

In `metafield` mode the section reads a JSON metafield at namespace `custom`, key `specs` — an ordered array of row objects:

```json
[
  { "group": "Dimensions", "label": "Width", "value": "8.25", "unit": "in" },
  { "group": "Construction", "label": "Plies", "value": "7", "footnote": "Maple" },
  { "group": "Care", "label": "Wax", "value": "As needed",
    "note": "The surface tells you when it needs it." }
]
```

`group` starts a new group heading when it changes; `unit`, `footnote`, and `note` are optional per row. Define the metafield once (**Settings → Custom data → Products**, type JSON), and one section instance on the product template renders every product's own specs.

## Notes

- Metafield mode is the right call for catalogs where every product has specs — author the data on the product, not in the theme editor.
- Block mode suits one-off comparison tables on landing pages.
