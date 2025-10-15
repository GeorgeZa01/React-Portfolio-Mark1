import React from 'react';
import { Clock } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/constants';

const SectionTitle = ({ title }) => (
  <div className="section-title-wrapper">
    <h2 className="section-title">
      {title}
      <span className="section-title-underline"></span>
    </h2>
  </div>
);

const ExperienceCard = ({ title, company, duration, description }) => (
  <div className="card card-experience">
    <h3 className="card-title">{title}</h3>
    <p className="card-subtitle-primary">{company}</p>
    <p className="card-meta">
      <Clock className="icon-mini" /> {duration}
    </p>
    <ul className="list-content">
      {description.map((item, index) => (
        <li key={index} className="list-item">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="section-padding section-dark">
      <div className="container section-max-width">
        <SectionTitle title="Experience" />
        <div className="section-content-list">
          {EXPERIENCE_DATA.map((job, index) => (
            <ExperienceCard key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;