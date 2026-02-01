'use client'

import Header from '@/components/layout/Header'
import BasketDrawer from '@/components/ui/BasketDrawer'
import { BasketProvider } from '@/contexts/BasketContext'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <BasketProvider>
      <Header />
      <BasketDrawer />
      {children}
    </BasketProvider>
  )
}
