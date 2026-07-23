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
              I'm <strong>Jemaile Mohamed</strong>, a junior IT professional from Cape Town building toward a systems administrator role. I bring hands-on experience in PC and gaming console repair, diagnostics, technical support, networking fundamentals, and full-stack web development.
          </p>
          <p>
              Through JM dev, I support individual and small business clients with reliable technical service and end-to-end websites. I am currently pursuing CCNA and AWS Cloud Practitioner certifications while continuing to build practical skills across infrastructure, databases, deployment, and secure application development.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;