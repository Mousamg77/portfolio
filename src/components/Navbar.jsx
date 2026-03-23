import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light');
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav id="nav" className={isScrolled ? 'sc' : ''}>
        <a className="nlogo" href="#hero">&lt;MG.dev /&gt;</a>
        <div className="nlinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#training">Training</a>
          <a href="#certs">Certs</a>
          <a href="#achievements">Wins</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nright">
          <button id="tgl" onClick={toggleTheme}>
            {isDarkMode ? '🌙' : '☀️'}
          </button>
          <button id="hmb" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>☰</button>
        </div>
      </nav>

      <div id="mob" className={isMobileMenuOpen ? 'on' : ''}>
        <button id="mcl" onClick={closeMobileMenu}>✕</button>
        <a href="#about" onClick={closeMobileMenu}>About</a>
        <a href="#skills" onClick={closeMobileMenu}>Skills</a>
        <a href="#projects" onClick={closeMobileMenu}>Projects</a>
        <a href="#training" onClick={closeMobileMenu}>Training</a>
        <a href="#certs" onClick={closeMobileMenu}>Certificates</a>
        <a href="#achievements" onClick={closeMobileMenu}>Achievements</a>
        <a href="#education" onClick={closeMobileMenu}>Education</a>
        <a href="#contact" onClick={closeMobileMenu}>Contact</a>
      </div>
    </>
  );
};

export default Navbar;
