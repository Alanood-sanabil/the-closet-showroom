'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'

export default function PartnerHero() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Badge */}
        <div className="inline-block px-4 py-1.5 bg-black/5 rounded-full mb-6">
          <span className="text-sm font-medium text-black/70">{t.partnerHero.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
          {t.partnerHero.headline.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p className="text-lg lg:text-xl text-black/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t.partnerHero.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={() => scrollToSection('partner-form')}
            className="w-full sm:w-auto px-8 py-3.5 bg-black text-white rounded-md hover:bg-gray-900 transition-all duration-200 font-medium tracking-wide"
          >
            {t.partnerHero.primaryCta}
          </button>
          <button
            onClick={() => scrollToSection('partnership-info')}
            className="w-full sm:w-auto px-8 py-3.5 border border-black/20 rounded-md hover:bg-black/5 transition-all duration-200 font-medium tracking-wide"
          >
            {t.partnerHero.secondaryCta}
          </button>
        </div>

        {/* Note */}
        <p className="text-sm text-black/60 italic">
          {t.partnerHero.note}
        </p>
      </div>
    </section>
  )
}
