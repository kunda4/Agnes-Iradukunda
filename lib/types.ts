export interface Product {
  id: number
  name: string
  description: string
  price: number
  unit: string
  category: string
  image: string
  inStock: boolean
}

export interface CartItem extends Product {
  quantity: number
}

export interface WishlistItem extends Product {}

export interface FilterOptions {
  searchTerm: string
  selectedCategories: string[]
  priceRange: { min: string; max: string }
  sortBy: string
}
