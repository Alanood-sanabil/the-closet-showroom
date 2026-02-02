'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { useBasket } from '@/contexts/BasketContext'
import { track } from '@/lib/track'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'

export default function BasketDrawer() {
  const { items, itemCount, removeItem, isBasketOpen, closeBasket } = useBasket()
  const { language } = useLanguage()
  const t = getTranslations(language)

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isBasketOpen) {
        closeBasket()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isBasketOpen, closeBasket])

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isBasketOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isBasketOpen])

  const handleRequestAccess = () => {
    track('request_access_click', {
      source: 'basket',
      itemCount,
    })

    closeBasket()

    // Scroll to access form
    const element = document.getElementById('access')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleRemoveItem = (itemId: string) => {
    removeItem(itemId)
  }

  // Format price in SAR
  const formatPrice = (price: number) => {
    return `${price.toLocaleString()} ${t.product.currency}`
  }

  if (!isBasketOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-50 transition-opacity duration-300"
        onClick={closeBasket}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-96 max-w-full bg-white z-50 shadow-xl transition-transform duration-300 ${
          isBasketOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-black/10">
            <h2 className="font-serif text-2xl font-bold">{t.basket.title}</h2>
            <button
              onClick={closeBasket}
              className="w-10 h-10 flex items-center justify-center hover:bg-black/5 rounded-md transition-colors"
              aria-label="Close basket"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          {itemCount === 0 ? (
            /* Empty State */
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 mb-4 rounded-full bg-black/5 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-black/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">{t.basket.empty}</h3>
              <p className="text-sm text-black/60 max-w-xs">
                {t.basket.emptyMessage}
              </p>
            </div>
          ) : (
            /* Product List */
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <article
                    key={item.id}
                    className="flex gap-4 pb-4 border-b border-black/5 last:border-0"
                  >
                    {/* Product Image */}
                    <div className="relative w-20 h-24 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.productName}
                          fill
                          sizes="80px"
                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = '/placeholder.svg'
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-black/20">
                          <svg
                            className="w-8 h-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-black/50 mb-1">{item.brandName}</p>
                      <h3 className="text-sm font-medium mb-1 line-clamp-2">
                        {item.productName}
                      </h3>
                      {item.selectedSize && (
                        <p className="text-xs text-black/50 mb-1">{t.basket.size}: {item.selectedSize}</p>
                      )}
                      <p className="text-sm font-medium">{formatPrice(item.price)}</p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="w-8 h-8 flex items-center justify-center text-black/50 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors flex-shrink-0"
                      aria-label={`Remove ${item.productName}`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Footer CTA */}
          {itemCount > 0 && (
            <div className="p-6 border-t border-black/10">
              <button
                onClick={handleRequestAccess}
                className="w-full py-4 bg-black text-white font-medium tracking-wide rounded-sm hover:bg-gray-900 transition-colors"
              >
                {t.basket.requestAccessCta}
              </button>
              <p className="text-xs text-center text-black/50 mt-3">
                {itemCount} {itemCount === 1 ? t.basket.item : t.basket.items} {t.basket.itemsSelected}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
