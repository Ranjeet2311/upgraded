import React from "react";
import TextsmsIcon from "@mui/icons-material/Textsms";
import "../style/modal.scss";
import { createPortal } from "react-dom";
import capAvatar from "../images/cap_headShot.png";
import chatIcon from "../images/chat.png";

function StaticModal({ id, title, btnText, theme, children }) {
  return (
    <div>
      <button
        type="button"
        className={` ${
          theme === "chat"
            ? "btn btn w-100 text-light"
            : "btn btn btn-bg w-100 text-light px-4 border-0"
        } `}
        data-bs-toggle="modal"
        data-bs-target={`#${id}`}
      >
        <span className="me-1">
          {theme === "general" && null}
          {theme === "" && <TextsmsIcon />}
          {theme === "chat" && (
            <img src={chatIcon} alt="chat" height={70} width={90} />
          )}
        </span>
        {btnText}
      </button>
      {createPortal(
        <div
          className="modal fade"
          id={id}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby={`${id}Label`}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="dot me-3">
                  <img src={capAvatar} alt="head-shot avatar" />
                </div>
                <h1 className="modal-title fs-5" id={`${id}Label`}>
                  {title}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">{children}</div>
            </div>
          </div>
        </div>,
        document.getElementById("modal")
      )}
    </div>
  );
}

export default StaticModal;
