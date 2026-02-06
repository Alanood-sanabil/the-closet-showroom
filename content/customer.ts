import type {
  HeaderContent,
  HeroContent,
  HeroVideoContent,
  PreviewSectionContent,
  LocationsSectionContent,
  ShowroomsSectionContent,
  AccessFormContent,
  FooterContent,
  GenderTag,
  StyleTag,
} from '@/lib/types'

// ============================================
// CUSTOMER LANDING PAGE CONTENT
// Edit this file to change landing page copy
// ============================================

export const SITE_NAME = 'THE CLOSET'

export const HEADER_CONTENT: HeaderContent = {
  brandName: 'THE CLOSET',
  navLinks: [
    { label: 'Preview', sectionId: 'preview', hideOnMobile: true },
    { label: 'Locations', sectionId: 'locations', hideOnMobile: true },
    { label: 'Access', sectionId: 'access' },
  ],
}

export const HERO_CONTENT: HeroContent = {
  badge: 'Launching soon in Riyadh & Jeddah',
  headline: ['Brands You Can’t Find Anywhere Else'],
  subheadline:
    'A showroom giving you access to international fashion brands you have never had access to before.',
  primaryCta: 'Request Early Showroom Access',
  secondaryCta: 'Explore Featured Brands',
}

export const HERO_VIDEO_CONTENT: HeroVideoContent = {
  src: '/media/runway/websiteRunway.mp4',
  poster: '',
}

export const PREVIEW_CONTENT: PreviewSectionContent = {
  sectionTitle: 'Brands & Collections',
  sectionDescription:
    'Brands from around the world. New collections arriving regularly through our showroom',
  filters: {
    genderLabel: 'Gender',
    styleLabel: 'Style',
    clearFilters: 'Clear filters',
    filterButton: 'Filter',
    noResults: 'No brands match your filters',
    brandsCount: 'brands',
    brandCount: 'brand',
  },
  genderOptions: [
    { value: 'all' as const, label: 'All' },
    { value: 'mens' as GenderTag, label: 'Menswear' },
    { value: 'womens' as GenderTag, label: 'Womenswear' },
    { value: 'unisex' as GenderTag, label: 'Unisex' },
  ],
  styleOptions: [
    { value: 'streetwear' as StyleTag, label: 'Streetwear' },
    { value: 'formal' as StyleTag, label: 'Formal' },
    { value: 'gymwear' as StyleTag, label: 'Gymwear' },
    { value: 'smart-casual' as StyleTag, label: 'Smart Casual' },
    { value: 'shoes' as StyleTag, label: 'Shoes' },
    { value: 'jewellery' as StyleTag, label: 'Jewellery' },
    { value: 'accessories' as StyleTag, label: 'Accessories' },
  ],
  sortOptions: [
    { value: 'featured' as const, label: 'Featured' },
    { value: 'price-asc' as const, label: 'Price: Low to High' },
    { value: 'price-desc' as const, label: 'Price: High to Low' },
  ],
  productPanel: {
    backButton: 'Back to brands',
    sortLabel: 'Sort by',
    accessCta: 'Launching soon — request access to shop in-showroom',
    mobileBackButton: 'Back to all brands',
  },
}

export const LOCATIONS_CONTENT: LocationsSectionContent = {
  sectionTitle: 'Showroom Locations',
  sectionDescription:
    'Experience luxury fashion in person at our exclusive showrooms.',
  locations: [
    {
      id: 'riyadh',
      city: 'Riyadh',
      description: 'Our flagship showroom in the heart of the capital.',
      badge: 'Launching Soon',
      country: 'Kingdom of Saudi Arabia',
    },
    {
      id: 'jeddah',
      city: 'Jeddah',
      description: 'A coastal destination for curated luxury fashion.',
      badge: 'Launching Soon',
      country: 'Kingdom of Saudi Arabia',
    },
  ],
}

export const ACCESS_FORM_CONTENT: AccessFormContent = {
  sectionTitle: 'Request Early Access',
  sectionDescription:
    "Be the first to explore our collection of international brands. Join our exclusive list",
  benefits: [
    'Early access to new collections',
    'First to see international brands',
    'Priority showroom appointments',
  ],
  fields: {
    name: {
      label: 'Name',
      placeholder: 'Your full name',
      required: true,
    },
    phone: {
      label: 'Phone Number',
      placeholder: '+966 5XX XXX XXXX',
      required: true,
    },
    location: {
      label: 'Showroom Location',
      placeholder: 'Select a location',
      required: true,
    },
    customCity: {
      label: 'Enter your city',
      placeholder: 'Your city',
      required: true,
    },
    preferences: {
      label: 'Fashion Preferences',
    },
    priceRange: {
      label: 'Primary Product Price Range',
      required: true,
    },
  },
  validation: {
    nameRequired: 'Name is required',
    phoneRequired: 'Phone number is required',
    phoneMinLength: 'Phone number must be at least 8 digits',
    locationRequired: 'Please select a showroom location',
    customCityRequired: 'Please enter your city',
    priceRangeRequired: 'Please select a price range',
  },
  submitButton: 'Request Early Access',
  submittingText: 'Processing...',
  successTitle: 'Request Received',
  successMessage: "Thank you — we'll notify you when early access opens.",
  locationOptions: ['Riyadh', 'Jeddah', 'Other'],
  priceRanges: [
    '500 - 2,000 SAR',
    '2,000 - 4,500 SAR',
    '4,500 SAR and above',
  ],
  fashionPreferences: [
    'Streetwear',
    'Formal',
    'Gymwear',
    'Smart Casual',
    'Shoes',
    'Jewellery / Accessories',
  ],
}

export const SHOWROOMS_SECTION_CONTENT: ShowroomsSectionContent = {
  sectionTitle: 'Our Showrooms Across the Region',
  intro: 'A network of showrooms across key cities, giving you access to international fashion brands through multiple locations, so you can visit what suits you best.',
  cities: [
    {
      city: 'Riyadh',
      locations: [
        'Multiple showroom locations across the city, including Solitaire Mall, Kingdom Centre, Centria Mall, Riyadh Park, Panorama Mall, Al Nakheel Mall, Westfield, Al Faisaliyah Mall, and Avenues Mall.',
      ],
      appointmentNote: 'Visit by appointment.',
    },
    {
      city: 'Jeddah',
      locations: [
        'Showroom locations available at Red Sea Mall, BLVD Mall, and Al Khayyat Center.',
      ],
      appointmentNote: 'Visit by appointment.',
    },
    {
      city: 'Dubai',
      locations: [
        'Showroom locations available at Dubai Mall and Mall of the Emirates.',
      ],
      appointmentNote: 'Visit by appointment.',
    },
  ],
  bottomLine: 'Choose the showroom location that suits you to discover international fashion in person.',
}

export const FOOTER_CONTENT: FooterContent = {
  brandName: 'THE CLOSET',
  tagline: 'Launching soon ',
  copyright: 'The Closet. All rights reserved.',
  socialLinks: [
    { name: 'Instagram', href: '#', ariaLabel: 'Instagram' },
    { name: 'Twitter', href: '#', ariaLabel: 'Twitter' },
    { name: 'LinkedIn', href: '#', ariaLabel: 'LinkedIn' },
  ],
}
