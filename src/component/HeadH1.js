import React from "react";
// import animate from "animate.css";
import "animate.css";

function HeadH1({ text }) {
  return (
    <div className="experience mb-3 mt-4 mt-lg-0">
      <h1 className="text-center text-lg-start pt-0 pb-0 mb-0 mt-0 animate__animated animate__bounce">
        {text}
      </h1>
    </div>
  );
}

export default HeadH1;
