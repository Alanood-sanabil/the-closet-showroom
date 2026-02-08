'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'

export default function PopupLocationsSection() {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const isRTL = language === 'ar'

  const [selectedCity, setSelectedCity] = useState(t.popup.locations[0])

  const handleViewPopup = () => {
    const formElement = document.getElementById('popup-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title and Note */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
            {t.popup.locationsTitle}
          </h2>
          <p className="text-base text-black/50">
            {t.popup.locationsNote}
          </p>
        </div>

        {/* Layout: Left (Cities) | Middle (Venues) | Right (Image) */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${isRTL ? 'lg:grid-cols-3' : ''}`}>
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

          {/* Middle Column: Possible Venues */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-medium text-black/60 mb-4 uppercase tracking-wide">
                {language === 'en' ? 'Possible Venues' : 'الأماكن المحتملة'}
              </h3>
              <ul className="space-y-3">
                {t.popup.possibleVenues.map((venue, index) => (
                  <li
                    key={index}
                    className="text-base text-black/50 pl-4 border-l-2 border-black/10"
                  >
                    {venue}
                  </li>
                ))}
              </ul>
            </div>

            {/* View Pop-up Button */}
            <div className="mt-8">
              <button
                onClick={handleViewPopup}
                className="w-full px-8 py-4 bg-black text-white font-medium tracking-wide hover:bg-black/90 transition-colors"
              >
                {t.popup.viewPopupButton}
              </button>
            </div>
          </div>

          {/* Right Column: Location Image Placeholder */}
          <div className="aspect-[4/3] bg-black/5 border border-black/10 flex items-center justify-center">
            <div className="text-center text-black/30">
              <svg
                className="w-12 h-12 mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="text-sm">{selectedCity}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
