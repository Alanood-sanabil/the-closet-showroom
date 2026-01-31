// Local JSON file storage via API routes

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
    throw new Error(error.error || 'Failed to submit customer request')
  }

  return await response.json()
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
  const response = await fetch('/api/submissions/brand', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'Failed to submit brand application')
  }

  return await response.json()
}
