'use client'

import React, { useState } from 'react'

const ROLE_BUTTONS = [
  { id: 'seeker', label: 'Job Seeker', icon: '/assets/seamless/job-seeker-icon.svg' },
  { id: 'employers', label: 'Employers', icon: '/assets/seamless/employers-icon.svg' },
  { id: 'providers', label: 'Service Providers', icon: '/assets/seamless/service-providers-icon.svg' },
]

export default function SeamlessExperience() {
  const [activeRole, setActiveRole] = useState('seeker')

  return (
    <>
      <section id="seamless-experience" className="seamless-section">
        <div className="container">
          <h2 className="seamless-title">
            A seamless experience{' '}
            <br className="seamless-title-br seamless-title-br--mobile" />
            designed for{' '}
            <br className="seamless-title-br seamless-title-br--mobile" />
            <span>
              Job Seekers, Employers,{' '}
              <br className="seamless-title-br seamless-title-br--mobile" />
              and Service Providers
            </span>
          </h2>
          <h3 className="seamless-heading seamless-mobile-getting-started">Getting Started</h3>
          <div className="seamless-grid">
            <div className="seamless-left">
              <h3 className="seamless-heading">Getting Started</h3>
              <div className="seamless-steps">
                <div className="seamless-step">
                  <span className="seamless-step-icon" aria-hidden="true">
                    <img src="/assets/seamless/choose-your-role.svg" alt="" />
                  </span>
                  <div>
                    <strong className="seamless-step-title">Choose Your Role</strong>
                      <p className="seamless-step-desc">
                        Select your profile type during registration. Switch between roles<br />
                        anytime - job seekers can become employers, and vice versa.
                      </p>
                  </div>
                </div>
                <div className="seamless-step">
                  <span className="seamless-step-icon" aria-hidden="true">
                    <img src="/assets/seamless/quick-sign-in.svg" alt="" />
                  </span>
                  <div>
                    <strong className="seamless-step-title">Quick Sign-In</strong>
                    <p className="seamless-step-desc">
                      Create your account with email or use single sign-on with Google<br />
                      or LinkedIn. Secure, fast, and accessible from any device.
                    </p>
                  </div>
                </div>
                <div className="seamless-step">
                  <span className="seamless-step-icon" aria-hidden="true">
                    <img src="/assets/seamless/personalized-dashboard.svg" alt="" />
                  </span>
                  <div>
                    <strong className="seamless-step-title">Personalized Dashboard</strong>
                    <p className="seamless-step-desc">
                      Access your role-specific dashboard with tools, insights, and<br />
                      recommendations tailored to your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="seamless-right seamless-right--bg">
              <div className="seamless-signup-block">
                <h3 className="seamless-heading">Select your role</h3>
                <div className="seamless-role-buttons">
                  {ROLE_BUTTONS.map(({ id, label, icon }) => (
                    <button
                      key={id}
                      type="button"
                      className={`seamless-role-card ${activeRole === id ? 'active' : ''}`}
                      onClick={() => setActiveRole(id)}
                    >
                      <img src={icon} alt="" aria-hidden="true" />
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
                <div className="seamless-auth-buttons">
                  <a href="#" className="seamless-auth-btn seamless-auth-google">
                    <img src="/assets/seamless/google-icon.svg" alt="" />
                    Continue with Google
                  </a>
                  <a href="#" className="seamless-auth-btn seamless-auth-linkedin">
                    <img src="/assets/seamless/linkedin-icon.svg" alt="" />
                    Continue with LinkedIn
                  </a>
                  <span className="seamless-auth-divider">or</span>
                  <a href="/signup" className="btn btn-primary btn-signup">Sign up with email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="seamless-section seamless-section--no-top-padding">
        <div className="container">
          <h3 className="seamless-heading seamless-part2-heading-mobile">For Job Seekers</h3>
          <div className="seamless-grid seamless-grid--part2">
            <div className="seamless-left">
              <div className="seamless-notifications seamless-notifications--part2">
                <div className="seamless-notif seamless-notif--green">
                  <div className="seamless-notif-top">
                    <span className="seamless-notif-icon" aria-hidden="true">
                      <img src="/assets/seamless/new-job-match.svg" alt="" />
                    </span>
                    <div className="seamless-notif-content">
                      <strong>New Job Match!</strong>
                      <p>Software Developer at TechCo Sudbury</p>
                    </div>
                  </div>
                  <span className="seamless-notif-meta">85% match • Posted 2 hours ago</span>
                </div>
                <div className="seamless-notif seamless-notif--blue">
                  <div className="seamless-notif-top">
                    <span className="seamless-notif-icon" aria-hidden="true">
                      <img src="/assets/seamless/application-viewed.svg" alt="" />
                    </span>
                    <div className="seamless-notif-content">
                      <strong>Application Viewed!</strong>
                      <p>Your application for Project Manager was viewed</p>
                    </div>
                  </div>
                  <span className="seamless-notif-meta">Northern Mining Corp • 1 day ago</span>
                </div>
                <div className="seamless-notif seamless-notif--orange">
                  <div className="seamless-notif-top">
                    <span className="seamless-notif-icon" aria-hidden="true">
                      <img src="/assets/seamless/interview-scheduled.svg" alt="" />
                    </span>
                    <div className="seamless-notif-content">
                      <strong>Interview Scheduled!</strong>
                      <p>Marketing Coordinator position at TechCo Sudbury</p>
                    </div>
                  </div>
                  <span className="seamless-notif-meta">Tomorrow at 2:00 PM</span>
                </div>
              </div>
            </div>
            <div className="seamless-right">
              <h3 className="seamless-heading">For Job Seekers</h3>
              <div className="seamless-feature-list seamless-feature-list--part2">
                <div className="seamless-feature-item">
                  <span className="seamless-feature-icon seamless-feature-icon--plain" aria-hidden="true">
                    <img src="/assets/seamless/discover-local-opportunities.svg" alt="" />
                  </span>
                  <div>
                    <strong className="seamless-feature-title">Discover Local Opportunities</strong>
                    <p className="seamless-feature-desc">Browse job openings from verified Sudbury employers. Get personalized recommendations based on your skills and career goals.</p>
                  </div>
                </div>
                <div className="seamless-feature-item">
                  <span className="seamless-feature-icon seamless-feature-icon--plain" aria-hidden="true">
                    <img src="/assets/seamless/real-time-notifications.svg" alt="" />
                  </span>
                  <div>
                    <strong className="seamless-feature-title">Real-Time Notifications</strong>
                    <p className="seamless-feature-desc">Get instant alerts when new jobs match your profile, when employers view your application, or when you receive interview requests.</p>
                  </div>
                </div>
                <div className="seamless-feature-item">
                  <span className="seamless-feature-icon seamless-feature-icon--plain" aria-hidden="true">
                    <img src="/assets/seamless/career-growth-resources.svg" alt="" />
                  </span>
                  <div>
                    <strong className="seamless-feature-title">Career Growth Resources</strong>
                    <p className="seamless-feature-desc">Access training programs from Cambrian College and Laurentian University. Track certifications and build new skills.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .container {
          width: min(100% - 2rem, 1100px);
          margin-inline: auto;
          padding-inline: 1.5rem;
        }

        .seamless-section {
          padding-block: 12rem 4.5rem;
          background: #ffffff;
        }

        .seamless-section--no-top-padding {
          padding-top: 0;
        }

        .seamless-title {
          font-size: 48px;
          font-weight: 700;
          color: #111827;
          text-align: center;
          max-width: 1100px;
          margin: 0 auto 7.5rem;
          line-height: 1.1;
        }

        .seamless-title span {
          display: block;
          color: #16a34a;
        }

        .seamless-title-br {
          display: none;
        }

        .container {
          width: 100%;
          max-width: 100%;
          padding-left: 14rem;
          margin: 0;
        }

        .seamless-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 1420px;
          margin-inline: auto;
          align-items: start;
        }

        @media (min-width: 900px) {
          .seamless-grid {
            grid-template-columns: 1.3fr 1fr;
            gap: 10rem;
          }
        }

        .seamless-grid--part2 {
          max-width: 1660px;
          grid-template-columns: 1fr 1.5fr !important;
          margin-left: 0;
        }

        .seamless-heading {
          font-size: 32px;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 2rem;
        }

        .seamless-steps {
          display: flex;
          flex-direction: column;
          gap: 2.75rem;
          margin-bottom: 2.5rem;
        }

        .seamless-step {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          padding-bottom: 0.5rem;
        }

        .seamless-step-icon {
          flex-shrink: 0;
          display: flex;
        }

        .seamless-step-icon img {
          width: 42px;
          height: 42px;
          display: block;
        }

        .seamless-step-title {
          display: block;
          font-size: 24px;
          margin-bottom: 0.25rem;
        }

        .seamless-step-desc {
          font-size: 17px;
          color: #9aa3af;
          line-height: 1.6;
          margin: 0;
          max-width: 1000px;
        }

        .seamless-right {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .seamless-right--bg {
          position: relative;
          background: radial-gradient(circle at 50% 40%, #CAFFDF 0%, #ffffff 70%);
          border-radius: 40px;
          padding: 2rem;
          margin-top: -1.75rem;
        }

        .seamless-signup-block {
          background: transparent;
          padding: 0;
          max-width: 540px;
          margin: 0 auto;
          text-align: center;
        }

        .seamless-signup-block .seamless-heading {
          font-size: 32px;
          color: #1f2937;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .seamless-role-buttons {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.9rem;
          margin-bottom: 1.25rem;
        }

        .seamless-role-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          border: 1px solid #4ade80;
          background: #f0fdf4;
          padding: 1rem 0.5rem;
          border-radius: 16px;
          cursor: pointer;
          font-weight: 700;
          font-size: 0.85rem;
          color: #064e3b;
          transition: all 0.2s ease;
          box-shadow: none;
          height: 110px;
          width: 100%;
          box-sizing: border-box;
        }

        .seamless-role-card img {
          width: 26px;
          height: 26px;
          display: block;
        }

        .seamless-role-card.active {
          background: linear-gradient(180deg, #00cb53 0%, #00e75e 100%);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 10px 30px rgba(0, 203, 83, 0.4);
          transform: translateY(-2px);
        }

        .seamless-role-card.active img {
          filter: brightness(0) invert(1);
        }

        .seamless-auth-buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .seamless-auth-btn {
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          gap: 1.25rem;
          font-family: var(--font);
          font-size: 1.05rem;
          font-weight: 500;
          padding: 0.75rem 1.5rem 0.75rem 1rem;
          border-radius: 999px;
          border: 1px solid #f0f0f0;
          background: #ffffff;
          color: #1a1a1a;
          transition: all 0.2s ease;
          width: fit-content;
          min-width: 280px;
          max-width: 300px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          text-decoration: none;
        }

        .seamless-auth-btn:hover {
          background: #ffffff;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          transform: translateY(-1px);
          border-color: #e5e7eb;
        }

        .seamless-auth-btn img {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
        }

        .seamless-auth-divider {
          font-size: 0.875rem;
          color: #9aa3af;
          text-align: center;
          margin: 0.25rem 0;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          text-decoration: none;
        }

        .btn-primary {
          color: #1a1a1a;
        }

        .btn-signup {
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
          justify-content: center;
          background: #00ec5b;
          color: #1a1a1a;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 1rem 1.5rem;
          box-shadow: 0 10px 25px rgba(0, 236, 91, 0.3);
          transition: all 0.2s ease;
        }

        .btn-signup:hover {
          background: #00d955;
          box-shadow: 0 14px 30px rgba(0, 236, 91, 0.4);
          transform: translateY(-1px);
        }

        .seamless-notifications {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .seamless-notifications--part2 {
          gap: 2.5rem;
          padding-left: calc(42px + 1.25rem);
        }

        .seamless-notif {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          border-radius: 10px;
          text-align: left;
        }

        .seamless-notifications--part2 .seamless-notif {
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 15px 45px rgba(17, 24, 39, 0.08);
          position: relative;
          min-width: 480px;
          width: 480px;
          flex-direction: column;
        }

        .seamless-notif-top {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .seamless-notif-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .seamless-notif-icon img {
          width: 48px;
          height: 48px;
          display: block;
        }

        .seamless-notif-content {
          flex: 1;
        }

        .seamless-notif-content strong {
          display: block;
          font-size: 18px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.15rem;
        }

        .seamless-notif-content p {
          font-size: 15px;
          margin: 0;
          color: #4b5563;
          line-height: 1.3;
          white-space: nowrap;
        }

        .seamless-notif-meta {
          display: block;
          font-size: 15px;
          color: #9aa3af;
          margin-top: 0.25rem;
        }

        .seamless-notif--green::before,
        .seamless-notif--blue::before,
        .seamless-notif--orange::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 8px;
          border-radius: 20px 0 0 20px;
        }

        .seamless-notif--green::before { background: #10b981; }
        .seamless-notif--blue::before { background: #3b82f6; }
        .seamless-notif--orange::before { background: #f59e0b; }



        .seamless-feature-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .seamless-feature-list--part2 {
          gap: 3rem;
        }

        .seamless-feature-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .seamless-feature-icon {
          flex-shrink: 0;
          display: flex;
        }

        .seamless-feature-icon--plain {
          background: transparent;
          width: 56px;
          height: 56px;
          align-items: center;
          justify-content: center;
        }

        .seamless-feature-icon--plain img {
          width: 56px;
          height: 56px;
          display: block;
        }

        .seamless-feature-title {
          display: block;
          font-size: 20px;
          margin-bottom: 0.25rem;
          font-weight: 700;
        }

        .seamless-feature-desc {
          font-size: 16px;
          color: #9aa3af;
          line-height: 1.5;
          margin: 0;
          max-width: 650px;
        }

        .seamless-mobile-getting-started {
          display: none;
        }

        .seamless-part2-heading-mobile {
          display: none;
        }

        @media (max-width: 640px) {
          #seamless-experience .container {
            width: min(100% - 1rem, 1100px);
            max-width: none;
            margin-inline: auto;
            padding-inline: 0.5rem;
          }

          #seamless-experience.seamless-section {
            padding-block: 2rem 2.5rem;
            background: radial-gradient(circle at 50% 35%, #CAFFDF 0%, #ffffff 70%);
          }

          #seamless-experience .seamless-title {
            font-size: 2.05rem;
            line-height: 1.18;
            margin-bottom: 2rem;
            max-width: 100%;
            letter-spacing: -0.02em;
          }

          #seamless-experience .seamless-title span {
            max-width: 100%;
            margin-inline: auto;
          }

          #seamless-experience .seamless-title-br--mobile {
            display: block;
          }

          #seamless-experience .seamless-mobile-getting-started {
            display: block;
            text-align: center;
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }

          #seamless-experience .seamless-grid {
            grid-template-columns: 1fr;
            gap: 1.75rem;
            max-width: 100%;
          }

          #seamless-experience .seamless-right {
            order: 1;
          }

          #seamless-experience .seamless-left {
            order: 2;
            margin-top: 3.25rem;
          }

          #seamless-experience .seamless-left > .seamless-heading {
            display: none;
          }

          #seamless-experience .seamless-right--bg {
            background: transparent;
            border-radius: 0;
            padding: 0;
            margin-top: 0;
          }

          #seamless-experience .seamless-signup-block {
            max-width: 360px;
          }

          #seamless-experience .seamless-signup-block .seamless-heading {
            font-size: 0.95rem;
            margin-bottom: 0.85rem;
          }

          #seamless-experience .seamless-role-buttons {
            gap: 0.65rem;
            margin-bottom: 1.5rem;
          }

          #seamless-experience .seamless-role-card {
            height: 96px;
            min-height: 96px;
            padding: 0.8rem 0.35rem;
            border-radius: 14px;
            font-size: 0.8rem;
            gap: 0.55rem;
          }

          #seamless-experience .seamless-role-card img {
            width: 24px;
            height: 24px;
          }

          #seamless-experience .seamless-auth-buttons {
            gap: 1.05rem;
          }

          #seamless-experience .seamless-auth-btn {
            min-width: 0;
            width: 100%;
            max-width: 320px;
            font-size: 0.95rem;
            padding: 0.7rem 1.1rem 0.7rem 0.8rem;
            gap: 0.85rem;
          }

          #seamless-experience .seamless-auth-btn img {
            width: 32px;
            height: 32px;
          }

          #seamless-experience .btn-signup {
            max-width: 320px;
            font-size: 1rem;
            padding: 0.95rem 1.25rem;
          }

          #seamless-experience .seamless-step {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.65rem;
            padding-bottom: 0;
          }

          #seamless-experience .seamless-step-icon img {
            width: 54px;
            height: 54px;
          }

          #seamless-experience .seamless-step-title {
            font-size: 1.45rem;
            margin-bottom: 0.4rem;
          }

          #seamless-experience .seamless-step-desc {
            font-size: 0.95rem;
            line-height: 1.45;
            max-width: 320px;
            margin-inline: auto;
          }

          #seamless-experience .seamless-steps {
            gap: 2.75rem;
            margin-bottom: 0;
          }

          #seamless-experience .seamless-step {
            padding-bottom: 0.75rem;
          }

          /* Part 2: Job Seekers notifications should come directly after the first part on mobile */
          .seamless-section--no-top-padding {
            padding-block: 2.25rem 2.75rem;
            background: radial-gradient(circle at 30% 20%, #cbfbf1 0%, #ffffff 70%);
          }

          .seamless-section--no-top-padding .seamless-grid--part2 {
            grid-template-columns: 1fr !important;
            gap: 1.25rem;
            max-width: 360px;
            margin-inline: auto;
          }

          .seamless-section--no-top-padding .seamless-left {
            order: 1;
          }

          .seamless-section--no-top-padding .seamless-right {
            order: 2;
            align-items: center;
            text-align: center;
            gap: 1.5rem;
            margin-top: 2.25rem;
          }

          .seamless-part2-heading-mobile {
            display: block;
            text-align: center;
            font-size: 1.7rem;
            margin: 0 0 1rem;
          }

          .seamless-section--no-top-padding .seamless-right .seamless-heading {
            display: none;
          }

          .seamless-section--no-top-padding .seamless-notifications--part2 {
            padding-left: 0;
            gap: 1rem;
          }

          .seamless-section--no-top-padding .seamless-notifications--part2 .seamless-notif {
            width: 100%;
            min-width: 0;
            border-radius: 18px;
            padding: 1.05rem 1.1rem;
          }

          .seamless-section--no-top-padding .seamless-notif-icon,
          .seamless-section--no-top-padding .seamless-notif-icon img {
            width: 44px;
            height: 44px;
          }

          .seamless-section--no-top-padding .seamless-notif-content strong {
            font-size: 1.05rem;
          }

          .seamless-section--no-top-padding .seamless-notif-content p {
            font-size: 0.85rem;
            white-space: normal;
          }

          .seamless-section--no-top-padding .seamless-notif-meta {
            font-size: 0.82rem;
          }

          .seamless-section--no-top-padding .seamless-feature-list--part2 {
            display: flex;
            gap: 3rem;
          }

          .seamless-section--no-top-padding .seamless-feature-item {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.75rem;
          }

          .seamless-section--no-top-padding .seamless-feature-icon--plain {
            width: 64px;
            height: 64px;
          }

          .seamless-section--no-top-padding .seamless-feature-icon--plain img {
            width: 64px;
            height: 64px;
          }

          .seamless-section--no-top-padding .seamless-feature-title {
            font-size: 1.15rem;
            margin-bottom: 0.3rem;
          }

          .seamless-section--no-top-padding .seamless-feature-desc {
            font-size: 0.82rem;
            line-height: 1.4;
            max-width: 320px;
            margin-inline: auto;
          }
        }
      `}</style>
    </>
  )
}
