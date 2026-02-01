'use client'

import { useEffect, useRef, useState } from 'react'
import { track } from '@/lib/track'
import { HERO_VIDEO_CONTENT } from '@/content/customer'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'
import Image from 'next/image'

export default function Hero() {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const content = { heroVideo: HERO_VIDEO_CONTENT }
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasError, setHasError] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const handleCtaClick = (cta: 'preview' | 'access') => {
    track('cta_click', { cta })
    const element = document.getElementById(cta === 'preview' ? 'preview' : 'access')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleError = () => {
    setHasError(true)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 overflow-hidden bg-black">
      {/* Video Background */}
      {!prefersReducedMotion && !hasError ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={content.heroVideo.poster || undefined}
          onError={handleError}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={content.heroVideo.src} type="video/mp4" />
        </video>
      ) : (
        content.heroVideo.poster && (
          <div className="absolute inset-0 z-0">
            <Image
              src={content.heroVideo.poster}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )
      )}

      {/* Readability Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/75 to-white/85 z-[5]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 lg:mb-8 text-balance">
          {t.customerHero.headline.map((line, index) => (
            <span key={index}>
              {line}
              {index < t.customerHero.headline.length - 1 && <br />}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p className="text-lg lg:text-xl text-black/60 max-w-xl mx-auto mb-10 lg:mb-14 leading-relaxed">
          {t.customerHero.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA */}
          <button
            onClick={() => handleCtaClick('access')}
            className="w-full sm:w-auto px-8 py-4 bg-black text-white font-medium tracking-wide rounded-sm hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            {t.customerHero.primaryCta}
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => handleCtaClick('preview')}
            className="w-full sm:w-auto px-8 py-4 border border-black text-black font-medium tracking-wide rounded-sm hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            {t.customerHero.secondaryCta}
          </button>
        </div>
      </div>
    </section>
  )
}
