import React from 'react'

export default function Stakeholders() {
  return (
    <section className="stakeholders-section" id="stakeholders">
      <span className="stakeholders-accent" aria-hidden="true" />
      <div className="container">
        <h2 className="stakeholders-title">Built for Every Stakeholder</h2>
        <p className="stakeholders-subtitle">
          Role-specific features designed to meet the unique needs of each user type
        </p>
        <div className="stakeholder-cards">
          <article className="stakeholder-card stakeholder-card--seekers">
            <span className="stakeholder-card-icon" aria-hidden="true">
              <img src="/assets/stakeholders/job-seekers.svg" alt="" />
            </span>
            <span className="stakeholder-card-label">Job Seekers</span>
          </article>
          <article className="stakeholder-card stakeholder-card--employers">
            <span className="stakeholder-card-icon" aria-hidden="true">
              <img src="/assets/stakeholders/employers.svg" alt="" />
            </span>
            <span className="stakeholder-card-label">Employers</span>
          </article>
          <article className="stakeholder-card stakeholder-card--providers">
            <span className="stakeholder-card-icon" aria-hidden="true">
              <img src="/assets/stakeholders/service-providers.svg" alt="" />
            </span>
            <span className="stakeholder-card-label">Service Providers</span>
          </article>
        </div>
      </div>
      <style>{`
        .stakeholders-section {
          padding-block: 12rem 4.5rem;
          background: #FCFCFC;
          position: relative;
        }

        .stakeholders-accent {
          display: none;
        }

        .stakeholders-title {
          font-size: 48px;
          font-weight: 700;
          color: #111827;
          text-align: center;
          margin: 0 0 0.5rem;
          letter-spacing: -0.02em;
        }

        .stakeholders-subtitle {
          font-size: 20px;
          color: #9aa3af;
          text-align: center;
          max-width: 900px;

          margin: 0 auto 4.25rem;
          line-height: 1.5;
        }

        .stakeholder-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 1000px;
          margin-inline: auto;
        }

        .stakeholder-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
          padding: 1.75rem 1.5rem;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          min-height: 280px;
        }

        .stakeholder-card--seekers {
          background: #cfe9e5;
          color: #1f2937;
        }

        .stakeholder-card--employers {
          background: #b8c5f2;
          color: #1f2937;
        }

        .stakeholder-card--providers {
          background: #7a12c6;
          color: #ffffff;
        }

        .stakeholder-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          margin-bottom: 0.25rem;
        }

        .stakeholder-card-icon img {
          width: 26px;
          height: 26px;
          display: block;
        }

        .stakeholder-card-label {
          font-size: 1rem;
          font-weight: 700;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 640px) {
          .stakeholder-cards {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}
