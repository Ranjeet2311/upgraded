import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import projectData from '../data/ProjectData';
import backgroundImage from '../images/background.jpg';
import Heading from '../component/Heading';
import moment from 'moment';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import PreviewIcon from '@mui/icons-material/Preview';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Divider from '../component/Divider';
import Card from '../component/Card';
import Accordian from '../component/Accordian';
import MultiCarousel from '../component/MultiCarousel';

function ProjectDetails() {
  const [zoom, setZoom] = useState(false);
  const { projectId } = useParams();
  const navigate = useNavigate();

  let filterProject = projectData.find((item, index) => {
    return item.title === projectId;
  });
  const { createdAt, img, title, tags, code, demo, description, ref } =
    filterProject;
  console.log(`filterProject :: `, filterProject);

  const createdDate = moment(createdAt, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]').format(
    'DD MMMM YYYY'
  );

  const relatedData = projectData.filter((related, i) => {
    return related.ref === ref && related.title !== title;
  });

  function zoomHandler() {
    console.log(` setZoomsetZoom : `, zoom);
    console.log(`ref :: `, ref);
    console.log(`relatedData ::; `, relatedData);
    return setZoom(!zoom);
  }

  return (
    <div className="wrapper container">
      <img className="background" src={backgroundImage} alt="bg" />
      <div className="row">
        <div className="col-12 col-lg-6 pt-4 pb-2 pb-lg-0 details-img-wrap">
          <div className="text-center mb-4 d-flex align-items-center btn experience">
            <Link className="reverseLinks" to="/projects">
              Projects
            </Link>
            <p className="mx-1">/ </p>
            <Link className="reverseLinks" to={`/projects/${title}`}>
              {title}
            </Link>
          </div>
          <img
            onClick={zoomHandler}
            src={process.env.PUBLIC_URL + '/' + img}
            alt={title}
            className={`details-image ${zoom ? 'zoom' : ''}`}
          />
          <p className="text-light text-center experience">
            Click on imgae to zoom / shrink
          </p>
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
          <p className="experience w-100 mb-2">
            Created at :{' '}
            {createdDate !== 'Invalid date'
              ? createdDate
              : 'Checkout github for date'}
          </p>
          <Accordian heading="Links" accordianSelect="homeTwo" w-100>
            <a
              href={demo}
              target="blank"
              className="btn btn-bg text-light w-100"
              type="button"
            >
              <PreviewIcon /> Live Demo
            </a>
            <a
              href={code}
              target="blank"
              className="btn btn-bg text-light w-100  mt-2"
              type="button"
            >
              <CodeOffIcon /> Source Code
            </a>
            <a
              href="https://github.com/Ranjeet2311/"
              target="blank"
              className="btn btn-bg text-light w-100 my-2 d-flex justify-content-center align-items-center"
              type="button"
            >
              <GitHubIcon /> <span className="ms-2"> My Github</span>
            </a>
          </Accordian>
          <button
            onClick={() => navigate(-1)}
            target="blank"
            className="btn btn-bg text-light w-100 mt-4"
            type="button"
          >
            <ArrowBackIosIcon /> Return
          </button>
        </div>
      </div>
      <div className="row mt-4 pt-4">
        <div className="col-12 mb-4">
          <Heading text="Related projects" />
          <Divider />
        </div>
        <MultiCarousel>
          {relatedData.map((slide, i) => {
            return (
              <Card
                key={i}
                img={slide.img}
                title={slide.title}
                code={slide.code}
                demo={slide.demo}
                tags={slide.tags}
                description={slide.description}
                createdAt={slide.createdAt}
                pageLink={`/projects/${slide.title}`}
                showBtn={true}
                primeBtnText="More Details"
                secBtnText="🤠 Click for more details"
              />
            );
          })}
        </MultiCarousel>
      </div>
    </div>
  );
}

export default ProjectDetails;
