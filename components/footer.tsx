"use client";

import { Button } from "@/components/ui/button";
import { Download, ArrowUp } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Technologies", href: "#technologies" },
  // { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Frontend Development",
  "Backend Development",
  "Full-Stack Solutions",
  "Mobile Development",
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/10 border-t border-border relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent" />

      {/* Circuit Pattern
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(255,0,60,0.5)_25px,rgba(255,0,60,0.5)_26px,transparent_27px,transparent_49px,rgba(8,253,216,0.5)_50px,rgba(8,253,216,0.5)_51px,transparent_52px),linear-gradient(rgba(255,0,60,0.5)_24px,transparent_25px,transparent_26px,rgba(255,0,60,0.5)_27px,rgba(255,0,60,0.5)_49px,transparent_50px,transparent_51px,rgba(8,253,216,0.5)_52px)] bg-[length:75px_75px]" />
      </div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary neon-glow mb-2">
                Ibrahim
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full-Stack Developer crafting exceptional digital experiences
                with cutting-edge technologies and innovative solutions.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/IbrahimBakour"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary hover:bg-primary dark:hover:bg-primary/80 hover:scale-110 transition-all duration-300"
                >
                  <FaGithub className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/ibrahim-bakour/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary hover:bg-primary dark:hover:bg-primary/80 hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedin className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="//Ibrahim_Bakour_FullStack_Developer_resume.pdf"
                download
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary hover:bg-primary dark:hover:bg-primary/80 hover:scale-110 transition-all duration-300"
                >
                  <Download className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Email</p>
                <p className="text-foreground">ibakour37@gmail.com</p>
              </div>
              <div>
                <p className="text-muted-foreground">Phone</p>
                <p className="text-foreground">+966 50 532 4115</p>
              </div>
              <div>
                <p className="text-muted-foreground">Location</p>
                <p className="text-foreground">Saudi Arabia, Riyadh</p>
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-500 text-xs font-medium">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Ibrahim. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
