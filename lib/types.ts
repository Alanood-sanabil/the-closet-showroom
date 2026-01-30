// ============================================
// Content Types for Customer Landing Page
// ============================================

export type GenderTag = 'mens' | 'womens' | 'unisex'
export type StyleTag =
  | 'streetwear'
  | 'formal'
  | 'gymwear'
  | 'smart-casual'
  | 'shoes'
  | 'jewellery'
  | 'accessories'

export type SortOption = 'featured' | 'price-asc' | 'price-desc'
export type SizeType = 'clothing' | 'shoes' | 'none'

// Product within a brand
export interface ProductPreview {
  id: string
  name: string
  category: string
  price: number
  image?: string
  isNew?: boolean
  sizeType?: SizeType
  sizes?: string[]
}

// Basket item for shopping cart
export interface BasketItem {
  id: string // Unique: productId-brandId-size
  productId: string
  productName: string
  brandId: string
  brandName: string
  category: string
  price: number
  image?: string
  addedAt: number // Timestamp
  selectedSize?: string
  sizeType?: SizeType
}

// Brand with products
export interface BrandPreview {
  id: string
  name: string
  countryCode: string
  countryName?: string
  genderTags: GenderTag[]
  styleTags: StyleTag[]
  collectionName?: string
  priceHint?: string
  heroImage?: string
  logoImage?: string
  products: ProductPreview[]
}

// Filter option
export interface FilterOption<T extends string> {
  value: T
  label: string
}

// Sort option
export interface SortOptionItem {
  value: SortOption
  label: string
}

// Location data
export interface LocationData {
  id: string
  city: string
  description: string
  badge: string
  country: string
}

// Social link
export interface SocialLink {
  name: string
  href: string
  ariaLabel: string
}

// Navigation link
export interface NavLink {
  label: string
  sectionId: string
  hideOnMobile?: boolean
}

// Form field labels and placeholders
export interface FormFieldContent {
  label: string
  placeholder?: string
  required?: boolean
  optionalText?: string
}

// Validation messages
export interface ValidationMessages {
  nameRequired: string
  phoneRequired: string
  phoneMinLength: string
  locationRequired: string
  customCityRequired: string
  priceRangeRequired: string
}

// Access form section content
export interface AccessFormContent {
  sectionTitle: string
  sectionDescription: string
  benefits: string[]
  fields: {
    name: FormFieldContent
    phone: FormFieldContent
    location: FormFieldContent
    customCity: FormFieldContent
    preferences: FormFieldContent
    priceRange: FormFieldContent
  }
  validation: ValidationMessages
  submitButton: string
  submittingText: string
  successTitle: string
  successMessage: string
  locationOptions: string[]
  priceRanges: string[]
  fashionPreferences: string[]
}

// Hero section content
export interface HeroContent {
  badge: string
  headline: string[]
  subheadline: string
  primaryCta: string
  secondaryCta: string
}

// Hero video content
export interface HeroVideoContent {
  src: string
  poster: string
}

// Preview section content
export interface PreviewSectionContent {
  sectionTitle: string
  sectionDescription: string
  filters: {
    genderLabel: string
    styleLabel: string
    clearFilters: string
    filterButton: string
    noResults: string
    brandsCount: string
    brandCount: string
  }
  genderOptions: FilterOption<GenderTag | 'all'>[]
  styleOptions: FilterOption<StyleTag>[]
  sortOptions: SortOptionItem[]
  productPanel: {
    backButton: string
    sortLabel: string
    accessCta: string
    mobileBackButton: string
  }
}

// Locations section content
export interface LocationsSectionContent {
  sectionTitle: string
  sectionDescription: string
  locations: LocationData[]
}

// Header content
export interface HeaderContent {
  brandName: string
  navLinks: NavLink[]
}

// Footer content
export interface FooterContent {
  brandName: string
  tagline: string
  copyright: string
  socialLinks: SocialLink[]
}

// Showroom page location
export interface ShowroomLocation {
  city: string
  status: string
  description: string
}

// Showrooms page content
export interface ShowroomsPageContent {
  heroTitle: string
  heroDescription: string
  locations: ShowroomLocation[]
}

