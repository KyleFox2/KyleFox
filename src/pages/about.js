import Button from "../components/button";
import datafile from "../datafile.json";

function About() {
  return (
    <section id="about">
      <div id="about-container">
        <h2 className="about-title highlight">About Me</h2>
        <h3 className="about-me subtle-highlight">Get to know me!</h3>
        <h3 className="skills-title subtle-highlight">Technical Skills</h3>
        <div className="about-me">
          {datafile.aboutMe.map((items, index) => (
            <p key={index}>{items.paragraph}</p>
          ))}
        </div>
        <div className="skills">
          {datafile.skills.map((items, index) => (
            <div key={index} className="skills-items">
              {items}
            </div>
          ))}
        </div>
        <Button text="Contact" link="./#contact" className="viewWorkBtn" />
      </div>
    </section>
  );
}

export default About;
