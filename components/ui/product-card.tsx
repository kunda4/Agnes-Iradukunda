"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useWishlist } from "@/lib/wishlist-context"
import { PriceDisplay } from "./price-display"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
  showAddToCart?: boolean
  showViewDetails?: boolean
}

export function ProductCard({ product, showAddToCart = true, showViewDetails = true }: ProductCardProps) {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="p-0 relative">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
          onClick={toggleWishlist}
        >
          <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
        </Button>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">{product.category}</Badge>
        </div>
        <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <PriceDisplay price={product.price} unit={product.unit} />
      </CardContent>

      <CardFooter className="p-4 pt-0 flex space-x-2">
        {showViewDetails && (
          <Link href={`/products/${product.id}`} className="flex-1">
            <Button variant="outline" className="w-full bg-transparent">
              View Details
            </Button>
          </Link>
        )}
        {showAddToCart && (
          <Button onClick={() => addToCart(product)} className="flex-1">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
