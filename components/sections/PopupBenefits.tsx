'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'

export default function PopupBenefits() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const benefits = [
    {
      title: t.popup.benefit1Title,
      description: t.popup.benefit1Description,
    },
    {
      title: t.popup.benefit2Title,
      description: t.popup.benefit2Description,
    },
    {
      title: t.popup.benefit3Title,
      description: t.popup.benefit3Description,
    },
  ]

  return (
    <section className="py-12 md:py-20 lg:py-28 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold">
            {t.popup.whyJoinTitle}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              {/* Checkmark Icon */}
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 md:mb-6 bg-black rounded-full">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-black/60 leading-snug md:leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
