import React from 'react';

const Achievements = () => {
  const achievements = [
    { id: 1, title: "200+ LeetCode Problems Solved", val: "200+", desc: "Solved 200+ Data Structure & Algorithm problems on LeetCode — arrays, trees, graphs, DP, greedy and more, demonstrating strong problem-solving fundamentals.", link: "https://leetcode.com", linkText: "View LeetCode Profile ↗", icon: "⚡", color: "#facc15", bg: "rgba(250,204,21,.1)", border: "rgba(250,204,21,.3)", delay: "d1" },
    { id: 2, title: "Cloud Computing Certified", val: "IIT KGP", desc: "Certified in Cloud Computing by IIT Kharagpur through NPTEL — India's most prestigious technical program covering cloud architecture, services and deployment.", link: "https://drive.google.com/file/d/1rHQjoOlcDFlezqrnqEd9bdlEjndB2Abi/view?usp=sharing", linkText: "View Certificate ↗", icon: "☁️", color: "var(--b2)", bg: "rgba(14,165,233,.1)", border: "rgba(14,165,233,.3)", delay: "d2" },
    { id: 3, title: "Industry Certifications", val: "7+", desc: "Earned certifications from Google, IBM, Infosys, Nasscom & IIT Kharagpur — spanning generative AI, cloud computing, REST APIs, hardware and computational theory.", link: "#certs", linkText: "View All Certificates ↗", icon: "🏅", color: "var(--p2)", bg: "rgba(124,58,237,.1)", border: "rgba(124,58,237,.3)", delay: "d3" },
    { id: 4, title: "Full-Stack Projects Deployed", val: "3+", desc: "Built full-stack applications — an AI-powered chatbot, live yoga website (yogasehoga.net), and a mental wellness portal — using React, Node.js and MongoDB.", link: "https://github.com/Mousamg77", linkText: "View GitHub ↗", icon: "🚀", color: "var(--g1)", bg: "rgba(16,185,129,.1)", border: "rgba(16,185,129,.3)", delay: "d4" }
  ];

  return (
    <section id="achievements" className="sec" style={{ background: 'linear-gradient(180deg,transparent,rgba(250,204,21,.03),transparent)' }}>
      <div className="shd rv"><span className="ey">Milestones</span><h2 className="stit">Achievements</h2></div>
      <div className="achg">
        {achievements.map(a => (
          <div className={`ach rv ${a.delay}`} key={a.id}>
            <div className="achic" style={{ background: a.bg, border: `1px solid ${a.border}` }}>{a.icon}</div>
            <div>
              <div className="achn" style={{ color: a.color }}>{a.val}</div>
              <div className="acht">{a.title}</div>
              <div className="achd">{a.desc}</div>
              <a className="achl" href={a.link} target={a.link.startsWith('http') ? "_blank" : undefined} rel={a.link.startsWith('http') ? "noopener noreferrer" : undefined} style={{ color: a.color }}>{a.linkText}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
