import React from "react";
// import animate from "animate.css";
import "animate.css";

function HeadH1({ children }) {
  return (
    <div className="experience mb-1 mt-1 mt-lg-0 ps-3">
      <h1 className="text-center text-lg-start pt-0 pb-0 mb-0 mt-0 animate__animated animate__bounce">
        {children}
      </h1>
    </div>
  );
}

export default HeadH1;
