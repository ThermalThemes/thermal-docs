---
title: "Newsletter"
description: "Email capture that posts to the store's customer list with the tag \"newsletter\", headed by theme blocks and laid out stacked or split."
---

# Newsletter

Newsletter is an email capture form with optional first name, last name and phone fields, headed by theme blocks rather than by a heading setting of its own. Every submission posts to the store's customer list with one hardcoded tag, `newsletter`, so there is a single list no matter how many copies of this section a store runs. Reach for it as the closing section on a page that has earned the ask. It is worth more on a catalogue like this one than on most stores: when the majority of the inventory is quantity one, the list is the only way to catch the buyer who arrived a week after the instrument sold.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Success message**. Default “Thanks for subscribing!”.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Display options**

- **Show first name field**. Off by default.
- **Show last name field**. Off by default.
- **Show phone number field**. Off by default.

**Layout**

- **Content alignment**. `Left` · `Center`, default `Center`.
- **Content width**. `Small` · `Medium` · `Large`, default `Medium`.
- **Layout**. `Stacked (header above form)` · `Split (header left, form right)`, default `Stacked (header above form)`. Split puts the header on the left and the form on the right at desktop, stacking on mobile.

## Blocks

- **Theme blocks**. Any block in the theme’s shared block library.

_Available in the theme editor as **Newsletter**._

<!-- generated:end -->

## Example use cases

**The homepage close.** Whirligig's `keep-in-touch` runs **Layout** Split, **Content width** Large, **Content alignment** Left, scheme-2, 56px top and bottom, with a `heading` block at Display M reading "When a new scale comes off the bench" and a `text` block carrying the frequency and the reason: roughly twice a month, one-of-one instruments announced there first, most of them sold before they reach a collection page. Name and phone fields off. Split puts the claim on the left and a single email row on the right, so the last section of eighteen is two moves wide and one row tall.

**The collection footer, narrower and more specific.** The same section on `collection` changes four things: **Content width** Small, which under Split is 960px rather than 1200, scheme-1 instead of scheme-2, 80px top and 96px bottom, and a **Success message** written for the context, "Filed. You will hear from us the next time one comes off the bench in this scale." Read the note below about what that message can and cannot promise.

**A waiting list on `page.choosing-a-scale`.** **Layout** Stacked, **Content width** Small, **Content alignment** Center, **Show first name field** on so the first mail can open with a name. Stacked is the correct choice wherever this section is the only thing in its band; Split needs a left column with copy in it or the form floats against nothing.

## Notes

**It has no heading of its own.** The header is built entirely from theme blocks, and the header wrapper only renders when at least one block exists. A newsletter section with no blocks is a bare email row with no context, which is the headless-section failure this theme has shipped before. Always add a `heading` block and a `text` block.

**One list, one tag, and the copy has to match.** The form posts `contact[tags]` hardcoded to `newsletter`. There is no list, tag or segment setting, and nothing about the page the signup came from is sent. A success message that promises a scale-specific or collection-specific list, such as the one on the collection template, is describing segmentation the form does not encode. Either add the segmentation in the email tool by some other means or write the message to match what actually happens.

**Labels are hidden and the fields are placeholder-only.** Every field carries a `visually-hidden` label with a placeholder repeating it, so the label vanishes the moment a shopper starts typing. The theme's own input rule is that labels sit above and stay visible. Screen readers are served here; a sighted shopper with a half-filled form is not.

**Focus is `outline: none` plus a border-colour change.** The theme's rule is a 2px accent outline at 2px offset and never `outline: none`. A 1px border-colour shift is a weak focus indicator and is the kind of thing a manual accessibility pass catches rather than an automated one.

**Widths mean different numbers under each layout.** Small, Medium and Large are 480 / 640 / 800px when Stacked, and 960 / 1080 / 1200px when Split. Copying `width: small` from a stacked section into a split one gives a 960px block, not a 480px one.

**The success message replaces the form** inside a `role="status"` region, so the change is announced. It is escaped plain text: no link, no line break, no markup.

**Only email errors render.** The error paragraph reads `form.errors.messages['email']` specifically. Shopify's customer form errors are almost always email errors, so this is a narrow risk rather than a live defect, but a non-email failure would return a form that looks unchanged.

**Phone capture is a decision, not a display option.** **Show phone number field** posts `contact[phone]` to the real customer record. Collecting a phone number alongside a newsletter opt-in carries consent obligations the theme knows nothing about. Leave it off unless someone has decided otherwise.

**Nothing here interacts with the audio layer.** This is one of the few sections in the theme with nothing to play, and that is correct. The strike line passes over it as a rule on the page and names nothing, because there is nothing pitched in it.
