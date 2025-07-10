"use client"
import { PageLayout } from "@/components/layout/page-layout"
import { PartnersHeroSection } from "@/components/partners/partners-hero-section"
import { PartnersStatsSection } from "@/components/partners/partners-stats-section"
import { PartnersShowcaseSection } from "@/components/partners/partners-showcase-section"
import { PartnershipBenefitsSection } from "@/components/partners/partnership-benefits-section"
import { PartnersCTASection } from "@/components/partners/partners-cta-section"

export default function PartnersPage() {
  return (
    <PageLayout currentPage="partners">
      <PartnersHeroSection />
      <PartnersStatsSection />
      <PartnersShowcaseSection />
      <PartnershipBenefitsSection />
      <PartnersCTASection />
    </PageLayout>
  )
}
