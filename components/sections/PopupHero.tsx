'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'

export default function PopupHero() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center px-6 lg:px-8 pt-16 md:pt-20">
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center py-12 md:py-20">
        {/* Headline */}
        <h1 className="font-serif font-bold leading-[1.1] tracking-tight mb-4 md:mb-6 lg:mb-8">
          {/* Mobile: Two lines */}
          <span className="block md:hidden">
            <span className="text-4xl block mb-2">
              The Closet <span className="whitespace-nowrap">Pop-Up</span>
            </span>
            <span className="text-2xl text-black/70 block">Coming to you soon</span>
          </span>
          {/* Desktop: Single line */}
          <span className="hidden md:block text-5xl lg:text-6xl lg:whitespace-nowrap">
            {t.popup.heroHeadline}
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg lg:text-xl text-black/60 max-w-xl mx-auto leading-relaxed">
          {t.popup.heroSubtext}
        </p>
      </div>
    </section>
  )
}
