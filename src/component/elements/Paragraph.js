import React from "react";

import "animate.css";

function Paragraph({ text }) {
  return (
    <div class="animate__animated animate__lightSpeedInRight animate__delay-1s">
      <p className="p">{text}</p>
    </div>
  );
}

export default Paragraph;
