import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import projectData from "../data/ProjectData";
import backgroundImage from "../images/background.jpg";
import Heading from "../component/Heading";
import moment from "moment";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import PreviewIcon from "@mui/icons-material/Preview";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Divider from "../component/Divider";
import Card from "../component/Card";
import Accordian from "../component/Accordian";
import MultiCarousel from "../component/MultiCarousel";
import { maxFourSlide } from "../data/Skills";
import { useTranslation } from "react-i18next";

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

  const createdDate = moment(createdAt, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format(
    "DD MMMM YYYY"
  );

  const relatedData = projectData.filter((related, i) => {
    return related.ref === ref && related.title !== title;
  });

  function zoomHandler() {
    return setZoom(!zoom);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { t } = useTranslation();

  return (
    <div className="wrapper container">
      <img className="background" src={backgroundImage} alt="bg" />
      <div className="row">
        <div className="col-12 col-lg-6 pt2 pb-2 pb-lg-0 details-img-wrap">
          <div className="text-center mb-3 d-flex align-items-center btn experience">
            <ArrowBackIosIcon />
            <Link className="reverseLinks" to="/projects">
              {t("Projects")}
            </Link>
            <p className="mx-1">/ </p>
            <Link className="reverseLinks" to={`/projects/${title}`}>
              {t(title)}
            </Link>
          </div>
          <img
            onClick={zoomHandler}
            src={process.env.PUBLIC_URL + "/" + img}
            alt={title}
            className={`details-image ${zoom ? "zoom" : ""}`}
          />
          <p className="text-light text-center experience">
            {t("Click on imgae to zoom / shrink")}
          </p>
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start experience pt-0">
          <Heading className="text-start" text={t(title)} />
          <p>
            {description
              ? `${t(description)}`
              : "---Description not available---"}
          </p>
          <div className="row my-4 ms-0">
            <span className="text-white d-block mb-2 px-0">
              {tags
                ? `${t("Tech highlights")}`
                : "Checkout github for more details"}
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
            {t("Last updated")} :{" "}
            {createdDate !== "Invalid date"
              ? createdDate
              : "Checkout github for date"}
          </p>
          <Accordian heading={t("Links")} accordianSelect="homeTwo" w-100>
            <a
              href={demo}
              target="blank"
              className="btn btn-bg text-light w-100"
              type="button"
            >
              <PreviewIcon /> {t("Live Demo")}
            </a>
            <a
              href={code}
              target="blank"
              className="btn btn-bg text-light w-100  mt-2"
              type="button"
            >
              <CodeOffIcon /> {t("Source Code")}
            </a>
            <a
              href="https://github.com/Ranjeet2311/"
              target="blank"
              className="btn btn-bg text-light w-100 my-2 d-flex justify-content-center align-items-center"
              type="button"
            >
              <GitHubIcon /> <span className="ms-2">{t("My Github")}</span>
            </a>
          </Accordian>
          <button
            onClick={() => navigate(-1)}
            target="blank"
            className="btn btn-bg text-light w-100 mt-4 border-0"
            type="button"
          >
            <ArrowBackIosIcon /> {t("Return")}
          </button>
        </div>
      </div>
      <div className="row mt-4 pt-4">
        <div className="col-12 mb-4">
          <Heading text={t("Related projects")} />
          <Divider />
        </div>
        <MultiCarousel
          infinite={true}
          responsive={maxFourSlide}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          customTransition="all 1.5s"
          transitionDuration={500}
          minimumTouchDrag={0}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          containerClass="carousel-container experience mb-4"
        >
          {relatedData.map((slide, i) => {
            return (
              <Card
                key={i}
                img={slide.img}
                title={t(slide.title)}
                code={slide.code}
                demo={slide.demo}
                tags={slide.tags}
                description={slide.description}
                createdAt={slide.createdAt}
                pageLink={`/projects/${slide.title}`}
                showBtn={true}
                primeBtnText={t("More Details")}
                secBtnText={`🤠 ${t("Click for more details")} `}
              />
            );
          })}
        </MultiCarousel>
      </div>
    </div>
  );
}

export default ProjectDetails;
