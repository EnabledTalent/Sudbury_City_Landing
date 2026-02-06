# Sudbury Jobs - Next.js Landing Page

Landing page for Sudbury's platform for jobs, hiring, and workforce services. Built with **Next.js (App Router)** and **TypeScript**. All styles are embedded via `styled-jsx` in `app/layout.tsx` (no standalone CSS files).

## Tech stack

- **Next.js (latest)** - App Router
- **React (latest)**
- **TypeScript**

## Project structure

```
app/
  layout.tsx        # Root layout + global styles
  page.tsx          # Landing page composition
  global-styles.ts  # Global CSS string
components/         # Page sections
public/             # Static assets
```

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/`.

## Production build

```bash
npm run build
npm run start
```

## Notes

- Anchor links are handled by CSS `scroll-behavior: smooth` in global styles.
- `/login` and `/signup` are placeholder routes for future auth integration.

## License

Private / Sudbury Jobs (c) 2026.
