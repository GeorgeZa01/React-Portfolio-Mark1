import React from 'react';
import { Briefcase, Folder } from 'lucide-react';
import Seo from './Seo';

const SectionTitle = ({ title }) => (
  <div className="section-title-wrapper">
    <h2 className="section-title">
      {title}
      <span className="section-title-underline"></span>
    </h2>
  </div>
);

const About = () => {
  return (
    <section id="about" className="section-padding section-light">
      <Seo
        title="About — Jemaile Mohamed"
        description="About Jemaile Mohamed — full-stack developer focused on building performant and accessible web experiences."
        url="https://jm.dev/about"
        image="https://jm.dev/og-image.png"
      />
      <div className="container section-max-width">
        <SectionTitle title="About Me" />
        <div className="text-content-area text-lg">
          <p>
            I'm <strong>Jemaile Mohamed</strong>, a full-stack web developer from Cape Town with a strong passion for technology and creativity. My journey into coding started with a fascination for how technology works—and it grew into a purpose-driven mission to create user-friendly, responsive, and problem-solving digital solutions.
          </p>
          <p>
            I've built full-stack e-commerce platforms, data dashboards, and modern business websites using JavaScript, Node.js, and MySQL. I thrive in collaborative spaces, love a good challenge, and stay committed to continuous learning and empowering others through tech.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;