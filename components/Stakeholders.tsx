'use client'

import React, { useState } from 'react'

const FEATURES = {
  seekers: [
    'Advanced job search with personalized recommendations',
    'Access training programs and certifications from local institutions',
    'Build and manage your professional profile',
    'Track applications and interview schedules in one place',
    'Receive career counseling and support services',
    'Get matched with opportunities in Greater Sudbury',
  ],
  employers: [
    'Post job openings and reach qualified Sudbury candidates',
    'Track candidate pipeline and hiring analytics',
    'Integrate with Sudbury workforce development programs',
    'Manage applicants with streamlined workflows',
    'Access local talent pools and skill databases',
    'Receive support for diversity hiring initiatives',
  ],
  providers: [
    'List programs and services in the Sudbury directory',
    'Track client progress and outcomes',
    'Coordinate with other Sudbury service providers',
    'Manage referrals from employers and job seekers',
    'Schedule appointments and manage calendars',
    'Generate reports and track program effectiveness',
  ],
}

type Role = 'seekers' | 'employers' | 'providers'

export default function Stakeholders() {
  const [flipped, setFlipped] = useState({ seekers: false, employers: false, providers: false })

  const toggleFlip = (role: Role) => {
    setFlipped((prev) => ({ ...prev, [role]: !prev[role] }))
  }

  const onCardKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, role: Role) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleFlip(role)
    }
  }

  return (
    <section className="stakeholders-section" id="stakeholders">
      <span className="stakeholders-accent" aria-hidden="true" />
      <div className="container">
        <h2 className="stakeholders-title">Built for Every Stakeholder</h2>
        <p className="stakeholders-subtitle">
          Role-specific features designed to meet the unique needs of each user type
        </p>

        <div className="stakeholder-cards">
          <div
            className="stakeholder-card-container"
            role="button"
            tabIndex={0}
            aria-label="Toggle details for Job Seekers"
            aria-pressed={flipped.seekers}
            onClick={() => toggleFlip('seekers')}
            onKeyDown={(event) => onCardKeyDown(event, 'seekers')}
          >
            <div className={`stakeholder-card-inner ${flipped.seekers ? 'is-flipped' : ''}`}>
              <article className="stakeholder-card-face stakeholder-card-front stakeholder-card--seekers">
                <span className="stakeholder-card-icon" aria-hidden="true">
                  <img src="/assets/stakeholders/job-seekers.svg" alt="" />
                </span>
                <span className="stakeholder-card-label">Job Seekers</span>
              </article>
              <article className="stakeholder-card-face stakeholder-card-back stakeholder-card--seekers">
                <ul className="stakeholder-features-list">
                  {FEATURES.seekers.map((feature, i) => (
                    <li key={i}>
                      <span className="checkmark" aria-hidden="true">{'\u2713'}</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>

          <div
            className="stakeholder-card-container"
            role="button"
            tabIndex={0}
            aria-label="Toggle details for Employers"
            aria-pressed={flipped.employers}
            onClick={() => toggleFlip('employers')}
            onKeyDown={(event) => onCardKeyDown(event, 'employers')}
          >
            <div className={`stakeholder-card-inner ${flipped.employers ? 'is-flipped' : ''}`}>
              <article className="stakeholder-card-face stakeholder-card-front stakeholder-card--employers">
                <span className="stakeholder-card-icon" aria-hidden="true">
                  <img src="/assets/stakeholders/employers.svg" alt="" />
                </span>
                <span className="stakeholder-card-label">Employers</span>
              </article>
              <article className="stakeholder-card-face stakeholder-card-back stakeholder-card--employers">
                <ul className="stakeholder-features-list">
                  {FEATURES.employers.map((feature, i) => (
                    <li key={i}>
                      <span className="checkmark" aria-hidden="true">{'\u2713'}</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>

          <div
            className="stakeholder-card-container"
            role="button"
            tabIndex={0}
            aria-label="Toggle details for Service Providers"
            aria-pressed={flipped.providers}
            onClick={() => toggleFlip('providers')}
            onKeyDown={(event) => onCardKeyDown(event, 'providers')}
          >
            <div className={`stakeholder-card-inner ${flipped.providers ? 'is-flipped' : ''}`}>
              <article className="stakeholder-card-face stakeholder-card-front stakeholder-card--providers">
                <span className="stakeholder-card-icon" aria-hidden="true">
                  <img src="/assets/stakeholders/service-providers.svg" alt="" />
                </span>
                <span className="stakeholder-card-label">Service Providers</span>
              </article>
              <article className="stakeholder-card-face stakeholder-card-back stakeholder-card--providers">
                <ul className="stakeholder-features-list">
                  {FEATURES.providers.map((feature, i) => (
                    <li key={i}>
                      <span className="checkmark" aria-hidden="true">{'\u2713'}</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .stakeholders-section {
          padding-block: 12rem 4.5rem;
          background: #fcfcfc;
          position: relative;
        }

        .stakeholders-title {
          font-family: var(--font-serif), serif;
          font-size: 48px;
          font-weight: 700;
          color: #111827;
          text-align: center;
          margin: 0 0 0.5rem;
          letter-spacing: -0.01em;
        }

        .stakeholders-subtitle {
          font-family: var(--font);
          font-size: 20px;
          font-weight: 300;
          color: #333333;
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

        .stakeholder-card-container {
          perspective: 1000px;
          min-height: 360px;
          cursor: pointer;
        }

        .stakeholder-card-container:focus-visible {
          outline: 3px solid #14532d;
          outline-offset: 4px;
          border-radius: 18px;
        }

        .stakeholder-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .stakeholder-card-inner.is-flipped {
          transform: rotateY(180deg);
        }

        .stakeholder-card-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          border-radius: 16px;
          padding: 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .stakeholder-card-front {
          align-items: flex-start;
          gap: 0.5rem;
        }

        .stakeholder-card-back {
          transform: rotateY(180deg);
          justify-content: flex-start;
        }

        .stakeholder-card--seekers {
          background: linear-gradient(135deg, #E8E8E8 0%, #F5F5F5 100%);
          color: #111827;
        }

        .stakeholder-card--employers {
          background: linear-gradient(135deg, #E4D8CC 0%, #F8EFE7 100%);
          color: #111827;
        }

        .stakeholder-card--providers {
          background: linear-gradient(135deg, #084E3B 0%, #168466 100%);
          color: #ffffff;
        }

        .stakeholder-card-icon {
          margin-bottom: 0.25rem;
        }

        .stakeholder-card-icon img {
          width: 32px;
          height: 32px;
          display: block;
        }

        .stakeholder-card-label {
          font-family: var(--font-serif), serif;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .stakeholder-features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .stakeholder-features-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-family: var(--font);
          font-size: 0.95rem;
          line-height: 1.4;
          font-weight: 300;
          color: #333333;
        }

        .checkmark {
          color: #111827;
          font-weight: 700;
        }

        .stakeholder-card--providers .checkmark {
          color: #ffffff;
        }

        @media (min-width: 640px) {
          .stakeholder-cards {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 639px) {
          .stakeholders-title {
            font-size: 2.6rem;
            line-height: 1.12;
          }

          .stakeholders-section {
            padding-top: 4.5rem;
          }

          .stakeholder-card-container {
            perspective: none;
            min-height: auto;
            cursor: default;
          }

          .stakeholder-card-inner {
            transform: none !important;
            transition: none !important;
            transform-style: flat;
            display: flex;
            flex-direction: column;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }

          .stakeholder-card-face {
            position: relative;
            transform: none !important;
            backface-visibility: visible;
            box-shadow: none;
            border-radius: 0;
            padding: 1.5rem 1.25rem;
          }

          .stakeholder-card-front {
            padding-bottom: 0.75rem;
          }

          .stakeholder-card-back {
            padding-top: 0.75rem;
          }
        }
      `}</style>
    </section>
  )
}

