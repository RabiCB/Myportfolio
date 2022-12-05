import React from "react";
import "./Project.css";
import { useNavigate } from "react-router-dom";


const Skills = () => {
 
  const navigate=useNavigate();

  const handleClick=()=>{
    navigate("./hire")
    
   
  }

  return (
    <>
    
      
    
      < div className="projects">

        <h2 style={{color:'black'}}>
          Work Together.<br></br>Grow faster
        </h2>
       <button  style={{cursor:'pointer'}} className="btn1" onClick={handleClick}>Contact Me</button>
    
    </div>
    
    </>
  );
};

export default Skills;
