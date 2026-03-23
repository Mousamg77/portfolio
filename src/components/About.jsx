import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.rv, .rl, .rr').forEach(el => io.observe(el));
    
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" className="sec">
      <div className="shd rv">
        <span className="ey">Who I Am</span>
        <h2 className="stit">About Me</h2>
      </div>
      <div className="abg">
        <div className="gc abcard rl">
          <div className="abav">👨‍💻</div>
          <h3>B.Tech CSE · LPU</h3>
          <p>I'm a Computer Science & Engineering student at Lovely Professional University, Punjab — passionate about building modern, performant web applications that solve real-world problems.</p>
          <p>My stack spans front to back: pixel-perfect React UIs to robust Node.js/MongoDB backends. I've shipped AI chatbots, wellness portals and responsive websites, always pushing for clean, efficient code.</p>
          <p>200+ LeetCode problems solved. Certified by Google, IBM, Infosys, Nasscom & IIT Kharagpur.</p>
          <div className="atags">
            <span className="atag">📍 Punjab, India</span>
            <span className="atag">✉️ mousamgangwar77@gmail.com</span>
            <span className="atag">📱 +91 9536577206</span>
            <span className="atag">🎓 B.Tech CSE</span>
          </div>
        </div>
        <div className="rr">
          <div className="sc2 rv d1"><span className="si">🧩</span><div><div className="stt">Problem Solver</div><div className="sds">200+ LeetCode problems; sharp algorithmic thinking in C++, Java and JavaScript.</div></div></div>
          <div className="sc2 rv d2"><span class="si">🤝</span><div><div className="stt">Team Player</div><div className="sds">Thrives in collaborative agile environments with excellent cross-functional communication.</div></div></div>
          <div className="sc2 rv d3"><span class="si">⚡</span><div><div class="stt">Adaptable</div><div className="sds">Rapidly picks up new frameworks and technologies through consistent hands-on practice.</div></div></div>
          <div className="sc2 rv d4"><span class="si">🎓</span><div><div class="stt">Lifelong Learner</div><div className="sds">Certified by Google, IBM, Infosys, Nasscom & IIT Kharagpur — constantly growing.</div></div></div>
        </div>
      </div>
    </section>
  );
};

export default About;
