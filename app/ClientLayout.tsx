'use client'

import BasketDrawer from '@/components/ui/BasketDrawer'
import { BasketProvider } from '@/contexts/BasketContext'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <BasketProvider>
      <BasketDrawer />
      {children}
    </BasketProvider>
  )
}
