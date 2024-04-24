import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Heading from '../elements/Heading';
import Paragraph from '../elements/Paragraph';
import Profile2 from '../avatar/werdev.jpg';
import experienceData from '../experienceList/experienceList';
import ExperienceBlock from '../elements/ExperienceBlock';

function Experience() {
  // ---animation

  const leftX = useRef();
  // const leftX1 = useRef();
  // const rightX = useRef();
  // const rightX1 = useRef();
  const bottom = useRef();
  const left = useRef();

  useEffect(() => {
    gsap.from(bottom.current, { y: '1000', duration: 2 });
    gsap.fromTo(
      left.current,
      { x: '-1000', autoAlpha: -1, duration: 2 },
      { x: '0', autoAlpha: 1, duration: 3, ease: 'back' }
    );
    // gsap.fromTo(
    //   leftX.current,
    //   { autoAlpha: -2, duration: 2 },
    //   { autoAlpha: 1, duration: 2, ease: "easeInOut" }
    // );

    // gsap.fromTo(
    //   leftX1.current,
    //   { autoAlpha: -2, duration: 2 },
    //   { autoAlpha: 1, duration: 2, ease: "easeInOut" }
    // );
    // gsap.fromTo(
    //   leftX1.current,
    //   { x: "1000", y: "-10", autoAlpha: -2, duration: 2 },
    //   { x: "0", y: "0", autoAlpha: 1, duration: 2, ease: "easeInOut" }
    // );

    // gsap.fromTo(
    //   rightX.current,
    //   { autoAlpha: -2, duration: 2 },
    //   { autoAlpha: 1, duration: 2, ease: "easeInOut" }
    // );
    // gsap.fromTo(
    //   rightX.current,
    //   { x: "-1000", y: "-10", autoAlpha: -2, duration: 2 },
    //   { x: "0", y: "0", autoAlpha: 1, duration: 2, ease: "easeInOut" }
    // );

    // gsap.fromTo(
    //   rightX1.current,
    //   { autoAlpha: -2, duration: 2 },
    //   { autoAlpha: 1, duration: 2, ease: "easeInOut" }
    // );
    // gsap.fromTo(
    //   rightX1.current,
    //   { x: "1000", y: "-10", autoAlpha: -2, duration: 2 },
    //   { x: "0", y: "0", autoAlpha: 1, duration: 2, ease: "easeInOut" }
    // );
  });

  return (
    <div className="wrapper container">
      <img
        className="background"
        src="https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_1280.jpg"
        alt=""
      />
      <Heading text="< Experience />" />
      <div className="row caption mb-4 mt-4" ref={leftX}>
        <div className="col-12 col-lg-4 experience-img">
          <img src={Profile2} alt="" />
        </div>
        <div className="col-12 col-lg-8 para mt-4 mt-lg-0">
          <Paragraph text="As a frontend developer software engineer, I am passionate about crafting seamless user experiences and building innovative web applications. With a keen eye for design and a strong foundation in HTML, CSS, and JavaScript, I thrive on translating creative concepts into functional and responsive interfaces. My experience extends to utilizing modern frontend frameworks like React.js, Vue.js and Angular to develop dynamic and scalable solutions. I am committed to continuously enhancing my skills and staying updated with the latest industry trends to deliver high-quality software that not only meets but exceeds user expectations. With a collaborative mindset and a drive for excellence, I am dedicated to contributing to the success of every project I undertake, bringing creativity, innovation, and technical expertise to the forefront." />
        </div>
        {/* <div className="experience-img col-12 col-lg-4 col-xl-4 pe-md-4 mb-4 mb-lg-0">
          <img src={Profile2} alt="" />
        </div> */}
        {/* <div className="col-12 col-lg-8 col-xl-8 para ps-2">
          <Paragraph text="Honesty and hard work are very much a part of my personal identity. I love my pace of life and would bring all the interpersonal and time management skills that are such a core part of my work life to this role. My zeal to learn more and more brought me always on a bigger challenge, be it my academic days or professional life. Curiosity pushed early humans to discover wheel, Darwin to 'Evolution by natural selection, Copernicus to Heliocentrism' and to me in learning web Development in detail. Since having a science background, tech was always appealing to me. Eagerness to learn more I'm looking for a place where I could be valuable contributing member of a team and bring some fantastic results for the company.  " />
        </div> */}
      </div>
      <div className="row">
        {experienceData.map((item) => {
          return (
            <ExperienceBlock
              key={item.id}
              title={item.title}
              responsibilities={item.responsibilities}
              techs={item.techs}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
