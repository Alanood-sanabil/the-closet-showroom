'use client'

import Header from '@/components/layout/Header'
import BasketDrawer from '@/components/ui/BasketDrawer'
import { BasketProvider } from '@/contexts/BasketContext'
import { LanguageProvider } from '@/contexts/LanguageContext'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <BasketProvider>
        <Header />
        <BasketDrawer />
        {children}
      </BasketProvider>
    </LanguageProvider>
  )
}
