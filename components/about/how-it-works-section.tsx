import { Truck } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Browse & Order",
      description: "Browse our selection of fresh crops from local farms and add your favorites to your cart.",
    },
    {
      number: "2",
      title: "Farm Fresh Harvest",
      description: "Our partner farms harvest your order fresh, ensuring peak quality and nutritional value.",
    },
    {
      icon: <Truck className="h-8 w-8 text-green-600" />,
      title: "Fast Delivery",
      description: "We deliver your fresh crops directly to your doorstep within 2-3 business days.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {step.icon || <span className="text-2xl font-bold text-green-600">{step.number}</span>}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
