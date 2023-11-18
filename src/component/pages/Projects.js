import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Heading from "../elements/Heading";
import HeadH2 from "../elements/HeadH2";
import Divider from "../elements/Divider";
import projectData from "../ProjectData";
import Card from "../elements/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Projects() {
  const [projectList, setProjectList] = useState(projectData);
  const [value, setValue] = useState(0);

  // ---animation

  const up = useRef();
  const appear = useRef();

  useEffect(() => {
    gsap.from(up.current, { y: "1200", duration: 0.5 });
    gsap.fromTo(
      appear.current,
      { autoAlpha: -1, duration: 2 },
      { autoAlpha: 1, duration: 2, ease: "back" }
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
      <Heading text="My Projects" />
      <Divider />
      <HeadH2 text="Quick Project Navigation" />

      <Box className="mt-4">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab onClick={allFilterHandler} label="All Projects" />
          <Tab
            onClick={() => {
              filterHandler("react");
            }}
            name="react"
            label="React Projects"
          />
          <Tab
            onClick={() => {
              filterHandler("webApp");
            }}
            name="webApp"
            label="Wes Apps"
          />
          <Tab
            onClick={() => {
              filterHandler("template");
            }}
            name="template"
            label="Web Templates"
          />
        </Tabs>
      </Box>

      <div className="project-display" ref={appear}>
        {projectList.map((item, index) => {
          return (
            <Card
              key={index}
              img={item.img}
              title={item.title}
              code={item.code}
              demo={item.demo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
