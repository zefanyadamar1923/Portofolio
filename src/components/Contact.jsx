import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const socialLinks = [
    { icon: <FaInstagram />, url: "https://www.instagram.com/zefanyadamar" },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/zefanya-damar-aristo-susilo-30791a23b",
    },
    { icon: <FaGithub />, url: "https://github.com/zefanyadamar1923" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/share/15jzQ9jFEe/" },
    { icon: <FaXTwitter />, url: "https://x.com/Damararisto1" },
    { icon: <FaEnvelope />, url: "mailto:zefanyadamar@gmail.com" },
  ];

  return (
    <section
      id="contact"
      /* Perbaikan 1: Gunakan h-screen jika ingin pas satu layar, atau pastikan bg konsisten */
      className="relative min-h-screen py-24 px-[10%] text-center text-white bg-[#050508] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* EFEK CAHAYA DI PINGGIR KANAN - Dibuat lebih besar agar menutup area bawah */}
      <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-125 h-125 bg-brand-purple/20 blur-[130px] rounded-full z-0"></div>

      {/* EFEK CAHAYA HALUS DI KIRI */}
      <div className="absolute top-[10%] -left-24 w-87.5 h-87.5 bg-brand-purple/10 blur-[110px] rounded-full z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Title */}
        <h2 className="text-4xl md:text-[2.5rem] font-bold mb-4">
          Contact <span className="text-brand-purple">Me</span>
        </h2>
        <p className="text-[#a0a0a0] mb-12 text-lg italic">
          Let’s connect and build something great together 🚀
        </p>

        {/* Icons Container */}
        <div className="flex justify-center gap-6 flex-wrap">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex justify-center items-center text-brand-purple text-2xl transition-all duration-400 ease-in-out hover:bg-brand-purple hover:text-white hover:-translate-y-2.5 hover:shadow-[0_10px_30px_rgba(108,92,231,0.4)]"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
