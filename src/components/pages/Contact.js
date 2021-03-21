import React from "react";
import Background from "../Particles";
import "../styles/Contact.css";


const dStyle = {
  color: "#E8C3B9",
};

const Contact = () => (
  <>
    <Background />
    <div className="contact text-center">
      <h1 className="display-3 contacttitle">
        Contact<span style={dStyle}>.</span>
      </h1>
      <p className="lead">
        <a href="mailto:banu@breative.net" style={{ color: "#1A1A1A" }}>
          banu@breative.net
        </a>
      </p>
      <p className="lead">
        <a href="https://github.com/banuakman" style={{ color: "#1A1A1A" }}>
          github.com/banuakman
        </a>
      </p>
      <p className="lead">
        <a
          href="https://www.linkedin.com/in/banuakman/" style={{ color: "#1A1A1A" }}
        >
          linkedin.com/in/banuakman/
        </a>
      </p>
    </div>
  </>
);

export default Contact;
