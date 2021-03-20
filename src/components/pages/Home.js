import React from "react";
import Background from "../Particles";
import "../styles/Home.css";


const Home = () => (
  <>
    <Background />
    <div className="welcome text-center">
      <h1 className="display-2 hello">Hello.</h1>
      <h2 className="display-4">I am Banu Akman.</h2>
      <p className="lead">I am a full-stack developer.</p>
    </div>
  </>
);

export default Home;
