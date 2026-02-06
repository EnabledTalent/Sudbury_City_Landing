import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import RoleCards from '@/components/RoleCards'
import PlatformFeatures from '@/components/PlatformFeatures'
import Stakeholders from '@/components/Stakeholders'
import SeamlessExperience from '@/components/SeamlessExperience'
import EmployersProviders from '@/components/EmployersProviders'
import Dashboard from '@/components/Dashboard'
import EnterpriseTrusted from '@/components/EnterpriseTrusted'
import TrustedOrganizations from '@/components/TrustedOrganizations'
import Integrations from '@/components/Integrations'

import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Dashboard />
        <RoleCards />
        <PlatformFeatures />
        <Stakeholders />
        <SeamlessExperience />
        <EmployersProviders />
        <EnterpriseTrusted />
        <TrustedOrganizations />
        <Integrations />

        <CTA />
        <Footer />
      </main>
    </>
  )
}
