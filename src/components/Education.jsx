import React from 'react';

const Education = () => {
  const education = [
    { id: 1, degree: "B.Tech – Computer Science & Engineering", period: "Aug 2023 – Present", score: "CGPA: 7.0", school: "Lovely Professional University", location: "📍 Punjab, India", icon: "🎓", color: "var(--p2)", border: "rgba(124,58,237,.5)", bg: "rgba(124,58,237,.1)", delay: "d1" },
    { id: 2, degree: "Intermediate (Class XII)", period: "Apr 2021 – Mar 2022", score: "66%", school: "St. Thomas Sr. Sec. School", location: "📍 Bareilly, Uttar Pradesh", icon: "📗", color: "var(--b2)", border: "rgba(14,165,233,.5)", bg: "rgba(14,165,233,.1)", delay: "d2" },
    { id: 3, degree: "Matriculation (Class X)", period: "Apr 2019 – Mar 2020", score: "56%", school: "St. Thomas Sr. Sec. School", location: "📍 Bareilly, Uttar Pradesh", icon: "📘", color: "var(--g1)", border: "rgba(16,185,129,.5)", bg: "rgba(16,185,129,.1)", delay: "d3" }
  ];

  return (
    <section id="education" className="sec" style={{ background: 'linear-gradient(180deg,transparent,rgba(124,58,237,.04),transparent)' }}>
      <div className="shd rv"><span className="ey">Academic Journey</span><h2 className="stit">Education</h2></div>
      <div className="etl">
        {education.map(e => (
          <div className={`ei rv ${e.delay}`} key={e.id}>
            <div className="edt" style={{ color: e.color, borderColor: e.border, background: e.bg }}>{e.icon}</div>
            <div className="ec">
              <div className="ehd">
                <div className="edg">{e.degree}</div>
                <div className="er">
                  <div className="ep">{e.period}</div>
                  <div className="egr" style={{ color: e.color }}>{e.score}</div>
                </div>
              </div>
              <div className="esc2">{e.school}</div>
              <div className="elc">{e.location}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
