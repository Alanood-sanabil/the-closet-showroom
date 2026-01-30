'use client'

import PartnerHero from '@/components/sections/PartnerHero'
import PartnerInfo from '@/components/sections/PartnerInfo'
import ShowroomsSection from '@/components/sections/ShowroomsSection'
import PartnerForm from '@/components/sections/PartnerForm'
import Footer from '@/components/layout/Footer'
import { getPartnerLandingContent } from '@/content/brandLanding'

export default function BrandsPage() {
  const content = getPartnerLandingContent()

  return (
    <main className="min-h-screen">
      <PartnerHero />
      <PartnerInfo />
      <ShowroomsSection content={content.showroomsSection} />
      <PartnerForm />
      <Footer />
    </main>
  )
}
