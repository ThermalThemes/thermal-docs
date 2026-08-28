---
title: "Countdown"
description: "A live timer to a fixed date and time with three expiry behaviours, whose Timezone setting is not currently wired to anything."
---

# Countdown

Countdown ticks down to a date and time you set, then does one of three things: hides itself, swaps in a message, or sends the visitor to another URL. It is the section here with the most obvious commercial purpose and the weakest fit for this theme's argument, which is that you should take your time and listen to the recording forty times before you spend $2,480. Reach for it when the deadline is real and external, such as a shipping cut-off or an event, and leave it alone for manufactured pressure. Read the Notes before you touch **Timezone** and before you put this on a page anyone needs to read carefully; both have costs that are not visible in the editor.

<!-- Write freely above and below the generated block. Anything outside the
     markers survives regeneration; anything inside is rewritten from the
     section schema, so edit the schema rather than this file. -->

<!-- generated:start -->

## Section settings

- **Target date**. Format: YYYY-MM-DD
- **Target time**. Format: HH:MM:SS (24-hour)
- **Timezone**. `Store timezone` · `Visitor's browser timezone`, default `Store timezone`.
- **Background image (optional)**. Image.
- **Color scheme**. Colour scheme.

**Section spacing**

- **Top padding**. 0–160px in steps of 4, default 64px.
- **Bottom padding**. 0–160px in steps of 4, default 64px.

**Display options**

- **Display style**. `Standard` · `Flip card`, default `Standard`.
- **Show days**. On by default.
- **Show hours**. On by default.
- **Show minutes**. On by default.
- **Show seconds**. Off by default.

**Layout**

- **When countdown ends**. `Hide section` · `Show message` · `Redirect`, default `Hide section`.
- **Expiration message**. Free text, empty by default.
- **Redirect URL**. A link.

## Blocks

- **Theme blocks**. Any block in the theme’s shared block library.

_Available in the theme editor as **Countdown**._

<!-- generated:end -->

## Example use cases

Whirligig's own demo does not use this section. These are the three deadlines that are real enough to justify it.

**A shipping cut-off, stated as a fact.** Heading block reading "Last day for orders shipping before 24 December, 17:00 Eastern", **Target date** the cut-off, **Target time** `17:00:00`, **Show days** · **Show hours** · **Show minutes** on, **Show seconds** off, **Display style** Standard, **When countdown ends** Show message with an **Expiration message** naming what happens next rather than what the visitor missed, **Top padding** and **Bottom padding** 64, scheme-2 so the row reads as a plate rather than as page ground, no background image. The timezone belongs in the heading text because the setting will not carry it; see the Notes.

**A one-time event, with a redirect to the thing itself.** An open bench day or a livestream: **Show days** off if the event is inside 24 hours, so the row reads `14 : 32 : 09` rather than `00 days`, **Display style** Flip card, which puts each unit on an 8% tint plate and widens it to 100px, **When countdown ends** Redirect and **Redirect URL** pointing at the recording or the replay. Redirect is defensible here and almost nowhere else, because the destination is the same content the visitor came for.

**A closing batch, at the foot of a collection page.** **Display style** Standard, **When countdown ends** Hide section so the page returns to normal with no dead furniture, **Show seconds** on only if the remaining window is under an hour, where a second is genuinely information rather than a pulse. Keep it below the grid: a timer above a catalogue of one-of-one instruments argues against the catalogue.

## Notes

**Whirligig does not use this section.** Nothing in `dist/templates/` references `countdown`.

**The Timezone setting does not do anything.** The chosen value is written onto the element as `data-timezone` and the script never reads it. The target is built as `new Date("YYYY-MM-DDTHH:MM:SS")`, which every browser parses in the *visitor's* local time, so `Store timezone` and `Visitor's browser timezone` behave identically and a 17:00 cut-off reads 17:00 in Sydney and 17:00 in Denver. If the deadline is real, name the timezone in the heading and treat the numerals as approximate. `dist/sections/countdown.liquid`.

**An unconfigured Countdown renders four permanent zeroes.** With **Target date** empty the script returns before it does anything, and the markup's `0` placeholders sit on the page forever. There is no guard and no hidden state. Set the date in the same sitting you add the section.

**The timer is an `aria-live="polite"` region with `aria-atomic="true"` that rewrites every second.** The tick writes `textContent` unconditionally, whether or not the value changed, so a screen reader re-announces the whole row once a second on a page the visitor is trying to read. Turning **Show seconds** off does not help; the interval still runs at 1000 ms and still touches the minutes. Treat this as the reason to keep Countdown off any page with substantial reading on it, and as the first thing to fix if this section ever earns a place in the demo.

**A background image sits behind live text with no scrim and no contrast guarantee.** The numerals are the scheme's `--color-text` over whatever the photograph happens to be doing behind them. This theme's rule is text on ground, never over photography, and the illegible-hero defect it was written for was removed by construction elsewhere. Leave **Background image** empty and let the colour scheme carry it.

**The figures are set in the body face, not in Inconsolata.** `.countdown__value` sets a size, a bold weight and `tabular-nums` but no family, so it inherits Archivo. Everywhere else in this theme a readout, a price or a frequency is mono, so a countdown is the one number on the page in the wrong voice.

**The unit labels are drawn at `opacity: 0.65`.** That measures fine on scheme-1 and scheme-2. On scheme-3 it is an alpha over a dark ground, which this theme forbids outright, so keep Countdown on a pale scheme.

**Redirect fires whenever the page happens to be open as the clock passes zero.** Someone reading at 16:59:58 is moved to another URL two seconds later, mid-sentence, with no warning. **Redirect URL** also accepts an off-site address. Prefer Show message unless the destination is genuinely the same content.

**The expiration message is a plain escaped string.** No rich text, no link, no formatting. Write one sentence.

**There is no heading setting.** The header comes from blocks and the preset ships a centred heading reading "Sale ends in". Added by hand in template JSON, the section renders a bare row of numerals with nothing saying what they count.

**Flip card does not flip.** It is a tinted plate at 8% of the text colour with more padding and a 100px minimum width. Useful, but do not promise a merchant an animation.

**Motion covers the container, not the timer.** The inner wrapper carries `role: reveal`; the numerals are driven by `setInterval` and are unaffected by `prefers-reduced-motion`, which is arguably correct for a clock and worth knowing.

**Nothing here touches the audio layer.** The section declares no `data-strike-item`, so the strike line passes over it without naming anything.
