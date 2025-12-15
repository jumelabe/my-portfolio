import React from "react";
import profileImage from "../assets/profile.jpg";

const Home: React.FC = () => {
  return (
    <section id="home" className="section home-section">
      <div className="container">
        <img
          src={profileImage}
          alt="Jumel Anthony Labe"
          className="home-profile-img"
        />
        <h1>Jumel Anthony Labe</h1>
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
