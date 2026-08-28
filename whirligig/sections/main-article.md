---
title: "Article"
description: "The article page itself: hero image, header, tags, body copy in a 46rem reading column, share links, and an optional previous/next pair."
---

# Article

The article body: the featured image, the header (eyebrow, tags, title, byline
and date), `article.content` in a reading column, a share row, and an optional
previous/next pair. It is the only section that can render an article's text, so
it is present on every article template whether or not you touch its settings.
The one judgment call is the previous/next pair, because the theme also ships
`blog-article-nav`, which does the same job with thumbnails and dates. Turn one
of the two off.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Title display size**. `None — standard heading` · `Display S` · `Display M`, default `None — standard heading`. Render the article title at the oversized display scale.
- **Header alignment**. `Left` · `Center`, default `Left`.

**Display options**

- **Show featured image**. On by default.
- **Show eyebrow (blog // first tag)**. Off by default.
- **Show date and author**. On by default.
- **Show tags**. Off by default.
- **Show share links**. On by default.
- **Show previous / next navigation**. On by default.

## Blocks

None. The section renders from its own settings.


<!-- generated:end -->

## Example use cases

**A bench note, as Whirligig ships it.** Title display size `Display M`, header
alignment `Left`, featured image on, eyebrow on, meta on, tags on, share on, and
previous/next **off**. The eyebrow composes the blog title with the article's
first tag, so a Timbre bench note reads `BENCH NOTES // METHOD` above a title
that scales from 3.2rem to 6.5rem. Previous/next is off here because
`blog-article-nav` sits further down the same template and renders the same two
links with thumbnails and dates.

**A centred essay with no series chrome.** Header alignment `Center`, title
display size `Display M`, featured image on, eyebrow and tags off, meta and
share on. Reach for this where articles are one-offs rather than a tagged run:
with no tag to append, the eyebrow degrades to the blog name on its own, which
is a label doing no work.

**The short article template.** Title display size `None`, eyebrow off, tags
off, share off, previous/next **on**, and drop `blog-article-nav` and
`blog-posts` from the template entirely. Three sections become one. The trade-off
is real: the built-in pair is a direction word plus a title, with no image and no
date, and it sits inside the 46rem reading column rather than spanning the page.

## Notes

**It has no colour scheme and no padding settings.** The section paints on the
body ground and takes `--section-spacing` for its vertical rhythm. Per-template
spacing, the title clamp and the reading column are all tuned in
`theme-overrides.liquid` under `.lq-section--main`, not in the editor. A merchant
cannot tint an article page from the theme editor.

**The reading column is 46rem and the body measure is 65ch.** Wide content
written into `article.content`, a specification table in particular, will exceed
it. Give such content its own `overflow-x: auto` wrapper in the article HTML;
nothing in the section does it for you.

**The hero is cropped.** It is capped at `max-height: 68vh` with
`object-fit: cover`, so a portrait featured image loses its top and bottom. Shoot
or crop article covers landscape. The hero also uses a raw `image_tag` rather
than `{% render 'responsive-image' %}` and emits no `sizes`, so the browser
resolves `sizes` to 100vw and picks close to the 3200px candidate. Acceptable for
a full-bleed hero; it would not be acceptable at any narrower width.

**Show eyebrow only earns its place if articles are tagged distinctly.** Three
of Timbre's four bench notes carry the tag `Method`, so three of four eyebrows
read identically. One repeated label above four different articles is worse than
no label.

**Show tags has a contrast defect.** Tag links render at `--color-text` at 60%
alpha, which measures 4.31:1 on the stone ground at 0.6rem. AA wants 4.5:1 for
text that size. The border and the type treatment are corrected in
`theme-overrides.liquid`; the colour is not.

**The section renders no audio, and that is deliberate.** On the Whirligig
article template the sound layer arrives below it, in `listening-rail`, so a note
about nitriding is followed by the instruments the note is about. A merchant who
deletes that rail leaves an article page with nothing to hear, on a theme whose
whole claim is that you can hear things.

**Verify the hero on the live theme before submission.**
`qa/open-findings-article-imagery.md` records article pages on the demo store
serving zero images while the blog index served four, with the local template
correct and the live template diverged. The setting is not the problem; the
deployed template was.
