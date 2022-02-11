import React from "react";
import Button from "@mui/material/Button";

function CardItem({ img, title, code, demo }) {
  return (
    <div className="links-container">
      <img src={img} alt="Pic" />
      <h4>{title}</h4>
      <div className="links-container-btn">
        <Button variant="contained" target="_blank" href={code}>
          source code
        </Button>

        <Button variant="contained" target="_blank" href={demo}>
          Live Demo
        </Button>
      </div>
    </div>
  );
}

export default CardItem;
