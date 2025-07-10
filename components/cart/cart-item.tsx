"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { QuantitySelector } from "@/components/ui/quantity-selector"
import { PriceDisplay } from "@/components/ui/price-display"
import type { CartItem as CartItemType } from "@/lib/types"

interface CartItemProps {
  item: CartItemType
  onQuantityChange: (id: number, quantity: number) => void
  onRemove: (id: number) => void
}

export function CartItem({ item, onQuantityChange, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg">
      <Image
        src={item.image || "/placeholder.svg"}
        alt={item.name}
        width={80}
        height={80}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600">{item.category}</p>
        <PriceDisplay price={item.price} unit={item.unit} />
      </div>
      <div className="flex items-center space-x-4">
        <QuantitySelector
          quantity={item.quantity}
          onQuantityChange={(quantity) => onQuantityChange(item.id, quantity)}
        />
        <div className="text-right">
          <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemove(item.id)}
            className="text-red-600 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
