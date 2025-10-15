import React from 'react';
import { Code } from 'lucide-react';

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
      <div className="container section-max-width">
        <SectionTitle title="About Me" />
        <div className="text-content-area text-lg">
          <p>
            I'm <strong>Jemaile Mohamed</strong>, a full-stack web developer from Cape Town with a strong passion for technology and creativity. My journey into coding started with a fascination for how technology works—and it grew into a purpose-driven mission to create user-friendly, responsive, and problem-solving digital solutions.
          </p>
          <p>
            I've built full-stack e-commerce platforms, data dashboards, and modern business websites using JavaScript, Node.js, and MySQL. I thrive in collaborative spaces, love a good challenge, and stay committed to continuous learning and empowering others through tech.
          </p>
          <div className="about-focus-box">
            <h3 className="about-focus-title">
              <Code className="icon-small" /> Focus & Mission
            </h3>
            <p>
              My focus is on delivering efficient and scalable solutions, bridging the gap between innovative design and robust backend performance. I am currently seeking opportunities to apply my full-stack skills in a challenging and growth-oriented environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;