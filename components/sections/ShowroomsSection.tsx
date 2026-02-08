'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getCustomerContent, getBrandsContent } from '@/content'

interface ShowroomsSectionProps {
  mode?: 'customer' | 'partner'
}

interface ShowroomLocation {
  id: string
  name: string
  country: string
  locations: string[]
  appointmentNote?: string
  pricingNote?: string
}

export default function ShowroomsSection({ mode = 'customer' }: ShowroomsSectionProps) {
  const { language } = useLanguage()
  const t = mode === 'customer' ? getCustomerContent(language) : getBrandsContent(language)
  const isRTL = language === 'ar'

  // Showroom data - easy to edit
  const showrooms: ShowroomLocation[] = [
    {
      id: 'riyadh',
      name: t.showrooms.riyadh,
      country: 'Saudi Arabia',
      locations: ['Solitaire Mall', 'Kingdom Centre', 'Westfield'],
      appointmentNote: mode === 'customer' ? t.showrooms.appointmentNote : undefined,
      pricingNote: mode === 'partner' ? t.showrooms.pricingNoteRiyadh : undefined,
    },
    {
      id: 'jeddah',
      name: t.showrooms.jeddah,
      country: 'Saudi Arabia',
      locations: ['Red Sea Mall', 'Boulevard Mall', 'Al Khayat Center'],
      appointmentNote: mode === 'customer' ? t.showrooms.appointmentNote : undefined,
      pricingNote: mode === 'partner' ? t.showrooms.pricingNoteJeddah : undefined,
    },
    {
      id: 'dubai',
      name: t.showrooms.dubai,
      country: 'UAE',
      locations: ['Dubai Mall', 'Mall of the Emirates'],
      appointmentNote: mode === 'customer' ? t.showrooms.appointmentNote : undefined,
      pricingNote: mode === 'partner' ? t.showrooms.pricingNoteDubai : undefined,
    },
  ]

  const [selectedShowroom, setSelectedShowroom] = useState<ShowroomLocation>(showrooms[0])

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl tracking-tight mb-4">
            {t.showrooms.sectionTitle}
          </h2>
          <p className="text-lg text-black/60 max-w-3xl mx-auto leading-relaxed">
            {t.showrooms.intro}
          </p>
        </div>

        {/* Showroom Selector + Details Layout */}
        <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Left: City Selector Cards */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="flex flex-col gap-3">
              {showrooms.map((showroom) => {
                const isSelected = selectedShowroom.id === showroom.id
                return (
                  <button
                    key={showroom.id}
                    onClick={() => setSelectedShowroom(showroom)}
                    className={`text-left px-6 py-5 border transition-all duration-200 ${
                      isSelected
                        ? 'border-black bg-black text-white'
                        : 'border-black/10 bg-white text-black hover:border-black/30'
                    }`}
                  >
                    <div className="font-serif text-xl tracking-tight mb-1">
                      {showroom.name}
                    </div>
                    <div className={`text-sm tracking-wide ${isSelected ? 'text-white/60' : 'text-black/40'}`}>
                      {showroom.country}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: Selected Showroom Details */}
          <div className="flex-1">
            <div className="max-w-2xl">
              {/* City Header */}
              <div className="mb-8">
                <h3 className="font-serif text-3xl lg:text-4xl tracking-tight mb-2">
                  {selectedShowroom.name}
                </h3>
                <p className="text-base text-black/50 tracking-wide">
                  {selectedShowroom.country}
                </p>
              </div>

              {/* Locations */}
              <div className="mb-8">
                <h4 className="text-sm font-medium text-black/70 uppercase tracking-wider mb-4">
                  {language === 'en' ? 'Pop-up Spots' : 'نقاط المعرض'}
                </h4>
                <ul className="space-y-3">
                  {selectedShowroom.locations.map((location, index) => (
                    <li
                      key={index}
                      className="text-base text-black/80 leading-relaxed pl-4 border-l-2 border-black/10"
                    >
                      {location}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Note (Partner) */}
              {selectedShowroom.pricingNote && (
                <div className="py-4 px-5 bg-black/5 border-l-2 border-black">
                  <p className="text-sm text-black/70 leading-relaxed">
                    {selectedShowroom.pricingNote}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
