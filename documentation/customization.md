# 2. Customization

### Colors & Typography
All global styles are controlled by CSS Variables located at the top of `assets/css/style.css`.
```css
:root {
  --color-primary: #2d1b4e;
  --color-accent: #d4af37;
  --font-heading: 'Cinzel', serif;
  --font-body: 'Inter', sans-serif;
}
```
Modify these hex codes to instantly update the entire theme. 

### Dark Mode
Dark mode is supported and actively managed. The `assets/js/main.js` script handles the theme toggle and respects system preferences using `localStorage`. You can adjust specific dark mode colors by editing `assets/css/dark-mode.css`.

### Logo & Favicon
Replace the `logo.png` and `favicon.png` (or `.ico`) inside `assets/images/ui/` with your own designs to seamlessly update the branding across all pages.
