import Heading from "../../component/Heading";
import Paragraph from "../../component/Paragraph";
import { experienceData } from "../../data/experienceList";
import ExperienceBlock from "../../component/ExperienceBlock";
import Divider from "../../component/Divider";
import MultiCarousel from "../../component/MultiCarousel";
import { maxOneSlide } from "../../data/Skills";
import { useTranslation } from "react-i18next";
import teamImage from "../../images/x3.jpg";
import dev from "../../images/werdev.jpg";
import devTalk from "../../images/x2.jpg";
import Accordian from "../Accordian";
import { Link } from "react-router-dom";

export default function Experience() {
  const { t } = useTranslation();
  return (
    <div className="container exp_page pt-2">
      <Heading text={`<⚙️${t("Experience")} / >`} />
      <Divider />
      <div className="row d align-items-center mt-4 pt-2 pt-md-4 section-padding-top">
        <div className="col-12">
          {experienceData &&
            experienceData.map((item) => {
              return (
                <div key={item.id}>
                  <Accordian
                    heading={`${t(`${item.title}`)} | ${`${item.duration}`}`}
                    accordianSelect="homeTwo"
                    w-100
                  >
                    <ExperienceBlock
                      title={item.title}
                      responsibilities={item.responsibilities}
                      techs={item.techs}
                      duration={item.duration}
                    />
                  </Accordian>
                </div>
              );
            })}
          <Link className="mt-4" to="/experience">
            <p className="underline">Read more about me...</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
