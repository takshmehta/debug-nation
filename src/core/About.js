import React from "react";
import "../style.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bgc from "../images/Coffee Please.png";
import team from "../images/3369515.jpg";
import learn from "../images/learn.jpg";
import create from "../images/create.jpg";
import debugbug from "../images/debugbug.jpg";
import repeat from "../images/repeat.jpg";
import { Parallax } from "react-parallax";
const About = () => {
  return (
    <div>
      <Navbar />

      <div className="text-center mt-5 headline">
        <img src={bgc} alt="" className="img-fluid " />
      </div>

      <div>
        <h1 className="jumbotron text-center  ">How we work ?</h1>
      </div>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4  tag-line">
              <ul>
                <li>
                  <h3 className="text-center mr-5">Small Teams</h3>
                </li>
              </ul>
            </div>
            <div className="col-md-4 ">
              <img
                className="picture-1 img-fluid"
                src={team}
                height=""
                width=""
                alt=""
              />
            </div>
            <div className="col-md-4 tag-line text-center mt-3 d-flex justify-content-start ">
              <ul>
                <li> &gt; Interdisciplinary teams with big ideas.</li>
                <li> &gt; Design and prototyping from day one.</li>
              </ul>
            </div>
          </div>
          <hr
            className="mt-3 border-dark"
            style={{ borderTop: "3px solid black" }}
          />
          <h1 className="text-center">A simple iterative process.</h1>
          <div className="row mt-1">
            <div className="col-md-3 mt-4">
              <h3 className="text-center">Learn</h3>
              <img
                className="picture-1 img-fluid"
                src={learn}
                height=""
                width=""
                alt=""
              />
            </div>
            <div className="col-md-3 mt-4   ">
              <h3 className="text-center">Create</h3>
              <img src={create} className="img-fluid" alt="" />
            </div>
            <div className="col-md-3 mt-4 ">
              <h3 className="text-center">Debug</h3>
              <img src={debugbug} className="img-fluid" alt="" />
            </div>
            <div className="col-md-3 mt-4 ">
              <h3 className="text-center">Repeat</h3>
              <img src={repeat} className="img-fluid" alt="" />
            </div>
          </div>
          <hr
            className="mt-3 border-dark"
            style={{ borderTop: "3px solid black" }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
