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
import Metadata from "../component/Metadata";
import Button from "../component/Button";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import SecretForm from "../component/SecretForm";

function Home() {
  const { t } = useTranslation();

  const { allSkills } = useSelector((state) => state.expertise);

  return (
    <>
      <Metadata
        title="RK | Portfolio"
        description="I'm a dynamic individual who seamlessly blends the world of technology with a passion for adventure. As a seasoned software engineer, I've an impressive track record of developing innovative solutions and writing clean, efficient code."
      />
      <div className="container home">
        <div className="row align-items-center hero_home section-padding-top section-padding-bottom">
          <div className="col-12 col-lg-4 roaming-img">
            <img src={profilePic} alt="profilepic" className="header-pic" />
          </div>
          <div className="col-12 col-lg-8 right pe-lg-0">
            <HeadH1>
              {t("home.greeting")}
              <span className="colored-text cursive ms-2">
                {t("home.Ranjeet")}
              </span>
            </HeadH1>
            <div className="experience py-2">
              <Paragraph text={t("home.description.one")} />
              <Paragraph text={t("home.description.two")} />
              <Paragraph text={t("home.description.three")} />
              <div className="pt-2 pt-md-4">
                <Button
                  isLInk={true}
                  to="/repositories"
                  className="text-light mt-4 ms-lg-4"
                >
                  {t("Live Demo")} apps
                </Button>
                <SecretForm className="btn inline-block btn-bg px-4 py-1 text-light mt-4 ms-lg-4">
                  <FileDownloadRoundedIcon /> {t("Download my CV")}
                </SecretForm>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-2 skill_slide align-items-center experience section-padding-top section-padding-bottom">
          <div className="col-4 col-md-2 expertise_slide">
            {t("My Expertise")}
          </div>
          <div className="col-8 col-md-10 pe-0">
            <MultiCarousel
              infinite={true}
              responsive={multiSlide}
              autoPlay={true}
              swipeable={false}
              draggable={false}
              showDots={false}
              autoPlaySpeed={500}
              keyBoardControl={false}
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
        <div className="mt-4 mb-1 pt-4 pt-md-4 section-padding-top section-padding-bottom">
          <Heading text={`<${t("home.glance")} / >`} />
          <Divider />
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-4 section-padding-bottom">
          {workWithMe &&
            workWithMe.map((item, i) => {
              return (
                <div className="col-12 col-md-6 col-lg-4" key={i}>
                  <Card
                    title={t(item.title)}
                    list={item.desc}
                    pageLink={item.pageLink}
                    showBtn={true}
                    primeBtnText={t("Show more details")}
                    secBtnText={`${t("Show more details")}`}
                    type="general"
                  />
                </div>
              );
            })}
        </div>
        <div className="row section-padding-top section-padding-bottom">
          <div className="col-12 mt-4 px-0" id="download">
            <Accordian heading={t("Let's Connect")} accordianSelect="homeTwo">
              <Contact>
                <StaticModal
                  btnText={t("Message me")}
                  title={t("Sending message to @Ranjeet")}
                >
                  <ContactForm> </ContactForm>
                </StaticModal>
              </Contact>
            </Accordian>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
