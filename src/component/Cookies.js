import React, { useState, useEffect } from "react";
import "../style/cookies.scss";
import cookie_Icon from "../images/cookie-icon.svg";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";

function Cookies({ onConsent }) {
  const [consentGiven, setConsentGiven] = useState(false);
  const { t } = useTranslation();

  function handleConsent() {
    setConsentGiven(true);
    localStorage.setItem("consentGiven", JSON.stringify(true));
    onConsent();
  }

  function initialConsent() {
    const consent = localStorage.getItem("consentGiven");
    if (consent) {
      setConsentGiven(true);
    }
  }

  useEffect(() => {
    initialConsent();
  });

  return createPortal(
    <>
      {!consentGiven && (
        <dialog open className="dialog">
          <div className="cookies">
            <form method="dialog">
              <div className="d-flex justify-content-between">
                <img
                  className="mb-4"
                  loading="lazy"
                  src={cookie_Icon}
                  alt="cookie_Icon"
                  style={{ width: "40px" }}
                />
                <LanguageSwitch />
              </div>
              <h6>{t("cookies")}</h6>
              <div className="row mt-4">
                <div className="col-12 col-md-6 mt-2">
                  <button
                    onClick={handleConsent}
                    className="btn btn-bg px-2 py-1 w-100 w-lg-75 border-0 mx-auto"
                  >
                    {t("Accept all")}
                  </button>
                </div>
                <div className="col-12 col-md-6 mt-2">
                  <button
                    onClick={handleConsent}
                    className="btn btn-bg me-4 px-2 py-1 w-100 w-lg-75 border-0 mx-auto"
                  >
                    {t("Only necessary")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>,
    document.getElementById("cookies")
  );
}

export default Cookies;
