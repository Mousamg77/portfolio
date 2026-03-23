import React from 'react';

const Training = () => {
  return (
    <section id="training" className="sec" style={{ background: 'linear-gradient(180deg,transparent,rgba(245,158,11,.04),transparent)' }}>
      <div className="shd rv"><span className="ey">Experience</span><h2 className="stit">Training</h2></div>
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        <div className="trc rv">
          <div className="trt">
            <div className="tric" style={{ background: 'rgba(245,158,11,.12)', border: '1px solid rgba(245,158,11,.32)' }}>⚙️</div>
            <div className="trmt">
              <h3>C++ & Data Structures and Algorithms</h3>
              <div className="org">CSE Pathshala · <span style={{ color: 'var(--y1)' }}>Jun 2025 – Jul 2025</span></div>
              <a className="cl" href="https://drive.google.com/file/d/1qWrolK62ijabqzv2607QZq0OYMrgcPVV/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--y1)', borderColor: 'rgba(245,158,11,.36)', background: 'rgba(245,158,11,.09)' }}>🔗 View Certificate</a>
            </div>
          </div>
          <ul className="trp">
            <li><span className="ar" style={{ color: 'var(--y1)' }}>▸</span>Completed DSA training in C++ with hands-on practice in core data structures and algorithms</li>
            <li><span className="ar" style={{ color: 'var(--y1)' }}>▸</span>Sorting, searching, recursion, greedy methods & dynamic programming techniques</li>
            <li><span className="ar" style={{ color: 'var(--y1)' }}>▸</span>Solved 50+ DSA problems and improved coding efficiency by optimising algorithms in C++</li>
            <li><span className="ar" style={{ color: 'var(--y1)' }}>▸</span>Strengthened OOP fundamentals; built mini project with clean, efficient C++ code</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Training;
