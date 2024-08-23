// src/components/About.js

import React from 'react';
import './About.css'; // Import the CSS file

const skills = [
  { name: 'C++', level: 60 },
  { name: 'Java', level: 40 },
  { name: 'JavaScript', level: 90 },
  { name: 'HTML', level: 95 },
  { name: 'React.js', level: 70 },
  { name: 'SQL', level: 80 },
  { name: 'Verilog HDL', level: 80 }
];

const About = () => {
  return (
    <div className="about" id='about'>
      <h2>About Me</h2>
      <p>I am SUBHAM, an undergraduate Bachelor of Engineering student, currently in Bengaluru. Driven 2nd year Electronics and Communication undergrad with a fervent interest in web development and design. Actively cultivating skills in coding and UI/UX principles to craft captivating digital experiences. Seeking opportunities to apply expertise, collaborate with like-minded professionals, and Committed to continuous learning in future.</p>
      <div className="skills">
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            <div className="skill-icon">{skill.name}</div>
            <div className="skill-bar-container">
              <div
                className="skill-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
