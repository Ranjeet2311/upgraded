import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Heading from "../../component/Heading";
import moment from "moment";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import PreviewIcon from "@mui/icons-material/Preview";
import Divider from "../../component/Divider";
import Card from "../../component/Card";
import Accordian from "../../component/Accordian";
import MultiCarousel from "../../component/MultiCarousel";
import { maxFourSlide } from "../../data/Skills";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Metadata from "../../component/Metadata";

export default function ProjectDetail() {
  const [zoom, setZoom] = useState(false);
  const { projectId } = useParams();
  const navigate = useNavigate();
  const allProjects = useSelector((state) => state.projects.allProjects);
  let selectedProject = allProjects.find((item, index) => {
    return item.title === projectId;
  });
  const { createdAt, img, title, tags, code, demo, description, ref } =
    selectedProject;

  const createdDate = moment(createdAt, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format(
    "DD MMMM YYYY"
  );

  const relatedData = allProjects.filter((project) => {
    return (
      ref.some((refString) => project.ref.includes(refString)) &&
      project.title !== title
    );
  });

  function zoomHandler() {
    return setZoom(!zoom);
  }
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Metadata
        title={`${title} | Ranjeet Kumar`}
        description="Explore the GitHub repositories of Ranjeet Kumar, showcasing a diverse range of web development projects. From advanced frontend applications built with Vue.js, React, and Angular, to backend integrations using Node.js and PHP, these repositories highlight his 7.5+ years of experience in crafting efficient, scalable, and high-performance code."
      />
      <div className="container project-details">
        <div className="row">
          <div className="col-12 col-lg-6 pt2 pb-2 pb-lg-0 details-img-wrap">
            <div className="bread-crumb">
              <p>
                <Link className="text-decoration-none text-white" to="/">
                  <ArrowBackIosIcon /> {t("Back to Home")} /
                </Link>
                <span>
                  <Link
                    className="text-decoration-none text-white ms-1"
                    to={`/repositories/${title}`}
                  >
                    {t(title)}
                  </Link>
                </span>
              </p>
            </div>
            <div className="details-image-wrap">
              <img
                onClick={zoomHandler}
                src={process.env.PUBLIC_URL + "/" + img}
                alt={title}
                className={`details-image ${zoom ? "zoom" : ""}`}
              />
            </div>
            <p className="text-light mb-0">
              {t("Click on imgae to zoom / shrink")}
            </p>
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start px-md-3 py-md-2 details">
            {/* <Heading className="text-start" text={t(title)} /> */}
            <h1 className="text-start w-100"> {t(title)} </h1>
            <p>
              {description
                ? `${t(description)}`
                : "---Description not available---"}
            </p>
            <p className="updated w-100 mb-2 ps-1">
              <b>{t("Last updated")}</b> : {""}
              {createdDate !== "Invalid date"
                ? createdDate
                : "Checkout github for date"}
            </p>
            <div className="row ms-0 tech-stack">
              <span className="text-white d-block mb-2 px-0">
                <b>
                  {tags
                    ? `${t("Tech highlights")}`
                    : "Checkout github for more details"}
                </b>
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
            <Accordian heading={t("Links")} accordianSelect="homeTwo" w-100>
              {demo && (
                <a
                  href={demo}
                  target="blank"
                  className="btn btn-bg text-light w-100 border-0"
                  type="button"
                >
                  <PreviewIcon /> {t("Live Demo")}
                </a>
              )}
              <a
                href={code}
                target="blank"
                className="btn btn-bg text-light w-100 mt-2 border-0"
                type="button"
              >
                <CodeOffIcon /> {t("Source Code")}
              </a>
              <a
                href="https://github.com/Ranjeet2311/"
                target="blank"
                className="btn btn-bg text-light w-100 my-2 d-flex justify-content-center align-items-center border-0"
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
          <div className="col-12 mb-4 section-padding-top section-padding-bottom">
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
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all 1s"
            transitionDuration={2000}
            minimumTouchDrag={0}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            containerClass="carousel-container mb-4"
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
                  pageLink={`/repositories/${slide.title}`}
                  showBtn={true}
                  primeBtnText={t("More Details")}
                  secBtnText={`🤠 ${t("Click for more details")} `}
                />
              );
            })}
          </MultiCarousel>
        </div>
      </div>
    </>
  );
}
