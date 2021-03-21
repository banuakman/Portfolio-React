import React from "react";
import Background from "../Particles";
import "../styles/Home.css";

const dStyle = {
  color: "#FF4048",
};

const Home = () => (
  <>
    <Background />
    <div className="welcome text-center">
      <h1 className="display-3 hello">
        Hello<span style={dStyle}>.</span>
      </h1>
      <h2 className="display-4">
        I am Banu Akman<span style={dStyle}>.</span>
      </h2>
      <p className="lead">
        I am a full-stack developer and a passionate designer<span style={dStyle}>.</span> <br></br>I drink coffee<span style={dStyle}>.</span> I write code<span style={dStyle}>.</span> I improve my design and skills every day<span style={dStyle}>.</span>
      </p>
    </div>
  </>
);

export default Home;
