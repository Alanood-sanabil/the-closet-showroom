'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'
import BasketIcon from '@/components/ui/BasketIcon'
import { useLanguage } from '@/contexts/LanguageContext'
import { getPageContent, type PageType } from '@/content'

interface HeaderProps {
  showBasket?: boolean
}

export default function Header({ showBasket = true }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { language, setLanguage } = useLanguage()
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLanguageDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (lang: 'en' | 'ar') => {
    setLanguage(lang)
    setLanguageDropdownOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="relative h-16">
        {/* Language Switcher - Fixed top-left */}
        <div ref={dropdownRef} className="absolute left-6 top-5 pointer-events-auto">
          <button
            onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
            className="flex items-center gap-2 px-3 py-2 hover:bg-black/5 rounded-md transition-colors"
            aria-label={t.header.languageLabel}
          >
            <Globe className="w-5 h-5" />
          </button>

          {/* Language Dropdown */}
          {languageDropdownOpen && (
            <div className="absolute top-full mt-2 left-0 bg-white border border-black/10 rounded-md shadow-lg overflow-hidden min-w-[120px]">
              <button
                onClick={() => handleLanguageChange('en')}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-black/5 transition-colors ${
                  language === 'en' ? 'bg-black/5 font-medium' : ''
                }`}
              >
                {t.header.english}
              </button>
              <button
                onClick={() => handleLanguageChange('ar')}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-black/5 transition-colors ${
                  language === 'ar' ? 'bg-black/5 font-medium' : ''
                }`}
              >
                {t.header.arabic}
              </button>
            </div>
          )}
        </div>

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
