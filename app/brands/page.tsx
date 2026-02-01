'use client'

import PartnerHero from '@/components/sections/PartnerHero'
import PartnerInfo from '@/components/sections/PartnerInfo'
import ShowroomsSection from '@/components/sections/ShowroomsSection'
import PartnerForm from '@/components/sections/PartnerForm'
import Footer from '@/components/layout/Footer'

export default function BrandsPage() {
  return (
    <main className="min-h-screen">
      <PartnerHero />
      <PartnerInfo />
      <ShowroomsSection mode="partner" />
      <PartnerForm />
      <Footer />
    </main>
  )
}
