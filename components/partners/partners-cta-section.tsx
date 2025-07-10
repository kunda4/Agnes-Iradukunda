export function PartnersCTASection() {
  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our network of successful partners and discover how FreshCrop can support your business with premium
          produce and exceptional service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Sales Team
          </a>
          <a
            href="mailto:partnerships@freshcrop.com"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
          >
            partnerships@freshcrop.com
          </a>
        </div>
      </div>
    </section>
  )
}
