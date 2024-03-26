//import Button from "./components/button";
import Button from "../components/button";

function Introduction() {
  return (
    <section id="introduction">
      <div className="intro-wrapper">
        <h1>
          <span className="subtle-highlight">
            Hi, I'm <span className="highlight">Kyle Fox</span>. I'm an SDET.
          </span>
        </h1>
        <p className="intro-text">
          I ensure top-notch performance and reliability for web applications
          and websites. Let's make sure every click is flawless.
        </p>
        <Button text="Projects" link="./#projects" className="viewWorkBtn" />
      </div>
    </section>
  );
}

export default Introduction;
