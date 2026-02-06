import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import React from 'react'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Sudbury Jobs - Landing Page',
  description: "Landing page for Sudbury's platform for jobs, hiring, and workforce services.",
  icons: {
    icon: '/assets/header/Logo.svg',
    shortcut: '/assets/header/Logo.svg',
    apple: '/assets/header/Logo.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className} style={{ '--font': outfit.style.fontFamily } as React.CSSProperties}>
        {children}
        <style>{`
          :root {
            --green: #16a34a;
            --green-dark: #15803d;
            --text: #1a1a1a;
            --text-muted: #6b7280;
            --border: #e5e7eb;
            --bg: #ffffff;
          }

          *, *::before, *::after {
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            margin: 0;
            font-family: var(--font);
            font-size: 1rem;
            line-height: 1.5;
            color: var(--text);
            background: var(--bg);
          }

          a {
            color: inherit;
            text-decoration: none;
          }
        `}</style>
      </body>
    </html>
  )
}
