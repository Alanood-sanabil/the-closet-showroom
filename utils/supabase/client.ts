import { createClient } from '@supabase/supabase-js'

// Use standard Supabase environment variable names
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Debug: Log env vars (only in development)
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  console.log('Supabase Client Debug:', {
    url: supabaseUrl ? 'Set' : 'Missing',
    key: supabaseAnonKey ? 'Set' : 'Missing',
    urlValue: supabaseUrl,
    keyPrefix: supabaseAnonKey?.substring(0, 20),
  })
}

// Safe initialization - only create client if both env vars are present
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: false, // We're not using auth for public forms
        },
      })
    : null

// Helper function to submit customer requests
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
  // Validate Supabase is configured
  if (!supabase) {
    throw new Error(
      'Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.'
    )
  }

  const payload = {
    name: formData.name,
    phone: formData.phone,
    location: formData.location === 'Other' ? formData.customCity : formData.location,
    preferences: formData.preferences,
    price_range: formData.priceRange,
    basket_items: formData.basketItems || [],
    source_page: 'customer_landing',
  }

  console.log('Submitting to customer_requests:', payload)

  const { data, error } = await supabase
    .from('customer_requests')
    .insert([payload])
    .select()

  if (error) {
    console.error('Supabase insert error:', error)
    throw new Error(error.message)
  }

  console.log('Successfully inserted:', data)
  return data
}

// Helper function to submit brand partnership requests
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
  // Validate Supabase is configured
  if (!supabase) {
    throw new Error(
      'Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.'
    )
  }

  const payload = {
    contact_name: formData.contactName,
    title: formData.title,
    email: formData.email,
    phone: formData.phone,
    brand_name: formData.brandName,
    website_url: formData.websiteUrl,
    country_of_origin: formData.countryOfOrigin,
    product_types: formData.productTypes,
    price_point: formData.pricePoint,
    number_of_skus: parseInt(formData.numberOfSKUs, 10),
    sells_via: formData.sellsVia,
    has_middle_east_presence: formData.hasMiddleEastPresence === 'yes',
    middle_east_presence_details: formData.middleEastPresenceDetails || null,
    instagram_handle: formData.instagramHandle || null,
    source_page: 'brand_landing',
  }

  console.log('Submitting to brand_requests:', payload)

  const { data, error } = await supabase
    .from('brand_requests')
    .insert([payload])
    .select()

  if (error) {
    console.error('Supabase insert error:', error)
    throw new Error(error.message)
  }

  console.log('Successfully inserted:', data)
  return data
}
