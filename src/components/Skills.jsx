import React from "react";

const skillData = [
  { category: "Frontend", tools: ["HTML", "CSS", "VUE", "React"] },
  { category: "Backend", tools: ["Python", "PHP", "JavaScript"] },
  { category: "System", tools: ["Proxmox VE", "MikroTik", "Linux", "Docker"] },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 px-[10%] bg-[#050508] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Efek Glow di pinggir kanan (Sesuai permintaan sebelumnya) */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-100 h-100 bg-brand-purple/10 blur-[120px] rounded-full z-0"></div>

      {/* PENTING: Gunakan max-w-7xl (atau sesuaikan dengan max-w yang ada di About.jsx) 
          agar ujung kiri kotak Frontend dan ujung kanan kotak System 
          sejajar lurus dengan kotak About.
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-[2.5rem] md:text-5xl font-bold text-white text-center mb-16">
          Technical{" "}
          <span className="text-brand-purple [text-shadow:0_0_15px_rgba(108,92,231,0.3)]">
            Tools
          </span>
        </h2>

        {/* Grid Container: 
            Gap diperkecil (gap-6) agar 3 kotak bisa muat dalam lebar yang sama dengan 1 kotak About besar.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/3 p-8 md:p-10 rounded-4xl border border-white/8 transition-all duration-500 cursor-default
              hover:bg-brand-purple/5 
              hover:border-brand-purple 
              hover:-translate-y-3 
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(108,92,231,0.1)]
              group"
            >
              {/* Category Title */}
              <h4 className="text-xl md:text-2xl font-bold text-white mb-8 transition-all duration-300 group-hover:text-brand-purple group-hover:[text-shadow:0_0_10px_rgba(108,92,231,0.4)]">
                {item.category}
              </h4>

              {/* Tags Tools */}
              <div className="flex flex-wrap gap-3">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-white/5 px-5 py-2.5 rounded-xl text-[0.9rem] text-[#a0a0a0] border border-white/5 transition-all duration-300 
                    hover:text-white 
                    hover:bg-brand-purple/20 
                    hover:border-brand-purple/50 
                    hover:scale-105"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
