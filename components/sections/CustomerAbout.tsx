'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'

export default function CustomerAbout() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 lg:py-32 px-6 lg:px-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ backgroundColor: '#F5F3EF' }}
    >
      {/* Subtle divider line */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16 lg:mb-20">
        <div className="h-px bg-black/10" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          {/* Left Column - Headline with quotation mark */}
          <div className="relative">
            {/* Decorative quotation mark */}
            <div className="absolute -top-8 -left-8 md:-left-12 lg:-left-16 text-6xl md:text-8xl lg:text-9xl font-serif text-black/[0.08] leading-none z-0">
              &ldquo;
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight relative z-10">
              {t.customerAbout.headline}
            </h2>
          </div>

          {/* Right Column - Body Text */}
          <div>
            <p className="text-base md:text-lg lg:text-xl text-black/70 leading-relaxed whitespace-pre-line">
              {t.customerAbout.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
