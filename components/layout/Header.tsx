'use client'

import { useState, useEffect } from 'react'
import BasketIcon from '@/components/ui/BasketIcon'

interface HeaderProps {
  onMenuToggle: () => void
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

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
        {/* Burger Icon - Fixed to top-left */}
        <button
          onClick={onMenuToggle}
          className="pointer-events-auto absolute left-6 top-5 w-10 h-10 flex items-center justify-center hover:bg-black/5 rounded-md transition-colors"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Brand Wordmark - Fixed top-center */}
        <div className="absolute left-1/2 top-5 -translate-x-1/2 pointer-events-auto">
          <p className="font-sans font-medium text-sm tracking-[0.35em] uppercase text-black">
            The Closet
          </p>
        </div>

        {/* Basket Icon - Fixed top-right */}
        <div className="absolute right-6 top-5 pointer-events-auto">
          <BasketIcon />
        </div>
      </div>
    </header>
  )
}
