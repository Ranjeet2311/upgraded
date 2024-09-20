import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

export default function SecretForm({ children, className }) {
  const [showValidation, setShowValidation] = useState(false);
  const [secretCode, setsecretCode] = useState("");
  const [error, setError] = useState(" ");

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

  function showSecretForm() {
    setShowValidation(true);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError("");
    }, 4000);

    clearTimeout(timeout);
  }, [error]);

  return (
    <>
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
      {/* <div className={className} onClick={showSecretForm}></div> */}
      <Button className={className} onButtonCLick={showSecretForm}>
        {children}
      </Button>
    </>
  );
}
