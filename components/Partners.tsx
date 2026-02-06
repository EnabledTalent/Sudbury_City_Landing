import React from 'react'

export default function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="container partners-inner">
        <div className="partners-logos">
          {['Cambrian College', 'Laurentian University', 'FedNor', 'City of Greater Sudbury'].map((label) => (
            <span key={label} className="partner-item">{label}</span>
          ))}
        </div>
      </div>
      <style>{`
        .container {
          width: min(100% - 2rem, 1100px);
          margin-inline: auto;
          padding-inline: 1.5rem;
        }

        .partners {
          padding-block: 3rem 4rem;
          border-top: 1px solid #e5e7eb;
        }

        .partners-inner {
          max-width: 900px;
          margin-inline: auto;
        }

        .partners-logos {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 2rem 3rem;
        }

        .partner-item {
          font-size: 0.8125rem;
          font-weight: 500;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .partner-item::before {
          content: '';
          display: block;
          width: 100px;
          height: 28px;
          margin-bottom: 0.5rem;
          background: #e5e7eb;
          border-radius: 4px;
        }
      `}</style>
    </section>
  )
}
