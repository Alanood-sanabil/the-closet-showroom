'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'

export default function PopupLocationsSection() {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const isRTL = language === 'ar'

  const [selectedCity, setSelectedCity] = useState(t.popup.locations[0])

  return (
    <section className="py-12 md:py-20 lg:py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Semi-transparent container */}
        <div
          className="relative rounded-lg md:rounded-xl p-5 md:p-6 lg:p-8 backdrop-blur-sm"
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            zIndex: 1,
          }}
        >
          {/* Title and Note */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              {t.popup.locationsTitle}
            </h2>
            <p className="text-sm md:text-base text-black/50 leading-snug md:leading-relaxed">
              {t.popup.locationsNote}
            </p>
          </div>

          {/* Layout: Stacked on mobile, Side-by-side on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Cities List */}
            <div className="space-y-2 md:space-y-3">
              {t.popup.locations.map((city) => {
                const isSelected = selectedCity === city
                return (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`w-full text-left px-4 py-3 md:px-6 md:py-4 border transition-all duration-200 ${
                      isSelected
                        ? 'border-black bg-black text-white'
                        : 'border-black/10 bg-white text-black hover:border-black/30'
                    }`}
                  >
                    <div className="font-medium text-sm md:text-base">
                      {city}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Upcoming Venues for Selected City */}
            <div className="mt-2 lg:mt-0">
              <h3 className="text-xs md:text-sm font-medium text-black/60 mb-3 md:mb-4 uppercase tracking-wide">
                {language === 'en' ? 'Upcoming Venues' : 'الأماكن القادمة'}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {t.popup.venuesByCity[selectedCity]?.map((venue, index) => (
                  <li
                    key={index}
                    className="text-sm md:text-base text-black/50 pl-3 md:pl-4 border-l-2 border-black/10"
                  >
                    {venue}
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </div>
      </div>
    </section>
  )
}
