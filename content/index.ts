// ============================================
// CONTENT INDEX
// Central export point for all content
// ============================================

import customerEn from './customer.en'
import customerAr from './customer.ar'
import brandsEn from './brands.en'
import brandsAr from './brands.ar'

// Legacy imports for backwards compatibility
import {
  SITE_NAME,
  HEADER_CONTENT,
  HERO_CONTENT,
  HERO_VIDEO_CONTENT,
  PREVIEW_CONTENT,
  LOCATIONS_CONTENT,
  SHOWROOMS_SECTION_CONTENT,
  ACCESS_FORM_CONTENT,
  FOOTER_CONTENT,
} from './customer'
import { BRANDS_DATA } from './brands'

export type Language = 'en' | 'ar'
export type PageType = 'customer' | 'brands'

// Content type definitions
export type CustomerContent = typeof customerEn
export type BrandsContent = typeof brandsEn

// ============================================
// NEW: Page-based content system
// ============================================

// Get content based on page and language
export function getPageContent(page: PageType, language: Language): CustomerContent | BrandsContent {
  const contentMap = {
    customer: {
      en: customerEn,
      ar: customerAr,
    },
    brands: {
      en: brandsEn,
      ar: brandsAr,
    },
  }

  return contentMap[page][language]
}

// Helper to get customer page content
export function getCustomerContent(language: Language): CustomerContent {
  return language === 'en' ? customerEn : customerAr
}

// Helper to get brands page content
export function getBrandsContent(language: Language): BrandsContent {
  return language === 'en' ? brandsEn : brandsAr
}

// Re-export content objects for direct access if needed
export { customerEn, customerAr, brandsEn, brandsAr }

// ============================================
// LEGACY: Backwards compatibility exports
// ============================================

// Re-export all content modules
export * from './customer'
export * from './brands'

// Combined landing content (backwards compatibility)
export const CUSTOMER_LANDING_CONTENT = {
  siteName: SITE_NAME,
  header: HEADER_CONTENT,
  hero: HERO_CONTENT,
  heroVideo: HERO_VIDEO_CONTENT,
  preview: PREVIEW_CONTENT,
  locations: LOCATIONS_CONTENT,
  showrooms: { heroTitle: '', heroDescription: '', locations: [] }, // Legacy placeholder
  showroomsSection: SHOWROOMS_SECTION_CONTENT,
  accessForm: ACCESS_FORM_CONTENT,
  footer: FOOTER_CONTENT,
  brands: BRANDS_DATA,
}

// Convenience getter (backwards compatibility)
export function getCustomerLandingContent() {
  return CUSTOMER_LANDING_CONTENT
}

// Helper functions for formatting
export function formatPrice(price: number): string {
  return `${price.toLocaleString()} SAR`
}

export function getGenderLabel(tag: string): string {
  const labels: Record<string, string> = {
    mens: 'Menswear',
    womens: 'Womenswear',
    unisex: 'Unisex',
  }
  return labels[tag] || tag
}

export function getStyleLabel(tag: string): string {
  const labels: Record<string, string> = {
    streetwear: 'Streetwear',
    formal: 'Formal',
    gymwear: 'Gymwear',
    'smart-casual': 'Smart Casual',
    shoes: 'Shoes',
    jewellery: 'Jewellery',
    accessories: 'Accessories',
  }
  return labels[tag] || tag
}
