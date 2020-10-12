import React from "react";
import { Link } from "react-router-dom";
import one from "../images/one.jpg";
import two from "../images/two.jpg";
import three from "../images/three.jpg";
import "../style.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import debug from "../images/degug n.png";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="headline text-center ">
        <img
          src={debug}
          alt="Debu-nation logo"
          height="250px"
          width="300px"
          className="mt-5 img-responsive "
        />
        {/* <span className="h1">Debug Nation</span> */}
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-md-12  ">
              <p className="mt-5  height-300 font-weight-bolder h4 text-white text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis cum eius tempore earum ex,
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="jumbotron text-center ">Why our club stands out ?</h1>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <img
                className="picture-1 img-fluid"
                src={one}
                height=""
                width=""
                alt=""
              />
            </div>
            <div className="col-md-6 col-sm-6 tag-line">
              <ul>
                <li>
                  <h3 className="text-center mr-5">
                    We beleive in the 80 20 rule.
                  </h3>
                </li>
                <li>
                  <h4 className="text-center mr-3" id="tag-2">
                    Smart-work &gt;&gt; Hard-work
                  </h4>
                </li>
              </ul>
            </div>
          </div>
          <hr
            className="mt-3 border-dark"
            style={{ borderTop: "3px solid black" }}
          />
          <div className="row mt-1">
            <div className="col-md-6 mt-4 tag-line ">
              <h3 className="text-center tag-line">
                Communication is our key.
              </h3>
            </div>
            <div className=" col-md-6 mt-4">
              <img
                className="picture-2 img-fluid"
                src={two}
                height="371px"
                width="640px"
                alt=""
              />
            </div>
          </div>
          <hr
            className="mt-3  border-dark"
            style={{ borderTop: "3px solid black" }}
          />
          <div className="row mt-1">
            <div className="col-md-6 mt-4">
              <img
                className="picture-1 img-fluid"
                src={three}
                height=""
                width=""
                alt=""
              />
            </div>
            <div className="col-md-6 mt-4 tag-line">
              <ul>
                <li>
                  <h3 className="text-center tag-line mr-5">
                    And most importantly !!
                  </h3>
                </li>
                <li>
                  <h4 className="text-center mr-4" id="tag-2">
                    We love to code 😊
                  </h4>
                </li>
              </ul>
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
