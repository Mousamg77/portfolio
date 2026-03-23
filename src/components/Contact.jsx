import React, { useState } from 'react';

const Contact = () => {
  const [btnText, setBtnText] = useState('Send Message →');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText('✅ Message Sent!');
    setIsSent(true);
    setTimeout(() => {
      setBtnText('Send Message →');
      setIsSent(false);
      e.target.reset();
    }, 3200);
  };

  return (
    <section id="contact" className="sec">
      <div className="shd rv"><span className="ey">Let's Connect</span><h2 className="stit">Contact</h2></div>
      <p className="rv" style={{ textAlign: 'center', color: 'var(--mt)', fontSize: '.84rem', maxWidth: '440px', margin: '0 auto 3rem', lineHeight: '1.85' }}>
        Open to internships, freelance projects & full-time opportunities. Let's build something great together!
      </p>
      <div className="cog">
        <div>
          <a className="slk rv d1" href="mailto:mousamgangwar77@gmail.com"><span className="slic">✉️</span><div><div className="sll">Email</div><div className="slv">mousamgangwar77@gmail.com</div></div></a>
          <a className="slk rv d2" href="https://www.linkedin.com/in/mousam97/" target="_blank" rel="noopener noreferrer"><span className="slic">💼</span><div><div className="sll">LinkedIn</div><div className="slv">linkedin.com/in/mousam97</div></div></a>
          <a className="slk rv d3" href="https://github.com/Mousamg77" target="_blank" rel="noopener noreferrer"><span className="slic">🐙</span><div><div className="sll">GitHub</div><div className="slv">github.com/Mousamg77</div></div></a>
          <a className="slk rv d4" href="tel:+919536577206"><span className="slic">📱</span><div><div className="sll">Mobile</div><div className="slv">+91 9536577206</div></div></a>
        </div>
        <div className="cfm rv d2">
          <form onSubmit={handleSubmit}>
            <div className="frw">
              <input className="inp" type="text" placeholder="Your Name" required/>
              <input className="inp" type="email" placeholder="Your Email" required/>
            </div>
            <input className="inp" type="text" placeholder="Subject" style={{ marginBottom: '.88rem', display: 'block', width: '100%' }}/>
            <textarea className="inp" placeholder="Your Message..."></textarea>
            <button className="bsb" type="submit" style={{ background: isSent ? 'linear-gradient(135deg,#059669,#10b981)' : '' }}>
              {btnText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
