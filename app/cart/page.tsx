"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import { PageLayout } from "@/components/layout/page-layout"
import { EmptyState } from "@/components/ui/empty-state"
import { CartItem } from "@/components/cart/cart-item"
import { OrderSummary } from "@/components/ui/order-summary"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotal, getItemCount } = useCart()

  if (items.length === 0) {
    return (
      <PageLayout>
        <EmptyState
          icon={<ShoppingCart className="h-24 w-24 text-gray-300 mx-auto" />}
          title="Your Cart is Empty"
          description="Add some fresh crops to get started!"
          actionLabel="Shop Now"
          actionHref="/products"
        />
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart ({getItemCount()} items)</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Cart Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <CartItem
                      key={`${item.id}-${index}`}
                      item={item}
                      onQuantityChange={updateQuantity}
                      onRemove={removeFromCart}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <OrderSummary subtotal={getTotal()}>
              <Link href="/checkout" className="w-full">
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
              </Link>
              <Link href="/products" className="w-full">
                <Button variant="outline" className="w-full bg-transparent">
                  Continue Shopping
                </Button>
              </Link>
            </OrderSummary>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
