import fs from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')
const CUSTOMERS_FILE = path.join(DATA_DIR, 'customer_submissions.json')
const BRANDS_FILE = path.join(DATA_DIR, 'brand_applications.json')

// Ensure data directory and files exist
function ensureDataFiles() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }

  if (!fs.existsSync(CUSTOMERS_FILE)) {
    fs.writeFileSync(CUSTOMERS_FILE, '[]', 'utf-8')
  }

  if (!fs.existsSync(BRANDS_FILE)) {
    fs.writeFileSync(BRANDS_FILE, '[]', 'utf-8')
  }
}

// Customer submissions
export interface CustomerSubmission {
  id: string
  name: string
  phone: string
  location: string
  preferences: string[]
  priceRange: string
  basketItems: Array<{
    id: string
    productId: string
    productName: string
    brandId: string
    brandName: string
    category: string
    price: number
    image?: string
  }>
  submittedAt: string
}

export function saveCustomerSubmission(data: Omit<CustomerSubmission, 'id' | 'submittedAt'>): CustomerSubmission {
  ensureDataFiles()

  const submissions: CustomerSubmission[] = JSON.parse(
    fs.readFileSync(CUSTOMERS_FILE, 'utf-8')
  )

  const newSubmission: CustomerSubmission = {
    id: `cust_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    ...data,
    submittedAt: new Date().toISOString(),
  }

  submissions.push(newSubmission)
  fs.writeFileSync(CUSTOMERS_FILE, JSON.stringify(submissions, null, 2), 'utf-8')

  return newSubmission
}

export function getCustomerSubmissions(): CustomerSubmission[] {
  ensureDataFiles()

  const data = fs.readFileSync(CUSTOMERS_FILE, 'utf-8')
  return JSON.parse(data)
}

// Brand submissions
export interface BrandSubmission {
  id: string
  contactName: string
  title: string
  email: string
  phone: string
  brandName: string
  websiteUrl: string
  countryOfOrigin: string
  productTypes: string[]
  pricePoint: string
  numberOfSKUs: number
  sellsVia: string
  hasMiddleEastPresence: boolean
  middleEastPresenceDetails?: string | null
  instagramHandle?: string | null
  submittedAt: string
}

export function saveBrandSubmission(data: Omit<BrandSubmission, 'id' | 'submittedAt'>): BrandSubmission {
  ensureDataFiles()

  const submissions: BrandSubmission[] = JSON.parse(
    fs.readFileSync(BRANDS_FILE, 'utf-8')
  )

  const newSubmission: BrandSubmission = {
    id: `brand_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    ...data,
    submittedAt: new Date().toISOString(),
  }

  submissions.push(newSubmission)
  fs.writeFileSync(BRANDS_FILE, JSON.stringify(submissions, null, 2), 'utf-8')

  return newSubmission
}

export function getBrandSubmissions(): BrandSubmission[] {
  ensureDataFiles()

  const data = fs.readFileSync(BRANDS_FILE, 'utf-8')
  return JSON.parse(data)
}
