import React from "react";

function ImgSm({ image, alt, name }) {
  return (
    <div className="small-image-wrapper">
      <img
        className="small-image"
        // src={process.env.PUBLIC_URL + { img }}
        src={image}
        alt={alt}
      />
      <p> {name} </p>
    </div>
  );
}

export default ImgSm;
