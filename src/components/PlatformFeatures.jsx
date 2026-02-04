import React from 'react'

const FEATURES = [
  {
    title: 'Unified Sudbury Portal',
    desc: 'Single sign-on access for all Greater Sudbury workforce services. One account, multiple roles, seamless experience across the entire ecosystem.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8v24M8 20h24M12 12l16 16M28 12L12 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Local Hiring Marketplace',
    desc: 'Connect Sudbury employers with qualified local candidates efficiently. Post jobs, browse talent, and manage the complete hiring lifecycle in one place.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 18l6-6 6 6 6-6 6 6v14H8V18z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M20 12v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Integrated Training Pathways',
    desc: 'Access training programs, certifications, and skill-building resources from local institutions. Connect training to employment opportunities in Sudbury.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 22l12-6 12 6v4H8v-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M20 16v-2l-8 4-4 2v2l12-6 12 6v-2l-4-2-8-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    title: 'Sudbury Workforce Services',
    desc: 'Streamlined access to employment services, career counseling, and support programs. All Greater Sudbury workforce resources in a unified interface.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M10 34v-2a10 10 0 0 1 20 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="20" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M20 20v-2M20 28v-2M16 24h-2M26 24h-2M18 18l-1.5-1.5M24 24l1.5 1.5M18 30l-1.5 1.5M24 18l1.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function PlatformFeatures() {
  return (
    <section id="platform-features" className="platform-features">
      <div className="container">
        <h2 className="platform-features-title">One Platform, Unlimited Possibilities</h2>
        <p className="platform-features-subtitle">
          Everything you need for workforce development in Greater Sudbury, all in one accessible platform
        </p>
        <div className="platform-features-grid">
          {FEATURES.map(({ title, desc, icon }) => (
            <div key={title} className="feature-block">
              <span className="feature-icon" aria-hidden="true">{icon}</span>
              <h3 className="feature-block-title">{title}</h3>
              <p className="feature-block-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
