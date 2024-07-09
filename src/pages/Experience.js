import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Heading from '../component/Heading';
import Paragraph from '../component/Paragraph';
import { experienceData } from '../data/experienceList';
import ExperienceBlock from '../component/ExperienceBlock';
import backgroundImage from '../images/background.jpg';
import greetingHI from '../images/avatar-second.png';
import greetingNamaste from '../images/avatar-first.png';
import Accordian from '../component/Accordian';
import Contact from '../component/Contact';
import StaticModal from '../component/StaticModal';
import ContactForm from '../component/ContactForm';

function Experience() {
  const [image, setImage] = useState(false);
  // ---animation

  // const leftX1 = useRef();
  // const rightX = useRef();
  // const rightX1 = useRef();
  const bottom = useRef();
  const left = useRef();
  const leftX = useRef();

  useEffect(() => {
    gsap.from(bottom.current, { y: '1000', duration: 2 });
    gsap.fromTo(
      left.current,
      { x: '-1000', autoAlpha: -1, duration: 2 },
      { x: '0', autoAlpha: 1, duration: 3, ease: 'back' }
    );
    gsap.fromTo(
      leftX.current,
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
  function imageChangeHandler() {
    setImage(!image);
  }

  return (
    <div className="wrapper container">
      <img className="background" src={backgroundImage} alt="" />
      <Heading text="< ⚙️ Experience />" />
      <div className="row caption mb-4 mt-4" onMouseEnter={imageChangeHandler}>
        <div className="col-12 col-lg-4 experience-img left-side experience">
          {image ? (
            <img src={greetingHI} alt="Greeting-Avatar" />
          ) : (
            <img src={greetingNamaste} alt="Greeting-Avatar" />
          )}
        </div>
        <div className="col-12 col-lg-8 para mt-4 mt-lg-0 experience">
          <Paragraph text="As a frontend developer software engineer, I am passionate about crafting seamless user experiences and building innovative web applications. With a keen eye for design and a strong foundation in HTML, CSS, and JavaScript, I thrive on translating creative concepts into functional and responsive interfaces. My experience extends to utilizing modern frontend frameworks like React.js, Vue.js and Angular to develop dynamic and scalable solutions. I am committed to continuously enhancing my skills and staying updated with the latest industry trends to deliver high-quality software that not only meets but exceeds user expectations. With a collaborative mindset and a drive for excellence, I am dedicated to contributing to the success of every project I undertake, bringing creativity, innovation, and technical expertise to the forefront." />
        </div>
      </div>
      <div className="row d align-items-center">
        {experienceData &&
          experienceData.map((item) => {
            return (
              <div className="col-12 col-lg-6" key={item.id}>
                <ExperienceBlock
                  title={item.title}
                  responsibilities={item.responsibilities}
                  techs={item.techs}
                />
              </div>
            );
          })}
      </div>
      <div className=" mt-4">
        <Accordian heading="Connect with me" accordianSelect="projectOne">
          <Contact>
            <StaticModal title="Sending message to @Ranjeet">
              <ContactForm downloadCv="true"> </ContactForm>
            </StaticModal>
          </Contact>
        </Accordian>
      </div>
    </div>
  );
}

export default Experience;
