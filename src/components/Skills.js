import React from 'react';

function Skills() {
  const skills = [
    "Java", "Spring Boot", "Python", "MySQL", "Oracle", "Express", "Linux", "C",
    "HTML", "CSS", "JavaScript", "Android Studio", "Kotlin" ,"ReactJS" ,"GOLang" ,"AI/ML"
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;