import React from "react";

const Home: React.FC = () => {
  return (
    <section id="home" className="section home-section">
      <div className="container">
        <h1>Jumel Anthony labe</h1>
        <p>I am a creative developer building amazing things.</p>
        <button
          onClick={() =>
            document
              .getElementById("portfolio")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Home;
