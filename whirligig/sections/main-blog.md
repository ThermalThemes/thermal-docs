---
title: "Blog posts"
description: "The paginated article grid at /blogs/<handle>, built as editorial cards rather than a stacked list."
---

# Blog posts

The blog listing: a paginated grid of editorial cards, one per article, at
`/blogs/<handle>`. It is the only section that can paginate `blog.articles`, so
if a blog has more than a couple of dozen posts this is the section that has to
render them; `blog-posts` shows a fixed count and stops. The decision it forces
is where the page's `h1` comes from, because `Show heading` prints the blog's own
title and nothing else. Whirligig turns that off and puts a `rich-text` masthead
above it instead, which is what buys the blog a lede.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Show blog title**. On by default.
- **Show date and author**. On by default.
- **Show excerpt**. On by default.
- **Show tags**. Off by default.
- **Columns on desktop**. 1–4, default 3.
- **Articles per page**. 4–24 in steps of 2, default 12.

## Blocks

None. The section renders from its own settings.


<!-- generated:end -->

## Example use cases

**Bench notes, as Whirligig ships it.** Show heading **off**, columns on desktop
`2`, articles per page `12`, meta on, excerpt on, tags on. The `h1` and the lede
come from the `rich-text` masthead directly above ("Working notes from the
bench"), so the section's own heading would be a second, plainer copy of the same
words. Two columns is the right count for four articles: three columns leaves a
hole in the row, four turns an Instrument Serif title into three words per line.

**A blog that is its own page.** Show heading **on**, columns `3`, articles per
page `12`, tags off. This is the configuration to reach for when there is no
masthead section above, on a store where the blog is a utility rather than a
front. It costs the lede: there is no subheading setting here, so the page opens
with a title and then goes straight to cards.

**A long archive.** Articles per page `24`, columns `4`, excerpt **off**, meta
on, tags on. The page becomes a scannable index rather than a reading surface.
Worth naming the trade: at four columns the cards are roughly 290px wide inside
the 1300px container, and the excerpt is the first thing that has to go.

## Notes

**It has no colour scheme and no padding settings.** Vertical rhythm comes from
`--main-blog-pt` and `--main-blog-pb`, which are theme-level custom properties,
not editor settings. The section carries neither `.section` nor
`.color-scheme-N`, which is correct for a `main-*` chrome surface under the paint
model in DESIGN.md, and which also means a merchant cannot tint the blog index.

**Columns on desktop is a ceiling, not a layout.** The grid drops to two columns
below 990px and one below 600px regardless of what is set. A value of `4` only
ever applies above 990px.

**Cards want a featured image on every article.** The media box renders only when
`article.image` exists. There is no placeholder here, which is the better
behaviour, but it means an untagged, unphotographed article sits shorter than its
neighbours in the same row and the grid reads ragged. Either every article in a
blog has a cover or none do.

**Show tags renders every tag, not the first one.** Timbre's articles carry one
tag each (`Method` or `Choosing`), so the row is a single pill. An article
carrying six tags produces six pills above its title and pushes the title below
the fold of the card.

**Excerpt is truncated twice.** It is cut at 150 characters in Liquid and then
clamped to two lines in CSS. Write article excerpts to roughly 140 characters and
you control where the sentence ends; leave it to `article.excerpt` and Shopify
decides.

**Card reading order differs from the design contract.** The card renders tags,
title, date, then excerpt, with the hairline rule above the date, so the rule
lands in the middle of the card. DESIGN.md § Cards (editorial) specifies the date
last, under the excerpt, with the hairline above it. This is a divergence to
settle before submission, not a setting.

**Turning Show heading off leaves the page with no `h1`** unless another section
supplies one. On the Whirligig blog template that is the `rich-text` masthead,
whose `heading` block is explicitly set to `h1`. If you delete that section, put
the heading back here.

**No audio layer.** The blog template supplies it below, with `listening-rail` in
`grid` layout at five columns and then `pitch-axis`. A blog index that ends in
cards ends on the one page in the theme with nothing to hear.
