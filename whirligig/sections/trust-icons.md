---
title: "Trust icons"
description: "A row of short claims, each a fixed line icon plus a heading and a sentence, used here for turnaround times and stated policies rather than badges."
---

# Trust icons

Trust icons is a row of short claims, each one a line icon, a heading and a sentence. The icon vocabulary is fixed at ten commerce shapes and there is no image slot, so the section is worth exactly as much as its sentences are specific. On a store that argues from measurement, fill it with turnaround times and stated policies, never with "Free returns" and "Secure checkout"; generic copy here is the fastest way to make a considered theme look like a template. Reach for it where a visitor is about to ask a practical question and has not asked it yet, which is under a contact form, an FAQ or a care page. Keep it off the homepage, where a row of reassurance icons is what a store does when it has nothing to show.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Section eyebrow**. Free text, empty by default.
- **Section heading**. Free text, empty by default.
- **Section heading display size**. `None` · `Display S` · `Display M` · `Display L`, default `None`.
- **Icon size**. `Small` · `Medium` · `Large`, default `Medium`.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Layout**

- **Columns on desktop**. 2–6, default 4.
- **Columns on mobile**. `1 column` · `2 columns`, default `2 columns`.
- **Alignment**. `Left` · `Center`, default `Center`.

## Blocks

- **Icon item**. 3 settings.

_Available in the theme editor as **Trust icons**._

<!-- generated:end -->

## Example use cases

**The terms row on `page.contact`, as shipped.** **Section heading** "What we can tell you, and how long it takes" at **Section heading display size** Display S, **Section eyebrow** left blank, **Alignment** Left, **Columns on desktop** 4, **Columns on mobile** 2, **Icon size** Medium, scheme-1, 72px top and bottom. The four cells are a reply time (two working days, answered from the bench), a bench turnaround (re-tuning, about two weeks, checked against the instrument's own original recording), a recording standard (one metre, same room, so two instruments can honestly be compared) and a visiting policy. Every cell is a number or a rule. None of them is a badge.

**What every listing carries.** Under a specification table on a product or FAQ page: **Columns on desktop** 4, **Alignment** Left, **Icon size** Small so the row sits below the table without competing with it, and four cells naming the recording date, the tuning method (by ear, then verified against a meter, in that order), the one-of-one state, and what is actually in the box. Set **Section heading** and leave **Section eyebrow** blank so the row does not grow a header above its header.

**Care and tuning, three cells.** **Columns on desktop** 3, **Icon size** Large, **Alignment** Center: what nitrided steel wants and what it will do if you leave it wet, the re-tuning interval, and what a return costs on an instrument that has already been tuned to a buyer. Three cells is where centre alignment starts reading as composed rather than as a default that was never changed.

## Notes

**The icon set is fixed, and good copy outruns it.** Ten shapes only: shield, returns arrow, shipping truck, payment card, padlock, award ribbon, chat bubble, box, leaf, globe. There is no custom icon and no image slot. Whirligig's own row already shows the strain: the award ribbon carries "One metre, same room" and the shipping box carries "Visits by arrangement", and neither shape means what the sentence says. Pick the icon that reads least wrongly and set **Icon size** Small so the glyph carries less weight than the words, or accept the mismatch knowingly.

**Stroke weight scales with icon size.** The icons draw a 2-unit stroke inside a 24-unit viewBox, so Small renders about 2px, Medium about 3px and Large about 4px. On a theme built out of hairlines, Large is heavier on the page than it looks in the picker.

**The eyebrow does not need a heading here.** Unlike most sections in this library, the header wrapper renders when either **Section eyebrow** or **Section heading** is set, and the eyebrow is not nested inside the heading branch. An eyebrow on its own will render rather than silently vanishing. That is rarely what you want, but it is not a trap.

**The header is capped at 38ch** while the icon grid below runs the full container width. A long heading wraps to two or three lines against a wide row. Write it short.

**There is no lede setting.** Eyebrow then heading, and nothing else. If the row needs a sentence of context, that sentence belongs in the section above it.

**Block text is drawn at 0.75 alpha of the text colour.** On scheme-1 and scheme-2 that measures fine. On a saturated or dark ground it is an alpha of `--color-text`, which this theme forbids outright, so keep this section on a pale scheme.

**Display sizes stop at Display L here**, where most sections in this library go to Display XL. Not a defect, but do not expect parity when you are matching a heading scale across a page.

**A block with no heading and no text renders a bare icon.** There is no minimum and no guard, so a half-configured block leaves a floating glyph with nothing under it.

**Match the column count to the block count.** Four blocks in four columns is one clean row; five leaves an orphan. **Columns on mobile** offers only 1 or 2, so a four-column desktop row becomes two rows of two on a phone by default.

**Nothing here touches the audio layer.** No block is pitched, so the strike line passes over the row without naming anything and the readout stays empty.
