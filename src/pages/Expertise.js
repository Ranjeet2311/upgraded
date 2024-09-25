import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSkills } from "../store/features/expertiseSlice";
import Heading from "../component/Heading";
import Divider from "../component/Divider";
import ImgSm from "../component/ImgSm";
import Contact from "../component/Contact";
import Accordian from "../component/Accordian";
import StaticModal from "../component/StaticModal";
import ContactForm from "../component/ContactForm";
import { Tabs, Tab, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Metadata from "../component/Metadata";

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
    <>
      <Metadata
        title="Expertise | Ranjeet Kumar"
        description="Discover Ranjeet Kumar's deep expertise in web development, with a focus on front-end technologies like Vue.js, React, and Angular, as well as backend integration using Node.js, PHP and SQL. Learn how his 7.5+ years of experience have driven the development of high-performance, responsive web applications, and how he excels in implementing CI/CD pipelines and leading Agile teams."
      />
      <div className="text-center container px-0 texh_stack section-padding-bottom pt-2">
        <div className="row align-items-center">
          <div className="col-12">
            <Heading text={`<🛡️${t("My tech stack")} / >`} />
            <Divider />
          </div>
          <div className="col-12 col-lg-12 mt-4">
            <h3 className="d-flex justify-content-center py-4 my-2">
              {t(label).toUpperCase()}{" "}
            </h3>
            <div className="row">
              <div className="col-12 col-lg-3 h-100">
                <Box className="experience my-4 d-flex justify-content-center justify-content-lg-start align-items-center flex-column">
                  <Tabs
                    orientation="vertical"
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
                              padding: "10px 20px 10px 10px",
                              minWidth: "50px",
                            }}
                            onClick={() => filterHandler(item.ref)}
                          />
                        );
                      })}
                  </Tabs>
                </Box>
              </div>
              <div className="col-9 skillBox py-1 justify-content-center justify-content-lg-start">
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
          </div>
          <div className="mt-4">
            <Accordian heading={t("Let's Connect")} accordianSelect="techTwo">
              <Contact>
                <StaticModal
                  btnText={t("Message me")}
                  title={t("Sending message to @Ranjeet")}
                >
                  <ContactForm> </ContactForm>
                </StaticModal>
              </Contact>
            </Accordian>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expertise;
