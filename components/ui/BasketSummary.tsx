'use client'

import { useBasket } from '@/contexts/BasketContext'

const MAX_VISIBLE_ITEMS = 5

export default function BasketSummary() {
  const { items, itemCount } = useBasket()

  if (itemCount === 0) return null

  const visibleItems = items.slice(0, MAX_VISIBLE_ITEMS)
  const remainingCount = itemCount - MAX_VISIBLE_ITEMS

  return (
    <div className="mb-6 p-6 bg-black/5 border border-black/10 rounded-md">
      <h3 className="text-sm font-medium mb-3">
        You're requesting access to view {itemCount} {itemCount === 1 ? 'item' : 'items'}:
      </h3>

      <ul className="space-y-2">
        {visibleItems.map((item) => (
          <li key={item.id} className="text-sm text-black/70">
            <span className="font-medium">{item.brandName}</span> — {item.productName}
            {item.selectedSize && <span className="text-black/50"> (Size {item.selectedSize})</span>}
          </li>
        ))}
      </ul>

      {remainingCount > 0 && (
        <p className="text-sm text-black/60 mt-3">
          +{remainingCount} more {remainingCount === 1 ? 'item' : 'items'}
        </p>
      )}
    </div>
  )
}
