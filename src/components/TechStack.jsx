import React from 'react';
import { SKILLS } from '../data/constants';

const SectionTitle = ({ title }) => (
  <div className="section-title-wrapper">
    <h2 className="section-title">
      {title}
      <span className="section-title-underline"></span>
    </h2>
  </div>
);

const SkillCard = ({ name, icon: Icon, cssColor }) => (
  <div className="skill-card">
    <Icon className="skill-icon" style={{ color: cssColor }} />
    <p className="skill-name">{name}</p>
  </div>
);

const TechStack = () => {
  return (
    <section id="skills" className="section-padding section-dark">
      <div className="container section-max-width">
        <SectionTitle title="Tech Stack" />
        <p className="skill-intro-text">
          Tools and technologies I use to build modern, full-stack solutions.
        </p>
        <div className="skill-grid">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;