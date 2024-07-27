import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
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
  const bottom = useRef();
  const left = useRef();
  const leftX = useRef();

  useEffect(() => {
    gsap.from(bottom.current, { y: "1000", duration: 2 });
    gsap.fromTo(
      left.current,
      { x: "-1000", autoAlpha: -1, duration: 2 },
      { x: "0", autoAlpha: 1, duration: 3, ease: "back" }
    );
    gsap.fromTo(
      leftX.current,
      { x: "-1000", autoAlpha: -1, duration: 2 },
      { x: "0", autoAlpha: 1, duration: 3, ease: "back" }
    );
    // gsap.fromTo(
    //   leftX.current,
    //   { autoAlpha: -2, duration: 2 },
    //   { autoAlpha: 1, duration: 2, ease: "easeInOut" }
    // );

    // gsap.fromTo(
    //   leftX1.current,
    //   { autoAlpha: -2, duration: 2 },
    //   { autoAlpha: 1, duration: 2, ease: "easeInOut" }
    // );
    // gsap.fromTo(
    //   leftX1.current,
    //   { x: "1000", y: "-10", autoAlpha: -2, duration: 2 },
    //   { x: "0", y: "0", autoAlpha: 1, duration: 2, ease: "easeInOut" }
    // );

    // gsap.fromTo(
    //   rightX.current,
    //   { autoAlpha: -2, duration: 2 },
    //   { autoAlpha: 1, duration: 2, ease: "easeInOut" }
    // );
    // gsap.fromTo(
    //   rightX.current,
    //   { x: "-1000", y: "-10", autoAlpha: -2, duration: 2 },
    //   { x: "0", y: "0", autoAlpha: 1, duration: 2, ease: "easeInOut" }
    // );

    // gsap.fromTo(
    //   rightX1.current,
    //   { autoAlpha: -2, duration: 2 },
    //   { autoAlpha: 1, duration: 2, ease: "easeInOut" }
    // );
    // gsap.fromTo(
    //   rightX1.current,
    //   { x: "1000", y: "-10", autoAlpha: -2, duration: 2 },
    //   { x: "0", y: "0", autoAlpha: 1, duration: 2, ease: "easeInOut" }
    // );
  });
  function imageChangeHandler() {
    setImage(!image);
  }
  const { t } = useTranslation();

  return (
    <div className="wrapper container">
      <img className="background" src={backgroundImage} alt="" />
      <Heading text={`<⚙️${t("Experience")} / >`} />
      {/* <Heading text="< ⚙️ Experience />" /> */}
      <Divider />
      <div className="row caption mb-4 mt-4" onMouseEnter={imageChangeHandler}>
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
        <div className="col-12 col-lg-8 para mt-4 mt-lg-0 experience">
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
      <div className=" mt-4">
        <Accordian heading={t("Let's Connect")} accordianSelect="projectOne">
          <Contact>
            <StaticModal title={t("Sending message to @Ranjeet")}>
              <ContactForm downloadCv="true"> </ContactForm>
            </StaticModal>
          </Contact>
        </Accordian>
      </div>
    </div>
  );
}

export default Experience;
