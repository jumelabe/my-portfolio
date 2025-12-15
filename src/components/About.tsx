import React from 'react';

const About: React.FC = () => {
  const skills = [
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Tailwind CSS",
    "Supabase",
    "MySQL",
    "SQLite3",
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
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;