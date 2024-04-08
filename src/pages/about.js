import * as Imports from "../assets/importFile";

function About() {
  return (
    <section id="about">
      <div id="about-container">
        <h2 className="about-title highlight">About Me</h2>
        <h3 className="about-me subtle-highlight">Get to know me!</h3>
        <h3 className="skills-title subtle-highlight">Technical Skills</h3>
        <div className="about-me">
          {Imports.datafile.aboutMe.map((items, index) => (
            <p key={index}>{items.paragraph}</p>
          ))}
        </div>
        <div className="skills">
          {Imports.datafile.skills.map((items, index) => (
            <div key={index} className="skills-items">
              {items}
            </div>
          ))}
        </div>
        <Imports.Button
          text="Contact"
          link="./#contact"
          className="viewWorkBtn contact-btn"
        />
      </div>
    </section>
  );
}

export default About;
