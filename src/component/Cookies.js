import React, { useState, useEffect } from "react";
import "../style/cookies.scss";
import cookie_Icon from "../images/cookie-icon.svg";

function Cookies({ onConsent }) {
  const [consentGiven, setConsentGiven] = useState(false);

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

  return (
    <>
      {!consentGiven && (
        <div className="container">
          <dialog open className="cookies p-4">
            <form method="dialog">
              <img
                className="mb-4"
                src={cookie_Icon}
                alt="cookie_Icon"
                style={{ width: "40px" }}
              />
              <h6>
                Our web-app uses cookies to enhance your browsing experience,
                serve personalized content, and analyze our traffic. Cookies are
                small text files that are placed on your device to help us
                understand how you use our site and to improve your experience.
              </h6>
              <div className="row mt-4">
                <div className="col-12 col-md-6">
                  <button className="btn btn-bg me-4 px-2 py-1 w-75 border-0 mx-auto">
                    Deny
                  </button>
                </div>
                <div className="col-12 col-md-6">
                  <button
                    onClick={handleConsent}
                    className="btn btn-bg px-2 py-1 w-75 border-0 mx-auto"
                  >
                    Allow
                  </button>
                </div>
              </div>
            </form>
          </dialog>
        </div>
      )}
    </>
  );
}

export default Cookies;
