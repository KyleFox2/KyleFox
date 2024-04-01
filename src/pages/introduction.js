import Button from "../components/button";
import Socials from "../components/socials";

function Introduction() {
  return (
    <section id="introduction">
      <Socials />
      <div className="intro-wrapper">
        <h1 className="subtle-highlight">
          Hi, I'm <span className="highlight">Kyle Fox</span>. I'm an SDET.
        </h1>
        <p className="intro-text">
          I specialize in optimizing the performance, safety and reliability of
          software. Let's work together to make software both robust and secure.
        </p>
        <Button text="Projects" link="./#projects" className="viewWorkBtn" />
      </div>
      <div className="mouse-container">
        <span className="scroll-icon">
          <span className="scroll-icon_dot"></span>
        </span>
      </div>
    </section>
  );
}

export default Introduction;
