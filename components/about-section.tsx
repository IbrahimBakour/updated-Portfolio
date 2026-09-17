"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, Briefcase, Download, Mail, User } from "lucide-react";
import { useState } from "react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "UI/UX Design",
  "Problem Solving",
];

export function AboutSection() {
  const [showScrollLabel, setShowScrollLabel] = useState(false);

  const scrollToTechnology = () => {
    const element = document.getElementById("technologies");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Scan Line Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse opacity-30 scanning-line"
          style={{
            top: "20%",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
            About <span className="text-indigo-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6 mb-6 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto text-left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            I am a <span className="text-primary neon-glow">Computer Science graduate</span>{" "}
            specializing in{" "}
            <span className="text-primary neon-glow">Software Engineering</span>. Throughout
            my studies and practical experience, I’ve bridged{" "}
            <span className="text-primary neon-glow">theoretical computer science</span>{" "}
            with hands-on{" "}
            <span className="text-primary neon-glow">systems architecture</span>,{" "}
            <span className="text-primary neon-glow">backend integrations</span>, and{" "}
            <span className="text-primary neon-glow">workflow automation</span>.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="list-disc list-inside text-lg md:text-xl text-gray-300 leading-relaxed space-y-2 my-6"
          >
            <li>
              Applied my academic foundation directly to real-world production
              environments, designing scalable{" "}
              <span className="text-primary neon-glow">API integrations</span> and{" "}
              <span className="text-primary neon-glow">automated backend systems</span>.
            </li>
            <li>
              Built end-to-end web applications and intelligent{" "}
              <span className="text-primary neon-glow">automation pipelines</span>, working
              extensively with modern APIs, databases, and workflow orchestration engines.
            </li>
            <li>
              Developed strong expertise in{" "}
              <span className="text-primary neon-glow">full-stack concepts</span>,{" "}
              <span className="text-primary neon-glow">data management</span>, and{" "}
              <span className="text-primary neon-glow">system resilience</span> to engineer
              reliable, production-ready software solutions.
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
