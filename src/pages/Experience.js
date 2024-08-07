import React, { useState } from "react";
import Heading from "../component/Heading";
import Paragraph from "../component/Paragraph";
import { experienceData } from "../data/experienceList";
import ExperienceBlock from "../component/ExperienceBlock";
import backgroundImage from "../images/background.jpg";
import greetingHI from "../images/avatar-second.png";
import greetingNamaste from "../images/avatar-first.png";
import Accordian from "../component/Accordian";
import Contact from "../component/Contact";
import StaticModal from "../component/StaticModal";
import ContactForm from "../component/ContactForm";
import Divider from "../component/Divider";
import MultiCarousel from "../component/MultiCarousel";
import { maxOneSlide } from "../data/Skills";
import { useTranslation } from "react-i18next";

function Experience() {
  const [image, setImage] = useState(false);

  function imageChangeHandler() {
    setImage(!image);
  }
  const { t } = useTranslation();

  return (
    <div className="container">
      {/* <img className="background" src={backgroundImage} alt="" /> */}
      <Heading text={`<⚙️${t("Experience")} / >`} />
      <Divider />
      <div
        className="row mb-4 mt-4 justify-content-center align-items-center"
        onMouseEnter={imageChangeHandler}
      >
        <div className="col-12 col-lg-4 experience-img left-side">
          {image ? (
            <img
              src={greetingHI}
              alt="Greeting-Avatar"
              className="rounded-circle experience"
            />
          ) : (
            <img
              src={greetingNamaste}
              alt="Greeting-Avatar"
              className="rounded-circle experience"
            />
          )}
        </div>
        <div className="col-12 col-lg-8 mt-4 mt-lg-0 experience">
          <Paragraph text={t("experienceDetails")} />
        </div>
      </div>
      <div className="row d align-items-center">
        <MultiCarousel
          infinite={false}
          responsive={maxOneSlide}
          autoPlay={false}
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
          containerClass="carousel-container mb-4"
        >
          {experienceData &&
            experienceData.map((item) => {
              return (
                <div className="col-12" key={item.id}>
                  <ExperienceBlock
                    title={item.title}
                    responsibilities={item.responsibilities}
                    techs={item.techs}
                    duration={item.duration}
                  />
                </div>
              );
            })}
        </MultiCarousel>
      </div>
      <div className="row">
        <div className="col-12 mt-4 px-0">
          <Accordian heading={t("Let's Connect")} accordianSelect="projectOne">
            <Contact>
              <StaticModal title={t("Sending message to @Ranjeet")}>
                <ContactForm downloadCv="true"> </ContactForm>
              </StaticModal>
            </Contact>
          </Accordian>
        </div>
      </div>
    </div>
  );
}

export default Experience;
