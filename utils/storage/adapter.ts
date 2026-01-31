// Storage adapter that switches between Supabase and local file storage
import { submitCustomerRequest as supabaseSubmitCustomer, submitBrandRequest as supabaseSubmitBrand } from '@/utils/supabase/client'

const DATA_MODE = process.env.NEXT_PUBLIC_DATA_MODE || 'supabase'

// Log the storage mode (development only)
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  console.log('Storage Mode:', DATA_MODE)
}

// Local storage submission via API routes
async function localSubmitCustomer(formData: {
  name: string
  phone: string
  location: string
  customCity?: string
  preferences: string[]
  priceRange: string
  basketItems?: Array<{
    id: string
    productId: string
    productName: string
    brandId: string
    brandName: string
    category: string
    price: number
    image?: string
  }>
}) {
  const payload = {
    name: formData.name,
    phone: formData.phone,
    location: formData.location === 'Other' ? formData.customCity : formData.location,
    preferences: formData.preferences,
    priceRange: formData.priceRange,
    basketItems: formData.basketItems || [],
  }

  const response = await fetch('/api/submissions/customer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'Failed to submit')
  }

  return await response.json()
}

async function localSubmitBrand(formData: {
  contactName: string
  title: string
  email: string
  phone: string
  brandName: string
  websiteUrl: string
  countryOfOrigin: string
  productTypes: string[]
  pricePoint: string
  numberOfSKUs: string
  sellsVia: string
  hasMiddleEastPresence: string
  middleEastPresenceDetails?: string
  instagramHandle?: string
}) {
  const response = await fetch('/api/submissions/brand', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'Failed to submit')
  }

  return await response.json()
}

// Exported functions that route based on DATA_MODE
export async function submitCustomerRequest(formData: {
  name: string
  phone: string
  location: string
  customCity?: string
  preferences: string[]
  priceRange: string
  basketItems?: Array<{
    id: string
    productId: string
    productName: string
    brandId: string
    brandName: string
    category: string
    price: number
    image?: string
  }>
}) {
  console.log(`Submitting customer request via ${DATA_MODE} storage`)

  if (DATA_MODE === 'local') {
    return await localSubmitCustomer(formData)
  } else {
    return await supabaseSubmitCustomer(formData)
  }
}

export async function submitBrandRequest(formData: {
  contactName: string
  title: string
  email: string
  phone: string
  brandName: string
  websiteUrl: string
  countryOfOrigin: string
  productTypes: string[]
  pricePoint: string
  numberOfSKUs: string
  sellsVia: string
  hasMiddleEastPresence: string
  middleEastPresenceDetails?: string
  instagramHandle?: string
}) {
  console.log(`Submitting brand request via ${DATA_MODE} storage`)

  if (DATA_MODE === 'local') {
    return await localSubmitBrand(formData)
  } else {
    return await supabaseSubmitBrand(formData)
  }
}
