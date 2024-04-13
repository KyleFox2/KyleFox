import * as Imports from "../assets/importFile";

function Socials() {
  return (
    <div className="socials">
      <ul>
        <li>
          <a id={"linkedin"} href="https://www.linkedin.com/in/kyle-fox1/">
            <Imports.LinkedinIcon className="svg-linkedin" />
          </a>
        </li>
        <li>
          <a id={"github"} href="https://github.com/KyleFox2">
            <Imports.GithubIcon className="svg-github" />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Socials;
