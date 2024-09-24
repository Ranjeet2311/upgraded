import HeadH1 from "../component/HeadH1";
import Paragraph from "../component/Paragraph";
// import Card from "../component/Card";
// import { workWithMe } from "../data/Skills";
import Contact from "../component/Contact";
import Accordian from "../component/Accordian";
import StaticModal from "../component/StaticModal";
import ContactForm from "../component/ContactForm";
// import Heading from "../component/Heading";
// import Divider from "../component/Divider";
import { useTranslation } from "react-i18next";
import profilePic from "../images/berlin-river.png";
// import MultiCarousel from "../component/MultiCarousel";
import { useSelector } from "react-redux";
import { multiSlide } from "../data/Skills";
import Metadata from "../component/Metadata";
import Button from "../component/Button";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import SecretForm from "../component/SecretForm";
import Navbar from "../component/singlePageDesign/Navbar";
import TechStack from "../component/singlePageDesign/TechStack";
import Experience from "../component/singlePageDesign/Experience";
import Project from "../component/singlePageDesign/Project";
import Section from "../component/singlePageDesign/Section";
import { motion, useScroll, useSpring } from "framer-motion";
import Typewriter from "typewriter-effect";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

function Home() {
  const { t } = useTranslation();
  const { allSkills } = useSelector((state) => state.expertise);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Metadata
        title="RK | Portfolio"
        description="I'm a dynamic individual who seamlessly blends the world of technology with a passion for adventure. As a seasoned software engineer, I've an impressive track record of developing innovative solutions and writing clean, efficient code."
      />
      <Navbar />
      <div className="container home" id="home">
        <motion.div className="progress-bar" style={{ scaleX }} />
        <Section>
          <div className="row align-items-center hero_home">
            <div className="col-12 col-lg-5 roaming-img d-flex flex-column pt-lg-4">
              <img
                src={profilePic}
                alt="profilepic"
                className="header-pic mt-lg-2 "
              />
              <p className="text-center text-light mt-4 mb-2">
                <LocationOnIcon />
                <i className="mx-2">The Spree river,</i>Berlin <br />
                {/* <b>Hover to zoom the image</b> */}
              </p>
            </div>
            <div className="col-12 col-lg-7 right pe-lg-0">
              <HeadH1>
                {t("home.greeting")} {t("home.i'm")}
                <span className="colored-text cursive ms-2">
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
              <h2 className="colored-text cursive ms-2 mt-3 ms-4">
                {t("home.i'm")}
                <span className="cursive ms-2">
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
                <div className="social-icons ps-4 mt-4">
                  <a
                    className="btn btn-bg me-4 px-4"
                    target="_blank"
                    href="https://www.linkedin.com/in/ranjeet-kumar-a4a928a9/"
                    rel="noreferrer"
                  >
                    <LinkedInIcon />
                    <span className="ms-2">Linkedin</span>
                  </a>

                  <a
                    className="btn btn-bg px-4 me-4"
                    target="_blank"
                    href="https://github.com/Ranjeet2311"
                    rel="noreferrer"
                  >
                    <GitHubIcon />
                    <span className="ms-2">Github</span>
                  </a>
                  <SecretForm className="btn btn-bg px-4 me-4">
                    <FileDownloadRoundedIcon /> {t("Download my CV")}
                  </SecretForm>
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
        </Section>
        <div id="expertise">
          <Section>
            <TechStack />
          </Section>
        </div>
        <div id="experience">
          <Section>
            <Experience />
          </Section>
        </div>
        <div id="repositories">
          <Section>
            <Project />
          </Section>
        </div>
        <Section>
          <div className="row" id="contact">
            <div className="col-12 mt-4 px-0" id="download">
              <HeadH1>{t("Let's Connect")}</HeadH1>
              <div className="mt-4">
                <Contact>
                  <StaticModal
                    btnText={t("Message me")}
                    title={t("Sending message to @Ranjeet")}
                  >
                    <ContactForm> </ContactForm>
                  </StaticModal>
                </Contact>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

export default Home;
