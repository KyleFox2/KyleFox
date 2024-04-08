import * as Imports from "../assets/importFile";

function Experience() {
  return (
    <section id="experience">
      <div id="experience-container">
        <h2 className="experience-title highlight">Experience</h2>
        <h3 className="about-me subtle-highlight">Relevant Experience</h3>
        <h3 className="skills-title subtle-highlight">Education</h3>
        <div className="relevant-experience">
          {Imports.datafile.experienceItems.map((items, index) => (
            <div key={index} className="experience-items">
              <h4>
                <span>
                  {items.role}
                  <span className="highlight"> @ {items.company}</span>
                </span>
              </h4>
              <p className="subtle-highlight">{items.dateWorked}</p>
              <ul id="experience-list">
                <li>{items.p1}</li>
                <li>{items.p2}</li>
                <li>{items.p3}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="education">
          {Imports.datafile.educationItems.map((items, index) => (
            <div key={index} className="education-items">
              <h4>
                <span>
                  <span className="highlight">{items.examBoard} </span>
                  {items.qualification}
                </span>
              </h4>
              <p>{items.datePassed}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
