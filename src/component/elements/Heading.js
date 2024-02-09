import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import 'animate.css';

function Heading({ text, align }) {
  // ---animation
  const up = useRef();

  useEffect(() => {
    gsap.from(up.current, { y: '-1000', duration: 1.5 });
  });
  return (
    <div
      className={align ? 'text-center text-lg-start head' : 'text-center head'}
    >
      <h2 className="animate__animated animate__flipInY animate__delay-10s  heading">
        {text}
      </h2>
    </div>
  );
}

export default Heading;
