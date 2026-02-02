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
      pinPosition: { top: '45%', left: '58%' },
    },
    {
      id: 'jeddah',
      name: t.showrooms.jeddah,
      country: 'Saudi Arabia',
      locations: t.showrooms.jeddahLocations,
      appointmentNote: mode === 'customer' ? t.showrooms.appointmentNote : undefined,
      pricingNote: mode === 'partner' ? t.showrooms.pricingNoteJeddah : undefined,
      pinPosition: { top: '50%', left: '48%' },
    },
    {
      id: 'dubai',
      name: t.showrooms.dubai,
      country: 'UAE',
      locations: t.showrooms.dubaiLocations,
      appointmentNote: mode === 'customer' ? t.showrooms.appointmentNote : undefined,
      pricingNote: mode === 'partner' ? t.showrooms.pricingNoteDubai : undefined,
      pinPosition: { top: '55%', left: '68%' },
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
              {/* Simple Middle East Map SVG */}
              <svg
                viewBox="0 0 800 600"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified Middle East outline */}
                <path
                  d="M200,150 Q250,100 350,120 Q450,140 550,160 L600,200 L620,280 Q630,350 600,420 L550,480 Q500,520 400,500 Q300,480 250,450 L200,400 Q150,350 160,280 Q170,220 200,150Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-black/20"
                />

                {/* Saudi Arabia region (approximate) */}
                <path
                  d="M300,250 Q350,230 420,240 L460,280 Q470,320 450,360 L400,390 Q350,380 310,360 L280,320 Q270,280 300,250Z"
                  fill="currentColor"
                  className="text-black/[0.03]"
                />

                {/* UAE region (approximate) */}
                <path
                  d="M520,340 L550,345 L555,370 L540,380 L520,375 Z"
                  fill="currentColor"
                  className="text-black/[0.03]"
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
