import React from 'react'

const CARDS = [
  {
    id: 'seekers',
    label: 'Job Seekers',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="16" r="8" fill="currentColor" />
        <path d="M12 44c0-6.6 5.4-12 12-12s12 5.4 12 12" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'employers',
    label: 'Employers',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="16" r="8" fill="currentColor" />
        <path d="M12 44c0-6.6 5.4-12 12-12s12 5.4 12 12" fill="currentColor" />
        <rect x="18" y="20" width="12" height="10" rx="1" fill="currentColor" />
        <path d="M22 20v-2a2 2 0 0 1 4 0v2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'providers',
    label: 'Service Providers',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="16" r="8" fill="currentColor" />
        <path d="M12 44c0-6.6 5.4-12 12-12s12 5.4 12 12" fill="currentColor" />
        <circle cx="34" cy="26" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M34 23v6M31 26h6M32.5 24.5l3 3M35.5 24.5l-3 3M32.5 27.5l3-3M35.5 27.5l-3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Stakeholders() {
  return (
    <section id="stakeholders" className="stakeholders-section">
      <div className="stakeholders-accent" aria-hidden="true" />
      <div className="container">
        <h2 className="stakeholders-title">Built for Every Stakeholder</h2>
        <p className="stakeholders-subtitle">Role-specific features designed to meet the unique needs of each user type.</p>
        <div className="stakeholder-cards">
          {CARDS.map(({ id, label, icon }) => (
            <div key={id} className={`stakeholder-card stakeholder-card--${id === 'seekers' ? 'seekers' : id === 'employers' ? 'employers' : 'providers'}`}>
              <span className="stakeholder-card-icon" aria-hidden="true">{icon}</span>
              <span className="stakeholder-card-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
