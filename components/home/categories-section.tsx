import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/lib/products"

export function CategoriesSection() {
  const categories = [
    { name: "Vegetables", icon: "🥕", count: products.filter((p) => p.category === "Vegetables").length },
    { name: "Fruits", icon: "🍎", count: products.filter((p) => p.category === "Fruits").length },
    { name: "Grains", icon: "🌾", count: products.filter((p) => p.category === "Grains").length },
    { name: "Herbs", icon: "🌿", count: products.filter((p) => p.category === "Herbs").length },
  ]

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide selection of fresh, organic produce organized by category for easy browsing.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={`/products?category=${category.name}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.count} products</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/products">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
