function Experience() {
  return (
    <section id="experience">
      <div id="experience-container">
        <h2 className="experience-title highlight">Experience</h2>
        <h3 className="about-me subtle-highlight">Relevant Experience</h3>
        <h3 className="skills-title subtle-highlight">Education</h3>
        <div className="relevant-experience">
          <div className="experience-items">
            <h4>
              <span>
                QA Engineer
                <span className="highlight"> @ Linney</span>
              </span>
            </h4>
            <p className="subtle-highlight">
              February 2024 – Present | Nottingham
            </p>
            <ul id="experience-list">
              <li>
                Successfully operated as the test lead on multiple projects,
                managing and coaching 2 new testers.
              </li>
              <li>
                Launched the test plan environment within Azure DevOps and
                created summary reports to accurately and efficiently convey the
                test status to stakeholders.
              </li>
              <li>
                Created complex SQL queries to perform calculations and
                transform data into the same format as the items under test.
              </li>
            </ul>
          </div>
          <div className="experience-items">
            <h4>
              <span>
                Software Tester
                <span className="highlight"> @ Tribal Group</span>
              </span>
            </h4>
            <p className="subtle-highlight">
              April 2021 – August 2023 | Nottingham
            </p>
            <ul id="experience-list">
              <li>
                Successfully operated as the test lead on multiple projects,
                managing and coaching 2 new testers.
              </li>
              <li>
                Launched the test plan environment within Azure DevOps and
                created summary reports to accurately and efficiently convey the
                test status to stakeholders.
              </li>
              <li>
                Created complex SQL queries to perform calculations and
                transform data into the same format as the items under test.
              </li>
            </ul>
          </div>
        </div>
        <div className="education">
          <div className="education-items">
            <h4>
              <span>
                <span className="highlight">BCS </span>| Level 4 Software
                Testing Apprenticeship
              </span>
            </h4>
            <p>April 2021 – April 2023 | Distinction</p>
          </div>
          <div className="education-items">
            <h4>
              <span>
                <span className="highlight">ISTQB </span>| Certified Tester
                Foundation Level
              </span>
            </h4>
            <p>July 2022 | Passed</p>
          </div>
          <div className="education-items">
            <h4>
              <span>
                <span className="highlight">ISTQB </span>| Certified Tester
                Foundation Level
              </span>
            </h4>
            <p>July 2022 | Passed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
