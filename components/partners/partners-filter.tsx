"use client"

import { Button } from "@/components/ui/button"

interface PartnersFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function PartnersFilter({ categories, selectedCategory, onCategoryChange }: PartnersFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={selectedCategory === category ? "" : "bg-transparent"}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
