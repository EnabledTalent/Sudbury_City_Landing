import React, { useState } from 'react'

const ROLE_BUTTONS = [
  { id: 'seeker', label: 'Job Seeker', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg> },
  { id: 'employers', label: 'Employers', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { id: 'providers', label: 'Service Providers', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="18" cy="14" r="3" strokeDasharray="2 2"/></svg> },
]

export default function SeamlessExperience() {
  const [activeRole, setActiveRole] = useState('seeker')

  return (
    <section id="seamless-experience" className="seamless-section">
      <div className="container">
        <h2 className="seamless-title">A seamless experience designed for Job Seekers, Employers, and Service Providers.</h2>
        <div className="seamless-grid">
          <div className="seamless-left">
            <h3 className="seamless-heading">Getting Started</h3>
            <div className="seamless-steps">
              <div className="seamless-step">
                <span className="seamless-step-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </span>
                <div>
                  <strong className="seamless-step-title">Choose Your Role</strong>
                  <p className="seamless-step-desc">Select your profile type during registration. Switch between roles anytime—job seekers can become employers, and vice versa.</p>
                </div>
              </div>
              <div className="seamless-step">
                <span className="seamless-step-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </span>
                <div>
                  <strong className="seamless-step-title">Quick Sign-In</strong>
                  <p className="seamless-step-desc">Create your account with email or use single sign-on with Google or LinkedIn. Secure, fast, and accessible from any device.</p>
                </div>
              </div>
              <div className="seamless-step">
                <span className="seamless-step-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                </span>
                <div>
                  <strong className="seamless-step-title">Personalized Dashboard</strong>
                  <p className="seamless-step-desc">Access your role-specific dashboard with tools, insights, and recommendations tailored to your needs.</p>
                </div>
              </div>
            </div>
            <div className="seamless-notifications">
              <div className="seamless-notif seamless-notif--green">
                <span className="seamless-notif-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg></span>
                <div className="seamless-notif-content">
                  <strong>New Job Match!</strong>
                  <p>Software Developer at TechCo Sudbury</p>
                  <span className="seamless-notif-meta">85% match • Posted 2 hours ago</span>
                </div>
              </div>
              <div className="seamless-notif seamless-notif--blue">
                <span className="seamless-notif-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></span>
                <div className="seamless-notif-content">
                  <strong>Application Viewed!</strong>
                  <p>Your application for Project Manager was viewed</p>
                  <span className="seamless-notif-meta">Northern Mining Corp - 1 day ago</span>
                </div>
              </div>
              <div className="seamless-notif seamless-notif--orange">
                <span className="seamless-notif-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></span>
                <div className="seamless-notif-content">
                  <strong>Interview Scheduled!</strong>
                  <p>Marketing Coordinator position at TechCo Sudbury</p>
                  <span className="seamless-notif-meta">Tomorrow at 2:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="seamless-right">
            <div className="seamless-signup-block">
              <h3 className="seamless-heading">Select your role</h3>
              <div className="seamless-role-buttons">
                {ROLE_BUTTONS.map(({ id, label, icon }) => (
                  <button
                    key={id}
                    type="button"
                    className={`seamless-role-btn ${activeRole === id ? 'active' : ''}`}
                    onClick={() => setActiveRole(id)}
                  >
                    {icon}
                    {label}
                  </button>
                ))}
              </div>
              <div className="seamless-auth-buttons">
                <a href="#" className="seamless-auth-btn seamless-auth-google"><span className="seamless-auth-logo">G</span> Continue with Google</a>
                <a href="#" className="seamless-auth-btn seamless-auth-linkedin"><span className="seamless-auth-logo">in</span> Continue with LinkedIn</a>
                <span className="seamless-auth-divider">or</span>
                <a href="/signup" className="btn btn-primary" style={{ width: '100%' }}>Sign up with email</a>
              </div>
            </div>
            <div className="seamless-features-block">
              <h3 className="seamless-heading">For Job Seekers</h3>
              <div className="seamless-feature-list">
                <div className="seamless-feature-item">
                  <span className="seamless-feature-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M7 6l2-4h6l2 4"/><circle cx="11" cy="14" r="3"/><path d="M14 17l2 2"/></svg></span>
                  <div>
                    <strong className="seamless-feature-title">Discover Local Opportunities</strong>
                    <p className="seamless-feature-desc">Browse job openings from verified Sudbury employers. Get personalized recommendations based on your skills and career goals.</p>
                  </div>
                </div>
                <div className="seamless-feature-item">
                  <span className="seamless-feature-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></span>
                  <div>
                    <strong className="seamless-feature-title">Real-Time Notifications</strong>
                    <p className="seamless-feature-desc">Get instant alerts when new jobs match your profile, when employers view your application, or when you receive interview requests.</p>
                  </div>
                </div>
                <div className="seamless-feature-item">
                  <span className="seamless-feature-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></span>
                  <div>
                    <strong className="seamless-feature-title">Career Growth Resources</strong>
                    <p className="seamless-feature-desc">Access training programs from Cambrian College and Laurentian University. Track certifications and build new skills.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
