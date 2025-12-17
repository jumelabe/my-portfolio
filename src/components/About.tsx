import React from 'react';

const About: React.FC = () => {
  const skillCategories = [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "Java", "TypeScript"],
    },
    {
      category: "Front End",
      items: ["HTML", "CSS", "React", "Tailwind CSS"],
    },
    {
      category: "Database",
      items: ["Supabase", "MySQL", "SQLite3"],
    },
    {
      category: "Tools",
      items: ["Visual Studio Code", "GitHub", "Vercel"],
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I am a 4th-year BSIT student at the University of Cebu. I am a
          passionate developer who loves creating user-friendly and visually
          appealing applications. Currently, I am expanding my skills in React
          and Tailwind CSS to build modern web interfaces.
        </p>

        <div className="skills-container">
          <h3>Skills & Technologies</h3>
          {skillCategories.map((group, index) => (
            <div key={index} className="skill-category">
              <h4>{group.category}</h4>
              <div className="skills-grid">
                {group.items.map((skill, idx) => (
                  <span key={idx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;