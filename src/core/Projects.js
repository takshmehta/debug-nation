import React from "react";

const Projects = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-around">
        <div>
          <div className="card mt-4" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title text-center">Project-1</h5>
              {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="card-link">
                Link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="card mt-4" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title text-center">Project-2</h5>
              {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="card-link">
                Link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="card mt-4" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title text-center">Project-3</h5>
              {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="card-link">
                Link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;