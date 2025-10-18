import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Folder, Code2, Mail } from "lucide-react";

export default function Navbar({ onLinkClick }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { name: "Home", key: "home", icon: <Home size={18} /> },
    { name: "Projects", key: "projects", icon: <Folder size={18} /> },
    { name: "Skills", key: "skills", icon: <Code2 size={18} /> },
    { name: "Contact", key: "contact", icon: <Mail size={18} /> },
  ];

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="w-full sticky top-0 z-50 flex justify-center mt-6"
    >
      <div className="flex justify-between md:justify-center items-center w-full max-w-6xl px-4 md:px-10 backdrop-blur-lg bg-white/70 border border-gray-200 shadow-lg rounded-full py-3">
        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center">
          {links.map((link, i) => (
            <motion.button
              key={i}
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
              onClick={() => {
                setActive(link.key);
                onLinkClick(link.key);
              }}
              className={`flex items-center gap-2 text-base font-semibold transition-all ${
                active === link.key
                  ? "text-indigo-600"
                  : "text-gray-800 hover:text-indigo-500"
              }`}
            >
              {link.icon}
              {link.name}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setOpen(!open)}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-gray-900 mb-1"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-gray-900 mb-1"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-gray-900"
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-1/2 -translate-x-1/2 w-11/12 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 px-6 py-4 flex flex-col gap-4"
          >
            {links.map((link, i) => (
              <motion.button
                key={i}
                whileHover={{ x: 5 }}
                onClick={() => {
                  onLinkClick(link.key);
                  setActive(link.key);
                  setOpen(false);
                }}
                className={`flex items-center gap-3 w-full py-2 text-left rounded-md transition ${
                  active === link.key
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-800 hover:text-indigo-500"
                }`}
              >
                {link.icon}
                {link.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
