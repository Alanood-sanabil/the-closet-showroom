'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'

export default function PopupLocationsSection() {
  const { language } = useLanguage()
  const t = getTranslations(language)

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

          {/* Cities List - Centered */}
          <div className="max-w-2xl mx-auto">
            <div className="space-y-3 md:space-y-4">
              {t.popup.locations.map((city) => {
                const isSelected = selectedCity === city
                return (
                  <button
                    key={city}
                    onClick={() => {
                      setSelectedCity(city)
                      // Smooth scroll to form
                      const formElement = document.getElementById('popup-form')
                      if (formElement) {
                        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }}
                    className={`w-full text-left px-6 py-4 md:px-8 md:py-5 border transition-all duration-200 ${
                      isSelected
                        ? 'border-black bg-black text-white'
                        : 'border-black/10 bg-white text-black hover:border-black/30'
                    }`}
                  >
                    <div className="font-medium text-base md:text-lg">
                      {city}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
      </div>
      </div>
    </section>
  )
}
