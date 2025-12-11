"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
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
    id: "customer-management-system",
    title: "Customer Management System",
    description: "A laravel customer management system",
    longDescription:
      "A Laravel-based Customer Management System to desigend using modern UI/UX principles for efficient client data handling and interaction tracking.",
    image: "/All Filters.png",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/IbrahimBakour/Customer-Management-Website",
    category: "Full-Stack",
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
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const projectsToShow = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

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
          {projectsToShow.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
              onClick={() => {
                setSelectedProject(project);
                setIsDialogOpen(true);
              }}
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

        {!showAll && filteredProjects.length > 6 && (
          <div className="text-center mt-8">
            <Button onClick={() => setShowAll(true)}>Show More</Button>
          </div>
        )}
      </div>

      {selectedProject && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-gradient-to-r from-[#000000] to-[#0F172A] border-border/50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader>
                <DialogTitle className="pb-4">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              <div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-60 object-cover rounded-md mb-4"
                />
                <p className="text-muted-foreground mb-4">
                  {selectedProject.longDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
