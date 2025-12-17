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
    <section id="about" className="py-24 md:py-32 px-6 bg-slate-50 relative">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark inline-block relative after:content-[''] after:block after:w-20 after:h-1.5 after:bg-accent after:mx-auto after:mt-4 after:rounded-full">
            About Me
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Bio Section */}
          <div className="w-full md:w-1/2">
             <h3 className="text-2xl font-bold text-neutral-dark mb-6">Who am I?</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I am a 4th-year BSIT student at the University of Cebu. I am a
              passionate developer who loves creating user-friendly and visually
              appealing applications. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently, I am expanding my skills in <span className="font-semibold text-primary">React</span> and <span className="font-semibold text-primary">Tailwind CSS</span> to build modern web interfaces that are both performant and accessible.
            </p>
          </div>

          {/* Skills Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-neutral-dark mb-8">Skills & Technologies</h3>
            <div className="space-y-8">
              {skillCategories.map((group, index) => (
                <div key={index}>
                  <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, idx) => (
                      <span key={idx} className="bg-white text-gray-700 px-4 py-2 rounded-lg font-medium text-sm border border-gray-200 shadow-sm hover:border-primary hover:text-primary hover:shadow-md transition-all duration-200 cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;