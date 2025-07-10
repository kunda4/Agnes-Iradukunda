"use client"

import { Heart } from "lucide-react"
import { PageLayout } from "@/components/layout/page-layout"
import { EmptyState } from "@/components/ui/empty-state"
import { ProductCard } from "@/components/ui/product-card"
import { useWishlist } from "@/lib/wishlist-context"

export default function WishlistPage() {
  const { items } = useWishlist()

  if (items.length === 0) {
    return (
      <PageLayout>
        <EmptyState
          icon={<Heart className="h-24 w-24 text-gray-300 mx-auto" />}
          title="Your Wishlist is Empty"
          description="Save your favorite crops for later!"
          actionLabel="Browse Products"
          actionHref="/products"
        />
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Wishlist ({items.length} items)</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
