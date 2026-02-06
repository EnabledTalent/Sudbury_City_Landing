import React from 'react'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-bg-waves" aria-hidden="true" />
      <div className="container cta-inner">
        <h2 className="cta-title">Ready to Transform Sudbury's Workforce?</h2>
        <p className="cta-desc">
          Join Greater Sudbury's unified platform connecting job seekers, employers, and service providers.
          <br />
          Start building our community's workforce ecosystem today.
        </p>
        <a href="/signup" className="cta-btn">
          Join Sudbury Jobs <span className="cta-btn-arrow">→</span>
        </a>
      </div>
      <style>{`
        .container {
          width: min(100% - 2rem, 1100px);
          margin-inline: auto;
          padding-inline: 1.5rem;
        }

        .cta-section {
          padding-block: 8.5rem 9rem;
          background-color: #00DF3B;
          background-image: linear-gradient(135deg, #00DF3B 0%, #00C853 100%);
          position: relative;
          overflow: hidden;
          color: #ffffff;
        }

        .cta-bg-waves {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' preserveAspectRatio='none'%3E%3Cg fill='none' stroke='white' stroke-opacity='0.1' stroke-width='0.8'%3E%3Cpath d='M-100 200 C 0 100, 200 300, 400 200 S 800 100, 900 200'/%3E%3Cpath d='M-100 220 C 0 120, 200 320, 400 220 S 800 120, 900 220'/%3E%3Cpath d='M-100 240 C 0 140, 200 340, 400 240 S 800 140, 900 240'/%3E%3Cpath d='M-100 260 C 0 160, 200 360, 400 260 S 800 160, 900 260'/%3E%3Cpath d='M-100 180 C 0 80, 200 280, 400 180 S 800 80, 900 180'/%3E%3Cpath d='M-100 160 C 0 60, 200 260, 400 160 S 800 60, 900 160'/%3E%3Cpath d='M-100 140 C 0 40, 200 240, 400 140 S 800 40, 900 140'/%3E%3Cpath d='M-100 280 C 0 180, 200 380, 400 280 S 800 180, 900 280'/%3E%3Cpath d='M-100 300 C 0 200, 200 400, 400 300 S 800 200, 900 300'/%3E%3Cpath d='M-100 120 C 0 20, 200 220, 400 120 S 800 20, 900 120'/%3E%3Cpath d='M-100 100 C 0 0, 200 200, 400 100 S 800 0, 900 100'/%3E%3Cpath d='M-100 320 C 0 220, 200 420, 400 320 S 800 220, 900 320'/%3E%3Cpath d='M-100 340 C 0 240, 200 440, 400 340 S 800 240, 900 340'/%3E%3Cpath d='M-100 80 C 0 -20, 200 180, 400 80 S 800 -20, 900 80'/%3E%3Cpath d='M-100 60 C 0 -40, 200 160, 400 60 S 800 -40, 900 60'/%3E%3C/g%3E%3C/svg%3E");
          background-size: cover;
          opacity: 1;
          pointer-events: none;
        }

        .cta-inner {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 1000px;
          margin-inline: auto;
        }

        .cta-title {
          font-size: clamp(1.8rem, 4.5vw, 2.75rem);
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 1.25rem;
          line-height: 1;
          letter-spacing: 0;
          white-space: nowrap;
        }

        .cta-desc {
          font-size: clamp(1rem, 1.8vw, 1.125rem);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin: 0 0 2.5rem;
          max-width: 900px;
          margin-inline: auto;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          font-family: var(--font);
          font-size: 1rem;
          font-weight: 400;
          color: #2B302D;
          background: linear-gradient(180deg, #F2F2F2 0%, #FFFFFF 100%);
          padding: 1rem 2.25rem;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          cursor: pointer;
          text-decoration: none;
          line-height: 1;
          letter-spacing: 0;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .cta-btn:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.15);
        }

        .cta-btn-arrow {
          font-size: 1.25rem;
          transition: transform 0.2s ease;
        }

        .cta-btn:hover .cta-btn-arrow {
          transform: translateX(4px);
        }

        .desktop-only {
          display: block;
        }

        @media (max-width: 768px) {
          .cta-section {
            padding-block: 5rem;
          }
          .desktop-only {
            display: none;
          }
          .cta-title {
            font-size: 1.85rem;
            white-space: normal;
          }
        }
      `}</style>
    </section>
  )
}
