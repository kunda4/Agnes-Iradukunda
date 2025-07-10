import { Handshake, Building, Users } from "lucide-react"

export function PartnershipBenefitsSection() {
  const benefits = [
    {
      icon: <Handshake className="h-8 w-8 text-green-600" />,
      title: "Reliable Supply Chain",
      description: "Consistent, on-time delivery of fresh produce with flexible ordering and customized solutions.",
    },
    {
      icon: <Building className="h-8 w-8 text-green-600" />,
      title: "Bulk Pricing",
      description: "Competitive wholesale pricing for large orders with volume discounts and flexible payment terms.",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Dedicated Support",
      description: "Personal account managers and 24/7 customer support to ensure your business runs smoothly.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner with FreshCrop?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
