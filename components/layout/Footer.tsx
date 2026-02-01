'use client'

import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'

export default function Footer() {
  const pathname = usePathname()
  const { language } = useLanguage()
  const t = getTranslations(language)

  const isPartnerPage = pathname?.includes('/brands')
  const tagline = isPartnerPage ? t.footer.partnerTagline : t.footer.customerTagline

  return (
    <footer className="py-16 lg:py-20 px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Brand */}
        <div className="text-center">
          <span className="font-serif text-xl tracking-wide font-semibold">
            {t.footer.brandName}
          </span>
          <p className="text-white/50 text-sm mt-2">
            {tagline}
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
