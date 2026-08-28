---
title: "Blog posts"
description: "A fixed-count feed of two to twelve articles from one blog, for pages that are not the blog itself."
---

# Blog posts

A fixed-count feed of articles from any one blog, for use on pages that are not
the blog: a homepage, a collection, the bottom of an article. It shows two to
twelve posts and does not paginate, so it is a pointer at the blog rather than a
replacement for it. Its header is blocks rather than settings, which means it
renders with no heading at all until you add one. Whirligig runs it three times,
at three different counts, and the article-page instance is the only one that
turns on `Exclude current article`.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Posts to show**. 2–12, default 3.
- **Category source**. `First article tag` · `Article metafield`, default `First article tag`.
- **Category metafield**. Metafield as namespace.key (e.g. custom.category). Falls back to the first tag when blank or empty.
- **Exclude current article (on article pages)**. Off by default. When this section renders on a blog article template, suppress the article currently being viewed so it doesn't appear in its own related-articles feed. No-op outside article context.
- **Blog**
- **"View all" style**. `Link` · `Button`, default `Link`.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Display options**

- **Show featured image**. On by default.
- **Show date**. On by default.
- **Show author**. Off by default.
- **Show excerpt**. On by default.
- **Show category badge on cards**. Off by default. Overlays a category label on each card cover. Renders nothing when the source is empty.
- **Show "View all" link to the blog**. Off by default.
- **Enable carousel on mobile**. On by default.

**Layout**

- **Image aspect ratio**. `Adapt to image` · `Square (1:1)` · `Portrait (2:3)` · `Landscape (3:2)`, default `Landscape (3:2)`.
- **Columns on desktop**. 1–4, default 3.

## Blocks

- **Theme blocks**. Any block in the theme’s shared block library.

_Available in the theme editor as **Blog posts**._

<!-- generated:end -->

## Example use cases

**The homepage journal.** Blog `bench-notes`, posts to show `3`, columns on
desktop `3`, image aspect ratio `Landscape (3:2)`, category badge on with source
`First article tag`, "View all" on as a `Link`, `scheme-1`, 88px top and bottom.
The heading and eyebrow come from a `subheading` block ("Bench notes") and a
`heading` block ("What we are working on") in the header slot, at `Display L`.
This is section 17 of 18 on the homepage: it exists so the page ends on writing
rather than on another product grid.

**Related notes under an article.** Same blog, posts to show `3`, columns `3`,
**Exclude current article on**, category badge on, carousel on mobile on,
`scheme-2`, 80/88. The exclusion is the whole reason this instance is configured
differently from the homepage one: without it a bench note appears in its own
related feed, which is the kind of detail a reviewer notices in five seconds.

**Two-up on a collection page.** Posts to show `2`, columns `2`, category badge
**off**, carousel on mobile **off**, "View all" on, `scheme-2`, 80/80, header is
a single `heading` block ("From the bench"). The badge is off because a
collection page already carries product badges (`SOLD OUT`, `ONE OF ONE`) and a
second badge vocabulary on the same scroll reads as noise. The carousel is off
because two cards do not need one.

## Notes

**No heading unless you add a block.** The header slot renders only when
`section.blocks.size > 0`. An empty block list gives you a grid with no title, no
eyebrow and no lede, which is almost never what is wanted. Add a `subheading` and
a `heading` block together; DESIGN.md's rule that an eyebrow without a heading
renders nothing applies to the sections that compose their own headers, not to
this one, but a lone eyebrow still reads as a mistake.

**Exclude current article has a window.** It reads one extra article and skips
the one being viewed, so it works only when the current article falls within the
first `posts to show + 1` of the blog. Read an older note and it falls outside
that window: the feed renders the newest posts normally and the current article
simply is not among them, which happens to look correct. On a blog of four
articles this never bites. On a blog of forty it means the setting is doing
nothing most of the time, and the reason it still looks right is luck.

**The category badge is a trap with Timbre's tagging.** With source `First
article tag`, three of the four bench notes resolve to `Method`, so three of the
three cards in the article-page feed carry the same badge. A badge that is
identical on every card is decoration. Either tag articles so the first tag
distinguishes them, or point `Category source` at an article metafield with a
real value, or leave the badge off (the collection instance does).

**Show featured image plus an article without one emits a placeholder.** The
fallback is Shopify's `.placeholder-svg`, which DESIGN.md's anti-pattern list
forbids on any route that gets photographed. Confirm every article in the chosen
blog has a cover before turning this on.

**Image aspect ratio drives the CDN crop, not just the box.** `Square`,
`Portrait` and `Landscape` request a centre crop at 800x800, 800x1200 and 800x534
respectively; `Adapt to image` requests no crop and sets no `aspect-ratio`, so a
row of mixed-ratio articles gives mixed card heights. Pick a ratio and hold it.

**The images are not routed through `responsive-image` and emit no `sizes`.**
The srcset runs to 3200px, so a browser resolving `sizes` to 100vw will fetch a
candidate several times wider than a three-up card needs. This costs Lighthouse
Performance, which is a 60/90 Theme Store gate, and it is the same class of
defect DESIGN.md § Brand-register imagery already names.

**Excerpts are cut at 120 characters** and then clamped to two lines. Shorter
than the blog index's 150, so the same article reads differently in the two
places.

**Card reading order differs from the design contract.** The card renders the
date first, then the title, then the excerpt, with the hairline rule above the
date, so the rule lands directly under the image. DESIGN.md § Cards (editorial)
puts the date last. Worth reconciling with `main-blog`, which orders the same
three elements a third way.

**The mobile carousel has no controls.** It is `overflow-x: auto` with scroll
snap and a hidden scrollbar. There are no arrows and no dots, so the only
affordance is the next card peeking in from the right edge. With two posts there
is nothing to peek; turn it off.

**No audio.** This section is editorial only. Where it sits next to the sound
layer, as on the homepage and the article page, keep `listening-rail` or
`featured-collection` nearby so the page does not end on silence.
