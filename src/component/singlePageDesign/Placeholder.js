import React from "react";

export default function Placeholder() {
  return (
    <div className="container">
      <div className="row placeholder-glow h-100">
        <div className="col-12 col-lg-6 placeholder">
          <p className="type-intro placeholder">
            <span className="colored-text placeholder"></span>
          </p>

          <h1 className="colored-text mt-2 placeholder">
            home.Frontend Developer / Web Development Enthusiast
          </h1>
          <p className="type-intro-second placeholder">
            <span className="colored-text ms-2 placeholder"></span>
          </p>
          <p className="description placeholder"></p>

          <div className="row hero-btns mt-3 pt-2 mt-md-4 pt-md-4 placeholder">
            <a
              className="ms-3 px-4 me-1 btn-bg colored-pill text-decoration-none placeholder"
              href="#contact"
            >
              <span className="me-2 placeholder"></span>
            </a>
          </div>
          <div className="row social-icons ps-lg-4 mt-4 mx-0 placeholder"></div>
        </div>
        <div className="col-12 col-lg-6 img-wrap d-none d-lg-block placeholder">
          <div className="rectangle">
            <img src="" alt="" srcset="" />
          </div>
          <div className="hero-img">
            <img
              src=""
              alt="profilepic"
              className="header-pic mt-lg-2 placeholder"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
