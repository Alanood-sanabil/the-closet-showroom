'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import {
  getCustomerLandingContent,
  getGenderLabel,
  getStyleLabel,
} from '@/content'
import type { BrandPreview, GenderTag, StyleTag, ProductPreview } from '@/lib/types'
import { track } from '@/lib/track'
import FilterBar from '@/components/ui/FilterBar'
import FilterModal from '@/components/ui/FilterModal'
import ProductPanel from '@/components/ui/ProductPanel'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'

const FALLBACK_IMAGE = '/images/ui/fallback.svg'

interface PreviewGridProps {
  onProductSelect: (product: { brandName: string; productName: string } | null) => void
}

export default function PreviewGrid({ onProductSelect }: PreviewGridProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const content = getCustomerLandingContent()
  const previewContent = content.preview

  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Filter state
  const [selectedGender, setSelectedGender] = useState<GenderTag | 'all'>('all')
  const [selectedStyles, setSelectedStyles] = useState<StyleTag[]>([])
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

  // Brand selection state
  const [selectedBrand, setSelectedBrand] = useState<BrandPreview | null>(null)

  // Section visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Filter brands
  const filteredBrands = useMemo(() => {
    return content.brands.filter((brand) => {
      // Gender filter
      if (selectedGender !== 'all') {
        // Unisex brands show for both mens and womens filters
        const matchesGender =
          brand.genderTags.includes(selectedGender) ||
          (selectedGender !== 'unisex' && brand.genderTags.includes('unisex'))

        if (!matchesGender) return false
      }

      // Style filter (OR logic - matches ANY selected style)
      if (selectedStyles.length > 0) {
        const matchesStyle = selectedStyles.some((style) =>
          brand.styleTags.includes(style)
        )
        if (!matchesStyle) return false
      }

      return true
    })
  }, [selectedGender, selectedStyles])

  // Track filter changes
  const handleGenderChange = useCallback((gender: GenderTag | 'all') => {
    setSelectedGender(gender)
    setSelectedBrand(null) // Deselect brand when filters change
    track('filter_change', {
      gender,
      stylesSelectedCount: selectedStyles.length,
    })
  }, [selectedStyles.length])

  const handleStyleToggle = useCallback((style: StyleTag) => {
    setSelectedStyles((prev) => {
      const newStyles = prev.includes(style)
        ? prev.filter((s) => s !== style)
        : [...prev, style]

      track('filter_change', {
        gender: selectedGender,
        stylesSelectedCount: newStyles.length,
      })

      return newStyles
    })
    setSelectedBrand(null) // Deselect brand when filters change
  }, [selectedGender])

  const handleClearFilters = useCallback(() => {
    setSelectedGender('all')
    setSelectedStyles([])
    setSelectedBrand(null)
    track('filter_change', { gender: 'all', stylesSelectedCount: 0 })
  }, [])

  // Brand selection
  const handleBrandSelect = useCallback((brand: BrandPreview) => {
    setSelectedBrand(brand)
    track('brand_select', { brandId: brand.id, brandName: brand.name })
  }, [])

  const handleBrandDeselect = useCallback(() => {
    setSelectedBrand(null)
  }, [])

  // Product click handler - scroll to access form
  const handleProductClick = useCallback((product: ProductPreview, brandName: string) => {
    // Set selected product for form prefill
    onProductSelect({
      brandName,
      productName: product.name,
    })

    // Track scroll to access
    track('scroll_to_access', { source: 'product_click' })

    // Scroll to access form
    const accessForm = document.getElementById('access')
    if (accessForm) {
      accessForm.scrollIntoView({ behavior: 'smooth', block: 'start' })

      // Focus first input after scroll completes
      setTimeout(() => {
        const firstInput = accessForm.querySelector('input')
        if (firstInput) {
          firstInput.focus()
        }
      }, 800)
    }
  }, [onProductSelect])

  const activeFilterCount =
    (selectedGender !== 'all' ? 1 : 0) + selectedStyles.length

  return (
    <section
      id="preview"
      ref={sectionRef}
      className={`py-24 lg:py-32 px-6 lg:px-8 bg-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 lg:mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
            {t.preview.sectionTitle}
          </h2>
          <p className="text-lg text-black/60 leading-relaxed">
            {t.preview.sectionDescription}
          </p>
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsFilterModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-black/20 text-sm hover:border-black transition-colors"
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
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            {t.preview.filterButton}
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 flex items-center justify-center bg-black text-white text-xs rounded-full">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Desktop Filters */}
        <div className="hidden lg:block mb-12">
          <FilterBar
            selectedGender={selectedGender}
            selectedStyles={selectedStyles}
            onGenderChange={handleGenderChange}
            onStyleToggle={handleStyleToggle}
            onClearFilters={handleClearFilters}
            resultCount={filteredBrands.length}
          />
        </div>

        {/* Mobile Filter Modal */}
        <FilterModal
          isOpen={isFilterModalOpen}
          onClose={() => setIsFilterModalOpen(false)}
          selectedGender={selectedGender}
          selectedStyles={selectedStyles}
          onGenderChange={handleGenderChange}
          onStyleToggle={handleStyleToggle}
          onClearFilters={handleClearFilters}
          resultCount={filteredBrands.length}
        />

        {/* Mobile Results Count */}
        <div className="lg:hidden mb-6 text-sm text-black/50">
          {filteredBrands.length} {filteredBrands.length === 1 ? t.preview.brandCount : t.preview.brandsCount}
        </div>

        {/* Brand Grid */}
        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {filteredBrands.map((brand, index) => (
              <BrandCard
                key={brand.id}
                brand={brand}
                index={index}
                isVisible={isVisible}
                isSelected={selectedBrand?.id === brand.id}
                onSelect={() => handleBrandSelect(brand)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-black/50 mb-4">{t.preview.noResults}</p>
            <button
              onClick={handleClearFilters}
              className="text-black hover:text-black transition-colors"
            >
              {t.preview.clearFilters}
            </button>
          </div>
        )}

        {/* Product Panel */}
        {selectedBrand && (
          <ProductPanel
            brand={selectedBrand}
            onClose={handleBrandDeselect}
            onProductClick={(product) => handleProductClick(product, selectedBrand.name)}
          />
        )}
      </div>
    </section>
  )
}

interface BrandCardProps {
  brand: BrandPreview
  index: number
  isVisible: boolean
  isSelected: boolean
  onSelect: () => void
}

function BrandCard({
  brand,
  index,
  isVisible,
  isSelected,
  onSelect,
}: BrandCardProps) {
  const [imgError, setImgError] = useState(false)
  const logoSrc = imgError ? FALLBACK_IMAGE : (brand.logoImage || FALLBACK_IMAGE)

  return (
    <article
      className={`group cursor-pointer transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect()
        }
      }}
      aria-pressed={isSelected}
    >
      {/* Brand Image */}
      <div
        className={`aspect-[3/4] bg-white mb-4 relative overflow-hidden transition-all ${
          isSelected
            ? 'ring-2 ring-black ring-offset-2'
            : ''
        }`}
      >
        {/* Brand Logo */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
            <Image
              src={logoSrc}
              alt={`${brand.name} logo`}
              fill
              className="object-contain opacity-60 group-hover:opacity-80 transition-opacity"
              onError={() => setImgError(true)}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading="lazy"
            />
          </div>
        </div>

        {/* Selected Indicator */}
        {isSelected && (
          <div className="absolute top-3 right-3">
            <span className="w-6 h-6 flex items-center justify-center bg-black text-white rounded-full">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
          </div>
        )}

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 transition-colors ${
            isSelected ? 'bg-black/5' : 'bg-black/0 group-hover:bg-black/5'
          }`}
        />
      </div>

      {/* Brand Info */}
      <div className="space-y-2">
        <h3
          className={`font-medium text-sm lg:text-base tracking-wide transition-colors ${
            isSelected ? 'text-black' : ''
          }`}
        >
          {brand.name}
        </h3>
        <p className="text-xs text-black/50 tracking-wide">
          {brand.countryName}
        </p>

        {/* Gender Tags */}
        <div className="flex flex-wrap gap-1">
          {brand.genderTags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-wide px-1.5 py-0.5 bg-black/5 text-black/60"
            >
              {getGenderLabel(tag)}
            </span>
          ))}
        </div>

        {/* Style Tags (show first 2) */}
        <div className="flex flex-wrap gap-1">
          {brand.styleTags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-wide px-1.5 py-0.5 border border-black/10 text-black/40"
            >
              {getStyleLabel(tag)}
            </span>
          ))}
          {brand.styleTags.length > 2 && (
            <span className="text-[10px] text-black/30">
              +{brand.styleTags.length - 2}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
