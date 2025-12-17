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
      tags: ["Python", "SQLite", "JS"]
    },
    {
      title: "CLEARCAUSE",
      description:
        "A Web-Based Transparent Charity Donation Platform With Real-Time Tracking And Reporting.",
      image: clearcauseImage,
      repoLink: "https://github.com/ClydPardillo/CLEARCAUSE---CAPSTONE.git",
      demoLink: "",
      tags: ["React", "Node.js", "Supabase"]
    },
    {
      title: "HomeOwners Associations",
      description: "A management system for community homeowner associations designed to streamline operations.",
      image: homeownersImage,
      repoLink: "https://github.com/ClydPardillo/HomeownersAssociation.git",
      demoLink: "",
      tags: ["C++", "MySQL"]
    },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 bg-slate-50">
      <div className="w-full max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-16 inline-block relative after:content-[''] after:block after:w-20 after:h-1.5 after:bg-accent after:mx-auto after:mt-4 after:rounded-full">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group h-full">
              <div className="relative overflow-hidden h-56 w-full bg-gray-200">
                <div className="absolute inset-0 bg-neutral-dark/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow text-left">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold text-primary bg-blue-50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-neutral-dark mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex gap-3 mt-auto">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-lg text-sm font-semibold bg-primary text-white text-center hover:bg-primary-dark shadow-sm hover:shadow transition-all"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-lg text-sm font-semibold border border-gray-200 bg-white text-neutral-dark text-center hover:bg-gray-50 hover:border-gray-300 transition-all"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;