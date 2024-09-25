import React from "react";
import Typewriter from "typewriter-effect";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import SecretForm from "../../component/SecretForm";
import { useTranslation } from "react-i18next";
import profilePic from "../../images/berlin-river.png";
import HeadH1 from "../../component/HeadH1";
import Paragraph from "../../component/Paragraph";
import Button from "../Button";

export default function Hero() {
  const { t } = useTranslation();

  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.download = `CV_Ranjeet_Kumar.pdf`;
    link.href = "CV_Ranjeet_Kumar.pdf";
    link.click();
  };

  return (
    <div className="row align-items-center hero_home">
      <div className="col-12 col-lg-5 roaming-img d-flex flex-column pt-lg-4">
        <img
          src={profilePic}
          alt="profilepic"
          className="header-pic mt-lg-2 "
        />
        <p className="text-center text-light mt-4 mb-2">
          <LocationOnIcon />
          <b>
            <i className="mx-2">The Spree river,</i>Berlin
          </b>
          <br />
          {/* <b>Hover to zoom the image</b> */}
        </p>
      </div>
      <div className="col-12 col-lg-7 right pe-lg-0">
        <HeadH1>
          {t("home.greeting")} {t("home.i'm")}
          <span className="colored-text ms-2">
            <Typewriter
              options={{
                strings: [t("home.Ranjeet")],
                autoStart: true,
                loop: true,
                pauseFor: 100000000,
              }}
            />
          </span>
        </HeadH1>
        <h2 className="colored-text ms-2 mt-3 ms-4 typing-text">
          {t("home.i'm")}
          <span className="ms-2">
            <Typewriter
              options={{
                strings: [
                  t("Innovative & Solution-Driven"),
                  t("Adaptable | Forward-Thinking"),
                  t("Problem-Solver | Team Player"),
                ],
                autoStart: true,
                loop: true,
                pauseFor: 1000,
              }}
            />
          </span>
        </h2>
        {/* <h5 className="text-white ms-4 mt-3">
        Actively seeking
        <span className="colored-text f-bold ms-2">
          <i>
            <Typewriter
              options={{
                strings: ["new opportunities.", "challenges."],
                autoStart: true,
                loop: true,
                pauseFor: 1000,
              }}
            />
          </i>
        </span>
      </h5> */}
        <div className="experience py-2">
          <Paragraph text={t("home.new-description")} />
          <div className="row social-icons ps-lg-4 mt-4">
            <div className="col-12 col-lg-6 col-xl-4 mt-3">
              <a
                className="btn btn-bg me-lg-4"
                target="_blank"
                href="https://www.linkedin.com/in/ranjeet-kumar-a4a928a9/"
                rel="noreferrer"
              >
                <LinkedInIcon />
                <span className="ms-2">Linkedin</span>
              </a>
            </div>
            <div className="col-12 col-lg-6 col-xl-4 mt-3">
              <a
                className="btn btn-bg me-lg-4"
                target="_blank"
                href="https://github.com/Ranjeet2311"
                rel="noreferrer"
              >
                <GitHubIcon />
                <span className="ms-2">Github</span>
              </a>
            </div>
            <div className="col-12 col-lg-6 col-xl-4 mt-3">
              <Button className="btn" onButtonCLick={handleCVDownload}>
                <FileDownloadRoundedIcon />
                <span className="ms-2">{t("Download my CV")}</span>
              </Button>
            </div>
          </div>
          {/* <div className="pt-2 pt-md-4">
          <Button
            isLInk={true}
            to="/repositories"
            className="text-light mt-4 ms-lg-4 zoom-btn"
          >
            {t("Live Demo")} apps
          </Button>
        </div> */}
        </div>
      </div>
    </div>
  );
}
