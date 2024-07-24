import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import HeadH1 from '../component/HeadH1';
import Paragraph from '../component/Paragraph';
import backgroundImage from '../images/background.jpg';
import Card from '../component/Card';
import { workWithMe } from '../data/Skills';
import Crousel from '../component/Crousel';
import { sliderImages } from '../data/experienceList';
import Contact from '../component/Contact';
import Accordian from '../component/Accordian';
import StaticModal from '../component/StaticModal';
import ContactForm from '../component/ContactForm';
import Heading from '../component/Heading';
import Divider from '../component/Divider';

function Home() {
  const pop = useRef();
  const popx = useRef();
  const left = useRef();
  const right = useRef();

  useEffect(() => {
    gsap.from(
      pop.current,
      { scale: 0.4, duration: 1 },
      { scale: 1.4, duration: 2, ease: 'back' }
    );
    gsap.from(
      popx.current,
      { scale: 0.4, duration: 1 },
      { scale: 1.4, duration: 4, ease: 'back' }
    );
    gsap.fromTo(
      left.current,
      { x: '-1000', autoAlpha: -1, duration: 2 },
      { x: '0', autoAlpha: 1, duration: 3, ease: 'back' }
    );
    gsap.fromTo(
      right.current,
      { x: '1000', autoAlpha: -1, duration: 2 },
      { x: '0', autoAlpha: 1, duration: 3, ease: 'back' }
    );
  }, []);

  return (
    <div className="home container">
      <img className="background pe-0 ps-0" src={backgroundImage} alt="" />
      <div className="row align-items-center">
        <div
          className="col-12 col-lg-4 left-side d-flex flex-column align-items-center experience-img experience"
          ref={left}
        >
          <Crousel data={sliderImages} />
        </div>
        <div className="col-12 col-lg-8 right" ref={right}>
          <HeadH1 text="{👋 Welcome! I'm Ranjeet }" />
          <div className="experience">
            <Paragraph text="I'm a dynamic individual who seamlessly blends the world of technology with a passion for adventure. As a seasoned software engineer, I've an impressive track record of developing innovative solutions and writing clean, efficient code. But I'm not just confined to the realm of computers." />
            <Paragraph text="A true traveler and explorer at heart I've journeyed across continents, immersing in diverse cultures, and navigating through some of the world’s most breathtaking landscapes. Whether hiking through remote mountain ranges, diving into the depths of the ocean, or exploring bustling urban environments, I bring the same curiosity and problem-solving skills to each new adventure." />
            <Paragraph text="Combining technical expertise with a love for discovery, I continually seeks new horizons, both in the digital world and beyond. This unique blend of experiences not only enriches my professional life but also fuels a profound understanding of the interconnectedness of our world." />
          </div>
        </div>
      </div>
      <div className="mt-3 mb-1">
        <Heading text="<🧐 information at a glance />" />
        <Divider />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mt-4">
        {workWithMe &&
          workWithMe.map((item, i) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <Card
                  title={item.title}
                  list={item.desc}
                  pageLink={item.pageLink}
                  showBtn={true}
                  primeBtnText="More Details"
                  secBtnText="✅ Show more details"
                  type="general"
                />
              </div>
            );
          })}
      </div>
      <div className="col-12 mt-4">
        <Accordian heading="Let's Connect " accordianSelect="homeTwo">
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

export default Home;
