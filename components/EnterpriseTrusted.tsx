import React from 'react'

export default function EnterpriseTrusted() {
  return (
    <section className="enterprise-trusted-section">
      <div className="container">
        <div className="enterprise-block">
          <h2 className="et-main-title">Enterprise-Grade Platform</h2>
          <p className="et-subtitle">Built with security, accessibility, and scalability at its core</p>
          <div className="et-cards-grid">
            <div className="et-card">
              <span className="et-card-icon-wrap" aria-hidden="true">
                <img className="et-card-icon" src="/assets/enterprise/role based access controll.svg" alt="" />
              </span>
              <div className="et-card-text">
                <strong className="et-card-title">Role-Based Access Control</strong>
                <span className="et-card-desc">Secure permissions management</span>
              </div>
            </div>
            <div className="et-card">
              <span className="et-card-icon-wrap" aria-hidden="true">
                <img className="et-card-icon" src="/assets/enterprise/secure authentication.svg" alt="" />
              </span>
              <div className="et-card-text">
                <strong className="et-card-title">Secure Authentication</strong>
                <span className="et-card-desc">Email, Google, LinkedIn</span>
              </div>
            </div>
            <div className="et-card">
              <span className="et-card-icon-wrap" aria-hidden="true">
                <img className="et-card-icon" src="/assets/enterprise/accessibility first design.svg" alt="" />
              </span>
              <div className="et-card-text">
                <strong className="et-card-title">Accessibility-First Design</strong>
                <span className="et-card-desc">WCAG 2.1 AA compliant</span>
              </div>
            </div>
            <div className="et-card">
              <span className="et-card-icon-wrap" aria-hidden="true">
                <img className="et-card-icon" src="/assets/enterprise/data privacy and security.svg" alt="" />
              </span>
              <div className="et-card-text">
                <strong className="et-card-title">Data Privacy & Security</strong>
                <span className="et-card-desc">GDPR / PIPEDA compliant</span>
              </div>
            </div>
            <div className="et-card">
              <span className="et-card-icon-wrap" aria-hidden="true">
                <img className="et-card-icon" src="/assets/enterprise/scalable architecture.svg" alt="" />
              </span>
              <div className="et-card-text">
                <strong className="et-card-title">Scalable Architecture</strong>
                <span className="et-card-desc">Built to serve Greater Sudbury</span>
              </div>
            </div>
            <div className="et-card">
              <span className="et-card-icon-wrap" aria-hidden="true">
                <img className="et-card-icon" src="/assets/enterprise/northern ontario ready.svg" alt="" />
              </span>
              <div className="et-card-text">
                <strong className="et-card-title">Northern Ontario Ready</strong>
                <span className="et-card-desc">Accessible across the region</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .enterprise-trusted-section {
          padding-block: 8rem 12rem;
          background: #FCFCFC;
          position: relative;
        }

        .container {
          width: min(100% - 2rem, 1400px);
          margin-inline: auto;
          padding-inline: 1rem;
        }

        .enterprise-block {
          margin: 0 auto;
        }

        .et-main-title {
          font-size: 48px;
          font-weight: 700;
          color: #333333;
          text-align: center;
          margin: 0 0 0.5rem;
        }

        .et-subtitle {
          font-size: 20px;
          font-weight: 400;
          color: #666666;
          text-align: center;
          max-width: 680px;
          margin: 0 auto 5.5rem;
          line-height: 1.5;
        }

        .et-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          width: 100%;
          margin-inline: auto;
        }

        @media (min-width: 600px) {
          .et-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 900px) {
          .et-cards-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        .et-card {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 1.25rem;
          background: #ffffff;
          border: 1px solid #e8f5ed;
          border-radius: 20px;
          padding: 1.25rem 1.5rem 1.25rem 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }

        .et-card-icon-wrap {
          flex-shrink: 0;
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }

        .et-card-icon {
          width: 72px;
          height: 72px;
        }

        .et-card-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          min-width: 0;
        }

        .et-card-title {
          display: block;
          font-size: 20px;
          font-weight: 700;
          color: #333333;
          line-height: 1.3;
          white-space: nowrap;
        }

        .et-card-desc {
          font-size: 16px;
          font-weight: 400;
          color: #666666;
          line-height: 1.4;
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .enterprise-trusted-section {
            padding-block: 2.75rem 3.5rem;
          }

          .container {
            width: min(100% - 1rem, 1400px);
            padding-inline: 0.5rem;
          }

          .et-main-title {
            font-size: 2.4rem;
            line-height: 1.05;
          }

          .et-subtitle {
            font-size: 0.9rem;
            max-width: 330px;
            margin-bottom: 2rem;
          }

          .et-cards-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
            max-width: 360px;
          }

          .et-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.75rem;
            padding: 1.2rem 1rem;
          }

          .et-card-icon-wrap {
            width: 68px;
            height: 68px;
          }

          .et-card-icon {
            width: 68px;
            height: 68px;
          }

          .et-card-title {
            font-size: 1rem;
            white-space: normal;
          }

          .et-card-desc {
            font-size: 0.82rem;
            white-space: normal;
          }
        }
      `}</style>
    </section>
  )
}
