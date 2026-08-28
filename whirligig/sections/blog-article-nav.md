---
title: "Article navigation"
description: "Previous and next article as two bordered plates carrying a thumbnail, direction, title and date."
---

# Article navigation

Previous and next within the same blog, drawn as two bordered plates that each
carry a thumbnail, a direction label with a chevron, the article title and its
date. It renders nothing at all when neither neighbour exists, so it is safe to
leave on a blog with one article. Reach for it instead of `main-article`'s own
`Show previous/next`, which prints the same two links as bare text inside the
article's reading column; running both gives a page two navigation rows, which is
the one thing to check before shipping an article template.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Show article images**. On by default.
- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.
- **Color scheme**. Colour scheme.

## Blocks

None. The section renders from its own settings.

_Available in the theme editor as **Article navigation**._

<!-- generated:end -->

## Example use cases

**Whirligig's article template.** Show article images on, `scheme-1`, 72px top
and bottom, placed fifth of seven: after the `nodal-field` divider and before the
`blog-posts` related feed. `main-article`'s own `Show previous/next` is set to
`false` on the same template so the two do not both render. The order is
deliberate: the reader finishes the note, meets the ornament divider, gets the
two adjacent notes, then gets three more.

**Text-only, on a blog with no covers.** Show article images **off**, padding
40/40. The plates collapse to direction, title and date, and the row reads as a
footer rule rather than as two cards. This is the configuration for a blog whose
articles are short and unphotographed, where a 64px thumbnail would either be
absent on half the plates or would be a crop of nothing.

**Joined to the article body.** Show article images on, top padding `0`, bottom
padding `72`, sitting directly under `main-article` with no divider between. The
section draws its own 1px top border, so at zero top padding the rule sits tight
under the article and the nav reads as the end of the piece rather than as a new
band. Use this on a short article template where the extra 72px of air would be
the only thing between the last paragraph and the next link.

## Notes

**The duplication with `main-article` is the trap.** `main-article`'s
`Show previous/next` defaults to **on**. Adding this section without turning that
off gives every article two previous/next rows, roughly 300px apart, saying the
same thing. Whirligig sets `show_prev_next: false` in `templates/article.json`;
any new article template has to do the same.

**Titles are one line and get an ellipsis.** The title is `white-space: nowrap`
with `text-overflow: ellipsis`, so at two columns "Why we record every instrument
before it ships" is cut short of its point. Nothing about the setting controls
this. Short article titles are worth writing for this reason alone.

**At the ends of a blog one plate is missing.** The first and last articles have
only one neighbour; the empty half renders a spacer, so the single plate stays in
its own column rather than centring. That is the right behaviour but it does look
lopsided, and on a four-article blog half of all article pages are in that state.

**The date fails contrast.** `.blog-article-nav__date` is `--color-text` at 45%
alpha, which measures **2.78:1** on the stone ground. AA wants 4.5:1. It is also
the pattern DESIGN.md names outright: secondary text as an alpha of
`--color-text` rather than a measured token. `theme-overrides.liquid` gives this
element Inconsolata and tabular figures but does not touch its colour, so the
correction has not landed. Fix it to `--ink-muted` before submission or turn the
section's dates off, which is not currently a setting.

**It always draws a rule above itself.** The 1px top border is built into the
section, not a setting. Two sections that both draw top borders, stacked, give
you two rules with padding between them.

**Below 480px the plates stack** and the right-hand plate flips to left
alignment, so the chevron for "next" ends up after the label on a left-aligned
line. Check it at 390px, which is the mobile viewport `shoot.mjs` uses.

**No audio, and it needs none.** This is chrome between two pieces of writing.
If the article template is being trimmed, this is a safer thing to cut than
`listening-rail`, because a reader who reaches the end of a bench note can still
get to the next one from the blog index.
