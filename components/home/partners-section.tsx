import Image from "next/image"
import { Building, Users } from 'lucide-react'
import { partners } from "@/lib/partners"

export function PartnersSection() {
  const featuredPartners = partners.slice(0, 8)

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with leading hotels, restaurants, schools, and businesses to deliver fresh,
            high-quality produce that meets their unique needs.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {featuredPartners.map((partner) => (
            <div key={partner.id} className="text-center">
              <div className="bg-white rounded-lg p-6 mb-4 h-24 flex items-center justify-center shadow-sm">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={60}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="font-semibold text-sm">{partner.name}</h3>
              <p className="text-xs text-gray-500">{partner.category}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
            <p className="text-gray-600">Partner Organizations</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">100K+</h3>
            <p className="text-gray-600">People Served Daily</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">95%</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Satisfaction</h3>
            <p className="text-gray-600">Partner Satisfaction Rate</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-green-600 text-white py-12 px-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join our network of successful partners and discover how FreshCrop can support your business.
          </p>
          <button
            // onClick={scrollToContact}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  )
}
