"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

import type { CarouselApi } from "@/components/ui/carousel";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: "freecodecamp-backend",
    title: "Backend Certificate",
    issuer: "Amazon Web Services",
    image: "/FreeCodeCamp Backend Certificate.png",
  },
  {
    id: "manara-backend",
    title: "Backend Manara Certificate",
    issuer: "Manara",
    image: "/Backend Manara Certificate.png",
  },
  {
    id: "emotional-intelligence",
    title: "Emotional Intelligence and Leadership",
    issuer: "Edrak",
    image: "/Emotional Intelligence and Leadership.png",
  },
  {
    id: "fullstack-development",
    title: "Full-Stack Development",
    issuer: "SimpliLearn",
    image: "/Full-Stack Development 101 Certificate.png",
  },
  {
    id: "manara-database",
    title: "Databases Manara Certificate",
    issuer: "Manara",
    image: "/Databases Manara Certificate.png",
  },
  {
    id: "flutter-course",
    title: "Flutter Course",
    issuer: "SimpliLearn",
    image: "/Introduction to Flutter Course Certificate.png",
  },

  {
    id: "ones-self",
    title: "Emotional Intelligence and One's Self",
    issuer: "Edrak",
    image: "/Emotional Intelligence and One's Self.png",
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering Certificate",
    issuer: "SimpliLearn",
    image: "/Prompt Engineering Certificate.png",
  },
  {
    id: "system-design-architecture",
    title: "System Design and Architecture Certificate",
    issuer: "Manara",
    image: "/System Design and Architecture Certificate.png",
  },
  {
    id: "advanced-prompt-engineering",
    title: "Advanced Prompt Engineering with ChatGPT",
    issuer: "SimpliLearn",
    image: "/Advanced Prompt Engineering with ChatGPT.png",
  },
];

export function CertificatesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  // Lazy render when the section enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasEnteredView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    const node = sectionRef.current;
    if (node) observer.observe(node);

    return () => observer.disconnect();
  }, []);

  // Autoplay from right to left
  useEffect(() => {
    if (!api || !hasEnteredView) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3800);

    return () => clearInterval(interval);
  }, [api, hasEnteredView]);

  return (
    <section
          id="certificates"
          ref={sectionRef}
          className="py-20 relative overflow-hidden"
        >
          {/* Scanning Line Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse opacity-30"
              style={{
                top: "20%",
                animation: "scan 8s linear infinite",
              }}
            />
          </div>
    
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-indigo-400">Certificates</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of my professional certificates and awards.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mt-6 rounded-full" />
        </div>

        {!hasEnteredView ? (
          <div className="h-80 rounded-2xl bg-muted/30 animate-pulse border border-border/40" />
        ) : (
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10 pointer-events-none" />
            <Carousel
              opts={{ loop: true, align: "center", skipSnaps: false }}
              setApi={setApi}
              className="select-none"
            >
              <CarouselContent>
                {certificates.map((certificate) => (
                  <CarouselItem
                    key={certificate.id}
                    className="basis-[85%] sm:basis-[70%] lg:basis-[48%] xl:basis-[38%]"
                  >
                    <Card className="group h-full bg-[#1a1a1a]/50 border border-transparent hover:border-indigo-500/50 rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/10">
                      <div className="relative aspect-video bg-black/30 flex items-center justify-center overflow-hidden">
                        <img
                          src={certificate.image}
                          alt={certificate.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                      </div>

                      <CardContent className="p-5 space-y-3">
                        <Badge
                          variant="outline"
                          className="bg-indigo-500/10 border-indigo-500/30 text-indigo-400 text-xs font-medium rounded-full px-3 py-1"
                        >
                          {certificate.issuer}
                        </Badge>
                        <h3 className="text-lg font-semibold text-white leading-snug">
                          {certificate.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        )}
      </div>
    
          <style jsx>{`
            @keyframes scan {
              0% {
                top: 0%;
              }
              100% {
                top: 100%;
              }
            }
          `}</style>
        </section>
  );
}
