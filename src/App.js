import "./App.css";
import background from "./bg.png";
import Image from "./Image";
import About from './About'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hire from './Hire'
import { useState,useEffect } from "react";
import Project from "./Project";
import ReactSwitch from "react-switch"

function App() {

  const [theme,settheme]=useState(localStorage.getItem("theme")|| 'light');
  const toggletheme=()=>{
    if(theme==='light'){
      settheme('dark')
    }
    else{
      settheme('light')
    }
  }
  useEffect(()=>{
     
    document.body.className=theme;
    localStorage.setItem("theme",theme)
  },[theme])


  return(
    <BrowserRouter>
      <div className={`App ${theme}`}>
        <ReactSwitch className="toggler" onChange={toggletheme} checked={theme==="dark"} />
        <Routes>
          <Route path="/" element={<Image img={background}/>}></Route>
          <Route exact path="/hire" element={<Hire/>}></Route>
          <Route path="/about" element={<About/>}/>
          <Route path="/Projects" element={<Project/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
    
  );
}

export default App;
