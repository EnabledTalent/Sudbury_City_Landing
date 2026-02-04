import React, { useState, useRef, useEffect } from 'react'

const TABS = [
  { id: 'job-seekers', label: 'Job Seekers' },
  { id: 'employers', label: 'Employers' },
  { id: 'service-providers', label: 'Service Providers' },
]

const JOB_SEEKER_CARDS = [
  { title: 'UI/UX Designers', salary: 'CAD 65,000/yr', hired: '56' },
  { title: 'Software Engineers', salary: 'CAD 65,000/yr', hired: '56' },
  { title: 'Project Managers', salary: 'CAD 65,000/yr', hired: '56' },
  { title: 'Data Analysts', salary: 'CAD 62,000/yr', hired: '42' },
]

const EMPLOYER_CARDS = [
  { title: 'Post a Job', salary: 'Reach local talent', hired: '128', label: 'Active listings' },
  { title: 'Browse Candidates', salary: 'Match by skills', hired: '340', label: 'Candidates' },
  { title: 'Manage Hires', salary: 'Onboard & track', hired: '24', label: 'This month' },
]

const PROVIDER_CARDS = [
  { title: 'Training Programs', salary: 'Upskill workforce', hired: '18', label: 'Programs' },
  { title: 'Workforce Services', salary: 'Support job seekers', hired: '12', label: 'Partners' },
  { title: 'Partner Portal', salary: 'Manage referrals', hired: '8', label: 'Active' },
]

function RoleCard({ title, salary, hired, label = 'Recently Hired' }) {
  return (
    <article className="role-card">
      <h3 className="role-card-title">{title}</h3>
      <p className="role-card-salary">{salary}</p>
      <div className="role-card-footer">
        <div className="role-card-left">
          <div className="role-card-avatars">
            <span className="avatar" style={{ background: '#94a3b8' }}>A</span>
            <span className="avatar" style={{ background: '#64748b' }}>B</span>
            <span className="avatar" style={{ background: '#475569' }}>C</span>
          </div>
          <span className="role-card-hired">{label}: <strong>{hired}</strong></span>
        </div>
        <a href="#" className="role-card-link">See more</a>
      </div>
    </article>
  )
}

export default function RoleCards() {
  const [activeTab, setActiveTab] = useState('job-seekers')
  const [prevDisabled, setPrevDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(false)
  const refs = { 'job-seekers': useRef(null), employers: useRef(null), 'service-providers': useRef(null) }

  const getActiveTrack = () => refs[activeTab]?.current ?? null

  const updateCarouselButtons = () => {
    const track = getActiveTrack()
    if (!track) return
    const atStart = track.scrollLeft <= 1
    const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 1
    setPrevDisabled(atStart)
    setNextDisabled(atEnd)
  }

  useEffect(() => {
    updateCarouselButtons()
    const track = getActiveTrack()
    if (!track) return
    track.addEventListener('scroll', updateCarouselButtons)
    return () => track.removeEventListener('scroll', updateCarouselButtons)
  }, [activeTab])

  const handlePrev = () => {
    const track = getActiveTrack()
    if (track) {
      const cardWidth = track.querySelector('.role-card')?.offsetWidth || 320
      track.scrollBy({ left: -(cardWidth + 20), behavior: 'smooth' })
    }
  }

  const handleNext = () => {
    const track = getActiveTrack()
    if (track) {
      const cardWidth = track.querySelector('.role-card')?.offsetWidth || 320
      track.scrollBy({ left: cardWidth + 20, behavior: 'smooth' })
    }
  }

  return (
    <section id="role-cards" className="role-cards-section">
      <div className="container">
        <div className="role-cards-header">
          <div className="role-tabs" role="tablist" aria-label="Audience">
            {TABS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                className={`role-tab ${activeTab === id ? 'active' : ''}`}
                role="tab"
                aria-selected={activeTab === id}
                data-tab={id}
                onClick={() => setActiveTab(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-btn carousel-prev"
              aria-label="Previous"
              disabled={prevDisabled}
              onClick={handlePrev}
            />
            <button
              type="button"
              className="carousel-btn carousel-next"
              aria-label="Next"
              disabled={nextDisabled}
              onClick={handleNext}
            />
          </div>
        </div>
        <div className="role-panels">
          <div
            className={`role-panel ${activeTab === 'job-seekers' ? 'active' : ''}`}
            id="panel-job-seekers"
            role="tabpanel"
            hidden={activeTab !== 'job-seekers'}
          >
            <div className="role-cards-track" data-carousel="job-seekers" ref={refs['job-seekers']}>
              {JOB_SEEKER_CARDS.map((card) => (
                <RoleCard key={card.title} {...card} />
              ))}
            </div>
          </div>
          <div
            className={`role-panel ${activeTab === 'employers' ? 'active' : ''}`}
            id="panel-employers"
            role="tabpanel"
            hidden={activeTab !== 'employers'}
          >
            <div className="role-cards-track" data-carousel="employers" ref={activeTab === 'employers' ? trackRef : null}>
              {EMPLOYER_CARDS.map((card) => (
                <RoleCard key={card.title} {...card} />
              ))}
            </div>
          </div>
          <div
            className={`role-panel ${activeTab === 'service-providers' ? 'active' : ''}`}
            id="panel-service-providers"
            role="tabpanel"
            hidden={activeTab !== 'service-providers'}
          >
            <div className="role-cards-track" data-carousel="service-providers" ref={refs['service-providers']}>
              {PROVIDER_CARDS.map((card) => (
                <RoleCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
