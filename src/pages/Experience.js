import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Heading from '../component/Heading';
import Paragraph from '../component/Paragraph';
import Profile2 from '../images/werdev.jpg';
import experienceData from '../data/experienceList';
import ExperienceBlock from '../component/ExperienceBlock';
import backgroundImage from '../images/background.jpg';

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
      <img className="background" src={backgroundImage} alt="" />
      <Heading text="< Experience />" />
      <div className="row caption mb-4 mt-4" ref={leftX}>
        <div className="col-12 col-lg-4 experience-img">
          <img src={Profile2} alt="" />
        </div>
        <div className="col-12 col-lg-8 para mt-4 mt-lg-0">
          <Paragraph text="As a frontend developer software engineer, I am passionate about crafting seamless user experiences and building innovative web applications. With a keen eye for design and a strong foundation in HTML, CSS, and JavaScript, I thrive on translating creative concepts into functional and responsive interfaces. My experience extends to utilizing modern frontend frameworks like React.js, Vue.js and Angular to develop dynamic and scalable solutions. I am committed to continuously enhancing my skills and staying updated with the latest industry trends to deliver high-quality software that not only meets but exceeds user expectations. With a collaborative mindset and a drive for excellence, I am dedicated to contributing to the success of every project I undertake, bringing creativity, innovation, and technical expertise to the forefront." />
        </div>
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
