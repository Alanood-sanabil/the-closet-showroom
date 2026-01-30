'use client'

import { useEffect, useRef, useState } from 'react'
import { HERO_VIDEO_CONTENT } from '@/content/customer'
import Image from 'next/image'

export default function RunwayVideo() {
  const content = { heroVideo: HERO_VIDEO_CONTENT }
  const videoContent = content.heroVideo
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

  // Handle video error
  const handleError = () => {
    setHasError(true)
  }

  // If user prefers reduced motion or video errored, show poster image
  if (prefersReducedMotion || hasError) {
    return (
      <section className="w-full pt-16 lg:pt-20" aria-hidden="true">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="relative w-full aspect-video overflow-hidden bg-black/5">
            <Image
              src={videoContent.poster}
              alt=""
              fill
              className="object-cover"
              priority={false}
              sizes="(max-width: 1536px) 100vw, 1536px"
            />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full pt-16 lg:pt-20" aria-hidden="true">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="relative w-full aspect-video overflow-hidden bg-black/5">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={videoContent.poster}
            onError={handleError}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoContent.src} type="video/mp4" />
          </video>

          {/* Optional subtle fade mask on top and bottom */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
