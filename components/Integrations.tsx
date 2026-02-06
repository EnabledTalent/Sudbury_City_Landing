'use client'

import React from 'react'

const ATS_LOGOS = [
  { name: 'LinkedIn', src: '/assets/compatible/Linkedin.svg', label: 'LinkedIn' },
  { name: 'Lever', src: '/assets/compatible/lever.svg', label: 'Lever' },
  { name: 'Greenhouse', src: '/assets/compatible/greenhouse.svg', label: 'Greenhouse' },
  { name: 'Workable', src: '/assets/compatible/workable.svg', label: 'Workable' },
  { name: 'Findem', src: '/assets/compatible/findem.svg', label: 'Findem' },
  { name: 'Workday', src: '/assets/compatible/workday.svg', label: 'Workday' },
  { name: 'GitHub', src: '/assets/compatible/github.png', label: 'GitHub' },
  { name: 'Indeed', src: '/assets/compatible/indeed.png', label: 'indeed' },
  { name: 'Recruit CRM', src: '/assets/compatible/recruitcrm.png', label: 'recruit crm' },
  { name: 'Personio', src: '/assets/compatible/personio.png', label: 'Personio' },
  { name: 'Teamtailor', src: '/assets/compatible/teamtailor.png', label: 'Teamtailor' },
  { name: 'ADP Workforce Now', src: '/assets/compatible/adpwn.png', label: 'ADP Workforce Now' },
]

type IntegrationCardProps = {
  name: string
  domain?: string
  src?: string
  label: string
  isBottomRow?: boolean
}

function IntegrationCard({ name, domain, src, label, isBottomRow = false }: IntegrationCardProps) {
  const logoUrl = src ?? `https://logo.clearbit.com/${domain}`

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = event.currentTarget
    target.style.display = 'none'
    const fallback = target.nextElementSibling as HTMLElement | null
    if (fallback) fallback.style.display = 'block'
  }

  return (
    <div className="integrations-card" title={name}>
      <img
        src={logoUrl}
        alt=""
        className={`integrations-card__img ${isBottomRow ? 'integrations-card__img--bottom' : ''} ${name === 'Recruit CRM' ? 'integrations-card__img--recruitcrm' : ''}`}
        loading="lazy"
        onError={handleError}
      />
      <span className="integrations-card__fallback" aria-hidden="true">{label}</span>
    </div>
  )
}

export default function Integrations() {
  return (
    <section className="integrations-section" aria-labelledby="integrations-heading">
      <div className="integrations-section__bg" aria-hidden="true" />
      <div className="container integrations-section__inner">
        <h2 id="integrations-heading" className="integrations-section__title">
          Compatible with <span className="integrations-title-line integrations-title-line--nowrap">Industry-Standard</span>{' '}
          <span className="integrations-title-line">Hiring Systems</span>
        </h2>
        <p className="integrations-section__desc">
          The platform supports integration with commonly used applicant tracking and workforce management<br />
          systems, enabling employers to participate using their existing hiring infrastructure while maintaining<br />
          secure, compliant data exchange.
        </p>
        <div className="integrations-section__grid">
          {ATS_LOGOS.map((item, index) => (
            <IntegrationCard key={item.name} {...item} isBottomRow={index >= 6} />
          ))}
        </div>
      </div>
      <style>{`
        .integrations-section {
          position: relative;
          padding-block: 6rem 8.5rem;
          overflow: hidden;
        }

        .integrations-section__bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, #CAFFDF 0%, #ffffff 70%);
          pointer-events: none;
        }

        .integrations-section__inner {
          position: relative;
          z-index: 1;
        }

        .integrations-section__title {
          font-size: 48px;
          font-weight: 700;
          color: #000000;
          text-align: center;
          margin: 0 0 1rem;
        }

        .integrations-title-line {
          display: inline;
        }

        .integrations-title-line--nowrap {
          white-space: nowrap;
        }

        .integrations-section__desc {
          font-size: 20px;
          font-weight: 400;
          color: #6b7280;
          text-align: center;
          max-width: 1100px;
          margin: 0 auto 5.5rem;
          line-height: 1.6;
        }

        .integrations-section__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          max-width: 960px;
          margin-inline: auto;
        }

        @media (min-width: 600px) {
          .integrations-section__grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 900px) {
          .integrations-section__grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 2.25rem 1.25rem;
          }
        }

        .integrations-card {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          aspect-ratio: 1.7 / 1;
          padding: 1rem;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
          position: relative;
        }

        .integrations-card__img {
          display: block;
          max-height: 52px;
          max-width: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          transform: scale(1.0);
          transform-origin: center;
        }

        .integrations-card__img--bottom {
          transform: scale(1.7);
        }

        .integrations-card__img--recruitcrm {
          transform: scale(2.1);
        }

        .integrations-card__fallback {
          display: none;
          font-size: 0.8125rem;
          font-weight: 500;
          color: #374151;
          text-align: center;
        }

        @media (max-width: 640px) {
          .integrations-section {
            padding-block: 3rem 3.75rem;
          }

          .container {
            width: min(100% - 1rem, 1100px);
            padding-inline: 0.5rem;
          }

          .integrations-section__title {
            font-size: 2.55rem;
            line-height: 1.1;
            max-width: 320px;
            margin: 0 auto 1.25rem;
            letter-spacing: -0.02em;
          }

          .integrations-title-line {
            display: block;
          }

          .integrations-section__desc {
            font-size: 0.95rem;
            line-height: 1.55;
            max-width: 330px;
            margin: 0 auto 2.25rem;
          }
        }
      `}</style>
    </section>
  )
}
