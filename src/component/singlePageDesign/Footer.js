import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 footer-content">
            <p className="small-intro">
              <span className="colored-text">
                Created using: React, Material-Ui, Scss, i18next, Redux,
                Redux-toolkit, EsLint, JWT, Framer-motion, Google analytics,
                Bootstrap.
              </span>
            </p>
          </div>
          <div className="col-12 col-md-2 footer-social">
            <a
              className="btn me-4 multi-colored-text"
              target="_blank"
              href="https://www.linkedin.com/in/ranjeet-kumar-a4a928a9/"
              rel="noreferrer"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Linkedin"
            >
              <LinkedInIcon />
            </a>
            <a
              className="btn me-4 multi-colored-text"
              target="_blank"
              href="https://github.com/Ranjeet2311"
              rel="noreferrer"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Github"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
        <div className="up-btn">
          <a href="#home">
            <ArrowUpwardIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
