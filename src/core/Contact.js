import emailjs from "emailjs-com";
import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const notify = () =>
    toast.success("Message Sent", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zuziwnm",
        "template_uuo9bhb",
        e.target,
        "user_dOS5BZTuX3evRflexrkKL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }
  return (
    <div>
      <Navbar />
      <div className="jumbotron h1 text-center mt-5">CONTACT</div>
      <div className="container-fluid mt-1">
        <div className="row">
          <div className="d-flex justify-content-center col-md-12  mt-5 ">
            <form onSubmit={sendEmail} style={{ width: "400px" }}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control text-dark bg-light  "
                  // id="exampleFormControlInput1"
                  placeholder="Full Name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control text-dark bg-light "
                  // id="exampleFormControlInput1"
                  placeholder="Email Address"
                  name="email"
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control text-dark bg-light"
                  // id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                  name="message"
                ></textarea>
              </div>
              <div className="">
                <input
                  onClick={notify}
                  type="submit"
                  className=" col-md-12 btn btn-success"
                  value="Send Message"
                ></input>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                <ToastContainer />
              </div>
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
}

// export default Contact;
