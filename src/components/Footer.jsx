import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <span className="footer-logo-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="6" fill="currentColor"/>
                <path d="M8 22V14l4-4 4 4 4-4 4 4v8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M16 10v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="footer-logo-text">Sudbury Jobs</span>
          </a>
          <p className="footer-copy">Sudbury Jobs ©2026</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <a href="#accessibility">Accessibility</a>
          <span className="footer-sep" aria-hidden="true">|</span>
          <a href="#privacy">Privacy Policy</a>
          <span className="footer-sep" aria-hidden="true">|</span>
          <a href="#terms">Terms of Service</a>
          <span className="footer-sep" aria-hidden="true">|</span>
          <a href="#contact">Contact Us</a>
          <span className="footer-sep" aria-hidden="true">|</span>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="footer-sep" aria-hidden="true">|</span>
          <a href="#" target="_blank" rel="noopener noreferrer">Glassdoor</a>
          <span className="footer-sep" aria-hidden="true">|</span>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X Twitter">X</a>
          <span className="footer-sep" aria-hidden="true">|</span>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        </nav>
      </div>
    </footer>
  )
}
