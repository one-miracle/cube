# Cube

An animated four-block loader with dark/light theme support.

## Files

| File | Purpose |
|------|---------|
| `cube.html` | Entry point — structural markup only |
| `cube.css` | Layout, animations, and theme custom properties |
| `cube.js` | Theme detection, toggle logic, and colour tokens |
| `assets/toggle.svg` | SVG sprite with `#icon-sun` and `#icon-moon` symbols |

## Themes

Colours are defined in `cube.js` and applied as CSS custom properties on `<html>`.
The initial theme follows `prefers-color-scheme`; the toggle button overrides it for the session.

| Token | Dark | Light |
|-------|------|-------|
| `--color-bg` | `#0f1923` deep navy | `#f5f0e8` warm cream |
| `--block-color` | `#2a9db5` teal | `#1a4a4a` forest |
| `--block-color-mid` | `#1a7a8a` dark teal | `#c8a96e` gold |
| `--block-color-end` | `#c8e6ea` pale cyan | `#2d6b5e` sage |

## Customisation

Timing and sizing are driven by CSS custom properties on `:root`:

```css
--speed: 5s;        /* animation cycle duration */
--block-size: 60px; /* width/height of each block */
--gap: 10px;        /* space between blocks */
--travel: 60vw;     /* distance blocks travel off-screen */
```

Each block's direction is controlled by two inline custom properties, so adding
a new block only requires HTML and no new keyframes:

```html
<div class="block" style="--enter-x: -1; --exit-y: 1; top: 0; left: 0;"></div>
```

| Property | Values | Effect |
|----------|--------|--------|
| `--enter-x` | `1` or `-1` | Enter from right or left |
| `--exit-y` | `1` or `-1` | Exit downward or upward |

> **Note:** `<use href="external.svg#id">` is blocked by browsers on `file://` URLs.
> Use any static server (e.g. `npx serve .`) to load the toggle icons correctly.
