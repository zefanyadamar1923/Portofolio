import React from "react";
import "./Skills.css";

const skillData = [
  { category: "Frontend", tools: ["HTML", "CSS", "VUE", "React"] },
  { category: "Backend", tools: ["Python", "PHP", "JavaScript"] },
  { category: "System", tools: ["Proxmox VE", "MikroTik", "Linux", "Docker"] },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">
        Technical <span>Tools</span>
      </h2>
      <div className="skills-grid">
        {skillData.map((item, idx) => (
          <div key={idx} className="skill-card">
            <h4>{item.category}</h4>
            <div className="tool-list">
              {item.tools.map((tool) => (
                <span key={tool} className="tool-tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
