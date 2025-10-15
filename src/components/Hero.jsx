import React from 'react';
import { Zap, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-content">
        <div className="hero-text-area">
          <p className="hero-greeting">
            <Zap className="icon-small" /> Hello, I'm
          </p>
          <h1 className="hero-title">
            Jemaile Mohamed
          </h1>
          <p className="hero-subtitle">
            Software Developer | Life-Long Learner | Tech Enthusiast
          </p>
          <a
            href="https://docs.google.com/document/d/15XK3oRK8nP2ncNg22rEdWn5Eb1q-aZsg/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-base button-primary button-cv"
          >
            <Download className="icon-small-light" />
            Download CV
          </a>
        </div>
        <div className="hero-image-area">
          <div className="hero-image-container animate-pulse-slow">
            <img
              src="src/assets/profile.jpg"
              alt="Jemaile Mohamed Profile"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;