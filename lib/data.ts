export type GenderTag = 'mens' | 'womens' | 'unisex'
export type StyleTag =
  | 'streetwear'
  | 'formal'
  | 'gymwear'
  | 'smart-casual'
  | 'shoes'
  | 'jewellery'
  | 'accessories'

export interface Product {
  id: string
  name: string
  category: string
  price: number
  image?: string
  isNew?: boolean
}

export interface Brand {
  id: string
  name: string
  genderTags: GenderTag[]
  styleTags: StyleTag[]
  heroImage?: string
  products: Product[]
}

// Helper to generate products for a brand
function generateProducts(brandId: string, categories: string[]): Product[] {
  const productNames: Record<string, string[]> = {
    tops: ['Essential Tee', 'Oversized Hoodie', 'Silk Blouse', 'Cashmere Sweater', 'Structured Blazer'],
    bottoms: ['Tailored Trousers', 'Wide Leg Pants', 'Slim Chinos', 'Pleated Skirt', 'Cargo Pants'],
    outerwear: ['Wool Overcoat', 'Leather Jacket', 'Trench Coat', 'Puffer Jacket', 'Bomber Jacket'],
    shoes: ['Leather Loafers', 'Minimalist Sneakers', 'Chelsea Boots', 'Oxford Shoes', 'Suede Mules'],
    accessories: ['Leather Belt', 'Silk Scarf', 'Structured Bag', 'Card Holder', 'Sunglasses'],
    jewellery: ['Chain Necklace', 'Signet Ring', 'Cuff Bracelet', 'Hoop Earrings', 'Pendant'],
    activewear: ['Performance Tee', 'Training Shorts', 'Compression Leggings', 'Sports Bra', 'Track Jacket'],
  }

  const products: Product[] = []
  let productId = 1

  categories.forEach((category) => {
    const names = productNames[category] || productNames.tops
    const count = Math.floor(Math.random() * 2) + 2 // 2-3 products per category

    for (let i = 0; i < count && i < names.length; i++) {
      products.push({
        id: `${brandId}-${productId++}`,
        name: names[i],
        category: category.charAt(0).toUpperCase() + category.slice(1),
        price: Math.round((Math.random() * 8000 + 500) / 50) * 50, // 500-8500 SAR, rounded to 50
        isNew: Math.random() > 0.7,
      })
    }
  })

  return products.slice(0, 12) // Max 12 products
}

