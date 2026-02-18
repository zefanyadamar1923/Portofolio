import React from "react";

const projects = [
  {
    title: "Tugas-BPJS-Backend-Python",
    desc: "Implementasi backend integrasi BPJS menggunakan bahasa pemrograman Python.",
    tag: "PYTHON",
  },
  {
    title: "Tugas-BPJS-Backend-PHP",
    desc: "Sistem backend BPJS yang dibangun menggunakan PHP dan template engine Blade.",
    tag: "PHP / BLADE",
  },
  {
    title: "Portofolio",
    desc: "Project website portofolio pribadi untuk menampilkan skill dan hasil karya.",
    tag: "CSS / JS",
  },
  {
    title: "Tugas-BPJS",
    desc: "Aplikasi frontend monitoring data BPJS menggunakan framework Vue.js.",
    tag: "VUE JS",
  },
  {
    title: "Surat-Pernyataan-Rawat-Inap",
    desc: "Aplikasi sistem informasi untuk manajemen surat pernyataan rawat inap.",
    tag: "VUE JS",
  },
  {
    title: "API-RS-Kristen-Ngesti-Waluyo",
    desc: "Pengembangan sistem API khusus untuk kebutuhan Rumah Sakit Kristen Ngesti Waluyo.",
    tag: "C++ / BACKEND",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-[10%] bg-[#050508] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-125 h-125 bg-brand-purple/10 blur-[130px] rounded-full z-0"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <h2 className="text-[2.5rem] md:text-5xl font-bold text-white text-center mb-4">
          Latest{" "}
          <span className="text-brand-purple [text-shadow:0_0_15px_rgba(108,92,231,0.3)]">
            Projects
          </span>
        </h2>

        {/* Grid 3 kolom agar 6 kotak (genap) terlihat sangat rapi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white/3 p-10 rounded-4xl border border-white/8 transition-all duration-500 cursor-pointer 
              hover:bg-brand-purple/5 
              hover:border-brand-purple 
              hover:-translate-y-3 
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(108,92,231,0.1)] 
              group overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-purple blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              <div>
                <span className="text-brand-purple text-[0.75rem] font-bold tracking-[0.2em] uppercase transition-all duration-300 group-hover:[text-shadow:0_0_8px_rgba(108,92,231,0.5)]">
                  {project.tag}
                </span>

                <h3 className="mt-5 mb-3 text-xl md:text-2xl text-white font-bold transition-colors group-hover:text-white">
                  {project.title}
                </h3>
                <p className="text-[#a0a0a0] text-[0.9rem] leading-relaxed transition-colors group-hover:text-gray-200">
                  {project.desc}
                </p>
              </div>

              <div className="absolute top-10 right-10 text-brand-purple text-2xl opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110">
                ↗
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
