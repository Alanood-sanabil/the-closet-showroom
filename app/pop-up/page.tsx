'use client'

import PopupHero from '@/components/sections/PopupHero'
import PopupLocationsSection from '@/components/sections/PopupLocationsSection'
import PopupBenefits from '@/components/sections/PopupBenefits'
import PopupForm from '@/components/sections/PopupForm'
import PopupAbout from '@/components/sections/PopupAbout'
import Footer from '@/components/layout/Footer'

export default function PopupPage() {
  return (
    <main className="min-h-screen">
      {/* Background Image Container - Hero + Locations sections */}
      <div
        className="relative bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/assets/thepopup.png)',
          backgroundPosition: 'center top',
        }}
      >
        {/* Subtle white overlay for readability */}
        <div className="absolute inset-0 bg-white/60" />

        {/* Content */}
        <div className="relative z-10">
          <PopupHero />
          <PopupLocationsSection />
        </div>
      </div>

      {/* Benefits, Form, About, and Footer - no background */}
      <PopupBenefits />
      <PopupForm />
      <PopupAbout />
      <Footer />
    </main>
  )
}
