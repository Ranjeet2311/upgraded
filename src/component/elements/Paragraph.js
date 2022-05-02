import React from "react";

import "animate.css";

function Paragraph({ text }) {
  return (
    <div class="animate__animated animate__zoomInDown animate__delay-10s">
      <p className="p">{text}</p>
    </div>
  );
}

export default Paragraph;
