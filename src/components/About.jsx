import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen pt-20 px-[10%] flex items-center justify-center bg-transparent overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-[2.5rem] font-mono font-bold text-white text-center mb-10">
          <span className="text-brand-blue">&gt;</span> about<span className="text-brand-blue animate-pulse">_</span>
        </h2>

        <div className="w-full glass-terminal rounded-2xl overflow-hidden flex flex-col group border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Terminal Header */}
          <div className="bg-[#0a0f18]/80 backdrop-blur-md px-4 py-3 flex items-center border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="flex-1 text-center text-[#808b9f] text-xs font-mono tracking-wider">
              bash - about_me.sh
            </div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-8 md:p-14 transition-all duration-400 bg-[#101522]/50">
            <p className="text-[1.1rem] md:text-[1.15rem] leading-[1.8] text-[#ccc] max-w-3xl mx-auto font-mono text-left transition-colors duration-300 group-hover:text-white/90">
              <span className="text-[#27c93f] mr-2">echo</span> 
              "Saya adalah{" "}
              <span className="text-brand-blue font-semibold transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(0,210,255,0.8)]">
                Web & Frontend Enthusiast | Server & Virtualization Experience
              </span>{" "}
              yang berfokus pada pengembangan antarmuka modern dan responsif
              menggunakan{" "}
              <span className="text-brand-blue font-semibold transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(0,210,255,0.8)]">
                HTML, CSS, JavaScript, dan React
              </span>
              . Selain Frontend, saya memiliki pengalaman dalam{" "}
              <span className="text-brand-blue font-semibold transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(0,210,255,0.8)]">
                Implementasi Server dan Virtualisasi
              </span>{" "}
              menggunakan{" "}
              <span className="text-brand-blue font-semibold transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(0,210,255,0.8)]">
                Proxmox VE
              </span>{" "}
              pada tugas akhir, sehingga terbiasa memperhatikan aspek performa
              sistem, efisiensi sumber daya, dan pengalaman pengguna secara
              menyeluruh."
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
