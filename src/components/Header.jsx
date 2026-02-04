import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo">
          <span className="logo-icon" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="currentColor"/>
              <path d="M8 22V14l4-4 4 4 4-4 4 4v8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M16 10v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="logo-text">Sudbury Jobs</span>
        </a>
        <nav className="nav">
          <a href="/login" className="nav-link">Log In</a>
          <a href="/signup" className="btn btn-primary">Sign Up</a>
        </nav>
      </div>
    </header>
  )
}
