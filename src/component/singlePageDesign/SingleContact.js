import React from "react";
import HeadH1 from "../../component/HeadH1";
import Contact from "../../component/Contact";
import StaticModal from "../../component/StaticModal";
import ContactForm from "../../component/ContactForm";
import { useTranslation } from "react-i18next";
import Heading from "../Heading";
import Divider from "../Divider";

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
          <div className="col-12 col-lg-6 mx-auto form-wrap">
            <h3 className="colored-text">{t("Let's Connect")}</h3>
            <ContactForm />
          </div>
          <div className="col-12 mt-4 px-0" id="download">
            {/* <HeadH1>{t("Let's Connect")}</HeadH1> */}

            {/* <div className="mt-4">
              <Contact>
                <StaticModal
                  btnText={t("Message me")}
                  title={t("Sending message to @Ranjeet")}
                >
                  <ContactForm> </ContactForm>
                </StaticModal>
              </Contact>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
