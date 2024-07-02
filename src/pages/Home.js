import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import greetingHI from '../images/avatar-second.png';
import greetingNamaste from '../images/avatar-first.png';
import HeadH1 from '../component/HeadH1';
import Heading from '../component/Heading';
import Paragraph from '../component/Paragraph';
import Button from '@mui/material/Button';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import Tooltip from '@mui/material/Tooltip';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import GroupsIcon from '@mui/icons-material/Groups';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import backgroundImage from '../images/background.jpg';

function Home() {
  const [image, setImage] = useState(false);

  // ---animation
  const pop = useRef();
  const leftX = useRef();
  const right = useRef();

  useEffect(() => {
    gsap.from(pop.current, { scale: 1.4 });
    gsap.fromTo(
      leftX.current,
      { x: '-1000', autoAlpha: -1, duration: 2 },
      { x: '0', autoAlpha: 1, duration: 3, ease: 'back' }
    );
    gsap.fromTo(
      right.current,
      { x: '1000', autoAlpha: -1, duration: 3 },
      { x: '0', autoAlpha: 1, duration: 1, ease: 'back' }
    );
  }, []);

  function onDownload() {
    const link = document.createElement('a');
    link.download = `CV_Ranjeet_Kumar.pdf`;
    link.href = 'CV_Ranjeet_Kumar.pdf';
    link.click();
  }

  function imageChangeHandler() {
    setImage(true);
  }

  return (
    <div className="home container">
      <img className="background pe-0 ps-0" src={backgroundImage} alt="" />
      <div className="row ">
        <div
          className=" col-12 col-lg-4 left-side d-flex flex-column align-items-center mt-4"
          ref={leftX}
        >
          {image ? (
            <img src={greetingHI} alt="Greeting-Avatar" />
          ) : (
            <img src={greetingNamaste} alt="Greeting-Avatar" />
          )}
        </div>
        <div
          onMouseEnter={imageChangeHandler}
          className="col-12 col-lg-8 right mt-4 "
          ref={right}
        >
          <HeadH1 text="{ Welcome! I'm Ranjeet }" />
          <div className="experience">
            <Paragraph text="I'm a dynamic individual who seamlessly blends the world of technology with a passion for adventure. As a seasoned software engineer, I've an impressive track record of developing innovative solutions and writing clean, efficient code. But I'm not just confined to the realm of computers." />
            <Paragraph text="A true traveler and explorer at heart I've journeyed across continents, immersing in diverse cultures, and navigating through some of the world’s most breathtaking landscapes. Whether hiking through remote mountain ranges, diving into the depths of the ocean, or exploring bustling urban environments, I bring the same curiosity and problem-solving skills to each new adventure." />
            <Paragraph text="Combining technical expertise with a love for discovery, I continually seeks new horizons, both in the digital world and beyond. This unique blend of experiences not only enriches my professional life but also fuels a profound understanding of the interconnectedness of our world." />
          </div>

          <div className="col mt-4 mb-4 d-flex flex-column align-items-center align-items-lg-start">
            <Heading text="< My Interest />" />
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start  interest-wrap">
              <p className="me-2 me-lg-4 colored-pill">
                <SelfImprovementIcon /> Yoga
              </p>
              <p className="me-2 me-lg-4 colored-pill">
                <SportsMartialArtsIcon /> Martial Arts
              </p>
              <p className="me-2 me-lg-4 colored-pill">
                {' '}
                <PodcastsIcon /> Tech Podcasts
              </p>
              <p className="me-2 me-lg-4 colored-pill">
                <GroupsIcon /> Tech Conferences
              </p>
              <p className="me-2 me-lg-4 colored-pill">
                <YardOutlinedIcon /> Gardening
              </p>
              <p className="me-2 me-lg-4 colored-pill">
                <DirectionsBikeIcon /> Cycling
              </p>
              <p className="me-2 me-lg-4 colored-pill">
                <AutoStoriesIcon /> Reading
              </p>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center align-items-lg-start">
            <div className="col mt-4 mb-4">
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
              ref={pop}
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
                onClick={onDownload}
                variant="contained"
                target="_blank"
              >
                <FileDownloadRoundedIcon /> Download my CV
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
