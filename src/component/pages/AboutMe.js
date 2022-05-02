import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Heading from "../elements/Heading";
import Paragraph from "../elements/Paragraph";
import Profile1 from "../avatar/profile1.jpg";
import Profile2 from "../avatar/profile2.jpg";
import Image from "../elements/Image";

function AboutMe() {
  // ---animation

  const leftX = useRef();
  const leftX1 = useRef();
  const rightX = useRef();
  const rightX1 = useRef();
  const bottom = useRef();

  useEffect(() => {
    gsap.fromTo(
      leftX.current,
      { x: "-1000", y: "-10", autoAlpha: -2, duration: 2 },
      { x: "0", y: "0", autoAlpha: 1, duration: 2, ease: "easeInOut" }
    );

    gsap.fromTo(
      leftX1.current,
      { x: "1000", y: "-10", autoAlpha: -2, duration: 2 },
      { x: "0", y: "0", autoAlpha: 1, duration: 2, ease: "easeInOut" }
    );

    gsap.fromTo(
      rightX.current,
      { x: "-1000", y: "-10", autoAlpha: -2, duration: 2 },
      { x: "0", y: "0", autoAlpha: 1, duration: 2, ease: "easeInOut" }
    );

    gsap.fromTo(
      rightX1.current,
      { x: "1000", y: "-10", autoAlpha: -2, duration: 2 },
      { x: "0", y: "0", autoAlpha: 1, duration: 2, ease: "easeInOut" }
    );
    gsap.from(bottom.current, { y: "1000", duration: 2 });
  });

  return (
    <div className="wrapper">
      <Heading text="About Me" />
      <div className="container">
        <div className="caption">
          <div className="para" ref={leftX}>
            <Paragraph
              text="An ant is always drawn to sugar, the same way is technology to me. I’m a self-taught Web developer with a strong understanding of HTML, CSS, SAAS, JAVA SCRIPT and BOOTSTRAP, GIT, DEVELOPER TOOLS & REACTJS. I work with these technologies on a daily basis, and I also have loads of personal projects to demonstrate that knowledge. Working hard is very much a part of my personal identity. I love my pace of life and would bring all the interpersonal and time management skills that are such a core part of my work life to this role.
            I imagine a project and draw it on the paper and implement with the help of HTML, CSS and JS. I remember when I made my first website, I was so excited about couldn’t stop clicking that button and since then I didn’t look back and kept on working on my skills and understanding of web development and web designing."
            />
          </div>
          <div className="img" ref={leftX1}>
            <Image image={Profile1} alt="profile-pic1" />
          </div>
        </div>
        <div className="caption">
          <div className="img" ref={rightX}>
            <Image image={Profile2} alt="profile-pic2" />
          </div>
          <div className="para" ref={rightX1}>
            <Paragraph
              text="My zeal to learn more and more brought me always on a bigger challenge, be it my academic days or professional days. First job in a BPO, I had to make new clients for company called “Optus” (Australia). I remember making 4-5 sales/contracts every day. Then I worked for “TRueEnergy” (Australia), again here I was responsible for making new customers. Then I moved to an IT company as a customer support (UK shift). I used to advice and answer people on their specific issues while using company’s app but I was always attracted by the geeks inside the tech room.
              My journey started watching online tutorials on making websites, I picked up with, WordPress, Woo-commerce, Magento, OpenCart. I did digital marketing course where I learned the ways of digital marketing. Then I started to learn different kinds of plugins and page builders like DIvi, Elementor, Visual composer, cornerstone etc."
            />
          </div>
        </div>
        <div className="para">
          <Paragraph text="Curiosity pushed early humans to discover wheel, Darwin to 'Evolution by natural selection, Copernicus to Heliocentrism' and to me in learning web Development in detail. Since having a science background, tech was always appealing to me. Eagerness to learn more I'm looking for a place where I could be valuable contributing member of a team and bring some fantastic results for the company. I believe in respect, honesty, simplicity, smart work and hard work, friendship. Ready for new challenges and learnings." />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
