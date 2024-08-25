import React from "react";
import clap from "../images/clap.png";
import spinner from "../images/spinner.svg";
import "../style/spinner.scss";

function Spinner() {
  return (
    <>
      <div className="spinner d-flex flex-column justify-content-center align-items-center col-12">
        <img
          src={spinner}
          alt="loading"
          style={{ width: "140px", objectFit: "cover" }}
        />
        <img
          className="pic"
          src={clap}
          alt="loading"
          style={{ width: "40px", height: "40px", objectFit: "cover" }}
        />
        <p className="text-center magenta mt-4">
          Loading your content... Good things take time!
        </p>
      </div>
    </>
  );
}

export default Spinner;
