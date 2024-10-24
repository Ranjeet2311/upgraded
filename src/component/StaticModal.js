import TextsmsIcon from "@mui/icons-material/Textsms";
import "../style/modal.scss";
import { createPortal } from "react-dom";
// import { useTranslation } from "react-i18next";
import capAvatar from "../images/cap_headShot.png";

function StaticModal({ title, btnText, theme, children }) {
  // const { t } = useTranslation();
  return (
    <div>
      <button
        type="button"
        className="btn btn btn-bg w-100 text-light px-4 border-0"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <span className="me-1">
          {" "}
          {theme === "general" ? null : <TextsmsIcon />}
        </span>
        {btnText}
      </button>
      {createPortal(
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="dot me-3">
                  <img src={capAvatar} alt="head-shot avatar" />
                </div>
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  {title}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body"> {children} </div>
              {/* <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
               */}
            </div>
          </div>
        </div>,
        document.getElementById("modal")
      )}
    </div>
  );
}

export default StaticModal;
