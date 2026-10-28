import React from "react";
import { motion } from "framer-motion";

const skillData = [
  { category: "Frontend", tools: ["HTML", "CSS", "VUE", "React"] },
  { category: "Backend", tools: ["Python", "PHP", "JavaScript"] },
  { category: "System", tools: ["Proxmox VE", "MikroTik", "Linux", "Docker"] },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 px-[10%] bg-transparent flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[2.5rem] md:text-5xl font-mono font-bold text-white text-center mb-16"
        >
          <span className="text-brand-blue">&gt;</span> tools<span className="text-brand-blue animate-pulse">_</span>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skillData.map((item, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="glass-terminal p-8 md:p-10 rounded-4xl transition-all duration-500 cursor-default
              hover:bg-brand-blue/10 
              hover:border-brand-blue 
              hover:-translate-y-3 
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(0,210,255,0.2)]
              group"
            >
              <h4 className="text-xl md:text-2xl font-bold text-white mb-8 transition-all duration-300 group-hover:text-brand-blue group-hover:[text-shadow:0_0_10px_rgba(0,210,255,0.6)]">
                {item.category}
              </h4>

              <div className="flex flex-wrap gap-3">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-white/5 px-5 py-2.5 rounded-xl text-[0.9rem] text-[#a0a0a0] border border-white/5 transition-all duration-300 
                    hover:text-white 
                    hover:bg-brand-blue/20 
                    hover:border-brand-blue/50 
                    hover:scale-105"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
