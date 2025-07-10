import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Shield, Award, Leaf } from "lucide-react"

export function OurValuesSection() {
  const values = [
    {
      icon: <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />,
      title: "Sustainability",
      description: "We support farming practices that protect the environment and promote long-term sustainability.",
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />,
      title: "Quality",
      description: "Every product is carefully selected and inspected to ensure the highest quality and freshness.",
    },
    {
      icon: <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />,
      title: "Community",
      description: "We believe in building strong relationships between farmers, customers, and our local community.",
    },
    {
      icon: <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from sourcing to delivery and customer service.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                {value.icon}
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
