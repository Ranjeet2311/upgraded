import React, { useEffect, useState } from "react";
import { Tabs, Tab, Box, Tooltip } from "@mui/material";
import Heading from "../component/Heading";
import HeadH2 from "../component/HeadH2";
import Divider from "../component/Divider";
import Paragraph from "../component/Paragraph";
import Card from "../component/Card";
import vue from "../images/vue-js-icon.svg";
import angular from "../images/angular-icon.svg";
import react from "../images/react-js-icon.svg";
import javaScript from "../images/javascript-icon.png";
import template from "../images/template.svg";
import browse from "../images/all-icon.svg";
import Icon from "../component/Icon";
import Accordian from "../component/Accordian";
import Contact from "../component/Contact";
import StaticModal from "../component/StaticModal";
import ContactForm from "../component/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { filterProjects } from "../store/features/projectSlice";
import { useTranslation } from "react-i18next";

const tabs = [
  { title: "Browse all", ref: "all", imgSrc: browse },
  { title: "React", ref: "react", imgSrc: react },
  { title: "Vue", ref: "vue", imgSrc: vue },
  { title: "Angular", ref: "angular", imgSrc: angular },
  { title: "Fun Apps", ref: "funApp", imgSrc: javaScript },
  { title: "Templates", ref: "template", imgSrc: template },
];

function Repositories() {
  const [value, setValue] = useState(0);

  const { filteredProjects, tabValue } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  function filterHandler(categoty) {
    dispatch(filterProjects(categoty));
  }
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  // ---animation

  useEffect(() => {
    switch (tabValue) {
      case "all":
        setValue(0);
        break;
      case "react":
        setValue(1);
        break;
      case "vue":
        setValue(2);
        break;
      case "angular":
        setValue(3);
        break;
      case "funApp":
        setValue(4);
        break;
      case "template":
        setValue(5);
        break;
      default:
        break;
    }
  }, [tabValue]);
  const { t } = useTranslation();

  return (
    <>
      <div className="project-wrapper container px-0">
        <Heading text={`<🤸${t("My Personal Projects")} / >`} />
        {/* <Paragraph text={`🤸${t("Checkout my codes at Github")} <☝️> `} /> */}
        <Divider />
        <div className="col"></div>
        {/* <HeadH2 text={t("Filter projects by frameworks & types")} /> */}
        <Box className="experience mt-2">
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
                    placement="bottom"
                    key={item.ref}
                    title={item.title}
                    classes={{
                      tooltip: "btn-bg border-0 text-white",
                    }}
                    style={{ fontSize: "26px" }}
                  >
                    <Tab
                      name={item.ref}
                      // label="All"
                      icon={<Icon alt="test avatar" img={item.imgSrc} />}
                      style={{
                        color: "white",
                        padding: "10px 10px",
                        minWidth: "50px",
                      }}
                      onClick={() => filterHandler(item.ref)}
                    />
                  </Tooltip>
                );
              })}
          </Tabs>
        </Box>
        <p className="m-auto mt-2 mt-lg-4 pt-2 pt-lg-4">
          {t("Now displaying list of")}
          <strong className="mx-1 megenta">"{tabValue.toUpperCase()}"</strong>
          {t("repositories, for more repositories checkout my")}
          <span className="ms-1">
            <a href="https://github.com/Ranjeet2311" target="blank">
              github
            </a>
          </span>
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {filteredProjects &&
            filteredProjects.map((item, index) => {
              return (
                <div className="col-12 col-md-6 col-lg-3" key={index}>
                  <Card
                    key={index}
                    img={item.img}
                    title={t(item.title)}
                    code={item.code}
                    demo={item.demo}
                    tags={item.tags}
                    description={item.description}
                    createdAt={item.createdAt}
                    pageLink={`/repositories/${item.title}`}
                    showBtn={true}
                    primeBtnText={t("More Details")}
                    secBtnText={`${t("Click for more details")} `}
                    type="project"
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="container mt-4 px-0">
        <Accordian heading={t("Let's Connect")} accordianSelect="projectOne">
          <Contact>
            <StaticModal title={t("Sending message to @Ranjeet")}>
              <ContactForm> </ContactForm>
            </StaticModal>
          </Contact>
        </Accordian>
      </div>
    </>
  );
}

export default Repositories;
