import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import contact from "../images/miles-burke-idhx-MOCDSk-unsplash (2).jpg";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="jumbotron h1 text-center mt-5">CONTACT</div>
      <div className="container-fluid mt-1">
        <div className="row">
          <div className="d-flex justify-content-center col-md-12  mt-5 " st>
            <form style={{ width: "400px" }}>
              <div class="form-group">
                <input
                  type="text"
                  className="form-control text-white bg-light  "
                  id="exampleFormControlInput1"
                  placeholder="Full Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  className="form-control text-white bg-light "
                  id="exampleFormControlInput1"
                  placeholder="Email Address"
                />
              </div>

              <div class="form-group">
                <textarea
                  class="form-control text-white bg-light"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="button" className=" col-md-12 btn btn-success">
                Submit
              </button>
            </form>
          </div>
          {/* <div className="col-md-6 mt-3">
            <img src={contact} alt="" />
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
