import React, { useRef } from "react";
import { motion } from "framer-motion";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Contact from "./component/Contact";

export default function AppRoutes({ scrollToSection }) {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollHandler = (section) => {
    if (section === "home") heroRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "projects") projectsRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "skills") skillsRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "contact") contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (scrollToSection) scrollToSection.current = scrollHandler;

  const sectionClass =
    "relative min-h-screen flex flex-col justify-center px-4 sm:px-8 py-20  bg-cover bg-center bg-no-repeat";

  const overlayClass = "absolute inset-0 bg-black/50";

  const motionProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <div>
      {/* Hero Section */}
      <div ref={heroRef} className={sectionClass}>
        <div className={overlayClass}></div>
        <motion.div className="relative z-10" {...motionProps}>
          <Hero />
        </motion.div>
      </div>

      {/* Projects Section */}
      <div ref={projectsRef} className={sectionClass}>
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div className="relative z-10" {...motionProps}>
          <Projects />
        </motion.div>
      </div>

      {/* Skills Section */}
      <div ref={skillsRef} className={sectionClass}>
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div className="relative z-10" {...motionProps}>
          <Skills />
        </motion.div>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className={sectionClass}>
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div className="relative z-10" {...motionProps}>
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}
