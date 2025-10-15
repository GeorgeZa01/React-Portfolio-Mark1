import React from 'react';
import { Globe, Github } from 'lucide-react';
import { PROJECTS } from '../data/constants';

const SectionTitle = ({ title }) => (
  <div className="section-title-wrapper">
    <h2 className="section-title">
      {title}
      <span className="section-title-underline"></span>
    </h2>
  </div>
);

const ProjectCard = ({ title, description, stack, liveLink, githubLink, image }) => (
  <div className="project-card">
    <div className="project-image-wrapper">
      <img
        src={image}
        alt={`Screenshot of ${title}`}
        className="project-image"
      />
    </div>
    <div className="project-content">
      <h3 className="project-title">{title}</h3>
      <p className="project-stack">{stack}</p>
      <p className="project-description">{description}</p>
      <div className="project-links-wrapper">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="button-link button-link-primary"
        >
          <Globe className="icon-mini-light" /> Live Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="button-link button-link-secondary"
        >
          <Github className="icon-mini" /> Code
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="section-padding section-light">
      <div className="container section-max-width">
        <SectionTitle title="My Projects" />
        <div className="project-grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="project-github-cta">
          <a
            href="https://github.com/GeorgeZa01"
            target="_blank"
            rel="noopener noreferrer"
            className="button-cta"
          >
            <Github className="icon-small" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;