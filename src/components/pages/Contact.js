import React from "react";
import Background from "../Particles";
import "../styles/Contact.css";


const dStyle = {
  color: "#FF4048",
};

const Contact = () => (
  <>
    <Background />
    <div className="contact text-center">
      <h1 className="display-3 hello">
        Contact<span style={dStyle}>.</span>
      </h1>
      <p className="lead">
        <a href="mailto:banu@breative.net" style={{ color: "white" }}>
          Email: banu@breative.net
        </a>
      </p>
      <p className="lead">
        <a href="https://github.com/banuakman" style={{ color: "white" }}>
          Github: github.com/banuakman
        </a>
      </p>
      <p className="lead">
        <a
          href="https://www.linkedin.com/in/banuakman/"
          style={{ color: "white" }}
        >
          LinkedIn: linkedin.com/in/banuakman/
        </a>
      </p>
    </div>
  </>
);

export default Contact;
