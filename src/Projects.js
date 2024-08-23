// src/components/Projects.js

import React, { useState } from 'react';
import './Projects.css'; // Import the CSS file

const initialProjects = [
  { title: 'Project 1', description: 'Description of Project 1', link: 'https://example.com/project1' },
  { title: 'Project 2', description: 'Description of Project 2', link: 'https://example.com/project2' },
  { title: 'Project 3', description: 'Description of Project 3', link: 'https://example.com/project3' },
  { title: 'Project 4', description: 'Description of Project 4', link: 'https://example.com/project4' },
  { title: 'Project 5', description: 'Description of Project 5', link: 'https://example.com/project5' },
  { title: 'Project 6', description: 'Description of Project 6', link: 'https://example.com/project6' },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? initialProjects : initialProjects.slice(0, 3);

  const handleViewMoreClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="projects" id='projects'>
      <h2>Projects</h2>
      <div className="projects-container">
        {displayedProjects.map((project, index) => (
          <div key={index} className="project-box">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">Visit Project</a>
          </div>
        ))}
      </div>
      <button className="view-more" onClick={handleViewMoreClick}>
        {showAll ? 'View Less' : 'View More'}
      </button>
    </div>
  );
};

export default Projects;
