---
title: Countdown
description: Timer to a target date and time, with hide, message, or redirect behavior on expiry.
---

# Countdown

A timer counting down to a target date and time, with configurable behavior when it hits zero.

## Section settings

- **Target date** (`YYYY-MM-DD`) and **Target time** (`HH:MM:SS`, 24-hour).
- **Timezone** — `store` or `browser`.
- **When countdown ends** — `hide_section` (default — expired timers never linger on a live page), `show_message` with an **Expiration message**, or `redirect` to a URL.
- **Display style** — `standard` or `flip_card`.
- **Show days / hours / minutes / seconds** — Seconds off by default.
- **Background image** — Optional.
- **Padding top / bottom**, **Color scheme**.

## Blocks

Takes [theme blocks](./index#theme-blocks) — heading, text, button alongside the timer.

## Notes

- The `hide_section` default is the safety net: a forgotten timer disappears instead of showing 00:00:00.
- If your brand states scarcity flatly rather than dramatizing it, skip this section and put the date in copy — the section is here when a launch genuinely runs on a clock.
