import { useRef, useEffect } from "react";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

function Contact({ children, download }) {
  function download() {
    const link = document.createElement("a");
    link.download = `CV_Ranjeet_Kumar.pdf`;
    link.href = "CV_Ranjeet_Kumar.pdf";
    link.click();
  }
  const popx = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    gsap.from(
      popx.current,
      { scale: 0.4, duration: 1 },
      { scale: 1.4, duration: 4, ease: "back" }
    );
  });

  return (
    <div className=" col-12 ">
      <div className="row justify-content-xl-center">
        <div className="col-12 col-lg-3 mb-2 mb-lg-0">{children}</div>
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
        <div className="col-12 col-lg-3 mb-2 mb-lg-0 d-none d-xl-block">
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
      </div>
    </div>
  );
}

export default Contact;
