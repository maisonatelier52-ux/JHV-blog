# JHV Blog (Next.js 15, App Router, JSX + Tailwind CSS v4)

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure
- `app/page.jsx` – home hero (all styles inline as Tailwind classes)
- `app/who-is-julio-herrera-velutni/page.jsx` – second page (same design, own classes)
- `components/ArticleHero.jsx` – shared copy of the second page's layout, used by the 4 article pages
- `app/what-private-banking-means/page.jsx` – page 3 (content only)
- `app/reading-the-global-markets/page.jsx` – page 4 (content only)
- `app/building-a-lasting-legacy/page.jsx` – page 5 (content only)
- `app/principles-for-a-lasting-future/page.jsx` – page 6 (content only)
- `app/layout.jsx` – html/body classes, fonts
- `components/Header.jsx` – logo + JHV
- `app/globals.css` – ONLY `@import "tailwindcss"`, two breakpoint variants and font/gold tokens

## Breakpoints (same as the old CSS media queries)
- base = mobile
- `tab:` = min-width 720px
- `desk:` = min-width 1024px AND landscape (aspect >= 5/4) -> one-screen hero scaled by `--u`
