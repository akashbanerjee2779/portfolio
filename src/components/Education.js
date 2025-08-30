import React from 'react';

function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-grid">
          <div className="education-card">
            <h3>B. Tech. CSE</h3>
            <h4>MCKV Institute of Engineering</h4>
            <span className="period">08/2021 - 06/2025</span>
            <p>Liluah, Howrah</p>
            <div className="grade">CGPA: 9.27</div>
          </div>
          <div className="education-card">
            <h3>CBSE - XII</h3>
            <h4>Sudhir Memorial Institute</h4>
            <span className="period">04/2018 - 03/2020</span>
            <p>Liluah, Howrah</p>
            <div className="grade">Percentage: 90.2%</div>
          </div>
        </div>
        <div className="certificates">
          <h3>Certificates</h3>
          <ul>
            <li>IIT Madras certified Data Science for Engineers - NPTEL</li>
            <li>IIT Kharagpur certified Data Analytics with Python - NPTEL</li>
            <li>Introduction to Machine Learning - IITKGP - NPTEL</li>
            <li>IIT Kharagpur certified Soft Skill development - NPTEL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;