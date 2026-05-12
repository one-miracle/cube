# Cube

An animated four-block loader with dark/light theme support.

## Files

| File | Purpose |
|------|---------|
| `cube.html` | Entry point — markup and theme-toggle script |
| `cube.css` | All styles: layout, animations, theme variables |
| `toggle.svg` | SVG sprite containing the sun and moon icons |

## Themes

Colors are extracted from a dark architectural UI and its light counterpart.

| Token | Dark | Light |
|-------|------|-------|
| `--color-bg` | `#0f1923` deep navy | `#f5f0e8` warm cream |
| `--block-color` | `#2a9db5` teal | `#1a4a4a` forest |
| `--block-color-mid` | `#1a7a8a` dark teal | `#c8a96e` gold |
| `--block-color-end` | `#c8e6ea` pale cyan | `#2d6b5e` sage |

The initial theme follows `prefers-color-scheme`. The toggle button in the top-right corner overrides it for the session.

## Customisation

All timing and sizing is driven by CSS custom properties on `:root`:

```css
--speed: 5s;       /* animation cycle duration */
--block-size: 60px; /* width/height of each block */
--gap: 10px;        /* space between blocks */
--travel: 60vw;     /* distance blocks travel off-screen */
```
