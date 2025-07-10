"use client"

import { useMemo } from "react"
import { products } from "@/lib/products"
import type { Product, FilterOptions } from "@/lib/types"

export function useProducts(filters: FilterOptions) {
  const filteredProducts = useMemo(() => {
    return products
      .filter((product: Product) => {
        const matchesSearch =
          product.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(filters.searchTerm.toLowerCase())

        const matchesCategory =
          filters.selectedCategories.length === 0 || filters.selectedCategories.includes(product.category)

        const matchesPrice =
          (!filters.priceRange.min || product.price >= Number.parseFloat(filters.priceRange.min)) &&
          (!filters.priceRange.max || product.price <= Number.parseFloat(filters.priceRange.max))

        return matchesSearch && matchesCategory && matchesPrice
      })
      .sort((a: Product, b: Product) => {
        switch (filters.sortBy) {
          case "price-low":
            return a.price - b.price
          case "price-high":
            return b.price - a.price
          case "rating":
            return b.rating - a.rating
          default:
            return a.name.localeCompare(b.name)
        }
      })
  }, [filters])

  return {
    products: filteredProducts,
    totalCount: products.length,
    filteredCount: filteredProducts.length,
  }
}
