import React from 'react'

const PARTNERS = ['AWS Startup Programs', 'Microsoft For Startups', 'NVIDIA INCEPTION PROGRAM', 'UNICEF Startup Lab', 'AWS Startup Programs']

export default function Partners() {
  return (
    <section className="partners" aria-label="Partners and programs">
      <div className="container partners-inner">
        <div className="partners-logos">
          {PARTNERS.map((name, i) => (
            <div key={`${name}-${i}`} className="partner-item" title={name}>{name}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
