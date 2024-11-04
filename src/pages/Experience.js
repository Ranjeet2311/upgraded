import { useEffect } from "react";
import Heading from "../component/Heading";
import Paragraph from "../component/Paragraph";
import { experienceData } from "../data/experienceList";
import ExperienceBlock from "../component/ExperienceBlock";
import Accordian from "../component/Accordian";
import Contact from "../component/Contact";
import StaticModal from "../component/StaticModal";
import ContactForm from "../component/ContactForm";
import Divider from "../component/Divider";
import MultiCarousel from "../component/MultiCarousel";
import { maxOneSlide } from "../data/Skills";
import { useTranslation } from "react-i18next";
import Metadata from "../component/Metadata";
import teamImage from "../images/x3.jpg";
import dev from "../images/werdev.jpg";
import devTalk from "../images/x2.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";

function Experience() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Metadata
        title="Experience | Ranjeet Kumar"
        description="Explore Ranjeet Kumar's extensive professional experience in web development, including contributions to enterprise-level applications using Vue.js, Angular, and backend technologies like Node.js and PHP. With 7.5+ years of expertise, discover how he has optimized web applications, in Agile teams, and delivered high-performance, responsive solutions for various B2B and national projects."
      />
      <div className="container exp_page pt-2 pb-4">
        <div className="col-12">
          <div className="bread-crumb">
            <p>
              <Link className="text-decoration-none text-white ms-2" to="/">
                <ArrowBackIosIcon /> {t("Back to Home")} /
              </Link>
              <span>
                <Link
                  className="text-decoration-none text-white ms-2"
                  to={`/experience/`}
                >
                  {t("experience")}
                </Link>
              </span>
            </p>
          </div>
        </div>
        <Heading text={`${t("Experience")}`} />
        <Divider />
        <div className="row mb-4 mt-4 justify-content-center">
          <div className="col-12 col-lg-4 left-side">
            <img
              src={teamImage}
              alt="we are devs berlin"
              className="header-pic "
            />
          </div>
          <div className="col-12 col-lg-8 mt-4 mt-lg-0 py-2 px-1 experience">
            <Paragraph text={t("experienceDetails.one")} />
            <Paragraph text={t("experienceDetails.two")} />
            <Paragraph text={t("experienceDetails.three")} />
            <Paragraph text={t("experienceDetails.six")} />
          </div>
        </div>
        <div className="row mb-4 mt-4 pt-2 pt-md-4 justify-content-center section-padding-bottom section-padding-top">
          <div className="col-12 mt-4 mt-lg-0 py-2 px-1 experience">
            <Paragraph text={t("experienceDetails.four")} />
            <Paragraph text={t("experienceDetails.five")} />
            <Paragraph text={t("experienceDetails.seven")} />
          </div>
          {/* <div className="col-12 col-lg-4 left-side order-first order-lg-last">
            <img
              src={devTalk}
              alt="we are devs berlin"
              className="header-pic "
            />
          </div> */}
        </div>
        <div className="row d align-items-center mt-4 pt-2 pt-md-4 section-padding-bottom section-padding-top">
          {/* <div className="col-12 col-lg-4">
            <img src={dev} alt="rocket-launch" className="dev-pic" />
          </div> */}
          <div className="col-12">
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
                    <div key={item.id}>
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
        </div>
        <div className="row mt-4">
          {/* <div className="col-12">
            <Heading text="Few Pictures" />
          </div> */}
          {/* <div className="col-12 mx-auto mt-2 mt-lg-4 pt-1 pt-lg-2">
            <MultiCarousel
              infinite={true}
              responsive={maxFourSlide}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={false}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all 0.5s"
              transitionDuration={500}
              minimumTouchDrag={0}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              containerClass="carousel-container mb-4"
            >
              {sliderImages.map((image, i) => {
                return (
                  <div className="image_gallery">
                    <img src={image.slide} alt="" />
                    <p className="text-center"> {image.place} </p>
                  </div>
                );
              })}
            </MultiCarousel>
          </div> */}
          <div className="col-12 mt-4 px-0 mb-4">
            <Accordian
              heading={t("Let's Connect")}
              accordianSelect="projectOne"
            >
              <Contact>
                <StaticModal
                  btnText={t("Message me")}
                  title={t("Sending message to @Ranjeet")}
                  theme=""
                  id="general"
                >
                  <ContactForm downloadCv="true"> </ContactForm>
                </StaticModal>
              </Contact>
            </Accordian>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
