import React from "react";
import { motion } from "framer-motion";
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
    { icon: <FaFacebook />, url: "https://www.facebook.com/zefanyadamar" },
    { icon: <FaXTwitter />, url: "https://x.com/Damararisto1" },
    { icon: <FaEnvelope />, url: "mailto:zefanyadamar@gmail.com" },
  ];

  const handleSocialClick = (e, url) => {
    e.preventDefault();
    if (url.startsWith("mailto:")) {
      window.location.href = url;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-[10%] text-center text-white bg-transparent flex flex-col justify-center items-center overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto w-full glass-terminal p-12 md:p-20 rounded-4xl"
      >
        {/* Title */}
        <h2 className="text-4xl md:text-[2.5rem] font-mono font-bold mb-4">
          <span className="text-brand-blue">&gt;</span> contact<span className="text-brand-blue animate-pulse">_</span>
        </h2>
        <p className="text-[#a0a0a0] mb-12 text-lg italic">
          Let's connect and build something great together 🚀
        </p>

        {/* Icons Container */}
        <div className="flex justify-center gap-6 flex-wrap">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleSocialClick(e, link.url)}
              whileHover={{ y: -10, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex justify-center items-center text-brand-blue text-2xl transition-colors duration-400 hover:bg-brand-blue hover:text-[#050508] hover:shadow-[0_10px_30px_rgba(0,210,255,0.4)]"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
