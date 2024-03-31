import Button from "../components/button";
import { ReactComponent as LinkedinIcon } from "../assets/icons8-linkedin.svg";
import { ReactComponent as GithubIcon } from "../assets/icons8-github.svg";

function Introduction() {
  return (
    <section id="introduction">
      <div className="socials">
        <ul>
          <li>
            <a href="">
              <LinkedinIcon className="svg-linkedin" />
            </a>
          </li>
          <li>
            <a href="">
              <GithubIcon className="svg-github" />
            </a>
          </li>
        </ul>
      </div>
      <div className="intro-wrapper">
        <h1 className="subtle-highlight">
          Hi, I'm <span className="highlight">Kyle Fox</span>. I'm an SDET.
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
