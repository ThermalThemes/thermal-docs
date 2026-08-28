---
title: "Specification table"
description: "A measured-facts table built from authored blocks or from each product's custom.specs metafield, with an optional third column carrying the trade-off in words."
---

# Specification table

A grouped table of measurements, with a third column that says what each measurement costs you. It reads from one of two sources: blocks you author here, which is right for a table that is the same on every page it appears on, or `custom.specs` on the product, which is right for a per-product spec sheet that has to be different for a bronze bowl and a nitrided handpan. The third column is the reason this section exists rather than a rich-text block full of numbers: a figure with no trade-off attached is a claim, and this theme's voice is built on naming the cost out loud. Reach for it wherever a buyer is comparing, and skip it wherever you have fewer than about five rows, because four rows in a striped table look like a mistake.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Spec source**. `Blocks (author below)` · `Product metafield (custom.specs)`, default `Blocks (author below)`. Blocks: author rows below. Product metafield: render per-product from the canonical custom.specs JSON metafield (product-facts) — a group-ordered array of { group, label, value, unit, footnote, note }. Falls back to blocks when the metafield is empty. Table layout only.
- **Column count**. `2 (label + value)` · `3 (label + value + footnote)`, default `2 (label + value)`. 3 columns adds a footnote column.
- **Subheading**. Free text, empty by default.
- **Eyebrow**. Small uppercase label above the heading. Use it to group sections into themes.
- **Heading**. Free text, empty by default.
- **Heading display size**. `None — standard heading` · `Display S` · `Display M` · `Display L` · `Display XL`, default `None — standard heading`. Render the heading at the oversized display scale (type-as-structure) instead of the standard heading size.
- **Striped rows**. Off by default.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Display options**

- **Display style**. `Table` · `Accordion`, default `Table`.
- **Show group headings**. On by default.

## Blocks

- **Spec group**. 1 setting.
- **Spec row**. 5 settings.

_Available in the theme editor as **Specification table**._

<!-- generated:end -->

## Example use cases

**Per-product spec sheet (product page).** `data_source: metafield`, `display_style: table`, `column_count: 3`, `show_group_headings: true`, `striped_rows: true`, `heading_display_size: lg`, `scheme-2`, padding 88 / 88, eyebrow "Specification" over "Everything we measured". Rows come from `custom.specs`, which `scripts/commit-catalog.mjs` builds per tuning model, so a handpan prints Scale, Ding, Notes, Voice while a bowl prints Fundamental and measured partials. Nothing is authored in the theme editor; changing a value means changing the roster and re-committing the catalogue.

**Materials trade-off table (homepage).** `data_source: blocks`, `column_count: 3`, `striped_rows: true`, `heading_display_size: lg`, `scheme-1`, padding 56 / 56. Three `spec_group` blocks named Nitrided steel, Stainless and Bronze, each with three `spec_row` blocks reading Speaks, Holds tune and Care. Every footnote is populated: "It will rust if you ignore it. That is the price of the attack." Nine rows and three groups is about the shortest composition where the striping and the group bands read as structure.

**The listing contract (collection page).** `data_source: blocks`, `column_count: 3`, `heading_display_size: md`, padding 80 / 80, groups reading "What is tuned", "What is recorded" and "What ships, and what it costs later". Six rows that are true of every object on the shelf, from an $18 whirly tube to a $2,800 handpan, which is the claim the collection page has to carry.

## Notes

**`data_source: metafield` overrides the display style.** The metafield branch is checked first and always renders a table, so choosing Accordion alongside the metafield source silently gives you a table anyway. Accordion is block-driven only, and Display style offers exactly two values.

**Three columns means an empty cell wherever there is no footnote.** With `column_count: 3` the footnote `<td>` is emitted on every row whether the row has a footnote or not. Authored blocks are under your control. `custom.specs` is not: as generated today only a handful of rows carry a footnote (bronze partials, whirligig pitch, the recorded date, the one-of-one edition), so on a handpan page most of the third column is blank while the section's own lede promises a trade-off on every row. Either populate `footnote` for every row in `scripts/commit-catalog.mjs` or set `column_count: 2` on that instance.

**Striping counts group headings.** The rule is `.spec-table__row:nth-child(even)`, and the group heading rows are siblings in the same `tbody`, so each group heading flips the banding parity for the rows beneath it. With `striped_rows: true` and `show_group_headings: true`, expect the first row of one group to be shaded and the first row of the next not to be. Turn striping off if the inconsistency reads as a bug rather than as texture.

**Blocks take richtext, the metafield takes strings.** `label`, `value` and `note` on a `spec_row` are richtext and arrive wrapped in `<p>`; `unit` and `footnote` are plain text and are escaped. In the metafield branch `label` and `value` are printed unescaped, so `custom.specs` is trusted content and should be written by a script, not pasted in from anywhere else.

**Group headings are a `<th>` plus a spacer cell, not one wide cell.** That is deliberate: axe fails a table whose first row is a single cell spanning every column. If you restyle the group band, keep the two-cell shape.

**Column widths are fixed percentages per column count**: 40/60 at two columns, 24/30/46 at three, retuned to 30/30/40 below 750px so the footnote prose keeps its room. There is no per-instance control. A long label and a long footnote in the same row will both wrap.

**The header is the shared one.** Eyebrow, then heading, then lede, and an eyebrow with no heading still renders. That was not always true of this section, and it is why the order is not a setting.

**No audio, so mind where it sits.** A specification table with no recording anywhere on the page is one of this theme's named anti-patterns. On the product page it belongs below the recording and the tone field, not above them: the page answers what it sounds like first, then what it measures.
