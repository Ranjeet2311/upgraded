import React, { useState } from 'react';
import { skillsData } from '../data/Skills';
import Heading from '../component/Heading';
import HeadH2 from '../component/HeadH2';
import Divider from '../component/Divider';
import ImgSm from '../component/ImgSm';
import backgroundImage from '../images/background.jpg';
import Contact from '../component/Contact';
import Accordian from '../component/Accordian';
import StaticModal from '../component/StaticModal';
import ContactForm from '../component/ContactForm';
import { Tabs, Tab, Box } from '@mui/material';

const techCategory = [
  { title: 'Frontend', ref: 'frontend' },
  { title: 'Backend', ref: 'backend' },
  { title: 'Code_management', ref: 'managing' },
  { title: 'Design', ref: 'design' },
  { title: 'CMS', ref: 'cms' },
];

const filteredData = skillsData.filter((item, i) => {
  return item.end === 'frontend';
});

function Expertise() {
  const [value, setValue] = useState(0);
  const [stack, setStack] = useState(filteredData);
  const [stackName, setStackName] = useState('Frontend');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function filterHandler(category) {
    console.log(category);
    console.log('stackName :: ', stackName);
    setStackName(category);
    switch (category) {
      case category:
        const filteredData = skillsData.filter((item, i) => {
          return item.end === category;
        });
        setStack(filteredData);
        break;
      default:
        break;
    }
  }

  return (
    <div className="text-center wrapper container">
      <img className="background" src={backgroundImage} alt="" />
      <Heading text="< 🛡️ My tech stack />" />
      <Divider />
      <Box className="experience my-4 d-flex justify-content-center align-items-center">
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          value={value}
          onChange={handleChange}
          aria-label="scrollable force tabs example"
        >
          {techCategory &&
            techCategory.map((item) => {
              return (
                <Tab
                  label={item.title}
                  style={{
                    color: 'white',
                    padding: '10px 10px',
                    minWidth: '50px',
                  }}
                  onClick={() => filterHandler(item.ref)}
                />
              );
            })}
        </Tabs>
      </Box>
      <div>
        <HeadH2 text={stackName.toUpperCase()} />
        <div className="skillBox experience">
          {stack &&
            stack.map((item) => {
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

export default Expertise;
