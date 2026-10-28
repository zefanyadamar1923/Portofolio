import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portofolio",
    desc: "Project website portofolio pribadi untuk menampilkan skill dan hasil karya.",
    tag: "CSS / JS",
  },
  {
    title: "Implementasi Virtualisasi Server Metro Global News",
    desc: "Membangun infrastruktur server internal menggunakan Proxmox VE, Docker, dan sistem monitoring real-time (Netdata & Portainer) untuk meningkatkan efisiensi layanan media.",
    tag: "Proxmox / Docker",
  },
  {
    title: "BPJS Backend Python",
    desc: "Implementasi backend integrasi BPJS menggunakan bahasa pemrograman Python.",
    tag: "PYTHON",
  },
  {
    title: "Frontend BPJS",
    desc: "Aplikasi frontend monitoring data BPJS menggunakan framework Vue.js.",
    tag: "VUE JS",
  },
  {
    title: "Surat Pernyataan Rawat Inap",
    desc: "Aplikasi sistem informasi untuk manajemen surat pernyataan rawat inap.",
    tag: "VUE JS",
  },
  {
    title: "API RSK Ngesti Waluyo",
    desc: "Pengembangan sistem API khusus untuk kebutuhan Rumah Sakit Kristen Ngesti Waluyo.",
    tag: "C++ / BACKEND",
  },
  {
    title: "Asuhan Gizi RSK Ngesti Waluyo",
    desc: "Mengembangkan REST API dan sistem backend menggunakan TypeScript dan Express.js untuk modul pelayanan asuhan gizi serta rekam medis pasien di rumah sakit, guna mendukung pencatatan nutrisi klinis yang akurat dan terintegrasi.",
    tag: "Typescript",
  },
  {
    title: "SIMRS Backend & Management System",
    desc: "Mengembangkan sistem backend dan modul operasional Rumah Sakit menggunakan Laravel, mencakup pengelolaan data pendaftaran pasien, rekam medis, dan manajemen informasi layanan kesehatan secara terintegrasi.",
    tag: "PHP Laravel",
  },
  {
    title: "SIARSIP UPTD Puskesmas Bansari",
    desc: "Membangun Sistem Informasi Arsip Surat (SIARSIP) berbasis web untuk Puskesmas Bansari guna mengoptimalkan manajemen pengelolaan surat masuk, surat keluar, disposisi, dan pelaporan secara digital.",
    tag: "Javascript",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-[10%] bg-transparent flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[2.5rem] md:text-5xl font-mono font-bold text-white text-center mb-4"
        >
          <span className="text-brand-blue">&gt;</span> projects<span className="text-brand-blue animate-pulse">_</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full"
        >
          {projects.map((project, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="relative glass-terminal p-10 rounded-4xl transition-all duration-500 cursor-pointer 
              hover:bg-brand-blue/5 
              hover:border-brand-blue 
              hover:-translate-y-3 
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(0,210,255,0.2)] 
              group overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-blue blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              <div>
                <span className="text-brand-blue text-[0.75rem] font-bold tracking-[0.2em] uppercase transition-all duration-300 group-hover:[text-shadow:0_0_8px_rgba(0,210,255,0.5)]">
                  {project.tag}
                </span>

                <h3 className="mt-5 mb-3 text-xl md:text-2xl text-white font-bold transition-colors group-hover:text-white">
                  {project.title}
                </h3>
                <p className="text-[#a0a0a0] text-[0.9rem] leading-relaxed transition-colors group-hover:text-gray-200">
                  {project.desc}
                </p>
              </div>

              <div className="absolute top-10 right-10 text-brand-blue text-2xl opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110">
                ↗
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
