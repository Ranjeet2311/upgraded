import React from "react";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import StaticModal from "./StaticModal";
import { useTranslation } from "react-i18next";

export default function EndorsementBox({
  endorsement: { skill, icon, endorsementBy },
}) {
  const [showPersons, setShowPersons] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div
        className="endorsements"
        onMouseEnter={() => setShowPersons(true)}
        onMouseLeave={() => setShowPersons(false)}
        style={{
          transition: "height 0.6s ease",
        }}
      >
        <div className="top_wrap">
          <div className="skill-img mb-2">
            <img src={process.env.PUBLIC_URL + "/" + icon} alt="" />
          </div>
          <p className="skill"> {skill} </p>
        </div>

        <div className="stats">
          {!showPersons && (
            <>
              <p className="colored-text mt-2">
                {t("Endorsed by")}
                <span className="ms-1">
                  <Typewriter
                    options={{
                      strings: [` ${endorsementBy.length}`],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      pauseFor: 2000,
                    }}
                  />
                </span>
              </p>
            </>
          )}
          {showPersons && (
            <ul className="people">
              <StaticModal
                btnText={`${skill} ${t("See all")}`}
                title={`${skill} ${t("Endorsed by")}`}
                theme="general"
                id={`endorsementModal`}
              >
                {endorsementBy &&
                  endorsementBy.map((people) => (
                    <li key={people.name} className="text-white">
                      <b>{people.name}</b> , <i>{people.position}</i>
                    </li>
                  ))}
              </StaticModal>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
