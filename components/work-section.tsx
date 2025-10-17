"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "umpsa-community-platform",
    title: "UMPSA Community Platform",
    description: "Full-stack community platform with user engagement features",
    longDescription:
      "UMPSA Community Platform is my Final Year Project, a MERN-based web app that connects students, clubs, and admins in one hub. Enabling posts, interactions, and reporting, all in a responsive and engaging community space.",
    image: "/UMPSALogo.png",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Motion UI",
      "Tailwind CSS",
    ],
    category: "Full-Stack",
    // liveUrl: "https://example.com",
    githubUrl: "https://github.com/IbrahimBakour/UMPSA-Community-Platform",
    featured: true,
  },
  {
    id: "onsoftware-website",
    title: "onSoftware Website",
    description: "Modern landing page for a software development company",
    longDescription:
      "A modern landing page for a software development company, showcasing services, projects, and client testimonials.",
    image: "/OnSoftware.jpeg",
    technologies: ["Next.js", "Tailwind CSS", "Shadcn UI", "Material-UI"],
    category: "Frontend",
    liveUrl: "https://on-software-delta.vercel.app/",
    featured: true,
  },
  {
    id: "easy-order-website",
    title: "EasyOrder Website",
    description: "Responsive website for a food ordering service",
    longDescription:
      "A responsive website for a food ordering service, featuring a user-friendly interface, real-time order tracking, and seamless payment integration.",
    image: "/EasyOrder.jpeg",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "Vue.js"],
    category: "Full-Stack",
    // githubUrl: "https://example.com",
    featured: true,
  },
  {
    id: "care-pulse-website",
    title: "Carepulse Website",
    description: "Healthcare platform for patient management",
    longDescription:
      "A healthcare platform that streamlines patient registration, appointment scheduling, medical records, and the admin dashboard.",
    image: "/CarePulse.jpeg",
    technologies: ["Next.js", "REST APIs", "Appwrite", "SMS"],
    category: "Full-Stack",
    githubUrl: "https://github.com/IbrahimBakour/carepulse",
    featured: false,
  },
  {
    id: "fyp-gate",
    title: "Fyp Gate Website",
    description: "Final year project gate website",
    longDescription:
      "A Laravel-based platform using Bootstrap and XAMPP, streamlining final year project proposals, student-supervisor selection, quota management, and appointments.",
    image: "/FypGate.jpeg",
    technologies: ["Laravel", "Bootstrap", "XAMPP", "MySQL"],
    category: "Full-Stack",
    githubUrl: "https://github.com/IbrahimBakour/Fyp-Gate",
    featured: false,
  },
  {
    id: "company-profile",
    title: "Printing press company profile",
    description: "Printing press company Profile",
    longDescription:
      "A simple company profile website built using HTML, CSS, and JavaScript, with a touch of Bootstrap for responsiveness.",
    image: "/Press.jpeg",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "Frontend",
    liveUrl: "https://ibrahimbakour.github.io/Press/",
    githubUrl: "https://github.com/IbrahimBakour/Press",
    featured: false,
  },

  {
    id: "old-porfolio",
    title: "My Previous Portfolio",
    description: "My old portfolio",
    longDescription:
      "A sleek and responsive portfolio website built with Next.js, Tailwind CSS, and Node.js.",
    image: "/PortfolioV1.jpeg",
    technologies: ["Next.js", "Tailwind CSS", "Node.js"],
    category: "Frontend",
    liveUrl: "https://portfolio-kappa-six-47.vercel.app/",
    githubUrl: "https://github.com/IbrahimBakour/portfolio",
    featured: false,
  },
  {
    id: "shipping-and-delivery-system",
    title: "Shpping and Delivery System",
    description: "A comprehensive shipping and delivery system",
    longDescription:
      "Developed a comprehensive Shipping and Delivery System using Java and an Object-Oriented Programming (OOP) approach to streamline logistics and delivery operations",
    image: "/ShippingAndDeliverySystem.jpeg",
    technologies: ["Java", "NetBeans", "OOP"],
    category: "Full-Stack",
    githubUrl: "https://github.com/IbrahimBakour/Shipping-and-Delivery-System",
    featured: false,
  },
  {
    id: "authentication-page",
    title: "Authentication Page",
    description: "A comprehensive authentication page",
    longDescription:
      "Advanced MERN Authentication page with Login, Sign up, Email Verification, Password Recovery, and Welcome Emails ",
    image: "/LoginPage.jpeg",
    technologies: ["React.js", "Express", "MongoDB", "Mailtrap"],
    category: "Backend",
    liveUrl: "https://mern-auth-yemw.onrender.com/",
    githubUrl: "https://github.com/IbrahimBakour/MERN-Auth",
    featured: false,
  },
  {
    id: "dietary-planning-screen",
    title: "Dietary Planning Screen",
    description: "A flutter food planning screen",
    longDescription: "",
    image: "/FlutterScreen.jpeg",
    technologies: ["Flutter", "Dart"],
    category: "Mobile",
    featured: false,
  },
  {
    id: "telegram-bot",
    title: "Telegram Bot",
    description: "A bot for telegram educational group",
    longDescription:
      "A Telegram bot designed to reward members with stars within educational groups.",
    image: "/TelegramBot.png",
    technologies: ["Python", "Node.js"],
    category: "Backend",
    liveUrl: "https://telegramlingostarsbot.onrender.com/",
    featured: false,
  },
];

const categories = ["All", "Full-Stack", "Frontend", "Backend", "Mobile"];

export function WorkSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="work" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary neon-glow">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects that demonstrate my expertise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6 rounded-full" />
        </div>

        {/* Featured Projects
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="group cursor-pointer transition-all duration-500 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                        >
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="outline"
                      className="border-secondary text-secondary"
                    >
                      {project.category}
                    </Badge>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {hoveredProject === project.id
                      ? project.longDescription
                      : project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "transition-all duration-300",
                activeCategory === category
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary hover:bg-primary/10"
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="outline"
                    className="border-secondary text-secondary text-xs"
                  >
                    {project.category}
                  </Badge>
                  <div className="flex gap-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0 hover:text-primary"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0 hover:text-primary"
                        >
                          <Github className="h-3 w-3" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 2}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Interested in working together? Let's create something amazing.</p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Your Project
          </Button>
        </div> */}
      </div>
    </section>
  );
}
