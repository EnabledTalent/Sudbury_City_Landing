import React from 'react'

const PARTNERS = [
  { src: '/assets/hero/aws-startup.png', alt: 'AWS Startup Programs' },
  { src: '/assets/hero/microsoft-startups.png', alt: 'Microsoft for Startups' },
  { src: '/assets/hero/nvidia.png', alt: 'NVIDIA Inception Program' },
  { src: '/assets/hero/unicef-startup-lab.png', alt: 'UNICEF Startup Lab' },
  { src: '/assets/hero/aws-startup.png', alt: 'AWS Startup Programs' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-gradient" />
        <div className="hero-bg-waves" />
      </div>

      <div className="hero-main-container">
        <div className="container hero-inner">
          <p className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            Serving Greater Sudbury & Northern Ontario
          </p>
          <h1 className="hero-title">
            Sudbury&apos;s Platform <br className="mobile-only" />
            for <br className="mobile-only" />
            <br className="desktop-only" />
            <span className="hero-title-accent">Jobs, Hiring, and <br className="mobile-only" /> Workforce Services</span>
          </h1>
          <p className="hero-desc">
            Greater Sudbury&apos;s unified workforce portal <br className="mobile-only" />
            connecting job seekers, employers, and service <br className="mobile-only" />
            providers. <br className="desktop-only" /> Access local jobs, training programs, and <br className="mobile-only" />
            workforce services all in one secure, accessible <br className="mobile-only" />
            platform.
          </p>
          <div className="hero-ctas">
            <a href="/signup" className="btn-pill btn-primary-pill">
              Get Started →
            </a>
            <a href="#how-it-works" className="btn-pill btn-secondary-pill">
              How it works →
            </a>
          </div>
        </div>

        <div className="hero-partners">
          <div className="container">
            <div className="hero-partners-row">
              {PARTNERS.map((partner, index) => (
                <div key={`${partner.alt}-${index}`} className="hero-partner-item">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="hero-partner-img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .mobile-only {
          display: none !important;
        }

        .desktop-only {
          display: initial !important;
        }

        .container {
          width: min(100% - 2rem, 1100px);
          margin-inline: auto;
          padding-inline: 1.5rem;
        }

        .hero {
          position: relative;
          height: calc(100vh - 64px);
          min-height: 580px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          background: #ffffff;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .hero-bg-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 25%, rgba(216, 255, 232, 0.45) 0%, rgba(255, 255, 255, 0) 55%);
        }

        .hero-bg-waves {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 240'%3E%3Cg fill='none' stroke='%239de7ba' stroke-width='0.8' stroke-opacity='0.45'%3E%3Cpath d='M0 40 Q150 10 300 40 T600 40 T900 40 T1200 40'/%3E%3Cpath d='M0 70 Q150 40 300 70 T600 70 T900 70 T1200 70'/%3E%3Cpath d='M0 100 Q150 70 300 100 T600 100 T900 100 T1200 100'/%3E%3Cpath d='M0 130 Q150 100 300 130 T600 130 T900 130 T1200 130'/%3E%3Cpath d='M0 160 Q150 130 300 160 T600 160 T900 160 T1200 160'/%3E%3Cpath d='M0 190 Q150 160 300 190 T600 190 T900 190 T1200 190'/%3E%3Cpath d='M0 220 Q150 190 300 220 T600 220 T900 220 T1200 220'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 1400px 280px;
          background-repeat: repeat;
          background-position: center;
          opacity: 0.5;
        }

        .hero-main-container {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 1rem;
        }

        .hero-inner {
          max-width: 1100px;
          margin-inline: auto;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-badge {
          display: inline-flex;
          align-self: center;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #039855;
          margin-bottom: 2.5rem;
          padding: 0.35rem 1rem;
          background: #ecfdf3;
          border: 1px solid #d1fadf;
          border-radius: 999px;
        }

        .hero-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #12b76a;
          box-shadow: 0 0 0 3px rgba(18, 183, 106, 0.1);
        }

        .hero-title {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.1;
          color: #0a0a0a;
          margin: 0 0 1.5rem;
          letter-spacing: -0.025em;
        }

        .hero-title span {
          display: block;
        }

        .hero-title-accent {
          color: #16a34a;
        }

        .hero-desc {
          font-size: 20px;
          color: #727a85;
          line-height: 1.5;
          max-width: 1000px;
          margin: 0 auto 2.5rem;
        }

        .hero-ctas {
          display: flex;
          gap: 2rem;
          justify-content: center;
          align-items: center;
        }

        .btn-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-weight: 600;
          font-size: 0.8rem;
          padding: 0.65rem 1.5rem;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-primary-pill {
          background: linear-gradient(180deg, #00cb53 0%, #00e75e 100%) padding-box,
                      linear-gradient(to bottom, #00EE5C, #008835) border-box;
          color: #ffffff;
          border: 1px solid transparent;
          box-shadow: 0 10px 25px rgba(0, 203, 83, 0.25);
        }

        .btn-primary-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(0, 203, 83, 0.35);
        }

        .btn-secondary-pill {
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(to bottom, #00EE5C, #008835) border-box;
          color: #1a1a1a;
          border: 1px solid transparent;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .btn-secondary-pill:hover {
          background: #fdfdfd;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 231, 94, 0.15);
        }

        .hero-partners {
           padding-block: 2rem 2.5rem;
        }

        .hero-partners-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 2.5rem 4rem;
        }

        .hero-partner-item {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-partner-img {
          display: block;
          max-height: 44px;
          width: auto;
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .mobile-only {
            display: initial !important; /* Changed from none */
          }

          .desktop-only {
            display: none !important; /* Changed from initial */
          }

          .hero {
            height: auto;
            min-height: 100vh;
            padding-block: 4.75rem 3.5rem;
          }

          .hero-main-container {
            padding-top: 0;
          }

          .hero-inner {
            padding-bottom: 2.75rem;
            width: 100%;
          }

          .hero-badge {
            margin-bottom: 1.1rem;
            font-size: 0.9rem;
            padding: 0.55rem 1.25rem;
          }

          .hero-title {
            font-size: 2.15rem;
            line-height: 1.25;
            margin-bottom: 1.6rem;
          }

          .hero-title span {
            display: inline;
          }

          .hero-desc {
            font-size: 14px;
            padding-inline: 1.15rem;
            margin-bottom: 3rem;
            line-height: 1.6;
            max-width: 360px;
          }

          .hero-ctas {
            flex-direction: column;
            width: 100%;
            max-width: 340px;
            margin: 0 auto;
            gap: 1rem;
          }

          .btn-pill {
            width: 100%;
            font-size: 0.95rem;
            padding-block: 0.9rem;
            border-radius: 12px;
          }

          .btn-primary-pill {
            box-shadow: 0 4px 15px rgba(0, 203, 83, 0.3);
          }

          .btn-secondary-pill {
            background: #f8f8f8 !important;
            border: 1.5px solid #10b981 !important;
            color: #333333 !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }

          .hero-partners {
            padding-top: 2rem;
          }

          .hero-partners-row {
            flex-wrap: nowrap;
            justify-content: space-between;
            gap: 1.25rem;
          }

          .hero-partner-item:nth-child(n+4) {
             display: none;
          }

          .hero-partner-item {
            flex: 1;
            min-width: 0;
          }

          .hero-partner-img {
            max-height: 40px;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
