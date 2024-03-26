function Nav() {
  const navItems = [
    { name: "About", link: "./#about" },
    { name: "Projects", link: "./#projects" },
    { name: "Experience", link: "./#experience" },
    { name: "Contact", link: "./#contact" },
  ];

  return (
    <header>
      <nav className="navbar">
        <ul className="nav-items">
          <li>
            <a className="navBtn" id="kf" href="#">
              KF
            </a>
          </li>
        </ul>
        <ul className="nav-items">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="navBtn">
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
