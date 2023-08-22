import G from './github-mark-white.svg';
import E from './email.svg';
import './App.css'

import ProjectCard from "./ProjectCard"


import ResumeItem from './ResumeItem';

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
      <div className = "navBar">
        <ul ref = {home}>
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
      <div ref={about} className="color3" style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gridGap: 20}}>
        <div></div>
        <div>
        <h1>About</h1>
        <p>I am a sophomore Computer Science major in the Honors Program in the College of Arts and Sciences at Rutgers University, New Brunswick.  I am familar with Python, C, Unity and React. I am motivated by problem solving, collaborating and innovating. In addition to my studies, I enjoy playing ultimate frisbee and am a member of the club team on campus. 
        </p>
        </div>
        <div>

        </div>
        
      </div>
      <div ref={projects} className="color3">
        <h1>Projects</h1>
        <a href="https://github.com/avsomers25"><img src={G} className="App-logo" alt="website" /></a>
        <ProjectCard></ProjectCard>
        <p>my github</p>
      </div>
      <div ref={resume} className="color4">
        <h1>Resume</h1>
        <ResumeItem  Info={{ jobtitle: 'Computer Science Intern', daterange: 'September 2021 - January 2022', company: 'iCIMS', 
        desc: 'As part of a Mentorship course at school, worked one day per week in the iCIMS (talent cloud development company) office. Tested the new job postings and updated them to align with new designs in React. Used JavaScript testing utility, Enzyme, to test the code' 
        }}/>
        <ResumeItem  Info={{ jobtitle: 'Bioinformatics Intern', daterange: 'June 2021 - July 2021', company: 'Foghorn Therapeutics', 
        desc: 'independently converted Jupyter Notebooks to Python script to run from the command line and executed unit tests for the script. Investigated a new method of combining machine learning clustering applied to sequencing data, implemented production versions including visualization. GitHub link to project repository for work covering summer 2020 and 2021:https://github.com/dllahr/summer2020' 
        }}/>
        <ResumeItem  Info={{ jobtitle: 'Bioinformatics Intern', daterange: 'July 2020 - August 2022', company: 'Foghorn Therapeutics', 
        desc: 'Given free reign to convert a Jupyter Notebook to a Python script that can be run from the command line. Coded unit tests for the Python script' 
        }}/>
      </div>
      <div ref={contact} className="color3">
        <h1>Contact</h1>
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
