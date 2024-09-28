import React from "react";
import { Link } from "react-router-dom";
import arrowRight from "../images/arrow-right.svg";

export default function Button({
  isLInk,
  to,
  style,
  children,
  className,
  onButtonCLick,
}) {
  // console.log(`isLInk :: `, isLInk);

  if (isLInk) {
    return (
      <Link
        to={to}
        style={{ ...style }}
        // target="blank"
        className={`btn inline-block btn-bg px-4 py-1 ${className}`}
      >
        {children}
        {/* <span>
          <img src={arrowRight} alt="arrow" className="arrow" />
        </span> */}
      </Link>
    );
  } else {
    return (
      <button
        className={`btn inline-block btn-bg px-4 py-1 ${className}`}
        style={{ ...style }}
        onClick={onButtonCLick}
      >
        {children}
      </button>
    );
  }
}
