// ============================================
// TRANSLATIONS
// English and Arabic translations for all UI text
// ============================================

export type Language = 'en'

interface Translations {
  // Common
  common: {
    theCloset: string
    loading: string
    error: string
    success: string
    submit: string
    cancel: string
    close: string
    back: string
    next: string
    required: string
    optional: string
    selectOne: string
    selectAll: string
    clear: string
    filter: string
    sortBy: string
    brands: string
    brand: string
    price: string
    new: string
    viewAll: string
    learnMore: string
  }

  // Header
  header: {
    brandName: string
    languageLabel: string
    english: string
    arabic: string
  }

  // Customer Hero Section
  customerHero: {
    badge: string
    headline: string[]
    subheadline: string
    primaryCta: string
    secondaryCta: string
  }

  // Preview/Brands Section
  preview: {
    sectionTitle: string
    sectionDescription: string
    genderLabel: string
    styleLabel: string
    clearFilters: string
    filterButton: string
    filterModalTitle: string
    clearAllButton: string
    showButton: string
    noResults: string
    brandsCount: string
    brandCount: string
    backButton: string
    sortLabel: string
    accessCta: string
    mobileBackButton: string
    // Gender options
    allGender: string
    mens: string
    womens: string
    unisex: string
    // Style options
    streetwear: string
    formal: string
    gymwear: string
    smartCasual: string
    shoes: string
    jewellery: string
    accessories: string
    // Sort options
    featured: string
    priceLowToHigh: string
    priceHighToLow: string
    // Product label
    productsLabel: string
  }

  // Showrooms Section
  showrooms: {
    sectionTitle: string
    intro: string
    riyadh: string
    jeddah: string
    dubai: string
    riyadhLocations: string
    jeddahLocations: string
    dubaiLocations: string
    appointmentNote: string
    bottomLine: string
    // Partner version
    pricingNoteRiyadh: string
    pricingNoteJeddah: string
    pricingNoteDubai: string
    partnerBottomLine: string
  }

  // Access Form (Customer)
  accessForm: {
    sectionTitle: string
    sectionDescription: string
    benefits: string[]
    // Fields
    nameLabel: string
    namePlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    locationLabel: string
    locationPlaceholder: string
    customCityLabel: string
    customCityPlaceholder: string
    preferencesLabel: string
    priceRangeLabel: string
    // Validation
    nameRequired: string
    phoneRequired: string
    phoneMinLength: string
    locationRequired: string
    customCityRequired: string
    priceRangeRequired: string
    // Submit
    submitButton: string
    submittingText: string
    successTitle: string
    successMessage: string
    // Options
    locationRiyadh: string
    locationJeddah: string
    locationDubai: string
    locationOther: string
    priceRange1: string
    priceRange2: string
    priceRange3: string
    // Fashion Preferences
    prefStreetweear: string
    prefFormal: string
    prefGymwear: string
    prefSmartCasual: string
    prefShoes: string
    prefJewellery: string
  }

  // Partner Hero Section
  partnerHero: {
    badge: string
    headline: string[]
    subheadline: string
    primaryCta: string
    secondaryCta: string
    note: string
  }

  // Partnership Info
  partnershipInfo: {
    sectionTitle: string
    sectionDescription: string
    benefit1Title: string
    benefit1Description: string
    benefit2Title: string
    benefit2Description: string
    benefit3Title: string
    benefit3Description: string
    benefit4Title: string
    benefit4Description: string
  }

