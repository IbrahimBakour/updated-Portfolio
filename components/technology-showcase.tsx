"use client";

import { useEffect, useRef } from "react";

interface Technology {
  name: string;
  icon: string;
  color: string;
  category: string;
}

const frontendTechnologies: Technology[] = [
  { name: "React", icon: "⚛️", color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: "▲", color: "#000000", category: "Frontend" },
  { name: "Vue.js", icon: "🟢", color: "#4FC08D", category: "Frontend" },
  { name: "TypeScript", icon: "📘", color: "#3178C6", category: "Frontend" },
  { name: "JavaScript", icon: "🟨", color: "#F7DF1E", category: "Frontend" },
  { name: "HTML5", icon: "🌐", color: "#E34F26", category: "Frontend" },
  { name: "CSS3", icon: "🎨", color: "#1572B6", category: "Frontend" },
  { name: "Tailwind", icon: "💨", color: "#06B6D4", category: "Frontend" },
  { name: "Sass", icon: "💅", color: "#CC6699", category: "Frontend" },
];

const backendTechnologies: Technology[] = [
  { name: "Node.js", icon: "🟢", color: "#339933", category: "Backend" },
  { name: "Python", icon: "🐍", color: "#3776AB", category: "Backend" },
  { name: "Express", icon: "🚀", color: "#000000", category: "Backend" },
  { name: "Django", icon: "🎯", color: "#092E20", category: "Backend" },
  { name: "FastAPI", icon: "⚡", color: "#009688", category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791", category: "Backend" },
  { name: "MongoDB", icon: "🍃", color: "#47A248", category: "Backend" },
  { name: "MySQL", icon: "🐬", color: "#00758F", category: "Backend" },
  { name: "php", icon: "🐘", color: "#777BB4", category: "Backend" },
  { name: "laravel", icon: "🌹", color: "#FF2D20", category: "Backend" },
  { name: "REST API", icon: "🌐", color: "#FF6B35", category: "Backend" },
];

const toolsTechnologies: Technology[] = [
  { name: "Git", icon: "📝", color: "#F05032", category: "Tools" },
  { name: "GitHub", icon: "🐙", color: "#181717", category: "Tools" },
  { name: "Vercel", icon: "▲", color: "#000000", category: "Tools" },
  { name: "Firebase", icon: "🔥", color: "#FFCA28", category: "Tools" },
  { name: "Figma", icon: "🎨", color: "#F24E1E", category: "Tools" },
  { name: "VS Code", icon: "💻", color: "#007ACC", category: "Tools" },
  { name: "Postman", icon: "📮", color: "#FF6C37", category: "Tools" },
  { name: "Webpack", icon: "📦", color: "#8DD6F9", category: "Tools" },
  { name: "Cursor", icon: "🖱️", color: "#000000", category: "Tools" },
  { name: "Vite", icon: "⚡", color: "#646CFF", category: "Tools" },
];

interface TechSwiperProps {
  technologies: Technology[];
  direction: "left" | "right";
  speed?: number;
}

function TechSwiper({ technologies, direction, speed = 30 }: TechSwiperProps) {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const scrollWidth = swiper.scrollWidth;
    const clientWidth = swiper.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    let scrollPosition = direction === "left" ? 0 : maxScroll;

    const animate = () => {
      if (direction === "left") {
        scrollPosition += 1;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
      } else {
        scrollPosition -= 1;
        if (scrollPosition <= 0) {
          scrollPosition = maxScroll;
        }
      }

      swiper.scrollLeft = scrollPosition;
    };

    const interval = setInterval(animate, speed);
    return () => clearInterval(interval);
  }, [direction, speed]);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={swiperRef}
        className="flex gap-8 overflow-x-hidden scrollbar-hide py-8"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Duplicate technologies for seamless loop */}
        {[...technologies, ...technologies, ...technologies].map(
          (tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="w-24 h-24 bg-card border border-border rounded-xl flex flex-col items-center justify-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-105">
                <div
                  className="text-3xl mb-2 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                  style={{
                    color: tech.color,
                    textShadow: `0 0 10px ${tech.color}40`,
                  }}
                >
                  {tech.icon}
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </div>
          )
        )}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
}

export function TechnologyShowcase() {
  return (
    <section id="technologies" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary neon-glow">Tech</span> Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies I use to build exceptional digital
            experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6 rounded-full" />
        </div>

        {/* Technology Swipers Stack */}
        <div className="space-y-8">
          {/* Frontend Technologies - Moving Left */}
          <div className="relative">
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-20">
              <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg px-3 py-1">
                <span className="text-primary font-semibold text-sm">
                  Frontend
                </span>
              </div>
            </div>
            <TechSwiper
              technologies={frontendTechnologies}
              direction="left"
              speed={40}
            />
          </div>

          {/* Backend Technologies - Moving Right */}
          <div className="relative">
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
              <div className="bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-lg px-3 py-1">
                <span className="text-secondary font-semibold text-sm">
                  Backend
                </span>
              </div>
            </div>
            <TechSwiper
              technologies={backendTechnologies}
              direction="right"
              speed={35}
            />
          </div>

          {/* Tools & DevOps - Moving Left */}
          <div className="relative">
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-20">
              <div className="bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-lg px-3 py-1">
                <span className="text-secondary font-semibold text-sm">
                  Tools
                </span>
              </div>
            </div>
            <TechSwiper
              technologies={toolsTechnologies}
              direction="left"
              speed={45}
            />
          </div>
        </div>

        {/* Stats Section
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">
              Client Satisfaction
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
