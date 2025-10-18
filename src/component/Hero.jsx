import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import myPhoto from "../assets/my-photo.jpg";

export default function Hero() {
  const particles = Array.from({ length: 25 }); // floating particles

  const name = "Saurabh Singh".split("");

  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-4 md:px-16 text-center md:text-left overflow-hidden bg-gray-50 dark:bg-gray-900">
      
      {/* Floating Particles */}
      {particles.map((_, i) => {
        const size = Math.random() * 6 + 2; // 2px to 8px
        const xStart = Math.random() * 1200 - 600;
        const yStart = Math.random() * 900 - 450;
        const duration = 6 + Math.random() * 6;
        const color = ["#6366F1", "#EC4899", "#34D399", "#F59E0B"][Math.floor(Math.random() * 4)];

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              opacity: Math.random() * 0.5 + 0.3,
              filter: "blur(1px)",
            }}
            initial={{ x: xStart, y: yStart }}
            animate={{ 
              x: [xStart, xStart + Math.random() * 200 - 100, xStart],
              y: [yStart, yStart + Math.random() * 200 - 100, yStart]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: duration,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.5, opacity: 1 }}
          />
        );
      })}

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6 z-10"
      >
        {/* Name Animation */}
       <motion.h1
  className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white flex justify-center md:justify-start gap-1 overflow-hidden whitespace-nowrap"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }}
>
  {name.map((letter, index) => (
    <motion.span
      key={index}
      className="inline-block"
      variants={{
        hidden: { 
          y: letter.toLowerCase() === "g" ? -80 : -50, // g starts higher
          opacity: 0 
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 500, damping: 20 },
        },
      }}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  ))}
</motion.h1>


        {/* TypeAnimation */}
        <div className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          <TypeAnimation
            sequence={[
              "MERN Stack Developer", 2000,
              "Frontend & Backend Enthusiast", 2000,
              "React & Node.js", 2000,
              "Passionate about building modern web apps", 2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-gray-700 dark:text-gray-300 text-md sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0"
        >
          I'm a full-stack developer specializing in MERN stack, creating interactive & responsive web applications. I focus on clean UI/UX and love exploring new tech to build impactful projects.
        </motion.p>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <a
            href="/Saurabh_resume.pdf"
            download
            className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-600 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0 z-10"
      >
        <img
          src={myPhoto}
          alt="Saurabh Singh"
          className="w-[28rem] h-[28rem] sm:w-[32rem] sm:h-[32rem] md:w-[36rem] md:h-[36rem] rounded-full border-4 border-indigo-500 shadow-xl object-cover object-top"
        />
      </motion.div>
    </section>
  );
}
