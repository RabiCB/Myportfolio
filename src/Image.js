import React from "react";
import "./Image.css";
import github from "./github.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import About from './About'



const Image = ({ img }) => {
  return (
    <>
    <div className="Image">
      <img src={img} alt="background" />
      <div className="info-about">
        <h1>Hello ,I'm<br></br> Chandra Bhandari(Rabi).</h1>
        <h4>Frontend Developer & UI/UX Designer</h4>
        <a href="https://drive.google.com/file/d/1M_IAt9NilazF0R_-huZyBGJFS9iomb9d/view?usp=sharing"><button className="btn">Download CV</button></a>
        <div className="social-media">
          <a href="https://github.com/RabiCB?tab=repositories">
            <img className="logo" src={github} alt="Glogo" />
          </a>
          <a href="https://www.facebook.com/Rollingrabin/">
            <img src={facebook} alt="flogo" />
          </a>
          <a href="https://www.instagram.com/iam.rabin/">
            <img src={instagram} alt="Ilogo" />
          </a>
        </div>
      </div>
     

      
    </div>
    <About/>
    </>
  
  );
};

export default Image;