  // Partner Form
  partnerForm: {
    sectionTitle: string
    sectionDescription: string
    // Fields
    contactNameLabel: string
    contactNamePlaceholder: string
    titleLabel: string
    titlePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    brandNameLabel: string
    brandNamePlaceholder: string
    websiteLabel: string
    websitePlaceholder: string
    countryLabel: string
    countryPlaceholder: string
    productTypesLabel: string
    productTypesPlaceholder: string
    productTypesHelpText: string
    pricePointLabel: string
    pricePointPlaceholder: string
    numberOfSKUsLabel: string
    numberOfSKUsPlaceholder: string
    sellsViaLabel: string
    sellsViaPlaceholder: string
    hasMiddleEastPresenceLabel: string
    hasMiddleEastPresencePlaceholder: string
    middleEastPresenceDetailsLabel: string
    middleEastPresenceDetailsPlaceholder: string
    agreementLabel: string
    // Product type options
    productTypeStreetwear: string
    productTypeFormal: string
    productTypeGymwear: string
    productTypeSmartCasual: string
    productTypeShoes: string
    productTypeJewellery: string
    productTypeAccessories: string
    // Price point options
    pricePointEntry: string
    pricePointMid: string
    pricePointPremium: string
    // Sells via options
    sellsViaDTC: string
    sellsViaWholesale: string
    sellsViaBoth: string
    // Validation
    brandNameRequired: string
    contactNameRequired: string
    titleRequired: string
    emailRequired: string
    emailInvalid: string
    phoneRequired: string
    phoneMinLength: string
    websiteInvalid: string
    countryOfOriginRequired: string
    productTypesRequired: string
    pricePointRequired: string
    numberOfSKUsRequired: string
    numberOfSKUsInvalid: string
    sellsViaRequired: string
    hasMiddleEastPresenceRequired: string
    agreementRequired: string
    // Submit
    submitButton: string
    submittingText: string
    successTitle: string
    successMessage: string
  }

  // Pop-up Page
  popup: {
    // Hero
    heroHeadline: string
    heroSubtext: string
    // Locations section
    locationsTitle: string
    locationsNote: string
    locations: string[]
    venuesByCity: Record<string, string[]>
    viewPopupButton: string
    // Why Join section
    whyJoinTitle: string
    benefit1Title: string
    benefit1Description: string
    benefit2Title: string
    benefit2Description: string
    benefit3Title: string
    benefit3Description: string
    // Form
    formTitle: string
    formDescription: string
    nameLabel: string
    namePlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    locationsLabel: string
    locationsPlaceholder: string
    submitButton: string
    submittingText: string
    successMessage: string
    // Validation
    nameRequired: string
    phoneRequired: string
    phoneMinLength: string
    locationsRequired: string
  }

  // Footer
  footer: {
    brandName: string
    customerTagline: string
    partnerTagline: string
    copyright: string
    instagram: string
    twitter: string
    linkedin: string
  }

  // Basket
  basket: {
    title: string
    empty: string
    emptyMessage: string
    removeItem: string
    requestAccessCta: string
    item: string
    items: string
    itemsSelected: string
    size: string
    addToBasket: string
    selectSize: string
    // Basket Summary (in form)
    requestingAccessTo: string
    moreItems: string
  }

  // Product details
  product: {
    new: string
    size: string
    selectSize: string
    addToBasket: string
    currency: string
  }
}

