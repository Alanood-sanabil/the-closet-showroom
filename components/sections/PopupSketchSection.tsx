'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'

export default function PopupSketchSection() {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const isRTL = language === 'ar'

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-8 bg-black/5">
      <div className="max-w-5xl mx-auto">
        {/* Sketch-style placeholder image with locations */}
        <div className="aspect-[16/9] bg-white border-2 border-black/10 flex items-center justify-center relative">
          {/* Placeholder content - sketch-style visualization */}
          <div className={`text-center ${isRTL ? 'font-arabic' : ''}`}>
            <svg
              className="w-16 h-16 mx-auto mb-6 text-black/20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            {/* Location pins/markers */}
            <div className="space-y-2 mb-4">
              {t.popup.locations.map((location, index) => (
                <div
                  key={index}
                  className="text-sm font-medium text-black/40 tracking-wide"
                >
                  📍 {location}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Label */}
        <p className="text-center text-sm text-black/50 mt-6 tracking-wide">
          {t.popup.sketchLabel}
        </p>
      </div>
    </section>
  )
}
