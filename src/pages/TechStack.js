import React, { useRef, useEffect } from 'react';
import { skillsData, otherSkillData } from '../data/Skills';
import { gsap } from 'gsap';
import Heading from '../component/Heading';
import HeadH2 from '../component/HeadH2';
import Divider from '../component/Divider';
import ImgSm from '../component/ImgSm';
import backgroundImage from '../images/background.jpg';
import Contact from '../component/Contact';
import Accordian from '../component/Accordian';
import StaticModal from '../component/StaticModal';
import ContactForm from '../component/ContactForm';

function Skills() {
  const up = useRef();
  const upx = useRef();
  const upx2 = useRef();
  const upx3 = useRef();
  const upx4 = useRef();

  const frontend = skillsData.filter((item, i) => {
    return item.end === 'Frontend';
  });
  const Backend = skillsData.filter((item, i) => {
    return item.end === 'Backend';
  });
  const codeManage = skillsData.filter((item, i) => {
    return item.end === 'Managing';
  });
  const design = skillsData.filter((item, i) => {
    return item.end === 'Design';
  });

  // console.log(` frontend ::: `, frontend);

  useEffect(() => {
    gsap.fromTo(up.current, { x: 1000, duration: 1 }, { x: 0, duration: 1 });
    gsap.fromTo(
      upx.current,
      { x: -1000, duration: 1 },
      { x: 0, autoAlpha: 1, duration: 2 }
    );
    gsap.fromTo(upx2.current, { y: 1000, duration: 1 }, { y: 0, duration: 3 });
    gsap.fromTo(upx3.current, { y: 1000, duration: 1 }, { y: 0, duration: 4 });
    gsap.fromTo(upx4.current, { y: 1000, duration: 1 }, { y: 0, duration: 5 });
  });

  return (
    <div className="text-center wrapper container">
      <img className="background" src={backgroundImage} alt="" />
      <Heading text="< 🛡️ My tech stack />" />
      <Divider />
      <div ref={up}>
        <HeadH2 text="🤠 Frontend" />
        <div className="skillBox experience">
          {frontend &&
            frontend.map((item) => {
              return (
                <ImgSm
                  key={item.id}
                  image={item.img}
                  alt={item.title}
                  name={item.title}
                />
              );
            })}
        </div>
      </div>
      <div ref={upx}>
        <HeadH2 text="🤠 Backend" />
        <div className="skillBox experience">
          {Backend &&
            Backend.map((item) => {
              return (
                <ImgSm
                  key={item.id}
                  image={item.img}
                  alt={item.title}
                  name={item.title}
                />
              );
            })}
        </div>
      </div>
      <Accordian accordianSelect="techOne" heading="See more">
        <div ref={upx2}>
          <HeadH2 text="🤠 CI/CD" />
          <Divider />
          <div className="skillBox experience">
            {codeManage &&
              codeManage.map((item) => {
                return (
                  <ImgSm
                    key={item.id}
                    image={item.img}
                    alt={item.title}
                    name={item.title}
                  />
                );
              })}
          </div>
        </div>
        <div ref={upx3}>
          <HeadH2 text="🤠 Design" />
          <Divider />
          <div className="skillBox experience">
            {design &&
              design.map((item) => {
                return (
                  <ImgSm
                    key={item.id}
                    image={item.img}
                    alt={item.title}
                    name={item.title}
                  />
                );
              })}
          </div>
        </div>
        <div ref={upx4}>
          <HeadH2 text="Content management systems" />
          <Divider />
          <div className="skillBox experience">
            {otherSkillData.map((item) => {
              return (
                <ImgSm
                  key={item.id}
                  image={item.img}
                  alt={item.title}
                  name={item.title}
                />
              );
            })}
          </div>
        </div>
      </Accordian>
      <div className="mt-4">
        <Accordian heading="Let's Connect " accordianSelect="techTwo">
          <Contact>
            <StaticModal title="Sending message to @Ranjeet">
              <ContactForm> </ContactForm>
            </StaticModal>
          </Contact>
        </Accordian>
      </div>
    </div>
  );
}

export default Skills;
