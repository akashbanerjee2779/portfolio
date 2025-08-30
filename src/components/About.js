import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p>I'm a passionate Full Stack Developer with expertise in building scalable web applications and microservices. Currently pursuing B.Tech in Computer Science Engineering with a CGPA of 9.27, I combine academic excellence with practical industry experience.</p>
        <div className="contact-info">
          <div className="contact-item">
            <span>📧</span>
            <a href="mailto:akashbanerjee2779@gmail.com">akashbanerjee2779@gmail.com</a>
          </div>
          <div className="contact-item">
            <span>📍</span>
            <span>Howrah, India</span>
          </div>
          <div className="contact-item">
            <span>💼</span>
            <a href="https://linkedin.com/in/akash-banerjee-4bab1020b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="contact-item">
            <span>🔗</span>
            <a href="https://github.com/akashbanerjee2779" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;