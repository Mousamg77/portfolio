import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const cursorRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    // Custom Cursor Logic
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    const handleMouseEnter = () => cursorRef.current?.classList.add('big');
    const handleMouseLeave = () => cursorRef.current?.classList.remove('big');

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    const interactiveElements = document.querySelectorAll('a, button, .sc2, .ach, .pc, .cc, .skc');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Scroll Progress Logic
    const handleScroll = () => {
      const s = document.documentElement;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = ((s.scrollTop / (s.scrollHeight - s.clientHeight)) * 100) + '%';
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="App">
      <div id="cur" ref={cursorRef}></div>
      <div id="spb" ref={progressBarRef}></div>
      <Navbar />
      <main>
        <Hero />
        <div className="dv"></div>
        <About />
        <div className="dv"></div>
        <Skills />
        <div className="dv"></div>
        <Projects />
        <div className="dv"></div>
        <Training />
        <div className="dv"></div>
        <Certificates />
        <div className="dv"></div>
        <Achievements />
        <div className="dv"></div>
        <Education />
        <div className="dv"></div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
