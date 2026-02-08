'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'

export default function PopupHero() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-6 lg:px-8 pt-20">
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center py-20">
        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 lg:mb-8 lg:whitespace-nowrap">
          {t.popup.heroHeadline}
        </h1>

        {/* Subtext */}
        <p className="text-lg lg:text-xl text-black/60 max-w-xl mx-auto leading-relaxed">
          {t.popup.heroSubtext}
        </p>
      </div>
    </section>
  )
}
