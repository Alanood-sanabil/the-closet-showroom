'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'

interface ShowroomsSectionProps {
  mode?: 'customer' | 'partner'
}

export default function ShowroomsSection({ mode = 'customer' }: ShowroomsSectionProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const cities = [
    {
      name: t.showrooms.riyadh,
      locations: t.showrooms.riyadhLocations,
      appointmentNote: mode === 'customer' ? t.showrooms.appointmentNote : undefined,
      pricingNote: mode === 'partner' ? t.showrooms.pricingNoteRiyadh : undefined,
    },
    {
      name: t.showrooms.jeddah,
      locations: t.showrooms.jeddahLocations,
      appointmentNote: mode === 'customer' ? t.showrooms.appointmentNote : undefined,
      pricingNote: mode === 'partner' ? t.showrooms.pricingNoteJeddah : undefined,
    },
    {
      name: t.showrooms.dubai,
      locations: t.showrooms.dubaiLocations,
      appointmentNote: mode === 'customer' ? t.showrooms.appointmentNote : undefined,
      pricingNote: mode === 'partner' ? t.showrooms.pricingNoteDubai : undefined,
    },
  ]

  const bottomLine = mode === 'partner' ? t.showrooms.partnerBottomLine : t.showrooms.bottomLine

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl lg:text-4xl tracking-tight mb-4">
            {t.showrooms.sectionTitle}
          </h2>
          <p className="text-lg text-black/60 max-w-3xl mx-auto leading-relaxed">
            {t.showrooms.intro}
          </p>
        </div>

        {/* Bottom Line (moved above cards) */}
        <div className="text-center mb-12">
          <p className="text-lg font-semibold text-black max-w-3xl mx-auto leading-relaxed">
            {bottomLine}
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cities.map((city) => (
            <div
              key={city.name}
              className="p-6 border border-black/10 rounded-lg hover:border-black/20 hover:shadow-sm transition-all duration-200"
            >
              {/* City Title */}
              <h3 className="font-serif text-2xl mb-4 tracking-tight">
                {city.name}
              </h3>

              {/* Locations */}
              <div className="mb-4">
                <p className="text-sm text-black/70 leading-relaxed">
                  {city.locations}
                </p>
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
