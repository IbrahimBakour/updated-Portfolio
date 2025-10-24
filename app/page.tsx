import React, { Suspense } from "react";
import { SectionSeparator } from "@/components/ui/section-separator";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

const Navbar = React.lazy(() =>
  import("@/components/navbar").then((module) => ({ default: module.Navbar }))
);
const HeroSection = React.lazy(() =>
  import("@/components/hero-section").then((module) => ({
    default: module.HeroSection,
  }))
);
const AboutSection = React.lazy(() =>
  import("@/components/about-section").then((module) => ({
    default: module.AboutSection,
  }))
);
const TechnologyShowcase = React.lazy(() =>
  import("@/components/technology-showcase").then((module) => ({
    default: module.TechnologyShowcase,
  }))
);
// const ServicesSection = React.lazy(() => import('@/components/services-section').then(module => ({ default: module.ServicesSection })));
const WorkSection = React.lazy(() =>
  import("@/components/work-section").then((module) => ({
    default: module.WorkSection,
  }))
);
const TestimonialsSection = React.lazy(() =>
  import("@/components/testimonials-section").then((module) => ({
    default: module.TestimonialsSection,
  }))
);
const ContactSection = React.lazy(() =>
  import("@/components/contact-section").then((module) => ({
    default: module.ContactSection,
  }))
);
const Footer = React.lazy(() =>
  import("@/components/footer").then((module) => ({ default: module.Footer }))
);
// const DevelopmentAlert = React.lazy(() => import('@/components/development-alert').then(module => ({ default: module.DevelopmentAlert })));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    </main>
  );
}
