import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import React from 'react'
import './globals.css'

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
      </body>
    </html>
  )
}
