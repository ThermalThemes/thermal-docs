---
title: "Multirow"
description: "Repeating image-and-text rows, one block per row, sides alternating down the stack; the section to use when a story has three to six steps."
---

# Multirow

Repeating image-and-text rows, one block per row, with the image side alternating
down the stack. Reach for it when a story has three to six steps and does not
warrant three to six `image-with-text` sections: adding a step is one block, and
the alternation recalculates. Reach for `image-with-text` instead when there is
exactly one thing to say, and for `images-with-text-scrolling` when the steps
should be read against a scroll position rather than one after another. The
header here is an eyebrow and a heading only, which is the constraint that
decides most of its uses.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Section eyebrow**. Free text, empty by default.
- **Section heading**. Free text, empty by default.
- **Section heading display size**. `None` · `Display S` · `Display M` · `Display L`, default `None`.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Layout**

- **Image position**. `Left` · `Right` · `Alternating`, default `Alternating`.
- **Image aspect ratio**. `Adapt to image` · `Square (1:1)` · `Portrait (2:3)` · `Landscape (3:2)`, default `Adapt to image`.

## Blocks

- **Row**. 6 settings.

_Available in the theme editor as **Multirow**._

<!-- generated:end -->

## Example use cases

**The three corners of the workshop.** Three `row` blocks (the bench / the tuning
rig / the recording corner), section heading "One floor, three corners" at
`Display M`, image position `Alternating`, image aspect ratio
`Landscape (3:2)`, `scheme-1`, 80px top and bottom. No buttons on any row: these
rows are narrative, and a bronze primary button on each one would turn three
paragraphs into three offers. This sits on `page.the-workshop` between
`creator-spotlight` and a `nodal-field` divider.

**The section demonstrating itself.** Three rows on `page.theme-features`,
section eyebrow set to the literal handle `multirow`, heading "Three rows, one
section, one set of settings" at `Display M`, alternating, landscape,
`scheme-2`, 48/48. Short padding because it is one item in a 25-section catalogue
of sections. This is the only place in the theme where a merchant meets the
section before configuring it.

**A build sequence with one route out.** Four rows, image position `Left` rather
than `Alternating`, landscape, and `button_link` plus `button_label` on the
final row only. Fixing the images to one side gives the eye a single column to
track down the page, which suits a genuine sequence better than alternation does;
alternation is for rows that are peers. The trade-off is that a fixed side wastes
the reversal that makes long stacks readable, so do not do this past five rows.

## Notes

**There is no lede setting.** The header is eyebrow then heading, full stop. On
`page.the-workshop` the two-sentence lede ("A former collar factory on the third
floor...") is sitting in the field labelled **Section eyebrow**, and it currently
renders as body copy only because no `subheading` block happens to render
anywhere on that page. That element carries the class `block-subheading`, and
`blocks/subheading.liquid` styles that class as uppercase `--font-size-xs` with
0.08em tracking. Add a `subheading` block anywhere on the same page and the
workshop lede becomes a tracked all-caps eyebrow at half its intended size. Keep
this field to two or three words, and put a lede in a `rich-text` above the
section if one is needed.

**It hand-writes its own header instead of calling `section-header`.** That
snippet exists precisely so eyebrow, heading and lede have one order and one
implementation everywhere; the sections that bypass it are how three sections
ended up printing their lede above their eyebrow. This one bypasses it, which is
also why it has no lede slot to put a lede in.

**Rows are 50/50 at every desktop width, always centre-aligned.** There is no
column ratio and no vertical alignment setting. A row with two sentences beside a
3:2 image gets a lot of air on the text side; write rows to roughly matched
length or accept the gap. Below 768px the row stacks image-first.

**`Image position: Right` is done with CSS `order`.** The DOM order stays
image-then-text on every row, so a screen reader and any reduced-CSS rendering
always meet the image first regardless of the setting. That is the safe
behaviour, and it means the visual alternation is genuinely decorative.

**A row with no image renders Shopify's `.placeholder-svg`,** which DESIGN.md's
anti-pattern list forbids on any route that gets photographed. Every row needs an
image or this is the wrong section.

**`Adapt to image` is the default and is usually the wrong choice.** It sets no
`aspect-ratio` and requests no crop, so rows built from differently proportioned
sources give differently sized rows. Both Whirligig bindings set
`Landscape (3:2)`, which requests a 1200x800 centre crop and holds the rhythm.

**Alt text comes from the file, not the block.** There is no alt setting on a
`row`, so accessibility here depends on the alt text set on the image in Shopify
Files. Check it there.

**Images use a raw `image_tag`, not `{% render 'responsive-image' %}`,** and emit
no `sizes`. The srcset runs to 3200px while a half-width row is roughly 600px, so
a browser resolving `sizes` to 100vw over-fetches by several times. DESIGN.md
requires every section that renders an image to route through the snippet; this
one does not yet.

**The row button is always the bronze primary.** `btn btn--primary` is hardcoded,
so there is no secondary or link style available per row. Three rows with buttons
give a page three filled bronze controls in a vertical line.

**No audio.** This is a storytelling section. On `page.the-workshop` it is
followed by `nodal-field` and `collection-list`, neither of which plays anything,
so the workshop page as composed has no sound on it at all. Worth deciding on
purpose rather than by omission.
