import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    // Particles Effect
    const c = canvasRef.current;
    const ctx = c.getContext('2d');
    const rs = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };
    rs();
    window.addEventListener('resize', rs, { passive: true });

    const pts = Array.from({ length: 44 }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      r: Math.random() * 2.2 + 0.4,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.3,
      o: Math.random() * 0.42 + 0.07
    }));

    let animationFrameId;
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      pts.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167,139,250,${p.o})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = c.width;
        if (p.x > c.width) p.x = 0;
        if (p.y < 0) p.y = c.height;
        if (p.y > c.height) p.y = 0;
      });
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    // Typing Effect
    const words = ["React Developer", "Node.js Engineer", "MongoDB Expert", "JavaScript Dev", "Full Stack Builder", "DSA Enthusiast", "Express.js Dev"];
    let i = 0, ch = 0, del = false;
    let typingTimeout;

    const tick = () => {
      const w = words[i];
      if (!del && ch === w.length) {
        typingTimeout = setTimeout(() => {
          del = true;
          tick();
        }, 1700);
        return;
      }
      if (del && ch === 0) {
        del = false;
        i = (i + 1) % words.length;
      }
      ch = del ? ch - 1 : ch + 1;
      if (typedRef.current) {
        typedRef.current.textContent = w.slice(0, ch);
      }
      typingTimeout = setTimeout(tick, del ? 40 : 78);
    };
    tick();

    return () => {
      window.removeEventListener('resize', rs);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <section id="hero" style={{ maxWidth: '100%', padding: '7rem 2.5rem 5rem' }}>
      <div className="hbg"></div>
      <div className="hgrid"></div>
      <div className="orb o1"></div><div className="orb o2"></div><div className="orb o3"></div>
      <canvas id="ptc" ref={canvasRef}></canvas>
      <div className="hi">
        <div className="htxt">
          <div className="hbadge">
            <span className="pdot"></span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '.61rem', letterSpacing: '.17em' }}>AVAILABLE FOR OPPORTUNITIES</span>
          </div>
          <h1 className="hn">
            <span className="w">Mousam</span>
            <span className="g">Gangwar</span>
          </h1>
          <p className="hrl">Full Stack Web Developer</p>
          <div className="htyp">
            <span className="tfx">const&nbsp;role&nbsp;=&nbsp;</span>
            <span style={{ color: 'var(--p2)', fontFamily: "'JetBrains Mono', monospace", fontSize: '.82rem' }}>"</span>
            <span id="typed" ref={typedRef}></span>
            <span className="tcr">|</span>
            <span style={{ color: 'var(--p2)', fontFamily: "'JetBrains Mono', monospace", fontSize: '.82rem' }}>"</span>
          </div>
          <div className="hbtns">
            <a href="#projects" className="bp">🚀 View Projects</a>
            <a href="https://drive.google.com/file/d/1zktLdeN6wqhAuzjSt--r7h_9gt3Dyi2a/view?usp=sharing"
               target="_blank" rel="noopener noreferrer" className="bo">📄 Download Resume</a>
          </div>
          <div className="hst">
            <div><div className="stn">200+</div><div className="stl">LeetCode Problems</div></div>
            <div><div className="stn">7+</div><div className="stl">Certificates</div></div>
            <div><div className="stn">3+</div><div className="stl">Projects Built</div></div>
            <div><div className="stn">7.0</div><div className="stl">CGPA @ LPU</div></div>
          </div>
        </div>
        <div className="hph">
          <div className="pgl"></div>
          <div className="porb"></div>
          <div className="pr" title="Click to change photo">
            <div className="pri">
              <img id="pimg" src="/photo.jpg" alt="Mousam Gangwar"
                   onError={(e) => { e.target.style.display='none'; document.getElementById('pph').style.display='flex'; }}/>
              <div className="pph" id="pph" style={{ display: 'none' }}>
                <div className="pph-ic">👤</div>
                <div className="pph-tx">Add photo.jpg<br/>to public/ folder</div>
              </div>
            </div>
          </div>
          <div className="pb1">Full Stack Dev</div>
          <div className="pb2">LPU · CSE</div>
        </div>
      </div>
      <div className="scue" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
        <div className="spip"></div>
      </div>
    </section>
  );
};

export default Hero;
