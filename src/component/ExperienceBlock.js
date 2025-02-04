import { useTranslation } from "react-i18next";

function ExperienceBlock({ title, responsibilities, techs, duration }) {
  const { t } = useTranslation();
  return (
    <div className="ExperienceBlock">
      {title && (
        <h3
          className="fw-bolder text-decoration-underline"
          style={{ color: "#ffffff" }}
        >
          <span className="pe-2">📌</span>
          {t(title)} | {t(duration)} |
        </h3>
      )}
      <p className="responsibility-label">
        {t("Activities & Responsibilities")} :
      </p>
      <ul>
        {responsibilities &&
          responsibilities.map((resposibility, i) => {
            return (
              <li className="mb-2 responsibilities" key={i}>
                {t(resposibility)}
              </li>
            );
          })}
      </ul>
      {techs && (
        <p if className="fw-bold ps-3 text-decoration-underline mt-4 mb-2">
          {t("Used tech stack")}:
        </p>
      )}
      <ul className="stack-wrap ps-2 pe-0 mt-3">
        {techs &&
          techs.map((tech, i) => {
            return (
              <li key={i} className="colored-pill">
                {tech}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ExperienceBlock;
