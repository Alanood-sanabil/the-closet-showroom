'use client'

import type { GenderTag, StyleTag } from '@/lib/types'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'

interface FilterBarProps {
  selectedGender: GenderTag | 'all'
  selectedStyles: StyleTag[]
  onGenderChange: (gender: GenderTag | 'all') => void
  onStyleToggle: (style: StyleTag) => void
  onClearFilters: () => void
  resultCount: number
}

export default function FilterBar({
  selectedGender,
  selectedStyles,
  onGenderChange,
  onStyleToggle,
  onClearFilters,
  resultCount,
}: FilterBarProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const hasActiveFilters = selectedGender !== 'all' || selectedStyles.length > 0

  const genderOptions = [
    { value: 'all' as const, label: t.preview.allGender },
    { value: 'mens' as GenderTag, label: t.preview.mens },
    { value: 'womens' as GenderTag, label: t.preview.womens },
    { value: 'unisex' as GenderTag, label: t.preview.unisex },
  ]

  const styleOptions = [
    { value: 'streetwear' as StyleTag, label: t.preview.streetwear },
    { value: 'formal' as StyleTag, label: t.preview.formal },
    { value: 'gymwear' as StyleTag, label: t.preview.gymwear },
    { value: 'smart-casual' as StyleTag, label: t.preview.smartCasual },
    { value: 'shoes' as StyleTag, label: t.preview.shoes },
    { value: 'jewellery' as StyleTag, label: t.preview.jewellery },
    { value: 'accessories' as StyleTag, label: t.preview.accessories },
  ]

  return (
    <div className="space-y-6">
      {/* Gender Filter - Segmented Control */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-black/50 mb-3">
          {t.preview.genderLabel}
        </label>
        <div
          className="inline-flex border border-black/10 p-1"
          role="tablist"
          aria-label="Filter by gender"
        >
          {genderOptions.map((option) => (
            <button
              key={option.value}
              role="tab"
              aria-selected={selectedGender === option.value}
              onClick={() => onGenderChange(option.value)}
              className={`px-4 py-2 text-sm transition-colors ${
                selectedGender === option.value
                  ? 'bg-black text-white'
                  : 'text-black/60 hover:text-black hover:bg-black/5'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Style Filter - Multi-select Chips */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-black/50 mb-3">
          {t.preview.styleLabel}
        </label>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by style">
          {styleOptions.map((option) => {
            const isSelected = selectedStyles.includes(option.value)
            return (
              <button
                key={option.value}
                onClick={() => onStyleToggle(option.value)}
                aria-pressed={isSelected}
                className={`px-4 py-2 text-sm border transition-colors ${
                  isSelected
                    ? 'border-black bg-black/5 text-black'
                    : 'border-black/10 text-black/60 hover:border-black/30 hover:text-black'
                }`}
              >
                {option.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Results Count + Clear */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-sm text-black/50">
          {resultCount} {resultCount === 1 ? t.preview.brandCount : t.preview.brandsCount}
        </span>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm text-black hover:text-black transition-colors"
          >
            {t.preview.clearFilters}
          </button>
        )}
      </div>
    </div>
  )
}
