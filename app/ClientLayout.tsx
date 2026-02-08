'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/layout/Header'
import BasketDrawer from '@/components/ui/BasketDrawer'
import { BasketProvider } from '@/contexts/BasketContext'
import { LanguageProvider } from '@/contexts/LanguageContext'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isBrandsPage = pathname?.includes('/brands')
  const isPopupPage = pathname?.includes('/pop-up')

  return (
    <LanguageProvider>
      <BasketProvider>
        <Header showBasket={!isBrandsPage && !isPopupPage} />
        <BasketDrawer />
        {children}
      </BasketProvider>
    </LanguageProvider>
  )
}
