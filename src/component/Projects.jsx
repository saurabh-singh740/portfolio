import React from "react";
import { motion } from "framer-motion";
import Card from "../Card";

const projects = [
  { 
    title: "Aurora", 
    desc: "AI Productivity Assistant", 
    image: "/aurora.png",
    githubLink: "https://github.com/saurabh-singh740/Chatgpt" 
  },
  { 
    title: "JobScibe", 
    desc: "AI-powered Resume Analyzer & Job Recommender", 
    image: "/j1.png",
    liveLink: "https://jobscibe-fui.vercel.app/", 
    githubLink: "https://github.com/saurabh-singh740/jobscibe" 
  },
  { 
    title: "VaultIQ", 
    desc: "Vault for storing prompts", 
    image: "/vaultiq.png",
    liveLink: "https://vaultiq-promptvault.vercel.app/", 
    githubLink: "https://github.com/saurabh-singh740/vaultiq" 
  },
  { 
    title: "Snitch", 
    desc: "Fashion e-commerce website", 
    image: "/snitch.png",
    liveLink: "https://snitch-fashion.vercel.app/", 
    githubLink: "https://github.com/saurabh-singh740/Snitch-Fashion" 
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-8 py-20 bg-gray-50 dark:bg-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
      >
        Projects
      </motion.h2>

      {/* Grid: 1 column on mobile, 2 on medium+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="w-full max-w-xl"
          >
            <Card 
              title={p.title} 
              desc={p.desc} 
              image={p.image}
              liveLink={p.liveLink} 
              githubLink={p.githubLink} 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
