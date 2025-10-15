import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS } from '../data/constants';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  const Icon = isDarkMode ? Sun : Moon;
  const label = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';

  return (
    <button
      onClick={toggleDarkMode}
      aria-label={label}
      className="dark-mode-toggle"
    >
      <Icon className="icon-main" />
    </button>
  );
};

const NavBar = ({ activeSection, isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar-content')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <a 
          href="#hero" 
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          JM<span className="navbar-logo-alt">.dev</span>
        </a>
        
        <div className="nav-links-desktop">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <div className="nav-controls">
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <div className="nav-toggle-mobile">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="nav-toggle-button"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="icon-main" /> : <Menu className="icon-main" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="nav-menu-mobile">
          <div className="nav-menu-list">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-menu-item ${activeSection === item.id ? 'nav-link-active' : ''}`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;