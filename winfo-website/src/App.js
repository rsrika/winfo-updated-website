import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router';
import "./css/style.css";

import {Home} from './js/Home.js';
import {Journey} from './js/Journey.js';
import {Resume} from './js/resume.js';
import {About} from './js/About.js';
import ProjectsView from './js/projects';
import { IndvProjects } from './js/indvProjects';
import { Year } from './js/reflection';
import { QuarterlyReflection } from './js/quarterlyReflection';

function App(props) {
  
  let navigate = useNavigate();
  function handleClickHome() {
    console.log("handleClickHome");
    document.querySelector(".about").classList.remove("active");
    document.querySelector(".journey").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".projects").classList.remove("active");
    let element = document.querySelector(".home");
    console.log("element from home" , element);
    element.classList.add("active");
    navigate("/");
  }

  function handleClickJourney() {
    console.log("handleClickJourney");
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".about").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".projects").classList.remove("active");
    let element = document.querySelector(".journey");
    console.log("classes from Journey" , element.classList);
    element.classList.add("active");
    navigate("/journey");
  }

  function handleClickResume() {
    console.log("handleClickResume");
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".journey").classList.remove("active");
    document.querySelector(".about").classList.remove("active");
    document.querySelector(".projects").classList.remove("active");
    let element = document.querySelector(".resume");
    element.classList.add("active");
    navigate("/resume");
  }

  function handleClickAbout() {
    console.log("handleClickAbout");
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".journey").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".projects").classList.remove("active");
    let element = document.querySelector(".about");
    element.classList.add("active");
    navigate("/about");
  }

  function handleClickProjects() {
    console.log("handleClickProjects");
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".journey").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".about").classList.remove("active");
    let element = document.querySelector(".projects");
    element.classList.add("active");
    navigate("/projects");
  }

  function handleClickYear(year) {
    navigate("/journey/" + year);
  }
  
  function handleClickQuarter(year, quarter) {
    navigate("/journey/" + year +"/" + quarter);
  }

  function handleClickIndv(project) {
    navigate(project);
  }

 
  return (

    // rendering the app
   <div>
    <Routes>
      
      <Route path="/journey" element={
        <>
          {/* put components here */
            <Journey handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} handleClickYear={handleClickYear} reflectionsData={props.reflectionsData}/>
          }
        </>
      } />

      <Route path="/resume" element={
        <>
          {/* put components here */
            <Resume handleClick={handleClickJourney} handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} />
          }
        </>
      } />

      <Route path="/about" element={
        <>
          {/* put components here */
            <About handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} />
          }
        </>
      } />
       <Route path="/projects" element={
        <>
         {/* put components here */
            <ProjectsView data={props.projectList} handleClickIndv={handleClickIndv} handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} />
         }
        </>
      } />

      <Route path="/project/:projectname" element={
        <>
         {/* put components here */
            <IndvProjects data={props.projectListFull} handleClickIndv={handleClickIndv} handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} />
         }
        </>
      } />


      <Route path="/journey/:year" element={
        <>
          {/* put components here */
            <Year data={props.yearsData} handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} handleClickYear={handleClickYear} reflectionsData={props.reflectionsData}
            handleClickQuarter={handleClickQuarter}  />
          }
        </>
      } />

      <Route path="/journey/:year/:quarter" element={
        <>
          {/* put components here */
            <QuarterlyReflection data={props.yearsData} handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} handleClickYear={handleClickYear} reflectionsData={props.reflectionsData}
            handleClickQuarter={handleClickQuarter}  />
          }
        </>
      } />

      <Route path="/*" element={
        <>
          {/* put components here */
           
              <Home handleClick={handleClickJourney} handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} />
           
          }
        </>
      } />
    </Routes>
   </div>
  );
}

export default App;
