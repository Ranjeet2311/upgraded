import React from "react";

function Icon({ img }) {
  return (
    <div>
      <img src={img} alt="icons" height="auto" width="30px" loading="lazy" />
    </div>
  );
}

export default Icon;
