import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen pt-20 px-[10%] flex items-center justify-center bg-[#050508] overflow-hidden"
    >
      {/* BACKGROUND GLOW SISI KANAN */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-125 h-125 bg-brand-purple/10 blur-[130px] rounded-full z-0"></div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
        <h2 className="text-4xl md:text-[2.5rem] font-bold text-white text-center mb-10">
          About <span className="text-brand-purple">Me</span>
        </h2>

        <div className="w-full bg-white/3 p-8 md:p-14 rounded-4xl border border-white/8 text-center transition-all duration-400 cursor-default hover:-translate-y-2.5 hover:bg-brand-purple/5 hover:border-brand-purple hover:shadow-[0_0_30px_rgba(108,92,231,0.2),0_10px_50px_rgba(0,0,0,0.5)] group">
          <p className="text-[1.1rem] md:text-[1.15rem] leading-[1.8] text-[#ccc] max-w-225 mx-auto transition-colors duration-300 group-hover:text-white">
            Saya adalah{" "}
            <span className="text-brand-purple font-semibold transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(108,92,231,0.5)]">
              Web & Frontend Enthusiast | Server & Virtualization Experience
            </span>{" "}
            yang berfokus pada pengembangan antarmuka modern dan responsif
            menggunakan{" "}
            <span className="text-brand-purple font-semibold transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(108,92,231,0.5)]">
              HTML, CSS, JavaScript, dan React
            </span>
            . Selain Frontend, saya memiliki pengalaman dalam{" "}
            <span className="text-brand-purple font-semibold transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(108,92,231,0.5)]">
              Implementasi Server dan Virtualisasi
            </span>{" "}
            menggunakan{" "}
            <span className="text-brand-purple font-semibold transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(108,92,231,0.5)]">
              Proxmox VE
            </span>{" "}
            pada tugas akhir, sehingga terbiasa memperhatikan aspek performa
            sistem, efisiensi sumber daya, dan pengalaman pengguna secara
            menyeluruh.
          </p>
        </div>
      </div>
    </section>
  );
}
