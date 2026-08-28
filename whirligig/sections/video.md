---
title: "Video"
description: "One video in four aspect ratios and four widths, from an uploaded file or a YouTube/Vimeo URL behind a cover image, with autoplay off by default."
---

# Video

Video is one film in a frame, with an optional block-built header above it. It takes either an uploaded Shopify video, which renders as a real `<video controls>`, or a YouTube or Vimeo URL, which renders as a cover image with a play button that swaps in the embed on click. Reach for it when there is a film worth four minutes of someone's attention and the page has already earned it, which on this store means after the specifications rather than before them. Set it and its audio sibling by the same rule: a cover image, a labelled control, and nothing playing until someone asks. It is also the section that behaves most quietly when it is empty, which is a trap covered below.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Autoplay**. Off by default. Automatically mutes video when autoplay is enabled
- **Loop**. Off by default.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 48px.
- **Bottom padding**. 0–160px in steps of 4, default 48px.

**Layout**

- **Aspect ratio**. `16:9 (widescreen)` · `21:9 (cinematic)` · `4:3 (classic)` · `1:1 (square)`, default `16:9 (widescreen)`.
- **Width**. `Small` · `Medium` · `Large` · `Full width`, default `Large`.

**Media**

- **Video (uploaded)**. Video.
- **YouTube or Vimeo URL**. A link. Used when no uploaded video is set
- **Cover image**. Image. Shown before the video plays for external video URLs. Also rendered as a static image when no video is configured.

## Blocks

- **Theme blocks**. Any block in the theme’s shared block library.

_Available in the theme editor as **Video**._

<!-- generated:end -->

## Example use cases

**The recording corner, as the homepage runs it.** `recording-corner` on `index`: **Aspect ratio** 21:9, **Width** Large, **Autoplay** off, **Loop** off, **Cover image** `design-recording-corner.jpg`, `scheme-1`, zero padding, with three blocks above it: subheading "Four minutes", heading "One take, one microphone, one metre" at Display L, and a paragraph arguing that the recording is the last step of building the instrument rather than a marketing asset that happens afterward. It is the last full-width moment on the homepage before the journal, and 21:9 is what makes it read as a film strip rather than as another photograph.

**The autoplay position, stated out loud.** `film` on `page.theme-features`: **Aspect ratio** 21:9, **Width** Full width, **Autoplay** off, **Loop** off, same cover image, 48px top and 64px bottom, headed "Nothing on this store starts making noise on its own" with a caption block reading "video · autoplay: false, and that is a position rather than a default". A features page is the one place where a section should explain its own defaults, and this is the section whose default is the store's whole argument.

**A short loop as texture.** **Width** Medium, **Aspect ratio** 1:1, **Autoplay** on, **Loop** on, an uploaded file of ten seconds of a hammer on a shell. Autoplay forces mute in the markup, so this is silent by construction and does not touch the never-autoplay rule, which is about audio. Keep it under about fifteen seconds and keep the file small; a looping square that nobody asked for is the fastest way to lose the Lighthouse Performance budget.

## Notes

**With no video set and a cover image set, the section renders the still and nothing else.** No play button, no placeholder, no indication that a film was ever intended. That is the homepage's current state: `recording-corner` on `index` has a **Cover image** and neither **Video (uploaded)** nor **YouTube or Vimeo URL**, so the section is a full-width photograph under a heading that says "One take, one microphone, one metre" and a paragraph about a four-minute film. It reads as finished and it is not. Either bind the film or rewrite the header to describe the photograph.

**With nothing set at all it renders a `.placeholder-svg`.** Grey Shopify placeholders are a named defect on any route that gets screenshotted. An empty video section is worse than no video section.

**Autoplay implies muted, and the schema says so.** The `muted` attribute is bound to the same setting as `autoplay`, so an autoplaying video is always silent and there is no way to autoplay with sound. That is correct and should not be treated as a limitation to work around.

**The cover image does not route through `responsive-image`.** It uses a raw `image_tag` with widths to 3200 and no `sizes`, so the browser assumes 100vw. At **Width** Small the frame is capped at 640px and the browser will still fetch for the full viewport. Resolution is not the risk here; payload is.

**The media frame paints black behind the video.** On a store whose ground is pale stone, a 21:9 frame at Full width is the largest dark rectangle on the page. With `object-fit: cover` on the cover image the black never shows, but any letterboxing inside an embed will, and one dark band is the theme's budget for a dark surface on a page that already spends it on the Chladni grid.

**The header block wrapper nests a container inside a container.** At any **Width** other than Full width the section's outer wrapper and its header wrapper both carry `.container`, so the header's text is inset twice while the video frame beside it is inset once. The homepage instance is corrected by a per-section override; a new video section at Small, Medium or Large is not. Use Full width, or check the header's left edge against the section above it.

**One section key is shared across two templates and two section types.** `recording-corner` is this section on `index` and an `image-with-text` section on `product`. The `lq-section--{key}` hook has no template prefix, so the styling written here also reaches there. Rename one of them.

**Nothing here is part of the audio layer.** This section renders no `audio-player` variant, holds no recording, and carries no `data-strike-item`. A film about how the recordings are made is not a recording, and the page still needs a player somewhere above it.
