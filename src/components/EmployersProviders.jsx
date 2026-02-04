import React from 'react'

export default function EmployersProviders() {
  return (
    <section id="employers-providers" className="employers-providers-section">
      <div className="ep-wrap">
        <div className="ep-column ep-employers">
          <h2 className="ep-main-heading">For Employers</h2>
          <div className="ep-features">
            <div className="ep-feature">
              <span className="ep-feature-icon ep-icon--purple">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M10 10V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><path d="M14 12v8M16 10c0-1 .8-2 2-2s2 1 2 2-1 2-2 2h-2v4c0 1 .8 2 2 2s2-1 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
              </span>
              <div className="ep-feature-body">
                <strong className="ep-feature-title">Post & Manage Jobs</strong>
                <p className="ep-feature-desc">Create job postings with detailed descriptions, requirements, and benefits. Manage multiple positions from a unified dashboard.</p>
              </div>
            </div>
            <div className="ep-feature">
              <span className="ep-feature-icon ep-icon--blue">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="22" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M6 24c0-2.2 1.8-4 4-4s4 1.8 4 4M18 24c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M16 13v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div className="ep-feature-body">
                <strong className="ep-feature-title">Smart Candidate Matching</strong>
                <p className="ep-feature-desc">Our platform automatically matches your job posts with qualified Sudbury candidates based on skills, experience, and preferences.</p>
              </div>
            </div>
            <div className="ep-feature">
              <span className="ep-feature-icon ep-icon--blue">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="16" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="24" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M8 16v6M16 16v6M24 16v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <div className="ep-feature-body">
                <strong className="ep-feature-title">Streamlined Hiring Process</strong>
                <p className="ep-feature-desc">Schedule interviews, track applicants through your pipeline, and collaborate with your team—all in one place.</p>
              </div>
            </div>
          </div>
          <div className="ep-card ep-program-overview">
            <h3 className="ep-card-title">Program Overview</h3>
            <div className="ep-metrics">
              <div className="ep-metric ep-metric--purple">
                <span className="ep-metric-value">6</span>
                <span className="ep-metric-label">Active Programs</span>
              </div>
              <div className="ep-metric ep-metric--green">
                <span className="ep-metric-value">89</span>
                <span className="ep-metric-label">Total Clients</span>
              </div>
              <div className="ep-metric ep-metric--blue">
                <span className="ep-metric-value">+15</span>
                <span className="ep-metric-label">Clients this week</span>
              </div>
            </div>
          </div>
          <div className="ep-activity-list">
            <div className="ep-activity ep-activity--green">
              <span className="ep-activity-icon ep-activity-icon--green" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
              </span>
              <div className="ep-activity-content">
                <strong>New Referral</strong>
                <span>Skills Training Program</span>
              </div>
              <span className="ep-activity-time">2h ago</span>
            </div>
            <div className="ep-activity ep-activity--blue">
              <span className="ep-activity-icon ep-activity-icon--blue" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><path d="M16 11h4M18 9v4" strokeLinecap="round"/></svg>
              </span>
              <div className="ep-activity-content">
                <strong>Session Complete</strong>
                <span>Career Counseling - John D.</span>
              </div>
              <span className="ep-activity-time">2h ago</span>
            </div>
            <div className="ep-activity ep-activity--purple">
              <span className="ep-activity-icon ep-activity-icon--purple" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6"/><path d="M6 14l4-4 4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div className="ep-activity-content">
                <strong>Monthly Report Ready</strong>
                <span>December Program Outcomes</span>
              </div>
              <span className="ep-activity-time">2h ago</span>
            </div>
          </div>
        </div>
        <div className="ep-divider" aria-hidden="true" />
        <div className="ep-column ep-providers">
          <div className="ep-card ep-branding-card">
            <span className="ep-branding-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="currentColor"/><path d="M12 28V16l4-4 4 4 4-4 4 4v12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M20 12v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </span>
            <strong className="ep-branding-name">Sudbury Workforce Platform</strong>
            <span className="ep-branding-url">workforce.sudbury.ca</span>
          </div>
          <div className="ep-quick-actions">
            <div className="ep-quick-action">
              <span className="ep-quick-icon ep-icon--blue">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="8" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M8 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/></svg>
              </span>
              <span className="ep-quick-label">Post Jobs</span>
            </div>
            <div className="ep-quick-action">
              <span className="ep-quick-icon ep-icon--blue">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="10" r="4" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="19" cy="10" r="4" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M4 22c0-2.8 2.2-5 5-5s5 2.2 5 5M14 22c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <span className="ep-quick-label">Find Talent</span>
            </div>
            <div className="ep-quick-action">
              <span className="ep-quick-icon ep-icon--blue">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 20V8h4v12H4zM10 20v-6h4v6h-4zM16 20V4h4v16h-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M4 8l4-4 4 4 4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
              </span>
              <span className="ep-quick-label">Track Metrics</span>
            </div>
          </div>
          <h2 className="ep-main-heading">For Service Providers</h2>
          <div className="ep-features">
            <div className="ep-feature">
              <span className="ep-feature-icon ep-icon--purple">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M20 8l4-4 4 4-4 4-4-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div className="ep-feature-body">
                <strong className="ep-feature-title">Manage Programs & Services</strong>
                <p className="ep-feature-desc">List your training programs, workshops, and support services in the Sudbury directory. Update offerings, schedules, and availability in real-time.</p>
              </div>
            </div>
            <div className="ep-feature">
              <span className="ep-feature-icon ep-icon--purple">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4l2 4 4 1-3 3 1 4-4-2-4 2-1-4-3 3-4-1 2-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M12 20l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div className="ep-feature-body">
                <strong className="ep-feature-title">Receive & Track Referrals</strong>
                <p className="ep-feature-desc">Get referrals from employers and job seekers directly through the platform. Track client progress, schedule appointments, and manage your caseload efficiently.</p>
              </div>
            </div>
            <div className="ep-feature">
              <span className="ep-feature-icon ep-icon--purple">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V10h4v12H6zM14 22v-8h4v8h-4zM22 22V6h4v16h-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M6 10l4-3 4 3 4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
              </span>
              <div className="ep-feature-body">
                <strong className="ep-feature-title">Generate Impact Reports</strong>
                <p className="ep-feature-desc">Track program outcomes, client success rates, and service effectiveness. Generate comprehensive reports to demonstrate impact and secure funding.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
