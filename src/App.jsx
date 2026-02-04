import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import RoleCards from './components/RoleCards'
import PlatformFeatures from './components/PlatformFeatures'
import Stakeholders from './components/Stakeholders'
import SeamlessExperience from './components/SeamlessExperience'
import EmployersProviders from './components/EmployersProviders'
import Dashboard from './components/Dashboard'
import EnterpriseTrusted from './components/EnterpriseTrusted'
import Integrations from './components/Integrations'
import Partners from './components/Partners'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const handleHashClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a || a.getAttribute('href') === '#') return
      const id = a.getAttribute('href').slice(1)
      const el = document.getElementById(id)
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
    document.addEventListener('click', handleHashClick)
    return () => document.removeEventListener('click', handleHashClick)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <RoleCards />
        <PlatformFeatures />
        <Stakeholders />
        <SeamlessExperience />
        <EmployersProviders />
        <Dashboard />
        <EnterpriseTrusted />
        <Integrations />
        <Partners />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
