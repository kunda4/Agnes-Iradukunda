import { AboutHeroSection } from "@/components/about/about-hero-section"
import { OurStorySection } from "@/components/about/our-story-section"
import { OurValuesSection } from "@/components/about/our-values-section"
import { HowItWorksSection } from "@/components/about/how-it-works-section"
import { CallToActionSection } from "@/components/about/call-to-action-section"

export function AboutSection() {
  return (
    <section id="about" className="flex flex-col">
      <AboutHeroSection />
      <OurStorySection />
      <OurValuesSection />
      <HowItWorksSection />
      <CallToActionSection />
    </section>
  )
}
