# Sudbury Jobs – Landing Page

Landing page for Sudbury's platform for jobs, hiring, and workforce services. Built with **React** and **Vite**.

## Tech stack

- **React 18** – UI components
- **Vite 5** – build tool and dev server
- **CSS** – existing `css/styles.css` and `css/components.css` (imported from React app)

## Project structure

```
Sudbury Landing/
├── index.html              # Vite entry (mounts React app)
├── src/
│   ├── main.jsx            # React entry
│   ├── App.jsx             # Main layout and section order
│   ├── index.css           # Global styles + CSS imports
│   └── components/         # Section components
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── HowItWorks.jsx
│       ├── RoleCards.jsx
│       ├── PlatformFeatures.jsx
│       ├── Stakeholders.jsx
│       ├── SeamlessExperience.jsx
│       ├── EmployersProviders.jsx
│       ├── Dashboard.jsx
│       ├── EnterpriseTrusted.jsx
│       ├── Integrations.jsx
│       ├── Partners.jsx
│       ├── CTA.jsx
│       └── Footer.jsx
├── css/
│   ├── styles.css          # Page and section styles
│   └── components.css      # Reusable UI components
├── js/                     # Legacy vanilla JS (optional reference)
├── assets/
├── package.json
├── vite.config.js
└── README.md
```

## Running locally

```bash
npm install
npm run dev
```

Then open **http://localhost:5173/**.

## Build for production

```bash
npm run build
```

Output is in `dist/`. Deploy that folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

```bash
npm run preview
```

Serves the production build locally.

## Connecting login/signup

Auth links use paths so you can plug in your app:

| Element           | Link     | Use |
|-------------------|----------|-----|
| Log In            | `/login` | Your login page |
| Sign Up (header)   | `/signup`| Your signup page |
| Get Started       | `/signup`| Same as Sign Up |

Point these in your router or server when you connect the real auth backend.

## License

Private / Sudbury Jobs ©2026.
