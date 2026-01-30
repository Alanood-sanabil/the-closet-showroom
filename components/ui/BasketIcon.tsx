'use client'

import { useBasket } from '@/contexts/BasketContext'

export default function BasketIcon() {
  const { itemCount, openBasket } = useBasket()

  return (
    <button
      onClick={openBasket}
      className="relative w-10 h-10 flex items-center justify-center hover:bg-black/5 rounded-md transition-colors"
      aria-label={`Open basket (${itemCount} items)`}
    >
      {/* Shopping Bag Icon */}
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
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>

      {/* Count Badge */}
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center font-medium">
          {itemCount}
        </span>
      )}
    </button>
  )
}
