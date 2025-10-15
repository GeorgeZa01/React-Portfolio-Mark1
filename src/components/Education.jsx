import React from 'react';
import { GraduationCap } from 'lucide-react';
import { EDUCATION_DATA } from '../data/constants';

const SectionTitle = ({ title }) => (
  <div className="section-title-wrapper">
    <h2 className="section-title">
      {title}
      <span className="section-title-underline"></span>
    </h2>
  </div>
);

const EducationCard = ({ institution, degree, duration, details }) => (
  <div className="card card-education">
    <h3 className="card-title">{degree}</h3>
    <p className="card-subtitle-secondary">{institution}</p>
    <p className="card-meta">
      <GraduationCap className="icon-mini" /> {duration}
    </p>
    <p className="text-content-area">{details}</p>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="section-padding section-light">
      <div className="container section-max-width">
        <SectionTitle title="Education" />
        <div className="section-content-list">
          {EDUCATION_DATA.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;