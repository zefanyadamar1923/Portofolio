import React from "react";
import "./Hero.css";
import profileImg from "../assets/profile.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="reveal">Hello Buds,</p>
          <h1 className="glow-text">
            I am <span>Zefanya Damar Aristo Susilo</span>
          </h1>
          <p className="desc-title">
            Web & Frontend Enthusiast | Server & Virtualization Experience
          </p>
          <p className="main-desc">
            Web & Frontend Enthusiast dengan fokus pada UI modern, responsif,
            dan interaktif, serta berpengalaman dalam implementasi server dan
            virtualisasi menggunakan Proxmox VE.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">Download CV</button>
            <button className="btn-primary">More</button>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img src={profileImg} alt="Zefanya Damar" />
          </div>
        </div>
      </div>
    </section>
  );
}
