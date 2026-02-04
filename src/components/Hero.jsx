import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-gradient" />
        <div className="hero-bg-waves" />
      </div>
      <div className="container hero-inner">
        <p className="hero-badge">
          <span className="hero-badge-dot" aria-hidden="true" />
          Serving Greater Sudbury & Northern Ontario
        </p>
        <h1 className="hero-title">
          Sudbury's Platform for<br />
          <span className="hero-title-accent">Jobs, Hiring, and Workforce Services</span>
        </h1>
        <p className="hero-desc">
          Greater Sudbury's unified workforce portal connecting job seekers, employers, and service providers. Access local jobs, training programs, and workforce services all in one secure, accessible platform.
        </p>
        <div className="hero-ctas">
          <a href="/signup" className="btn btn-primary btn-lg hero-cta-primary">
            Get Started <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
          <a href="#how-it-works" className="btn btn-secondary btn-lg hero-cta-secondary">
            How it works <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="hero-partners">
        <div className="container">
          <div className="hero-partners-row">
            {[
              { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/200px-Amazon_Web_Services_Logo.svg.png', fallback: 'AWS', label: 'startup programs' },
              { img: 'https://upload.wikimedia.org/wikipedia/en/d/de/Microsoft_for_Startups_logo.png', fallback: 'MS', label: 'Microsoft For Startups' },
              { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/200px-Nvidia_logo.svg.png', fallback: 'NVIDIA', label: 'INCEPTION PROGRAM' },
              { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/UNICEF_Logo.svg/200px-UNICEF_Logo.svg.png', fallback: 'UNICEF', label: 'startup lab' },
              { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/200px-Amazon_Web_Services_Logo.svg.png', fallback: 'AWS', label: 'startup programs' },
            ].map((p, i) => (
              <div key={i} className="hero-partner-item">
                <img src={p.img} alt="" className="hero-partner-img" width="120" height="36" loading="lazy" onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling?.style && (e.target.nextElementSibling.style.display = 'block') }} />
                <span className="hero-partner-fallback" aria-hidden="true">{p.fallback}</span>
                <span className="hero-partner-label">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
