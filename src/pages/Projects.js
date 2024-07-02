import React, { useRef, useEffect, useState } from 'react';
import { Tabs, Tab, Box, Tooltip } from '@mui/material';
import { gsap } from 'gsap';
import Heading from '../component/Heading';
import HeadH2 from '../component/HeadH2';
import Divider from '../component/Divider';
import Paragraph from '../component/Paragraph';
import projectData from '../data/ProjectData';
import Card from '../component/Card';
import backgroundImage from '../images/background.jpg';
import vue from '../images/vue-js-icon.svg';
import angular from '../images/angular-icon.svg';
import react from '../images/react-js-icon.svg';
import javaScript from '../images/javascript-icon.png';
import template from '../images/paint-bucket-icon.svg';
import browse from '../images/all-icon.svg';
import Icon from '../component/Icon';

function Projects() {
  const [projectList, setProjectList] = useState(projectData);
  const [value, setValue] = useState(0);

  // ---animation

  const up = useRef();
  const appear = useRef();

  useEffect(() => {
    gsap.from(up.current, { y: '1200', duration: 0.5 });
    gsap.fromTo(
      appear.current,
      { autoAlpha: -1, duration: 2 },
      { autoAlpha: 1, duration: 2, ease: 'back' }
    );
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function filterHandler(Categoty) {
    setProjectList(() => {
      return projectData.filter((item, i) => {
        return item.ref === Categoty;
      });
    });
  }

  function allFilterHandler() {
    setProjectList(() => {
      return projectData;
    });
  }

  return (
    <div className="project-wrapper wrapper container">
      <img className="background" src={backgroundImage} alt="" />
      <Heading text="< My Personal Projects />" />
      <Paragraph text="Checkout my codes at Github <☝️>" />
      <Divider />
      <div className="col"></div>
      <HeadH2 text="Filter projects by frameworks & types" />
      <Box className="experience">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tooltip
            className="mt-2"
            title="Browse all"
            classes={{
              tooltip: 'btn-bg text-white',
            }}
          >
            <Tab
              name="All"
              // label="All"
              icon={<Icon alt="test avatar" img={browse} />}
              style={{
                color: 'white',
                padding: '10px 10px',
                minWidth: '50px',
              }}
              onClick={allFilterHandler}
            />
          </Tooltip>
          <Tooltip
            className="mt-2"
            title="Vue"
            classes={{
              tooltip: 'btn-bg text-white',
            }}
          >
            <Tab
              name="Vue"
              icon={<Icon alt="test avatar" img={vue} />}
              style={{
                color: 'white',
                padding: '10px 10px',
                minWidth: '50px',
              }}
              onClick={() => {
                filterHandler('vue');
              }}
            />
          </Tooltip>
          <Tooltip
            className="mt-2"
            title="React"
            classes={{
              tooltip: 'btn-bg text-white',
            }}
          >
            <Tab
              name="react"
              // label="React"
              icon={<Icon alt="test avatar" img={react} />}
              style={{
                color: 'white',
                padding: '10px 10px',
                minWidth: '50px',
              }}
              onClick={() => {
                filterHandler('react');
              }}
            />
          </Tooltip>
          <Tooltip
            className="mt-2"
            title="Angular"
            classes={{
              tooltip: 'btn-bg text-white',
            }}
          >
            <Tab
              name="Angular"
              // label="Angular"
              icon={<Icon alt="test avatar" img={angular} />}
              style={{
                color: 'white',
                padding: '10px 10px',
                minWidth: '50px',
              }}
              onClick={() => {
                filterHandler('angular');
              }}
            />
          </Tooltip>
          <Tooltip
            className="mt-2"
            title="Fun Apps"
            classes={{
              tooltip: 'btn-bg text-white',
            }}
          >
            <Tab
              name="webApp"
              // label="Fun Apps"
              icon={<Icon alt="test avatar" img={javaScript} />}
              style={{
                color: 'white',
                padding: '10px 10px',
                minWidth: '50px',
              }}
              onClick={() => {
                filterHandler('funApp');
              }}
            />
          </Tooltip>
          <Tooltip
            className="mt-2"
            title="templates"
            classes={{
              tooltip: 'btn-bg text-white',
            }}
          >
            <Tab
              icon={<Icon alt="test avatar" img={template} />}
              onClick={() => {
                filterHandler('template');
              }}
              name="template"
              // label="Templates"
              style={{
                color: 'white',
                padding: '10px 10px',
                minWidth: '50px',
                filter: 'invert(1)',
              }}
            />
          </Tooltip>
        </Tabs>
      </Box>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {projectList &&
          projectList.map((item, index) => {
            return (
              <Card
                key={index}
                img={item.img}
                title={item.title}
                code={item.code}
                demo={item.demo}
                tags={item.tags}
                description={item.description}
                createdAt={item.createdAt}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Projects;
