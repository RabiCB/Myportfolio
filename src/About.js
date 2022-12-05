import React from 'react'
import './About.css'
import Application from './Application'
import Projects from './Projects'
import Cards from './Cards'
import Project from './Project'


const About = () => {
    
    
  return (
    <>
    <div className='About'>
        <h1>About Me/Skills</h1>
        <div className="about">
            <p>BORN 2000,BARDIYA NEPAl/TEXAS COLLEGE,KATHMANDU(2019-PRESENT)</p>
            <h5>I'm a Frontend Developer & UI/UX Designer based in Kathmandu, Nepal . I also have major skills on Photo editing, AI-illustator,Photography,Figma and Social Media handling</h5>
        </div>
        <div className="card">
            <Cards title="Frontend" about="Html ,CSS ,JavaScript ,React"/>
            <Cards title="Frameworks of CSS" about="Tailwind CSS , Bootstrap"/>
            <Cards title="Designing Tools" about="Figma, Adobe XD, Abobe Photoshop"/>
           

        </div>
      
    </div>
    <Projects/>
    <Project/>
    <Application/>
   
    </>
  )
}

export default About