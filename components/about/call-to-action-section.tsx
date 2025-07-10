import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CallToActionSection() {
  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust FreshCrop for their fresh produce needs.
        </p>
        <Link href="/products">
          <Button size="lg" variant="secondary">
            Shop Fresh Crops Now
          </Button>
        </Link>
      </div>
    </section>
  )
}
