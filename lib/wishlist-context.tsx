"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { WishlistItem } from "@/lib/types"

interface WishlistContextType {
  items: WishlistItem[]
  addToWishlist: (product: WishlistItem) => void
  removeFromWishlist: (id: number) => void
  isInWishlist: (id: number) => boolean
  clearWishlist: () => void
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([])

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) {
      setItems(JSON.parse(savedWishlist))
    }
  }, [])

  // Save wishlist to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(items))
  }, [items])

  const addToWishlist = (product: WishlistItem) => {
    setItems((currentItems) => {
      const exists = currentItems.find((item) => item.id === product.id)
      if (!exists) {
        return [...currentItems, product]
      }
      return currentItems
    })
  }

  const removeFromWishlist = (id: number) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  const isInWishlist = (id: number) => {
    return items.some((item) => item.id === id)
  }

  const clearWishlist = () => {
    setItems([])
  }

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
