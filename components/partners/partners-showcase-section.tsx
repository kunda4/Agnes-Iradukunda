"use client"

import { useState } from "react"
import { PartnerCard } from "@/components/partners/partner-card"
import { PartnersFilter } from "@/components/partners/partners-filter"
import { partners, partnerCategories } from "@/lib/partners"

export function PartnersShowcaseSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPartners =
    selectedCategory === "All" ? partners : partners.filter((partner) => partner.category === selectedCategory)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From luxury hotels to school districts, our partners trust us to deliver the freshest produce that meets
            their quality standards and sustainability goals.
          </p>
        </div>

        <PartnersFilter
          categories={partnerCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPartners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>

        {filteredPartners.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No partners found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
