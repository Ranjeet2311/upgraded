import React from "react";
import MultiCarousel from "../MultiCarousel";
import { maxFourSlide } from "../../data/Skills";
import Heading from "../Heading";
import { useTranslation } from "react-i18next";
import { Divider } from "@mui/material";
import { endorsements } from "../../data/Skills";
import EndorsementBox from "../EndorsementBox";

export default function Endorsement() {
  const { t } = useTranslation();
  return (
    <div className="endorsement_section container">
      <Heading text={t("Skills Endorsements")} />
      <p className="text-center colored-text small-intro">
        {t("Recognized by professionals on")}
        <span>
          <a
            className="link ms-2"
            href="https://www.linkedin.com/in/ranjeet-kumar-23n19/"
            target="blank"
          >
            Linkedin
          </a>
        </span>
      </p>
      <Divider />
      <MultiCarousel
        infinite={true}
        responsive={maxFourSlide}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all 0.5s"
        transitionDuration={500}
        minimumTouchDrag={0}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        containerClass="carousel-container mb-4"
      >
        {endorsements.map((endorsement, i) => {
          return <EndorsementBox key={i} endorsement={endorsement} />;
        })}
      </MultiCarousel>
    </div>
  );
}
