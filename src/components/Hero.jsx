import React from "react";
import profileImg from "../assets/profile.png";
import { motion } from "framer-motion";
import { FaReact, FaLinux } from "react-icons/fa";
import { SiTailwindcss, SiProxmox } from "react-icons/si";
import { PiCertificateBold } from "react-icons/pi";
import { TbBrandVscode } from "react-icons/tb";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-10 px-[8%] flex flex-col items-center justify-start bg-transparent overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-7xl relative z-10 mt-4">
        
        {/* SISI KIRI: KONTEN TEKS */}
        <motion.div 
          className="flex flex-col justify-center text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-[4rem] lg:text-[5rem] font-bold mb-1 leading-[1.1] text-white tracking-tight">
            Zefanya <br/>
            <span className="text-brand-blue">
              Damar Aristo Susilo
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-10 mt-6 flex items-start gap-4">
            <div className="w-1 h-[6.5rem] bg-brand-blue rounded-full shadow-[0_0_10px_#00d2ff]"></div>
            <div className="flex flex-col gap-2">
              <h5 className="text-white text-lg font-semibold">
                Web & Frontend Enthusiast | Server & Virtualization Experience
              </h5>
              <p className="text-[#a0a0a0] text-base md:text-[1.05rem] leading-[1.6] max-w-lg text-justify">
                Web & Frontend Enthusiast dengan fokus pada UI modern, responsif,
                dan interaktif, serta berpengalaman dalam implementasi server dan
                virtualisasi menggunakan Proxmox VE.
              </p>
            </div>
          </motion.div>

          {/* TOMBOL KEMBAR */}
          <motion.div variants={itemVariants} className="flex flex-row gap-4">
            <a
              href="/CV_Zefanya Damar Aristo Susilo_Staff IT.pdf"
              download="CV_Zefanya Damar Aristo Susilo_Staff IT.pdf"
              className="relative overflow-hidden group bg-transparent border border-brand-blue text-brand-blue px-8 py-3 rounded-xl font-medium shadow-[0_0_15px_rgba(0,210,255,0.15)] hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] transition-all duration-300 min-w-36 text-center"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Download CV</span>
              <div className="absolute inset-0 bg-brand-blue/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>

            <button className="bg-[#1a2235] border border-white/10 text-white px-8 py-3 rounded-xl font-medium hover:bg-[#232d45] hover:border-white/20 transition-all duration-300 min-w-32 cursor-pointer">
              More
            </button>
          </motion.div>
        </motion.div>

        {/* SISI KANAN: FOTO PROFIL TERMINAL WINDOW */}
        <motion.div 
          className="flex justify-center lg:justify-end items-center mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <div className="relative w-full max-w-[26rem]">
            {/* Terminal Window Wrapper */}
            <div className="glass-terminal rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col relative">
              
              {/* Terminal Header */}
              <div className="bg-[#0a0f18]/80 backdrop-blur-md px-4 py-3 flex items-center border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="flex-1 text-center text-[#808b9f] text-xs font-mono tracking-wider">
                  localhost:~
                </div>
              </div>

              {/* Terminal Body / Image */}
              <div className="p-4 bg-[#101522]/50">
                <div className="relative rounded-xl overflow-hidden shadow-inner aspect-[3/4]">
                  <img
                    src={profileImg}
                    alt="Zefanya Damar Aristo Susilo"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle Scanline Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20"></div>
                </div>
              </div>

              {/* Live Status Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-1.5 rounded-full border border-white/10 flex items-center gap-2 shadow-lg">
                <span className="text-xs text-white/80 font-medium">Live System Status</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27c93f] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#27c93f]"></span>
                </span>
              </div>

            </div>
            
            {/* Ambient Glow behind window */}
            <div className="absolute inset-0 bg-brand-blue/10 blur-[80px] -z-10 rounded-full"></div>
          </div>
        </motion.div>
      </div>

      {/* BAGIAN BAWAH: KARTU MINI (Skills Terminal & Certifications) */}
      <motion.div 
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {/* Skills Terminal Card */}
        <div className="glass-terminal p-6 rounded-2xl border border-white/10 group">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-bold text-lg">Skills Terminal</h3>
            <span className="text-white/40 text-sm">~</span>
          </div>
          
          <div className="font-mono text-sm text-[#a0a0a0] mb-6 space-y-2">
            <p><span className="text-[#27c93f]">&gt;</span> zefanya@portfolio:~$ ping skillsets ...</p>
            <p><span className="text-[#27c93f]">&gt;</span> Pinging skillsets.server [127.0.0.1] ...</p>
          </div>

          <div className="grid grid-cols-2 gap-4 font-mono text-sm">
            <div className="flex items-center gap-2 text-white/80 group-hover:text-brand-blue transition-colors">
              <FaReact className="text-[#61dafb] text-lg" /> [React]
            </div>
            <div className="flex items-center gap-2 text-white/80 group-hover:text-brand-blue transition-colors">
              <SiTailwindcss className="text-[#38bdf8] text-lg" /> [Tailwind CSS]
            </div>
            <div className="flex items-center gap-2 text-white/80 group-hover:text-brand-blue transition-colors">
              <SiProxmox className="text-[#e57000] text-lg" /> [Proxmox VE]
            </div>
            <div className="flex items-center gap-2 text-white/80 group-hover:text-brand-blue transition-colors">
              <FaLinux className="text-[#fcc624] text-lg" /> [Linux Bash]
            </div>
          </div>
        </div>

        {/* Top Certifications Card */}
        <div className="glass-terminal p-6 rounded-2xl border border-white/10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-5 bg-brand-blue rounded-full"></div>
            <h3 className="text-white font-bold text-lg">Top Focus Areas</h3>
          </div>
          
          <div className="flex gap-4 items-center">
            <div className="w-14 h-14 rounded-xl bg-[#61dafb]/10 border border-[#61dafb]/30 flex items-center justify-center text-[#61dafb] text-2xl shadow-[0_0_15px_rgba(97,218,251,0.2)]">
              <FaReact />
            </div>
            <div className="w-14 h-14 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8] text-2xl">
              <SiTailwindcss />
            </div>
            <div className="w-14 h-14 rounded-xl bg-[#e57000]/10 border border-[#e57000]/30 flex items-center justify-center text-[#e57000] text-2xl">
              <PiCertificateBold />
            </div>
            <div className="w-14 h-14 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue text-2xl">
              <TbBrandVscode />
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
