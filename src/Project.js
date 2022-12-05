import React, { useState } from "react";
import "./projectcard.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Project = () => {
  const [hovering, setHovering] = useState(false);
  const handleHover = () => {
    setHovering(true);
  };
  const handleHoverout = () => {
    setHovering(false);
  };
  const [hovering2, setHovering2] = useState(false);
  const handleHover2 = () => {
    setHovering2(true);
  };
  const handleHoverout2 = () => {
    setHovering2(false);
  };



  return (
    <>
      <div className="project-title">
        <h2>Hosted Projects</h2>
      </div>
      <div className="project-card">
        <div className="card1">
          <a
            onMouseOut={handleHoverout}
            onMouseOver={handleHover}
            href="https://movie-tonight-dde18.web.app/"
          >
            <img
              className="card-image"
              src="https://cdn.shopify.com/s/files/1/0630/8509/products/pst2344sm_large.jpeg?v=1531589989"
              alt="no way home"
            />
          </a>
          <span>Movie Searching React Application</span>
          {hovering ? <button className="mb-btn">visit</button> : ""}
        </div>

        <div className="card1">
          <a
          onMouseOut={handleHoverout2}
            onMouseOver={handleHover2}
            href="https://facebook-e62e6.web.app/?fbclid=IwAR3sC8aBqYTJS39lU2b3sV3ZLn4h2LqFG1EtWKIytbjeP_H1vi_YDcb2D4k"
          >
            <img
              className="card-image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png"
            />
          </a>
          <span>facebook Clone</span>
          {hovering2 ? <button className="mb-btn">visit</button> : ""}
        </div>
      </div>
      <div className="tags-link">
       
        <a href="https://image-gallery-6d3d0.web.app/?code=mY6Ye9xrIVIJaDm9VuZmpojHc98B71gxWH4qB8d0oYrgL&state=SktRcEU5Z2NXOVQ3dFR6bmdpajh4UC1LTy4yNVlYMkhqNkNIQWFqX0YuRw%3D%3D">
          <span
           
            className="linksto"
          >
            React Image Gallery{" "}
          </span>
        </a>
        <a href="https://foodtrecipeapp.web.app/">
          <span
            className="linksto"
          >
            Food recipe searching app
          </span>
        </a>
      </div>
    </>
  );
};

export default Project;
