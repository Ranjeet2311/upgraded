import React from "react";
// import animate from "animate.css";
import "animate.css";

function HeadH1({ text }) {
  return (
    <div class="animate__animated animate__zoomInDown animate__delay-10s">
      <h1>{text}</h1>
    </div>
  );
}

export default HeadH1;
