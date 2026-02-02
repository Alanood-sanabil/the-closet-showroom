import type {
  PartnerLandingContent,
  ProductTypeOption,
  PricePointOption,
  DistributionOption,
  SellsViaOption,
} from '@/lib/types'

// Helper to get content (for future localization)
export function getPartnerLandingContent(): PartnerLandingContent {
  return partnerLandingContent
}

// Product type options (matching filter categories)
const productTypeOptions: ProductTypeOption[] = [
  { value: 'streetwear', label: 'Streetwear' },
  { value: 'formal', label: 'Formal' },
  { value: 'gymwear', label: 'Gymwear' },
  { value: 'smart-casual', label: 'Smart Casual' },
  { value: 'shoes', label: 'Shoes' },
  { value: 'jewellery', label: 'Jewellery' },
  { value: 'accessories', label: 'Accessories' },
]

// Price point options (in USD)
const pricePointOptions: PricePointOption[] = [
  { value: 'entry', label: '$100 – $500' },
  { value: 'mid', label: '$500 – $1,200' },
  { value: 'premium', label: '$1,200 and above' },
]

// Sells via options
const sellsViaOptions: SellsViaOption[] = [
  { value: 'dtc', label: 'DTC' },
  { value: 'wholesale', label: 'Wholesale' },
  { value: 'both', label: 'Both' },
]

// Distribution options (legacy, kept for backward compatibility)
const distributionOptions: DistributionOption[] = [
  { value: 'wholesale', label: 'Wholesale' },
  { value: 'retail', label: 'Retail Locations' },
  { value: 'online', label: 'Online Direct-to-Consumer' },
  { value: 'limited', label: 'Limited Distribution' },
]

