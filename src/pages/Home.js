import React from "react";
import HeadH1 from "../component/HeadH1";
import Paragraph from "../component/Paragraph";
import Card from "../component/Card";
import { workWithMe } from "../data/Skills";
import Contact from "../component/Contact";
import Accordian from "../component/Accordian";
import StaticModal from "../component/StaticModal";
import ContactForm from "../component/ContactForm";
import Heading from "../component/Heading";
import Divider from "../component/Divider";
import { useTranslation } from "react-i18next";
import profilePic from "../images/vr.svg";
import MultiCarousel from "../component/MultiCarousel";
import { useSelector } from "react-redux";
import { multiSlide } from "../data/Skills";

function Home() {
  const { t } = useTranslation();

  const { allSkills } = useSelector((state) => state.expertise);

  return (
    <div className="container home">
      <div className="row align-items-center">
        <div className="col-12 col-lg-4 roaming-img">
          {/* <div className="blue-sphere"></div> */}
          <img src={profilePic} alt="profilepic" className="header-pic" />
        </div>
        <div className="col-12 col-lg-8 right pe-lg-0">
          <HeadH1 text={t("home.greeting")} />
          <div className="experience">
            <Paragraph text={t("home.description.one")} />
            <Paragraph text={t("home.description.two")} />
            <Paragraph text={t("home.description.three")} />
          </div>
        </div>
      </div>
      <div className="row px-2 skill_slide my-4 pt-4 align-items-center">
        <div className="col-4 col-md-2 py-3 expertise_slide">My Expertise</div>
        <div className="col-8 col-md-10 pe-0">
          <MultiCarousel
            infinite={true}
            responsive={multiSlide}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            autoPlaySpeed={500}
            keyBoardControl={true}
            customTransition="all 0.5s"
            transitionDuration={500}
            minimumTouchDrag={0}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            containerClass="carousel-container mb-4"
          >
            {allSkills.map((skill, i) => {
              return (
                <Card
                  key={i}
                  img={skill.img}
                  // title={t(skill.title)}
                  pageLink={`expertise`}
                  showBtn={false}
                ></Card>
              );
            })}
          </MultiCarousel>
        </div>
      </div>
      <div className="mt-4 mb-1 pt-4 pt-md-4">
        <Heading text={`<${t("home.glance")} / >`} />
        <Divider />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mt-4 experience">
        {workWithMe &&
          workWithMe.map((item, i) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <Card
                  title={t(item.title)}
                  list={item.desc}
                  pageLink={item.pageLink}
                  showBtn={true}
                  primeBtnText={t("More Details")}
                  secBtnText={`${t("Show more details")}`}
                  type="general"
                />
              </div>
            );
          })}
      </div>
      <div className="row">
        <div className="col-12 mt-4 px-0">
          <Accordian heading={t("Let's Connect")} accordianSelect="homeTwo">
            <Contact>
              <StaticModal title={t("Sending message to @Ranjeet")}>
                <ContactForm> </ContactForm>
              </StaticModal>
            </Contact>
          </Accordian>
        </div>
      </div>
    </div>
  );
}

export default Home;
