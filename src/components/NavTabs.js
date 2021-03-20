import React from "react";
import "./styles/NavTabs.css";

function NavTabs(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => props.handlePageChange("Home")}
            className={
              props.currentPage === "Home" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => props.handlePageChange("Portfolio")}
            className={
              props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => props.handlePageChange("Contact")}
            className={
              props.currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
