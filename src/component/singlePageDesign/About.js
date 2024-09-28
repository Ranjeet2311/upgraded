import React from "react";
import profilePic from "../../images/berlin-river.png";
import Heading from "../Heading";
import Divider from "../../component/Divider";
import Button from "../Button";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import ScienceIcon from "@mui/icons-material/Science";
import TechStack from "./TechStack";

export default function About() {
  return (
    <div className="container about">
      <Heading text="About Us" />
      <p className="text-center colored-text small-intro">Why Choose Me?</p>
      <Divider />
      <div className="row inner-wrap">
        <div className="col-12 col-lg-6 about-img">
          <img
            src={profilePic}
            alt="profilepic"
            className="header-pic mt-lg-2 "
          />
        </div>
        <div className="col-12 col-lg-6 about-text-wrap">
          <h2 className="small-intro">Why Choose me ?</h2>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>
          <p className="colored-text fw-bold bullet-head">
            Here is Few Features:
          </p>
          <ul>
            <li>User Interface Design</li>
            <li>User Interface Design</li>
            <li>User Interface Design</li>
            <li>User Interface Design</li>
            <li>User Interface Design</li>
          </ul>
          <div className="row hero-btns mt-3 pt-2 mt-md-4 pt-md-4">
            <Button className="mx-4 colored-pill">
              <span className="me-2">
                <ReadMoreIcon />
              </span>
              Read more
            </Button>
            <a
              href="#skills"
              className="colored-pill btn-bg text-decoration-none"
            >
              <span className="me-2">
                <ScienceIcon />
              </span>
              My skills
            </a>
          </div>
        </div>
      </div>
      <div className="tech-wrap" id="skills">
        <TechStack />
      </div>
    </div>
  );
}
