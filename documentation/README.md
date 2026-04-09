# Science Fiction / Fantasy Author HTML Template - Documentation

Welcome to the documentation for the Science Fiction / Fantasy Author HTML Template. This guide covers installation, customization, and other essential information.

## 1. Installation

This is a completely static HTML template, meaning no build step, Node.js, or NPM is required to get started.

**Steps:**
1. Extract the downloaded template files.
2. Open the `pages/index.html` file directly in your web browser to preview the site.
3. Edit the HTML, CSS, and JS files using your preferred code editor (e.g., VS Code).
4. Host the files directly on standard web servers (Apache, Nginx) or modern HTML hosting platforms like GitHub Pages, Vercel, or Netlify.

## 2. Customization

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

## 3. Page Structure

The template uses a strict, easy-to-navigate directory architecture:

```text
author-template/
├── assets/
│   ├── css/       (style.css, dark-mode.css, rtl.css)
│   ├── js/        (main.js, dashboard.js)
│   ├── images/    (hero/, ui/, content/)
│   └── fonts/     (local fonts)
├── pages/
│   ├── index.html         (Home 1)
│   ├── index-2.html       (Home 2)
│   ├── about.html
│   ├── books.html
│   ├── book-details.html
│   ├── the-world.html
│   ├── blog.html
│   ├── blog-post.html
│   ├── events.html
│   ├── contact.html
│   ├── dashboard.html     (Dashboard User)
│   ├── vault.html         (Dashboard extension)
│   ├── login.html
│   ├── register.html      (Signup)
│   ├── 404.html
│   └── coming-soon.html
├── documentation/
│   └── README.md
└── README.md
```

## 4. Credits

This template utilizes the following open-source resources:
- **Fonts:** Provided by Google Fonts (Self-hosted in `assets/fonts/` for performance and privacy).
  - *Cinzel*
  - *Inter*
- **Icons & Images:** All sample visuals are open-source and royalty-free placeholders, intended to be replaced with your own artwork or imagery from sources like Unsplash.

## 5. Changelog

**v1.0.0**
- Initial Release.
- Implemented core mobile-first HTML5 architecture with modular CSS variables.
- Added 12+ fully coded pages including author-focused layouts, Members Vault, and Dashboard.
- Integrated Dark/Light Mode toggle and RTL language support.
- Fully optimized for web performance, accessibility, and SEO.

## 6. Support

If you encounter any issues or need further assistance customizing your template:
- Review the HTML developer-guide comments (e.g., hooking up forms, Leaflet.js map integrations) embedded within the template files.
- Ensure you have not broken any CSS variable structures in `style.css`.
- Standard web development knowledge (HTML/CSS/JS) should be sufficient for customization. If you plan to implement robust backend integrations (Firebase, Memberstack), refer to their respective official documentation.
