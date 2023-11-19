import React from "react";

function Image({ image, alt, name }) {
  return (
    <div className="image-wrapper text-center text-lg-start">
      <img className="image" src={image} alt={alt} />
      <p> {name} </p>
    </div>
  );
}

export default Image;
