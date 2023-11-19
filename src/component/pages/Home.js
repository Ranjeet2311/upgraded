import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import backgroundVideo from "../videos/cercuit-bg.mp4";
import greetingHI from "../avatar/Avatar-Hi.png";
import greetingNamaste from "../avatar/Avatar-Namaste.png";
import HeadH1 from "../elements/HeadH1";
import Paragraph from "../elements/Paragraph";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import Tooltip from "@mui/material/Tooltip";

function Home() {
  const [image, setImage] = useState(false);

  // ---animation
  const pop = useRef();
  const leftX = useRef();
  const right = useRef();

  useEffect(() => {
    gsap.from(pop.current, { scale: 1.4 });
    gsap.fromTo(
      leftX.current,
      { x: "-1000", autoAlpha: -1, duration: 2 },
      { x: "0", autoAlpha: 1, duration: 3, ease: "back" }
    );
    gsap.fromTo(
      right.current,
      { x: "1000", autoAlpha: -1, duration: 3 },
      { x: "0", autoAlpha: 1, duration: 1, ease: "back" }
    );
  }, []);

  function onDownload() {
    const link = document.createElement("a");
    link.download = `CV_Ranjeet_Kumar.pdf`;
    link.href = "CV_Ranjeet_Kumar.pdf";
    link.click();
  }

  function imageChangeHandler() {
    setImage(true);
  }

  return (
    <div className="home container">
      <div className="heroSection">
        <video
          src={backgroundVideo}
          type="video/mp4"
          loop
          autoPlay
          muted
        ></video>
        <div className="container">
          <div className="left-side" ref={leftX}>
            {image ? (
              <img src={greetingHI} alt="Greeting-Avatar" />
            ) : (
              <img src={greetingNamaste} alt="Greeting-Avatar" />
            )}
          </div>
          <div
            onMouseEnter={imageChangeHandler}
            className="right mt-4"
            ref={right}
          >
            <HeadH1 text="Welcome! I'm Ranjeet" />
            <Paragraph text=" A frontend developer, tech enthusiast with creativity, scalability and responsibility. I’m experienced in leveraging the strength of Html, CSS, SCSS, bootstrap, java-script, Reactjs, Vuejs, restful API and much more to build responsive and interactive websites/web apps. Always excited to learn some new tech and ready for challenges. Perseverance and creativity drive my day-to-day actions. I would like to be a part of a company where I can deliver some fantastic results for the company and grow as a person. " />
            <Tooltip className="mt-2" title="Download" ref={pop}>
              <Button onClick={onDownload} variant="contained" target="_blank">
                <DownloadIcon /> Download my CV
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
