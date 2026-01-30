'use client'

import { useState } from 'react'
import Hero from '@/components/sections/Hero'
import PreviewGrid from '@/components/sections/PreviewGrid'
import ShowroomsSection from '@/components/sections/ShowroomsSection'
import AccessForm from '@/components/sections/AccessForm'
import Footer from '@/components/layout/Footer'
import { getCustomerLandingContent } from '@/content'

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<{
    brandName: string
    productName: string
  } | null>(null)

  const content = getCustomerLandingContent()

  return (
    <main className="min-h-screen">
      <Hero />
      <PreviewGrid onProductSelect={setSelectedProduct} />
      <ShowroomsSection content={content.showroomsSection} />
      <AccessForm selectedProduct={selectedProduct} />
      <Footer />
    </main>
  )
}
