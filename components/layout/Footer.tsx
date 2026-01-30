'use client'

import { FOOTER_CONTENT } from '@/content/customer'

export default function Footer() {
  const content = { footer: FOOTER_CONTENT }

  return (
    <footer className="py-16 lg:py-20 px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Brand */}
        <div className="text-center">
          <span className="font-serif text-xl tracking-wide font-semibold">
            {content.footer.brandName}
          </span>
          <p className="text-white/50 text-sm mt-2">
            {content.footer.tagline}
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
