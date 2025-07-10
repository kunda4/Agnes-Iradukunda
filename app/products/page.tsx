"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/layout/page-layout"
import { ProductCard } from "@/components/ui/product-card"
import { ProductFilters } from "@/components/products/product-filters"
import { useProducts } from "@/lib/hooks/use-products"
import { useDebounce } from "@/lib/hooks/use-debounce"

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("name")
  const [priceRange, setPriceRange] = useState({ min: "", max: "" })

  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  const {
    products: filteredProducts,
    totalCount,
    filteredCount,
  } = useProducts({
    searchTerm: debouncedSearchTerm,
    selectedCategories,
    sortBy,
    priceRange,
  })

  const categories = ["Vegetables", "Fruits", "Grains", "Herbs"]

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategories([])
    setPriceRange({ min: "", max: "" })
  }

  return (
    <PageLayout currentPage="products">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <ProductFilters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              categories={categories}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sort and Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredCount} of {totalCount} products
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="price-low">Price (Low to High)</SelectItem>
                  <SelectItem value="price-high">Price (High to Low)</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <Button variant="outline" className="mt-4 bg-transparent" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
