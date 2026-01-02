import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        <div className="about-card">
          <p>
            Saya adalah{" "}
            <span>
              Web & Frontend Enthusiast | Server & Virtualization Experience
            </span>{" "}
            yang berfokus pada pengembangan antarmuka modern dan responsif
            menggunakan <span>HTML, CSS, JavaScript, dan React</span>. Selain
            Frontend, saya memiliki pengalaman dalam{" "}
            <span>Implementasi Server dan Virtualisasi</span> menggunakan{" "}
            <span>Proxmox VE</span> pada tugas akhir, sehingga terbiasa
            memperhatikan aspek performa sistem, efisiensi sumber daya, dan
            pengalaman pengguna secara menyeluruh.
          </p>
        </div>
      </div>
    </section>
  );
}
