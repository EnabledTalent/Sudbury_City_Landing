import type { Metadata } from 'next'
import { Outfit, Libre_Baskerville } from 'next/font/google'
import React from 'react'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
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
      <body className={`${outfit.className} ${libreBaskerville.variable}`} style={{ '--font': outfit.style.fontFamily } as React.CSSProperties}>
        {children}
      </body>
    </html>
  )
}
