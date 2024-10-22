import React from "react";
import Typewriter from "typewriter-effect";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import { useTranslation } from "react-i18next";
import profilePic from "../../images/frankfurt.jpeg";
import rectangle from "../../images/Rectangle.png";
// import Panda from "./Panda";
import Button from "../Button";
import DialpadIcon from "@mui/icons-material/Dialpad";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import EmailIcon from "@mui/icons-material/Email";
import Endorsement from "./Endorsement";

export default function Hero() {
  const { t } = useTranslation();

  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.download = `CV_Ranjeet_Kumar.pdf`;
    link.href = "CV_Ranjeet_Kumar.pdf";
    link.click();
  };

  return (
    <>
      <div className="container">
        <div className="row hero_home">
          <div className="col-12 col-lg-6">
            <p className="type-intro">
              {t("home.greeting")} <span className="me-2">{t("home.i'm")}</span>
              <span className="colored-text">
                <Typewriter
                  options={{
                    strings: [t("home.Ranjeet"), "a software developer"],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    pauseFor: 12000,
                  }}
                />
              </span>
            </p>
            <h1 className="colored-text mt-2">
              {t("home.Frontend Developer / Web Development Enthusiast")}
            </h1>
            <p className="type-intro-second">
              {t("home.i'm")}
              <span className="colored-text ms-2">
                <Typewriter
                  options={{
                    strings: [
                      t("Innovative & Solution-Driven"),
                      t("Adaptable | Forward-Thinking"),
                      t("Problem-Solver | Team Player"),
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    pauseFor: 5000,
                  }}
                />
              </span>
            </p>
            <p className="description">{t("home.Small-description")} </p>

            <div className="row hero-btns mt-3 pt-2 mt-md-4 pt-md-4">
              <a
                className="ms-3 px-4 me-1 btn-bg colored-pill text-decoration-none"
                href="#contact"
              >
                <span className="me-2">
                  <DialpadIcon />
                </span>
                {t("Contact me")}
              </a>
              <Button
                className="btn-bg colored-pill ms-3 me-1"
                onButtonCLick={handleCVDownload}
              >
                <span className="me-2">
                  <DownloadIcon />
                </span>
                {t("Get resume")}
              </Button>
            </div>
            <div className="row social-icons ps-lg-4 mt-4 mx-0">
              <a
                className="btn scroll-link px-2 me-4 multi-colored-text mt-3"
                target="_blank"
                href="https://www.linkedin.com/in/ranjeet-kumar-a4a928a9/"
                rel="noreferrer"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Linkedin"
              >
                <LinkedInIcon />
                {/* <span className="ms-2">Linkedin</span> */}
              </a>

              <a
                className="btn scroll-link px-2 me-4 multi-colored-text mt-3"
                target="_blank"
                href="https://github.com/Ranjeet2311"
                rel="noreferrer"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Github"
              >
                <GitHubIcon />
                {/* <span className="ms-2">Github</span> */}
              </a>
              <a
                className="btn scroll-link px-2 me-4 multi-colored-text mt-3"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Email-me"
                target="blank"
                href="mailto:ranjeetkumar2311@gmail.com"
              >
                <EmailIcon />
              </a>

              {/* <button
              className="btn multi-colored-text mt-3"
              onClick={handleCVDownload}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Download my CV"
            >
              <FileDownloadRoundedIcon />
              <span className="ms-2">{t("Download my CV")}</span>
            </button> */}
              {/* <Button className="btn" onButtonCLick={handleCVDownload}>

              </Button> */}
            </div>
          </div>
          <div className="col-12 col-lg-6 img-wrap d-none d-lg-block">
            <div className="rectangle">
              <img src={rectangle} alt="" srcset="" />
            </div>
            <div className="hero-img">
              <img
                src={profilePic}
                alt="profilepic"
                className="header-pic mt-lg-2"
                loading="lazy"
              />
            </div>
            <a href="#endorsement" className="down-button text-decoration-none">
              <ArrowDownwardIcon />
            </a>
          </div>
          <div id="endorsement" className="col-12">
            <Endorsement />
          </div>
        </div>
      </div>
    </>
  );
}
