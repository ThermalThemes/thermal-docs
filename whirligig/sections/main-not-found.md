---
title: "404 page"
description: "The 404 page: a status label, the page's h1, one paragraph, a search form and a link home, deliberately short because the sections beneath it do the recovery."
---

# 404 page

The 404 template's main section. It renders a small `404` status label, the page's only `<h1>`, one paragraph, a search form posting to the store search, and a Back to home button. It is short on purpose. On Whirligig the actual recovery happens in the sections underneath it, so this section's job is to say what happened and get out of the way; on a template where it is the only section, turn the display size up and centre it so it can carry the page alone.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Eyebrow**. Small uppercase label above the heading. Use it to group sections into themes.
- **Heading**. Default “Page not found”.
- **Message**. Default “The page you were looking for doesn't exist.”.
- **Content alignment**. `Left` · `Center`, default `Left`.
- **Heading display size**. `None — standard heading` · `Display S` · `Display M` · `Display L`, default `None — standard heading`. Render the heading at the oversized display scale (type-as-structure) instead of the standard heading size.
- **Color scheme**. Colour scheme.

## Blocks

None. The section renders from its own settings.


<!-- generated:end -->

## Example use cases

**What Whirligig ships.** `eyebrow: "No page at this address"`, `heading: "Most things here are one of one"`, and a subheading explaining why a page can genuinely disappear: an instrument sells and it is gone. `content_alignment: left`, `heading_display_size: md`, `scheme-1`. The heading is an explanation rather than an apology, which is the only interesting thing a 404 can be.

**The full 404 composition.** This section plus a `shelf-rack` set to `render_when: always` with six unsold instruments, each carrying its own recording, and then a six-tile `collection-list` of scales at `columns_desktop: 6`. The 404 becomes a browse page, and that is why this section itself carries so little.

**A centred poster 404.** `content_alignment: center` with `heading_display_size: lg`, when this is the only section on the template. The status label, heading, copy, search field and button stack on the page axis at the display scale.

## Notes

**The `404` status label is drawn at 55% of the scheme's text colour, which measures about 3.8:1 on Stone.** WCAG AA wants 4.5:1 at that size. It is `aria-hidden`, so a screen reader skips it, but contrast applies to anything a sighted visitor can read. Treat it as a defect to fix rather than a style choice. The body paragraph at 70% measures about 6.1:1 and is fine.

**The search form sends no `type` parameter.** It posts `q` to `routes.search_url` and searches everything the store's search covers, which is wider than the header overlay when that overlay is set to products only. The two surfaces will disagree, and the 404 is the more generous of the two.

**`search.terms` is prefilled into the input.** Empty on a plain 404; not empty when Shopify routes a failed search here, in which case the visitor sees their own query already in the box, which is the behaviour you want.

**This section renders the page's only `<h1>`.** Do not stack another heading section above it that emits one too.

**`heading_display_size: lg` is unforgiving of long headings.** The shipped heading is 33 characters and balances onto two lines at 390px. Double that and it takes four lines before the search field is even visible.

The shipped 404 lists six scale collections while the masthead ruler carries eight scale stems. If you add a scale, add it in both places or the 404 will quietly under-report the range. `enabled_on` restricts the section to the `404` template.
