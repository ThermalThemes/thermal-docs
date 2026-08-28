---
title: "Slideshow"
description: "A multi-slide hero with nine content positions, an optional background video per slide, a scrim overlay, and auto-rotate off by default."
---

# Slideshow

Slideshow is the conventional hero: full-width slides, one per block, each with a background image or looping video, a heading, a description, up to two buttons, and a content position chosen from a three-by-three grid. Whirligig does not use it on its homepage, which uses the theme-original `overture` instead, so this section is here for merchants who want a hero that rotates and for stores whose catalogue does not sit on a pitch axis. Reach for it when you genuinely have two or three equally important entry points and no single one deserves the fold. If you have one, use one slide and turn the indicator off, or use `image-with-text` and stop paying for a carousel you are not using.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Slide indicator**. `Dots` · `Numbers` · `Bar` · `None`, default `Dots`.
- **Auto-rotate slides**. Off by default.
- **Rotation interval**. 3–9s, default 5s.
- **Mobile aspect ratio**. `Portrait (2:3)` · `Square (1:1)` · `Landscape (3:2)`, default `Portrait (2:3)`.
- **Slide height**. `Adapt to first image` · `Small` · `Medium` · `Large` · `Full screen`, default `Medium`.
- **Transition style**. `Fade` · `Slide`, default `Fade`.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 0px.
- **Bottom padding**. 0–160px in steps of 4, default 0px.

**Display options**

- **Show previous/next arrows**. Off by default.
- **Show slide counter**. Off by default. Live numeric index (01 / 03) next to the arrows.

**Media**

- **Image overlay**. `None` · `Scrim — bottom` · `Scrim — full`, default `None`. Darkens the slide image so heading/body text stays legible over photography.
- **Overlay opacity**. 0–90% in steps of 5, default 40%.

## Blocks

- **Slide**. 18 settings.

_Available in the theme editor as **Slideshow**._

<!-- generated:end -->

## Example use cases

**The settings demonstration, as the features page runs it.** `slides` on `page.theme-features`: **Transition style** Slide, **Slide height** Large, **Slide indicator** Numbers, **Show previous/next arrows** on, **Show slide counter** on, **Auto-rotate slides** off, **Image overlay** Scrim (bottom) at 35%, `scheme-1`, zero padding. Three slides, each demonstrating one setting rather than selling one thing: the handpan hero at **Content position** Bottom left, the bronze bowls at Middle center with **Text alignment** Center and a secondary button style, the practitioner kit at Bottom right aligned right. The counter and the numbered indicator together are what make the section legible as a control surface rather than as a hero.

**A two-door homepage.** Two slides, **Slide height** Full screen, **Slide indicator** Bar, **Auto-rotate slides** off, **Image overlay** None, **Content position** Middle left on both, **Heading display size** Display L. One slide to the instruments, one to the bench. Two slides is the honest number for a store with two audiences, and leaving auto-rotate off means the second door is found by a shopper who wanted it rather than shown to one who did not.

**One slide, no chrome.** A single block, **Slide indicator** None, arrows and counter off, **Slide height** Large, **Image overlay** None, **Content position** Bottom left, **Text alignment** Left. With one block the nav, the counter and the arrows are all suppressed automatically, so this costs nothing beyond the section itself. It is the correct way to use this section for a static hero, and it leaves the merchant a place to add a second slide later without a rebuild.

## Notes

**Auto-rotate is off by default and should usually stay off.** An advancing hero moves content out from under a reader, and it is a motion decision rather than a default. When it is on, **Rotation interval** ranges from 3 to 9 seconds; 3 is too fast to finish a heading.

**Two settings on this section do nothing at all today, and one of them is on the slide block.** **Mobile aspect ratio** appears in the schema and nowhere else in the theme: no Liquid, no CSS, no JavaScript reads it, so the choice between Portrait, Square and Landscape has no effect. Mobile height comes from **Slide height** instead, which drops to 300 / 420 / 560px under 768px. And the per-slide **Slide color scheme** is never read by the Liquid either; every slide inherits the section's scheme. `page.theme-features` sets both fields. Do not build a composition that depends on either until they are wired.

**Adapt to first image does not adapt to the image.** The slide media is absolutely positioned, so it contributes nothing to layout height, and the Adapt option simply removes the minimum height. A slide with little text therefore collapses toward nothing. Use Small, Medium, Large or Full screen unless you have measured what Adapt does with your content.

**A scrim only helps light text, and the current features-page slides are dark text.** **Image overlay** darkens the photograph. That is right when the slide's colour scheme puts light type over the image, and wrong when it puts `--ink` over it, because darkening the ground under dark text reduces contrast rather than raising it. `slides` on `page.theme-features` runs `scheme-1` (ink on stone) with Scrim (bottom) at 35% and puts two of its three slides in the bottom corners, which is the darkest part of the gradient. Either move that section to a dark scheme or set **Image overlay** to None; as configured it is the illegible-hero shape the design contract says was removed by construction.

**Slides have no alt-text setting.** Both **Desktop image** and **Mobile image (optional)** render through a raw `image_tag` with no `alt` argument, so the alt comes from the file in Shopify admin. Hero photography is content, not decoration, so set it there.

**Background video is background, not a player.** The **Background video** field autoplays, loops, is muted and has no controls, because a hero is not something a visitor operates. That is the one place in this theme where media starts on its own, and it is silent, so it does not touch the never-autoplay rule for audio. Keep the slide **Desktop image** set: it is the poster, it is what a slow connection paints, and it is what a visitor who prefers reduced motion sees instead of the video.

**Non-first slides are `hidden`, and the track is an `aria-live="polite"` region.** Advancing announces the new slide. That is correct for a manually advanced carousel and gets noisy with auto-rotate on, which is a third reason to leave auto-rotate off.

**The heading highlight effect needs an exact substring.** **Highlight phrase** is matched against the heading with `replace_first`, on the escaped string. A near miss, a curly quote against a straight one, an ampersand, and the effect silently does not apply. Check the rendered slide rather than the setting.

**The theme's Timbre styling for this section is bound to the wrong key.** `dist/assets/timbre-rhythm.css` carries fifteen lines of `.lq-section--hero .slideshow__*` rules covering the hero heading clamp, the subheading and body colours, the content measure and the whole numbered-nav treatment. The `hero` key on `index` is an `overture` section, which contains no `slideshow__` class names, so every one of those rules matches zero elements. The features page's slideshow renders at substrate defaults.
