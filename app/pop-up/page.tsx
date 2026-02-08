'use client'

import PopupHero from '@/components/sections/PopupHero'
import PopupLocationsSection from '@/components/sections/PopupLocationsSection'
import PopupForm from '@/components/sections/PopupForm'
import Footer from '@/components/layout/Footer'

export default function PopupPage() {
  return (
    <main className="min-h-screen">
      {/* Background Image Container - Hero + Locations sections */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/assets/thepopup.png)',
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

      {/* Form and Footer - no background */}
      <PopupForm />
      <Footer />
    </main>
  )
}