const partnerLandingContent: PartnerLandingContent = {
  siteName: 'MAISON NOIR- Partner With Us',

  // Header
  header: {
    brandName: 'MAISON NOIR',
    customerPageLabel: 'Browse Collection',
    partnerPageLabel: 'Partner With Us',
  },

  // Hero Section
  hero: {
    badge: 'For Brands & Designers',
    headline: ['Access the Middle East Through', 'One Simple Partnership'],
    subheadline:
      'Show your collection in premium showrooms and reach high-intent clients across Saudi Arabia and the region without setting up locally.',
    primaryCta: 'Expand with us',
    secondaryCta: 'Learn More',
    note: 'Limited brand slots available per location.',
  },

  // Partnership Info Section
  partnershipInfo: {
    sectionTitle: 'Why Partner With The Closet',
    sectionDescription:
      'The Closet gives international brands a direct way to enter the Middle East through physical showrooms, without the cost, complexity, or long-term commitment of opening stores or building local teams.',

    benefits: [
      {
        title: 'Showroom Access Without Setup',
        description:
          'Display your collection in premium showrooms across Saudi Arabia and the region without opening stores or investing in local infrastructure.',
      },
      {
        title: 'Direct Access to High-Intent Clients',
        description:
          'Connect with customers actively seeking international fashion brands and ready to discover new labels in person.',
      },
      {
        title: 'Enter on Your Terms',
        description:
          'Choose where to be present and what to showcase. Test markets with no long-term commitments.',
      },
      {
        title: 'Local Market Expertise',
        description:
          'We help you navigate pricing, positioning, and customer preferences so you can test the market with confidence.',
      },
      {
        title: 'Ready From Day One',
        description:
          'Fully equipped showrooms. Move in, showcase your collection, and start learning from real customer demand.',
      },
    ],
  },

  // Partner Application Form
  partnerForm: {
    sectionTitle: 'Apply to Partner With The Closet',
    sectionDescription:
      'Tell us a bit about your brand. Our team will review the details and get back to you.',

    fields: {
      contactName: {
        label: 'Full Name',
        placeholder: 'Your full name',
        required: true,
      },
      title: {
        label: 'Role / Title',
        placeholder: 'e.g., Founder, Brand Director',
        required: true,
      },
      email: {
        label: 'Email',
        placeholder: 'you@yourbrand.com',
        required: true,
      },
      phone: {
        label: 'Phone Number',
        placeholder: '+XXX XX XXX XXXX',
        required: true,
      },
      brandName: {
        label: 'Brand Name',
        placeholder: 'Enter your brand name',
        required: true,
      },
      websiteUrl: {
        label: 'Website or LinkedIn',
        placeholder: 'https://yourbrand.com or LinkedIn URL',
        required: true,
      },
      countryOfOrigin: {
        label: 'Country of Origin',
        placeholder: 'e.g., United States',
        required: true,
      },
      productTypes: {
        label: 'Product Categories',
        placeholder: 'Select all that apply',
        required: true,
        helpText: 'Select all product categories your brand offers',
      },
      pricePoint: {
        label: 'Average Retail Price Range',
        placeholder: 'Select price range',
        required: true,
      },
      numberOfSKUs: {
        label: 'Number of SKUs you plan to showcase',
        placeholder: 'e.g., 50',
        required: true,
      },
      sellsVia: {
        label: 'Do you currently sell',
        placeholder: 'Select one',
        required: true,
      },
      hasMiddleEastPresence: {
        label: 'Do you have any presence in the Middle East through consignments, distributors, or agents?',
        placeholder: 'Select one',
        required: true,
      },
      middleEastPresenceDetails: {
        label: 'Where or with whom?',
        placeholder: 'Describe your current Middle East presence',
        required: false,
      },
      distribution: {
        label: 'Current Distribution',
        placeholder: 'Select all that apply',
        required: false,
        helpText: 'Select your current distribution channels',
      },
      agreement: {
        label:
          'I understand that partnership is subject to mutual agreement on terms.',
        required: true,
      },
    },

    productTypeOptions,
    pricePointOptions,
    sellsViaOptions,
    distributionOptions,

    validation: {
      brandNameRequired: 'Brand name is required',
      contactNameRequired: 'Full name is required',
      titleRequired: 'Role / Title is required',
      emailRequired: 'Email address is required',
      emailInvalid: 'Please enter a valid email address',
      phoneRequired: 'Phone number is required',
      phoneMinLength: 'Phone number must be at least 10 digits',
      websiteInvalid: 'Please enter a valid URL (including https://)',
      linkedinInvalid: 'Please enter a valid URL',
      countryOfOriginRequired: 'Country of origin is required',
      productTypesRequired: 'Please select at least one product category',
      pricePointRequired: 'Please select a price range',
      numberOfSKUsRequired: 'Number of SKUs is required',
      numberOfSKUsInvalid: 'Please enter a valid number',
      sellsViaRequired: 'Please select how you currently sell',
      hasMiddleEastPresenceRequired: 'Please select yes or no',
      distributionRequired: 'Please select at least one distribution channel',
      agreementRequired: 'You must agree to the terms to submit your application',
    },

    submitButton: 'Submit Application',
    submittingText: 'Submitting...',

    successTitle: 'Application Submitted!',
    successMessage:
      'Thank you for your interest in partnering with The Closet. Our team will review your application and reach out soon.',
  },

  // Showrooms Section
  showroomsSection: {
    sectionTitle: 'Our Showrooms Across the Region',
    intro: 'Physical showroom access across key Middle East cities, with multiple locations per city so brands can choose based on budget, footfall, positioning, and market strategy, without long term commitments.',
    cities: [
      {
        city: 'Riyadh',
        locations: [
          'Multiple locations available across prime malls, including Solitaire Mall, Kingdom Centre, Centria Mall, Riyadh Park, Panorama Mall, Al Nakheel Mall, Westfield, Al Faisaliyah Mall, and Avenues Mall.',
        ],
        pricingNote: 'Showroom spaces start from approximately $3,000 per square meter, depending on location, size, and footfall.',
      },
      {
        city: 'Jeddah',
        locations: [
          'Available locations include Red Sea Mall, BLVD Mall, and Al Khayyat Center.',
        ],
        pricingNote: 'Showroom spaces start from approximately $2,000 per square meter, depending on location and positioning.',
      },
      {
        city: 'Dubai',
        locations: [
          'Available locations include Dubai Mall and Mall of the Emirates.',
        ],
        pricingNote: 'Showroom spaces start from approximately $5,000 per square meter, depending on location, size, and visibility.',
      },
    ],
    bottomLine: 'Choose where to launch, at what price point, and how far to expand, all through one simple setup.',
  },

  // Footer
  footer: {
    brandName: 'The Closet',
    tagline: 'Premium fashion curation across Saudi Arabia',
    copyright: 'The Closet. All rights reserved.',
    socialLinks: [
      {
        name: 'Instagram',
        href: '#',
        ariaLabel: 'Follow us on Instagram',
      },
      {
        name: 'LinkedIn',
        href: '#',
        ariaLabel: 'Connect with us on LinkedIn',
      },
    ],
  },
}
