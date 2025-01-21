import React, { useEffect, useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Heading from "../../component/Heading";
import Divider from "../../component/Divider";
import Card from "../../component/Card";
import vue from "../../images/vue-js-icon.svg";
import angular from "../../images/angular-icon.svg";
import react from "../../images/react-js-icon.svg";
import browse from "../../images/all-icon.svg";
import webApp from "../../images/web-app.png";
import { useDispatch, useSelector } from "react-redux";
import { filterProjects } from "../../store/features/projectSlice";
import { useTranslation } from "react-i18next";
import Spinner from "../../component/Spinner";

const tabs = [
  { title: "All", ref: "all", imgSrc: browse },
  { title: "Full Stack", ref: "fullStack", imgSrc: webApp },
  { title: "React", ref: "react", imgSrc: react },
  { title: "Vue", ref: "vue", imgSrc: vue },
  { title: "Angular", ref: "angular", imgSrc: angular },
  { title: "NodeJS", ref: "node", imgSrc: angular },
  { title: "ExpressJs", ref: "expressjs", imgSrc: angular },
  { title: "SQL", ref: "sql", imgSrc: angular },
  { title: "MongoDB", ref: "mongodb", imgSrc: angular },
  { title: "Firebase", ref: "firebase", imgSrc: angular },
  { title: "TypeScript", ref: "typescript", imgSrc: angular },
];

export default function Project() {
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
  }, 100);

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
    <div className="project-wrapper container">
      <Heading text={`${t("My Personal Projects")}`} />
      <p className="small-intro colored-text text-center">
        {t("Checkout my codes at Github")}
      </p>
      <Divider />
      {/* <div className="col-12 "></div> */}
      {showData && (
        <Box className="mt-2 px-4 project-inner">
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
                  <Tab
                    name={item.ref}
                    label={item.title}
                    className="tab_label mx-1"
                    onClick={() => filterHandler(item.ref)}
                  />
                );
              })}
          </Tabs>
        </Box>
      )}
      {showData && (
        <p className="text-center w-100">
          {t("Now displaying list of")}
          <strong className="mx-1">"{tabValue.toUpperCase()}"</strong>
          {t("repositories, for more repositories checkout my")}
          <span className="ms-1 link">
            <a
              className="link px-2"
              href="https://github.com/Ranjeet2311"
              target="blank"
            >
              github.
            </a>
          </span>
        </p>
      )}
      {showData ? (
        <div className="row row-cols-1 row-cols-md-3 g-4 repos">
          {filteredProjects &&
            filteredProjects.map((item, index) => (
              <div
                key={index}
                className={`col-12 col-md-6 col-lg-3 ${
                  filteredProjects.length <= 2 && "col-lg-4"
                } `}
              >
                <Card
                  img={item.img}
                  title={t(item.title)}
                  code={item.code}
                  demo={item.demo}
                  demoText={t("Live Demo")}
                  tags={item.tags}
                  description={item.description}
                  createdAt={item.createdAt}
                  pageLink={`/repositories/${item.title}`}
                  showBtn={true}
                  primeBtnText={t("More Details")}
                  secBtnText={`${t("More Details")}`}
                  type="project"
                />
              </div>
            ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
