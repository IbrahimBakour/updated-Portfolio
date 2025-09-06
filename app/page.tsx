import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TechnologyShowcase } from "@/components/technology-showcase"
import { ServicesSection } from "@/components/services-section"
import { WorkSection } from "@/components/work-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <HeroSection />

      {/* Section Placeholders */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-muted/10">
        <h2 className="text-3xl font-bold text-foreground">About Section</h2>
      </section>

      <TechnologyShowcase />

      <ServicesSection />

      <WorkSection />

      <TestimonialsSection />

      <ContactSection />

      <Footer />
    </main>
  )
}
