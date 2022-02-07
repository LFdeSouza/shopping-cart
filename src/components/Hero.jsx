import React from "react";
import custumers from "../assets/custumers.webp";
import heroPicture from "../assets/hero-picture2.webp";

const Hero = () => {
  return (
    <div className="home-background">
      <div className="container p-5">
        <div className="d-md-flex gap-5">
          <div className="intro-text mt-5">
            <h2 className="display-4 fw-bold">
              Have a great time fake shopping here!
            </h2>
            <div className="custumers">
              <img src={custumers} alt="custumers" className="custumers-img" />
              <p className="custumers-text">
                <span>250,000+</span> did not shop here!
              </p>
            </div>
          </div>
          <div className="hero-images">
            <img src={heroPicture} alt="hero" className="hero-img img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
  {
    /* return (
    <main className="hero-section">
      <div className="intro-text">
        <h2>Have a great time fake shopping here!</h2>
        <div className="custumers">
          <img src={custumers} alt="custumers" className="custumers-img" />
          <p className="custumers-text">
            <span>250,000+</span> did not shop here!
          </p>
        </div>
      </div>
      <div className="hero-images">
        <img src={heroPicture} alt="hero" className="hero-img" />
      </div>
    </main>
  ); */
  }
};

export default Hero;
