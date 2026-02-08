'use client'

import PopupHero from '@/components/sections/PopupHero'
import PopupSketchSection from '@/components/sections/PopupSketchSection'
import PopupForm from '@/components/sections/PopupForm'
import Footer from '@/components/layout/Footer'

export default function PopupPage() {
  return (
    <main className="min-h-screen">
      <PopupHero />
      <PopupSketchSection />
      <PopupForm />
      <Footer />
    </main>
  )
}
