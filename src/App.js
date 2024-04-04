import React from "react";
import "./App.css";
import Introduction from "./pages/introduction";
import About from "./pages/about";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import Nav from "./components/nav";
import ProjectsDetailsScreen from "./pages/projectDetailsScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Nav />
              <Introduction />
              <About />
              <Projects />
              <Experience />
              <Contact />
            </div>
          }
        />
        <Route path="/projectdetails/:id" element={<ProjectsDetailsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
