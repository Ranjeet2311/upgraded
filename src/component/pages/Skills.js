import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Heading from "../elements/Heading";
import HeadH2 from "../elements/HeadH2";
import Paragraph from "../elements/Paragraph";
import Divider from "../elements/Divider";
import ImgSm from "../elements/ImgSm";
import itemData, { otherSkillData } from "../allSkill/Skills";

function Skills() {
  // ---animation

  const up = useRef();

  useEffect(() => {
    gsap.from(up.current, { y: "1000", duration: 1.5 });
  });

  return (
    <div className="skill-wrapper">
      <Heading text="My skills" />
      <HeadH2 text="Please check my projects on GitHub" />
      <Divider />

      <Paragraph text="As a front-end developer these are the tools that I use" />

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
      <div className="skillBox">
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
