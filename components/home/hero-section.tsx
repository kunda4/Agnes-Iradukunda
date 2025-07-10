"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const scrollToProducts = () => {
    const el = document.getElementById("products")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="bg-gradient-to-r from-green-50 to-green-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-green-800 mb-6">Fresh Crops Delivered to Your Door</h1>
        <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
          Order premium quality vegetables, fruits, grains, and herbs directly from local farms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToProducts}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors"
          >
            Shop Now <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <Link
            href="/products"
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            View Full Catalog
          </Link>
        </div>
      </div>
    </section>
  )
}
