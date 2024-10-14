import React from "react";
import profilePic from "../../images/berlin-river.png";
import Heading from "../Heading";
import Divider from "../../component/Divider";
import Button from "../Button";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import ScienceIcon from "@mui/icons-material/Science";
import TechStack from "./TechStack";
import { workWithMe } from "../../data/Skills";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="container about">
      <div className="about-inner">
        <Heading text={t("About me")} />
        <p className="text-center colored-text small-intro">
          {t("Why Choose Me?")}
        </p>
        <Divider />
        <div className="row inner-wrap">
          <div className="col-12 col-lg-4">
            <div className="about-img">
              <img
                src={profilePic}
                alt="profilepic"
                className="header-pic mt-lg-2 "
              />
            </div>
          </div>
          <div className="col-12 col-lg-8 about-text-wrap">
            {/* <h2 className="small-intro">Why Choose me ?</h2> */}
            <p> {t("home.new-description")} </p>
            <p className="colored-text fw-bold bullet-head">
              {t("Here are a few features.")} :
            </p>
            <ul>
              {workWithMe &&
                workWithMe.map((info, infoIndex) => {
                  return info.desc.map((descItem, descIndex) => {
                    return (
                      <li key={`${infoIndex}-${descIndex}`}>{t(descItem)}</li>
                    );
                  });
                })}
            </ul>
            <div className="row hero-btns mt-3 pt-2 mt-md-4 pt-md-4">
              <Button
                className="ms-3 me-1 colored-pill"
                isLInk={true}
                to="/experience"
              >
                <span className="me-2">
                  <ReadMoreIcon />
                </span>
                {t("Read more")}
              </Button>
              <a
                href="#skills"
                className="colored-pill btn-bg text-decoration-none ms-3 me-1 px-4"
              >
                <span className="me-2">
                  <ScienceIcon />
                </span>
                {t("My skills")}
              </a>
            </div>
          </div>
        </div>
        <div className="tech-wrap" id="skills">
          <TechStack />
        </div>
        <div className="row">
          <div className="col-12 mx-auto academy">
            <Heading text={t("Academics")} />
            <Divider />
            <div className="row academy-inner">
              <div class="col-12 col-lg-5 school">
                <h4 className="fw-bolder colored-text">
                  BA-Prog. -Delhi University 2014
                </h4>
                <p className="responsibility-label">
                  {t("Maths, English, Programming C++, History, Hindi.")}
                </p>
              </div>
              <div class="col-12 col-lg-5 school">
                <h4 className="fw-bolder colored-text">
                  G.B. Senior Sec School, New Del - 2011
                </h4>
                <p className="responsibility-label">
                  {t("Maths, Chemistry, Physics, Biology, English, Computers")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
