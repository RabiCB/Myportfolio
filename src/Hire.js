import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "./hire.css";

const Hire = () => {
  const [addons, setaddons] = useState(false);
  const navigate=useNavigate();
  const handleNavigate=()=>{
    navigate("/")
  }

  

  const form = useRef();
  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_gyou8pn",
        "template_dc8s3ys",
        form.current,
        "2BsGI2e_7dw73C6jf"
      )
      .then(setaddons(true).console.error("error"));
    e.preventDefault();
    alert("email has been delivered")
  };

  return (
    <>
    <button className="backbtn" onClick={handleNavigate}>Back</button>
      <div>
        <form className="body" ref={form} onSubmit={sendEmail}>
          <h1 className="tag" style={{ color: "red" }}>
            Any question and queries
          </h1>
          <h4 style={{ color: "balck" }}>Contact-No: +9779823047073</h4>
          <input
            className="input-area"
            name="message"
            type="text"
            placeholder="type your questions and queries"
          />
          <input
            className="email-area"
            name="email"
            type="text"
            placeholder="type your email"
          />
          <input
            className="email-area"
            name="name"
            type="text"
            placeholder="type your name /optional "
          />
          <button type="submit" className="submitbtn" value="send">
            submit
          </button>
          {addons ? (
            <div className="addons">Message is sucessfully delivered</div>
          ) : (
            ""
          )}
        </form>
      </div>
    </>
  );
};
export default Hire;
