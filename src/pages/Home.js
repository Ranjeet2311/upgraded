import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import HeadH1 from '../component/HeadH1';
import Heading from '../component/Heading';
import Paragraph from '../component/Paragraph';
import Button from '@mui/material/Button';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import Tooltip from '@mui/material/Tooltip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import backgroundImage from '../images/background.jpg';
import Card from '../component/Card';
import { workWithMe } from '../data/Skills';
import Crousel from '../component/Crousel';
import { sliderImages } from '../data/experienceList';

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

  function download() {
    const link = document.createElement('a');
    link.download = `CV_Ranjeet_Kumar.pdf`;
    link.href = 'CV_Ranjeet_Kumar.pdf';
    link.click();
  }

  return (
    <div className="home container">
      <img className="background pe-0 ps-0" src={backgroundImage} alt="" />
      <div className="row align-items-center">
        <div
          className=" col-12 col-lg-4 left-side d-flex flex-column align-items-center experience-img"
          ref={left}
        >
          <Crousel data={sliderImages} />
        </div>
        <div className="col-12 col-lg-8 right mt-4" ref={right}>
          <HeadH1 text="{👋 Welcome! I'm Ranjeet }" />
          <div className="experience">
            <Paragraph text="I'm a dynamic individual who seamlessly blends the world of technology with a passion for adventure. As a seasoned software engineer, I've an impressive track record of developing innovative solutions and writing clean, efficient code. But I'm not just confined to the realm of computers." />
            <Paragraph text="A true traveler and explorer at heart I've journeyed across continents, immersing in diverse cultures, and navigating through some of the world’s most breathtaking landscapes. Whether hiking through remote mountain ranges, diving into the depths of the ocean, or exploring bustling urban environments, I bring the same curiosity and problem-solving skills to each new adventure." />
            <Paragraph text="Combining technical expertise with a love for discovery, I continually seeks new horizons, both in the digital world and beyond. This unique blend of experiences not only enriches my professional life but also fuels a profound understanding of the interconnectedness of our world." />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-2 mt-lg-4 ">
          <Heading text="Why would you like me to work with you? 🧐" />
          <hr />
        </div>
        <div
          className="row row-cols-1 row-cols-md-3 g-2 d-flex ms-auto me-auto"
          ref={pop}
        >
          {workWithMe &&
            workWithMe.map((item, i) => {
              return (
                <div className="col-12 col-md-6 col-lg-4">
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
          ;
        </div>
        <div className="experience col-12 pb-4 d-flex flex-column align-items-center align-items-lg-center">
          <div className="col mb-4">
            <Heading text="< Let's Connect />" />
            <div className="d-flex flex-wrap ">
              <a
                className="me-2 me-lg-4"
                style={{ color: 'white', textDecoration: 'none' }}
                target="blank"
                href="https://www.linkedin.com/in/ranjeet-kumar-a4a928a9/"
              >
                <LinkedInIcon /> Linkedin
              </a>
              <a
                className="me-2 me-lg-4"
                style={{ color: 'white', textDecoration: 'none' }}
                target="blank"
                href="mailto:ranjeetkumar2311@gmail.com"
              >
                <MarkEmailUnreadIcon /> Write me
              </a>
            </div>
          </div>
          <Tooltip
            className="mt-2"
            title="Download"
            ref={popx}
            classes={{
              tooltip: 'btn-bg text-white',
            }}
          >
            <Button
              style={{
                borderRadius: 8,
                backgroundColor: '#483285',
                padding: '12px 26px',
                fontSize: '18px',
              }}
              className="btn-bg"
              onClick={download}
              variant="contained"
              target="_blank"
            >
              <FileDownloadRoundedIcon />
              Download my CV
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Home;
