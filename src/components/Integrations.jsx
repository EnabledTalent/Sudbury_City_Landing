import React from 'react'
import './Integrations.css'

const ATS_LOGOS = [
  { name: 'LinkedIn', domain: 'linkedin.com', label: 'LinkedIn' },
  { name: 'Lever', domain: 'lever.co', label: 'LEVER' },
  { name: 'Greenhouse', domain: 'greenhouse.io', label: 'greenhouse' },
  { name: 'Workable', domain: 'workable.com', label: 'workable' },
  { name: 'Findem', domain: 'findem.ai', label: 'findem' },
  { name: 'Workday', domain: 'workday.com', label: 'workday.' },
  { name: 'GitHub', domain: 'github.com', label: 'GitHub' },
  { name: 'Indeed', domain: 'indeed.com', label: 'indeed' },
  { name: 'Recruit CRM', domain: 'recruitcrm.io', label: 'recruit crm' },
  { name: 'Personio', domain: 'personio.com', label: 'Personio' },
  { name: 'Teamtailor', domain: 'teamtailor.com', label: 'Teamtailor' },
  { name: 'ADP Workforce Now', domain: 'adp.com', label: 'ADP Workforce Now' },
]

function IntegrationCard({ name, domain, label }) {
  const logoUrl = `https://logo.clearbit.com/${domain}`
  return (
    <div className="integrations-card" title={name}>
      <img
        src={logoUrl}
        alt=""
        className="integrations-card__img"
        loading="lazy"
        onError={(e) => {
          e.target.style.display = 'none'
          const fallback = e.target.nextElementSibling
          if (fallback) fallback.style.display = 'block'
        }}
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
          Compatible with Industry-Standard Hiring Systems
        </h2>
        <p className="integrations-section__desc">
          The platform supports integration with commonly used applicant tracking and workforce management systems, enabling employers to participate using their existing hiring infrastructure while maintaining secure, compliant data exchange.
        </p>
        <div className="integrations-section__grid">
          {ATS_LOGOS.map((item) => (
            <IntegrationCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
