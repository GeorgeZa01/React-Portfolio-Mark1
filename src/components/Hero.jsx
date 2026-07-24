import React from 'react';
import { Zap, Download } from 'lucide-react';
import Seo from './Seo';
import headshot from '../assets/headshot.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <Seo
        title="Home — Jemaile Mohamed"
        description="Jemaile Mohamed — full-stack web developer from Cape Town building responsive, accessible web apps with React and Node.js."
        url="https://jm.dev"
        image="https://jm.dev/og-image.png"
      />
      <div className="container hero-content">
        <div className="hero-text-area">
          <p className="hero-greeting">
            <Zap className="icon-small" /> Hello, I'm
          </p>
          <h1 className="hero-title">
            Jemaile Mohamed
          </h1>
          <p className="hero-subtitle">
              IT Technician & Web Developer | Building toward Systems Administration
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1mhET97kFhTWuY2-sg9PdKpjRTeBw6NL6"
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
              src={headshot}
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