import G from './github-mark.svg';
import E from './email.svg';
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
      <div  className = "color5">
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
          
      </div >
      <div ref={about} className="color2">
        <h3>About</h3>
        <p>I'm a computer science major at Rutgers, planning to graduate in 2026</p>
      </div>
      <div ref={projects} className="color3">
        <h3>Projects</h3>
        <a href="https://github.com/avsomers25"><img src={G} className="App-logo" alt="website" /></a>
      </div>
      <div ref={resume} className="color4">
        <h3>Resume</h3>
      </div>
      <div ref={contact} className="color2">
        <h3>Contact</h3>
        <img src={E} className="App-logo" alt="website" />
        <p>avsomers25@gmail.com</p>
      </div>
    </div>
  )
}




function App() {
  return (
    <div className="App">
      <div className="App-body">
      <Menu></Menu>

      </div>

    </div>
  );
}

export default App;
