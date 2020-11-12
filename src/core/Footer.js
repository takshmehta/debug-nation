import React from "react";

const Footer = () => {
  return (
    <div className="footer ">
      <div class="blockquote text-center">
        <h1 class="mb-0 mt-4">
          Debug Nation
          <p class="text-muted h3">We code, we build </p>
          <div class="footer-copyright text-center py-3 h5">
            © 2020 by Debug Nation
          </div>
        </h1>
      </div>

      <div class="container ">
        <div class="row width-300 d-flex ml-auto mr-auto">
          <div class="col-md-12 ">
            <div
              class="text-center d-flex justify-content-between"
              // style={{ width: "100px" }}
            >
              {/* <a class="fb-ic  ">
                <i class="fab fa-facebook-f fa-lg white-text md-5   fa-2x"> </i>
              </a>
              <a class="tw-ic">
                <i class="fab fa-twitter fa-lg white-text md-5  fa-2x"> </i>
              </a> */}
              {/* <a class="gplus-ic">
                <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 fa-2x">
                  {" "}
                </i>
              </a> */}
              {/* <a class="li-ic ">
                <i class="fab fa-linkedin-in fa-lg white-text md-5 fa-2x"> </i>
              </a>
              <a class="ins-ic ">
                <i class="fab fa-instagram fa-lg white-text md-5 fa-2x"> </i>
              </a> */}
              {/* <a class="pin-ic">
                <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
