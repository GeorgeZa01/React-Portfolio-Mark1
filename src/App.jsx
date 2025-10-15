import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from './data/constants';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  // Set viewport height for mobile
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    return () => window.removeEventListener('resize', setVH);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-80px 0px -20px 0px' // Adjusted for better mobile detection
      }
    );

    const sectionIds = [...NAV_ITEMS.map(item => item.id), 'hero'];
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`app-wrapper ${isDarkMode ? 'dark-mode' : ''}`}>
      <NavBar activeSection={activeSection} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Jemaile Mohamed. Built with React and CSS.
        </p>
      </footer>
    </div>
  );
};

export default App;