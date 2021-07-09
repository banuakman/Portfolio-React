import React from "react";
import ProjectCards from "../Card";
import "../styles/Portfolio.css";

const Portfolio = () => (
  <div className="portfolio">
    <h1>Portfolio</h1>
    <div className="projects">
      <ProjectCards />
    </div>
  </div>
);

export default Portfolio;
