import { lazy, Suspense } from "react";
import Metadata from "../component/Metadata";
import Navbar from "../component/singlePageDesign/Navbar";
import Hero from "../component/singlePageDesign/Hero";
import Experience from "../component/singlePageDesign/Experience";
import SingleContact from "../component/singlePageDesign/SingleContact";
import Section from "../component/singlePageDesign/Section";
import Footer from "../component/singlePageDesign/Footer";
import Spinner from "../component/Spinner";

const About = lazy(() => import("../component/singlePageDesign/About"));
const Project = lazy(() => import("../component/singlePageDesign/Project"));

function Home() {
  return (
    <>
      <Metadata
        title="RK | Portfolio"
        description="I'm a dynamic individual who seamlessly blends the world of technology with a passion for adventure. As a seasoned software engineer, I've an impressive track record of developing innovative solutions and writing clean, efficient code."
      />
      <Navbar />
      <div id="home">
        <Section>
          <Hero />
        </Section>
        <div id="about">
          <Section>
            <Suspense fallback={<Spinner />}>
              <About />
            </Suspense>
          </Section>
        </div>
        <div id="experience">
          <Section>
            <Experience />
          </Section>
        </div>
        <div id="repositories">
          <Section>
            <Suspense fallback={<Spinner />}>
              <Project />
            </Suspense>
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
