import React from "react";
import custumers from "../assets/custumers.webp";
import heroPicture from "../assets/hero-picture2.webp";

const Hero = () => {
  return (
    <main className="hero-section">
      <div className="intro-text">
        <h2>Have a great time fake shopping here!</h2>
        <div className="custumers">
          <img src={custumers} alt="custumers" className="custumers" />
          <p className="custumers-text">
            <span>250,000+</span> did not shop here!
          </p>
        </div>
      </div>
      <div className="hero-images">
        <img src={heroPicture} alt="hero" className="hero-img" />
      </div>
    </main>
  );
};

export default Hero;
