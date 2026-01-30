'use client'

import type { ShowroomsSectionContent } from '@/lib/types'

interface ShowroomsSectionProps {
  content: ShowroomsSectionContent
}

export default function ShowroomsSection({ content }: ShowroomsSectionProps) {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl lg:text-4xl tracking-tight mb-4">
            {content.sectionTitle}
          </h2>
          <p className="text-lg text-black/60 max-w-3xl mx-auto leading-relaxed">
            {content.intro}
          </p>
        </div>

        {/* Bottom Line (moved above cards) */}
        <div className="text-center mb-12">
          <p className="text-lg font-semibold text-black max-w-3xl mx-auto leading-relaxed">
            {content.bottomLine}
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {content.cities.map((city) => (
            <div
              key={city.city}
              className="p-6 border border-black/10 rounded-lg hover:border-black/20 hover:shadow-sm transition-all duration-200"
            >
              {/* City Title */}
              <h3 className="font-serif text-2xl mb-4 tracking-tight">
                {city.city}
              </h3>

              {/* Locations List */}
              <div className="mb-4 space-y-2">
                {city.locations.map((location, idx) => (
                  <p key={idx} className="text-sm text-black/70 leading-relaxed">
                    {location}
                  </p>
                ))}
              </div>

              {/* Appointment Note (Customer only) */}
              {city.appointmentNote && (
                <p className="text-sm font-medium text-black mt-4">
                  {city.appointmentNote}
                </p>
              )}

              {/* Pricing Note (Brands only) */}
              {city.pricingNote && (
                <p className="text-sm text-black/60 mt-4 leading-relaxed">
                  {city.pricingNote}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
