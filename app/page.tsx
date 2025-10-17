import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { TechnologyShowcase } from "@/components/technology-showcase";
import { ServicesSection } from "@/components/services-section";
import { WorkSection } from "@/components/work-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { DevelopmentAlert } from "@/components/development-alert";
import { SectionSeparator } from "@/components/ui/section-separator";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <DevelopmentAlert /> */}
      <Navbar />

      <HeroSection />

      <SectionSeparator />

      <AboutSection />

      <SectionSeparator />

      <TechnologyShowcase />

      <SectionSeparator />

      {/* <ServicesSection /> */}

      {/* <SectionSeparator /> */}

      <WorkSection />

      <SectionSeparator />

      <TestimonialsSection />

      <SectionSeparator />

      <ContactSection />

      <Footer />
    </main>
  );
}
