'use client'

import { useEffect, useRef, useState } from 'react'
import { LOCATIONS_CONTENT } from '@/content/customer'

export default function Locations() {
  const content = { locations: LOCATIONS_CONTENT }

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
      id="locations"
      ref={sectionRef}
      className={`py-24 lg:py-32 px-6 lg:px-8 bg-black/[0.02] transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
            {content.locations.sectionTitle}
          </h2>
          <p className="text-lg text-black/60 leading-relaxed">
            {content.locations.sectionDescription}
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl">
          {content.locations.locations.map((location, index) => (
            <article
              key={location.id}
              className={`bg-white border border-black/10 p-8 lg:p-10 transition-all duration-500 hover:border-black/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* City Name */}
              <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-4 mt-2">
                {location.city}
              </h3>

              {/* Description */}
              <p className="text-black/60 leading-relaxed">
                {location.description}
              </p>

              {/* Decorative Element */}
              <div className="mt-8 pt-6 border-t border-black/5">
                <div className="flex items-center gap-3 text-sm text-black/40">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>{location.country}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
