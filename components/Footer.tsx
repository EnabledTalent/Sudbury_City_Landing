import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <a href="/" className="footer-logo">
            <img src="/assets/header/Logo.svg" alt="" className="footer-logo-img" />
            <span className="footer-logo-text">Sudbury Jobs</span>
          </a>
        </div>

        <div className="footer-mid">
          <nav className="footer-links-left">
            <a href="/accessibility" className="footer-link">Accessibility</a>
            <a href="/privacy" className="footer-link">Privacy Policy</a>
            <a href="/terms" className="footer-link">Terms of Service</a>
            <a href="/contact" className="footer-link">Contact Us</a>
          </nav>

          <nav className="footer-links-right">
            <a href="https://linkedin.com" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://glassdoor.com" className="footer-link" target="_blank" rel="noopener noreferrer">Glassdoor</a>
            <a href="https://twitter.com" className="footer-link" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://instagram.com" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider" />
          <p className="footer-copyright">Sudbury Jobs @2026</p>
        </div>
      </div>

      <style>{`
        .footer-section {
          background-color: #011E18; /* Very dark forest green */
          color: #ffffff;
          padding-block: 5rem 3rem;
          font-family: var(--font);
        }

        .container {
          width: min(100% - 2rem, 1200px);
          margin-inline: auto;
          padding-inline: 1.5rem;
        }

        .footer-top {
          margin-bottom: 12rem;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: #ffffff;
        }

        .footer-logo-img {
          width: 48px;
          height: 48px;
          display: block;
        }

        .footer-logo-text {
          font-size: 24px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0;
          color: #ffffff;
        }

        .footer-mid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .footer-links-left,
        .footer-links-right {
          display: flex;
          gap: clamp(1rem, 2.5vw, 2rem);
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 0.8125rem;
          font-weight: 400;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #ffffff;
        }

        .footer-bottom {
          margin-top: 2rem;
        }

        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          width: 100%;
          margin-bottom: 1.5rem;
        }

        .footer-copyright {
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.4);
          margin: 0;
        }

        @media (max-width: 768px) {
          .footer-mid {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }
          
          .footer-links-left,
          .footer-links-right {
            flex-wrap: wrap;
            gap: 1rem 1.5rem;
          }

          .footer-top {
            margin-bottom: 3rem;
          }

          .footer-section {
            padding-block: 4rem 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .container {
            width: min(100% - 1rem, 1200px);
            padding-inline: 0.75rem;
          }

          .footer-top {
            margin-bottom: 2.25rem;
          }

          .footer-logo-img {
            width: 44px;
            height: 44px;
          }

          .footer-logo-text {
            font-size: 1.05rem;
          }

          .footer-mid {
            gap: 1.75rem;
            margin-bottom: 1.75rem;
          }

          .footer-links-left,
          .footer-links-right {
            flex-direction: column;
            flex-wrap: nowrap;
            gap: 1.25rem;
            width: 100%;
          }

          /* Divider between link groups (matches screenshot) */
          .footer-links-right {
            margin-top: 1.75rem;
            padding-top: 1.75rem;
            position: relative;
          }

          .footer-links-right::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            height: 1px;
            background: rgba(255, 255, 255, 0.1);
          }

          .footer-link {
            font-size: 0.95rem;
          }

          .footer-bottom {
            margin-top: 0;
          }

          .footer-divider {
            margin-bottom: 1.25rem;
          }

          .footer-copyright {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </footer>
  )
}
