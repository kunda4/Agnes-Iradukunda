import { formatPrice } from "@/lib/utils/format"

interface PriceDisplayProps {
  price: number
  unit?: string
  quantity?: number
  className?: string
}

export function PriceDisplay({ price, unit, quantity = 1, className = "" }: PriceDisplayProps) {
  const totalPrice = price * quantity

  return (
    <div className={`flex items-center justify-between ${className}`}>
      <span className="text-2xl font-bold text-green-600">{formatPrice(totalPrice)}</span>
      {unit && <span className="text-sm text-gray-500">per {unit}</span>}
    </div>
  )
}
