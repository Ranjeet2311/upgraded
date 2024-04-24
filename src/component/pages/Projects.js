import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Heading from '../elements/Heading';
import HeadH2 from '../elements/HeadH2';
import Divider from '../elements/Divider';
import projectData from '../ProjectData';
import Card from '../elements/Card';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Paragraph from '../elements/Paragraph';

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
      <img
        className="background"
        src="https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_1280.jpg"
        alt=""
      />
      <Heading text="< My Personal Projects />" />
      <Paragraph text="Checkout my codes at Github <☝️>" />
      <Divider />
      <div className="col"></div>
      <HeadH2 text="Quick Navigation" />
      <Box className="mt-2 experience">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab
            onClick={allFilterHandler}
            label="All"
            style={{
              color: 'white',
            }}
          />
          <Tab
            onClick={() => {
              filterHandler('vue');
            }}
            name="Vue"
            label="Vue"
            style={{
              color: 'white',
            }}
          />
          <Tab
            onClick={() => {
              filterHandler('angular');
            }}
            name="Angular"
            label="Angular"
            style={{
              color: 'white',
            }}
          />
          <Tab
            onClick={() => {
              filterHandler('react');
            }}
            name="react"
            label="React"
            style={{
              color: 'white',
            }}
          />
          <Tab
            onClick={() => {
              filterHandler('funApp');
            }}
            name="webApp"
            label="fun JS Apps"
            style={{
              color: 'white',
            }}
          />
          <Tab
            onClick={() => {
              filterHandler('template');
            }}
            name="template"
            label="Templates"
            style={{
              color: 'white',
            }}
          />
        </Tabs>
      </Box>

      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4" ref={up}>
        {projectList.map((item, index) => {
          return (
            <Card
              key={index}
              img={item.img}
              title={item.title}
              code={item.code}
              demo={item.demo}
              tags={item.tags}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
