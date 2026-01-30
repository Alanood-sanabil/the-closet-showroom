'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import SideMenu from '@/components/layout/SideMenu'
import BasketDrawer from '@/components/ui/BasketDrawer'
import { BasketProvider } from '@/contexts/BasketContext'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <BasketProvider>
      <Header onMenuToggle={() => setDrawerOpen(true)} />
      <SideMenu isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <BasketDrawer />
      {children}
    </BasketProvider>
  )
}
