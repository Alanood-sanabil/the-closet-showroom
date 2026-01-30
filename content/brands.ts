import type { BrandPreview } from '@/lib/types'


export const BRANDS_DATA: BrandPreview[] = [
  {
    id: 'simkhai',
    name: 'Simkhai',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['womens'],
    styleTags: ['formal', 'smart-casual'],

    priceHint: '1,800–7,500 SAR',
    logoImage: '/images/brands/simkhai/image.png',
    products: [
      { id: 'mn-1', name: 'Reannon Draped Satin Gown', category: 'Dress', price: 3350, isNew: true, image: '/images/products/simkhai/reannon-draped-satin-gown.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'mn-2', name: 'Marley Suede Jacket', category: 'Jacket', price: 5450, image: '/images/products/simkhai/marley-suede-jacket.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'mn-3', name: 'Jude Embellished Crop Jean', category: 'Bottoms', price: 2950, image: '/images/products/simkhai/jude-embellished-crop-jean.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'mn-5', name: 'Aster Draped Wool Mini Dress', category: 'Outerwear', price: 2450, isNew: true, image: '/images/products/simkhai/aster-draped-wool-mini-dress.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    ]
  },
  {
    id: 'khaite',
    name: 'Khaite',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['womens'],
    styleTags: ['formal', 'smart-casual'],
    collectionName: 'Winter Collection',
    priceHint: '1,200–20,500 SAR',
    logoImage: '/images/brands/khaite/image.png',
    products: [
      { id: 'sm-1', name: 'Edgar Dress', category: 'Dress', price: 15680, image: '/images/products/khaite/edgar-dress.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'sm-2', name: 'Coast Dress', category: 'Dress', price: 9900, isNew: true, image: '/images/products/khaite/coast-dress.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'sm-3', name: 'Alton Coat', category: 'Outerwear', price: 15680, image: '/images/products/khaite/alton-coat.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'sm-6', name: 'Sandor Jacket', category: 'Outerwear', price: 28060, isNew: true, image: '/images/products/khaite/sandor-jacket.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    ]
  },
  {
    id: 'seventh',
    name: 'Seventh',
    countryCode: 'UK',
    countryName: 'United Kingdom',
    genderTags: [ 'mens'],
    styleTags: ['streetwear'],

    priceHint: '500–5,000 SAR',
    logoImage: '/images/brands/seventh/image.png',
    products: [
      { id: 'al-1', name: 'Denim 410 Orb Jacket in Clouded Indigo', category: 'Jacket', price: 1400, isNew: true, image: '/images/products/seventh/Screenshot 1447-08-10 at 11.28.07 PM.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'al-2', name: 'Denim 440 Bermuda Jeans in Indigo', category: 'Denim', price: 1100, image: '/images/products/seventh/Screenshot 1447-08-10 at 11.29.57 PM.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'al-3', name: 'Denim 440 Jacket in Indigo', category: 'Jacket', price: 1150, image: '/images/products/seventh/Screenshot 1447-08-10 at 11.31.27 PM.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'al-4', name: 'Wool Knit Duvet Scarf in Chestnut Grain', category: 'Scarf', price: 800, image: '/images/products/seventh/Screenshot 1447-08-10 at 11.31.16 PM.png', sizeType: 'none' },
    ]
  },
  {
    id: 'officine-creative',
    name: 'Officine Creative',
    countryCode: 'Italy',
    countryName: 'Italy',
    genderTags: ['mens', 'womens'],
    styleTags: ['shoes'],

    priceHint: '800–6,000 SAR',
    logoImage: '/images/brands/officine-creative/image.png',
    products: [
      { id: 'cm-1', name: 'ANATOMIA 012 Black Leather Derby Shoes', category: 'Shoes', price: 2400, isNew: true, image: '/images/products/off/shoe.png', sizeType: 'shoes', sizes: ['38', '39', '40', '41', '42', '43'] },
      { id: 'cm-2', name: 'ANATOMIA 016 Dark Brown Leather Ankle Boots', category: 'Shoes', price: 3100, image: '/images/products/off/Screenshot 1447-08-10 at 11.57.03 PM.png', sizeType: 'shoes', sizes: ['38', '39', '40', '41', '42', '43'] },
      { id: 'cm-3', name: 'CALIXTE 004 Black Leather Chelsea Boots', category: 'Shoes', price: 3250, image: '/images/products/off/Screenshot 1447-08-10 at 11.59.10 PM.png', sizeType: 'shoes', sizes: ['38', '39', '40', '41', '42', '43'] },
      { id: 'cm-4', name: 'CALIXTE 020 Black Leather Loafers', category: 'Shoes', price: 2600, image: '/images/products/off/Screenshot 1447-08-11 at 12.02.05 AM.png', sizeType: 'shoes', sizes: ['38', '39', '40', '41', '42', '43'] },
    ]
  },
  {
    id: 'annika-inez',
    name: 'Annika Inez',
    countryCode: 'UY',
    countryName: 'Uruguay',
    genderTags: ['womens'],
    styleTags: ['jewellery'],

    priceHint: '900–3,500 SAR',
    logoImage: '/images/brands/anni/image.png',
    products: [
      { id: 'te-1', name: 'Serpent Cuff Bracelet', category: 'jewellery', price: 1330, image: '/images/products/anni/Screenshot 1447-08-11 at 12.28.10 AM.png', sizeType: 'none' },
      { id: 'te-2', name: 'Bigger Heart Ring', category: 'jewellery', price: 800, isNew: true, image: '/images/products/anni/Screenshot 1447-08-11 at 12.31.56 AM.png', sizeType: 'none' },
      { id: 'te-3', name: 'Slender Tube Collar', category: 'jewellery', price: 1850, image: '/images/products/anni/Screenshot 1447-08-11 at 12.33.16 AM.png', sizeType: 'none' },
      { id: 'te-4', name: 'Large Sloping Hinge Hoops', category: 'jewellery', price: 1150, image: '/images/products/anni/Screenshot 1447-08-11 at 12.35.14 AM.png', sizeType: 'none' },
    ]
  },
  {
    id: 'the-row',
    name: 'The Row',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    genderTags: ['mens'],
    styleTags: ['formal'],

    priceHint: '600–4,200 SAR',
    logoImage: '/images/brands/the row/image.png',
    products: [
      { id: 'cs-1', name: 'Akia Jacket in Leather', category: 'Jacket', price: 9180, isNew: true, image: '/images/products/the row/Screenshot 1447-08-10 at 6.20.17 PM.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'cs-2', name: 'Nobilis Buckle Boot in Leather', category: 'Shoes', price: 2710, image: '/images/products/the row/Screenshot 1447-08-10 at 6.22.50 PM.png', sizeType: 'shoes', sizes: ['38', '39', '40', '41', '42', '43'] },
      { id: 'cs-3', name: 'Ross Jean in Cotton', category: 'Bottoms', price: 970, image: '/images/products/the row/Screenshot 1447-08-10 at 6.29.01 PM.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'cs-4', name: 'Zomo Coat in Cashmere', category: 'Jacket', price: 2850, image: '/images/products/the row/Screenshot 1447-08-10 at 6.27.09 PM.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    ]
  },
  {
    id: 'salomon',
    name: 'Salomon',
    countryCode: 'IT',
    countryName: 'Italy',
    genderTags: ['mens', 'womens'],
    styleTags: ['shoes'],

    priceHint: '700–2,500 SAR',
    logoImage: '/images/brands/salomon/image.png',
    products: [
      { id: 'rh-1', name: 'XT-6', category: 'Shoes', price: 900, isNew: true, image: '/images/products/salomon/Screenshot 1447-08-10 at 7.02.49 PM.png', sizeType: 'shoes', sizes: ['38', '39', '40', '41', '42', '43'] },
      { id: 'rh-2', name: 'XT-QUEST', category: 'Shoes', price: 860, image: '/images/products/salomon/Screenshot 1447-08-10 at 7.01.19 PM.png', sizeType: 'shoes', sizes: ['38', '39', '40', '41', '42', '43'] },
      { id: 'rh-3', name: 'XT-6 EXPANSE', category: 'Shoes', price: 700, image: '/images/products/salomon/Screenshot 1447-08-10 at 7.00.12 PM.png', sizeType: 'shoes', sizes: ['38', '39', '40', '41', '42', '43'] },
      { id: 'rh-4', name: 'XT-4 OG RECON', category: 'Shoes', price: 950, image: '/images/products/salomon/Screenshot 1447-08-10 at 6.59.06 PM.png', sizeType: 'shoes', sizes: ['38', '39', '40', '41', '42', '43'] },
    ]
  },
  {
    id: 'represent',
    name: 'Represent',
    countryCode: 'FR',
    countryName: 'France',
    genderTags: ['mens', 'womens'],
    styleTags: ['streetwear'],

    priceHint: '1,500–8,500 SAR',
    logoImage: '/images/brands/represent/image.png',
    products: [
      { id: 'ec-1', name: 'Nothing Faster T-Shirt', category: 'T-Shirt', price: 800, isNew: true, image: '/images/products/represent/Screenshot 1447-08-10 at 7.15.42 PM.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'ec-2', name: 'Represent Owners Club Zip Through Hoodie', category: 'Hoodie', price: 980, image: '/images/products/represent/Screenshot 1447-08-10 at 7.20.21 PM.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'ec-3', name: '247 Overhead Training Jacket', category: 'Jacket', price: 1400, image: '/images/products/represent/Screenshot 1447-08-10 at 7.22.55 PM.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'ec-4', name: 'Elegance In Motion Hoodie', category: 'Hoodie', price: 960, isNew: true, image: '/images/products/represent/Screenshot 1447-08-10 at 7.26.27 PM.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    ]
  },
]
