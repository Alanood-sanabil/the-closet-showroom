'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import AccessForm from '@/components/sections/AccessForm'

interface AccessFormModalProps {
  isOpen: boolean
  onClose: () => void
  selectedProduct?: {
    brandName: string
    productName: string
  } | null
}

export default function AccessFormModal({
  isOpen,
  onClose,
  selectedProduct,
}: AccessFormModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !mounted) return null

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-4xl max-h-[calc(100vh-80px)] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-black/5 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Access Form */}
        <div className="p-8 lg:p-12">
          <AccessForm selectedProduct={selectedProduct} />
        </div>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}
