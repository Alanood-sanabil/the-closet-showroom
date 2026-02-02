'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import {
  getCustomerLandingContent,
  formatPrice,
  getGenderLabel,
  getStyleLabel,
} from '@/content'
import type { BrandPreview, ProductPreview, SortOption } from '@/lib/types'
import { track } from '@/lib/track'
import { useBasket } from '@/contexts/BasketContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'

const FALLBACK_IMAGE = '/images/ui/fallback.svg'

interface ProductPanelProps {
  brand: BrandPreview
  onClose: () => void
  onProductClick: (product: ProductPreview) => void
}

export default function ProductPanel({ brand, onClose, onProductClick }: ProductPanelProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const content = getCustomerLandingContent()
  const previewContent = content.preview

  const sortOptions = [
    { value: 'featured' as const, label: t.preview.featured },
    { value: 'price-asc' as const, label: t.preview.priceLowToHigh },
    { value: 'price-desc' as const, label: t.preview.priceHighToLow },
  ]

  const panelRef = useRef<HTMLDivElement>(null)
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [isVisible, setIsVisible] = useState(false)

  // Animate in
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  // Track product view
  useEffect(() => {
    track('product_view', {
      brandId: brand.id,
      productsShown: brand.products.length,
    })
  }, [brand.id, brand.products.length])

  // Scroll panel into view
  useEffect(() => {
    if (panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  // Keyboard support: close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  // Sort products
  const sortedProducts = useMemo(() => {
    const products = [...brand.products]

    switch (sortBy) {
      case 'price-asc':
        return products.sort((a, b) => a.price - b.price)
      case 'price-desc':
        return products.sort((a, b) => b.price - a.price)
      default:
        // Featured: new items first, then by ID
        return products.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1
          if (!a.isNew && b.isNew) return 1
          return 0
        })
    }
  }, [brand.products, sortBy])

  return (
    <div
      ref={panelRef}
      className={`mt-12 pt-12 border-t border-black/10 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
        <div className="flex-1">
          {/* Back Button */}
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-sm text-black/50 hover:text-black transition-colors mb-4"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {t.preview.backButton}
          </button>

          {/* Brand Name */}
          <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-2">
            {brand.name}
          </h3>
          <p className="text-xs text-black/50 tracking-wide mb-3">
            {brand.countryName}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {brand.genderTags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-black/5 text-black/70"
              >
                {getGenderLabel(tag)}
              </span>
            ))}
            {brand.styleTags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs border border-black/10 text-black/50"
              >
                {getStyleLabel(tag)}
              </span>
            ))}
          </div>

          {/* Soft CTA */}
          <p className="text-sm text-black">
            {t.preview.accessCta}
          </p>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-3">
          <label
            htmlFor="sort-select"
            className="text-sm text-black/50 whitespace-nowrap"
          >
            {t.preview.sortLabel}
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-3 py-2 text-sm border border-black/10 bg-white appearance-none cursor-pointer pr-8 focus:border-black transition-colors"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 8px center',
              backgroundSize: '16px',
            }}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {sortedProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            brandId={brand.id}
            brandName={brand.name}
            onClick={() => onProductClick(product)}
            translations={t}
          />
        ))}
      </div>

      {/* Close Button (Mobile) */}
      <div className="mt-10 lg:hidden">
        <button
          onClick={onClose}
          className="w-full py-3 text-sm border border-black/20 text-black hover:bg-black hover:text-white transition-colors"
        >
          {t.preview.mobileBackButton}
        </button>
      </div>
    </div>
  )
}

interface ProductCardProps {
  product: ProductPreview
  index: number
  brandId: string
  brandName: string
  onClick: () => void
  translations: any
}

function ProductCard({ product, index, brandId, brandName, onClick, translations }: ProductCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [imgError, setImgError] = useState(false)
  const [selectedSize, setSelectedSize] = useState<string>('')
  const imageSrc = imgError ? FALLBACK_IMAGE : (product.image || FALLBACK_IMAGE)
  const { addItem } = useBasket()
  const t = translations

  const requiresSize = product.sizeType && product.sizeType !== 'none' && product.sizes && product.sizes.length > 0
  const canAddToBasket = !requiresSize || selectedSize !== ''

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50 + index * 30)
    return () => clearTimeout(timer)
  }, [index])

  const handleClick = () => {
    track('product_click', {
      brandId,
      brandName,
      productId: product.id,
      productName: product.name,
    })
    onClick()
  }

  const handleSizeClick = (e: React.MouseEvent, size: string) => {
    e.stopPropagation()
    setSelectedSize(size)
    track('size_select', {
      productId: product.id,
      productName: product.name,
      selectedSize: size,
    })
  }

  const handleAddToBasket = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!canAddToBasket) return

    addItem(product, { id: brandId, name: brandName }, selectedSize || undefined)

    const trackData: Record<string, string> = {
      productId: product.id,
      productName: product.name,
      brandId,
      brandName,
    }
    if (selectedSize) {
      trackData.selectedSize = selectedSize
    }
    track('add_to_basket', trackData)

    // Reset size selection after adding
    setSelectedSize('')
  }

  return (
    <article
      onClick={handleClick}
      className={`group cursor-pointer transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick()
        }
      }}
    >
      {/* Product Image */}
      <div className="aspect-[3/4] bg-gradient-to-br from-black/5 to-black/10 mb-3 relative overflow-hidden transition-shadow duration-300 group-hover:shadow-lg">
        <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105">
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
          />
        </div>

        {/* New Badge */}
        {product.isNew && (
          <div className="absolute top-2 left-2 z-10">
            <span className="text-[10px] tracking-widest uppercase bg-black text-white px-2 py-1">
{t.product.new}
            </span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-[1]" />

        {/* {t.product.addToBasket} Button */}
        <button
          onClick={handleAddToBasket}
          disabled={!canAddToBasket}
          className={`absolute bottom-3 left-3 right-3 py-2 text-sm font-medium tracking-wide rounded-sm transition-all z-[2] opacity-0 group-hover:opacity-100 md:opacity-100 lg:opacity-0 lg:group-hover:opacity-100 ${
            canAddToBasket
              ? 'bg-black text-white hover:bg-gray-900'
              : 'bg-black/30 text-white/50 cursor-not-allowed'
          }`}
        >
          {t.product.addToBasket}
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h4 className="text-sm font-medium truncate">{product.name}</h4>
        <p className="text-xs text-black/50">{product.category}</p>

        {/* Price and Size Chips Row */}
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm font-medium">{formatPrice(product.price)}</p>

          {requiresSize && product.sizes && (
            <div className="flex items-center gap-1 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={(e) => handleSizeClick(e, size)}
                  className={`px-2 py-0.5 text-xs font-medium rounded-sm transition-colors ${
                    selectedSize === size
                      ? 'bg-black text-white'
                      : 'bg-white border border-black/20 text-black hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>

        {requiresSize && !selectedSize && (
          <p className="text-xs text-black/40 italic">{t.product.selectSize}</p>
        )}
      </div>
    </article>
  )
}
