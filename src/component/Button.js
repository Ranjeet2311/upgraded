import React from "react";
import { Link } from "react-router-dom";

export default function Button({ link, isLInk, to, style, children }) {
  if (isLInk) {
    <Link to={to}>
      <button
        className="btn inline-block btn-bg px-4 py-2"
        style={{ ...style }}
      >
        {children}
      </button>
    </Link>;
  } else {
    return (
      <div className="btn inline-block btn-bg  px-4 py-2" style={{ ...style }}>
        {children}
      </div>
    );
  }
}
