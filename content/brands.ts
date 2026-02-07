import type { BrandPreview } from '@/lib/types'

/*
 * BRANDS NEEDING LOGOS:
 * Save logos to: /public/images/brands/logos/<brand-slug>.png
 *
 * Missing logos (using placeholder):
 * - joseph-altuzarra.png, proenza-schouler.png, gabriela-hearst.png, another-tomorrow.png
 * - thom-browne.png, jw-pei.png, tibi.png, billy-reid.png, buck-mason.png, noah-nyc.png
 * - john-elliott.png, autry.png, sebago.png, gh-bass.png, beams-f.png, todd-snyder.png
 * - rowing-blazers.png, corridor.png, taylor-stitch-workshop.png, carhartt-wip.png
 * - fear-of-god.png, aime-leon-dore.png, officine-generale.png, aurelien.png
 * - cole-buxton.png, illictboc.png, picante.png, daily-paper.png, needles.png
 * - the-real-mccoys.png, mutimer.png, alfies.png, sweats.png, earls-collection.png
 * - lemaire.png, husbands-paris.png, studio-tomboy.png, casablanca.png, maison-margiela.png
 * - paraboot.png, bexley.png, crockett-and-jones-handgrade.png, gaziano-and-girling.png
 * - baudoin-and-lange.png, grenson.png, stepney-workers-club.png, fabi-shoes.png
 * - loriblu.png, agl-shoes.png, dear-frances.png, by-far.png, carlos-santos.png
 * - cqp.png, axel-arigato.png, nubikk.png, morobe.png, morjas.png
 * - crop-shop-boutique.png, lskd.png
 */

