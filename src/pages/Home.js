import { useTranslation } from "react-i18next";
import Metadata from "../component/Metadata";
import Navbar from "../component/singlePageDesign/Navbar";
import TechStack from "../component/singlePageDesign/TechStack";
import Experience from "../component/singlePageDesign/Experience";
import Project from "../component/singlePageDesign/Project";
import Section from "../component/singlePageDesign/Section";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "../component/singlePageDesign/Hero";
import About from "../component/singlePageDesign/About";
import Footer from "../component/singlePageDesign/Footer";
import SingleContact from "../component/singlePageDesign/SingleContact";

function Home() {
  const { t } = useTranslation();

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
          <Hero />
        </Section>
        <div id="about">
          <Section>
            <About />
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
      </div>
      <div id="contact">
        <Section>
          <SingleContact />
        </Section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
