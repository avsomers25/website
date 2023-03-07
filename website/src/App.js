import R from './R.png';
import './App.css';

import {useRef} from "react";

function Menu(){
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const resume = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className = "color1">
        <ul ref = {home}>
            <li onClick={() => scrollToSection(home)} className="link">
              Home
            </li>
            <li onClick={() => scrollToSection(about)} className="link">
              About
            </li>
            <li onClick={() => scrollToSection(projects)} className="link">
              Projects
            </li>
            <li onClick={() => scrollToSection(resume)} className="link">
              Resume
            </li>
            <li onClick={() => scrollToSection(contact)} className="link">
              Contact
            </li>
          </ul>
          
      </div>
      <div ref={about} className="color2">
        <h3>About</h3>
      </div>
      <div ref={projects} className="color3">
        <h3>Projects</h3>
      </div>
      <div ref={resume} className="color4">
        <h3>Resume</h3>
      </div>
      <div ref={contact} className="color5">
        <h3>Contact</h3>
      </div>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Menu></Menu>
        <img src={R} className="App-logo" alt="logo" />
        <p>
          <br></br>
          <br></br>
          I am a student at Rutgers studying CS
        </p>
        <a
          className="App-link"
          href="https://github.com/avsomers25"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

export default App;
