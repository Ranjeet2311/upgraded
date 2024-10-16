import React from "react";
import ContactForm from "../../component/ContactForm";
import { useTranslation } from "react-i18next";
import Heading from "../Heading";
import Divider from "../Divider";
import Panda from "./Panda";

export default function SingleContact() {
  const { t } = useTranslation();
  return (
    <div className="contact">
      <Heading text={t("Let's Connect")} />
      {/* <Heading text={`<⚙️${t("Experience")} / >`} /> */}
      <p className="text-center small-intro colored-text">
        Let's Keep In Touch
      </p>
      <Divider />
      <div className="row contact-inner" id="contact">
        <div className="container">
          <div className="row px-0 position-relative">
            <div className="col-12 col-lg-6 mx-auto form-wrap">
              <h3 className="colored-text">{t("Let's Connect")}</h3>
              <ContactForm />
            </div>
            <Panda />
          </div>
        </div>
      </div>
    </div>
  );
}
