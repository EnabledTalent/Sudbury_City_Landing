import React from 'react'

const ET_CARDS = [
  { title: 'Role-Based Access Control', desc: 'Secure permissions management', icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></> },
  { title: 'Secure Authentication', desc: 'Email, Google, LinkedIn', icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></> },
  { title: 'Accessibility-First Design', desc: 'WCAG 2.1 AA compliant', icon: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></> },
  { title: 'Data Privacy & Security', desc: 'GDPR / PIPEDA compliant', icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4M12 16h.01"/></> },
  { title: 'Scalable Architecture', desc: 'Built to serve Greater Sudbury', icon: <><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></> },
  { title: 'Northern Ontario Ready', desc: 'Accessible across the region', icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></> },
]

const TRUSTED_ITEMS = [
  { label: 'Verified Employers', icon: <><path d="M16 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z"/><path d="M12 14l3 3 6-6"/></> },
  { label: 'Secure & Compliant', icon: <><path d="M16 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z"/><path d="M12 14l3 3 6-6"/></> },
  { label: 'WCAG AA Certified', icon: <><circle cx="16" cy="10" r="6"/><path d="M8 28c0-4.4 3.6-8 8-8s8 3.6 8 8"/><path d="M16 14v4M14 18h4" strokeLinecap="round"/></> },
  { label: 'Government Trusted', icon: <><path d="M4 28h24V12L16 4 4 12v16z"/><path d="M16 4v8"/><path d="M8 12h16"/><path d="M10 20h4v6h-4zM18 20h4v6h-4z"/></> },
]

const SvgIcon = ({ children, ...props }) => (
  <svg className="et-card-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {children}
  </svg>
)

const TrustedSvg = ({ children }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
)

export default function EnterpriseTrusted() {
  return (
    <section id="enterprise-trusted" className="enterprise-trusted-section">
      <div className="et-accent" aria-hidden="true" />
      <div className="container">
        <div className="enterprise-block">
          <h2 className="et-main-title">Enterprise-Grade Platform</h2>
          <p className="et-subtitle">Built with security, accessibility, and scalability at its core</p>
          <div className="et-cards-grid">
            {ET_CARDS.map(({ title, desc, icon }) => (
              <div key={title} className="et-card">
                <span className="et-card-icon-wrap">
                  <SvgIcon>{icon}</SvgIcon>
                </span>
                <div className="et-card-text">
                  <strong className="et-card-title">{title}</strong>
                  <span className="et-card-desc">{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="trusted-block">
          <h2 className="et-main-title">Trusted by Sudbury Organizations</h2>
          <p className="et-subtitle">A platform built on security, compliance, and community partnerships across Greater Sudbury</p>
          <div className="et-trusted-row">
            {TRUSTED_ITEMS.map(({ label, icon }) => (
              <div key={label} className="et-trusted-item">
                <span className="et-trusted-icon">
                  <TrustedSvg>{icon}</TrustedSvg>
                </span>
                <span className="et-trusted-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
