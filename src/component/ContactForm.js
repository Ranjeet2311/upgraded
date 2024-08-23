import React, { useState } from "react";
import { useTranslation } from "react-i18next";
function ContactForm() {
  const [result, setResult] = useState("");

  const { t } = useTranslation();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8f73314e-621e-43c7-bff3-69fa455e78bf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(
        "✅ Yuhoo!! Your message was sent successfully. I'll write back to you ASAP."
      );
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-2">
          <div className="row">
            <div className="col">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                {t("First name")} *
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Bruce"
                name="firstname"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                {t("Last name")} *
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Wayne "
                name="lastname"
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            {t("Contact number")}
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="+44 000 000 00"
            name="contact"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            {t("Your email address")} *
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="brucewayne@example.com"
            name="email"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            {t("Subject")} *
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Let's work together"
            name="topic"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {t("Short description (Optional)")}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="textarea"
          ></textarea>
        </div>
        <div className="mb-0">
          <button
            type="submit"
            className="btn btn-bg w-100 border-0 text-white"
          >
            {t("Send")}
          </button>
        </div>
      </form>
      <h5 className="mt-2">
        <span className="text-white h6">{result}</span>
      </h5>
    </div>
  );
}

export default ContactForm;
