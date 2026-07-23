import { useState } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MonitorCog,
  Network,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { EDUCATION_DATA, EXPERIENCE_DATA, PROJECTS, SKILLS } from './data/constants';
import headshot from './assets/headshot.jpeg';

const cvUrl = 'https://docs.google.com/document/d/15XK3oRK8nP2ncNg22rEdWn5Eb1q-aZsg/export?format=pdf';
const navItems = [['about', 'About'], ['experience', 'Experience'], ['projects', 'Projects'], ['contact', 'Contact']];

const scrollTo = (id, closeMenu) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  closeMenu?.();
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Jemaile Mohamed home">JM<span>/dev</span></a>
        <nav className={`site-nav ${menuOpen ? 'site-nav-open' : ''}`} aria-label="Main navigation">
          {navItems.map(([id, label]) => <button key={id} type="button" onClick={() => scrollTo(id, () => setMenuOpen(false))}>{label}</button>)}
          <a className="nav-cta" href={cvUrl} target="_blank" rel="noreferrer"><Download size={16} /> CV</a>
        </nav>
        <button className="menu-button" type="button" aria-label="Toggle navigation" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Cape Town, South Africa</p>
            <h1>Technical thinking.<br /><em>Human service.</em></h1>
            <p className="hero-lede">I&apos;m Jemaile Mohamed, an IT technician and web developer building toward systems administration.</p>
            <div className="hero-actions">
              <button className="button button-primary" type="button" onClick={() => scrollTo('projects')}>See selected work <ArrowUpRight size={18} /></button>
              <a className="button button-quiet" href={cvUrl} target="_blank" rel="noreferrer"><Download size={17} /> Download CV</a>
            </div>
            <div className="hero-proof"><span><Check size={15} /> CCNA in progress</span><span><Check size={15} /> AWS Cloud Practitioner in progress</span></div>
          </div>
          <div className="hero-aside">
            <div className="portrait-frame"><img src={headshot} alt="Jemaile Mohamed" /><span className="portrait-label">JM dev / 01</span></div>
            <div className="hero-note"><Sparkles size={18} /><span>Reliable systems<br />start with clear thinking.</span></div>
          </div>
        </section>

        <section id="about" className="intro-band"><div className="section-wrap intro-grid"><p className="section-kicker">01 / Profile</p><div><h2>Practical IT support with a builder&apos;s mindset.</h2><p>I work across hardware, support, networking fundamentals, and full-stack development. Through JM dev, I help individuals and small businesses solve technical problems and ship useful websites from first conversation to deployment.</p></div><div className="focus-list"><div><MonitorCog size={22} /><span>Hardware &amp; support<br /><small>Repair, diagnostics, troubleshooting</small></span></div><div><Network size={22} /><span>Systems direction<br /><small>Networking and cloud foundations</small></span></div><div><ShieldCheck size={22} /><span>Secure development<br /><small>Auth, APIs, databases, deployment</small></span></div></div></div></section>

        <section id="experience" className="section-wrap content-section"><div className="section-heading"><p className="section-kicker">02 / Experience</p><h2>Work that travels well.</h2><p>From client-facing hospitality to independent technical work, I bring calm communication, ownership, and operational discipline.</p></div><div className="experience-list">{EXPERIENCE_DATA.map((job, index) => <article className={`experience-row ${index === 0 ? 'experience-current' : ''}`} key={`${job.company}-${job.title}`}><div className="experience-index">0{index + 1}</div><div><h3>{job.title}</h3><p className="muted">{job.company}</p><ul>{job.description.map((item) => <li key={item}>{item}</li>)}</ul></div><time>{job.duration}</time></article>)}</div></section>

        <section id="projects" className="work-section"><div className="section-wrap"><div className="section-heading work-heading"><p className="section-kicker">03 / Selected work</p><h2>Built to be useful.</h2><p>A mix of product thinking, data structure, and hands-on full-stack delivery.</p></div><div className="project-grid-modern">{PROJECTS.map((project, index) => <article className={`project-tile project-tile-${index + 1}`} key={project.title}><div className="project-topline"><span>0{index + 1}</span><span>{project.image ? 'Live project' : 'Case study'}</span></div><div className="project-icon"><BriefcaseBusiness size={22} /></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-stack-modern">{project.stack}</div>{(project.liveLink || project.githubLink) && <div className="project-links">{project.liveLink && <a href={project.liveLink} target="_blank" rel="noreferrer">View project <ArrowUpRight size={16} /></a>}{project.githubLink && <a href={project.githubLink} target="_blank" rel="noreferrer" aria-label={`View ${project.title} code`}><Github size={17} /></a>}</div>}</article>)}</div></div></section>

        <section className="section-wrap split-section"><div><p className="section-kicker">04 / Toolkit</p><h2>The tools behind the work.</h2><p className="section-copy">A grounded stack for building, connecting, and maintaining digital systems.</p></div><div className="skill-cloud">{SKILLS.map(({ name }) => <span key={name}>{name}</span>)}</div></section>

        <section className="section-wrap split-section education-section"><div><p className="section-kicker">05 / Learning</p><h2>Always sharpening the edge.</h2></div><div className="education-list">{EDUCATION_DATA.map((education) => <article key={education.institution}><GraduationCap size={20} /><div><h3>{education.degree}</h3><p>{education.institution} <span>/</span> {education.duration}</p><small>{education.details}</small></div></article>)}</div></section>

        <section id="contact" className="contact-section"><div className="section-wrap contact-inner"><div><p className="section-kicker">06 / Contact</p><h2>Let&apos;s solve something.</h2><p>Open to IT operations, systems administration, technical support, and web development opportunities.</p></div><div className="contact-actions"><a className="contact-link" href="mailto:jemaile75@gmail.com"><Mail size={20} /> jemaile75@gmail.com <ArrowUpRight size={17} /></a><a className="contact-link" href="https://www.linkedin.com/in/jemaile-mohamed" target="_blank" rel="noreferrer"><Linkedin size={20} /> LinkedIn <ArrowUpRight size={17} /></a><a className="contact-link" href="https://github.com/GeorgeZa01" target="_blank" rel="noreferrer"><Github size={20} /> GitHub <ArrowUpRight size={17} /></a></div></div></section>
      </main>
      <footer className="site-footer section-wrap"><span>Jemaile Mohamed / JM dev</span><span>{new Date().getFullYear()} / Cape Town</span></footer>
    </div>
  );
}

export default App;
