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
    <section className="py-20 lg:py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Semi-transparent container */}
        <div
          className="relative rounded-xl p-6 lg:p-8 backdrop-blur-sm"
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            zIndex: 1,
          }}
        >
          {/* Title and Note */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
              {t.popup.locationsTitle}
            </h2>
            <p className="text-base text-black/50">
              {t.popup.locationsNote}
            </p>
          </div>

          {/* Layout: Left (Cities) | Right (Venues) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Cities List */}
            <div className="space-y-3">
              {t.popup.locations.map((city) => {
                const isSelected = selectedCity === city
                return (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`w-full text-left px-6 py-4 border transition-all duration-200 ${
                      isSelected
                        ? 'border-black bg-black text-white'
                        : 'border-black/10 bg-white text-black hover:border-black/30'
                    }`}
                  >
                    <div className="font-medium text-base">
                      {city}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Right Column: Upcoming Venues for Selected City */}
            <div>
              <h3 className="text-sm font-medium text-black/60 mb-4 uppercase tracking-wide">
                {language === 'en' ? 'Upcoming Venues' : 'الأماكن القادمة'}
              </h3>
              <ul className="space-y-3">
                {t.popup.venuesByCity[selectedCity]?.map((venue, index) => (
                  <li
                    key={index}
                    className="text-base text-black/50 pl-4 border-l-2 border-black/10"
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
