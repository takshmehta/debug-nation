import React from "react";
import { Link } from "react-router-dom";
import Base from "./Base";
import Carousel1 from "./Carousel";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel1 />
      <div className="text-center text-light bg-secondary jumbotron">
        <h2 className=""> PROJECTS </h2>
      </div>
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
