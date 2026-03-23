import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Stress Management Portal",
      date: "Dec 2025",
      icon: "🧠",
      desc: "Full-stack web app helping users manage stress via personalised tools and resources. RESTful APIs with Node.js/Express.js; MongoDB for secure user data, stress logs and activity tracking.",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      link: "https://github.com/Mousamg77/Stress-Management-",
      color: "rgba(16,185,129,.12)",
      borderColor: "rgba(16,185,129,.25)",
      pstColor: "linear-gradient(90deg,#10b981,#34d399,#10b98144)",
      tagColor: "#34d399",
      tagBg: "rgba(16,185,129,.08)",
      tagBorder: "rgba(16,185,129,.3)",
      delay: "d1"
    },
    {
      id: 2,
      title: "E-Commerce AI Chatbot",
      date: "Apr 2025",
      icon: "🤖",
      desc: "AI-powered chatbot with NLP/NLU for real-time query resolution, 24/7 automated support and REST API integrations for order tracking, product search and customer data retrieval.",
      tags: ["React", "Node.js", "NLP/NLU", "REST APIs"],
      link: "#", // placeholder
      color: "rgba(124,58,237,.12)",
      borderColor: "rgba(124,58,237,.25)",
      pstColor: "linear-gradient(90deg,#7c3aed,#a855f7,#7c3aed44)",
      tagColor: "#a855f7",
      tagBg: "rgba(124,58,237,.08)",
      tagBorder: "rgba(124,58,237,.3)",
      delay: "d2"
    },
    {
      id: 3,
      title: "Yoga Se Hoga",
      date: "Mar 2025",
      icon: "🧘",
      desc: "Responsive yoga & wellness website with SEO-optimised content, clean UI/UX, SQL-backed data layer, mobile-first design and intuitive navigation for health enthusiasts.",
      tags: ["HTML", "CSS", "JavaScript", "SQL"],
      link: "https://yogasehoga.net/",
      color: "rgba(14,165,233,.12)",
      borderColor: "rgba(14,165,233,.25)",
      pstColor: "linear-gradient(90deg,#0ea5e9,#38bdf8,#0ea5e944)",
      tagColor: "#38bdf8",
      tagBg: "rgba(14,165,233,.08)",
      tagBorder: "rgba(14,165,233,.3)",
      delay: "d3"
    }
  ];

  return (
    <section id="projects" className="sec">
      <div className="shd rv"><span className="ey">What I've Built</span><h2 className="stit">Projects</h2></div>
      <div className="pg">
        {projects.map(p => (
          <div className={`pc rv ${p.delay}`} key={p.id}>
            <div className="pst" style={{ background: p.pstColor }}></div>
            <div className="pbdy">
              <div className="ptop">
                <div className="pic2" style={{ background: p.color, border: `1px solid ${p.borderColor}` }}>{p.icon}</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="pdt">{p.date}</span>
                  <a className="plk" href={p.link} target="_blank" rel="noopener noreferrer">↗</a>
                </div>
              </div>
              <div className="ptt2">{p.title}</div>
              <div className="pdc">{p.desc}</div>
              <div className="ptc">
                {p.tags.map(tag => (
                  <span className="tb" key={tag} style={{ color: p.tagColor, borderColor: p.tagBorder, background: p.tagBg }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
