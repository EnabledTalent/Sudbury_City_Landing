import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <img src="/assets/header/Logo.svg" alt="" className="logo-mark" width={32} height={32} />
          <span className="logo-text">Sudbury Jobs</span>
        </Link>
        <nav className="nav">
          <Link href="/login" className="nav-link">Log In</Link>
          <Link href="/signup" className="btn btn-primary btn-header">Sign Up</Link>
        </nav>
      </div>
      <style>{`
        .container {
          width: min(100% - 2rem, 1100px);
          margin-inline: auto;
          padding-inline: 1.5rem;
        }

        .header {
          padding-block: 0.75rem;
          border-bottom: 1px solid #e6e6e6;
          background: #ffffff;
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          font-weight: 600;
          font-size: 0.95rem;
          color: #1a1a1a;
        }

        .logo-mark {
          display: block;
          width: 32px;
          height: 32px;
        }

        .logo-text {
          letter-spacing: -0.01em;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .nav-link {
          font-weight: 500;
          font-size: 0.8125rem;
          color: #1a1a1a;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: var(--font);
          font-weight: 600;
          font-size: 0.8125rem;
          padding: 0.4rem 0.9rem;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          background: #16a34a;
          color: #ffffff;
        }

        .btn-header {
          color: #ffffff;
        }

        .header .btn-primary {
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .header {
            padding-block: 0.5rem;
          }

          .nav-link {
            display: none;
          }

          .btn-header {
            padding: 0.5rem 1.25rem;
            border-radius: 10px;
            font-size: 0.85rem;
            background: #039855;
            box-shadow: 0 4px 10px rgba(3, 152, 85, 0.2);
          }

          .logo-text {
            font-size: 1.1rem;
          }

          .logo-mark {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </header>
  )
}
