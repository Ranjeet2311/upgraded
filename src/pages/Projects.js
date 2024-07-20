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
import template from '../images/template.svg';
import browse from '../images/all-icon.svg';
import Icon from '../component/Icon';
import Accordian from '../component/Accordian';
import Contact from '../component/Contact';
import StaticModal from '../component/StaticModal';
import ContactForm from '../component/ContactForm';

const tabs = [
  { title: 'Browse all', ref: 'all', imgSrc: browse },
  { title: 'React', ref: 'react', imgSrc: react },
  { title: 'Vue', ref: 'vue', imgSrc: vue },
  { title: 'Angular', ref: 'angular', imgSrc: angular },
  { title: 'Fun Apps', ref: 'funApp', imgSrc: javaScript },
  { title: 'Templates', ref: 'template', imgSrc: template },
];

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

  let show = false;

  function filterHandler(Categoty) {
    show = true;
    if (Categoty === 'all') {
      setProjectList(() => {
        return projectData;
      });
    } else {
      setProjectList(() => {
        return projectData.filter((item, i) => {
          return item.ref === Categoty;
        });
      });
    }
  }

  return (
    <>
      <div className="project-wrapper wrapper container">
        <img className="background" src={backgroundImage} alt="" />
        <Heading text="< 🤸 My Personal Projects />" />
        <Paragraph text="Checkout my codes at Github <☝️>" />
        <Divider />
        <div className="col"></div>
        <HeadH2 text="Filter projects by frameworks & types" />
        <Box className="experience">
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            value={value}
            onChange={handleChange}
            aria-label="scrollable force tabs example"
          >
            {tabs &&
              tabs.map((item) => {
                return (
                  <Tooltip
                    key={item.ref}
                    className="mt-2"
                    title={item.title}
                    classes={{
                      tooltip: 'btn-bg text-white',
                    }}
                  >
                    <Tab
                      name={item.ref}
                      // label="All"
                      icon={<Icon alt="test avatar" img={item.imgSrc} />}
                      style={{
                        color: 'white',
                        padding: '10px 10px',
                        minWidth: '50px',
                      }}
                      centered
                      onClick={() => filterHandler(item.ref)}
                    />
                  </Tooltip>
                );
              })}
          </Tabs>
        </Box>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {projectList &&
            projectList.map((item, index) => {
              return (
                <div className="col-12 col-md-6 col-lg-4">
                  <Card
                    key={index}
                    img={item.img}
                    title={item.title}
                    code={item.code}
                    demo={item.demo}
                    tags={item.tags}
                    description={item.description}
                    createdAt={item.createdAt}
                    pageLink={`/projects/${item.title}`}
                    showBtn={true}
                    primeBtnText="More Details"
                    secBtnText="🤠 Click for more details"
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="container mt-4">
        <Accordian heading="Connect with me" accordianSelect="projectOne">
          <Contact>
            <StaticModal title="Sending message to @Ranjeet">
              <ContactForm> </ContactForm>
            </StaticModal>
          </Contact>
        </Accordian>
      </div>
    </>
  );
}

export default Projects;
