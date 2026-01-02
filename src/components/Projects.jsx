import React from 'react';
import './Projects.css';

const projects = [
  { title: "Personal Portfolio", desc: "Website portfolio modern menggunakan React", tag: "REACT JS" },
  { title: "Landing Page", desc: "Landing page produk dengan UI clean", tag: "UI/UX" },
  { title: "Landing Page 2", desc: "Landing page produk dengan UI clean", tag: "FRONTEND" },
  { title: "Mini React App", desc: "Aplikasi kecil menggunakan React", tag: "PROJECT" }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Latest <span>Projects</span></h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <span className="project-tag">{project.tag}</span>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="project-arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}