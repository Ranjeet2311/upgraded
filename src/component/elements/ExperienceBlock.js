import React from 'react';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';

function ExperienceBlock({ title, responsibilities, techs }) {
  return (
    <div className="col-12 mt-4 experience">
      <h5
        className="fw-bolder text-decoration-underline"
        style={{ color: '#ffffff' }}
      >
        <span>
          <TaskAltRoundedIcon
            fontSize="large"
            style={{ fill: 'rgb(255 255 255 / 58%)' }}
          />
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
      {techs && (
        <p if className="fw-bold ps-3">
          Used tech stack:
        </p>
      )}
      <ul className="stack-wrap ps-2 pe-0">
        {techs &&
          techs.map((tech, i) => {
            return <li className="stack-pill">{tech}</li>;
          })}
      </ul>
    </div>
  );
}

export default ExperienceBlock;