// Showrooms section city
export interface ShowroomCity {
  city: string
  locations: string[]
  appointmentNote?: string
  pricingNote?: string
}

// Showrooms section content
export interface ShowroomsSectionContent {
  sectionTitle: string
  intro: string
  cities: ShowroomCity[]
  bottomLine: string
}

// Main landing content interface
export interface LandingContent {
  siteName: string
  header: HeaderContent
  hero: HeroContent
  heroVideo: HeroVideoContent
  preview: PreviewSectionContent
  locations: LocationsSectionContent
  showrooms: ShowroomsPageContent
  showroomsSection: ShowroomsSectionContent
  accessForm: AccessFormContent
  footer: FooterContent
  brands: BrandPreview[]
}

// Helper function types
export type FormatPriceFn = (price: number) => string
export type GetLabelFn<T extends string> = (tag: T) => string

// ============================================
// Partner Landing Page Types
// ============================================

// Product type option for partner form
export interface ProductTypeOption {
  value: string
  label: string
}

// Price point option for partner form
export interface PricePointOption {
  value: string
  label: string
}

// Distribution option for partner form
export interface DistributionOption {
  value: string
  label: string
}

// Sells via option for partner form
export interface SellsViaOption {
  value: string
  label: string
}

// Partnership benefit
export interface PartnershipBenefit {
  title: string
  description: string
}

// Partner header content
export interface PartnerHeaderContent {
  brandName: string
  customerPageLabel: string
  partnerPageLabel: string
}

// Partner hero content
export interface PartnerHeroContent {
  badge: string
  headline: string[]
  subheadline: string
  primaryCta: string
  secondaryCta: string
  note?: string
}

// Partnership info section
export interface PartnershipInfoContent {
  sectionTitle: string
  sectionDescription: string
  benefits: PartnershipBenefit[]
}

// Partner form field content
export interface PartnerFormFieldContent {
  label: string
  placeholder?: string
  required?: boolean
  optionalText?: string
  helpText?: string
}

// Partner form validation messages
export interface PartnerFormValidation {
  brandNameRequired: string
  contactNameRequired: string
  titleRequired: string
  emailRequired: string
  emailInvalid: string
  phoneRequired: string
  phoneMinLength: string
  websiteInvalid: string
  linkedinInvalid: string
  countryOfOriginRequired: string
  productTypesRequired: string
  pricePointRequired: string
  numberOfSKUsRequired: string
  numberOfSKUsInvalid: string
  sellsViaRequired: string
  hasMiddleEastPresenceRequired: string
  distributionRequired: string
  agreementRequired: string
}

// Partner form content
export interface PartnerFormContent {
  sectionTitle: string
  sectionDescription: string
  fields: {
    contactName: PartnerFormFieldContent
    title: PartnerFormFieldContent
    email: PartnerFormFieldContent
    phone: PartnerFormFieldContent
    brandName: PartnerFormFieldContent
    websiteUrl: PartnerFormFieldContent
    countryOfOrigin: PartnerFormFieldContent
    productTypes: PartnerFormFieldContent
    pricePoint: PartnerFormFieldContent
    numberOfSKUs: PartnerFormFieldContent
    sellsVia: PartnerFormFieldContent
    hasMiddleEastPresence: PartnerFormFieldContent
    middleEastPresenceDetails: PartnerFormFieldContent
    distribution: PartnerFormFieldContent
    agreement: PartnerFormFieldContent
    instagramHandle: PartnerFormFieldContent
  }
  productTypeOptions: ProductTypeOption[]
  pricePointOptions: PricePointOption[]
  sellsViaOptions: SellsViaOption[]
  distributionOptions: DistributionOption[]
  validation: PartnerFormValidation
  submitButton: string
  submittingText: string
  successTitle: string
  successMessage: string
}

// Main partner landing content
export interface PartnerLandingContent {
  siteName: string
  header: PartnerHeaderContent
  hero: PartnerHeroContent
  partnershipInfo: PartnershipInfoContent
  showroomsSection: ShowroomsSectionContent
  partnerForm: PartnerFormContent
  footer: FooterContent
}
