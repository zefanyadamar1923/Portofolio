import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Sisi Kiri: Branding Singkat */}
          <div className="footer-brand">
            <h3>
              Zefanya Damar <span>AS</span>
            </h3>
            <p>
              Membangun pengalaman digital yang modern, responsif, dan inovatif.
            </p>
          </div>

          {/* Sisi Tengah: Navigasi Cepat */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>

          {/* Sisi Kanan: Kontak Langsung */}
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            {/* Gunakan mailto: agar link berfungsi kirim email */}
            <a href="mailto:zefanyadamar@gmail.com" className="footer-email">
              Email: zefanyadamar@gmail.com
            </a>
            <p>Location: Klaten, Jawa Tengah, Indonesia</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Zefanya Damar Aristo Susilo. All rights reserved.</p>
          <div className="footer-social-mini">{/* Icon kecil opsional */}</div>
        </div>
      </div>
    </footer>
  );
}
