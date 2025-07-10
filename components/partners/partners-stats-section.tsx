import { Building, Users, Handshake, TrendingUp } from "lucide-react"

export function PartnersStatsSection() {
  const stats = [
    {
      icon: <Building className="h-8 w-8 text-green-600" />,
      value: "50+",
      label: "Partner Organizations",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      value: "100K+",
      label: "People Served Daily",
    },
    {
      icon: <Handshake className="h-8 w-8 text-green-600" />,
      value: "5+",
      label: "Years of Partnerships",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      value: "95%",
      label: "Partner Satisfaction",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
