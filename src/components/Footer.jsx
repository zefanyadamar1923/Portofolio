import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#050508]/80 backdrop-blur-xl px-[10%] pt-20 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-left">
          {/* Sisi Kiri: Branding */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Zefanya Damar <span className="text-brand-blue [text-shadow:0_0_10px_rgba(0,210,255,0.5)]">AS</span>
            </h3>
            <p className="text-[#a0a0a0] leading-relaxed max-w-75">
              Membangun pengalaman digital yang modern, responsif, dan inovatif.
            </p>
          </div>

          {/* Sisi Tengah: Quick Links */}
          <div className="md:pl-10">
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {["home", "about", "skills", "projects"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-[#a0a0a0] transition-all duration-300 hover:text-brand-blue hover:pl-2 block capitalize"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sisi Kanan: Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Get In Touch</h4>
            <a
              href="mailto:zefanyadamar@gmail.com"
              className="text-brand-blue font-medium transition-all duration-300 hover:text-white block mb-3 hover:[text-shadow:0_0_8px_rgba(0,210,255,0.8)]"
            >
              Email: zefanyadamar@gmail.com
            </a>
            <p className="text-[#a0a0a0]">
              Location: Klaten, Jawa Tengah, Indonesia
            </p>
          </div>
        </div>

        {/* Baris Bawah (Copyright) */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-[#666] text-sm italic">
            &copy; 2026 Zefanya Damar Aristo Susilo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
