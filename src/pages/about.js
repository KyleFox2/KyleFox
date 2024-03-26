function About() {
  const skills = ["HTML", "CSS", "JavaScript", "C#", "GitHub"];
  return (
    <section id="about">
      <h2 className="about-title">About Me</h2>
      <h3 className="about-me">All About Me</h3>
      <h3 className="skills">Skills</h3>
      <div className="about-me">
        <p>
          Hey there! I'm Kyle Fox, a QA Engineer with 2+ years of industry
          experience. I thrive on perfecting the user experience by crafting and
          executing meticulous test plans. Whether it's identifying bugs or
          collaborating within a team, my passion lies in ensuring the best
          quality software.
        </p>
        <p>
          I achieved a distinction in my BCS level software testing
          apprenticeship, providing a great opportunity to gain industry
          experience and work with talented individuals. As an ISTQB certified
          professional, I am equipped with both theoretical knowledge and
          practical expertise.
        </p>
        <p>
          I aspire to be an automation engineer, driven by a passion for
          streamlining testing processes and ensuring software quality. With a
          background in manual testing and industry certifications, my goal is
          to contribute to innovative and efficient testing solutions through
          automation frameworks and advanced technologies.
        </p>
      </div>
      <div className="skills">
        {skills.map((items, index) => (
          <div>{items}</div>
        ))}
      </div>
    </section>
  );
}

export default About;
