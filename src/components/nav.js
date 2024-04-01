import datafile from "../datafile.json";
import { useState, useEffect } from "react";

function Nav() {
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
          {datafile.navItems.map((item, index) => (
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
