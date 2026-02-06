import React from 'react'

export default function PlatformFeatures() {
  return (
    <section className="platform-features" id="platform-features">
      <div className="platform-container">
        <h2 className="platform-features-title">One Platform, Unlimited Possibilities</h2>
        <p className="platform-features-subtitle">
          Everything you need for workforce development in Greater Sudbury, all in one accessible platform
        </p>
        <div className="platform-features-grid">
          <div className="feature-block">
            <span className="feature-icon" aria-hidden="true">
              <img src="/assets/platform/unified-sudbury.svg" alt="" />
            </span>
            <h3 className="feature-block-title">Unified Sudbury Portal</h3>
            <p className="feature-block-desc">
              Single sign-on access for all Greater Sudbury<br />
              workforce services. One account, multiple<br />
              roles, seamless experience across the entire<br />
              ecosystem.
            </p>
          </div>
          <div className="feature-block">
            <span className="feature-icon" aria-hidden="true">
              <img src="/assets/platform/local-hiring.svg" alt="" />
            </span>
            <h3 className="feature-block-title">Local Hiring Marketplace</h3>
            <p className="feature-block-desc">
              Connect Sudbury employers with qualified<br />
              local candidates efficiently. Post jobs, browse<br />
              talent, and manage the complete hiring<br />
              lifecycle in one place.
            </p>
          </div>
          <div className="feature-block">
            <span className="feature-icon" aria-hidden="true">
              <img src="/assets/platform/training-pathways.svg" alt="" />
            </span>
            <h3 className="feature-block-title">Integrated Training Pathways</h3>
            <p className="feature-block-desc">
              Access training programs, certifications, and<br />
              skill-building resources from local institutions.<br />
              Connect training to employment<br />
              opportunities in Sudbury.
            </p>
          </div>
          <div className="feature-block">
            <span className="feature-icon" aria-hidden="true">
              <img src="/assets/platform/workforce-services.svg" alt="" />
            </span>
            <h3 className="feature-block-title">Sudbury Workforce Services</h3>
            <p className="feature-block-desc">
              Streamlined access to employment services,<br />
              career counseling, and support programs. All<br />
              Greater Sudbury workforce resources in a<br />
              unified interface.
            </p>
          </div>
        </div>
      </div>
      <style>{`
        .platform-container {
          width: 100%;
          max-width: 100%;
          margin: 0;
          padding: 0 !important;
          padding-left: 0 !important;
          box-sizing: border-box;
        }

        .platform-features {
          padding-block: 14rem 4.5rem;
          background: #ffffff;
        }

        .platform-features-title {
          font-size: 48px;
          font-weight: 700;
          color: #0b0b0b;
          text-align: center;
          margin: 0 0 0.5rem;
          letter-spacing: -0.02em;
        }

        .platform-features-subtitle {
          font-size: 20px;
          color: #9aa3af;
          text-align: center;
          max-width: 1100px;
          margin: 0 auto 5.5rem;
          line-height: 1.5;
        }

        .platform-features-grid {
          display: flex;
          flex-wrap: nowrap;
          justify-content: flex-start;
          gap: 2rem;
          padding: 0;
          border: none;
          border-radius: 0;
          background: transparent;
        }

        .feature-block {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
          text-align: center;
          width: 350px;
          flex-shrink: 0;
        }

        .feature-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: auto;
          height: auto;
        }

        .feature-icon img {
          width: 80px;
          height: 80px;
          display: block;
        }

        .feature-block-title {
          font-size: 20px;
          white-space: nowrap;
          font-weight: 700;
          color: #111827;
          margin: 0;
        }

        .feature-block-desc {
          font-size: 16px;
          color: #9aa3af;
          line-height: 1.6;
          margin: 0 auto;
          width: 100%;
          max-width: none;
          letter-spacing: -0.01em;
        }

        @media (max-width: 900px) {
          .platform-features-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.5rem;
          }
          .feature-block-title {
            white-space: normal;
          }
          .feature-block {
            width: auto;
          }
        }

        @media (max-width: 640px) {
          .platform-container {
            width: min(100% - 1rem, 1200px);
            padding-inline: 0.5rem;
          }

          .platform-features {
            padding-block: 2.25rem 2.5rem;
          }

          .platform-features-title {
            font-size: 2.35rem;
            line-height: 1.12;
            margin-bottom: 0.9rem;
            max-width: 360px;
            margin-inline: auto;
          }

          .platform-features-subtitle {
            font-size: 0.9rem;
            max-width: 340px;
            margin-bottom: 1.5rem;
            line-height: 1.35;
          }

          .platform-features-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.55rem;
          }

          .feature-block {
            gap: 0.6rem;
            width: auto;
          }

          .feature-icon img {
            width: 72px;
            height: 72px;
          }

          .feature-block-title {
            font-size: 1.9rem;
            margin: 0.2rem 0 0.1rem;
          }

          .feature-block-desc {
            font-size: 1rem;
            line-height: 1.45;
            max-width: 340px;
            margin-inline: auto;
          }
        }
      `}</style>
    </section>
  )
}
