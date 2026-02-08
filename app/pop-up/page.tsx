'use client'

import PopupHero from '@/components/sections/PopupHero'
import PopupLocationsSection from '@/components/sections/PopupLocationsSection'
import PopupForm from '@/components/sections/PopupForm'
import Footer from '@/components/layout/Footer'

export default function PopupPage() {
  return (
    <main className="min-h-screen">
      <PopupHero />
      <PopupLocationsSection />
      <PopupForm />
      <Footer />
    </main>
  )
}
