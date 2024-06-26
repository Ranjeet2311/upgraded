import React, { useRef, useEffect } from 'react';
import { itemData, otherSkillData } from '../data/Skills';
import { gsap } from 'gsap';
import Heading from '../component/Heading';
import HeadH2 from '../component/HeadH2';
import Divider from '../component/Divider';
import ImgSm from '../component/ImgSm';
import backgroundImage from '../images/background.jpg';

function Skills() {
  // ---animation

  const up = useRef();
  const upx = useRef();
  const appear = useRef();

  useEffect(() => {
    gsap.fromTo(
      upx.current,
      { y: 1000, autoAlpha: -1, duration: 1 },
      { y: 0, autoAlpha: 1, duration: 1 }
    );
    gsap.fromTo(
      up.current,
      { y: 1000, autoAlpha: -1, duration: 1 },
      { y: 0, autoAlpha: 1, duration: 1 }
    );
    gsap.fromTo(
      appear.current,
      { autoAlpha: -1, duration: 2 },
      { autoAlpha: 1, duration: 3, ease: 'back' }
    );
  });

  return (
    <div className="text-center wrapper container">
      <img className="background" src={backgroundImage} alt="" />
      <Heading text="< My tech stack />" />
      {/* <HeadH2 text="Please check my projects on GitHub" /> */}
      <Divider />
      <HeadH2 text="As a front-end developer these are the tools that I use" />
      <div className="skillBox" ref={up}>
        {itemData.map((item) => {
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
      <HeadH2 text="Other Skills" />
      <Divider />
      <div className="skillBox" ref={upx}>
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
  );
}

export default Skills;
