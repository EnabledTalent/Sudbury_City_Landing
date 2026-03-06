import React from 'react'

export default function PlatformFeatures() {
  return (
    <section className="platform-features" id="platform-features">
      <div className="platform-container">
        <h2 className="platform-features-title">
          <span className="platform-title-line1">One Platform, Unlimited </span>
          <br className="platform-title-br" />
          <span className="platform-title-line2">Possibilities</span>
        </h2>
        <p className="platform-features-subtitle">
          Everything you need for workforce development in Greater Sudbury, all in one accessible platform
        </p>
        <div className="platform-features-grid">
          <div className="feature-block">
            <span className="feature-icon" aria-hidden="true">
              <img src="/assets/platform/unified-portal.svg" alt="" />
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
              <img src="/assets/platform/local-hiring-marketplace.svg" alt="" />
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
              <img src="/assets/platform/integrated-training-pathways.svg" alt="" />
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
              <img src="/assets/platform/sudbury-work-services.svg" alt="" />
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
          padding: 0;
          box-sizing: border-box;
        }

        .platform-features {
          padding-block: 14rem 4.5rem;
          background: #ffffff;
        }

        .platform-features-title {
          font-family: var(--font-serif), serif;
          font-size: 48px;
          font-weight: 700;
          color: #0b0b0b;
          text-align: center;
          margin: 0 0 0.5rem;
          letter-spacing: -0.01em;
        }

        .platform-title-br {
          display: none;
        }

        .platform-features-subtitle {
          font-weight: 300;
          color: #333333;
          font-size: 20px;
          text-align: center;
          max-width: 1100px;
          margin: 0 auto 5.5rem;
          line-height: 1.5;
        }

        .platform-features-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(1rem, 2vw, 2rem);
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
          width: auto;
          min-width: 0;
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
          white-space: normal;
          overflow-wrap: anywhere;
          line-height: 1.2;
          font-weight: 700;
          color: #111827;
          margin: 0;
        }

        .feature-block-desc {
          font-weight: 300;
          color: #333333;
          font-size: 16px;
          line-height: 1.6;
          margin: 0 auto;
          width: 100%;
          max-width: none;
          letter-spacing: -0.01em;
        }

        @media (max-width: 1200px) {
          .platform-features-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .platform-features-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.5rem;
          }
          .feature-block {
            width: auto;
          }
        }

        @media (max-width: 640px) {
          .platform-features {
            padding-block: 2.25rem 2.5rem;
          }

          .platform-features-title {
            font-size: clamp(1.8rem, 7vw, 2.12rem);
            line-height: 1.15;
            margin-bottom: 0.9rem;
            max-width: 100%;
            margin-inline: auto;
          }

          .platform-title-br {
            display: block;
          }

          .platform-title-line1 {
            white-space: normal;
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
            gap: 2.15rem;
          }

          .feature-block {
            gap: 0.6rem;
            width: auto;
          }

          .feature-icon img {
            width: 62px;
            height: 62px;
          }

          .feature-block-title {
            font-size: 1.42rem;
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
