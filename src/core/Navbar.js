import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg font-weight-bold navbar-light bg-light fixed-top"
      // style={{ minWidth: "100%" }}
    >
      <Link to="/">
        <span className="ml-2"></span>
        <a className="navbar-brand animate__animated animate__swing " href="#">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/debug-nation.appspot.com/o/degug%20n.png?alt=media&token=81930d61-905c-4b87-a2ad-dcbcc4ef58aa"
            width="30"
            height="30"
            class="d-inline-block align-top mr-2"
            alt=""
            loading="lazy"
          ></img>
          <span className="mr-5" style={{ fontSize: 24, color: "#585858" }}>
            DEBUG NATION
          </span>
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item active ">
            <Link to="/">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about">
              <a className="ml-0 nav-link" href="#">
                About Us
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/team">
              <a className="nav-link" href="#">
                Team
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
