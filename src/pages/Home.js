import { lazy, Suspense } from "react";
import Metadata from "../component/Metadata";
import Navbar from "../component/singlePageDesign/Navbar";
import Section from "../component/singlePageDesign/Section";
import Footer from "../component/singlePageDesign/Footer";
import Placeholder from "../component/singlePageDesign/Placeholder";

const Hero = lazy(() => import("../component/singlePageDesign/Hero"));
const About = lazy(() => import("../component/singlePageDesign/About"));
const Experience = lazy(() =>
  import("../component/singlePageDesign/Experience")
);
const Project = lazy(() => import("../component/singlePageDesign/Project"));
const SingleContact = lazy(() =>
  import("../component/singlePageDesign/SingleContact")
);

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
          <Suspense fallback={<Placeholder />}>
            <Hero />
          </Suspense>
        </Section>
        <div id="about">
          <Section>
            <Suspense fallback={<Placeholder />}>
              <About />
            </Suspense>
          </Section>
        </div>
        <div id="experience">
          <Section>
            <Suspense fallback={<Placeholder />}>
              <Experience />
            </Suspense>
          </Section>
        </div>
        <div id="repositories">
          <Section>
            <Suspense fallback={<Placeholder />}>
              <Project />
            </Suspense>
          </Section>
        </div>
      </div>
      <div id="contact">
        <Section>
          <Suspense fallback={<Placeholder />}>
            <SingleContact />
          </Suspense>
        </Section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