export const brands: Brand[] = [
  {
    id: 'maison-noir',
    name: 'Maison Noir',
    genderTags: ['womens'],
    styleTags: ['formal', 'smart-casual'],
    products: generateProducts('maison-noir', ['tops', 'bottoms', 'outerwear', 'accessories']),
  },
  {
    id: 'studio-minimal',
    name: 'Studio Minimal',
    genderTags: ['mens'],
    styleTags: ['streetwear', 'smart-casual'],
    products: generateProducts('studio-minimal', ['tops', 'bottoms', 'outerwear']),
  },
  {
    id: 'atelier-luxe',
    name: 'Atelier Luxe',
    genderTags: ['womens', 'mens'],
    styleTags: ['formal'],
    products: generateProducts('atelier-luxe', ['tops', 'bottoms', 'outerwear', 'accessories']),
  },
  {
    id: 'casa-moderna',
    name: 'Casa Moderna',
    genderTags: ['unisex'],
    styleTags: ['accessories', 'jewellery'],
    products: generateProducts('casa-moderna', ['accessories', 'jewellery']),
  },
  {
    id: 'the-edit',
    name: 'The Edit',
    genderTags: ['womens'],
    styleTags: ['streetwear', 'smart-casual'],
    products: generateProducts('the-edit', ['tops', 'bottoms', 'accessories']),
  },
  {
    id: 'collective-studio',
    name: 'Collective Studio',
    genderTags: ['mens'],
    styleTags: ['streetwear'],
    products: generateProducts('collective-studio', ['tops', 'bottoms', 'shoes']),
  },
  {
    id: 'refined-house',
    name: 'Refined House',
    genderTags: ['mens', 'womens'],
    styleTags: ['formal', 'smart-casual'],
    products: generateProducts('refined-house', ['tops', 'bottoms', 'outerwear']),
  },
  {
    id: 'essence-co',
    name: 'Essence & Co',
    genderTags: ['womens'],
    styleTags: ['jewellery', 'accessories'],
    products: generateProducts('essence-co', ['jewellery', 'accessories']),
  },
  {
    id: 'noir-atelier',
    name: 'Noir Atelier',
    genderTags: ['womens'],
    styleTags: ['formal'],
    products: generateProducts('noir-atelier', ['tops', 'bottoms', 'outerwear', 'accessories']),
  },
  {
    id: 'form-studio',
    name: 'Form Studio',
    genderTags: ['mens'],
    styleTags: ['gymwear', 'streetwear'],
    products: generateProducts('form-studio', ['activewear', 'shoes']),
  },
  {
    id: 'pure-line',
    name: 'Pure Line',
    genderTags: ['unisex'],
    styleTags: ['smart-casual'],
    products: generateProducts('pure-line', ['tops', 'bottoms', 'accessories']),
  },
  {
    id: 'luxe-collective',
    name: 'Luxe Collective',
    genderTags: ['unisex'],
    styleTags: ['shoes', 'accessories'],
    products: generateProducts('luxe-collective', ['shoes', 'accessories']),
  },
  {
    id: 'velocity',
    name: 'Velocity',
    genderTags: ['mens', 'womens'],
    styleTags: ['gymwear'],
    products: generateProducts('velocity', ['activewear', 'shoes']),
  },
  {
    id: 'house-of-gold',
    name: 'House of Gold',
    genderTags: ['womens'],
    styleTags: ['jewellery'],
    products: generateProducts('house-of-gold', ['jewellery']),
  },
  {
    id: 'strada',
    name: 'Strada',
    genderTags: ['mens'],
    styleTags: ['shoes', 'formal'],
    products: generateProducts('strada', ['shoes', 'accessories']),
  },
  {
    id: 'urban-theory',
    name: 'Urban Theory',
    genderTags: ['unisex'],
    styleTags: ['streetwear', 'accessories'],
    products: generateProducts('urban-theory', ['tops', 'bottoms', 'accessories']),
  },
]

export const genderOptions: { value: GenderTag | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'mens', label: 'Menswear' },
  { value: 'womens', label: 'Womenswear' },
  { value: 'unisex', label: 'Unisex' },
]

export const styleOptions: { value: StyleTag; label: string }[] = [
  { value: 'streetwear', label: 'Streetwear' },
  { value: 'formal', label: 'Formal' },
  { value: 'gymwear', label: 'Gymwear' },
  { value: 'smart-casual', label: 'Smart Casual' },
  { value: 'shoes', label: 'Shoes' },
  { value: 'jewellery', label: 'Jewellery' },
  { value: 'accessories', label: 'Accessories' },
]

export type SortOption = 'featured' | 'price-asc' | 'price-desc'

export const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
]

export function formatPrice(price: number): string {
  return `${price.toLocaleString()} SAR`
}

export function getGenderLabel(tag: GenderTag): string {
  const labels: Record<GenderTag, string> = {
    mens: 'Menswear',
    womens: 'Womenswear',
    unisex: 'Unisex',
  }
  return labels[tag]
}

export function getStyleLabel(tag: StyleTag): string {
  const labels: Record<StyleTag, string> = {
    streetwear: 'Streetwear',
    formal: 'Formal',
    gymwear: 'Gymwear',
    'smart-casual': 'Smart Casual',
    shoes: 'Shoes',
    jewellery: 'Jewellery',
    accessories: 'Accessories',
  }
  return labels[tag]
}
