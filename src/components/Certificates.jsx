import React from 'react';

const Certificates = () => {
  const certs = [
    { id: 1, title: "Build Rest API", org: "Node.js", date: "Feb 2026", icon: "🔗", color: "var(--g1)", border: "rgba(16,185,129,.22)", bg: "rgba(16,185,129,.12)", iconBorder: "rgba(16,185,129,.28)", delay: "d1" },
    { id: 2, title: "Gen AI", org: "Nasscom", date: "Feb 2026", icon: "🧬", color: "var(--pk)", border: "rgba(236,72,153,.22)", bg: "rgba(236,72,153,.12)", iconBorder: "rgba(236,72,153,.28)", delay: "d2" },
    { id: 3, title: "Build Generative AI Apps", org: "Infosys", date: "Aug 2025", icon: "🤖", color: "var(--p2)", border: "var(--br)", bg: "rgba(124,58,237,.12)", iconBorder: "rgba(124,58,237,.28)", link: "https://drive.google.com/file/d/1WBkLx5UQa5FYEkcTUrFPFsYwqiS8oMK6/view?usp=sharing", delay: "d3" },
    { id: 4, title: "Computational Theory", org: "Infosys", date: "Aug 2025", icon: "🔬", color: "#8b5cf6", border: "var(--br)", bg: "rgba(139,92,246,.12)", iconBorder: "rgba(139,92,246,.28)", link: "https://drive.google.com/file/d/1QJ6YbiImsD_l4slF-0Pr2D3szOSlznNJ/view?usp=sharing", delay: "d4" },
    { id: 5, title: "Cloud Computing", org: "IIT Kharagpur · NPTEL", date: "Jan–Apr 2025", icon: "☁️", color: "var(--b1)", border: "var(--br)", bg: "rgba(14,165,233,.12)", iconBorder: "rgba(14,165,233,.28)", link: "https://drive.google.com/file/d/1rHQjoOlcDFlezqrnqEd9bdlEjndB2Abi/view?usp=sharing", delay: "d5" },
    { id: 6, title: "Bits and Bytes", org: "Google", date: "Sep 2024", icon: "🔵", color: "var(--g1)", border: "var(--br)", bg: "rgba(16,185,129,.12)", iconBorder: "rgba(16,185,129,.28)", link: "https://drive.google.com/file/d/1Deq0300uvD-_u2G9XhrcuDu4mDqLVo7x/view?usp=sharing", delay: "d6" },
    { id: 7, title: "Hardware and OS", org: "IBM", date: "Sep 2024", icon: "💻", color: "var(--y1)", border: "var(--br)", bg: "rgba(245,158,11,.12)", iconBorder: "rgba(245,158,11,.28)", link: "https://drive.google.com/file/d/1M6BUZGYDV1IBQtJiySD-rXEkvsFTzvKr/view?usp=sharing", delay: "d7" }
  ];

  return (
    <section id="certs" className="sec">
      <div className="shd rv"><span className="ey">Credentials</span><h2 className="stit">Certificates</h2></div>
      <div className="cg">
        {certs.map(c => (
          <a className={`cc rv ${c.delay}`} href={c.link || "#"} key={c.id} style={{ borderColor: c.border }} target={c.link ? "_blank" : undefined} rel={c.link ? "noopener noreferrer" : undefined}>
            <div className="cct">
              <div className="ccic" style={{ background: c.bg, border: `1px solid ${c.iconBorder}` }}>{c.icon}</div>
              <span className="ccyr">{c.date}</span>
            </div>
            <div className="ccnm">{c.title}</div>
            <div className="ccor">{c.org}</div>
            <div className="ccta" style={{ color: c.color }}>View Certificate ↗</div>
          </a>
        ))}
        <div className="cc rv" style={{ cursor: 'default', borderColor: 'rgba(250,204,21,.18)' }}>
          <div className="cct">
            <div className="ccic" style={{ background: 'rgba(250,204,21,.12)', border: '1px solid rgba(250,204,21,.28)' }}>⭐</div>
            <span className="ccyr">Ongoing</span>
          </div>
          <div className="ccnm">200+ LeetCode Problems</div>
          <div className="ccor">Data Structures & Algorithms</div>
          <div className="ccta" style={{ color: '#facc15' }}>leetcode.com ↗</div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
