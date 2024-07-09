import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectData from '../data/ProjectData';
import backgroundImage from '../images/background.jpg';
import Heading from '../component/Heading';
import moment from 'moment';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectDetails() {
  const [zoom, setZoom] = useState(false);
  const { projectId } = useParams();
  const navigate = useNavigate();

  let filterProject = projectData.find((item, index) => {
    return item.title === projectId;
  });

  const [data, setData] = useState(filterProject);
  // console.log(`data  :: `, data);
  const { createdAt, img, title, tags, code, demo, description } = data;

  const createdDate = moment(createdAt, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]').format(
    'DD MMMM YYYY'
  );

  function zoomHandler() {
    console.log(` setZoomsetZoom : `, zoom);
    return setZoom(!zoom);
  }

  return (
    <div className="project-wrapper wrapper container">
      <img className="background" src={backgroundImage} alt="bg" />

      <div className="row">
        <div className="col-12 col-lg-6 pb-2 pb-lg-0 details-img-wrap">
          <img
            onClick={zoomHandler}
            src={process.env.PUBLIC_URL + '/' + img}
            alt={filterProject.title}
            className={`details-image ${zoom ? 'zoom' : ''}`}
          />
          <p className="text-center">Click to zoom</p>
          {/* <div
            className={`zoom-icon ${zoom ? 'zoom' : ''}`}
            onClick={zoomHandler}
          ></div> */}
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start experience pt-0">
          <Heading className="text-start" text={title} />
          <p>{description ? description : '---Description not available---'}</p>
          <div className="row my-4 ms-0">
            <span className="text-white d-block mb-2 px-0">
              {tags ? ' Tech highlights' : 'Checkout github for more details'}
            </span>
            {tags &&
              tags.map((items, index) => {
                return (
                  <div className="colored-pill text-light" key={index}>
                    {items}
                  </div>
                );
              })}
          </div>
          <p className="experience w-100">
            Created at :{' '}
            {createdDate !== 'Invalid date'
              ? createdDate
              : 'Checkout github for date'}
          </p>

          <a
            href={demo}
            target="blank"
            class="btn btn-bg text-light w-100"
            type="button"
          >
            Live Demo
          </a>
          <a
            href={code}
            target="blank"
            class="btn btn-bg text-light w-100  mt-2"
            type="button"
          >
            Source Code
          </a>
          <a
            href="https://github.com/Ranjeet2311/"
            target="blank"
            class="btn btn-bg text-light w-100 my-2 d-flex justify-content-center align-items-center"
            type="button"
          >
            <GitHubIcon /> <span className="ms-2"> Go to my Github</span>
          </a>
          <button
            onClick={() => navigate(-1)}
            target="blank"
            class="btn btn-bg text-light w-100"
            type="button"
          >
            <ArrowBackIosIcon /> Back to projects
          </button>
        </div>
        <div className="col-12 mt-4"></div>
      </div>
    </div>
  );
}

export default ProjectDetails;
