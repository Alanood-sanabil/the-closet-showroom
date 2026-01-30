// ============================================
// CONTENT INDEX
// Central export point for all content
// ============================================

// Re-export all content modules
export * from './customer'
export * from './brands'

// Import for combined export
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
