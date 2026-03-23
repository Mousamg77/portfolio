import React, { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    const sio = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.skf').forEach(f => f.style.width = f.dataset.w + '%');
          sio.unobserve(e.target);
        }
      });
    }, { threshold: 0.25 });

    document.querySelectorAll('.skc').forEach(c => sio.observe(c));
    return () => sio.disconnect();
  }, []);

  return (
    <section id="skills" className="sec" style={{ background: 'linear-gradient(180deg,transparent,rgba(124,58,237,.04),transparent)' }}>
      <div className="shd rv"><span className="ey">What I Know</span><h2 className="stit">Skills</h2></div>
      <div className="skg">
        {/* Frontend */}
        <div className="skc rv d1">
          <div className="skh"><span className="skic">🎨</span><span className="sknl" style={{ color: 'var(--p2)' }}>Frontend</span></div>
          <div className="ski"><div className="skrw"><span>React.js</span><span className="skpc" style={{ color: 'var(--p2)' }}>85%</span></div><div className="skt"><div className="skf" data-w="85" style={{ background: 'linear-gradient(90deg,var(--p3),var(--p2))' }}></div></div></div>
          <div className="ski"><div className="skrw"><span>JavaScript</span><span className="skpc" style={{ color: 'var(--p2)' }}>88%</span></div><div className="skt"><div className="skf" data-w="88" style={{ background: 'linear-gradient(90deg,var(--p3),var(--p2))' }}></div></div></div>
          <div className="ski"><div className="skrw"><span>HTML & CSS</span><span className="skpc" style={{ color: 'var(--p2)' }}>92%</span></div><div className="skt"><div className="skf" data-w="92" style={{ background: 'linear-gradient(90deg,var(--p3),var(--p2))' }}></div></div></div>
          <div className="ski"><div className="skrw"><span>Tailwind CSS</span><span className="skpc" style={{ color: 'var(--p2)' }}>80%</span></div><div className="skt"><div className="skf" data-w="80" style={{ background: 'linear-gradient(90deg,var(--p3),var(--p2))' }}></div></div></div>
        </div>
        {/* Backend */}
        <div className="skc rv d2">
          <div className="skh"><span className="skic">⚙️</span><span className="sknl" style={{ color: 'var(--b2)' }}>Backend</span></div>
          <div className="ski"><div className="skrw"><span>Node.js</span><span className="skpc" style={{ color: 'var(--b2)' }}>80%</span></div><div className="skt"><div className="skf" data-w="80" style={{ background: 'linear-gradient(90deg,#0284c7,var(--b2))' }}></div></div></div>
          <div className="ski"><div className="skrw"><span>Express.js</span><span className="skpc" style={{ color: 'var(--b2)' }}>78%</span></div><div className="skt"><div className="skf" data-w="78" style={{ background: 'linear-gradient(90deg,#0284c7,var(--b2))' }}></div></div></div>
          <div className="ski"><div className="skrw"><span>Java</span><span className="skpc" style={{ color: 'var(--b2)' }}>72%</span></div><div className="skt"><div className="skf" data-w="72" style={{ background: 'linear-gradient(90deg,#0284c7,var(--b2))' }}></div></div></div>
          <div className="ski"><div className="skrw"><span>PHP</span><span className="skpc" style={{ color: 'var(--b2)' }}>65%</span></div><div className="skt"><div className="skf" data-w="65" style={{ background: 'linear-gradient(90deg,#0284c7,var(--b2))' }}></div></div></div>
          <div className="ski"><div className="skrw"><span>C++</span><span className="skpc" style={{ color: 'var(--b2)' }}>75%</span></div><div className="skt"><div className="skf" data-w="75" style={{ background: 'linear-gradient(90deg,#0284c7,var(--b2))' }}></div></div></div>
        </div>
        {/* Database */}
        <div className="skc rv d3">
          <div className="skh"><span className="skic">🗄️</span><span className="sknl" style={{ color: 'var(--g1)' }}>Database</span></div>
          <div className="ski"><div className="skrw"><span>MongoDB</span><span className="skpc" style={{ color: 'var(--g1)' }}>82%</span></div><div className="skt"><div className="skf" data-w="82" style={{ background: 'linear-gradient(90deg,#059669,var(--g1))' }}></div></div></div>
          <div className="ski"><div className="skrw"><span>PostgreSQL</span><span className="skpc" style={{ color: 'var(--g1)' }}>68%</span></div><div className="skt"><div className="skf" data-w="68" style={{ background: 'linear-gradient(90deg,#059669,var(--g1))' }}></div></div></div>
          <div className="ski"><div className="skrw"><span>MySQL</span><span className="skpc" style={{ color: 'var(--g1)' }}>74%</span></div><div className="skt"><div className="skf" data-w="74" style={{ background: 'linear-gradient(90deg,#059669,var(--g1))' }}></div></div></div>
        </div>
        {/* Tools */}
        <div className="skc rv d4">
          <div className="skh"><span className="skic">🛠️</span><span className="sknl" style={{ color: 'var(--y1)' }}>Tools</span></div>
          <div className="ski"><div className="skrw"><span>Git & GitHub</span><span className="skpc" style={{ color: 'var(--y1)' }}>85%</span></div><div className="skt"><div className="skf" data-w="85" style={{ background: 'linear-gradient(90deg,#d97706,var(--y1))' }}></div></div></div>
          <div className="ski"><div className="skrw"><span>REST APIs</span><span className="skpc" style={{ color: 'var(--y1)' }}>83%</span></div><div className="skt"><div className="skf" data-w="83" style={{ background: 'linear-gradient(90deg,#d97706,var(--y1))' }}></div></div></div>
          <div className="ski"><div className="skrw"><span>DSA / LeetCode</span><span className="skpc" style={{ color: 'var(--y1)' }}>78%</span></div><div className="skt"><div className="skf" data-w="78" style={{ background: 'linear-gradient(90deg,#d97706,var(--y1))' }}></div></div></div>
          <div className="ski"><div className="skrw"><span>NLP / NLU</span><span className="skpc" style={{ color: 'var(--y1)' }}>65%</span></div><div className="skt"><div className="skf" data-w="65" style={{ background: 'linear-gradient(90deg,#d97706,var(--y1))' }}></div></div></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
