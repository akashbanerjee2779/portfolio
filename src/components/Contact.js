import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>I'm always open to discussing new opportunities and interesting projects.</p>
        <div className="contact-links">
          <a href="mailto:akashbanerjee2779@gmail.com" className="contact-link">
            📧 Email Me
          </a>
          <a href="https://linkedin.com/in/akash-banerjee-4bab1020b" target="_blank" rel="noopener noreferrer" className="contact-link">
            💼 LinkedIn
          </a>
          <a href="https://github.com/akashbanerjee2779" target="_blank" rel="noopener noreferrer" className="contact-link">
            🔗 GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;