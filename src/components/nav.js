import * as Imports from "../assets/importFile";

function Nav() {
  const baseUrl = window.location.origin;

  Imports.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <header>
      <nav className="navbar">
        <ul className="nav-items">
          <li>
            <a className="navBtn" id="kf" href={baseUrl}>
              KF
            </a>
          </li>
        </ul>
        <ul className="nav-items">
          {Imports.datafile.navItems.map((item, index) => (
            <li key={index}>
              <a href={baseUrl + item.link} className="navBtn">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
