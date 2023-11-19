import React from "react";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

function ExperienceBlock({ title, responsibilities }) {
  return (
    <div className="col-12 mt-4 ">
      <h5
        className="fw-bolder text-decoration-underline"
        style={{ color: "#0076db94" }}
      >
        <span>
          <TaskAltRoundedIcon fontSize="large" style={{ fill: "#0076db94" }} />
        </span>
        {title}
      </h5>
      <p className="fw-bold ps-3">Responsibilities:</p>
      <ul>
        {responsibilities &&
          responsibilities.map((resposibility, i) => {
            return <li>{resposibility}</li>;
          })}
      </ul>
    </div>
  );
}

export default ExperienceBlock;
