import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPostman,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

export default function Skills() {
  const technicalSkills = [
    { name: "React", level: 90, icon: <FaReact className="text-sky-500" /> },
    { name: "Node.js", level: 80, icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express", level: 75, icon: <SiExpress className="text-gray-600" /> },
    { name: "MongoDB", level: 85, icon: <SiMongodb className="text-green-700" /> },
    { name: "JavaScript", level: 95, icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Framer Motion", level: 70, icon: <SiFramer className="text-pink-500" /> },
    { name: "Git", level: 90, icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Postman", level: 80, icon: <SiPostman className="text-orange-400" /> },
    { name: "HTML5", level: 95, icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-blue-600" /> },
  ];
  

  const softSkills = [
    { name: "Communication", level: 90 },
    { name: "Teamwork", level: 85 },
    { name: "Problem Solving", level: 80 },
    { name: "Adaptability", level: 75 },
    { name: "Creativity", level: 88 },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 sm:px-10 py-24 bg-gray-50 dark:bg-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16"
      >
        My Skills
      </motion.h2>

      {/* Technical Skills */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technicalSkills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl">{skill.icon}</div>
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="ml-auto font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full h-5 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-5 bg-indigo-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-2xl font-semibold mb-8 text-center">Soft Skills</h3>
       <div className="flex flex-wrap justify-center gap-6">
  {softSkills.map((skill, i) => (
    <motion.div
      key={i}
      className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex-1 min-w-[120px] max-w-[140px] h-36 justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
    >
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20">
          <circle
            className="text-gray-300 dark:text-gray-700"
            strokeWidth="5"
            stroke="currentColor"
            fill="transparent"
            r="36"
            cx="40"
            cy="40"
          />
          <motion.circle
            className="text-indigo-500"
            strokeWidth="5"
            stroke="currentColor"
            fill="transparent"
            r="36"
            cx="40"
            cy="40"
            initial={{ strokeDasharray: "0 226" }}
            whileInView={{ strokeDasharray: `${(skill.level / 100) * 226} 226` }}
            transition={{ duration: 1 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-semibold text-sm">
          {skill.level}%
        </div>
      </div>
      <span className="mt-2 font-medium text-center">{skill.name}</span>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}
