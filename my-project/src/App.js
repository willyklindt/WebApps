import React from "react";
import "./App.css";

function Portfolio() {
  return (
    <div className="body">
      <header className="header">
        <h1>william grynderup klindt</h1>
        <nav>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <div className="portfolio-container">
        <h1>My Website Design Portfolio</h1>
        <div className="project-card">
          <h2>Project 1</h2>
          <img
            src="/path/to/project1-screenshot.png"
            alt="Screenshot of Project 1"
          />
          <p>A brief description of the project.</p>
          <a href="/path/to/project1">View Project</a>
        </div>
        <div className="project-card">
          <h2>Project 2</h2>
          <img
            src="/path/to/project2-screenshot.png"
            alt="Screenshot of Project 2"
          />
          <p>A brief description of the project.</p>
          <a href="/path/to/project2">View Project</a>
        </div>
        {/* Add more project cards here as needed */}
      </div>
    </div>
  );
}

export default Portfolio;