const englishTranslations: Translations = {
    // Common
    common: {
      theCloset: 'The Closet',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      submit: 'Submit',
      cancel: 'Cancel',
      close: 'Close',
      back: 'Back',
      next: 'Next',
      required: 'Required',
      optional: 'Optional',
      selectOne: 'Select one',
      selectAll: 'Select all that apply',
      clear: 'Clear',
      filter: 'Filter',
      sortBy: 'Sort by',
      brands: 'brands',
      brand: 'brand',
      price: 'Price',
      new: 'New',
      viewAll: 'View All',
      learnMore: 'Learn More',
    },

    // Header
    header: {
      brandName: 'The Closet',
      languageLabel: 'Language',
      english: 'English',
      arabic: 'العربية',
    },

    // Customer Hero
    customerHero: {
      badge: 'Launching soon in Riyadh & Jeddah',
      headline: ['Brands You Can\'t Find Anywhere Else'],
      subheadline:
        'A pop-up showroom experience bringing exclusive international fashion brands to malls and locations across Saudi.',
      primaryCta: 'Find Our Next Pop-Up',
      secondaryCta: 'Explore Featured Brands',
    },

    // Preview/Brands
    preview: {
      sectionTitle: 'Brands & Collections',
      sectionDescription:
        'Featuring these brands and many more. Discover new collections from around the world at every pop-up.',
      genderLabel: 'Gender',
      styleLabel: 'Style',
      clearFilters: 'Clear filters',
      filterButton: 'Filter',
      filterModalTitle: 'Filters',
      clearAllButton: 'Clear all',
      showButton: 'Show',
      noResults: 'No brands match your filters',
      brandsCount: 'brands',
      brandCount: 'brand',
      backButton: 'Back to brands',
      sortLabel: 'Sort by',
      accessCta: 'Launching soon — request access to shop in-showroom',
      mobileBackButton: 'Back to all brands',
      // Gender
      allGender: 'All',
      mens: 'Menswear',
      womens: 'Womenswear',
      unisex: 'Unisex',
      // Style
      streetwear: 'Streetwear',
      formal: 'Formal',
      gymwear: 'Gymwear',
      smartCasual: 'Smart Casual',
      shoes: 'Shoes',
      jewellery: 'Jewellery',
      accessories: 'Accessories',
      // Sort
      featured: 'Featured',
      priceLowToHigh: 'Price: Low to High',
      priceHighToLow: 'Price: High to Low',
      // Product label
      productsLabel: 'Products',
    },

    // Showrooms
    showrooms: {
      sectionTitle: 'Our Showrooms Across the Region',
      intro:
        'A network of showrooms across key cities, giving you access to international fashion brands through multiple locations, so you can visit what suits you best.',
      riyadh: 'Riyadh',
      jeddah: 'Jeddah',
      dubai: 'Dubai',
      riyadhLocations:
        'Multiple showroom locations across the city, including Solitaire Mall, Kingdom Centre, Centria Mall, Riyadh Park, Panorama Mall, Al Nakheel Mall, Westfield, Al Faisaliyah Mall, and Avenues Mall.',
      jeddahLocations:
        'Showroom locations available at Red Sea Mall, BLVD Mall, and Al Khayyat Center.',
      dubaiLocations:
        'Showroom locations available at Dubai Mall and Mall of the Emirates.',
      appointmentNote: 'Visit by appointment.',
      bottomLine:
        'Choose the showroom location that suits you to discover international fashion in person.',
      // Partner version
      pricingNoteRiyadh:
        'Showroom spaces start from approximately $3,000 per square meter, depending on location, size, and footfall.',
      pricingNoteJeddah:
        'Showroom spaces start from approximately $2,000 per square meter, depending on location and positioning.',
      pricingNoteDubai:
        'Showroom spaces start from approximately $5,000 per square meter, depending on location, size, and visibility.',
      partnerBottomLine:
        'Choose where to launch, at what price point, and how far to expand, all through one simple setup.',
    },

    // Access Form
    accessForm: {
      sectionTitle: 'Don\'t Miss Our Next Pop-Up',
      sectionDescription:
        "Be the first to know where we're popping up next. Sign up and get exclusive early access before anyone else.",
      benefits: [
        'Early access to new collections',
        'First to know our next pop-up location',
        'VIP invites & exclusive in-store perks',
      ],
      nameLabel: 'Name',
      namePlaceholder: 'Your full name',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+966 5XX XXX XXXX',
      locationLabel: 'Preferred City',
      locationPlaceholder: 'Select your city',
      customCityLabel: 'Enter your city',
      customCityPlaceholder: 'Your city',
      preferencesLabel: 'Fashion Preferences',
      priceRangeLabel: 'Primary Product Price Range',
      nameRequired: 'Name is required',
      phoneRequired: 'Phone number is required',
      phoneMinLength: 'Phone number must be at least 8 digits',
      locationRequired: 'Please select a showroom location',
      customCityRequired: 'Please enter your city',
      priceRangeRequired: 'Please select a price range',
      submitButton: 'Get My VIP Access',
      submittingText: 'Processing...',
      successTitle: 'Request Received',
      successMessage: "Thank you — we'll notify you when early access opens.",
      locationRiyadh: 'Riyadh',
      locationJeddah: 'Jeddah',
      locationDubai: 'Dubai',
      locationOther: 'Other',
      priceRange1: '500 - 2,000 SAR',
      priceRange2: '2,000 - 4,500 SAR',
      priceRange3: '4,500 SAR and above',
      prefStreetweear: 'Streetwear',
      prefFormal: 'Formal',
      prefGymwear: 'Gymwear',
      prefSmartCasual: 'Smart Casual',
      prefShoes: 'Shoes',
      prefJewellery: 'Jewellery / Accessories',
    },

    // Partner Hero
    partnerHero: {
      badge: 'For Brands & Designers',
      headline: ['One Click Away from Expanding', 'to Saudi and Dubai'],
      subheadline:
        'Show your collection in premium showrooms and reach high-intent clients across Saudi Arabia and the region without setting up locally.',
      primaryCta: 'Expand with us',
      secondaryCta: 'Learn More',
      note: 'Limited brand slots available per location.',
    },

    // Partnership Info
    partnershipInfo: {
      sectionTitle: 'Why Partner With The Closet',
      sectionDescription:
        'The Closet gives international brands a direct way to enter the Middle East through physical showrooms, without the cost, complexity, or long-term commitment of opening stores or building local teams.',
      benefit1Title: 'Showroom Access Without Setup',
      benefit1Description:
        'Display your collection in premium, fully equipped showrooms across Saudi Arabia and the region—no stores to open, no local infrastructure to build. Move in, showcase your pieces, and start learning from real customer demand from day one.',
      benefit2Title: 'Direct Access to High-Intent Clients',
      benefit2Description:
        'Connect with customers actively seeking international fashion brands and ready to discover new labels in person.',
      benefit3Title: 'Enter on Your Terms',
      benefit3Description:
        'Choose where to be present and what to showcase. Test markets with no long-term commitments.',
      benefit4Title: 'Local Market Expertise',
      benefit4Description:
        'We help you navigate pricing, positioning, and customer preferences so you can test the market with confidence.',
    },

    // Partner Form
    partnerForm: {
      sectionTitle: 'Expand with us',
      sectionDescription:
        'Tell us a bit about your brand. Our team will review the details and get back to you.',
      contactNameLabel: 'Full Name',
      contactNamePlaceholder: 'Your full name',
      titleLabel: 'Role / Title',
      titlePlaceholder: 'e.g., Founder, Brand Director',
      emailLabel: 'Email',
      emailPlaceholder: 'you@yourbrand.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+XXX XX XXX XXXX',
      brandNameLabel: 'Brand Name',
      brandNamePlaceholder: 'Enter your brand name',
      websiteLabel: 'Website or LinkedIn',
      websitePlaceholder: 'https://yourbrand.com or LinkedIn URL',
      countryLabel: 'Country of Origin',
      countryPlaceholder: 'e.g., United States',
      productTypesLabel: 'Product Categories',
      productTypesPlaceholder: 'Select all that apply',
      productTypesHelpText: 'Select all product categories your brand offers',
      pricePointLabel: 'Average Retail Price Range',
      pricePointPlaceholder: 'Select price range',
      numberOfSKUsLabel: 'Number of SKUs you plan to showcase',
      numberOfSKUsPlaceholder: 'e.g., 50',
      sellsViaLabel: 'Do you currently sell',
      sellsViaPlaceholder: 'Select one',
      hasMiddleEastPresenceLabel:
        'Do you have any presence in the Middle East through consignments, distributors, or agents?',
      hasMiddleEastPresencePlaceholder: 'Select one',
      middleEastPresenceDetailsLabel: 'Where or with whom?',
      middleEastPresenceDetailsPlaceholder:
        'Describe your current Middle East presence',
      agreementLabel:
        'I understand that partnership is subject to mutual agreement on terms.',
      productTypeStreetwear: 'Streetwear',
      productTypeFormal: 'Formal',
      productTypeGymwear: 'Gymwear',
      productTypeSmartCasual: 'Smart Casual',
      productTypeShoes: 'Shoes',
      productTypeJewellery: 'Jewellery',
      productTypeAccessories: 'Accessories',
      pricePointEntry: '$100 – $500',
      pricePointMid: '$500 – $1,200',
      pricePointPremium: '$1,200 and above',
      sellsViaDTC: 'DTC',
      sellsViaWholesale: 'Wholesale',
      sellsViaBoth: 'Both',
      brandNameRequired: 'Brand name is required',
      contactNameRequired: 'Full name is required',
      titleRequired: 'Role / Title is required',
      emailRequired: 'Email address is required',
      emailInvalid: 'Please enter a valid email address',
      phoneRequired: 'Phone number is required',
      phoneMinLength: 'Phone number must be at least 10 digits',
      websiteInvalid: 'Please enter a valid URL (including https://)',
      countryOfOriginRequired: 'Country of origin is required',
      productTypesRequired: 'Please select at least one product category',
      pricePointRequired: 'Please select a price range',
      numberOfSKUsRequired: 'Number of SKUs is required',
      numberOfSKUsInvalid: 'Please enter a valid number',
      sellsViaRequired: 'Please select how you currently sell',
      hasMiddleEastPresenceRequired: 'Please select yes or no',
      agreementRequired:
        'You must agree to the terms to submit your application',
      submitButton: 'Submit Application',
      submittingText: 'Submitting...',
      successTitle: 'Application Submitted!',
      successMessage:
        'Thank you for your interest in partnering with The Closet. Our team will review your application and reach out soon.',
    },

    // Footer
    footer: {
      brandName: 'The Closet',
      customerTagline: 'Launching soon',
      partnerTagline: 'Premium fashion curation across Saudi Arabia',
      copyright: 'The Closet. All rights reserved.',
      instagram: 'Instagram',
      twitter: 'Twitter',
      linkedin: 'LinkedIn',
    },

    // Basket
    basket: {
      title: 'Your Basket',
      empty: 'Your basket is empty',
      emptyMessage: 'Add pieces to request showroom access',
      removeItem: 'Remove',
      requestAccessCta: 'Request Showroom Access',
      item: 'item',
      items: 'items',
      itemsSelected: 'selected',
      size: 'Size',
      addToBasket: 'Add to Basket',
      selectSize: 'Select a size',
      requestingAccessTo: "You're requesting access to view",
      moreItems: 'more',
    },

    product: {
      new: 'New',
      size: 'Size',
      selectSize: 'Select a size',
      addToBasket: 'Add to Basket',
      currency: 'SAR',
    },

    // Pop-up Page
    popup: {
      heroHeadline: 'The Closet Pop-Up Is Coming To You',
      heroSubtext: "Discover premium international brands, exclusive collections, and rare sample pieces you won't find anywhere else. Be the first to experience The Closet pop-up.",
      locationsTitle: "Where We're Popping Up",
      locationsNote: 'Select your city to see upcoming pop-up venues. Spots are limited — join the waitlist to secure your invite.',
      locations: ['Riyadh', 'Dubai', 'Paris', 'London'],
      venuesByCity: {
        'Riyadh': ['Solitaire Mall', 'Kingdom Centre', 'VIA Riyadh'],
        'Dubai': ['Dubai Mall', 'Mall of the Emirates', 'City Walk'],
        'Paris': ['Avenue Montaigne', 'Rue Saint-Honoré', 'Le Bon Marché'],
        'London': ['Harrods', 'Bond Street', 'Selfridges'],
      },
      viewPopupButton: 'View Pop-up',
      whyJoinTitle: 'Why Join The Waitlist?',
      benefit1Title: 'Premium Brands, Better Prices',
      benefit1Description: "Shop international designer brands at exclusive pop-up prices you won't find online or in-store.",
      benefit2Title: 'Exclusive Samples & Limited Pieces',
      benefit2Description: 'Get access to sample collections and limited-edition pieces before they sell out — only available at our pop-ups.',
      benefit3Title: 'First Access, No Crowds',
      benefit3Description: 'Waitlist members get priority entry and early access before the pop-up opens to the public.',
      formTitle: 'Join The Waitlist',
      formDescription: 'Be the first to know when we pop up in your city. Waitlist members get priority entry and exclusive early access.',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+966 5XX XXX XXXX',
      locationsLabel: 'Locations',
      locationsPlaceholder: 'Select locations',
      submitButton: 'Join The Waitlist',
      submittingText: 'Submitting...',
      successMessage: "Thanks! We'll contact you soon.",
      nameRequired: 'Name is required',
      phoneRequired: 'Phone number is required',
      phoneMinLength: 'Phone number must be at least 8 digits',
      locationsRequired: 'Please select at least one location',
    },
  }

// Helper function to get translations for current language
export function getTranslations(language: Language): Translations {
  return englishTranslations
}
