import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="profile-image-container">
          <img src="/images/profile.png" alt="Akash Banerjee" className="profile-image" />
        </div>
        <h1>Akash Banerjee</h1>
        <h2>Full Stack Developer</h2>
        <p>Specializing in clean, efficient code for real-world solutions. Skilled in backend development, optimizing databases, and delivering user-centered results in agile environments.</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Get In Touch</a>
          <a href="#projects" className="btn-secondary">View Projects</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;