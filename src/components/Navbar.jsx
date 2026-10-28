import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-5 px-[5%] md:px-[8%] z-50 transition-all duration-300 ${scrolled ? 'bg-[#101522]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}
    >
      {/* Logo */}
      <div className="text-xl font-extrabold tracking-wider text-white cursor-pointer group flex-1">
        WEB{" "}
        <span className="text-brand-blue [text-shadow:0_0_10px_#00d2ff] transition-all duration-300 group-hover:[text-shadow:0_0_20px_#00d2ff]">
          PORTOFOLIO
        </span>
      </div>

      {/* Pill Menu (Desktop) */}
      <div className="hidden md:flex justify-center flex-1">
        <ul className="flex items-center gap-8 glass px-8 py-3 rounded-full">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item}`}
                className="text-[#a0a0a0] font-medium text-[0.95rem] transition-all duration-300 hover:text-white hover:[text-shadow:0_0_10px_#00d2ff] capitalize"
              >
                {item}
              </a>
              <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0.5 bg-brand-blue shadow-[0_0_10px_#00d2ff] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side / Button */}
      <div className="hidden md:flex justify-end flex-1">
        <a 
          href="#contact" 
          className="border border-white/20 px-6 py-2 rounded-xl text-sm font-medium text-white hover:bg-white/5 hover:border-white/40 transition-colors duration-300"
        >
          Get in Touch
        </a>
      </div>

      {/* Burger Menu (Mobile) */}
      <div
        className="group flex flex-col gap-1.5 cursor-pointer md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2 bg-brand-blue shadow-[0_0_8px_#00d2ff]" : ""}`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2 bg-brand-blue shadow-[0_0_8px_#00d2ff]" : ""}`}
        ></div>
      </div>

      {/* Mobile Menu Content */}
      <ul
        className={`
        fixed top-0 flex h-screen w-[75%] flex-col items-center justify-center gap-10 bg-[#101522]/95 backdrop-blur-xl border-l border-white/10 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
        md:hidden
        ${isOpen ? "right-0 shadow-[-20px_0_50px_rgba(0,0,0,0.8)]" : "-right-full"}
      `}
      >
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <li key={item} className="relative group">
            <a
              href={`#${item}`}
              className="text-[#a0a0a0] font-medium text-[1rem] transition-all duration-300 hover:text-white hover:[text-shadow:0_0_10px_#00d2ff] capitalize"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          </li>
        ))}
        <li>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="border border-brand-blue text-brand-blue px-6 py-2 rounded-xl text-sm font-medium hover:bg-brand-blue/10 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </li>
      </ul>
    </motion.nav>
  );
}
