"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);

    // Show success message (in a real app, you'd handle this properly)
    alert("Message sent successfully! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary neon-glow">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your digital vision to life? Let's discuss your
            project and create something extraordinary together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-md border-2 border-primary/30 relative overflow-hidden">
            {/* Glitch Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />

            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Send className="h-6 w-6 text-primary" />
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25",
                    isSubmitting && "opacity-50 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-card/50 backdrop-blur-md border-2 border-secondary/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-50" />
              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-secondary" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">
                        ibakour37@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground font-medium">
                        +966 50 532 4115
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground font-medium">
                        Riyadh, Saudi Arabia
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="bg-card/50 backdrop-blur-md border-2 border-primary/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <h3 className="text-xl font-bold text-foreground">
                    Available for Projects
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm currently accepting new positions and would love to hear
                  about your opportunity. Feel free to reach out to discuss how
                  I can contribute to your team.
                </p>
                {/* <Button
                  className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
                  size="sm"
                >
                  Schedule a Call
                </Button> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
