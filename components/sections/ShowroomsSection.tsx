'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { getCustomerContent, getBrandsContent } from '@/content'

// DEV MODE: Set to true to enable calibration mode
const CALIBRATION_MODE = false

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
      pinPosition: { top: '50%', left: '55%' }, // Central Saudi Arabia
    },
    {
      id: 'jeddah',
      name: t.showrooms.jeddah,
      country: 'Saudi Arabia',
      locations: t.showrooms.jeddahLocations,
      appointmentNote: mode === 'customer' ? t.showrooms.appointmentNote : undefined,
      pricingNote: mode === 'partner' ? t.showrooms.pricingNoteJeddah : undefined,
      pinPosition: { top: '45%', left: '25%' }, // West coast Saudi Arabia
    },
    {
      id: 'dubai',
      name: t.showrooms.dubai,
      country: 'UAE',
      locations: t.showrooms.dubaiLocations,
      appointmentNote: mode === 'customer' ? t.showrooms.appointmentNote : undefined,
      pricingNote: mode === 'partner' ? t.showrooms.pricingNoteDubai : undefined,
      pinPosition: { top: '55%', left: '82%' }, // UAE region
    },
  ]

  const [selectedCity, setSelectedCity] = useState<CityData>(cities[0]) // Default: Riyadh
  const mapContainerRef = useRef<HTMLDivElement>(null)

  // Calibration mode: Click handler to log coordinates
  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!CALIBRATION_MODE || !mapContainerRef.current) return

    const rect = mapContainerRef.current.getBoundingClientRect()
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100

    console.log('📍 Map Click Coordinates:')
    console.log(`  top: '${yPercent.toFixed(1)}%', left: '${xPercent.toFixed(1)}%'`)
    console.log(`  Raw: x=${e.clientX - rect.left}px, y=${e.clientY - rect.top}px`)
    console.log(`  Container: ${rect.width}px × ${rect.height}px`)
  }

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
            {CALIBRATION_MODE && (
              <div className="mb-2 px-3 py-2 bg-yellow-100 border border-yellow-400 text-yellow-800 text-xs rounded">
                <strong>🛠️ CALIBRATION MODE:</strong> Click on the map to see coordinates in console
              </div>
            )}
            <div className="relative w-full aspect-[71/61]">
              {/* GCC Map PNG */}
              <div
                ref={mapContainerRef}
                className="relative w-full h-full"
                onClick={handleMapClick}
              >
                <Image
                  src="/images/brands/Group1.png"
                  alt="GCC Region Map"
                  fill
                  className="object-contain"
                  priority
                />

                {/* City Pins Overlay */}
                {cities.map((city) => {
                  const isSelected = selectedCity.id === city.id
                  return (
                    <button
                      key={city.id}
                      onClick={() => setSelectedCity(city)}
                      className="absolute group z-10"
                      style={{
                        top: city.pinPosition.top,
                        left: city.pinPosition.left,
                        transform: 'translate(-50%, -50%)'
                      }}
                      aria-label={`Select ${city.name}`}
                    >
                      {/* Pin Dot */}
                      <div
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          isSelected
                            ? 'bg-black scale-150 ring-4 ring-black/20'
                            : 'bg-gray-400 group-hover:bg-black group-hover:scale-125'
                        }`}
                      />

                      {/* City Label (hover/active) */}
                      <div
                        className={`absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium transition-all duration-300 ${
                          isSelected
                            ? 'text-black opacity-100'
                            : 'text-black/50 group-hover:text-black opacity-0 group-hover:opacity-100'
                        }`}
                      >
                        {city.name}
                      </div>
                    </button>
                  )
                })}
              </div>
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
