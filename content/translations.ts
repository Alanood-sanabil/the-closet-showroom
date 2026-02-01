// ============================================
// TRANSLATIONS
// English and Arabic translations for all UI text
// ============================================

export type Language = 'en' | 'ar'

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
    benefit5Title: string
    benefit5Description: string
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
    itemCount: string
    total: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
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
        'A private showroom giving you access to international fashion brands you have never had access to before.',
      primaryCta: 'Request Early Showroom Access',
      secondaryCta: 'Explore Featured Brands',
    },

    // Preview/Brands
    preview: {
      sectionTitle: 'Brands & Collections',
      sectionDescription:
        'Brands from around the world. New collections arriving regularly through our showroom',
      genderLabel: 'Gender',
      styleLabel: 'Style',
      clearFilters: 'Clear filters',
      filterButton: 'Filter',
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
      sectionTitle: 'Request Early Access',
      sectionDescription:
        "Be the first to explore our collection of international brands. Join our exclusive list",
      benefits: [
        'Early access to new collections',
        'First to see international brands',
        'Priority showroom appointments',
      ],
      nameLabel: 'Name',
      namePlaceholder: 'Your full name',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+966 5XX XXX XXXX',
      locationLabel: 'Showroom Location',
      locationPlaceholder: 'Select a location',
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
      submitButton: 'Request Early Access',
      submittingText: 'Processing...',
      successTitle: 'Request Received',
      successMessage: "Thank you — we'll notify you when early access opens.",
      locationRiyadh: 'Riyadh',
      locationJeddah: 'Jeddah',
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
      headline: ['Access the Middle East Through', 'One Simple Partnership'],
      subheadline:
        'Show your collection in premium showrooms and reach high-intent clients across Saudi Arabia and the region without setting up locally.',
      primaryCta: 'Apply to Partner',
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
        'Display your collection in premium showrooms across Saudi Arabia and the region without opening stores or investing in local infrastructure.',
      benefit2Title: 'Direct Access to High-Intent Clients',
      benefit2Description:
        'Connect with customers actively seeking international fashion brands and ready to discover new labels in person.',
      benefit3Title: 'Enter on Your Terms',
      benefit3Description:
        'Choose where to be present and what to showcase. Test markets with no long-term commitments.',
      benefit4Title: 'Local Market Expertise',
      benefit4Description:
        'We help you navigate pricing, positioning, and customer preferences so you can test the market with confidence.',
      benefit5Title: 'Ready From Day One',
      benefit5Description:
        'Fully equipped showrooms. Move in, showcase your collection, and start learning from real customer demand.',
    },

    // Partner Form
    partnerForm: {
      sectionTitle: 'Apply to Partner With The Closet',
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
      empty: 'Empty',
      emptyMessage:
        'Your basket is empty. Add pieces to request showroom access.',
      removeItem: 'Remove',
      requestAccessCta: 'Request Showroom Access',
      itemCount: 'items',
      total: 'Total',
    },
  },

  ar: {
    // Common
    common: {
      theCloset: 'ذا كلوزيت',
      loading: 'جار التحميل...',
      error: 'خطأ',
      success: 'نجح',
      submit: 'إرسال',
      cancel: 'إلغاء',
      close: 'إغلاق',
      back: 'رجوع',
      next: 'التالي',
      required: 'مطلوب',
      optional: 'اختياري',
      selectOne: 'اختر واحدة',
      selectAll: 'اختر جميع ما ينطبق',
      clear: 'مسح',
      filter: 'تصفية',
      sortBy: 'الترتيب حسب',
      brands: 'علامات تجارية',
      brand: 'علامة تجارية',
      price: 'السعر',
      new: 'جديد',
      viewAll: 'عرض الكل',
      learnMore: 'اعرف المزيد',
    },

    // Header
    header: {
      brandName: 'ذا كلوزيت',
      languageLabel: 'اللغة',
      english: 'English',
      arabic: 'العربية',
    },

    // Customer Hero
    customerHero: {
      badge: 'قريباً في الرياض وجدة',
      headline: ['علامات تجارية لا يمكنك إيجادها في أي مكان آخر'],
      subheadline:
        'معرض خاص يمنحك إمكانية الوصول إلى علامات الأزياء العالمية التي لم تتمكن من الوصول إليها من قبل.',
      primaryCta: 'اطلب الوصول المبكر للمعرض',
      secondaryCta: 'استكشف العلامات التجارية المميزة',
    },

    // Preview/Brands
    preview: {
      sectionTitle: 'العلامات التجارية والمجموعات',
      sectionDescription:
        'علامات تجارية من جميع أنحاء العالم. تصل مجموعات جديدة بانتظام من خلال معرضنا',
      genderLabel: 'الجنس',
      styleLabel: 'النمط',
      clearFilters: 'مسح الفلاتر',
      filterButton: 'تصفية',
      noResults: 'لا توجد علامات تجارية تطابق الفلاتر',
      brandsCount: 'علامات تجارية',
      brandCount: 'علامة تجارية',
      backButton: 'العودة للعلامات التجارية',
      sortLabel: 'الترتيب حسب',
      accessCta: 'قريباً — اطلب الوصول للتسوق في المعرض',
      mobileBackButton: 'العودة لجميع العلامات التجارية',
      // Gender
      allGender: 'الكل',
      mens: 'رجالي',
      womens: 'نسائي',
      unisex: 'للجنسين',
      // Style
      streetwear: 'أزياء الشارع',
      formal: 'رسمي',
      gymwear: 'رياضي',
      smartCasual: 'كاجوال أنيق',
      shoes: 'أحذية',
      jewellery: 'مجوهرات',
      accessories: 'إكسسوارات',
      // Sort
      featured: 'مميز',
      priceLowToHigh: 'السعر: من الأقل إلى الأعلى',
      priceHighToLow: 'السعر: من الأعلى إلى الأقل',
    },

    // Showrooms
    showrooms: {
      sectionTitle: 'معارضنا في جميع أنحاء المنطقة',
      intro:
        'شبكة من المعارض في المدن الرئيسية، تمنحك الوصول إلى علامات الأزياء العالمية من خلال مواقع متعددة، حتى تتمكن من زيارة ما يناسبك.',
      riyadh: 'الرياض',
      jeddah: 'جدة',
      dubai: 'دبي',
      riyadhLocations:
        'مواقع معارض متعددة في جميع أنحاء المدينة، بما في ذلك سوليتير مول، برج المملكة، سنتريا مول، الرياض بارك، بانوراما مول، النخيل مول، ويستفيلد، الفيصلية مول، وأفنيوز مول.',
      jeddahLocations:
        'مواقع المعارض متاحة في ريد سي مول، بوليفارد مول، ومركز الخياط.',
      dubaiLocations: 'مواقع المعارض متاحة في دبي مول ومول الإمارات.',
      appointmentNote: 'الزيارة بموعد مسبق.',
      bottomLine:
        'اختر موقع المعرض الذي يناسبك لاكتشاف الأزياء العالمية شخصياً.',
      // Partner version
      pricingNoteRiyadh:
        'تبدأ مساحات المعارض من حوالي 3,000 دولار للمتر المربع، حسب الموقع والحجم وحركة الزوار.',
      pricingNoteJeddah:
        'تبدأ مساحات المعارض من حوالي 2,000 دولار للمتر المربع، حسب الموقع والتموضع.',
      pricingNoteDubai:
        'تبدأ مساحات المعارض من حوالي 5,000 دولار للمتر المربع، حسب الموقع والحجم والرؤية.',
      partnerBottomLine:
        'اختر أين تطلق، وبأي نقطة سعر، وإلى أي مدى توسع، كل ذلك من خلال إعداد بسيط واحد.',
    },

    // Access Form
    accessForm: {
      sectionTitle: 'اطلب الوصول المبكر',
      sectionDescription:
        'كن أول من يستكشف مجموعتنا من العلامات التجارية العالمية. انضم إلى قائمتنا الحصرية',
      benefits: [
        'الوصول المبكر إلى المجموعات الجديدة',
        'أول من يرى العلامات التجارية العالمية',
        'أولوية مواعيد المعرض',
      ],
      nameLabel: 'الاسم',
      namePlaceholder: 'اسمك الكامل',
      phoneLabel: 'رقم الهاتف',
      phonePlaceholder: '+966 5XX XXX XXXX',
      locationLabel: 'موقع المعرض',
      locationPlaceholder: 'اختر موقع',
      customCityLabel: 'أدخل مدينتك',
      customCityPlaceholder: 'مدينتك',
      preferencesLabel: 'تفضيلات الأزياء',
      priceRangeLabel: 'نطاق أسعار المنتجات الأساسي',
      nameRequired: 'الاسم مطلوب',
      phoneRequired: 'رقم الهاتف مطلوب',
      phoneMinLength: 'يجب أن يكون رقم الهاتف 8 أرقام على الأقل',
      locationRequired: 'الرجاء اختيار موقع المعرض',
      customCityRequired: 'الرجاء إدخال مدينتك',
      priceRangeRequired: 'الرجاء اختيار نطاق سعري',
      submitButton: 'اطلب الوصول المبكر',
      submittingText: 'جار المعالجة...',
      successTitle: 'تم استلام الطلب',
      successMessage: 'شكراً — سنخطرك عندما يفتح الوصول المبكر.',
      locationRiyadh: 'الرياض',
      locationJeddah: 'جدة',
      locationOther: 'أخرى',
      priceRange1: '500 - 2,000 ريال',
      priceRange2: '2,000 - 4,500 ريال',
      priceRange3: '4,500 ريال وما فوق',
      prefStreetweear: 'أزياء الشارع',
      prefFormal: 'رسمي',
      prefGymwear: 'رياضي',
      prefSmartCasual: 'كاجوال أنيق',
      prefShoes: 'أحذية',
      prefJewellery: 'مجوهرات / إكسسوارات',
    },

    // Partner Hero
    partnerHero: {
      badge: 'للعلامات التجارية والمصممين',
      headline: ['الوصول إلى الشرق الأوسط من خلال', 'شراكة بسيطة واحدة'],
      subheadline:
        'اعرض مجموعتك في معارض متميزة واصل إلى العملاء في جميع أنحاء المملكة العربية السعودية والمنطقة دون الحاجة للإعداد المحلي.',
      primaryCta: 'تقديم طلب شراكة',
      secondaryCta: 'اعرف المزيد',
      note: 'أماكن محدودة متاحة للعلامات التجارية لكل موقع.',
    },

    // Partnership Info
    partnershipInfo: {
      sectionTitle: 'لماذا الشراكة مع ذا كلوزيت',
      sectionDescription:
        'يوفر ذا كلوزيت للعلامات التجارية العالمية طريقة مباشرة لدخول الشرق الأوسط من خلال معارض فعلية، دون تكلفة أو تعقيد أو التزام طويل الأجل لفتح المتاجر أو بناء فرق محلية.',
      benefit1Title: 'الوصول إلى المعارض دون إعداد',
      benefit1Description:
        'اعرض مجموعتك في معارض متميزة في جميع أنحاء المملكة العربية السعودية والمنطقة دون فتح متاجر أو الاستثمار في البنية التحتية المحلية.',
      benefit2Title: 'وصول مباشر إلى عملاء بنية شراء قوية',
      benefit2Description:
        'تواصل مع العملاء الذين يبحثون بنشاط عن علامات الأزياء العالمية ومستعدون لاكتشاف علامات تجارية جديدة شخصياً.',
      benefit3Title: 'ادخل بشروطك الخاصة',
      benefit3Description:
        'اختر أين تتواجد وما تعرضه. اختبر الأسواق دون التزامات طويلة الأجل.',
      benefit4Title: 'خبرة السوق المحلية',
      benefit4Description:
        'نساعدك على التنقل في التسعير والتموضع وتفضيلات العملاء حتى تتمكن من اختبار السوق بثقة.',
      benefit5Title: 'جاهز من اليوم الأول',
      benefit5Description:
        'معارض مجهزة بالكامل. انتقل، اعرض مجموعتك، وابدأ التعلم من طلب العملاء الفعلي.',
    },

    // Partner Form
    partnerForm: {
      sectionTitle: 'تقديم طلب للشراكة مع ذا كلوزيت',
      sectionDescription:
        'أخبرنا قليلاً عن علامتك التجارية. سيراجع فريقنا التفاصيل ويعاود الاتصال بك.',
      contactNameLabel: 'الاسم الكامل',
      contactNamePlaceholder: 'اسمك الكامل',
      titleLabel: 'الدور / المسمى الوظيفي',
      titlePlaceholder: 'مثال، مؤسس، مدير العلامة التجارية',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'you@yourbrand.com',
      phoneLabel: 'رقم الهاتف',
      phonePlaceholder: '+XXX XX XXX XXXX',
      brandNameLabel: 'اسم العلامة التجارية',
      brandNamePlaceholder: 'أدخل اسم علامتك التجارية',
      websiteLabel: 'الموقع الإلكتروني أو LinkedIn',
      websitePlaceholder: 'https://yourbrand.com أو رابط LinkedIn',
      countryLabel: 'بلد المنشأ',
      countryPlaceholder: 'مثال، الولايات المتحدة',
      productTypesLabel: 'فئات المنتجات',
      productTypesPlaceholder: 'اختر جميع ما ينطبق',
      productTypesHelpText: 'اختر جميع فئات المنتجات التي تقدمها علامتك التجارية',
      pricePointLabel: 'نطاق أسعار التجزئة المتوسط',
      pricePointPlaceholder: 'اختر نطاق سعري',
      numberOfSKUsLabel: 'عدد المنتجات التي تخطط لعرضها',
      numberOfSKUsPlaceholder: 'مثال، 50',
      sellsViaLabel: 'هل تبيع حالياً',
      sellsViaPlaceholder: 'اختر واحدة',
      hasMiddleEastPresenceLabel:
        'هل لديك أي تواجد في الشرق الأوسط من خلال الشحنات أو الموزعين أو الوكلاء؟',
      hasMiddleEastPresencePlaceholder: 'اختر واحدة',
      middleEastPresenceDetailsLabel: 'أين أو مع من؟',
      middleEastPresenceDetailsPlaceholder: 'صف تواجدك الحالي في الشرق الأوسط',
      agreementLabel: 'أفهم أن الشراكة تخضع لاتفاق متبادل على الشروط.',
      productTypeStreetwear: 'أزياء الشارع',
      productTypeFormal: 'رسمي',
      productTypeGymwear: 'رياضي',
      productTypeSmartCasual: 'كاجوال أنيق',
      productTypeShoes: 'أحذية',
      productTypeJewellery: 'مجوهرات',
      productTypeAccessories: 'إكسسوارات',
      pricePointEntry: '100 - 500 دولار',
      pricePointMid: '500 - 1,200 دولار',
      pricePointPremium: '1,200 دولار وما فوق',
      sellsViaDTC: 'مباشرة للمستهلك',
      sellsViaWholesale: 'جملة',
      sellsViaBoth: 'كلاهما',
      brandNameRequired: 'اسم العلامة التجارية مطلوب',
      contactNameRequired: 'الاسم الكامل مطلوب',
      titleRequired: 'الدور / المسمى الوظيفي مطلوب',
      emailRequired: 'البريد الإلكتروني مطلوب',
      emailInvalid: 'الرجاء إدخال بريد إلكتروني صالح',
      phoneRequired: 'رقم الهاتف مطلوب',
      phoneMinLength: 'يجب أن يكون رقم الهاتف 10 أرقام على الأقل',
      websiteInvalid: 'الرجاء إدخال رابط صالح (بما في ذلك https://)',
      countryOfOriginRequired: 'بلد المنشأ مطلوب',
      productTypesRequired: 'الرجاء اختيار فئة منتج واحدة على الأقل',
      pricePointRequired: 'الرجاء اختيار نطاق سعري',
      numberOfSKUsRequired: 'عدد المنتجات مطلوب',
      numberOfSKUsInvalid: 'الرجاء إدخال رقم صالح',
      sellsViaRequired: 'الرجاء اختيار كيف تبيع حالياً',
      hasMiddleEastPresenceRequired: 'الرجاء اختيار نعم أو لا',
      agreementRequired: 'يجب أن توافق على الشروط لتقديم طلبك',
      submitButton: 'إرسال الطلب',
      submittingText: 'جار الإرسال...',
      successTitle: 'تم إرسال الطلب!',
      successMessage:
        'شكراً لاهتمامك بالشراكة مع ذا كلوزيت. سيراجع فريقنا طلبك ويتواصل معك قريباً.',
    },

    // Footer
    footer: {
      brandName: 'ذا كلوزيت',
      customerTagline: 'قريباً',
      partnerTagline: 'تنسيق الأزياء الفاخرة في جميع أنحاء المملكة العربية السعودية',
      copyright: 'ذا كلوزيت. جميع الحقوق محفوظة.',
      instagram: 'إنستغرام',
      twitter: 'تويتر',
      linkedin: 'لينكد إن',
    },

    // Basket
    basket: {
      title: 'سلتك',
      empty: 'فارغة',
      emptyMessage: 'سلتك فارغة. أضف قطع لطلب الوصول إلى المعرض.',
      removeItem: 'حذف',
      requestAccessCta: 'اطلب الوصول للمعرض',
      itemCount: 'عناصر',
      total: 'المجموع',
    },
  },
}

// Helper function to get translations for current language
export function getTranslations(language: Language): Translations {
  return translations[language]
}
