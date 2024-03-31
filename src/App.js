import React from "react";
import "./App.css";
import Introduction from "./pages/introduction";
import About from "./pages/about";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import Nav from "./components/nav";

function App() {
  return (
    <div className="container">
      <Nav />
      <Introduction />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
