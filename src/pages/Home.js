import { lazy, Suspense } from "react";
import Metadata from "../component/Metadata";
import Navbar from "../component/singlePageDesign/Navbar";
import Section from "../component/singlePageDesign/Section";
import About from "../component/singlePageDesign/About";
import Footer from "../component/singlePageDesign/Footer";
import Spinner from "../component/Spinner";

const Hero = lazy(() => import("../component/singlePageDesign/Hero"));
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
        <Suspense fallback={<Spinner />}>
          <Section>
            <Hero />
          </Section>
        </Suspense>
        <div id="about">
          <Suspense fallback={<Spinner />}>
            <Section>
              <About />
            </Section>
          </Suspense>
        </div>
        <div id="experience">
          <Suspense fallback={<Spinner />}>
            <Section>
              <Experience />
            </Section>
          </Suspense>
        </div>
        <div id="repositories">
          <Suspense fallback={<Spinner />}>
            <Section>
              <Project />
            </Section>
          </Suspense>
        </div>
      </div>
      <div id="contact">
        <Suspense fallback={<Spinner />}>
          <Section>
            <SingleContact />
          </Section>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export default Home;
