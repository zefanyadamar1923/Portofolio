import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center py-6 px-[8%] bg-[#050508]/90 backdrop-blur-[15px] border-b border-white/5 z-1000">
      {/* Logo */}
      <div className="text-xl md:text-2xl font-extrabold tracking-wider text-white cursor-pointer group">
        WEB{" "}
        <span className="text-brand-purple [text-shadow:0_0_10px_rgba(108,92,231,0.5)] transition-all duration-300 group-hover:[text-shadow:0_0_20px_rgba(108,92,231,0.8)]">
          PORTOFOLIO
        </span>
      </div>

      {/* Burger Menu (Mobile) */}
      <div
        className="group flex flex-col gap-1.25 cursor-pointer md:hidden z-1001"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-6.25 h-0.75 bg-white rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2 bg-brand-purple shadow-[0_0_8px_#6c5ce7]" : ""}`}
        ></div>
        <div
          className={`w-6.25 h-0.75 bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
        ></div>
        <div
          className={`w-6.25 h-0.75 bg-white rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2 bg-brand-purple shadow-[0_0_8px_#6c5ce7]" : ""}`}
        ></div>
      </div>

      {/* Nav Links */}
      <ul
        className={`
        fixed top-0 flex h-screen w-[75%] flex-col items-center justify-center gap-10 bg-[#0a0a14] border-l border-white/10 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
        md:static md:h-auto md:w-auto md:flex-row md:bg-transparent md:backdrop-blur-none md:gap-8.75 md:border-none
        ${isOpen ? "right-0 shadow-[-20px_0_50px_rgba(0,0,0,0.8)]" : "-right-full md:right-0"}
      `}
      >
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <li key={item} className="relative group">
            <a
              href={`#${item}`}
              className="text-[#a0a0a0] font-medium text-[1rem] transition-all duration-300 hover:text-white hover:[text-shadow:0_0_10px_#6c5ce7] capitalize"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
            {/* Efek Garis Bawah Menyala */}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-brand-purple shadow-[0_0_10px_#6c5ce7] transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