export const BRANDS_DATA: BrandPreview[] = [
  // ========== WOMENWEAR ==========
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
    id: 'joseph-altuzarra',
    name: 'Joseph Altuzarra',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['womens'],
    styleTags: ['formal', 'smart-casual'],
    priceHint: '2,000–8,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'proenza-schouler',
    name: 'Proenza Schouler',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['womens'],
    styleTags: ['formal', 'smart-casual'],
    priceHint: '1,500–6,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'gabriela-hearst',
    name: 'Gabriela Hearst',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['womens'],
    styleTags: ['formal', 'smart-casual'],
    priceHint: '2,500–10,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'another-tomorrow',
    name: 'Another Tomorrow',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['womens'],
    styleTags: ['smart-casual'],
    priceHint: '1,800–5,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'thom-browne',
    name: 'Thom Browne',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['womens', 'mens'],
    styleTags: ['formal'],
    priceHint: '2,000–15,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'the-row',
    name: 'The Row',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['womens', 'mens'],
    styleTags: ['formal', 'smart-casual'],
    priceHint: '600–20,000 SAR',
    logoImage: '/images/brands/the row/image.png',
    products: [
      { id: 'cs-1', name: 'Akia Jacket in Leather', category: 'Jacket', price: 9180, isNew: true, image: '/images/products/the row/Screenshot 1447-08-10 at 6.20.17 PM.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'cs-2', name: 'Nobilis Buckle Boot in Leather', category: 'Shoes', price: 2710, image: '/images/products/the row/Screenshot 1447-08-10 at 6.22.50 PM.png', sizeType: 'shoes', sizes: ['38', '39', '40', '41', '42', '43'] },
      { id: 'cs-3', name: 'Ross Jean in Cotton', category: 'Bottoms', price: 970, image: '/images/products/the row/Screenshot 1447-08-10 at 6.29.01 PM.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'cs-4', name: 'Zomo Coat in Cashmere', category: 'Jacket', price: 2850, image: '/images/products/the row/Screenshot 1447-08-10 at 6.27.09 PM.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    ]
  },
  {
    id: 'jw-pei',
    name: 'JW Pei',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['womens'],
    styleTags: ['accessories'],
    priceHint: '300–1,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'tibi',
    name: 'Tibi',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['womens'],
    styleTags: ['smart-casual'],
    priceHint: '1,200–4,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },

  // ========== MENWEAR ==========
  {
    id: 'billy-reid',
    name: 'Billy Reid',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['mens'],
    styleTags: ['smart-casual'],
    priceHint: '800–3,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'buck-mason',
    name: 'Buck Mason',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['mens'],
    styleTags: ['smart-casual'],
    priceHint: '500–2,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'noah-nyc',
    name: 'Noah NYC',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['mens'],
    styleTags: ['streetwear', 'smart-casual'],
    priceHint: '600–2,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'john-elliott',
    name: 'John Elliott',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['mens'],
    styleTags: ['streetwear', 'smart-casual'],
    priceHint: '800–3,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'autry',
    name: 'Autry',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['mens', 'womens'],
    styleTags: ['shoes'],
    priceHint: '600–1,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'sebago',
    name: 'Sebago',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['mens', 'womens'],
    styleTags: ['shoes'],
    priceHint: '500–1,200 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'gh-bass',
    name: 'GH Bass',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['mens', 'womens'],
    styleTags: ['shoes'],
    priceHint: '400–1,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'beams-f',
    name: 'Beams F',
    countryCode: 'JP',
    countryName: 'Japan',
    genderTags: ['mens'],
    styleTags: ['smart-casual'],
    priceHint: '1,000–4,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'todd-snyder',
    name: 'Todd Snyder',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['mens'],
    styleTags: ['smart-casual', 'formal'],
    priceHint: '800–3,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'rowing-blazers',
    name: 'Rowing Blazers',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['mens'],
    styleTags: ['smart-casual'],
    priceHint: '1,000–4,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'corridor',
    name: 'Corridor',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['mens'],
    styleTags: ['smart-casual'],
    priceHint: '600–2,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'taylor-stitch-workshop',
    name: 'Taylor Stitch Workshop',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['mens'],
    styleTags: ['smart-casual'],
    priceHint: '800–2,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'carhartt-wip',
    name: 'Carhartt WIP',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['mens', 'womens'],
    styleTags: ['streetwear'],
    priceHint: '400–1,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'fear-of-god',
    name: 'Fear of God',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['mens'],
    styleTags: ['streetwear', 'smart-casual'],
    priceHint: '1,500–8,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'aime-leon-dore',
    name: 'Aimé Leon Dore',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['mens'],
    styleTags: ['streetwear', 'smart-casual'],
    priceHint: '800–3,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'officine-generale',
    name: 'Officine Générale',
    countryCode: 'FR',
    countryName: 'France',
    genderTags: ['mens'],
    styleTags: ['smart-casual', 'formal'],
    priceHint: '1,000–4,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'aurelien',
    name: 'Aurélien',
    countryCode: 'FR',
    countryName: 'France',
    genderTags: ['mens'],
    styleTags: ['smart-casual'],
    priceHint: '800–3,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },

  // ========== STREETWEAR ==========
  {
    id: 'represent',
    name: 'Represent',
    countryCode: 'GB',
    countryName: 'United Kingdom',
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
  {
    id: 'cole-buxton',
    name: 'Cole Buxton',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    genderTags: ['mens', 'womens'],
    styleTags: ['streetwear'],
    priceHint: '600–2,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'seventh',
    name: 'Seventh',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    genderTags: ['mens'],
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
    id: 'illictboc',
    name: 'Illictboc',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    genderTags: ['mens'],
    styleTags: ['streetwear'],
    priceHint: '400–1,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'picante',
    name: 'Picante',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    genderTags: ['mens'],
    styleTags: ['streetwear'],
    priceHint: '300–1,200 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'daily-paper',
    name: 'Daily Paper',
    countryCode: 'NL',
    countryName: 'Netherlands',
    genderTags: ['mens', 'womens'],
    styleTags: ['streetwear'],
    priceHint: '500–2,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'needles',
    name: 'Needles',
    countryCode: 'JP',
    countryName: 'Japan',
    genderTags: ['mens'],
    styleTags: ['streetwear'],
    priceHint: '800–3,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'the-real-mccoys',
    name: "The Real McCoy's",
    countryCode: 'JP',
    countryName: 'Japan',
    genderTags: ['mens'],
    styleTags: ['streetwear'],
    priceHint: '1,200–5,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'mutimer',
    name: 'Mutimer',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    genderTags: ['mens'],
    styleTags: ['streetwear'],
    priceHint: '400–1,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'alfies',
    name: 'Alfies',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    genderTags: ['mens'],
    styleTags: ['streetwear'],
    priceHint: '300–1,200 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'sweats',
    name: 'Sweats',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    genderTags: ['mens', 'womens'],
    styleTags: ['streetwear'],
    priceHint: '300–1,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'earls-collection',
    name: 'Earls Collection',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    genderTags: ['mens'],
    styleTags: ['streetwear'],
    priceHint: '400–1,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },

  // ========== SMART-CASUAL / CASUAL ==========
  {
    id: 'lemaire',
    name: 'Lemaire',
    countryCode: 'FR',
    countryName: 'France',
    genderTags: ['mens', 'womens'],
    styleTags: ['smart-casual'],
    priceHint: '1,500–6,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'husbands-paris',
    name: 'Husbands Paris',
    countryCode: 'FR',
    countryName: 'France',
    genderTags: ['mens'],
    styleTags: ['smart-casual'],
    priceHint: '800–3,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'studio-tomboy',
    name: 'Studio Tomboy',
    countryCode: 'FR',
    countryName: 'France',
    genderTags: ['womens'],
    styleTags: ['smart-casual'],
    priceHint: '600–2,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'casablanca',
    name: 'Casablanca',
    countryCode: 'FR',
    countryName: 'France',
    genderTags: ['mens'],
    styleTags: ['smart-casual', 'streetwear'],
    priceHint: '1,200–5,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'maison-margiela',
    name: 'Maison Margiela',
    countryCode: 'FR',
    countryName: 'France',
    genderTags: ['mens', 'womens'],
    styleTags: ['formal', 'smart-casual'],
    priceHint: '2,000–10,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },

  // ========== SHOES ==========
  {
    id: 'paraboot',
    name: 'Paraboot',
    countryCode: 'FR',
    countryName: 'France',
    genderTags: ['mens', 'womens'],
    styleTags: ['shoes'],
    priceHint: '1,200–3,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'bexley',
    name: 'Bexley',
    countryCode: 'FR',
    countryName: 'France',
    genderTags: ['mens'],
    styleTags: ['shoes'],
    priceHint: '800–2,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'salomon',
    name: 'Salomon',
    countryCode: 'FR',
    countryName: 'France',
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
    id: 'officine-creative',
    name: 'Officine Creative',
    countryCode: 'IT',
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
    id: 'crockett-and-jones-handgrade',
    name: 'Crockett & Jones Handgrade',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    genderTags: ['mens'],
    styleTags: ['shoes'],
    priceHint: '2,000–5,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'gaziano-and-girling',
    name: 'Gaziano & Girling',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    genderTags: ['mens'],
    styleTags: ['shoes'],
    priceHint: '3,000–8,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'baudoin-and-lange',
    name: 'Baudoin & Lange',
    countryCode: 'BE',
    countryName: 'Belgium',
    genderTags: ['mens'],
    styleTags: ['shoes'],
    priceHint: '1,500–3,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'grenson',
    name: 'Grenson',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    genderTags: ['mens', 'womens'],
    styleTags: ['shoes'],
    priceHint: '1,200–3,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'stepney-workers-club',
    name: 'Stepney Workers Club',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    genderTags: ['mens', 'womens'],
    styleTags: ['shoes'],
    priceHint: '400–1,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'fabi-shoes',
    name: 'Fabi Shoes',
    countryCode: 'IT',
    countryName: 'Italy',
    genderTags: ['mens', 'womens'],
    styleTags: ['shoes'],
    priceHint: '1,000–3,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'loriblu',
    name: 'Loriblu',
    countryCode: 'IT',
    countryName: 'Italy',
    genderTags: ['womens'],
    styleTags: ['shoes'],
    priceHint: '1,200–3,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'agl-shoes',
    name: 'AGL Shoes',
    countryCode: 'IT',
    countryName: 'Italy',
    genderTags: ['womens'],
    styleTags: ['shoes'],
    priceHint: '800–2,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'dear-frances',
    name: 'Dear Frances',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    genderTags: ['womens'],
    styleTags: ['shoes'],
    priceHint: '1,500–4,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'by-far',
    name: 'By Far',
    countryCode: 'BG',
    countryName: 'Bulgaria',
    genderTags: ['womens'],
    styleTags: ['shoes', 'accessories'],
    priceHint: '1,000–3,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'carlos-santos',
    name: 'Carlos Santos',
    countryCode: 'PT',
    countryName: 'Portugal',
    genderTags: ['mens'],
    styleTags: ['shoes'],
    priceHint: '1,200–2,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'cqp',
    name: 'CQP',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['mens'],
    styleTags: ['shoes'],
    priceHint: '800–1,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'axel-arigato',
    name: 'Axel Arigato',
    countryCode: 'SE',
    countryName: 'Sweden',
    genderTags: ['mens', 'womens'],
    styleTags: ['shoes'],
    priceHint: '900–2,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'nubikk',
    name: 'Nubikk',
    countryCode: 'NL',
    countryName: 'Netherlands',
    genderTags: ['mens', 'womens'],
    styleTags: ['shoes'],
    priceHint: '600–1,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'morobe',
    name: 'Morobe',
    countryCode: 'SE',
    countryName: 'Sweden',
    genderTags: ['mens'],
    styleTags: ['shoes'],
    priceHint: '1,000–2,500 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'morjas',
    name: 'Morjas',
    countryCode: 'SE',
    countryName: 'Sweden',
    genderTags: ['mens'],
    styleTags: ['shoes'],
    priceHint: '1,200–3,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },

  // ========== GYMWEAR ==========
  {
    id: 'crop-shop-boutique',
    name: 'Crop Shop Boutique',
    countryCode: 'US',
    countryName: 'United States',
    genderTags: ['womens'],
    styleTags: ['gymwear'],
    priceHint: '200–800 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'lskd',
    name: 'LSKD',
    countryCode: 'AU',
    countryName: 'Australia',
    genderTags: ['mens', 'womens'],
    styleTags: ['gymwear'],
    priceHint: '300–1,000 SAR',
    logoImage: '/images/brands/logos/placeholder.png',
    products: []
  },
  {
    id: 'stax',
    name: 'STAX',
    countryCode: 'SE',
    countryName: 'Sweden',
    genderTags: ['womens', 'mens'],
    styleTags: ['gymwear'],
    priceHint: '150–1,000 SAR',
    logoImage: '/images/brands/STAX/image-copy.png',
    products: [
      { id: 'tt-1', name: 'Dymo Zip Up', category: 'Jacket', price: 400, isNew: true, image: '/images/products/STAX/Screenshot 1447-08-14 at 1.40.32 PM.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'tt-2', name: 'Fold Over Flares Airlyte', category: 'Bottoms', price: 450, image: '/images/products/STAX/Screenshot 1447-08-14 at 1.42.09 PM.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'tt-3', name: 'Zip Jacket NANDEX™', category: 'Jacket', price: 700, image: '/images/products/STAX/Screenshot 1447-08-14 at 1.43.22 PM.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'tt-4', name: 'Motion Panel Tee', category: 'Tops', price: 300, isNew: true, image: '/images/products/STAX/Screenshot 1447-08-14 at 1.44.34 PM.png', sizeType: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    ]
  },
]
