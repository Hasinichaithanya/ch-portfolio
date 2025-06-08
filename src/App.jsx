// import { useState } from 'react'
import AboutMe from "./components/aboutMe/AboutMe";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
// import "./App.css";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Experience />
    </>
  );
}

export default App;
