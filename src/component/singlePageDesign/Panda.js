import React, { useState, useEffect, useRef } from "react";
import minion from "../../images/minion.png";
import minionEye from "../../images/minion-eye.png";

export default function Panda() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const leftEyeRef = useRef(null);
  // const rightEyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateEyeMovement = (eyeRef) => {
    if (!eyeRef.current) return {};

    const rect = eyeRef.current.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(
      mousePosition.y - eyeCenterY,
      mousePosition.x - eyeCenterX
    );

    const maxRadius = 10; // Max movement radius for the eye in pixels
    const eyeX = maxRadius * Math.cos(angle);
    const eyeY = maxRadius * Math.sin(angle);

    return {
      transform: `translate(${eyeX}px, ${eyeY}px)`,
    };
  };

  return (
    <div className="panda">
      <img
        ref={leftEyeRef}
        id="left-eye"
        src={minionEye}
        alt="left-eye"
        className="panda-left-eye eye"
        style={calculateEyeMovement(leftEyeRef)}
        loading="lazy"
      />
      <img
        ref={leftEyeRef}
        id="left-eye"
        src={minionEye}
        alt="right-eye"
        className="panda-right-eye eye"
        style={calculateEyeMovement(leftEyeRef)}
        loading="lazy"
      />
      <img src={minion} alt="panda" className="panda-body" loading="lazy" />
    </div>
  );
}
