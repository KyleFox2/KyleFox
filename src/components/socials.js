import { ReactComponent as LinkedinIcon } from "../assets/svgs/icons8-linkedin.svg";
import { ReactComponent as GithubIcon } from "../assets/svgs/icons8-github.svg";

function Socials() {
  return (
    <div className="socials">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/kyle-fox1/">
            <LinkedinIcon className="svg-linkedin" />
          </a>
        </li>
        <li>
          <a href="https://github.com/KyleFox2">
            <GithubIcon className="svg-github" />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Socials;
