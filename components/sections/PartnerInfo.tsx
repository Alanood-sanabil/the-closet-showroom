'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'

export default function PartnerInfo() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const benefits = [
    { title: t.partnershipInfo.benefit1Title, description: t.partnershipInfo.benefit1Description },
    { title: t.partnershipInfo.benefit2Title, description: t.partnershipInfo.benefit2Description },
    { title: t.partnershipInfo.benefit3Title, description: t.partnershipInfo.benefit3Description },
    { title: t.partnershipInfo.benefit4Title, description: t.partnershipInfo.benefit4Description },
  ]

  return (
    <section id="partnership-info" className="py-20 lg:py-28 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl tracking-tight mb-4">
            {t.partnershipInfo.sectionTitle}
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            {t.partnershipInfo.sectionDescription}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 border border-black/10 rounded-lg hover:border-black/20 hover:shadow-sm transition-all duration-200"
            >
              <h3 className="font-serif text-xl mb-3 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-black/60 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
