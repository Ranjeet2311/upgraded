import React from "react";

function Icon({ img }) {
  return (
    <div>
      <img
        src={img}
        alt="icons"
        height="30"
        width="30px"
        className="mb-2"
        loading="lazy"
      />
    </div>
  );
}

export default Icon;
