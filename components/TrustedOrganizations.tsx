import React from 'react'

const TRUSTED_ITEMS = [
  { icon: '/assets/trusted/verified employers.svg', label: 'Verified Employers' },
  { icon: '/assets/trusted/secure and compliant.svg', label: 'Secure & Compliant' },
  { icon: '/assets/trusted/wcag aa certified.svg', label: 'WCAG AA Certified' },
  { icon: '/assets/trusted/government trusted.svg', label: 'Government Trusted' },
]

export default function TrustedOrganizations() {
  return (
    <section className="trusted-org-section">
      <div className="container">
        <h2 className="trusted-title">Trusted by Sudbury Organizations</h2>
        <p className="trusted-subtitle">A platform built on security, compliance, and community partnerships across Greater Sudbury</p>
        <div className="trusted-row">
          {TRUSTED_ITEMS.map((item) => (
            <div key={item.label} className="trusted-item">
              <img src={item.icon} alt="" className="trusted-icon" />
              <span className="trusted-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .trusted-org-section {
          padding-block: 6rem 12rem;
          background: #ffffff;
        }

        .container {
          width: min(100% - 2rem, 1100px);
          margin-inline: auto;
          padding-inline: 1.5rem;
        }

        .trusted-title {
          font-size: 48px;
          font-weight: 700;
          color: #111827;
          text-align: center;
          margin: 0 0 1.25rem;
          letter-spacing: -0.02em;
        }

        .trusted-subtitle {
          font-size: 20px;
          color: #6b7280;
          text-align: center;
          max-width: 1100px;
          margin: 0 auto 6rem;
          line-height: 1.5;
        }

        .trusted-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2rem 2.5rem;
          max-width: 1100px;
          margin-inline: auto;
        }

        @media (min-width: 800px) {
          .trusted-row {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 2.5rem;
          }
        }

        .trusted-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
          text-align: center;
        }

        .trusted-icon {
          width: 42px;
          height: 42px;
          display: block;
        }

        .trusted-label {
          font-size: 20px;
          font-weight: 600;
          color: #111827;
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .trusted-org-section {
            padding-block: 2.75rem 3.75rem;
          }

          .container {
            width: min(100% - 1rem, 1100px);
            padding-inline: 0.5rem;
          }

          .trusted-title {
            font-size: 2.25rem;
            line-height: 1.08;
            margin-bottom: 0.9rem;
          }

          .trusted-subtitle {
            font-size: 0.9rem;
            max-width: 320px;
            margin-bottom: 2.5rem;
            line-height: 1.4;
          }

          .trusted-row {
            grid-template-columns: 1fr;
            gap: 3.25rem;
            max-width: 360px;
          }

          .trusted-icon {
            width: 54px;
            height: 54px;
          }

          .trusted-label {
            font-size: 0.95rem;
            white-space: normal;
          }

          .trusted-item {
            gap: 1.1rem;
          }
        }
      `}</style>
    </section>
  )
}
