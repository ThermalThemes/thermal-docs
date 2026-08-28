---
title: "Home"
description: "A titled block canvas restricted to the index template, with no preset and no colour or spacing settings; Whirligig's own homepage does not use it."
---

# Home

Home is a canvas: an optional eyebrow, an `<h1>` and a subheading, followed by whatever theme blocks you drop inside it. It is restricted to the `index` template and ships with no preset, which means it is not in the theme editor's Add section menu and has to be placed by editing `templates/index.json` directly. Whirligig's own homepage does not use it, and that is the honest default: eighteen purpose-built sections opening on `overture` make the argument better than one block canvas can. Reach for it only when a merchant deliberately wants a much plainer homepage than this theme composes, or when a temporary band of copy has to sit above everything else.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Eyebrow**. Small uppercase label above the heading. Use it to group sections into themes.
- **Heading**. Default “Welcome”.
- **Subheading**. Free text, empty by default.

## Blocks

- **Theme blocks**. Any block in the theme’s shared block library.


<!-- generated:end -->

## Example use cases

**A dated band above the overture.** Add `main-home` as the first entry in `templates/index.json` with **Eyebrow** "Troy, New York", **Heading** "Nine instruments came off the bench this month", **Subheading** naming the date the recordings went up, plus one `button` block pointing at `/collections/the-register`. Read the note about `<h1>` first: `overture` already emits one, so either blank the overture heading or accept two on the page.

**A stripped homepage for a merchant who wants one.** **Heading** blank so the header block does not render at all, and the whole page composed from theme blocks inside this one section: a `heading`, a `text`, an `image`, a `button`. Name the trade-off before you choose it. Everything inside becomes one entry in the theme editor's section list with one reordering surface, and none of it can be given a colour scheme or its own padding, because this section exposes neither.

**A closed-bench notice.** **Eyebrow** "The bench", **Heading** "Closed until 3 September", **Subheading** giving the date the next recordings go up, and a `button` block into the journal. Because the section takes no colour scheme it renders on the page's default pale stone ground, which is the right register for a notice and the reason this is the one composition where the missing setting does not cost anything.

## Notes

**It is not in the Add section menu.** The schema declares no `presets`, so a merchant cannot reach it from the theme editor. It is `enabled_on` the `index` template only and has to be placed by hand in `templates/index.json`. If a merchant asks where the Home section went, this is the answer.

**Whirligig does not use it.** No template in the theme as shipped references it. It is available and unbound, which is worth knowing before anyone treats an empty homepage as a missing section.

**It emits an `<h1>`, and so does `overture`.** Two `<h1>` elements on one document is a heading-outline defect that a manual accessibility review will find. If this section goes above the overture, clear the overture's heading or decide the duplication on purpose.

**The eyebrow renders only when the heading is set.** **Eyebrow** lives inside the `heading != blank` branch, so an eyebrow paired with only a subheading disappears with no error and no clue. This is the library-wide eyebrow trap: whenever you set an eyebrow, set a heading.

**No colour scheme and no padding settings.** The root carries `.section` for vertical rhythm but no `.color-scheme-N`, so it inherits its ground instead of declaring one. In this theme colour is painted on `.section.color-scheme-N`, which means there is no way to give this section a dark band, a bronze band, or a section rhythm other than the 48px default. Everything else in the homepage composition can do all three.

**No `shopify_attributes` on the root.** The theme editor has nothing to bind section highlighting or the `shopify:section:load` lifecycle to, so live reload in the customizer is unreliable for blocks placed inside it. Expect to refresh.

**Heading and subheading are not escaped.** Most sections in this library run text settings through `| escape`; these two do not. They are plain text settings so there is no rich-text editor, but a stray angle bracket or ampersand passes through as markup rather than as characters.

**It renders no motion.** There is no `{% render 'motion' %}` anywhere in the section, so the header does not reveal on scroll. Blocks placed inside it bring whatever motion they carry themselves.

**No audio, and nothing pitched.** The strike line crosses it as chrome and names nothing.
