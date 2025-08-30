import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Full stack Developer Intern",
      company: "CDAC Kolkata",
      period: "02/2024 - 09/2024",
      description: "Built RESTAPIs and microservices using Spring Boot and MySQL. Created front-end applications using Android Studio."
    },
    {
      title: "Frontend Developer Intern",
      company: "IBM",
      period: "06/2023 - 08/2023",
      description: "Built e-commerce website using HTML, CSS, JavaScript with multiple item selection, cart functionality, and user authentication."
    },
    {
      title: "Android Development Trainee",
      company: "Internshala",
      period: "01/2024 - 03/2024",
      description: "Completed detailed training with comprehensive tests. Built two projects from scratch. Certified by NSDC and Internshala."
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Work Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <span className="period">{exp.period}</span>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;