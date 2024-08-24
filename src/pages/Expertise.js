import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSkills } from "../store/features/expertiseSlice";
import Heading from "../component/Heading";
import HeadH2 from "../component/HeadH2";
import Divider from "../component/Divider";
import ImgSm from "../component/ImgSm";
import backgroundImage from "../images/background.jpg";
import Contact from "../component/Contact";
import Accordian from "../component/Accordian";
import StaticModal from "../component/StaticModal";
import ContactForm from "../component/ContactForm";
import { Tabs, Tab, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import coder from "../images/coder.svg";

function Expertise() {
  const [value, setValue] = useState(0);
  const tabChangeHandle = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();
  const { filteredSkills, label, techCategory } = useSelector(
    (state) => state.expertise
  );

  function filterHandler(category) {
    dispatch(filterSkills(category));
  }
  const { t } = useTranslation();

  useEffect(() => {
    switch (label) {
      case "frontend":
        setValue(0);
        break;
      case "backend":
        setValue(1);
        break;
      case "managing":
        setValue(2);
        break;
      case "design":
        setValue(3);
        break;
      case "cms":
        setValue(4);
        break;

      default:
        break;
    }
  }, [label]);

  return (
    <div className="text-center container px-0">
      <div className="row align-items-center">
        <div className="col-12">
          <Heading text={`<🛡️${t("My tech stack")} / >`} />
          <Divider />
        </div>
        <div className="col-12 col-lg-3 me-lg-4">
          <img src={coder} alt="coder" className="header-pic" />
        </div>
        <div className="col-12 col-lg-7 experience">
          <Box className="experience my-4 d-flex justify-content-center justify-content-lg-start align-items-center">
            <Tabs
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              value={value}
              onChange={tabChangeHandle}
              indicatorColor="primary"
              aria-label="scrollable force tabs example"
            >
              {techCategory &&
                techCategory.map((item, i) => {
                  return (
                    <Tab
                      key={i}
                      label={t(item.title)}
                      style={{
                        color: "white",
                        padding: "10px 10px",
                        minWidth: "50px",
                      }}
                      onClick={() => filterHandler(item.ref)}
                    />
                  );
                })}
            </Tabs>
          </Box>
          <h2 className="d-flex justify-content-center justify-content-lg-start ps-lg-3">
            {t(label).toUpperCase()}{" "}
          </h2>
          {/* <HeadH2 text={t(label).toUpperCase()} /> */}
          <div className="skillBox py-1 justify-content-center justify-content-lg-start">
            {filteredSkills &&
              filteredSkills.map((item) => {
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
          <Accordian heading={t("Let's Connect")} accordianSelect="techTwo">
            <Contact>
              <StaticModal title={t("Sending message to @Ranjeet")}>
                <ContactForm> </ContactForm>
              </StaticModal>
            </Contact>
          </Accordian>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
