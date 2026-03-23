import React from 'react';

const Footer = () => {
  return (
    <div style={{ borderTop: '1px solid var(--br)' }}>
      <div className="fi">
        <div>
          <div className="flo">&lt;MG.dev /&gt;</div>
          <div className="fcp">© 2026 Mousam Gangwar · Crafted with ❤️ and ☕</div>
        </div>
        <div className="frt">
          <a className="fico" href="https://www.linkedin.com/in/mousam97/" target="_blank" rel="noopener noreferrer" title="LinkedIn">💼</a>
          <a className="fico" href="https://github.com/Mousamg77" target="_blank" rel="noopener noreferrer" title="GitHub">🐙</a>
          <a className="fico" href="mailto:mousamgangwar77@gmail.com" title="Email">✉️</a>
          <a className="fico" href="tel:+919536577206" title="Call">📱</a>
          <button className="stb" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑ Top</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
