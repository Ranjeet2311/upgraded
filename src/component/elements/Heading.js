import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function Heading({ text }) {
  // ---animation
  const up = useRef();

  useEffect(() => {
    gsap.from(up.current, { y: "-1000", duration: 1.5 });
  });
  return (
    <div>
      <header>
        <h1 className="heading">{text}</h1>
      </header>
    </div>
  );
}

export default Heading;
