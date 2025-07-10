import { SinglePageLayout } from "@/components/layout/single-page-layout"
import { HeroSection } from "@/components/home/hero-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { FeaturedProductsSection } from "@/components/home/featured-products-section"
import { PartnersSection } from "@/components/home/partners-section"
import { AboutSection } from "@/components/about/about-section"
import { ContactSection } from "@/components/contact/contact-section"

export default function HomePage() {
  return (
    <SinglePageLayout>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <AboutSection />
      <PartnersSection />
      <ContactSection />
    </SinglePageLayout>
  )
}
