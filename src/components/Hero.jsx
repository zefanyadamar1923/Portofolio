import React from "react";
import profileImg from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 px-[8%] flex items-center justify-center bg-[#050508] overflow-hidden"
    >
      {/* Efek Cahaya Dekoratif di Latar Belakang */}
      <div className="absolute top-[25%] left-[5%] w-100 h-100 bg-brand-purple/10 blur-[130px] rounded-full -z-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full max-w-7xl">
        {/* SISI KIRI: KONTEN TEKS */}
        <div className="flex flex-col justify-center text-left">
          <h4 className="text-brand-purple font-medium mb-2 text-xl tracking-[0.2em]">
            Hello Buds,
          </h4>

          <h1 className="text-5xl md:text-[5.5rem] font-bold mb-4 leading-[1.1] text-white tracking-tight">
            I am{" "}
            <span className="text-brand-purple [text-shadow:0_0_25px_rgba(108,92,231,0.5)]">
              Zefanya Damar <br /> Aristo Susilo
            </span>
          </h1>

          <div className="mb-8 space-y-4">
            <h5 className="text-white text-lg md:text-xl font-semibold border-l-4 border-brand-purple pl-4">
              Web & Frontend Enthusiast | Server & Virtualization Experience
            </h5>
            <p className="text-[#a0a0a0] text-base md:text-[1.05rem] leading-[1.8] max-w-xl text-justify">
              Web & Frontend Enthusiast dengan fokus pada UI modern, responsif,
              dan interaktif, serta berpengalaman dalam implementasi server dan
              virtualisasi menggunakan Proxmox VE.
            </p>
          </div>

          {/* TOMBOL KEMBAR */}
          {/* TOMBOL KEMBAR */}
          <div className="flex flex-row gap-5">
            <a
              href="/CV_Zefanya_Damar.pdf" // GANTI dengan nama file asli di folder public Anda
              download="CV_Zefanya_Damar.pdf" // Nama file saat berhasil di-download nanti
              className="bg-brand-purple text-white px-10 py-3.5 rounded-xl font-bold shadow-[0_0_20px_rgba(108,92,231,0.4)] hover:scale-105 hover:shadow-[0_0_30px_rgba(108,92,231,0.6)] transition-all duration-300 min-w-40 text-center flex items-center justify-center"
            >
              Download CV
            </a>

            <button className="bg-brand-purple text-white px-10 py-3.5 rounded-xl font-bold shadow-[0_0_20px_rgba(108,92,231,0.4)] hover:scale-105 hover:shadow-[0_0_30px_rgba(108,92,231,0.6)] transition-all duration-300 min-w-40">
              More
            </button>
          </div>
        </div>

        {/* SISI KANAN: FOTO PROFIL DENGAN FRAME NEON */}
        <div className="flex justify-center md:justify-end items-center">
          <div className="relative group p-1">
            {/* Outer Glow Effect */}
            <div className="absolute -inset-2 bg-brand-purple/30 rounded-[40px] blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

            {/* Main Image Container */}
            <div className="relative w-72 h-100 md:w-95 md:h-130 rounded-[36px] overflow-hidden border-4 border-brand-purple shadow-[0_0_40px_rgba(108,92,231,0.3)]">
              <img
                src={profileImg}
                alt="Zefanya Damar Aristo Susilo"
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />

              {/* Overlay Ungu Tipis Saat Hover */}
              <div className="absolute inset-0 bg-brand-purple/5 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
