import React, { useEffect, useState } from "react";
import { Tabs, Tab, Box, Tooltip } from "@mui/material";
import Heading from "../component/Heading";
import Divider from "../component/Divider";
import Card from "../component/Card";
import vue from "../images/vue-js-icon.svg";
import angular from "../images/angular-icon.svg";
import react from "../images/react-js-icon.svg";
import browse from "../images/all-icon.svg";
import webApp from "../images/web-app.png";
import Icon from "../component/Icon";
import Accordian from "../component/Accordian";
import Contact from "../component/Contact";
import StaticModal from "../component/StaticModal";
import ContactForm from "../component/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { filterProjects } from "../store/features/projectSlice";
import { useTranslation } from "react-i18next";
import Spinner from "../component/Spinner";
import Metadata from "../component/Metadata";

const tabs = [
  { title: "All", ref: "all", imgSrc: browse },
  { title: "Full Stack", ref: "fullStack", imgSrc: webApp },
  { title: "React", ref: "react", imgSrc: react },
  { title: "Vue", ref: "vue", imgSrc: vue },
  { title: "Angular", ref: "angular", imgSrc: angular },
];

function Repositories() {
  const [value, setValue] = useState(0);
  const [showData, setShowData] = useState(false);
  const { filteredProjects, tabValue } = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  function filterHandler(categoty) {
    dispatch(filterProjects(categoty));
  }
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  setTimeout(() => {
    setShowData(true);
  }, 600);

  useEffect(() => {
    switch (tabValue) {
      case "all":
        setValue(0);
        break;
      case "fullStack":
        setValue(1);
        break;
      case "react":
        setValue(2);
        break;
      case "vue":
        setValue(3);
        break;
      case "angular":
        setValue(4);
        break;
      case "funApp":
        setValue(5);
        break;
      case "template":
        setValue(6);
        break;
      default:
        break;
    }
  }, [tabValue]);
  const { t } = useTranslation();

  return (
    <>
      <Metadata
        title="Repository | Ranjeet Kumar"
        description="Explore the GitHub repositories of Ranjeet Kumar, showcasing a diverse range of web development projects. From advanced frontend applications built with Vue.js, React, and Angular, to backend integrations using Node.js and PHP, these repositories highlight his 7.5+ years of experience in crafting efficient, scalable, and high-performance code."
      />
      <div className="project-wrapper container px-0 pt-2">
        <Heading text={`<🤸${t("My Personal Projects")} / >`} />
        {/* <Paragraph text={`🤸${t("Checkout my codes at Github")} <☝️> `} /> */}
        <Divider />
        <div className="col pt-4"></div>
        {/* <HeadH2 text={t("Filter projects by frameworks & types")} /> */}
        {showData && (
          <Box className="experience mt-2 px-4">
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
                        label={item.title}
                        icon={<Icon alt="test avatar" img={item.imgSrc} />}
                        className="tab_label mx-1"
                        onClick={() => filterHandler(item.ref)}
                      />
                    </Tooltip>
                  );
                })}
            </Tabs>
          </Box>
        )}
        {showData && (
          <p className="mt-2 mt-lg-4 pt-4 mb-1 pt-lg-1 text-center w-100">
            {t("Now displaying list of")}
            <strong className="mx-1">"{tabValue.toUpperCase()}"</strong>
            {t("repositories, for more repositories checkout my")}
            <span className="ms-1">
              <a
                className="lead bg-white px-2 rounded-1 btn-bg"
                href="https://github.com/Ranjeet2311"
                target="blank"
              >
                github
              </a>
            </span>
          </p>
        )}
        {showData ? (
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 pt-1 pt-mg-4 section-padding-bottom">
            {filteredProjects &&
              filteredProjects.map((item, index) => (
                <div
                  className={`col-12 col-md-6 col-lg-3 ${
                    filteredProjects.length <= 2 && "col-lg-4"
                  } `}
                  key={index}
                >
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
                    primeBtnText={t("Click for more details")}
                    secBtnText={`${t("Click for more details")}`}
                    type="project"
                  />
                </div>
              ))}
          </div>
        ) : (
          <Spinner />
        )}
      </div>
      <div className="container mt-4 px-0 section-padding-bottom section-padding-top">
        <Accordian heading={t("Let's Connect")} accordianSelect="projectOne">
          <Contact>
            <StaticModal
              btnText={t("Message me")}
              title={t("Sending message to @Ranjeet")}
            >
              <ContactForm> </ContactForm>
            </StaticModal>
          </Contact>
        </Accordian>
      </div>
    </>
  );
}

export default Repositories;
