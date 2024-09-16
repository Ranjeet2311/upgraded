import { useEffect, useState } from "react";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";

function Contact({ children }) {
  const [showValidation, setShowValidation] = useState(false);
  const [secretCode, setsecretCode] = useState("");
  const [error, setError] = useState(" ");

  function download() {
    setShowValidation(true);
  }

  const secretHandler = (e) => {
    e.preventDefault();

    if (secretCode === "RanCV@123") {
      setTimeout(() => {
        const link = document.createElement("a");
        link.download = `CV_Ranjeet_Kumar.pdf`;
        link.href = "CV_Ranjeet_Kumar.pdf";
        link.click();
        setShowValidation(!showValidation);
      }, 3000);
      setError("");
      e.target.reset();
      setsecretCode("");
    } else {
      setError("Please provide secret code to download my CV");
    }
  };

  const { t } = useTranslation();

  useEffect(() => {});

  return (
    <div className=" col-12 ">
      <div className="row justify-content-xl-center">
        <div className="col-12 col-lg-3 mb-2 mb-lg-0">
          {showValidation &&
            createPortal(
              <div>
                <dialog open className="dialog">
                  <div className="cookies">
                    <form method="dialog" onSubmit={secretHandler}>
                      <div className="d-flex justify-content-between"></div>
                      <div className="row">
                        <div className="col-12">
                          <div className="mb-2">
                            <label
                              htmlFor="exampleFormControlInput1"
                              className="form-label"
                            >
                              Secret code for downloading CV
                            </label>
                            <p
                              className={
                                error ? "text-danger my-4" : "text-success my-4"
                              }
                            >
                              {error
                                ? error
                                : "Thanks for confirming, downloading should start in few seconds. Please check download forlder."}
                            </p>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="secret code"
                              name="secretcode"
                              onChange={(e) => setsecretCode(e.target.value)}
                            />
                          </div>
                          <button className="btn btn-bg me-4 mb-3 mt-2 px-2 py-1 w-100 w-lg-50 border-0 mx-auto">
                            Submit secret code
                          </button>
                          <button
                            className="btn btn-bg me-4 mt-2 px-2 py-1 w-100 w-lg-50 border-0 mx-auto"
                            onClick={() => setShowValidation(!showValidation)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </dialog>
              </div>,
              document.getElementById("cookies")
            )}
          <button
            type="button"
            className="me-2 me-lg-4 btn btn-bg w-100 border-0"
            style={{ color: "white", textDecoration: "none" }}
            onClick={download}
            target="_blank"
          >
            <FileDownloadRoundedIcon />
            {t("Download my CV")}
          </button>
        </div>
        <div className="col-12 col-lg-3 mb-2 mb-lg-0">
          <a
            className="me-2 me-lg-4 btn btn-bg w-100 border-0"
            style={{ color: "white", textDecoration: "none" }}
            target="blank"
            href="https://www.linkedin.com/in/ranjeet-kumar-a4a928a9/"
          >
            <LinkedInIcon /> Linkedin
          </a>
        </div>
        <div className="col-12 col-lg-3 mb-2 mb-lg-0">
          <a
            className="me-2 me-lg-4 btn btn-bg w-100 border-0"
            style={{ color: "white", textDecoration: "none" }}
            target="blank"
            href="mailto:ranjeetkumar2311@gmail.com"
          >
            <MarkEmailUnreadIcon /> {t("Email me")}
          </a>
        </div>
        <div className="col-12 col-lg-3 mb-2 mb-lg-0">{children}</div>
      </div>
    </div>
  );
}

export default Contact;
