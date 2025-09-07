import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { TechnologyShowcase } from "@/components/technology-showcase";
import { ServicesSection } from "@/components/services-section";
import { WorkSection } from "@/components/work-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <TechnologyShowcase />

      <ServicesSection />

      <WorkSection />

      <TestimonialsSection />

      <ContactSection />

      <Footer />
    </main>
  );
}
