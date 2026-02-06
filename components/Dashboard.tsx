'use client'

import React, { useState } from 'react'

const USER_TABS = ['Job Seekers', 'Employers', 'Service Providers']

export default function Dashboard() {
  const [userTab, setUserTab] = useState(0)

  return (
    <section id="dashboard-preview" className="dashboard-section">
      <div className="dashboard-bg-gradient" aria-hidden="true" />
      <div className="dashboard-bg" aria-hidden="true" />
      <div className="container">
        <div className="dashboard-tabs-wrap">
          <div className="dashboard-tabs">
            {USER_TABS.map((label, i) => (
              <button
                key={label}
                type="button"
                className={`dashboard-tab ${userTab === i ? 'active' : ''}`}
                aria-pressed={userTab === i}
                onClick={() => setUserTab(i)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <img
          src="/assets/dashboard/talent-dashboard.png"
          alt="Talent dashboard preview"
          className="dashboard-image"
        />
      </div>
      <style>{`
        .container {
          width: min(100% - 2rem, 1100px);
          margin-inline: auto;
          padding-inline: 1.5rem;
        }

        .dashboard-section {
          position: relative;
          background: #ffffff;
          padding: 11.5rem 0 5rem;
          overflow: hidden;
        }

        .dashboard-bg-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(216, 255, 232, 0.4) 0%, rgba(255, 255, 255, 0) 70%);
          pointer-events: none;
        }

        .dashboard-bg {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 240'%3E%3Cg fill='none' stroke='%239de7ba' stroke-width='0.8' stroke-opacity='0.45'%3E%3Cpath d='M0 40 Q150 10 300 40 T600 40 T900 40 T1200 40'/%3E%3Cpath d='M0 70 Q150 40 300 70 T600 70 T900 70 T1200 70'/%3E%3Cpath d='M0 100 Q150 70 300 100 T600 100 T900 100 T1200 100'/%3E%3Cpath d='M0 130 Q150 100 300 130 T600 130 T900 130 T1200 130'/%3E%3Cpath d='M0 160 Q150 130 300 160 T600 160 T900 160 T1200 160'/%3E%3Cpath d='M0 190 Q150 160 300 190 T600 190 T900 190 T1200 190'/%3E%3Cpath d='M0 220 Q150 190 300 220 T600 220 T900 220 T1200 220'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 1200px 240px;
          background-repeat: repeat;
          opacity: 0.45;
          pointer-events: none;
        }

        .dashboard-tabs-wrap {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          margin-bottom: 4.5rem;
        }

        .dashboard-tabs {
          display: inline-flex;
          gap: 0.5rem;
          background: #ffffff;
          padding: 0.5rem;
          border-radius: 18px;
          box-shadow: 0 8px 20px rgba(17, 24, 39, 0.08);
        }

        .dashboard-tab {
          font-family: var(--font);
          font-size: 1.05rem;
          font-weight: 600;
          color: #1f2937;
          background: transparent;
          border: none;
          padding: 0.9rem 2rem;
          border-radius: 16px;
          cursor: pointer;
          transition: color 0.2s, background 0.2s, box-shadow 0.2s;
        }

        .dashboard-tab:hover {
          color: #111827;
          background: #f3f4f6;
        }

        .dashboard-tab.active {
          color: #ffffff;
          background: #0f8f38;
          box-shadow: 0 6px 14px rgba(14, 143, 55, 0.25);
        }

        .dashboard-image {
          position: relative;
          z-index: 1;
          width: 100%;
          height: auto;
          display: block;
          max-width: 1050px;
          margin: 0 auto;
          border-radius: 0;
          box-shadow: none;
        }

        @media (max-width: 768px) {
          .container {
            width: min(100% - 0.25rem, 1100px);
            padding-inline: 0.125rem;
          }

          .dashboard-section {
            padding: 4.25rem 0 2rem;
          }

          .dashboard-tabs-wrap {
            justify-content: flex-start;
            margin-bottom: 1.1rem;
          }

          .dashboard-tabs {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1.3fr;
            gap: 0.25rem;
            padding: 0.35rem;
            border-radius: 16px;
            overflow: visible;
          }

          .dashboard-tab {
            font-size: 0.95rem;
            padding: 0.88rem 0.55rem;
            border-radius: 14px;
            white-space: nowrap;
            width: 100%;
            text-align: center;
          }

          .dashboard-tab:last-child {
            font-size: 0.9rem;
            padding-inline: 0.45rem;
          }

          .dashboard-image {
            width: 100%;
            max-width: none;
            transform: scale(1.1);
            transform-origin: top center;
          }
        }
      `}</style>
    </section>
  )
}
