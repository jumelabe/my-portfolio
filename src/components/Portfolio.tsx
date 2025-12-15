import React from "react";
import sitinImage from "../assets/computer.jpg";
import clearcauseImage from "../assets/Featured Campaign Section.png";
import homeownersImage from "../assets/homeowners.jpg";

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Sit-in Monitoring System",
      description:
        "A comprehensive system for tracking and managing student laboratory sit-in sessions.",
      image: sitinImage,
      repoLink: "https://github.com/jumelabe/sit-in_monitoring_system.git",
      demoLink: "",
    },
    {
      title: "CLEARCAUSE",
      description:
        "A Web-Based Transparent Charity Donation Platform With Real-Time Tracking And Reporting.",
      image: clearcauseImage,
      repoLink: "https://github.com/ClydPardillo/CLEARCAUSE---CAPSTONE.git",
      demoLink: "",
    },
    {
      title: "HomeOwners Associations",
      description: "A management system for community homeowner associations.",
      image: homeownersImage,
      repoLink: "https://github.com/ClydPardillo/HomeownersAssociation.git",
      demoLink: "",
    },
  ];

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="portfolio-links">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link btn-demo"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
