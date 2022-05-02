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

  useEffect(() => {
    gsap.from(pop.current, { scale: 1.4 });
    gsap.fromTo(
      leftX.current,
      { x: "-1000", autoAlpha: -1, duration: 2 },
      { x: "0", autoAlpha: 1, duration: 3, ease: "back" }
    );
  }, []);

  function onDownload() {
    const link = document.createElement("a");
    link.download = `cv_Ranjeet.pdf`;
    link.href = "cv_Ranjeet.pdf";
    link.click();
  }

  function imageChangeHandler() {
    setImage(true);
  }

  return (
    <div className="home">
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
          <div onMouseEnter={imageChangeHandler} className="right">
            <HeadH1 text="Welcome! I'm Ranjeet" />
            <Paragraph
              text=" Perseverance and creativity drive my day-to-day actions. I'm a self taught front-end developer. My journey started from designing websited on Wordpress,Woo-commerce, opencart and Magento etc. Installing plugins generally would pile up a lot of junk codes that are not being used and it make the website response very slow and this is the point where I wanted to learn something where I don't have to depend on plugins. I wanted to be more effiecient so I started spending more time with HTML, CS JAVA SCRIPT, different JavaScript libraries and JS Frameworks, . I would like to work for a company where I can deliver some fantastic results for the company and grow as a person.
Respect | honesty | simplicity | smart work | hard work | ~ are my basics. "
            />
            <Tooltip title="Download" ref={pop}>
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
