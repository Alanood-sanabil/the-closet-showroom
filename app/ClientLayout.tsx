'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/layout/Header'
import BasketDrawer from '@/components/ui/BasketDrawer'
import { BasketProvider } from '@/contexts/BasketContext'
import { LanguageProvider } from '@/contexts/LanguageContext'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isBrandsPage = pathname?.includes('/brands')

  return (
    <LanguageProvider>
      <BasketProvider>
        <Header showBasket={!isBrandsPage} />
        <BasketDrawer />
        {children}
      </BasketProvider>
    </LanguageProvider>
  )
}
