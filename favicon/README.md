# Skillify favicon package

Files included:

- `favicon.svg` — modern vector favicon source
- `favicon.ico` — legacy/browser fallback, includes 16/32/48/64/128/256 sizes
- `apple-touch-icon.png` — iOS home-screen icon, 180×180
- `icon-192.png` and `icon-512.png` — PWA/web manifest icons
- `site.webmanifest` — basic manifest icon config

Recommended `<head>` tags:

```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#080A0F">
```

Design note: intentionally reduced to a dark rounded-square `S` monogram with a small terminal/cursor accent so it stays readable at 16×16.
