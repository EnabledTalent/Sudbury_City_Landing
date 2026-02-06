'use client'

import React, { useEffect, useRef, useState } from 'react'

const TABS = [
  { id: 'job-seekers', label: 'Job Seekers' },
  { id: 'employers', label: 'Employers' },
  { id: 'service-providers', label: 'Service Providers' },
] as const

type TabId = typeof TABS[number]['id']

type RoleCardProps = {
  title: string
  salary: string
  hired: string
  label?: string
}

const JOB_SEEKER_CARDS: RoleCardProps[] = [
  { title: 'UI/UX Designers', salary: 'CAD 65,000/yr', hired: '56' },
  { title: 'Software Engineers', salary: 'CAD 65,000/yr', hired: '56' },
  { title: 'Project Managers', salary: 'CAD 65,000/yr', hired: '56' },
]

const EMPLOYER_CARDS: RoleCardProps[] = [
  { title: 'Post a Job', salary: 'Reach local talent', hired: '128', label: 'Active listings' },
  { title: 'Browse Candidates', salary: 'Match by skills', hired: '340', label: 'Candidates' },
  { title: 'Manage Hires', salary: 'Onboard and track', hired: '24', label: 'This month' },
]

const PROVIDER_CARDS: RoleCardProps[] = [
  { title: 'Training Programs', salary: 'Upskill workforce', hired: '18', label: 'Programs' },
  { title: 'Workforce Services', salary: 'Support job seekers', hired: '12', label: 'Partners' },
  { title: 'Partner Portal', salary: 'Manage referrals', hired: '8', label: 'Active' },
]

function RoleCard({ title, salary, hired, label = 'Recently Hired' }: RoleCardProps) {
  return (
    <article className="role-card">
      <h3 className="role-card-title">{title}</h3>
      <p className="role-card-salary">{salary}</p>
      <div className="role-card-footer">
        <div className="role-card-left">
          <img className="role-card-avatars" src="/assets/role-cards/people-icons.svg" alt="" aria-hidden="true" />
          <span className="role-card-hired">{label}: <strong>{hired}</strong></span>
        </div>
        <a href="#" className="role-card-link">See more</a>
      </div>
    </article>
  )
}

