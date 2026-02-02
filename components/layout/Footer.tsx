'use client'

import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { getCustomerContent, getBrandsContent } from '@/content'

export default function Footer() {
  const pathname = usePathname()
  const { language } = useLanguage()

  const isPartnerPage = pathname?.includes('/brands')
  const t = isPartnerPage ? getBrandsContent(language) : getCustomerContent(language)

  return (
    <footer className="py-16 lg:py-20 px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Brand */}
        <div className="text-center">
          <span className="font-serif text-xl tracking-wide font-semibold">
            {t.footer.brandName}
          </span>
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
