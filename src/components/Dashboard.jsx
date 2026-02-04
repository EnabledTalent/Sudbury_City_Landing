import React, { useState } from 'react'

const USER_TABS = ['Job Seekers', 'Employers', 'Service Providers']

const NAV_ITEMS = [
  { label: 'Home', d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', points: '9 22 9 12 15 12 15 22' },
  { label: 'Dashboard', d: 'M3 3h7v7H3z', d2: 'M14 3h7v7h-7z', d3: 'M14 14h7v7h-7z', d4: 'M3 14h7v7H3z' },
  { label: 'My Jobs', d: 'M2 7h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7z', d2: 'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' },
  { label: 'Companies', d: 'M3 9l9-7 9 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9l-9-7-2 2v6h-4z' },
  { label: 'Profile', d: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2', d2: 'M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' },
]

export default function Dashboard() {
  const [userTab, setUserTab] = useState(0)
  const [activeNav, setActiveNav] = useState(1)
  const [engagementTab, setEngagementTab] = useState(0)
  const [timeFilter, setTimeFilter] = useState(3)

  const NavIcon = ({ item, active }) => {
    if (item.label === 'Dashboard') {
      return (
        <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
        </svg>
      )
    }
    if (item.label === 'My Jobs') {
      return (
        <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      )
    }
    if (item.label === 'Profile') {
      return (
        <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
      )
    }
    if (item.label === 'Home') {
      return (
        <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      )
    }
    if (item.label === 'Companies') {
      return (
        <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9l-9-7-2 2v6h-4z"/>
        </svg>
      )
    }
    return null
  }

  return (
    <section id="dashboard-preview" className="dashboard-section">
      <div className="dashboard-user-tabs">
        <div className="container">
          <div className="user-tabs">
            {USER_TABS.map((label, i) => (
              <button
                key={label}
                type="button"
                className={`user-tab ${userTab === i ? 'active' : ''}`}
                aria-pressed={userTab === i}
                onClick={() => setUserTab(i)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="dashboard-nav-wrap">
        <div className="container dashboard-nav-inner">
          <nav className="dashboard-nav" aria-label="Main">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.label}
                href="#"
                className={`dashboard-nav-item ${activeNav === i ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActiveNav(i); }}
              >
                <NavIcon item={item} active={activeNav === i} />
                {item.label}
              </a>
            ))}
          </nav>
          <div className="dashboard-search">
            <input type="search" className="search-input" placeholder="Search by skills, company or job" aria-label="Search jobs" />
            <span className="search-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="container dashboard-cards">
        <div className="card card-engagement">
          <h3 className="card-title">Recruiter Engagement Trend</h3>
          <div className="card-toolbar">
            <div className="engagement-tabs">
              <button type="button" className={`engagement-tab ${engagementTab === 0 ? 'active' : ''}`} onClick={() => setEngagementTab(0)}>Profile views</button>
              <button type="button" className={`engagement-tab ${engagementTab === 1 ? 'active' : ''}`} onClick={() => setEngagementTab(1)}>Job Invites</button>
            </div>
            <div className="time-filters">
              {['1W', '1M', '3M', '1Y'].map((label, i) => (
                <button key={label} type="button" className={`time-btn ${timeFilter === i ? 'active' : ''}`} onClick={() => setTimeFilter(i)}>{label}</button>
              ))}
            </div>
          </div>
          <div className="chart-wrap">
            <svg className="engagement-chart" viewBox="0 0 520 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <defs>
                <linearGradient id="actualGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <line x1="40" y1="20" x2="40" y2="160" stroke="#e5e7eb" strokeWidth="1"/>
              <line x1="40" y1="160" x2="500" y2="160" stroke="#e5e7eb" strokeWidth="1"/>
              <line x1="120" y1="20" x2="120" y2="160" stroke="#f3f4f6" strokeWidth="1"/>
              <line x1="200" y1="20" x2="200" y2="160" stroke="#f3f4f6" strokeWidth="1"/>
              <line x1="280" y1="20" x2="280" y2="160" stroke="#f3f4f6" strokeWidth="1"/>
              <line x1="360" y1="20" x2="360" y2="160" stroke="#f3f4f6" strokeWidth="1"/>
              <line x1="440" y1="20" x2="440" y2="160" stroke="#f3f4f6" strokeWidth="1"/>
              <path d="M 40 100 L 120 95 L 200 88 L 280 82 L 360 90 L 440 75 L 500 70" fill="none" stroke="#ea580c" strokeWidth="2" strokeDasharray="6 4"/>
              <path d="M 40 105 L 120 98 L 200 85 L 280 78 L 360 92 L 440 72 L 500 65 L 500 160 L 40 160 Z" fill="url(#actualGrad)"/>
              <path d="M 40 105 L 120 98 L 200 85 L 280 78 L 360 92 L 440 72 L 500 65" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="200" cy="85" r="6" fill="#2563eb"/>
              <rect x="165" y="55" width="70" height="22" rx="4" fill="#fef3c7" stroke="#f59e0b"/>
              <text x="200" y="70" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1a1a1a">20</text>
              <text x="200" y="98" textAnchor="middle" fontSize="9" fill="#6b7280">+8% vs typical for your role</text>
              {[
                { x: 40, m: 'Mar' }, { x: 120, m: 'Apr' }, { x: 200, m: 'May' }, { x: 280, m: 'Jun' },
                { x: 360, m: 'Jul' }, { x: 440, m: 'Aug' }, { x: 500, m: 'Sep' },
              ].map(({ x, m }) => (
                <text key={m} x={x} y="178" textAnchor="middle" fontSize="10" fill="#6b7280">{m}</text>
              ))}
            </svg>
          </div>
          <div className="chart-legend">
            <span className="legend-item"><i className="legend-swatch expected" /> Expected profile views</span>
            <span className="legend-item"><i className="legend-swatch actual" /> Actual profile views</span>
            <span className="legend-item"><i className="legend-swatch strong" /> Strong (≥80%) of expected</span>
            <span className="legend-item"><i className="legend-swatch average" /> Average (60–79%) of expected</span>
            <span className="legend-item"><i className="legend-swatch low" /> Low (&lt;60%) of expected</span>
            <span className="legend-note">Expected based on role &amp; market</span>
          </div>
        </div>

        <div className="dashboard-side">
          <div className="card card-match">
            <h3 className="card-title">Profile Match Strength</h3>
            <p className="match-value">87%</p>
            <p className="match-desc">Across 12 active job matches</p>
            <div className="match-metrics">
              <div className="match-metric">
                <span className="metric-label">Recruiter views</span>
                <span className="metric-value">18 <small className="metric-delta positive">-6% vs last month</small></span>
              </div>
              <div className="match-metric">
                <span className="metric-label">Job Invitations</span>
                <span className="metric-value">4 <small className="metric-delta positive">+20% vs last month</small></span>
              </div>
            </div>
          </div>

          <div className="card card-attention">
            <h3 className="card-title">Attention Needed</h3>
            <p className="attention-summary">3 issues require action this week</p>
            <ul className="attention-list">
              <li className="attention-item bullet-yellow">Profile completeness at 68%</li>
              <li className="attention-item bullet-brown">No responses to 2 recent invites</li>
              <li className="attention-item bullet-red">Skill gap for &quot;Senior UX&quot; role at Google</li>
            </ul>
            <a href="#" className="btn btn-primary btn-sm">Review all alerts →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
