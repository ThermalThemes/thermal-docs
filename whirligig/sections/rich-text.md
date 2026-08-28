---
title: "Rich text"
description: "A block canvas with no content of its own: five widths, three alignments, a colour scheme and padding, and everything else comes from blocks."
---

# Rich text

A canvas for blocks. It holds no text of its own: the five settings control
width, alignment, colour scheme and padding, and every word on screen comes from
a `heading`, `subheading`, `text`, `caption`, `button` or `divider` block placed
inside it. Reach for it when a page needs a statement, a chapter marker or a
masthead and nothing structural. Whirligig uses it six times across three
templates, mostly to do a job no other section can do: give a page a heading at a
level and a display size the page's own `main-*` section does not offer.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Content width**. `Small` · `Medium` · `Large` · `Full width (page)` · `Edge to edge (viewport)`, default `Medium`.
- **Content alignment**. `Left` · `Center` · `Right`, default `Center`.
- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.
- **Color scheme**. Colour scheme.

## Blocks

- **Theme blocks**. Any block in the theme’s shared block library.

_Available in the theme editor as **Rich text**._

<!-- generated:end -->

## Example use cases

**The blog masthead.** Content width `Large`, alignment `Left`, `scheme-1`, 96px
top and 16px bottom, carrying three blocks: a `subheading` ("Bench notes") with
icon shape `none`, a `heading` at size `h1` and display size `Display L`
("Working notes from the bench"), and a `text` block with a two-sentence lede.
It sits above `main-blog`, which has `Show heading` off. This section is
therefore where the blog's `h1` actually lives, and the 16px bottom padding is
what tucks it against the article grid below.

**Chapter markers on the features page.** Four instances (`group-01` through
`group-04`), all identical: width `Large`, `Left`, `scheme-1`, 96px top and 8px
bottom, each carrying a `subheading`, a `heading` at `h2` and `Display M`, a
`text` block, a `caption` listing the section handles in that group
(`pitch-axis · listening-rail · multi-column · nodal-field · featured-product`),
and a `divider`. Four copies of one configuration turn a 25-section page into
four readable chapters, which is the cheapest structure available for a page that
long.

**A full-width statement on search.** Content width `Edge to edge (viewport)`,
`Left`, `scheme-1`, 96/80, with a `heading` at `Display XL` and a `text` block
explaining what the search index does and does not carry, closing on a
`secondary` button to `/collections/by-scale`. `Edge` is the setting that lets a
display-size line run the width of the viewport with only a gutter, and it is the
only Whirligig instance that uses it.

## Notes

**An empty instance renders an empty padded band.** Nothing guards against a
`rich-text` with no blocks: you get 96px of nothing with a colour scheme on it.
It is easy to leave behind after deleting blocks in the editor.

**The heading level is set on the block, not the section.** A `heading` block's
`Heading size` is literally the HTML tag it renders. If this section is supplying
a page's `h1`, set it there, as the blog masthead does. It is worth checking:
`/pages/theme-features` runs four of these sections and every one of their
headings is `h2`, which is why that page currently has no `h1` anywhere on it.

**`Full width (page)` and `Edge to edge (viewport)` are different things.**
`Full` releases the inner max-width but keeps the 1300px `.container`. `Edge`
swaps the container for `.full-bleed` and adds only a `--spacing-lg` gutter, so
content genuinely touches the viewport. Only use `Edge` with a display-size
heading. Body copy at viewport width blows past the 65ch measure and the theme
has no per-block width control to pull it back.

**Blocks stack at a fixed `--spacing-md` gap,** with a larger gap before a
button. There is no per-gap setting. Where more separation is needed, add a
`divider` block, which is what the four features-page groups do to close each
chapter.

**Alignment defaults to `Center`; all six Whirligig instances set `Left`.** A
centred display heading over a centred paragraph is the composition this theme's
anti-pattern list is describing when it says a page should not read as generic.
`Center` has legitimate uses here, but it is not the register.

**One override in this section does not land where it looks like it should.**
`theme-overrides.liquid` colours `.rich-text__inner > p:first-of-type` as
secondary text, alongside the lede elements of a dozen other sections. The `text`
block wraps its rich text in `div.block-text`, so no paragraph of body copy is
ever a direct child of `.rich-text__inner`. The selector reaches the
`subheading` block's paragraph instead. Both colours clear AA, so nothing looks
broken, but the intended lede treatment is not being applied here.

**Two of the blocks it offers cannot work here.** The block slot is `@theme`, so
the picker lists every theme block, including `recording` and `tone-field`. Both
read `closest.product`, and both render nothing at all outside a product context.
Placing one in a `rich-text` on a page, blog or search template gives you an
empty configured block rather than an error. That is the right failure mode, but
it is a confusing five minutes in the editor.

**No audio of its own.** Where this section opens a page that needs sound, the
sound has to come from a section below it. The blog template follows its masthead
with `listening-rail`; the search template puts its statement third, after the
results and `shelf-rack`, and follows it with `collection-list`.
