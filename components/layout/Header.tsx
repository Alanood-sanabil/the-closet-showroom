'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import BasketIcon from '@/components/ui/BasketIcon'
import { useLanguage } from '@/contexts/LanguageContext'
import { getPageContent, type PageType } from '@/content'

interface HeaderProps {
  showBasket?: boolean
}

export default function Header({ showBasket = true }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const { language } = useLanguage()
  const pathname = usePathname()

  // Determine page type from pathname
  const pageType: PageType = pathname?.includes('/brands') ? 'brands' : 'customer'
  const t = getPageContent(pageType, language)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="relative h-16">
        {/* Brand Wordmark - Fixed top-center */}
        <div className="absolute left-1/2 top-3 -translate-x-1/2 pointer-events-auto text-center">
          <div className="flex flex-col items-center gap-1">
            <p className="font-sans font-medium text-sm tracking-[0.35em] uppercase text-black">
              {t.header.brandName}
            </p>
            <p className="font-sans text-xs tracking-wide text-black/50 font-normal leading-tight">
              {t.header.brandTagline}
            </p>
          </div>
        </div>

        {/* Basket Icon - Fixed top-right */}
        {showBasket && (
          <div className="absolute right-6 top-5 pointer-events-auto">
            <BasketIcon />
          </div>
        )}
      </div>
    </header>
  )
}
