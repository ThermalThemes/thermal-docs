---
title: "Search overlay"
description: "The modal search panel the masthead's search button opens, with optional predictive results."
---

# Search overlay

A dialog that drops from the top of the viewport when the masthead's search button is pressed. It has two settings that matter: what search covers, and whether live suggestions appear as the visitor types. It has no trigger of its own, so it is only useful alongside a header with `show_search` on; leaving it in the group with the header's search icon hidden ships a dialog nothing can open. It is chrome, not content: no colour scheme setting, no padding, one instance per group.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Search scope**. `Products, articles, and pages` · `Products only`, default `Products, articles, and pages`.
- **Enable predictive search**. On by default. Shows live suggestions as the customer types.

## Blocks

None. The section renders from its own settings.


<!-- generated:end -->

## Example use cases

**What Whirligig ships.** `search_type: product,article,page` with `enable_predictive_search: true`, so typing "kurd" returns instruments and Bench Notes articles in one list. Paired with `show_search: true` on the Header.

**Products only, on a store with no journal.** `search_type: product`. The value is written into a hidden `type` input on the form, so it carries through to the full results page and `main-search` stays consistent with the overlay rather than widening on submit.

**No predictive layer.** `enable_predictive_search: false` when a search app owns suggestions, or when the catalogue is 44 products and the full results page is fast enough that a second surface is just another thing to maintain.

## Notes

**The overlay defines its custom element without a guard.** Every other chrome section here wraps `customElements.define` in an `if (!customElements.get(...))`; this one does not. Re-rendering the section in the theme editor throws on the duplicate name and the script block stops running, which looks like the overlay breaking for no reason. Reload the editor preview after editing this section.

**It is opened by an event, not by a link.** The Header's search button dispatches `search:open`; nothing else does. If you hide the header search icon, or replace the header, you must dispatch that event yourself.

**Modal behaviour is real, not just labelled.** While open, every other top-level element gets `inert`, so the masthead, the ruler ticks and the whole page leave both the tab order and the accessibility tree. Escape closes and focus returns to the button that opened it.

**Focus into the input is retried for up to twelve frames, on purpose.** The panel animates from `visibility: hidden`, and a single `focus()` on the first frame is silently a no-op; one `requestAnimationFrame` was measured landing focus on `<body>`. Do not simplify that retry loop.

**There is no colour-scheme setting.** The panel paints `--color-background` from whatever scheme the `<body>` carries, which is the theme default, Stone. A merchant who wants a dark search panel has no setting for it.

Nothing in the overlay plays audio, and predictive results carry titles and prices rather than recordings. The panel body is capped at 640px and the submit button sits inline with the input at every width, which is tight but does not wrap at 390px. `limit: 1`.
