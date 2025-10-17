"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Eye } from "lucide-react"
import { cn } from "@/lib/utils"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and Node.js, featuring user authentication, product management, shopping cart, payment processing with Stripe, and admin dashboard.",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    category: "Full-Stack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    longDescription:
      "A modern task management application with real-time collaboration features, drag-and-drop functionality, team management, and progress tracking.",
    image: "/task-management-dashboard-dark-theme.jpg",
    technologies: ["React", "Socket.io", "MongoDB", "Express", "Material-UI"],
    category: "Frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "crypto-tracker",
    title: "Cryptocurrency Tracker",
    description: "Real-time crypto price tracking with portfolio management",
    longDescription:
      "A cryptocurrency tracking application with real-time price updates, portfolio management, price alerts, and detailed analytics charts.",
    image: "/cryptocurrency-trading-dashboard.png",
    technologies: ["Vue.js", "Python", "FastAPI", "Redis", "Chart.js"],
    category: "Full-Stack",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "social-media-app",
    title: "Social Media Platform",
    description: "Modern social networking app with real-time messaging",
    longDescription:
      "A social media platform featuring user profiles, post sharing, real-time messaging, notifications, and content moderation.",
    image: "/social-media-app-interface.png",
    technologies: ["React Native", "Firebase", "Node.js", "GraphQL"],
    category: "Mobile",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "ai-chatbot",
    title: "AI Customer Support Bot",
    description: "Intelligent chatbot for automated customer service",
    longDescription:
      "An AI-powered chatbot system with natural language processing, automated responses, and seamless handoff to human agents.",
    image: "/ai-chatbot-interface.png",
    technologies: ["Python", "TensorFlow", "Flask", "OpenAI API"],
    category: "Backend",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracking App",
    description: "Mobile app for workout tracking and health monitoring",
    longDescription:
      "A comprehensive fitness tracking application with workout logging, progress tracking, nutrition monitoring, and social features.",
    image: "/fitness-app-dashboard.png",
    technologies: ["Flutter", "Dart", "Firebase", "HealthKit"],
    category: "Mobile",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
]

const categories = ["All", "Full-Stack", "Frontend", "Backend", "Mobile"]

export function WorkSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="work" className="py-20 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary neon-glow">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects that demonstrate my expertise in modern web development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6 rounded-full" />
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Projects</h3>
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
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
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
                    <Badge variant="outline" className="border-secondary text-secondary">
                      {project.category}
                    </Badge>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {hoveredProject === project.id ? project.longDescription : project.description}
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
                  : "border-border hover:border-primary hover:text-primary hover:bg-primary/10",
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
                  <Badge variant="outline" className="border-secondary text-secondary text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex gap-1">
                    {project.liveUrl && (
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0 hover:text-primary">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0 hover:text-primary">
                        <Github className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{project.description}</p>
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

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Interested in working together? Let's create something amazing.</p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  )
}
