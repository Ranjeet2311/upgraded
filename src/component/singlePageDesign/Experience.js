import Heading from "../../component/Heading";
import { experienceData } from "../../data/experienceList";
import ExperienceBlock from "../../component/ExperienceBlock";
import Divider from "../../component/Divider";
import { useTranslation } from "react-i18next";
import Accordian from "../Accordian";
import { Link } from "react-router-dom";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

export default function Experience() {
  const { t } = useTranslation();
  return (
    <div className="container exp_section pt-2">
      <Heading text={t("Work History")} />
      {/* <Heading text={`<⚙️${t("Experience")} / >`} /> */}
      <p className="text-center small-intro colored-text">
        {t("My formal Bio Details")}
      </p>
      <Divider />
      <div className="row d justify-content-center align-items-center">
        <div className="col-12 mx-auto border-left experience-wrap">
          {/* <Heading
            className="small-intro colored-text"
            text={t("Work History")}
          />
          <Divider /> */}
          <div className="experience">
            {experienceData &&
              experienceData.map((item) => {
                return (
                  <div key={item.id}>
                    <Accordian
                      heading={`📌 ${t(`${item.title}`)} | ${t(
                        `${item.duration}`
                      )}  `}
                      accordianSelect="homeTwo"
                      w-100
                    >
                      <ExperienceBlock
                        title=""
                        responsibilities={item.responsibilities}
                        techs={item.techs}
                        duration={item.duration}
                      />
                    </Accordian>
                  </div>
                );
              })}
          </div>
        </div>

        <Link className="mt-4 colored-text about-link" to="/experience">
          <button className="btn btn-bg px-4 py-1 colored-pill text-white">
            <ReadMoreIcon /> {t("Read more")}
          </button>
        </Link>
      </div>
    </div>
  );
}
