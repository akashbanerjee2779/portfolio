import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Sample Collection Application",
      period: "02/2024 - 08/2024",
      description: "Data collection application for food sample pathogen detection with microservices and multiple user authentication.",
      tech: "Java (Spring Boot), MySQL, Android Studio"
    },
    {
      title: "Online Learning Platform",
      period: "08/2024 - Present",
      description: "Multi-user application for school/institute ecosystem. Teachers upload lectures, PDFs, and videos accessed by students.",
      tech: "Java (Spring Boot), MySQL, Android Studio"
    },
    {
      title: "Sudoku Solver",
      period: "09/2023",
      description: "Interactive Sudoku puzzle solver demonstrating backtracking, recursion, and constraint satisfaction problems.",
      tech: "Python (Flask), HTML, CSS, JavaScript"
    },
    {
      title: "Echo Music Player",
      period: "01/2024 - 03/2024",
      description: "Simple music application with play, save, and playlist creation features for downloaded songs.",
      tech: "Android Studio, Kotlin"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Personal Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <span className="period">{project.period}</span>
              <p>{project.description}</p>
              <div className="tech-stack">
                <strong>Tech Stack:</strong> {project.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;