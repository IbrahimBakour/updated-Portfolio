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
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#030303] to-[#0f0f0f] py-24 px-4"
    >
      {/* Scan Line Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse opacity-30 scanning-line"
          style={{
            top: "20%",
          }}
        />
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            About <span className="text-indigo-400">Me</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto text-left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            I am a <span className="text-primary neon-glow">final-year</span>{" "}
            Computer Science{" "}
            <span className="text-primary neon-glow">student</span> specializing
            in{" "}
            <span className="text-primary neon-glow">Software Engineering</span>
            . During my studies, I have learned the{" "}
            <span className="text-primary neon-glow">theoretical</span> aspects
            of computer science and applied them through{" "}
            <span className="text-primary neon-glow">practical projects</span>.
            In my free time, I focus on improving my programming skills and
            working on{" "}
            <span className="text-primary neon-glow">personal projects</span> to
            prepare myself for the job market.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="list-disc list-inside text-lg md:text-xl text-gray-300 leading-relaxed space-y-2 my-6"
          >
            <li>
              Gained practical experience by combining what I learned in class
              with{" "}
              <span className="text-primary neon-glow">hands-on projects</span>.
            </li>
            <li>
              Spent time building small{" "}
              <span className="text-primary neon-glow">web applications</span>{" "}
              and exploring modern technologies to improve my understanding of
              software development.
            </li>
            <li>
              Developed a good foundation in{" "}
              <span className="text-primary neon-glow">front-end</span> and{" "}
              <span className="text-primary neon-glow">back-end</span>{" "}
              development, databases, and APIs, which I applied in my projects.
            </li>
          </motion.ul>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            I’m always excited about{" "}
            <span className="text-primary neon-glow">opportunities</span> to
            grow, contribute to a team, and apply my problem-solving skills to
            create{" "}
            <span className="text-primary neon-glow">software solutions</span>.
          </motion.p>
        </div>
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          onMouseEnter={() => setShowScrollLabel(true)}
          onMouseLeave={() => setShowScrollLabel(false)}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTechnology}
            className="animate-bounce hover:text-primary-foreground hover:bg-primary dark:hover:bg-primary/80 transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
          {showScrollLabel && (
            <div className="absolute -top-8 bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded-md transition-all duration-300 whitespace-nowrap">
              My Skills
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
