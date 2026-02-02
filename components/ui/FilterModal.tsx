'use client'

import { useEffect, useRef } from 'react'
import type { GenderTag, StyleTag } from '@/lib/types'
import { useLanguage } from '@/contexts/LanguageContext'
import { getCustomerContent } from '@/content'

interface FilterModalProps {
  isOpen: boolean
  onClose: () => void
  selectedGender: GenderTag | 'all'
  selectedStyles: StyleTag[]
  onGenderChange: (gender: GenderTag | 'all') => void
  onStyleToggle: (style: StyleTag) => void
  onClearFilters: () => void
  resultCount: number
}

export default function FilterModal({
  isOpen,
  onClose,
  selectedGender,
  selectedStyles,
  onGenderChange,
  onStyleToggle,
  onClearFilters,
  resultCount,
}: FilterModalProps) {
  const { language } = useLanguage()
  const t = getCustomerContent(language)
  const modalRef = useRef<HTMLDivElement>(null)
  const hasActiveFilters = selectedGender !== 'all' || selectedStyles.length > 0

  const genderOptions = [
    { value: 'all' as const, label: t.preview.allGender },
    { value: 'womens' as GenderTag, label: t.preview.womens },
    { value: 'mens' as GenderTag, label: t.preview.mens },
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

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  // Focus trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const firstFocusable = modalRef.current.querySelector('button')
      firstFocusable?.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Bottom Sheet */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label="Filter brands"
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[85vh] overflow-auto animate-slide-up"
      >
        {/* Handle */}
        <div className="sticky top-0 bg-white pt-3 pb-2 px-6">
          <div className="w-10 h-1 bg-black/10 rounded-full mx-auto mb-4" />
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-xl font-semibold">{t.preview.filterModalTitle}</h2>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-black/60 hover:text-black transition-colors"
              aria-label="Close filters"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-6 pb-6 space-y-8">
          {/* Gender Filter */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-black/50 mb-4">
              {t.preview.genderLabel}
            </label>
            <div className="grid grid-cols-2 gap-2" role="tablist">
              {genderOptions.map((option) => (
                <button
                  key={option.value}
                  role="tab"
                  aria-selected={selectedGender === option.value}
                  onClick={() => onGenderChange(option.value)}
                  className={`px-4 py-3 text-sm border transition-colors ${
                    selectedGender === option.value
                      ? 'border-black bg-black text-white'
                      : 'border-black/10 text-black/60'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Style Filter */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-black/50 mb-4">
              {t.preview.styleLabel}
            </label>
            <div className="flex flex-wrap gap-2" role="group">
              {styleOptions.map((option) => {
                const isSelected = selectedStyles.includes(option.value)
                return (
                  <button
                    key={option.value}
                    onClick={() => onStyleToggle(option.value)}
                    aria-pressed={isSelected}
                    className={`px-4 py-2.5 text-sm border transition-colors ${
                      isSelected
                        ? 'border-black bg-black/5 text-black'
                        : 'border-black/10 text-black/60'
                    }`}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-black/5 p-4 flex gap-3">
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="flex-1 px-4 py-3 text-sm border border-black/20 text-black hover:bg-black/5 transition-colors"
            >
              {t.preview.clearAllButton}
            </button>
          )}
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 text-sm bg-black text-white hover:bg-black/90 transition-colors"
          >
            {t.preview.showButton} {resultCount} {resultCount === 1 ? t.preview.brandCount : t.preview.brandsCount}
          </button>
        </div>
      </div>
    </div>
  )
}
