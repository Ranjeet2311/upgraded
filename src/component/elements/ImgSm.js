import React from "react";
import { useRef, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import { useControls } from "leva";

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 2,
  (x - rect.left - rect.width / 2) / 2,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(400px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function ImgSm({ image, alt, name }) {
  const ref = useRef(null);
  const [xys, setXys] = useState([0, 0, 1]);
  const { preset } = useControls({});
  const props = useSpring({ xys, config: config[preset] });

  return (
    <div className="ccard-main" ref={ref}>
      <animated.img
        className="ccard"
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => setXys([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect();
          setXys(calc(e.clientX, e.clientY, rect));
        }}
        src={image}
        alt={alt}
      />
      <p>{name}</p>
    </div>
  );
}

export default ImgSm;
