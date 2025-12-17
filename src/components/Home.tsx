import React from "react";
import profileImage from "../assets/profile.jpg";

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-white pt-20 pb-20 px-6">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="relative mb-10 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <img
            src={profileImage}
            alt="Jumel Anthony Labe"
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-xl transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-neutral-dark">
          Jumel Anthony <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Labe</span>
        </h1>
        
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-gray-500 font-light leading-relaxed">
          I am a creative developer building <span className="font-semibold text-gray-700">user-friendly</span> and <span className="font-semibold text-gray-700">visually appealing</span> applications.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="px-8 py-4 text-lg font-bold text-white bg-primary rounded-full hover:bg-primary-dark hover:-translate-y-1 shadow-lg shadow-primary/30 transition-all duration-300"
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </button>
          
          <button
            className="px-8 py-4 text-lg font-bold text-neutral-dark bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:-translate-y-1 shadow-sm hover:shadow-md transition-all duration-300"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;