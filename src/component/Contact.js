import { useEffect } from "react";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import { useTranslation } from "react-i18next";
import SecretForm from "./SecretForm";

function Contact({ children }) {
  const { t } = useTranslation();

  useEffect(() => {});

  return (
    <div className=" col-12 ">
      <div className="row justify-content-xl-center mx-0">
        {/* <div className="col-12 col-lg-3 mb-2 mb-lg-0">
          {
            <SecretForm className="btn me-0 me-lg-2 btn btn-bg w-100 border-0">
              <FileDownloadRoundedIcon />
              {t("Download my CV")}
            </SecretForm>
          }
        </div> */}
        <div className="col-12 col-lg-4 mb-2 mb-lg-0">
          <a
            className="me-lg-2 me-lg-4 btn btn-bg w-100 border-0"
            style={{ color: "white", textDecoration: "none" }}
            target="blank"
            href="https://www.linkedin.com/in/ranjeet-kumar-a4a928a9/"
          >
            <LinkedInIcon /> Linkedin
          </a>
        </div>
        <div className="col-12 col-lg-4 mb-2 mb-lg-0">
          <a
            className=" me-lg-2 btn btn-bg w-100 border-0"
            style={{ color: "white", textDecoration: "none" }}
            target="blank"
            href="mailto:ranjeetkumar2311@gmail.com"
          >
            <MarkEmailUnreadIcon /> {t("Email me")}
          </a>
        </div>
        <div className="col-12 col-lg-4 mb-2 mb-lg-0">{children}</div>
      </div>
    </div>
  );
}

export default Contact;
