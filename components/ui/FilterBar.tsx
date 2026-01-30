'use client'

import { PREVIEW_CONTENT } from '@/content/customer'
import type { GenderTag, StyleTag } from '@/lib/types'

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
  const content = { preview: PREVIEW_CONTENT }
  const previewContent = content.preview
  const hasActiveFilters = selectedGender !== 'all' || selectedStyles.length > 0

  return (
    <div className="space-y-6">
      {/* Gender Filter - Segmented Control */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-black/50 mb-3">
          {previewContent.filters.genderLabel}
        </label>
        <div
          className="inline-flex border border-black/10 p-1"
          role="tablist"
          aria-label="Filter by gender"
        >
          {previewContent.genderOptions.map((option) => (
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
          {previewContent.filters.styleLabel}
        </label>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by style">
          {previewContent.styleOptions.map((option) => {
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
          {resultCount} {resultCount === 1 ? previewContent.filters.brandCount : previewContent.filters.brandsCount}
        </span>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm text-black hover:text-black transition-colors"
          >
            {previewContent.filters.clearFilters}
          </button>
        )}
      </div>
    </div>
  )
}
