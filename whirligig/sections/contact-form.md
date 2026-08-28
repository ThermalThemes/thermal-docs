---
title: "Contact form"
description: "Shopify's contact form with visible labels, an optional phone and subject, and up to three merchant-defined fields that post under their own labels."
---

# Contact form

Contact form renders Shopify's own `contact` form: name, email and message always, with phone and subject as toggles and up to three fields the merchant defines outright. Everything posts to whatever customer-service address is set in the Shopify admin; the theme sends nothing and stores nothing. Reach for it wherever an enquiry needs structure that an email address in the footer cannot give it, which for a workshop is mostly the re-tuning and repair path, where the reply depends on knowing which instrument is being asked about. Put copy above it. A form at the top of a page with nothing before it reads as a support ticket rather than as a shop that answers its own email.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Field 1 label**. Free text, empty by default.
- **Field 1 type**. `Text` · `Email` · `Phone` · `URL` · `Multi-line text`, default `Text`.
- **Field 1 required**. Off by default.
- **Field 2 label**. Free text, empty by default.
- **Field 2 type**. `Text` · `Email` · `Phone` · `URL` · `Multi-line text`, default `Text`.
- **Field 2 required**. Off by default.
- **Field 3 label**. Free text, empty by default.
- **Field 3 type**. `Text` · `Email` · `Phone` · `URL` · `Multi-line text`, default `Text`.
- **Field 3 required**. Off by default.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Display options**

- **Show phone number field**. Off by default.
- **Show subject field**. On by default.

**Layout**

- **Content alignment**. `Left` · `Center`, default `Left`.
- **Content width**. `Small` · `Medium` · `Large`, default `Medium`.

## Blocks

- **Theme blocks**. Any block in the theme’s shared block library.

_Available in the theme editor as **Contact form**._

<!-- generated:end -->

## Example use cases

**As Whirligig ships it, on `page.contact`.** **Content width** Medium, **Content alignment** Left, **Show subject field** on, **Show phone number field** off, **Field 1 label** "Instrument or order number" as Text and not required, scheme-2, 80px top and bottom. It sits second on the page, after `main-page` carries the heading and the copy, and before `trust-icons` states the reply time. That order matters: the copy sets the expectation, the form takes the enquiry, the icons say how long it will take.

**A re-tuning intake.** **Field 1 label** "Instrument or order number" as Text, required. **Field 2 label** "Date on the original recording" as Text. **Field 3 label** "What has changed about the sound" as Multi-line text, required. **Show subject field** off, because the three fields have already made the subject clear, and **Content width** Large so the two-column grid has room. Every one of those answers is something the bench needs before it can quote the two-week turnaround.

**A visit request.** **Show phone number field** on, **Field 1 label** "Preferred date" as Text, **Field 2 label** "What you want to play" as Text, **Content width** Medium. The workshop is a working floor with nothing on a shelf, so an unstructured "can I come by" costs two emails; these two fields cost none.

## Notes

**A custom field's label is its key.** Each one posts as `contact[<label>]`, so "Instrument or order number" is literally the key that arrives in the notification email. Rename the label later and every future email uses the new key while the old ones keep the old one, which makes the inbox harder to filter, not easier. Choose short, stable labels and then leave them alone.

**There is no success-message setting.** Unlike Newsletter, the confirmation is the theme's `sections.contact.success` translation string, so changing it means editing `locales/en.default.json` and its translated siblings, not the theme editor. Plan for that if the wording matters.

**It has no heading of its own.** The header comes from theme blocks, and on `page.contact` the section ships with none, leaning on the `main-page` section above it for the title and the copy. That is the right order, but move this section anywhere without prose above it and it renders as a bare form. Add a `heading` block in that case.

**The field grid is two columns from 601px up.** Name, email, phone, subject and single-line custom fields each take one cell; the message and any Multi-line custom field span the full row. An odd number of single-line fields leaves a visible half-row gap above the message. Whirligig's shipped configuration is name, email, subject and one custom field, which is four and therefore clean; switching **Show phone number field** on makes it five and opens the gap.

**Focus is `outline: none` with a border-colour change only.** The theme's input rule is a 2px accent outline at 2px offset and never `outline: none`. This is the same divergence the Newsletter section carries and it should be fixed in both places at once.

**Only email errors render.** The error paragraph reads `form.errors.messages['email']` specifically, so a failure on any other field returns a page that looks unchanged. Required fields are enforced by the browser's own `required` attribute before submission, which covers most of it.

**The required asterisk is decorative.** The `*` beside a label is `aria-hidden`, and the semantics come from the `required` attribute, which is correct. There is no legend explaining what the asterisk means, so if you mark more than one or two fields required, say so in the copy above the form.

**Nothing here is spam-protected beyond Shopify's own handling**, and there is no confirmation email to the sender. If the page promises a reply time, as `page.contact` does through `trust-icons`, that promise is carried by a person, not by the form.

**No audio, and that is correct.** There is nothing pitched in a form, so the strike line passes over it without naming anything and the HUD stays empty.
