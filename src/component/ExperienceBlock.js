import { useTranslation } from "react-i18next";

function ExperienceBlock({ title, responsibilities, techs, duration }) {
  const { t } = useTranslation();
  return (
    <div className="mt-4 px-3 py-2">
      <h5
        className="fw-bolder text-decoration-underline"
        style={{ color: "#ffffff" }}
      >
        <span className="pe-2">📌</span>
        {t(title)} | {t(duration)} |
      </h5>
      <p className="fw-bold ps-3"> {t("Activities & Responsibilities")}:</p>
      <ul>
        {responsibilities &&
          responsibilities.map((resposibility, i) => {
            return <li key={i}>{t(resposibility)}</li>;
          })}
      </ul>
      {techs && (
        <p if className="fw-bold ps-3">
          {t("Used tech stack")}:
        </p>
      )}
      <ul className="stack-wrap ps-2 pe-0">
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
