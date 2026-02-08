'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

const LOCATIONS = [
  { id: 'riyadh', name: 'Riyadh', venue: 'Solitaire Mall' },
  { id: 'jeddah', name: 'Jeddah', venue: 'Boulevard Mall' },
  { id: 'dubai', name: 'Dubai', venue: 'Dubai Mall' },
]

interface LocationsModalProps {
  isOpen: boolean
  onClose: () => void
  onViewPopup: (location: string) => void
  brandName?: string
}

export default function LocationsModal({
  isOpen,
  onClose,
  onViewPopup,
  brandName,
}: LocationsModalProps) {
  const [selectedLocation, setSelectedLocation] = useState('riyadh')
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

  const selectedLocationData = LOCATIONS.find((loc) => loc.id === selectedLocation)

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

        {/* Content */}
        <div className="p-8 lg:p-12">
          {/* Title */}
          <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-2">
            View the pop-up locations
          </h2>
          {brandName && (
            <p className="text-sm text-black/50 mb-8">Selected brand: {brandName}</p>
          )}

          {/* Layout: Left (locations) | Middle (details) | Right (image) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Left: Location List */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium mb-4 text-black/60">Select Location</h3>
              {LOCATIONS.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  className={`w-full text-left px-4 py-3 border transition-colors ${
                    selectedLocation === location.id
                      ? 'border-black bg-black text-white'
                      : 'border-black/20 hover:border-black'
                  }`}
                >
                  <div className="font-medium">{location.name}</div>
                  <div className={`text-sm ${
                    selectedLocation === location.id ? 'text-white/70' : 'text-black/50'
                  }`}>
                    {location.venue}
                  </div>
                </button>
              ))}
            </div>

            {/* Middle: Selected Location Details */}
            <div className="flex flex-col justify-center">
              {selectedLocationData && (
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-black/50 mb-1">Location</div>
                    <div className="font-serif text-xl font-medium">
                      {selectedLocationData.name}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-black/50 mb-1">Venue</div>
                    <div className="text-base">{selectedLocationData.venue}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Placeholder Image */}
            <div className="aspect-[4/3] bg-black/5 border border-black/10 flex items-center justify-center">
              <div className="text-center text-black/30 text-sm">
                <svg
                  className="w-12 h-12 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Location Image
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => onViewPopup(selectedLocation)}
              className="px-8 py-4 bg-black text-white font-medium tracking-wide hover:bg-black/90 transition-colors"
            >
              View Pop-up
            </button>
            <button
              onClick={onClose}
              className="px-8 py-4 border border-black/20 font-medium tracking-wide hover:border-black transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}
