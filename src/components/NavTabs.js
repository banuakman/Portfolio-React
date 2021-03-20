import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/NavTabs.css";

function NavTabs() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <ul className="navbar-nav">
        <li class="nav-item">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link
            to="/portfolio"
            className={
              location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </Link>
        </li>
        <li class="nav-item">
          <Link
            to="/contact"
            className={
              location.pathname === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
