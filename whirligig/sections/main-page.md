---
title: "Page"
description: "The page title and page.content in a 65ch reading measure; one checkbox, and every other decision belongs to the sections around it."
---

# Page

The page itself: an `h1` carrying `page.title`, then `page.content` rendered
through `.rte` at a 65ch measure. One setting, and no width, colour or spacing
control of any kind. That is the design: a page template in this theme is the
merchant's prose plus whatever sections are stacked around it, and every
decision except "is there a title" is made in those other sections. Whirligig
runs it on four templates and it is first on three of them.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Show page title**. On by default.

## Blocks

None. The section renders from its own settings.


<!-- generated:end -->

## Example use cases

**The workshop page.** Show title on, first in the order, then
`creator-spotlight` (Nell, the pull-quote, the order of work), `multirow` (the
bench, the tuning rig, the recording corner), a `nodal-field` divider and a
`collection-list`. The page body carries the narrative and two `h2` headings
written into `page.content`; everything visual sits below it. This is the
composition to copy for any "about" page: prose first, evidence second, routes
out last.

**The default page template, used by "How we record" and "Questions".** Show
title on, then `nodal-field`, `listening-rail` and `collection-list`. The FAQ
page is nothing but `page.content` and six `h2` questions. The audition rail
below is doing real work: it is what stops a pure-text page on an audio theme
ending in silence.

**Choosing a scale.** Show title on, but the template runs `pitch-axis` **first**
and this section second, so the reader meets the whole `by-scale` collection laid
out on a frequency axis before they meet the page title. It is a defensible order
(the register is the argument, the prose is the explanation) and it has a cost,
named in the notes below.

## Notes

**One setting is the whole surface.** No colour scheme, no padding, no width, no
title size. The section carries neither `.section` nor `.color-scheme-N`, which
is correct for a `main-*` chrome surface under the paint model in DESIGN.md, and
which also means a page's opening block cannot be tinted from the editor.

**It emits no vertical padding at all.** `main-article` sets
`padding-block: var(--section-spacing)` and `main-blog` sets its own
`--main-blog-pt` / `--main-blog-pb`. This section sets neither, and it does not
carry `.section`, so the global `.section { padding-block }` rule does not reach
it. The only lever is `.lq-section--main` in `theme-overrides.liquid`, which
today sets a title margin, a 65ch measure and a 1.66 line-height, and no top
space. On four page templates the `h1` therefore starts hard against whatever is
above it. Worth measuring against DESIGN.md's 96px desktop section rhythm before
submission.

**Turning Show title off leaves the page with no `h1`** unless a section above or
below supplies one. Nothing warns you. If a page needs a display-scale title
rather than the plain one, the pattern is to turn this off and put a `rich-text`
above it with a `heading` block at size `h1`, which is exactly what the blog
template does.

**Headings inside the page body are the merchant's markup.** `page.content`
renders through `.rte`, so `h2` and `h3` come from whatever is in the page's
own HTML, at whatever scale the theme gives them. There is no setting here that
changes their size, and there is no place to put an eyebrow or a lede.

**Ordering this section after another one inverts the document outline.** On
`page.choosing-a-scale`, `pitch-axis` renders an `h2` through
`snippets/section-header.liquid` before this section renders the page's `h1`. The
page reads correctly and its heading structure does not. If the register really
does have to come first, give `pitch-axis` `heading_tag: 'h1'` (the snippet
accepts it) and turn Show title off here.

**An empty page renders an empty wrapper.** With no `page.content` and Show title
off, the section still outputs its container. Nothing guards it.

**No audio, and two of the four page templates never get any.** `page.json` and
`page.choosing-a-scale` follow this section with `listening-rail` or
`pitch-axis`; `page.the-workshop` and `page.contact` do not, so those two pages
carry no audio at all. That is arguably right for a contact form. It is harder to
defend on the workshop page, which is where a merchant reads about how the
recordings are made.
