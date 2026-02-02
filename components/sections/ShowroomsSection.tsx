'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getCustomerContent, getBrandsContent } from '@/content'

interface ShowroomsSectionProps {
  mode?: 'customer' | 'partner'
}

interface CityData {
  id: string
  name: string
  country: string
  locations: string
  appointmentNote?: string
  pricingNote?: string
  pinPosition: { top: string; left: string }
}

export default function ShowroomsSection({ mode = 'customer' }: ShowroomsSectionProps) {
  const { language } = useLanguage()
  const t = mode === 'customer' ? getCustomerContent(language) : getBrandsContent(language)
  const isRTL = language === 'ar'

  const cities: CityData[] = [
    {
      id: 'riyadh',
      name: t.showrooms.riyadh,
      country: 'Saudi Arabia',
      locations: t.showrooms.riyadhLocations,
      appointmentNote: mode === 'customer' ? t.showrooms.appointmentNote : undefined,
      pricingNote: mode === 'partner' ? t.showrooms.pricingNoteRiyadh : undefined,
      pinPosition: { top: '48%', left: '52%' },
    },
    {
      id: 'jeddah',
      name: t.showrooms.jeddah,
      country: 'Saudi Arabia',
      locations: t.showrooms.jeddahLocations,
      appointmentNote: mode === 'customer' ? t.showrooms.appointmentNote : undefined,
      pricingNote: mode === 'partner' ? t.showrooms.pricingNoteJeddah : undefined,
      pinPosition: { top: '52%', left: '38%' },
    },
    {
      id: 'dubai',
      name: t.showrooms.dubai,
      country: 'UAE',
      locations: t.showrooms.dubaiLocations,
      appointmentNote: mode === 'customer' ? t.showrooms.appointmentNote : undefined,
      pricingNote: mode === 'partner' ? t.showrooms.pricingNoteDubai : undefined,
      pinPosition: { top: '58%', left: '68%' },
    },
  ]

  const [selectedCity, setSelectedCity] = useState<CityData>(cities[0]) // Default: Riyadh

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl tracking-tight mb-4">
            {t.showrooms.sectionTitle}
          </h2>
          <p className="text-lg text-black/60 max-w-3xl mx-auto leading-relaxed">
            {t.showrooms.intro}
          </p>
        </div>

        {/* Map + Details Layout */}
        <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Map Container */}
          <div className="flex-1 lg:flex-[1.2]">
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-black/[0.02] to-black/[0.04] rounded-lg overflow-hidden border border-black/5">
              {/* GCC Region Map SVG */}
              <svg
                viewBox="0 0 800 600"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Saudi Arabia */}
                <path
                  d="M 280,180 L 320,160 L 360,150 L 400,155 L 440,165 L 470,180 L 500,200 L 520,230 L 530,260 L 535,290 L 535,320 L 530,350 L 520,380 L 505,405 L 485,425 L 460,440 L 430,450 L 400,455 L 370,455 L 340,450 L 310,440 L 285,425 L 265,405 L 250,380 L 240,350 L 235,320 L 235,290 L 240,260 L 250,230 L 265,205 L 280,180 Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-black/[0.08]"
                />

                {/* UAE */}
                <path
                  d="M 540,350 L 555,345 L 570,345 L 582,350 L 590,360 L 592,372 L 588,385 L 578,395 L 565,398 L 550,395 L 540,385 L 538,372 L 540,360 Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-black/[0.08]"
                />

                {/* Qatar */}
                <path
                  d="M 505,300 L 515,295 L 523,298 L 525,308 L 522,318 L 515,322 L 507,320 L 503,310 Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-black/[0.08]"
                />

                {/* Kuwait */}
                <path
                  d="M 480,210 L 490,205 L 500,208 L 505,215 L 505,225 L 500,232 L 490,235 L 482,230 L 478,220 Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-black/[0.08]"
                />

                {/* Bahrain (small island) */}
                <circle
                  cx="495"
                  cy="285"
                  r="3"
                  fill="currentColor"
                  className="text-black/[0.08]"
                />

                {/* Oman */}
                <path
                  d="M 590,360 L 605,355 L 620,358 L 630,368 L 635,385 L 635,405 L 630,425 L 620,440 L 605,450 L 590,455 L 575,452 L 565,442 L 560,425 L 560,405 L 565,385 L 575,370 Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-black/[0.08]"
                />

                {/* Country borders (subtle outlines) */}
                <path
                  d="M 280,180 L 320,160 L 360,150 L 400,155 L 440,165 L 470,180 L 500,200 L 520,230 L 530,260 L 535,290 L 535,320 L 530,350 L 520,380 L 505,405 L 485,425 L 460,440 L 430,450 L 400,455 L 370,455 L 340,450 L 310,440 L 285,425 L 265,405 L 250,380 L 240,350 L 235,320 L 235,290 L 240,260 L 250,230 L 265,205 L 280,180 Z
                     M 540,350 L 555,345 L 570,345 L 582,350 L 590,360 L 592,372 L 588,385 L 578,395 L 565,398 L 550,395 L 540,385 L 538,372 L 540,360 Z
                     M 505,300 L 515,295 L 523,298 L 525,308 L 522,318 L 515,322 L 507,320 L 503,310 Z
                     M 480,210 L 490,205 L 500,208 L 505,215 L 505,225 L 500,232 L 490,235 L 482,230 L 478,220 Z
                     M 590,360 L 605,355 L 620,358 L 630,368 L 635,385 L 635,405 L 630,425 L 620,440 L 605,450 L 590,455 L 575,452 L 565,442 L 560,425 L 560,405 L 565,385 L 575,370 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black/20"
                />
              </svg>

              {/* City Pins */}
              {cities.map((city) => {
                const isSelected = selectedCity.id === city.id
                return (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCity(city)}
                    className="absolute group"
                    style={{ top: city.pinPosition.top, left: city.pinPosition.left }}
                    aria-label={`Select ${city.name}`}
                  >
                    {/* Pin Circle */}
                    <div
                      className={`w-4 h-4 rounded-full transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${
                        isSelected
                          ? 'bg-black scale-125 ring-4 ring-black/20'
                          : 'bg-black/40 group-hover:bg-black/70 group-hover:scale-110'
                      }`}
                    />

                    {/* City Label */}
                    <div
                      className={`absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium transition-all duration-300 ${
                        isSelected
                          ? 'text-black opacity-100'
                          : 'text-black/50 group-hover:text-black/80 opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      {city.name}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Details Panel */}
          <div className="flex-1">
            <div className="sticky top-24">
              {/* City Header */}
              <div className="mb-6">
                <h3 className="font-serif text-2xl lg:text-3xl tracking-tight mb-2">
                  {selectedCity.name}
                </h3>
                <p className="text-sm text-black/40 tracking-wide">
                  {selectedCity.country}
                </p>
              </div>

              {/* Locations */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-black/70 uppercase tracking-wider mb-3">
                  {language === 'en' ? 'Locations' : 'المواقع'}
                </h4>
                <p className="text-base text-black/80 leading-relaxed">
                  {selectedCity.locations}
                </p>
              </div>

              {/* Appointment Note (Customer) */}
              {selectedCity.appointmentNote && (
                <div className="py-3 px-4 bg-black/5 border-l-2 border-black">
                  <p className="text-sm font-medium text-black">
                    {selectedCity.appointmentNote}
                  </p>
                </div>
              )}

              {/* Pricing Note (Partner) */}
              {selectedCity.pricingNote && (
                <div className="py-3 px-4 bg-black/5 border-l-2 border-black">
                  <p className="text-sm text-black/70 leading-relaxed">
                    {selectedCity.pricingNote}
                  </p>
                </div>
              )}

              {/* City Selector Pills (Mobile Alternative) */}
              <div className="flex flex-wrap gap-2 mt-8 lg:hidden">
                {cities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCity(city)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      selectedCity.id === city.id
                        ? 'bg-black text-white'
                        : 'bg-white border border-black/20 text-black hover:border-black'
                    }`}
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
