'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import BasketIcon from '@/components/ui/BasketIcon'

export default function Header() {
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
        {/* Brand Wordmark - Fixed top-center */}
        <Link
          href="/customer"
          className="absolute left-1/2 top-5 -translate-x-1/2 pointer-events-auto hover:opacity-70 transition-opacity"
        >
          <p className="font-sans font-medium text-sm tracking-[0.35em] uppercase text-black">
            The Closet
          </p>
        </Link>

        {/* Basket Icon - Fixed top-right */}
        <div className="absolute right-6 top-5 pointer-events-auto">
          <BasketIcon />
        </div>
      </div>
    </header>
  )
}
