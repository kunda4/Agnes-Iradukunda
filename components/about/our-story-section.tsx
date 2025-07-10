import Image from "next/image"

export function OurStorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2020, FreshCrop began as a small initiative to support local farmers and provide communities
              with access to fresh, organic produce. What started as a weekend farmers market has grown into a
              comprehensive platform connecting consumers directly with sustainable farms.
            </p>
            <p className="text-gray-700 mb-4">
              We believe that everyone deserves access to nutritious, fresh food while supporting the hardworking
              farmers who grow it. Our platform eliminates the middleman, ensuring farmers get fair prices and customers
              get the freshest produce possible.
            </p>
            <p className="text-gray-700">
              Today, we work with over 50 local farms and serve thousands of families across the region, delivering
              farm-fresh produce right to their doorsteps.
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Farm landscape"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
