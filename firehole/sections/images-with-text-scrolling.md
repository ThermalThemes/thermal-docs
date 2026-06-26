---
title: Images with text scroll
description: Pinned image that crossfades between steps as the visitor scrolls through adjacent text blocks, with per-step spec pairs.
---

# Images with text scroll

A scroll-driven story section: the image column pins in place while the visitor scrolls through a sequence of text steps, and the pinned image crossfades to each step's image as it becomes active. The theme's process-story and product-walkthrough vehicle.

## Section settings

- **Subheading / Heading** — Section header above the story, with **Heading display size** (`none`–`xl`).
- **Step heading display size** — `none`, `sm`, `md`. Renders each step's heading at display scale.
- **Image position** — `left` or `right`.
- **Image aspect ratio** — `square`, `portrait`, `landscape`.
- **Show step numbers on image** — Overlays each step's index (01, 02, …) on its pinned image as outlined numerals. Default off.
- **Padding top / bottom**, **Color scheme**.

## Blocks

One block type: **Scroll item** — one per step.

- **Image** — The step's image, crossfaded into the pinned column.
- **Subheading / Heading / Text**.
- **Spec 1–4 label/value pairs** — Optional structured data rows rendered under the step text. Pull counts, materials, dimensions.
- **Button link / label** — Optional per-step CTA.

## Example use cases

- **Process story.** Four steps — press, pull, cure, number — with stage numbers on and one spec pair per step. The demo's "four pulls" sequence is this section.
- **Product feature walkthrough.** Steps keyed to detail photography of a single product, each with a spec pair and the last step carrying the buy CTA.

## Notes

- Inactive steps dim and light up as they become active; the effect needs at least 3 steps to read as a story.
- Each step needs its own image — steps without images hold the previous image.
- The pin degrades gracefully: without JavaScript or in reduced-motion contexts, steps render as a plain stacked sequence.
