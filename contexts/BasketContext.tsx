'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import type { BasketItem, ProductPreview, BrandPreview } from '@/lib/types'
import { track } from '@/lib/track'

interface BasketContextType {
  items: BasketItem[]
  itemCount: number
  addItem: (product: ProductPreview, brand: Pick<BrandPreview, 'id' | 'name'>, selectedSize?: string) => void
  removeItem: (itemId: string) => void
  clearBasket: () => void
  isBasketOpen: boolean
  openBasket: () => void
  closeBasket: () => void
}

const BasketContext = createContext<BasketContextType | undefined>(undefined)

const STORAGE_KEY = 'basketItems'

export function BasketProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BasketItem[]>([])
  const [isBasketOpen, setIsBasketOpen] = useState(false)

  // Load basket from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsedItems = JSON.parse(stored) as BasketItem[]
        setItems(parsedItems)
      }
    } catch (error) {
      console.error('Failed to load basket from localStorage:', error)
    }
  }, [])

  // Save basket to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch (error) {
      console.error('Failed to save basket to localStorage:', error)
      // Handle quota exceeded error gracefully
      if (error instanceof DOMException && error.name === 'QuotaExceededError') {
        alert('Basket storage is full. Please remove some items.')
      }
    }
  }, [items])

  // Listen for storage changes from other tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          const parsedItems = JSON.parse(e.newValue) as BasketItem[]
          setItems(parsedItems)
        } catch (error) {
          console.error('Failed to sync basket from storage event:', error)
        }
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const addItem = useCallback(
    (product: ProductPreview, brand: Pick<BrandPreview, 'id' | 'name'>, selectedSize?: string) => {
      const itemId = selectedSize
        ? `${product.id}-${brand.id}-${selectedSize}`
        : `${product.id}-${brand.id}`

      const newItem: BasketItem = {
        id: itemId,
        productId: product.id,
        productName: product.name,
        brandId: brand.id,
        brandName: brand.name,
        category: product.category,
        price: product.price,
        image: product.image,
        addedAt: Date.now(),
        selectedSize,
        sizeType: product.sizeType,
      }

      setItems((prevItems) => [...prevItems, newItem])

      track('add_to_basket', {
        productId: product.id,
        productName: product.name,
        brandId: brand.id,
        brandName: brand.name,
        basketItemCount: items.length + 1,
        ...(selectedSize && { selectedSize }),
      })
    },
    [items.length]
  )

  const removeItem = useCallback(
    (itemId: string) => {
      setItems((prevItems) => prevItems.filter((item) => item.id !== itemId))

      const removedItem = items.find((item) => item.id === itemId)
      if (removedItem) {
        track('remove_from_basket', {
          productId: removedItem.productId,
          basketItemCount: items.length - 1,
        })
      }
    },
    [items]
  )

  const clearBasket = useCallback(() => {
    setItems([])
    track('clear_basket', {
      itemsCleared: items.length,
    })
  }, [items.length])

  const openBasket = useCallback(() => {
    setIsBasketOpen(true)
    track('open_basket', {
      itemCount: items.length,
    })
  }, [items.length])

  const closeBasket = useCallback(() => {
    setIsBasketOpen(false)
    track('close_basket', {
      itemCount: items.length,
    })
  }, [items.length])

  const value: BasketContextType = {
    items,
    itemCount: items.length,
    addItem,
    removeItem,
    clearBasket,
    isBasketOpen,
    openBasket,
    closeBasket,
  }

  return <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
}

export function useBasket() {
  const context = useContext(BasketContext)
  if (context === undefined) {
    throw new Error('useBasket must be used within a BasketProvider')
  }
  return context
}
