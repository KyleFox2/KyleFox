import React from "react";
import "./App.css"; // Import your CSS file for styling

function App() {
  return (
    <div className="container">
      <header>
        <nav className="navbar">
          <ul className="nav-items">
            <li>
              <a className="navBtn" id="kf" href="#">
                KF
              </a>
            </li>
          </ul>
          <ul className="nav-items">
            <li>
              <a className="navBtn" href="#">
                About
              </a>
            </li>
            <li>
              <a className="navBtn" href="#">
                Projects
              </a>
            </li>
            <li>
              <a className="navBtn" href="#">
                Experience
              </a>
            </li>
            <li>
              <a className="navBtn" href="#">
                Skills
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="introduction">
        <div className="intro-wrapper">
          <h1>
            <span className="subtle-highlight">
              Hi, I'm <span className="highlight">Kyle Fox</span>. I'm an SDET.
            </span>
          </h1>
          <p>
            I ensure top-notch performance and reliability for web applications
            and websites. Let's make sure every click is flawless.
          </p>
          <button className="viewWorkBtn">Projects</button>
        </div>
      </section>
      <section id="about">
        <h2>About</h2>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project">
            <h3>Project Title</h3>
            <p>Description of the project goes here.</p>
          </div>
        </div>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <ul>
          <li>Work Experience 1</li>
          <li>Work Experience 2</li>
        </ul>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
