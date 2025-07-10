"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Minus, Plus } from "lucide-react"

interface QuantitySelectorProps {
  quantity: number
  onQuantityChange: (quantity: number) => void
  min?: number
  max?: number
  label?: string
}

export function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 999,
  label = "Quantity",
}: QuantitySelectorProps) {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1)
    }
  }

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || min
    const clampedValue = Math.max(min, Math.min(max, value))
    onQuantityChange(clampedValue)
  }

  return (
    <div>
      <Label htmlFor="quantity" className="text-sm font-medium">
        {label}
      </Label>
      <div className="flex items-center space-x-3 mt-2">
        <Button variant="outline" size="icon" onClick={handleDecrease} disabled={quantity <= min}>
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          id="quantity"
          type="number"
          value={quantity}
          onChange={handleInputChange}
          className="w-20 text-center"
          min={min}
          max={max}
        />
        <Button variant="outline" size="icon" onClick={handleIncrease} disabled={quantity >= max}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
