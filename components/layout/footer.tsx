"use client"

import { Leaf } from 'lucide-react'

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const quickLinks = [
    { id: "products", label: "Products" },
    { id: "partners", label: "Partners" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact" },
  ]

  const categories = [
    { href: "/products?category=Vegetables", label: "Vegetables" },
    { href: "/products?category=Fruits", label: "Fruits" },
    { href: "/products?category=Grains", label: "Grains" },
    { href: "/products?category=Herbs", label: "Herbs" },
  ]

  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-bold">FreshCrop</span>
            </button>
            <p className="text-green-200">
              Your trusted partner for fresh, organic produce delivered straight from the farm.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-green-200">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-green-200">
              {categories.map((category) => (
                <li key={category.href}>
                  <a href={category.href} className="hover:text-white transition-colors">
                    {category.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="text-green-200 space-y-2">
              <p>📧 info@freshcrop.com</p>
              <p>📞 (555) 123-4567</p>
              <p>📍 123 Farm Road, Green Valley</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
          <p>&copy; 2024 FreshCrop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
