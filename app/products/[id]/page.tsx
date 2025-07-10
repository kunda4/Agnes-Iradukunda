"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Heart, ShoppingCart, ArrowLeft } from "lucide-react"
import { PageLayout } from "@/components/layout/page-layout"
import { ProductCard } from "@/components/ui/product-card"
import { QuantitySelector } from "@/components/ui/quantity-selector"
import { PriceDisplay } from "@/components/ui/price-display"
import { products } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { useWishlist } from "@/lib/wishlist-context"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  if (!product) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link href="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </div>
      </PageLayout>
    )
  }

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-green-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-green-600">
            Products
          </Link>
          <span>/</span>
          <Link href={`/products?category=${product.category}`} className="hover:text-green-600">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <Link href="/products" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" className="text-sm">
                {product.category}
              </Badge>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <PriceDisplay price={product.price} unit={product.unit} className="mb-6" />
            <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

            <Separator className="my-6" />

            {/* Product Features */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Product Features:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Fresh and organic</li>
                <li>• Locally sourced</li>
                <li>• No pesticides or chemicals</li>
                <li>• Harvested at peak ripeness</li>
                <li>• Sustainably grown</li>
              </ul>
            </div>

            <Separator className="my-6" />

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />

              <div className="flex space-x-4">
                <Button onClick={handleAddToCart} className="flex-1" size="lg">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </Button>
                <Button variant="outline" size="lg" onClick={toggleWishlist}>
                  <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} showAddToCart={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
