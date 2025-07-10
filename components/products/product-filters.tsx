"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Filter } from "lucide-react"

interface ProductFiltersProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedCategories: string[]
  onCategoryChange: (category: string, checked: boolean) => void
  priceRange: { min: string; max: string }
  onPriceRangeChange: (range: { min: string; max: string }) => void
  categories: string[]
}

export function ProductFilters({
  searchTerm,
  onSearchChange,
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  categories,
}: ProductFiltersProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search */}
        <div>
          <Label htmlFor="search">Search Products</Label>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="search"
              placeholder="Search crops..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Categories */}
        <div>
          <Label>Categories</Label>
          <div className="mt-2 space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={(checked) => onCategoryChange(category, checked as boolean)}
                />
                <Label htmlFor={category} className="text-sm font-normal">
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <Label>Price Range</Label>
          <div className="mt-2 flex space-x-2">
            <Input
              placeholder="Min"
              type="number"
              value={priceRange.min}
              onChange={(e) => onPriceRangeChange({ ...priceRange, min: e.target.value })}
            />
            <Input
              placeholder="Max"
              type="number"
              value={priceRange.max}
              onChange={(e) => onPriceRangeChange({ ...priceRange, max: e.target.value })}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