export default function RoleCards() {
  const [activeTab, setActiveTab] = useState<TabId>('job-seekers')
  const [prevDisabled, setPrevDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(false)

  const jobSeekersRef = useRef<HTMLDivElement | null>(null)
  const employersRef = useRef<HTMLDivElement | null>(null)
  const providersRef = useRef<HTMLDivElement | null>(null)

  const refs: Record<TabId, React.RefObject<HTMLDivElement>> = {
    'job-seekers': jobSeekersRef,
    employers: employersRef,
    'service-providers': providersRef,
  }

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
    if (!track) return undefined
    track.addEventListener('scroll', updateCarouselButtons)
    return () => track.removeEventListener('scroll', updateCarouselButtons)
  }, [activeTab])

  const handlePrev = () => {
    const track = getActiveTrack()
    if (track) {
      const cardWidth = track.querySelector<HTMLElement>('.role-card')?.offsetWidth || 320
      track.scrollBy({ left: -(cardWidth + 20), behavior: 'smooth' })
    }
  }

  const handleNext = () => {
    const track = getActiveTrack()
    if (track) {
      const cardWidth = track.querySelector<HTMLElement>('.role-card')?.offsetWidth || 320
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
            <div className="role-cards-track" data-carousel="employers" ref={refs.employers}>
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
      <style>{`
        .container {
          width: min(100% - 2rem, 1440px);
          margin-inline: auto;
          padding-inline: 1.5rem;
        }

        .role-cards-section {
          padding-block: 5rem 4rem;
          background: #ffffff;
        }

        .role-cards-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.75rem;
        }

        .role-tabs {
          display: inline-flex;
          gap: 0.5rem;
          background: #ffffff;
          padding: 0.5rem;
          border-radius: 18px;
          box-shadow: 0 8px 20px rgba(17, 24, 39, 0.08);
        }

        .role-tab {
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

        .role-tab:hover {
          color: #111827;
          background: #f3f4f6;
        }

        .role-tab.active {
          color: #ffffff;
          background: #0f8f38;
          font-family: 'Outfit', sans-serif;
          font-weight: 400;
          line-height: 1;
          box-shadow: 0 6px 14px rgba(14, 143, 55, 0.25);
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .carousel-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: #f3f4f6;
          color: #6b7280;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, color 0.2s, opacity 0.2s;
        }

        .carousel-btn::before {
          content: '';
          display: block;
          width: 10px;
          height: 10px;
          border-top: 2px solid #6b7280;
          border-right: 2px solid #6b7280;
          transform: rotate(45deg);
        }

        .carousel-prev::before {
          transform: rotate(-135deg);
        }

        .role-panels {
          position: relative;
        }

        .role-panel {
          display: none;
        }

        .role-panel.active {
          display: block;
        }

        .role-cards-track {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2rem;
          max-width: 1440px;
          margin: 0 auto;
        }

        .role-card {
          background: #ffffff;
          border: 1px solid #eef0f3;
          border-radius: 18px;
          padding: 1.8rem 2rem;
          position: relative;
          min-height: 210px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 24px rgba(17, 24, 39, 0.06);
          transition: box-shadow 0.2s ease;
        }

        .role-card:hover {
          box-shadow: 0 12px 28px rgba(17, 24, 39, 0.08);
        }

        .role-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #111827;
          margin: 0 0 0.35rem;
        }

        .role-card-salary {
          font-size: 0.85rem;
          color: #9aa3af;
          margin: 0 0 auto;
          padding-bottom: 1.1rem;
        }

        .role-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-top: auto;
          border-top: 1px solid #e6e8eb;
          padding-top: 1.1rem;
        }

        .role-card-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
          min-width: 0;
        }

        .role-card-avatars {
          width: 76px;
          height: 36px;
          display: block;
        }

        .role-card-hired {
          font-size: 0.78rem;
          color: #9aa3af;
          white-space: nowrap;
        }

        .role-card-hired strong {
          color: #111827;
          font-weight: 700;
        }

        .role-card-link {
          font-size: 0.78rem;
          font-weight: 600;
          color: #00ee5c;
          margin-left: auto;
          padding-left: 0.25rem;
          text-decoration: none;
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .role-cards-track {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .container {
            width: min(100% - 0.5rem, 1440px);
            padding-inline: 0.25rem;
          }

          .role-cards-section {
            padding-block: 2rem 2.25rem;
          }

          .role-cards-header {
            gap: 0.9rem;
            margin-bottom: 1rem;
          }

          .role-tabs {
            width: 100%;
            max-width: none;
            display: grid;
            grid-template-columns: 1fr 1fr 1.22fr;
            overflow: visible;
            border-radius: 16px;
          }

          .role-tab {
            font-size: 0.72rem;
            padding: 0.72rem 0.3rem;
            border-radius: 14px;
            width: 100%;
            text-align: center;
            white-space: nowrap;
          }

          .carousel-controls {
            width: 100%;
            justify-content: flex-start;
          }

          .carousel-btn {
            width: 50px;
            height: 50px;
          }

          .role-cards-track {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .role-card {
            min-height: 186px;
            padding: 1.2rem 1rem;
            border-radius: 14px;
          }

          .role-card-title {
            font-size: 0.78rem;
            margin-bottom: 0.2rem;
          }

          .role-card-salary {
            font-size: 0.62rem;
            padding-bottom: 0.8rem;
          }

          .role-card-footer {
            padding-top: 0.8rem;
            gap: 0.45rem;
          }

          .role-card-left {
            gap: 0.4rem;
          }

          .role-card-avatars {
            width: 62px;
            height: 30px;
          }

          .role-card-hired {
            font-size: 0.5rem;
          }

          .role-card-link {
            font-size: 0.5rem;
            padding-left: 0;
          }

          .role-cards-track {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
