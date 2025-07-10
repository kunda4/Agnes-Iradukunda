import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { formatPrice } from "@/lib/utils/format"

interface OrderSummaryProps {
  subtotal: number
  shipping?: number
  children?: React.ReactNode
}

export function OrderSummary({ subtotal, shipping = 5.99, children }: OrderSummaryProps) {
  const total = subtotal + shipping

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>{formatPrice(shipping)}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
        {children}
      </CardContent>
    </Card>
  )
}
