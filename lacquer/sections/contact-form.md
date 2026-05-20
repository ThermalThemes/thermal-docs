---
title: Contact form
description: Name, email, message form with optional subject field. Posts to the merchant's contact email via Shopify's contact-form endpoint.
---

# Contact form

A standard contact form. Name, email, message — optional phone and subject fields. Posts to the merchant's contact email via Shopify's built-in contact-form endpoint.

## What it does

Renders a contact form section. Configurable fields, submission behavior (Shopify-native or redirect), success messaging. No third-party service required.

## Section settings

Documentation in progress. Key settings: heading, body copy, fields shown, submit button text, success message, padding, color scheme.

## Blocks

The contact-form section is structural; field selection happens via section settings.

## Example use cases

- **Standard contact page** — Name, email, message. Used on `/pages/contact`.
- **Wholesale inquiries** — Add a subject dropdown with "Wholesale" as an option.
- **Custom orders** — Add a long-form message field with an instruction line explaining what to include (sizes, quantities, lead time).

## Notes

Submissions land at the email configured in **Settings → Store details → Sender email**. To route inquiries to a different inbox, update the sender email or use a third-party form (Tally, Formspree) embedded via [Custom HTML](./custom-html).
