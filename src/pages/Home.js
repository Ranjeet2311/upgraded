import React from "react";
import HeadH1 from "../component/HeadH1";
import Paragraph from "../component/Paragraph";
import backgroundImage from "../images/background.jpg";
import Card from "../component/Card";
import { workWithMe } from "../data/Skills";
import Crousel from "../component/Crousel";
import { sliderImages } from "../data/experienceList";
import Contact from "../component/Contact";
import Accordian from "../component/Accordian";
import StaticModal from "../component/StaticModal";
import ContactForm from "../component/ContactForm";
import Heading from "../component/Heading";
import Divider from "../component/Divider";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="container">
      {/* <img className="background pe-0 ps-0" src={backgroundImage} alt="" /> */}
      <div className="row align-items-center">
        <div className="col-12 col-lg-4 d-flex flex-column align-items-center roaming-img experience">
          <Crousel data={sliderImages} />
        </div>
        <div className="col-12 col-lg-8 right pe-lg-0">
          <HeadH1 text={t("home.greeting")} />
          <div className="experience">
            <Paragraph text={t("home.description.one")} />
            <Paragraph text={t("home.description.two")} />
            <Paragraph text={t("home.description.three")} />
          </div>
        </div>
      </div>
      <div className="mt-3 mb-1 pt-2 pt-md-4">
        <Heading text={`<${t("home.glance")} / >`} />
        <Divider />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mt-4 experience">
        {workWithMe &&
          workWithMe.map((item, i) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <Card
                  title={t(item.title)}
                  list={item.desc}
                  pageLink={item.pageLink}
                  showBtn={true}
                  primeBtnText={t("More Details")}
                  secBtnText={`✅${t("Show more details")}`}
                  type="general"
                />
              </div>
            );
          })}
      </div>
      <div className="row">
        <div className="col-12 mt-4 px-0">
          <Accordian heading={t("Let's Connect")} accordianSelect="homeTwo">
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

export default Home;
