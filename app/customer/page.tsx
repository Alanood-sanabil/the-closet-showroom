'use client'

import { useState } from 'react'
import Hero from '@/components/sections/Hero'
import PreviewGrid from '@/components/sections/PreviewGrid'
import ShowroomsSection from '@/components/sections/ShowroomsSection'
import AccessForm from '@/components/sections/AccessForm'
import Footer from '@/components/layout/Footer'

export default function CustomerPage() {
  const [selectedProduct, setSelectedProduct] = useState<{
    brandName: string
    productName: string
  } | null>(null)

  return (
    <main className="min-h-screen">
      <Hero />
      <PreviewGrid onProductSelect={setSelectedProduct} />
      <ShowroomsSection mode="customer" />
      <AccessForm selectedProduct={selectedProduct} />
      <Footer />
    </main>
  )
}
