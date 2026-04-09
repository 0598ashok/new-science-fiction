# Science Fiction / Fantasy Author HTML Template

A professional, production-ready HTML template built for science fiction and fantasy authors.

## Features
- **Semantic HTML5** & **Modular CSS Variables**
- **Mobile-first Responsive Design** (scales to all modern devices)
- **Deep Cosmic Purple & Mystic Gold Theme** (designed for sci-fantasy vibe)
- **Dark/Light Mode Support** (toggle built into navbar)
- **RTL Language Support** (`rtl.css` included)
- **Custom Members Vault & Dashboard** layouts for superfans
- **12+ Fully Coded Pages** (Home, Books, World, Blog, Events, Auth, etc.)

## 1. Installation

This is a static HTML template. No Node.js, NPM, or build step is required.
1. Clone or download this repository.
2. Open `pages/index.html` in your web browser to view the site locally.
3. Edit the files in your preferred code editor (like VS Code).
4. Replace placeholder images in `assets/images/` with your own assets.
5. Deploy directly to Vercel, GitHub Pages, Netlify, or any standard web host.

## 2. Customization

To change the primary colors, font stack, or general spacing, edit the `:root` variables at the top of `assets/css/style.css`.
Dark mode overrides are handled in `assets/css/dark-mode.css` and RTL styles are managed in `assets/css/rtl.css`.
You can also update your logo and favicon by replacing the files in `assets/images/ui/`.

## 3. Page Structure
```text
author-template/
├── assets/
│   ├── css/       (style.css, dark-mode.css, rtl.css)
│   ├── js/        (main.js, dashboard.js)
│   ├── images/    (hero/, ui/, content/)
│   └── fonts/
├── pages/
│   ├── index.html & index-2.html    (Home Pages)
│   ├── about.html, books.html, book-details.html, the-world.html, blog.html, blog-post.html, events.html, contact.html
│   ├── dashboard.html, vault.html   (User Dashboard & Premium Content)
│   ├── login.html, register.html    (Auth)
│   └── 404.html, coming-soon.html
├── documentation/
│   └── README.md
└── README.md
```

## 4. Credits

- **Fonts:** Cinzel and Inter (Local self-hosted).
- **Icons & Images:** Royalty-free placeholders.

## 5. Changelog

**v1.0.0**
- Initial release with 12+ pages, Dark Mode, RTL support, and mobile-first responsive design.

## 6. Support

For detailed developer notes, integration suggestions (like dynamic forms or interactive maps), and advanced customization guides, please refer to the comprehensive documentation located here:
`documentation/README.md`
