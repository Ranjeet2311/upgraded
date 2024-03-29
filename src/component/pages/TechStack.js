import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Heading from '../elements/Heading';
import HeadH2 from '../elements/HeadH2';
import Divider from '../elements/Divider';
import ImgSm from '../elements/ImgSm';
import itemData, { otherSkillData } from '../skillsList/Skills';

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
      <img
        className="background"
        src="https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_1280.jpg"
        alt=""
      />
      <Heading text="My tech stack" />
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
