import { useState } from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import headShot from "../images/avatar_headShot.png";
import Button from "./Button";

function Card({
  img,
  title,
  code,
  demo,
  tags,
  createdAt,
  description,
  pageLink,
  showBtn,
  list,
  secBtnText,
  primeBtnText,
  type,
}) {
  const [hide, setHide] = useState(false);
  const stack = tags && tags.slice(0, 2);
  const date = moment(createdAt, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format(
    "DD MMMM YYYY"
  );
  const { t } = useTranslation();

  const shortDescription = description && description.substr(0, 80) + ".....";

  return (
    <div
      className="card h-100"
      onMouseEnter={() => setHide(true)}
      onMouseLeave={() => {
        setHide(false);
      }}
    >
      {img && (
        <div className="img-wrap">
          <img
            src={process.env.PUBLIC_URL + "/" + img}
            className="card-img-top"
            alt={title}
            loading="lazy"
          />
        </div>
      )}
      <div className="card-body pb-0">
        <h5 className="card-title text-dark d-flex align-items-center mb-1">
          <span className={type === "general" ? "inline me-1" : "d-none"}>
            <div className="dot">
              <img src={headShot} alt="head-shot avatar" />
            </div>
          </span>
          {title}
        </h5>
        {/* {createdAt && (
          <p className="created highlight my-0 py-0">
            <span className="me-2"> {t("Last updated")} :</span>
            <span>
              {date !== "Invalid date" ? date : "Checkout github for date"}
            </span>
          </p>
        )} */}
        <p className="description d-flex align-items-center">
          {shortDescription}
          {type === "project" &&
            !shortDescription &&
            "No description available"}
        </p>
        {stack && (
          <div className="row card-stack">
            {stack &&
              stack.map((item, index) => {
                return (
                  <p className="stack-pill" key={index}>
                    {item}
                  </p>
                );
              })}
            {/* {stack && <p className="stack-pill">m..</p>} */}
          </div>
        )}

        {list && (
          <ul className="desc-list pt-2">
            {list &&
              list.map((description, i) => {
                return <li key={i}> {t(description)} </li>;
              })}
          </ul>
        )}
      </div>
      <div className="card-footer border-0 py-2">
        {/* {showBtn && (
            <button
              rel="noreferrer"
              href={demo}
              target="_blank"
              className="btn btn-bg text-light w-100 more card-btns"
              type="button"
            >
              {hide ? secBtnText : primeBtnText}
            </button>
          )} */}
        {showBtn && (
          <Button
            isLInk={true}
            className="w-100 btn btn-bg text-light w-100 more card-btns a"
            link
            to={pageLink}
          >
            {hide ? secBtnText : primeBtnText}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Card;
